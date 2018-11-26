const OnepayDirectQr = require('./onepay-direct-qr');
const Smartphone = require('./smartphone');
const MerchantCheckout = require('./onepay-merchant-checkout');
const OnepayUtil = require('./onepayutil');

const RESOURCE_URL = 'https://sandbox.ionix.cl/tbk-ewallet-payment-login/static/js/onepay-modal-plugin-js';
const LOADING_IMAGE = RESOURCE_URL + '/img/loading.gif';
const APP_STORE_IMAGE = RESOURCE_URL + '/img/ios.png';
const APP_STORE_URL = 'https://itunes.apple.com/cl/app/onepay-transbank/id1432114499?mt=8';

let loadingImage, appStoreImg;

if (Smartphone.isAny()) {
  loadingImage = document.createElement('img');
  loadingImage.src = LOADING_IMAGE;

  if (Smartphone.isIOS()) {
    appStoreImg = document.createElement('img');
    appStoreImg.src = APP_STORE_IMAGE;
  }
}

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

function generateInstallDialogContent() {
  let containerOverlay = document.createElement('div');
  containerOverlay.style = 'position: relative;top:50%; transform: translateY(-50%); ' +
  'color:white; font-weight:bold; text-align:center;';

  let labelOverlay = document.createElement('div');
  labelOverlay.innerText = "¿No tienes Onepay instalado?";
  labelOverlay.style = "margin-bottom: 20px;";

  appStoreImg.style = 'border-color: white; border-style:solid; border-radius:10px';

  let appStoreLink = document.createElement('a');
  appStoreLink.href = APP_STORE_URL;

  let containerCloseLink = document.createElement('div');
  containerCloseLink.style = "margin-top:40px;";

  let closeOverlayLink = document.createElement('a');
  closeOverlayLink.style = 'color:white; text-decoration: underline;';
  closeOverlayLink.innerText = "Cerrar (X)";

  closeOverlayLink.addEventListener("click", function (event) {
    event.preventDefault();
    let overlay = document.getElementById('onepay-overlay');
    overlay.parentNode.removeChild(overlay);
  });

  containerCloseLink.appendChild(closeOverlayLink);

  appStoreLink.appendChild(appStoreImg);
  containerOverlay.appendChild(labelOverlay);
  containerOverlay.appendChild(appStoreLink);

  containerOverlay.appendChild(containerCloseLink);

  return containerOverlay;
}

function createTransactionByMobile(endpoint, params) {
  let docFrag, overlay, containerOverlay;
  params = OnepayUtil.prepareOnepayHttpRequestParams(params);

  if (Smartphone.isIOS()) {
    containerOverlay = generateInstallDialogContent();
  }

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
              loadingImage.parentNode.removeChild(loadingImage);

              overlay.appendChild(containerOverlay);
              Smartphone.iosContextChange(data.occ);
            } else {
              setTimeout(function () {
                overlay.className = overlay.className.replace(' onepay-open', '');
                overlay.addEventListener(OnepayUtil.transitionSelect(), function () {
                  if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                  }
                });
              }, 5000);
            }
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
  overlay.id = "onepay-overlay";
  overlay.className = 'onepay-overlay fade-and-drop onepay-open';
  overlay.style = 'position:fixed;height:100vh;';

  loadingImage.className = 'onepay-centered';
  loadingImage.id = 'onepay-centered';

  overlay.appendChild(loadingImage);

  docFrag = document.createDocumentFragment();
  docFrag.appendChild(overlay);

  document.body.appendChild(docFrag);
}

Onepay.version = require('onepay-lib-version');

module.exports = Onepay;
