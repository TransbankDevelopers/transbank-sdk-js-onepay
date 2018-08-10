const { Onepay } = require('./onepay-sdk');

class OnepayCheckout {
  static RESOURCE_URL = 'https://web2desa.test.transbank.cl/tbk-ewallet-payment-login/static/js/onepay-modal-plugin-js';

  static ONEPAY_LOGO = OnepayCheckout.RESOURCE_URL + '/img/onepay-logo.png';
  static LOADING_IMAGE = OnepayCheckout.RESOURCE_URL + '/img/loading.gif';
  static CSS_URL = OnepayCheckout.RESOURCE_URL + '/onepay-plugin.css';
  static INSTRUCTIONS_QR_IMAGE = OnepayCheckout.RESOURCE_URL + '/img/onepay-instructions-qr.png';
  static INSTRUCTIONS_QR_HTML = 'Escanea el <span class="onepay-bold">código QR</span> con la<br />' +
    'app <span class="onepay-bold">OnePay</span> de tu celular';
  static GO_BACK_TEXT = 'No pagar y volver al comercio';
  static DOWNLOAD_APP_HTML = '¿No tienes Onepay?<br />Descarga con tu smartphone';
  static ANDROID_STORE_APP_URL = 'PLUGIN_ANDROID_STORE_APP_URL';
  static ANDROID_STORE_IMAGE = OnepayCheckout.RESOURCE_URL + '/img/android.png';
  static APP_STORE_URL = 'https://itunes.apple.com/cl/app/onepay/id1218407961?mt=8';
  static APP_STORE_IMAGE = OnepayCheckout.RESOURCE_URL + '/img/ios.png';

  constructor(options) {
    this.modal = null;
    this.overlay = null;
    this.content = null;

    // Define option defaults
    this.options = {
      className: 'fade-and-drop',
      maxWidth: 750,
      minWidth: 750,
      payButtonId: 'onepay-button',
      endpoint: '',
      callbackUrl: '',
      currency: 'CLP'
    };

    // Create options by extending defaults with the passed in arguments
    if (arguments[0] && typeof arguments[0] === 'object') {
      this.options = OnepayCheckout.extendDefaultOptions(this.options, arguments[0]);
    }

    OnepayCheckout.loadCss();
  }

  doCheckout(params) {
    this.buildOut();
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ?
      ' onepay-open onepay-anchored' : ' onepay-open');
    this.overlay.className = this.overlay.className + ' onepay-open';

    this.transactionCreate(params);
  }

  closeModal() {
    this.modal.parentNode.removeChild(this.modal);
    this.overlay.parentNode.removeChild(this.overlay);
  }

  buildOut() {
    let content, contentHolder;

    // Create modal element
    this.modal = document.createElement('div');
    this.modal.className = 'onepay-modal ' + this.options.className;
    this.modal.style.minWidth = this.options.minWidth + 'px';
    this.modal.style.maxWidth = this.options.maxWidth + 'px';

    // Add overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'onepay-overlay ' + this.options.className;

    // Create content area and append to modal
    contentHolder = document.createElement('div');
    contentHolder.className = 'onepay-wrapper';

    content = this.buildContentWrapper();
    this.content = content;
    contentHolder.appendChild(content);
    this.modal.appendChild(contentHolder);

    // Create a DocumentFragment to build with
    let docFrag = document.createDocumentFragment();
    docFrag.appendChild(this.overlay);
    docFrag.appendChild(this.modal);

    document.body.appendChild(docFrag);
  }

  static extendDefaultOptions(source, properties) {
    let property;

    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }

    return source;
  }

  buildContentWrapper() {
    let wrapper = OnepayCheckout.createElementWithClass('div', 'onepay-content');

    // Header
    wrapper.appendChild(this.buildContentHeader());
    // Body
    wrapper.appendChild(this.buildContentBody());

    return wrapper;
  }

  buildContentHeader() {
    let wrapper, loadingImage, leftSection, rightSection, commerceLogo, commerceLogoImage, onepayLogoImage,
      cartDetail, amount, currency;

    wrapper = OnepayCheckout.createElementWithClass('div', 'onepay-content-header');
    wrapper.id = 'onepay-content-header';

    // make the left section
    leftSection = OnepayCheckout.createElementWithClass('div', 'onepay-content-header-left-section');
    leftSection.id = 'onepay-content-header-left-section';

    // Commerce Logo
    if (this.options.commerceLogo) {
      commerceLogo = OnepayCheckout.createElementWithClass('div', 'onepay-content-header-left-section-commerce-logo');
      commerceLogoImage = OnepayCheckout.createElementWithClass('img');
      commerceLogoImage.src = this.options.commerceLogo;
      commerceLogo.appendChild(commerceLogoImage);
      leftSection.appendChild(commerceLogo);
    }

    // loading image
    loadingImage = OnepayCheckout.createElementWithClass('img', 'onepay-loading-image');
    loadingImage.src = OnepayCheckout.LOADING_IMAGE;
    leftSection.appendChild(loadingImage);

    // Cart Detail
    cartDetail = OnepayCheckout.createElementWithClass('div', 'onepay-content-header-left-section-amount');
    amount = OnepayCheckout.createElementWithClass('span', 'onepay-amount');
    amount.id = 'onepay-amount';
    // amount.innerHTML = this.formatMoney(options.total);
    currency = OnepayCheckout.createElementWithClass('span', 'onepay-currency');
    currency.id = 'onepay-currency';
    // currency.innerHTML = options.currency;
    cartDetail.appendChild(amount);
    cartDetail.appendChild(currency);
    leftSection.appendChild(cartDetail);

    wrapper.appendChild(leftSection);

    // make right section
    rightSection = OnepayCheckout.createElementWithClass('div', 'onepay-content-header-right-section');

    onepayLogoImage = OnepayCheckout.createElementWithClass('img');
    onepayLogoImage.src = OnepayCheckout.ONEPAY_LOGO;

    rightSection.appendChild(onepayLogoImage);
    wrapper.appendChild(rightSection);

    return wrapper;
  }

  buildContentBody() {
    // HEADER-LEFT
    let instructions = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-left-section-header-content');
    instructions.innerHTML = OnepayCheckout.INSTRUCTIONS_QR_HTML;

    let headerLeft = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-left-section-header');
    headerLeft.appendChild(instructions);

    // CONTENT-LEFT
    let image = OnepayCheckout.createElementWithClass('img');
    image.src = OnepayCheckout.INSTRUCTIONS_QR_IMAGE;

    let contentLeft = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-left-section-body');
    contentLeft.appendChild(image);

    // FOOTER-LEFT
    let goBackArrow = OnepayCheckout.createElementWithClass('span');
    goBackArrow.innerText = '< ';

    let goBack = document.createElement('a');
    goBack.addEventListener('click', ()=>{
      console.log('cerrando modal');
      this.closeModal();
    });
    goBack.id = 'onepay-modal-close';
    goBack.href = '#';
    goBack.innerText = OnepayCheckout.GO_BACK_TEXT;

    let goBackWrapper = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-left-section-footer-content');
    goBackWrapper.appendChild(goBackArrow);
    goBackWrapper.appendChild(goBack);

    let footerLeft = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-left-section-footer');
    footerLeft.appendChild(goBackWrapper);

    let bodyLeft = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-left-section');
    bodyLeft.appendChild(headerLeft);
    bodyLeft.appendChild(contentLeft);
    bodyLeft.appendChild(footerLeft);

    // CONTENT-RIGHT
    // loading image
    let loadingImage = OnepayCheckout.createElementWithClass('img', 'onepay-loading-image');
    loadingImage.src = OnepayCheckout.LOADING_IMAGE;

    let qrImage = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-right-section-body-content');
    qrImage.id = 'onepay-qr-target';
    qrImage.appendChild(loadingImage);

    let contentRight = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-right-section-body');
    contentRight.appendChild(qrImage);

    // FOOTER-RIGHT
    let footHead = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-right-section-footer-header');
    footHead.innerHTML = OnepayCheckout.DOWNLOAD_APP_HTML;

    let androidImage = OnepayCheckout.createElementWithClass('img');
    androidImage.src = OnepayCheckout.ANDROID_STORE_IMAGE;

    let androidLink = OnepayCheckout.createElementWithClass('a');
    androidLink.href = OnepayCheckout.ANDROID_STORE_APP_URL;
    androidLink.appendChild(androidImage);

    let iosImage = OnepayCheckout.createElementWithClass('img');
    iosImage.src = OnepayCheckout.APP_STORE_IMAGE;

    let iosLink = OnepayCheckout.createElementWithClass('a');
    iosLink.href = OnepayCheckout.APP_STORE_URL;
    iosLink.appendChild(iosImage);

    let footBody = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-right-section-footer-body');
    footBody.appendChild(androidLink);
    footBody.appendChild(iosLink);

    let footerRight = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-right-section-footer');
    footerRight.appendChild(footHead);
    footerRight.appendChild(footBody);

    let bodyRight = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-right-section');
    bodyRight.appendChild(contentRight);
    bodyRight.appendChild(footerRight);

    let body = OnepayCheckout.createElementWithClass('div', 'onepay-content-body');
    body.id = 'onepay-content-body';
    body.appendChild(bodyLeft);
    body.appendChild(bodyRight);

    return body;
  }

  updateContentPaymentHeader(options) {
    let wrapper, commerceLogo, commerceLogoImage, cartDetail, amount, currency;

    wrapper = document.getElementById('onepay-content-header-left-section');
    if (wrapper === null) { return false; }
    wrapper.innerHTML = '';
    // Commerce Logo
    commerceLogo = OnepayCheckout.createElementWithClass('div', 'onepay-content-header-left-section-commerce-logo');
    commerceLogoImage = OnepayCheckout.createElementWithClass('img');
    commerceLogoImage.src = options.commerceLogo;
    commerceLogo.appendChild(commerceLogoImage);
    wrapper.appendChild(commerceLogo);

    // Cart Detail
    cartDetail = OnepayCheckout.createElementWithClass('div', 'onepay-content-header-left-section-amount');
    amount = OnepayCheckout.createElementWithClass('span', 'onepay-amount');
    amount.id = 'onepay-amount';
    amount.innerHTML = OnepayCheckout.formatMoney(options.total);
    currency = OnepayCheckout.createElementWithClass('span', 'onepay-currency');
    currency.innerHTML = options.currency;
    cartDetail.appendChild(amount);
    cartDetail.appendChild(currency);
    wrapper.appendChild(cartDetail);

    return wrapper;
  }

  static createElementWithClass(type, clazz) {
    let element = document.createElement(type);

    if (clazz) { element.className = clazz; }
    return element;
  }

  static loadCss() {
    let head, cssNode;

    head = document.getElementsByTagName('head')[0];
    cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.href = OnepayCheckout.CSS_URL;
    cssNode.media = 'screen';
    head.appendChild(cssNode);
  }

  static formatMoney(amount) {
    return '$ ' + String(amount).replace(/(.)(?=(\d{3})+$)/g, '$1.');
  }

  transactionCreate(params) {
    if (!this.options.endpoint || this.options.endpoint.length === 0) {
      throw new Error('There is not configured a valid endpoint to create transaction');
    }

    let postParams = '';
    if (params && Array.isArray(params)) {
      params.forEach(function (param) {
        if (param.name && param.value) {
          if (postParams.length > 0) {
            postParams += '&';
          }

          postParams += param.name + '=' + param.value;
        }
      });
    }

    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState === XMLHttpRequest.DONE) {
        if (http.status === 200) {
          let transaction = null;

          try {
            transaction = JSON.parse(http.responseText);
            console.log(transaction);
          } catch (e) {
            console.log(e);
            throw new Error('Response data spected as valid json formart');
          }

          transaction['paymentStatusHandler'] = {
            ottAssigned: function () {
              // callback transacción asinada
              console.log('Transacción asignada.');

            },
            authorized: function (occ, externalUniqueNumber) {
              // callback transacción autorizada
              console.log('occ : ' + occ);
              console.log('externalUniqueNumber : ' + externalUniqueNumber);

              let params = {
                occ: occ,
                externalUniqueNumber: externalUniqueNumber
              };
              console.log(params);

              // let httpUtil = new HttpUtil();
              // httpUtil.sendPostRedirect('./transaction-commit.html', params);
            },
            canceled: function () {
              // callback rejected by user
              console.log('transacción cancelada por el usuario');
              // onepay.drawQrImage('onepay-qr-target');
            },
            authorizationError: function () {
              // cacllback authorization error
              console.log('error de autorizacion');
            },
            unknown: function () {
              // callback to any unknown status recived
              console.log('estado desconocido');
            }
          };

          console.log(transaction);

          // eslint-disable-next-line no-undef
          let onepay = new Onepay(transaction);
          onepay.drawQrImage('onepay-qr-target');
        } else {
          throw new Error('There was a problem on the HTTP request to ' + this.options.endpoint);
        }
      }
    }.bind(this);
    http.open('POST', this.options.endpoint);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.send(postParams);
  }
}

module.exports = OnepayCheckout;
