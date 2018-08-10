const OnepayDirectQr = require('./onepay-direct-qr');
const OnepayCheckout = require('./onepay-checkout');

class Onepay {
  constructor(transaction) {
    if (transaction) {
      this.transaction = transaction;
    }
  }

  static directQr(transaction, htmlTagId) {
    let onepay = new OnepayDirectQr(transaction);
    onepay.drawQrImage(htmlTagId);
  }

  static checkout(options, params) {
    let checkout = new OnepayCheckout(options);
    checkout.doCheckout(params);
  }

  drawQrImage(htmlTagId) {
    let onepay = new OnepayDirectQr(this.transaction);
    onepay.drawQrImage(htmlTagId);
  }
}

module.exports = Onepay;
