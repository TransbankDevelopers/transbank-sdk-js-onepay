class SmartPhone {
  constructor(obj) {
    if (obj instanceof SmartPhone) {
      return obj;
    }
    if (!(this instanceof SmartPhone)) {
      return new SmartPhone(obj);
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
    return this.getUserAgent().match(/Firefox/i) && (SmartPhone.isAndroid() || SmartPhone.isIOS());
  }

  static isAny() {
    let foundAny = false;
    let getAllMethods = Object.getOwnPropertyNames(SmartPhone).filter(function (property) {
      return typeof SmartPhone[property] === 'function';
    });

    for (let index in getAllMethods) {
      if (getAllMethods[index] === 'setUserAgent' || getAllMethods[index] === 'getUserAgent' ||
        getAllMethods[index] === 'isAny' || getAllMethods[index] === 'isIOS') {
        continue;
      }
      if (SmartPhone[getAllMethods[index]]()) {
        foundAny = true;
        break;
      }
    }
    return foundAny;
  }
}

module.exports = SmartPhone;
