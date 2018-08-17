const ANDROID_STORE_APP_PACKAGE = 'cl.ionix.ewallet';
const APP_STORE_URL = 'https://itunes.apple.com/cl/app/onepay/id1218407961?mt=8';

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
      return typeof Smartphone[property] === 'function';
    });

    for (let index in getAllMethods) {
      if (getAllMethods[index] === 'setUserAgent' || getAllMethods[index] === 'getUserAgent' ||
        getAllMethods[index] === 'isAny' || getAllMethods[index] === 'isIOS') {
        continue;
      }
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
    let now = new Date().valueOf();
    setTimeout(function () {
      if (new Date().valueOf() - now > 100) return;
      window.open(APP_STORE_URL, '_self');
    }, 500);

    window.open('onepay://?occ=' + occ, '_self');
  }
}

module.exports = Smartphone;
