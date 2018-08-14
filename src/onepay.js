const OnepayDirectQr = require('./onepay-direct-qr');
const OnepayCheckout = require('./onepay-checkout');
const SmartPhone = require('./smartphone');

class Onepay {
  constructor(transaction) {
    this.transaction = transaction;
  }

  static directQr(transaction, htmlTagId) {
    let onepay = new OnepayDirectQr(transaction);
    onepay.drawQrImage(htmlTagId);
  }

  static checkout(options) {
    let checkout = new OnepayCheckout(options);
    checkout.pay();
  }

  drawQrImage(htmlTagId) {
    let onepay = new OnepayDirectQr(this.transaction);
    onepay.drawQrImage(htmlTagId);
  }
}

SmartPhone.userAgent = null;

if (typeof window === 'function' || typeof window === 'object') {
  SmartPhone.setUserAgent(navigator.userAgent);
}

if (typeof exports !== 'undefined') {
  let middleware = function (isMiddleware) {
    isMiddleware = isMiddleware === (void 0) ? true : isMiddleware;

    if (isMiddleware) {
      return function (req, res, next) {

        let userAgent = req.headers['user-agent'] || '';
        SmartPhone.setUserAgent(userAgent);
        req.SmartPhone = SmartPhone;

        if (typeof res.locals === 'function') {
          res.locals({SmartPhone: SmartPhone});
        } else {
          res.locals.SmartPhone = SmartPhone;
        }

        next();
      };
    }

    return SmartPhone;

  };

  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = middleware;
  }
  exports = middleware;
} else {
  this.SmartPhone = SmartPhone;
}

module.exports = Onepay;
