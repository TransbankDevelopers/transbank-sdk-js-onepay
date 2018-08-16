const OnepayDirectQr = require('./onepay-direct-qr');
const OnepayCheckout = require('./onepay-checkout');
const Smartphone = require('./smartphone');

class Onepay {
  constructor(transaction) {
    this.transaction = transaction;
  }

  static directQr(transaction, htmlTagId) {
    let onepay = new OnepayDirectQr(transaction);
    onepay.drawQrImage(htmlTagId);
  }

  static checkout(options, params) {
    let checkout = new OnepayCheckout(options);
    checkout.pay(params);
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

Smartphone.userAgent = null;

if (typeof window === 'function' || typeof window === 'object') {
  Smartphone.setUserAgent(navigator.userAgent);
}

if (typeof exports !== 'undefined') {
  let middleware = function (isMiddleware) {
    isMiddleware = isMiddleware === (void 0) ? true : isMiddleware;

    if (isMiddleware) {
      return function (req, res, next) {

        let userAgent = req.headers['user-agent'] || '';
        Smartphone.setUserAgent(userAgent);
        req.SmartPhone = Smartphone;

        if (typeof res.locals === 'function') {
          res.locals({SmartPhone: Smartphone});
        } else {
          res.locals.SmartPhone = Smartphone;
        }

        next();
      };
    }

    return Smartphone;

  };

  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = middleware;
  }
  exports = middleware;
} else {
  this.Smartphone = Smartphone;
}

module.exports = Onepay;
