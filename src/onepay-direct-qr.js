const OnepayWebSocket = require('./onepay-websocket.js');

class OnepayDirectQr {
  constructor(transaction) {
    this.transaction = transaction;
    this.qrCodeAsBase64 = null;
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

    let socket = new OnepayWebSocket(this.transaction);

    socket.connect(() => {
      let qrImage = new Image();
      qrImage.src = ' data:image/png;charset=utf-8;base64,' + this.qrCodeAsBase64;

      let html = document.getElementById(htmlTagId);
      html.innerHTML = '';
      html.appendChild(qrImage);
    });
  }

  version() {
    return this.version;
  }
}

module.exports = OnepayDirectQr;

