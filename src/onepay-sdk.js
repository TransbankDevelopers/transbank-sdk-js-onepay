const OnepayWebSocket = require('./onepay-websocket.js');
const OnepayCheckout = require('./onepay-ckeckout');

class Onepay {
  constructor(transaction) {
    this.version = '1.1.0';

    if (transaction) {
      this.transaction = transaction;
      this.qrCodeAsBase64 = null;
    }
  }

  drawQrImage(htmlTagId) {
    if (!this.transaction) {
      console.log('transaction does not exist in object param');
      return;
    }
    if (!this.transaction['qrCodeAsBase64']) {
      console.log('qrCodeAsBase64 does not exist in object param');
      return;
    }
    if (!this.transaction['ott']) {
      console.log('ott does not exist in object param');
      return;
    }

    this.qrCodeAsBase64 = this.transaction.qrCodeAsBase64;

    const instance = this;
    let socketSubscribePromise = new Promise((resolve) => {
      let socket = new OnepayWebSocket(instance.transaction);

      socket.connect(() => resolve());
    });

    socketSubscribePromise.then(function () {
      let qrImage = new Image();

      qrImage.src = ' data:image/png;charset=utf-8;base64,' + instance.qrCodeAsBase64;
      let html = document.getElementById(htmlTagId);

      html.innerHTML = '';
      html.appendChild(qrImage);
    });
  }

  doCheckout(options) {
    let checkout = new OnepayCheckout();

    console.log('opening modal');
    checkout.openModeal(options);
    console.log('modal opened');
  }

  version() {
    return this.version;
  }
}

module.exports = Onepay;

