class OnepayCheckout {
  static RESOURCE_URL = 'https://web2desa.test.transbank.cl/tbk-ewallet-payment-login/static/js/onepay-modal-plugin-js';

  static ONEPAY_LOGO = OnepayCheckout.RESOURCE_URL + '/img/onepay-logo.png';
  static LOADING_IMAGE = OnepayCheckout.RESOURCE_URL + '/img/loading.gif';
  static CSS_URL = OnepayCheckout.RESOURCE_URL + '/onepay-plugin.css';

  constructor() {
    this.modal = null;
    this.overlay = null;
    this.content = null;

    // Define option defaults
    this.options = {
      className: 'fade-and-drop',
      maxWidth: 750,
      minWidth: 750,
      // commerceLogo: 'img/logo.png',
      payButtonId: 'onepay-button',
      endpoint: '',
      callbackUrl: '',
      currency: 'CLP'
    };

    this.loadCss();
  }

  openModeal() {
    console.log('openModal()');
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

  buildContentWrapper() {
    let wrapper = this.createElementWithClass('div', 'onepay-content');

    // Header
    wrapper.appendChild(this.buildContentHeader());
    // Body
    wrapper.appendChild(this.buildContentBody());

    return wrapper;
  }

  buildContentHeader() {
    let wrapper, rightSection, onepayLogoImage;

    wrapper = this.createElementWithClass('div', 'onepay-content-header');
    wrapper.id = 'onepay-content-header';

    // Left Section
    this.buildContentPaymentHeader(wrapper, this.options);
    // leftSection = this.createElementWithClass('div', 'onepay-content-header-left-section');
    // leftSection.id = 'onepay-content-header-left-section';

    // loadingImage = this.createElementWithClass('img', 'onepay-loading-image');
    // loadingImage.src = OnepayCheckout.LOADING_IMAGE;

    // leftSection.appendChild(loadingImage);

    // wrapper.appendChild(leftSection);

    // Right Section
    rightSection = this.createElementWithClass('div', 'onepay-content-header-right-section');

    onepayLogoImage = this.createElementWithClass('img');
    onepayLogoImage.src = OnepayCheckout.ONEPAY_LOGO;

    rightSection.appendChild(onepayLogoImage);
    wrapper.appendChild(rightSection);

    return wrapper;
  }

  buildContentBody() {
    let wrapper, loadingImage;

    wrapper = this.createElementWithClass('div', 'onepay-content-body');
    wrapper.id = 'onepay-content-body';

    loadingImage = this.createElementWithClass('img', 'onepay-loading-image');
    loadingImage.src = OnepayCheckout.LOADING_IMAGE;

    wrapper.appendChild(loadingImage);

    return wrapper;
  }

  buildContentPaymentHeader(wrapper, options) {
    let loadingImage, leftSection, commerceLogo, commerceLogoImage, cartDetail, amount, currency;

    leftSection = this.createElementWithClass('div', 'onepay-content-header-left-section');
    leftSection.id = 'onepay-content-header-left-section';

    // Commerce Logo
    if (options.commerceLogo) {
      commerceLogo = this.createElementWithClass('div', 'onepay-content-header-left-section-commerce-logo');
      commerceLogoImage = this.createElementWithClass('img');
      commerceLogoImage.src = options.commerceLogo;
      commerceLogo.appendChild(commerceLogoImage);
      leftSection.appendChild(commerceLogo);
    }

    // loading image
    loadingImage = this.createElementWithClass('img', 'onepay-loading-image');
    loadingImage.src = OnepayCheckout.LOADING_IMAGE;
    leftSection.appendChild(loadingImage);

    // Cart Detail
    cartDetail = this.createElementWithClass('div', 'onepay-content-header-left-section-amount');
    amount = this.createElementWithClass('span', 'onepay-amount');
    amount.id = 'onepay-amount';
    // amount.innerHTML = this.formatMoney(options.total);
    currency = this.createElementWithClass('span', 'onepay-currency');
    currency.id = 'onepay-currency';
    // currency.innerHTML = options.currency;
    cartDetail.appendChild(amount);
    cartDetail.appendChild(currency);
    leftSection.appendChild(cartDetail);

    wrapper.appendChild(leftSection);
  }

  updateContentPaymentHeader(options) {
    let wrapper, commerceLogo, commerceLogoImage, cartDetail, amount, currency;

    wrapper = document.getElementById('onepay-content-header-left-section');
    if (wrapper === null) { return false; }
    wrapper.innerHTML = '';
    // Commerce Logo
    commerceLogo = this.createElementWithClass('div', 'onepay-content-header-left-section-commerce-logo');
    commerceLogoImage = this.createElementWithClass('img');
    commerceLogoImage.src = options.commerceLogo;
    commerceLogo.appendChild(commerceLogoImage);
    wrapper.appendChild(commerceLogo);

    // Cart Detail
    cartDetail = this.createElementWithClass('div', 'onepay-content-header-left-section-amount');
    amount = this.createElementWithClass('span', 'onepay-amount');
    amount.id = 'onepay-amount';
    amount.innerHTML = this.formatMoney(options.total);
    currency = this.createElementWithClass('span', 'onepay-currency');
    currency.innerHTML = options.currency;
    cartDetail.appendChild(amount);
    cartDetail.appendChild(currency);
    wrapper.appendChild(cartDetail);

    return wrapper;
  }

  createElementWithClass(type, clazz) {
    let element = document.createElement(type);

    if (clazz) { element.className = clazz; }
    return element;
  }

  loadCss() {
    let head, cssNode;

    head = document.getElementsByTagName('head')[0];
    cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.href = OnepayCheckout.CSS_URL;
    cssNode.media = 'screen';
    head.appendChild(cssNode);
  }

  formatMoney(amount) {
    return '$ ' + String(amount).replace(/(.)(?=(\d{3})+$)/g, '$1.');
  }
}

module.exports = OnepayCheckout;
