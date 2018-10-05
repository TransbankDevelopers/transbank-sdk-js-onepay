const OnepayDirectQr = require('./onepay-direct-qr');
const Smartphone = require('./smartphone');
const MerchantCheckout = require('./onepay-merchant-checkout');
const OnepayUtil = require('./onepayutil');

const RESOURCE_URL = 'https://sandbox.ionix.cl/tbk-ewallet-payment-login/static/js/onepay-modal-plugin-js';
const LOADING_IMAGE = RESOURCE_URL + '/img/loading.gif';

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
  let docFrag, overlay;
  params = OnepayUtil.prepareOnepayHttpRequestParams(params);

  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        let data = {};
        try {
          data = JSON.parse(httpRequest.responseText);

          if (data !== null && 'ott' in data && 'occ' in data && 'amount' in data) {
            if (Smartphone.isAndroid()) {
              Smartphone.androidContextChange(data.occ);
            }

            if (Smartphone.isIOS()) {
              Smartphone.iosContextChange(data.occ);
            }

            setTimeout(function () {
              overlay.className = overlay.className.replace(' onepay-open', '');
              overlay.addEventListener(OnepayUtil.transitionSelect(), function () {
                if (overlay.parentNode) {
                  overlay.parentNode.removeChild(overlay);
                }
              });
            }, 5000);
          } else {
            console.log('Los datos recibidos no son los requeridos');
          }
        } catch (e) {
          console.log('Falló el parseo de la respuesta');
          console.log(e);
        }
      } else {
        console.log('Hubo un problema con la solicitud HTTP: ' + httpRequest.responseText);
      }
    }
  };

  httpRequest.open('POST', endpoint);
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send(params);

  overlay = document.createElement('div');
  overlay.className = 'onepay-overlay fade-and-drop onepay-open';
  overlay.style = 'position:fixed;height:100vh;';

  let loadingImage = document.createElement('img');
  loadingImage.className = 'onepay-centered';
  loadingImage.src = LOADING_IMAGE;

  overlay.appendChild(loadingImage);

  docFrag = document.createDocumentFragment();
  docFrag.appendChild(overlay);

  document.body.appendChild(docFrag);
}

Onepay.version = require('onepay-lib-version');

module.exports = Onepay;
