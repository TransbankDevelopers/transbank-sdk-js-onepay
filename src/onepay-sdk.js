const OnepayWebSocket = require('./onepay-websocket.js');

class Onepay {
  constructor(transaction) {
    this.version = '1.0.0';
    this.transaction = transaction;
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
    this.qrCodeAsBase64 = transaction.qrCodeAsBase64;
  }

  drawQrImage(htmlTagId) {
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

  version() {
    return this.version;
  }
}

module.exports = Onepay;

