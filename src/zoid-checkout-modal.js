/* eslint-disable no-undef, no-unused-vars */
const zoid = require('zoid');
const Onepay = require('onepay');

var BASE_URL = 'https://unpkg.com/transbank-onepay-frontend-sdk@' + require('onepay-lib-version') + '/html';

/**
 * Util when you need to develop and try on localhost.
 * You need to implement those both function on you page where you are calling Onepay.checkout as follow:
 * <script>
 *  window.developMode = function () { return true; };
 *  window.getbaseurl = function () { return 'http://localhost:8089'; };
 * </script>
 */
if (window.developMode && window.developMode()) {
  if (typeof window.getbaseurl === 'function') {
    BASE_URL = window.getbaseurl();
  } else {
    BASE_URL = '';
  }
}

const IFRAME_PATH = BASE_URL + '/checkout.html';

let CheckoutModal = zoid.create({
  tag: 'onepay-checkout-iframe',
  url: IFRAME_PATH,
  defaultLogLevel: 'error',
  dimensions: {
    width: '750px',
    height: '520px'
  },
  props: {
    callback: {
      type: 'function',
      required: true
    },
    options: {
      type: 'object',
      required: true
    },
    closeModal: {
      type: 'function',
      required: true
    },
    getOtt: {
      type: 'function',
      required: true
    },
    iosContextChange: {
      type: 'function',
      required: true
    },
    androidContextChange: {
      type: 'function',
      required: true
    }
  }
});

module.exports = CheckoutModal;
/* eslint-enable no-undef, no-unused-vars */
