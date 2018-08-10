const OnepayDirectQr = require('./onepay-direct-qr');
const OnepayCheckout = require('./onepay-checkout');

class Onepay {
  static directQr(transaction, htmlTagId) {
    let onepay = new OnepayDirectQr(transaction);
    onepay.drawQrImage(htmlTagId);
  }

  static checkout(options, params) {
    let checkout = new OnepayCheckout(options);
    checkout.doCheckout(params);
  }
}

module.exports = Onepay;
