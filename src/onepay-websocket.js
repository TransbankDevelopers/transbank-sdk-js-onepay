const OnepayUtil = require('./onepayutil.js');
const { MQTTClient, ReceivedMsg } = require('./vendor/mqttclient.js');

function OnepayWebSocket(transaction) {
  this.transaction = transaction;
  this.onepayUtil = new OnepayUtil();

  this.SOCKET_CREDENTIALS_URL = 'https://qml1wjqokl.execute-api.us-east-1.amazonaws.com/prod/onepayjs/auth/keys';

  this.getCredentials = function (callback) {
    let httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          let data = {};

          try {
            data = JSON.parse(httpRequest.responseText);
            callback(data);
          } catch (e) {
            console.log(e);
          }
        }
      }

    };
    httpRequest.open('GET', this.SOCKET_CREDENTIALS_URL);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send();
  };

  this.connect = function (onSubscribe) {
    let onepayWebSocket = this;

    this.getCredentials(function (data) {
      data['clientId'] = onepayWebSocket.onepayUtil.createUuidv4();
      data['endpoint'] = data.iotEndpoint;
      data['regionName'] = data.region;

      let client = new MQTTClient(data);

      client.on('connected', function () {
        client.subscribe(String(onepayWebSocket.transaction.ott));
      });
      client.on('subscribeSucess', function () {
        onSubscribe();
      });
      client.on('messageArrived', function (msg) {
        onepayWebSocket.handleEvents(msg, client, onepayWebSocket.transaction.paymentStatusHandler);
      });
      client.on('connetionLost', function () {
        console.log('websocket has been disconnected');
      });
      client.connect();
    });
  };

  this.handleEvents = function (msg, client, paymentStatusHandler) {
    let message = new ReceivedMsg(msg);
    console.log(message);

    let data = {};
    let status = null;
    // eslint-disable-next-line no-unused-vars
    let description = null;

    try {
      data = JSON.parse(message.content);
      status = data.status;
      // eslint-disable-next-line no-unused-vars
      description = data.description;
    } catch (e) {
      console.log('json parser has failed');
      console.log(e);
    }

    switch (status) {
      case 'OTT_ASSIGNED':
        try {
          paymentStatusHandler.ottAssigned();
        } catch (e) {}
        break;
      case 'AUTHORIZED':
        try {
          paymentStatusHandler.authorized(this.transaction.occ, this.transaction.externalUniqueNumber);
        } catch (e) {}
        client.disconnect();
        break;
      case 'REJECTED_BY_USER':
        try {
          paymentStatusHandler.canceled();
        } catch (e) {}
        client.disconnect();
        break;
      case 'AUTHORIZATION_ERROR':
        try {
          paymentStatusHandler.authorizationError();
        } catch (e) {}
        client.disconnect();
        break;
      default:
        try {
          paymentStatusHandler.unknown();
        } catch (e) {}
        client.disconnect();
        break;
    }
  };
}

module.exports = OnepayWebSocket;
