const OnepayDirectQr = require('./onepay-direct-qr');
const Smartphone = require('./smartphone');
const MerchantCheckout = require('./onepay-merchant-checkout');
const OnepayUtil = require('./onepayutil');

class Onepay {
  constructor(transaction) {
    this.transaction = transaction;
  }

  static directQr(transaction, htmlTagId) {
    let onepay = new OnepayDirectQr(transaction);
    onepay.drawQrImage(htmlTagId);
  }

  static checkout(options, params) {
    if (Smartphone.isAny()) {
      console.log('MOBILE!');
      createTransactionByMobile(options.endpoint, params);
      return;
    }

    let merchantCheckout = new MerchantCheckout();
    merchantCheckout.loadIframe(options);
  }

  static isMobile() {
    return Smartphone.isAny();
  }

  static getChannel() {
    if (Onepay.isMobile()) {
      return 'MOBILE';
    }

    return 'WEB';
  }

  static redirectToApp(occ) {
    if (Smartphone.isAny()) {
      if (Smartphone.isAndroid()) {
        Smartphone.androidContextChange(occ);
        return;
      }

      if (Smartphone.isIOS()) {
        Smartphone.iosContextChange(occ);
      }
    }
  }

  drawQrImage(htmlTagId) {
    let onepay = new OnepayDirectQr(this.transaction);
    onepay.drawQrImage(htmlTagId);
  }
}

function createTransactionByMobile(endpoint, params) {
  params = OnepayUtil.prepareOnepayHttpRequestParams(params);
  console.log('params: ' + params);
  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    console.log('DATA READY');
  };
  httpRequest.open('POST', endpoint);
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send(params);
}

Onepay.version = require('onepay-lib-version');

module.exports = Onepay;
