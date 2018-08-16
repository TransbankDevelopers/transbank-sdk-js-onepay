const { MQTTClient, ReceivedMsg } = require('./vendor/mqttclient.js');
const Smartphone = require('./smartphone');

if (!window.console) window.console = {};
if (!window.console.log) {
  window.console.log = function () {
  };
}

// Define our constants
const RESOURCE_URL = 'https://web2desa.test.transbank.cl/tbk-ewallet-payment-login/static/js/onepay-modal-plugin-js';
// Scripts
const CSS_URL = RESOURCE_URL + '/onepay-plugin.css';
// MQTT
const SOCKET_CREDENTIALS_URL = 'https://w7t4h1avwk.execute-api.us-east-2.amazonaws.com/dev/onepayjs/auth/keys';
// OTT
const OTT_EXPIRATION = 10; // En minutos
const OTT_EXPIRATION_ERROR = "La transacción ha expirado";
// Mobile
const ANDROID_STORE_APP_URL = 'PLUGIN_ANDROID_STORE_APP_URL';
const APP_STORE_URL = 'https://itunes.apple.com/cl/app/onepay/id1218407961?mt=8';
// Images
const ANDROID_STORE_IMAGE = RESOURCE_URL + '/img/android.png';
const APP_STORE_IMAGE = RESOURCE_URL + '/img/ios.png';
const ONEPAY_LOGO = RESOURCE_URL + '/img/onepay-logo.png';
const ALERT_IMAGE = RESOURCE_URL + '/img/alert.png';
const ERROR_IMAGE = RESOURCE_URL + '/img/cogs.png';
const LOADING_IMAGE = RESOURCE_URL + '/img/loading.gif';
// Text
const INSTRUCTIONS_QR_HTML = 'Escanea el <span class="onepay-bold">código QR</span> con la<br />app ' +
  '<span class="onepay-bold">OnePay</span> de tu celular';
const INSTRUCTIONS_PIN_HTML = 'Digita tu <span class="onepay-bold">PIN</span> en la aplicación<br />' +
  '<span class="onepay-bold">OnePay</span> de tu celular';
const QR_LEGEND = '<br />Código de compra';
const INSTRUCTIONS_QR_IMAGE = RESOURCE_URL + '/img/onepay-instructions-qr.png';
const INSTRUCTIONS_PIN_IMAGE = RESOURCE_URL + '/img/onepay-instructions-pin.png';
const GO_BACK_TEXT = 'No pagar y volver al comercio';
const DOWNLOAD_APP_HTML = '¿No tienes Onepay?<br />Descarga con tu smartphone';
const BILL_TITLE = 'Pago exitoso';
const BILL_BODY = 'Veamos el comprobante en el sitio<br />web del comercio...';
const BILL_IMAGE = RESOURCE_URL + '/img/bill.png';
const ERROR_TITLE = 'Operación cancelada';
const ERROR_HEADER = 'El pago no pudo ser completado, lo sentimos';
const ERROR_DETAILS = '<ul class="onepay-error-list"><li><div class="bullet"></div>Lorem ipsum dolor sit amet</li>' +
  '<li><div class="bullet"></div>Lorem ipsum dolor sit amet</li><li><div class="bullet"></div>' +
  'Lorem ipsum dolor sit amet</li></ul>';
const ERROR_BODY = '<span class="onepay-bold">Esto pudo ocurrir por los siguientes motivos:</span>' + ERROR_DETAILS;
const ERROR_FOOTER = 'Te recomendamos [texto de ayuda dependiendo del tipo de error y posibles acciones a seguir, ' +
  'ejemplo, "reintentar la compra en unos 15 minutos"]';

let httpRequest;
let availableClasses = ['fade-and-drop'];

// Define our constructor
// Create global element references

class OnepayCheckout {
  constructor() {
    this.modal = null;
    this.overlay = null;
    this.content = null;
    this.total = null;
    this.occ = null;
    this.externalUniqueNumber = null;
    this.ott = null;
    this.qrBase64 = null;
    this.endpoint = null;
    this.callbackUrl = null;
    this.mqttCredentials = null;
    this.countDownDate = null;

    // Determine proper prefix
    this.transitionEnd = transitionSelect();

    // Define option defaults
    let defaults = {
      className: 'fade-and-drop',
      maxWidth: 750,
      minWidth: 750,
      commerceLogo: '',
      payButtonId: 'onepay-button',
      endpoint: '',
      callbackUrl: '',
      currency: 'CLP'
    };

    // Create options by extending defaults with the passed in arguments
    if (arguments[0] && typeof arguments[0] === 'object') {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    if (availableClasses.indexOf(this.options.className) < 0) {
      this.options.className = availableClasses[0];
    }

    importCss.call(this);
  }

  // Public Methods
  closeModal() {
    let _ = this;
    this.modal.className = this.modal.className.replace(' onepay-open', '');
    this.overlay.className = this.overlay.className.replace(' onepay-open', '');
    this.modal.addEventListener(this.transitionEnd, function () {
      _.modal.parentNode.removeChild(_.modal);
    });
    this.overlay.addEventListener(this.transitionEnd, function () {
      if (_.overlay.parentNode) {
        _.overlay.parentNode.removeChild(_.overlay);
      }
    });
  }

  openModal() {
    buildOut.call(this);
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ?
      ' onepay-open onepay-anchored' : ' onepay-open');
    this.overlay.className = this.overlay.className + ' onepay-open';
  }

  pay(params) {
    this.openModal();
    this.endpoint = this.options.endpoint;
    if (this.options.callbackUrl !== null) {
      this.callbackUrl = this.options.callbackUrl;
    }
    getOtt(this, params);
  }
}

// Private Methods

function getOtt(onepay, params) {
  params = prepareOnepayHttpRequestParams(params);
  httpRequest = getHttpRequestInstance();
  httpRequest.onreadystatechange = processOnepayHttpResponse(onepay);
  httpRequest.open('POST', onepay.endpoint);
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send(params);
}

function importCss() {
  let head = document.getElementsByTagName('head')[0];
  let cssNode = document.createElement('link');
  cssNode.type = 'text/css';
  cssNode.rel = 'stylesheet';
  cssNode.href = CSS_URL;
  cssNode.media = 'screen';
  head.appendChild(cssNode);
}

function buildOut() {
  let content, contentHolder, docFrag;

  // Create a DocumentFragment to build with
  docFrag = document.createDocumentFragment();

  // Create modal element
  this.modal = document.createElement('div');
  this.modal.className = 'onepay-modal ' + this.options.className;
  this.modal.style.minWidth = this.options.minWidth + 'px';
  this.modal.style.maxWidth = this.options.maxWidth + 'px';

  // Add overlay
  this.overlay = document.createElement('div');
  this.overlay.className = 'onepay-overlay ' + this.options.className;
  docFrag.appendChild(this.overlay);

  // Create content area and append to modal
  contentHolder = document.createElement('div');
  contentHolder.className = 'onepay-wrapper';

  content = buildContentWrapper();
  this.content = content;
  contentHolder.appendChild(content);
  this.modal.appendChild(contentHolder);

  // Append modal to DocumentFragment
  docFrag.appendChild(this.modal);

  // Append DocumentFragment to body
  document.body.appendChild(docFrag);
}

function buildContentWrapper() {
  let wrapper = createElementWithClass('div', 'onepay-content');
  // Header
  wrapper.appendChild(buildContentHeader());
  // Body
  wrapper.appendChild(buildContentBody());

  return wrapper;
}

function buildContentHeader() {
  let wrapper = createElementWithClass('div', 'onepay-content-header');
  wrapper.id = 'onepay-content-header';
  // Left Section
  let leftSection = createElementWithClass('div', 'onepay-content-header-left-section');
  leftSection.id = 'onepay-content-header-left-section';
  let loadingImage = createElementWithClass('img', 'onepay-loading-image');
  loadingImage.src = LOADING_IMAGE;
  leftSection.appendChild(loadingImage);
  wrapper.appendChild(leftSection);
  // Right Section
  let rightSection = createElementWithClass('div', 'onepay-content-header-right-section');
  let onepayLogoImage = createElementWithClass('img');
  onepayLogoImage.src = ONEPAY_LOGO;
  rightSection.appendChild(onepayLogoImage);
  wrapper.appendChild(rightSection);

  return wrapper;
}

function buildContentBody() {
  let wrapper = createElementWithClass('div', 'onepay-content-body');
  wrapper.id = 'onepay-content-body';
  let loadingImage = createElementWithClass('img', 'onepay-loading-image');
  loadingImage.src = LOADING_IMAGE;
  wrapper.appendChild(loadingImage);

  return wrapper;
}

function updateContentPayment(onepay) {
  updateContentPaymentHeader(onepay);
  updateContentPaymentBody(onepay);
}

function updateContentPaymentHeader(onepay) {
  let wrapper = document.getElementById('onepay-content-header-left-section');
  if (wrapper === null) {
    return false;
  }
  wrapper.innerHTML = '';
  // Commerce Logo
  if (onepay.options.commerceLogo.length > 0) {
    let commerceLogo = createElementWithClass('div', 'onepay-content-header-left-section-commerce-logo');
    let commerceLogoImage = createElementWithClass('img');
    commerceLogoImage.src = onepay.options.commerceLogo;
    commerceLogo.appendChild(commerceLogoImage);
    wrapper.appendChild(commerceLogo);
  }

  // Cart Detail
  let cartDetail = createElementWithClass('div', 'onepay-content-header-left-section-amount');
  let amount = createElementWithClass('span', 'onepay-amount');
  amount.id = 'onepay-amount';
  amount.innerHTML = formatMoney(onepay.total);
  let currency = createElementWithClass('span', 'onepay-currency');
  currency.innerHTML = onepay.options.currency;
  cartDetail.appendChild(amount);
  cartDetail.appendChild(currency);
  wrapper.appendChild(cartDetail);
}

function updateContentPaymentBody(onepay) {
  let wrapper = document.getElementById('onepay-content-body');
  if (wrapper === null) {
    return false;
  }
  wrapper.innerHTML = '';
  // Left Section
  wrapper.appendChild(buildContentPaymentBodyLeftSection(onepay));

  // Right Section
  wrapper.appendChild(buildContentPaymentBodyRightSection(onepay));
}

function buildContentPaymentBodyLeftSection(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-body-left-section');
  // Header
  wrapper.appendChild(buildContentPaymentBodyLeftSectionHeader());

  // Body
  wrapper.appendChild(buildContentPaymentBodyLeftSectionBody());

  // Footer
  wrapper.appendChild(buildContentPaymentBodyLeftSectionFooter(onepay));

  return wrapper;
}

function buildContentPaymentBodyLeftSectionHeader() {
  let wrapper = createElementWithClass('div', 'onepay-content-body-left-section-header');
  let instructions = createElementWithClass('div', 'onepay-content-body-left-section-header-content');
  instructions.innerHTML = INSTRUCTIONS_QR_HTML;
  wrapper.appendChild(instructions);

  return wrapper;
}

function buildContentPaymentBodyLeftSectionBody() {
  let wrapper = createElementWithClass('div', 'onepay-content-body-left-section-body');
  let instructions = createElementWithClass('img');
  instructions.src = INSTRUCTIONS_QR_IMAGE;
  wrapper.appendChild(instructions);

  return wrapper;
}

function buildContentPaymentBodyLeftSectionFooter(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-body-left-section-footer');
  let goBackWrapper = createElementWithClass('div', 'onepay-content-body-left-section-footer-content');
  let goBackArrow = createElementWithClass('span');
  goBackArrow.innerText = '< ';
  goBackWrapper.appendChild(goBackArrow);

  let goBack = document.createElement('a');
  goBack.addEventListener('click', onepay.closeModal.bind(onepay));

  goBack.id = 'onepay-modal-close';
  goBack.href = '#';
  goBack.innerText = GO_BACK_TEXT;
  goBackWrapper.appendChild(goBack);
  wrapper.appendChild(goBackWrapper);

  return wrapper;
}

function buildContentPaymentBodyRightSection(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-body-right-section');
  wrapper.appendChild(buildContentPaymentBodyRightSectionBody(onepay));
  wrapper.appendChild(buildContentPaymentBodyRightSectionFooter());

  return wrapper;
}

function buildContentPaymentBodyRightSectionBody(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-body-right-section-body');
  let content = createElementWithClass('div', 'onepay-content-body-right-section-body-content');
  content.id = 'onepay-qr-target';

  buildQRCode(content, onepay);

  wrapper.appendChild(content);

  return wrapper;
}

function buildQRCode(wrapper, onepay) {
  let qrImage = new Image();
  qrImage.setAttribute('src', ' data:image/png;charset=utf-8;base64,' + onepay.qrBase64);
  wrapper.appendChild(qrImage);

  let textWrapper = createElementWithClass('div', 'onepay-payment-qr-code-text');
  textWrapper.innerHTML = formatOtt(onepay.ott) + '<br />' + QR_LEGEND;
  wrapper.appendChild(textWrapper);
}

function buildContentPaymentBodyRightSectionFooter() {
  let wrapper = createElementWithClass('div', 'onepay-content-body-right-section-footer');
  // Header
  let header = createElementWithClass('div', 'onepay-content-body-right-section-footer-header');
  header.innerHTML = DOWNLOAD_APP_HTML;
  wrapper.appendChild(header);

  // Body
  let body = createElementWithClass('div', 'onepay-content-body-right-section-footer-body');
  // Android
  let androidLink = createElementWithClass('a');
  androidLink.href = ANDROID_STORE_APP_URL;
  let androidImage = createElementWithClass('img');
  androidImage.src = ANDROID_STORE_IMAGE;
  androidLink.appendChild(androidImage);
  body.appendChild(androidLink);

  // IOS
  let iosLink = createElementWithClass('a');
  iosLink.href = APP_STORE_URL;
  let iosImage = createElementWithClass('img');
  iosImage.src = APP_STORE_IMAGE;
  iosLink.appendChild(iosImage);
  body.appendChild(iosLink);

  wrapper.appendChild(body);

  return wrapper;
}

function updateContentAuthorizeBody(onepay) {
  let wrapper = document.getElementById('onepay-content-body');
  if (wrapper === null) {
    return false;
  }
  wrapper.innerHTML = '';
  // Left Section
  wrapper.appendChild(buildContentAuthorizeBodyLeftSection(onepay));

  // Right Section
  wrapper.appendChild(buildContentAuthorizeBodyRightSection(onepay));
}

function buildContentAuthorizeBodyLeftSection(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-body-left-section');
  // Header
  wrapper.appendChild(buildContentAuthorizeBodyLeftSectionHeader());

  // Body
  wrapper.appendChild(buildContentAuthorizeBodyLeftSectionBody());

  // Footer
  wrapper.appendChild(buildContentAuthorizeBodyLeftSectionFooter(onepay));

  return wrapper;
}

function buildContentAuthorizeBodyLeftSectionHeader() {
  let wrapper = createElementWithClass('div', 'onepay-content-body-left-section-header');
  let instructions = createElementWithClass('div', 'onepay-content-body-left-section-header-content');
  instructions.innerHTML = INSTRUCTIONS_PIN_HTML;
  wrapper.appendChild(instructions);

  return wrapper;
}

function buildContentAuthorizeBodyLeftSectionBody() {
  let wrapper = createElementWithClass('div', 'onepay-content-body-left-section-body');
  let instructions = createElementWithClass('img');
  instructions.src = INSTRUCTIONS_PIN_IMAGE;
  wrapper.appendChild(instructions);

  return wrapper;
}

function buildContentAuthorizeBodyLeftSectionFooter(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-body-left-section-footer');
  let goBackWrapper = createElementWithClass('div', 'onepay-content-body-left-section-footer-content');
  let goBackArrow = createElementWithClass('span');
  goBackArrow.innerText = '< ';
  goBackWrapper.appendChild(goBackArrow);

  let goBack = document.createElement('a');
  goBack.addEventListener('click', onepay.closeModal.bind(onepay));

  goBack.id = 'onepay-modal-close';
  goBack.href = '#';
  goBack.innerText = GO_BACK_TEXT;
  goBackWrapper.appendChild(goBack);
  wrapper.appendChild(goBackWrapper);

  return wrapper;
}

function buildContentAuthorizeBodyRightSection(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-body-right-section');
  wrapper.appendChild(buildContentAuthorizeBodyRightSectionBody(onepay));
  wrapper.appendChild(buildContentAuthorizeBodyRightSectionFooter());

  return wrapper;
}

function buildContentAuthorizeBodyRightSectionBody(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-body-right-section-body');
  let content = createElementWithClass('div', 'onepay-content-body-right-section-body-content-loading');
  let loadingImage = createElementWithClass('img', 'onepay-loading-image');
  loadingImage.src = LOADING_IMAGE;
  let countdown = createElementWithClass('div', 'onepay-countdown');
  countdown.id = 'onepay-countdown';
  content.appendChild(loadingImage);
  content.appendChild(countdown);
  wrapper.appendChild(content);

  return wrapper;
}

function buildContentAuthorizeBodyRightSectionFooter() {
  let wrapper = createElementWithClass('div', 'onepay-content-body-right-section-footer');
  // Header
  let header = createElementWithClass('div', 'onepay-content-body-right-section-footer-header');
  header.innerHTML = DOWNLOAD_APP_HTML;
  wrapper.appendChild(header);

  // Body
  let body = createElementWithClass('div', 'onepay-content-body-right-section-footer-body');
  // Android
  let androidLink = createElementWithClass('a');
  androidLink.href = ANDROID_STORE_APP_URL;
  let androidImage = createElementWithClass('img');
  androidImage.src = ANDROID_STORE_IMAGE;
  androidLink.appendChild(androidImage);
  body.appendChild(androidLink);

  // IOS
  let iosLink = createElementWithClass('a');
  iosLink.href = APP_STORE_URL;
  let iosImage = createElementWithClass('img');
  iosImage.src = APP_STORE_IMAGE;
  iosLink.appendChild(iosImage);
  body.appendChild(iosLink);

  wrapper.appendChild(body);

  return wrapper;
}

function updateContentBillBody(onepay) {
  let wrapper = document.getElementById('onepay-content-body');
  if (wrapper === null) {
    return false;
  }
  wrapper.innerHTML = '';
  // Left Section
  wrapper.appendChild(buildContentBillBodyLeftSection(onepay));

  // Right Section
  wrapper.appendChild(buildContentBillBodyRightSection(onepay));
}

function buildContentBillBodyLeftSection(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-bill-body-left-section');
  // Header
  wrapper.appendChild(buildContentBillBodyLeftSectionHeader());

  // Body
  wrapper.appendChild(buildContentBillBodyLeftSectionBody());

  return wrapper;
}

function buildContentBillBodyLeftSectionHeader() {
  let wrapper = createElementWithClass('div', 'onepay-content-bill-body-left-section-header');
  let title = createElementWithClass('div', 'onepay-content-bill-body-left-section-header-title');
  title.innerHTML = BILL_TITLE;
  let body = createElementWithClass('div', 'onepay-content-bill-body-left-section-header-body');
  body.innerHTML = BILL_BODY;
  wrapper.appendChild(title);
  wrapper.appendChild(body);

  return wrapper;
}

function buildContentBillBodyLeftSectionBody() {
  let wrapper = createElementWithClass('div', 'onepay-content-bill-body-left-section-body');
  let instructions = createElementWithClass('img');
  instructions.src = BILL_IMAGE;
  wrapper.appendChild(instructions);

  return wrapper;
}

function buildContentBillBodyRightSection(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-bill-body-right-section');
  wrapper.appendChild(buildContentBillBodyRightSectionBody(onepay));

  return wrapper;
}

function buildContentBillBodyRightSectionBody(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-content-bill-body-right-section-body');
  let content = createElementWithClass('div', 'onepay-content-bill-body-right-section-body-content-loading');
  let loadingImage = createElementWithClass('img', 'onepay-loading-image');
  loadingImage.src = LOADING_IMAGE;
  content.appendChild(loadingImage);
  wrapper.appendChild(content);

  return wrapper;
}

function updateContentError(onepay, title, headerHtml, bodyHtml, footerHtml) {
  updateContentErrorHeader(onepay, title);
  updateContentErrorBody(onepay, headerHtml, bodyHtml, footerHtml);
}

function updateContentErrorHeader(onepay, title) {
  let wrapper = document.getElementById('onepay-content-header-left-section');
  if (wrapper === null) {
    return false;
  }
  wrapper.innerHTML = '';
  let errorImage = createElementWithClass('img', 'onepay-error-icon');
  errorImage.src = ALERT_IMAGE;
  let errorTitle = createElementWithClass('div', 'onepay-error-title');
  errorTitle.innerText = title || ERROR_TITLE;
  wrapper.appendChild(errorImage);
  wrapper.appendChild(errorTitle);
}

function updateContentErrorBody(onepay, headerHtml, bodyHtml, footerHtml) {
  let wrapper = document.getElementById('onepay-content-body');
  if (wrapper === null) {
    return false;
  }
  wrapper.innerHTML = '';
  // Left Section
  wrapper.appendChild(buildContentErrorLeftSection(onepay, headerHtml, bodyHtml, footerHtml));

  // Right Section
  wrapper.appendChild(buildContentErrorRightSection(onepay));

  return wrapper;
}

function buildContentErrorLeftSection(onepay, headerHtml, bodyHtml, footerHtml) {
  let wrapper = createElementWithClass('div', 'onepay-error-body-left-section');
  // Header
  let header = createElementWithClass('div', 'onepay-error-body-left-section-header');
  header.innerHTML = headerHtml || ERROR_HEADER;
  wrapper.appendChild(header);
  // Body
  let body = createElementWithClass('div', 'onepay-error-body-left-section-body');
  body.innerHTML = bodyHtml || ERROR_BODY;
  wrapper.appendChild(body);
  // Footer
  let footer = createElementWithClass('div', 'onepay-error-body-left-section-footer');
  footer.innerHTML = footerHtml || ERROR_FOOTER;
  wrapper.appendChild(footer);

  return wrapper;
}

function buildContentErrorRightSection(onepay) {
  let wrapper = createElementWithClass('div', 'onepay-error-body-right-section');
  // Cogs
  let errorImageWrapper = createElementWithClass('div', 'onepay-error-image-wrapper');
  let errorImage = createElementWithClass('img', 'onepay-error-cogs');
  errorImage.src = ERROR_IMAGE;
  errorImageWrapper.appendChild(errorImage);
  wrapper.appendChild(errorImageWrapper);
  // Button
  let acceptButtonWrapper = createElementWithClass('div', 'onepay-error-accept-wrapper');
  let acceptButton = createElementWithClass('div', 'onepay-error-accept-button');
  acceptButton.innerText = 'Entendido';
  acceptButton.addEventListener('click', onepay.closeModal.bind(onepay));
  acceptButtonWrapper.appendChild(acceptButton);
  wrapper.appendChild(acceptButtonWrapper);

  return wrapper;
}

function createElementWithClass(type, clazz) {
  let element = document.createElement(type);
  if (clazz) {
    element.className = clazz;
  }
  return element;
}

function extendDefaults(source, properties) {
  let property;
  for (property in properties) {
    if (properties.hasOwnProperty(property)) {
      source[property] = properties[property];
    }
  }
  return source;
}

function transitionSelect() {
  let el = document.createElement('div');
  if (el.style.WebkitTransition) {
    return 'webkitTransitionEnd';
  }
  if (el.style.OTransition) {
    return 'oTransitionEnd';
  }
  if (el.style.mozTransitionEnd) {
    return 'mozTransitionEnd';
  }
  return 'transitionend';
}

// Http Methods
function getHttpRequestInstance() {
  return new XMLHttpRequest();
}

function prepareOnepayHttpRequestParams(params) {
  let paramsUrl = 'channel=WEB';
  if (typeof Smartphone !== 'undefined' && (Smartphone.isAndroid() || Smartphone.isIOS())) {
    paramsUrl = 'channel=MOBILE';
  }

  if (params && Array.isArray(params)) {
    params.forEach((param) => {
      if (param && param.name && param.value) {
        paramsUrl += '&' + param.name + '=' + param.value;
      }
    });
  }

  return paramsUrl;
}

function processOnepayHttpResponse(onepay) {
  return function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        let data = {};
        try {
          data = JSON.parse(httpRequest.responseText);

          if (data !== null && 'ott' in data && 'occ' in data && 'amount' in data) {
            onepay.total = data.amount;
            onepay.occ = data.occ;
            onepay.ott = data.ott;
            onepay.qrBase64 = data.qrCodeAsBase64 || '';
            onepay.externalUniqueNumber = data.externalUniqueNumber || '';

            if (typeof Smartphone !== 'undefined') {
              // If it's a mobile device, close the modal
              if (Smartphone.isAny()) {
                onepay.closeModal();
              }

              if (Smartphone.isAndroid()) {
                Smartphone.androidContextChange(data.occ);
                return;
              }

              if (Smartphone.isIOS()) {
                Smartphone.iosContextChange(data.occ);
                return;
              }
            }

            onepay.countDownDate = new Date();

            updateContentPayment(onepay);
            let options = {'onepay': onepay};
            getCredentials(options);
          } else {
            updateContentError(onepay);
            console.log('Los datos recibidos no son los requeridos');
          }
        } catch (e) {
          console.log('Falló el parseo de la respuesta');
          console.log(e);
          updateContentError(onepay);
        }
      } else {
        updateContentError(onepay);
        console.log('Hubo un problema con la solicitud HTTP: ' + httpRequest.responseText);
      }
    }
  };
}

function getCredentials(options) {
  httpRequest = getHttpRequestInstance();
  httpRequest.onreadystatechange = processCredentialsHttpResponse(options.onepay);
  httpRequest.open('GET', SOCKET_CREDENTIALS_URL);
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send();
}

function processCredentialsHttpResponse(onepay) {
  return function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        let data = {};
        try {
          data = JSON.parse(httpRequest.responseText);

          if ('iotEndpoint' in data) {
            onepay.mqttCredentials = data;
            connectSocket(onepay);
          } else {
            console.log('No se pudo obtener las credenciales');
          }
        } catch (e) {
          console.log('Falló el parseo de las credenciales');
          console.log(e);
        }
      }
    }
  };
}

function formatMoney(amount) {
  return '$ ' + String(amount).replace(/(.)(?=(\d{3})+$)/g, '$1.');
}

function formatOtt(ott) {
  return String(ott).replace(/(\d{4})(\d{4})/, '$1 - $2');
}

function onepayCountdown(onepay, client) {
  let countDownDate = (onepay.countDownDate || new Date()).getTime() + OTT_EXPIRATION * 60 * 1000;
  let countDownElement = document.getElementById('onepay-countdown');

  let x = setInterval(function (onepay) {
    if (countDownElement.length !== 0) {
      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      countDownElement.innerHTML = addLeadingZeroes(minutes, 2) + ':' + addLeadingZeroes(seconds, 2);

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        client.disconnect();
        return updateContentError(onepay, null, OTT_EXPIRATION_ERROR);
      }
    }
  }, 1000, onepay);
}

function addLeadingZeroes(number, zeroes) {
  if (zeroes === 0) return number;
  let padding = '';
  for (let i = 0; i < zeroes; i++) padding += '0';
  if (number <= (Math.pow(10, zeroes) - 1)) {
    number = (padding + number).slice(-1 * zeroes);
  }
  return number;
}

function contextChange(status, onepay, method) {
  if (!method) {
    method = 'POST';
  }

  let form = document.createElement('form');
  form.method = method;
  form.action = onepay.callbackUrl;
  let occInput = document.createElement('input');
  occInput.type = 'hidden';
  occInput.name = 'occ';
  occInput.value = onepay.occ;
  let etnInput = document.createElement('input');
  etnInput.type = 'hidden';
  etnInput.name = 'externalUniqueNumber';
  etnInput.value = onepay.externalUniqueNumber;
  let statusInput = document.createElement('input');
  statusInput.type = 'hidden';
  statusInput.name = 'status';
  statusInput.value = status;
  let submitInput = document.createElement('input');
  submitInput.type = 'submit';
  submitInput.name = 'submitInput';
  submitInput.value = 'submitInput';
  submitInput.style.display = 'none';

  form.appendChild(occInput);
  form.appendChild(etnInput);
  form.appendChild(statusInput);
  form.appendChild(submitInput);

  document.body.appendChild(form);
  setTimeout(function () {
    onepay.closeModal();
    form.submit();
  }, 5000);
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}

function handleEvents(message, client, onepay) {
  let data = {};
  let status = null;
  let description = null;
  try {
    data = JSON.parse(message.content);
    status = data.status;
    description = data.description;
  } catch (e) {
    console.log('Falló el parseo de la respuesta');
    console.log(e);
  }

  switch (status) {
    // Modal state change
    case 'OTT_ASSIGNED':
      updateContentAuthorizeBody(onepay);
      setTimeout(function () {
        onepayCountdown(onepay, client);
      }, 500);
      break;
    // Context change
    case 'AUTHORIZED':
      updateContentBillBody(onepay);
      contextChange('PRE_AUTHORIZED', onepay, 'GET');
      client.disconnect();
      break;
    case 'REJECTED_BY_USER':
      updateContentError(onepay, null, description);
      client.disconnect();
      break;
    // Error
    case 'AUTHORIZATION_ERROR':
      updateContentError(onepay, null, description);
      client.disconnect();
      break;
    default:
      updateContentError(onepay, null, description);
      client.disconnect();
      break;
  }
}

function connectSocket(onepay) {
  let clientId = uuidv4();
  let options = {
    clientId: clientId,
    endpoint: onepay.mqttCredentials.iotEndpoint,
    regionName: onepay.mqttCredentials.region,
    accessKey: onepay.mqttCredentials.accessKey,
    secretKey: onepay.mqttCredentials.secretKey,
    sessionToken: onepay.mqttCredentials.sessionToken
  };

  let topic = onepay.ott;
  let client = new MQTTClient(options);

  client.on('connectionLost', function () {
    console.log('Connection lost');
  });

  client.on('messageArrived', function (msg) {
    let message = new ReceivedMsg(msg);
    handleEvents(message, client, onepay);
  });

  client.on('connected', function () {
    client.subscribe(String(topic));
  });

  client.on('subscribeFailed', function (e) {
    console.log('subscribeFailed ' + e);
    updateContentError(onepay);
  });

  client.on('subscribeSucess', function () {
    console.log('subscribeSucess');
  });

  client.connect();
}

module.exports = OnepayCheckout;
