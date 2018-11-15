const ANDROID_STORE_APP_PACKAGE = 'cl.transbank.onepay';

class Smartphone {
  constructor(obj) {
    if (obj instanceof Smartphone) {
      return obj;
    }
    if (!(this instanceof Smartphone)) {
      return new Smartphone(obj);
    }
    this._wrapped = obj;
  }

  static getUserAgent() {
    return this.userAgent;
  }

  static setUserAgent(userAgent) {
    this.userAgent = userAgent;
  }

  static isAndroid() {
    return this.getUserAgent().match(/Android/i);
  }

  static isIOS() {
    return this.isIPhone() || this.isIPad() || this.isIPod();
  }

  static isIPhone() {
    return this.getUserAgent().match(/iPhone/i);
  }

  static isIPad() {
    return this.getUserAgent().match(/iPad/i);
  }

  static isIPod() {
    return this.getUserAgent().match(/iPod/i);
  }

  static isOpera() {
    return this.getUserAgent().match(/Opera Mini/i);
  }

  // Detectar si es FirefoxMobile
  static isFireFox() {
    return this.getUserAgent().match(/Firefox/i) && (Smartphone.isAndroid() || Smartphone.isIOS());
  }

  static isAny() {
    let foundAny = false;
    let getAllMethods = Object.getOwnPropertyNames(Smartphone).filter(function (property) {
      return (property !== "isAny" && property.indexOf("is") === 0 && typeof Smartphone[property] === 'function');
    });

    // This iteration must be in the traditional way by index, product of an incompatibility with mootools.
    // mootools adds a $family field to the elements of the array, causing an error in the iteration
    for (let index = 0; index < getAllMethods.length; index++) {
      if (Smartphone[getAllMethods[index]]()) {
        foundAny = true;
        break;
      }
    }
    return foundAny;
  }

  static androidContextChange(occ) {
    let appScheme = 'ewallet';
    let appPackage = ANDROID_STORE_APP_PACKAGE;
    let action = appPackage + '.BROWSER_ACTION';

    let fallback = 'market://details?id=' + appPackage;
    let location = 'intent://#Intent' +
      ';scheme=' + appScheme +
      ';action=' + action +
      ';package=' + appPackage +
      ';S.occ=' + occ +
      ';S.browser_fallback_url=' + fallback +
      ';end';
    window.location = location;
  }

  static iosContextChange(occ) {
    document.location = 'onepay://?occ=' + occ;
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

module.exports = Smartphone;
