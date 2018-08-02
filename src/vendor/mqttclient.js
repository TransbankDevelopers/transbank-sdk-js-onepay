/**
 * wrapper of received paho message
 * @class
 * @param {Paho.MQTT.Message} msg
 */

const SigV4Utils = require('./signv4utils.js');
const moment = require('./moment.js');
const Paho = require('./mqttws31');

function ReceivedMsg(msg) {
    this.msg = msg;
    this.content = msg.payloadString;
}

class MQTTClient {
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
  constructor(options) {
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

  }

  disconnect() {
    this.client.disconnect();
  }

  subscribe(topic) {
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
  }

  publish(topic, payload) {
    try {
      var message = new Paho.MQTT.Message(payload);
      message.destinationName = topic;
      this.client.send(message);
    } catch (e) {
      this.emit('publishFailed', e);
    }
  }

  emit(event) {
    var listeners = this.listeners[event];
    if (listeners) {
      var args = Array.prototype.slice.apply(arguments, [1]);
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener.apply(null, args);
      }
    }
  }

  computeUrl() {
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
  }

  connect() {
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
  }

  on(event, handler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(handler);
  }
};

module.exports = { MQTTClient, ReceivedMsg };
