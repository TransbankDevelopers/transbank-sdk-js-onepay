var getRandomValues = require('polyfill-crypto.getrandomvalues');
const Smartphone = require('./smartphone');

class OnepayUtil {

  createUuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
      return (c ^ getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4) .toString(16);
    });
  }

  static prepareOnepayHttpRequestParams(params) {
    let paramsUrl = 'channel=WEB';

    if (Smartphone.isAny()) {
      paramsUrl = 'channel=MOBILE';
    }
    console.log('paramsUrl: ', paramsUrl);

    if (params) {
      paramsUrl += '&' + params.map(function (param) {
        return encodeURIComponent(param.name) + '=' + encodeURIComponent(param.value);
      }).join('&');
    }

    console.log('paramsUrl: ', paramsUrl);
    return paramsUrl;
  }
}

module.exports = OnepayUtil;
