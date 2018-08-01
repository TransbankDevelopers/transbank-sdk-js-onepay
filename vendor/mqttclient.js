/**
 * wrapper of received paho message
 * @class
 * @param {Paho.MQTT.Message} msg
 */
function ReceivedMsg(msg) {
    this.msg = msg;
    this.content = msg.payloadString;
}

/**
 * AWS IOT MQTT Client
 * @class MQTTClient
 * @param {Object} options - the client options
 * @param {string} options.endpoint
 * @param {string} options.regionName
 * @param {string} options.accessKey
 * @param {string} options.secretKey
 * @param {string} options.clientId
 * @param {string} options.sessionToken
 */
function MQTTClient(options) {
    this.options = options;

    this.endpoint = this.computeUrl();
    console.log(this.endpoint);
    this.clientId = options.clientId;
    this.name = this.clientId + '@' + options.endpoint;
    this.connected = false;
    this.client = new Paho.MQTT.Client(this.endpoint, this.clientId);
    this.listeners = {};
    var self = this;
    this.client.onConnectionLost = function () {
        self.emit('connectionLost');
        self.connected = false;
    };
    this.client.onMessageArrived = function (msg) {
        self.emit('messageArrived', msg);
    };
    this.on('connected', function () {
        self.connected = true;
    });
};

/**
 * compute the url for websocket connection
 * @private
 *
 * @method     MQTTClient#computeUrl
 * @return     {string}  the websocket url
 */
MQTTClient.prototype.computeUrl = function () {
    // must use utc time
    var time = moment.utc();
    var dateStamp = time.format('YYYYMMDD');
    var amzdate = dateStamp + 'T' + time.format('HHmmss') + 'Z';
    var service = 'iotdevicegateway';
    var region = this.options.regionName;
    var secretKey = this.options.secretKey;
    var accessKey = this.options.accessKey;
    var algorithm = 'AWS4-HMAC-SHA256';
    var method = 'GET';
    var canonicalUri = '/mqtt';
    var host = this.options.endpoint;

    var credentialScope = dateStamp + '/' + region + '/' + service + '/' + 'aws4_request';
    var canonicalQuerystring = 'X-Amz-Algorithm=AWS4-HMAC-SHA256';
    canonicalQuerystring += '&X-Amz-Credential=' + encodeURIComponent(accessKey + '/' + credentialScope);
    canonicalQuerystring += '&X-Amz-Date=' + amzdate;
    canonicalQuerystring += '&X-Amz-Expires=86400';
    canonicalQuerystring += '&X-Amz-SignedHeaders=host';

    var canonicalHeaders = 'host:' + host + '\n';
    var payloadHash = SigV4Utils.sha256('');
    var canonicalRequest = method + '\n' + canonicalUri + '\n' + canonicalQuerystring + '\n' + canonicalHeaders + '\nhost\n' + payloadHash;

    var stringToSign = algorithm + '\n' + amzdate + '\n' + credentialScope + '\n' + SigV4Utils.sha256(canonicalRequest);
    var signingKey = SigV4Utils.getSignatureKey(secretKey, dateStamp, region, service);
    var signature = SigV4Utils.sign(signingKey, stringToSign);

    canonicalQuerystring += '&X-Amz-Signature=' + signature;
    canonicalQuerystring += '&X-Amz-Security-Token=' + encodeURIComponent(this.options.sessionToken);
    var requestUrl = 'wss://' + host + canonicalUri + '?' + canonicalQuerystring;
    return requestUrl;
};

/**
 * listen to client event, supported events are connected, connectionLost,
 * messageArrived(event parameter is of type Paho.MQTT.Message), publishFailed,
 * subscribeSucess and subscribeFailed
 * @method     MQTTClient#on
 * @param      {string}  event
 * @param      {Function}  handler
 */
MQTTClient.prototype.on = function (event, handler) {
    if (!this.listeners[event]) {
        this.listeners[event] = [];
    }
    this.listeners[event].push(handler);
};

/** emit event
 *
 * @method MQTTClient#emit
 * @param {string}  event
 * @param {...any} args - event parameters
 */
MQTTClient.prototype.emit = function (event) {
    var listeners = this.listeners[event];
    if (listeners) {
        var args = Array.prototype.slice.apply(arguments, [1]);
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            listener.apply(null, args);
        }
    }
};

/**
 * connect to AWS, should call this method before publish/subscribe
 * @method MQTTClient#connect
 */
MQTTClient.prototype.connect = function () {
    var self = this;
    var connectOptions = {
        onSuccess: function () {
            self.emit('connected');
        },
        useSSL: true,
        timeout: 3,
        mqttVersion: 4,
        onFailure: function () {
            self.emit('connectionLost');
        }
    };
    this.client.connect(connectOptions);
};

/**
 * disconnect
 * @method MQTTClient#disconnect
 */
MQTTClient.prototype.disconnect = function () {
    this.client.disconnect();
};

/**
 * publish a message
 * @method     MQTTClient#publish
 * @param      {string}  topic
 * @param      {string}  payload
 */
MQTTClient.prototype.publish = function (topic, payload) {
    try {
        var message = new Paho.MQTT.Message(payload);
        message.destinationName = topic;
        this.client.send(message);
    } catch (e) {
        this.emit('publishFailed', e);
    }
};

/**
 * subscribe to a topic
 * @method     MQTTClient#subscribe
 * @param      {string}  topic
 */
MQTTClient.prototype.subscribe = function (topic) {
    var self = this;
    try {
        this.client.subscribe(topic, {
            onSuccess: function () {
                self.emit('subscribeSucess');
            },
            onFailure: function () {
                self.emit('subscribeFailed');
            }
        });
    } catch (e) {
        this.emit('subscribeFailed', e);
    }
};