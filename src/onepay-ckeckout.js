class OnepayCheckout {
  static RESOURCE_URL = 'https://web2desa.test.transbank.cl/tbk-ewallet-payment-login/static/js/onepay-modal-plugin-js';

  static ONEPAY_LOGO = OnepayCheckout.RESOURCE_URL + '/img/onepay-logo.png';
  static LOADING_IMAGE = OnepayCheckout.RESOURCE_URL + '/img/loading.gif';
  static CSS_URL = OnepayCheckout.RESOURCE_URL + '/onepay-plugin.css';
  static INSTRUCTIONS_QR_IMAGE = OnepayCheckout.RESOURCE_URL + '/img/onepay-instructions-qr.png';
  static INSTRUCTIONS_QR_HTML = 'Escanea el <span class="onepay-bold">código QR</span> con la<br />' +
    'app <span class="onepay-bold">OnePay</span> de tu celular';
  static GO_BACK_TEXT = 'No pagar y volver al comercio';

  constructor() {
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

    OnepayCheckout.loadCss();
  }

  openModeal(options) {
    // Create options by extending defaults with the passed in arguments
    if (arguments[0] && typeof arguments[0] === 'object') {
      this.options = OnepayCheckout.extendDefaultOptions(this.options, arguments[0]);
    }

    this.buildOut();
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ?
      ' onepay-open onepay-anchored' : ' onepay-open');
    this.overlay.className = this.overlay.className + ' onepay-open';
  }

  buildOut() {
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

    content = this.buildContentWrapper();
    this.content = content;
    contentHolder.appendChild(content);
    this.modal.appendChild(contentHolder);

    // Append modal to DocumentFragment
    docFrag.appendChild(this.modal);

    // Append DocumentFragment to body
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

    let bodyRight = OnepayCheckout.createElementWithClass('div', 'onepay-content-body-right-section');
    bodyRight.appendChild(contentRight);

    let body = OnepayCheckout.createElementWithClass('div', 'onepay-content-body');
    body.id = 'onepay-content-body';
    body.appendChild(bodyLeft);
    body.appendChild(bodyRight);

    return body;
  }

  static updateContentPaymentHeader(options) {
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
}

module.exports = OnepayCheckout;
