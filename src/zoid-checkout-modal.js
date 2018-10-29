/* eslint-disable no-undef, no-unused-vars */
const zoid = require('zoid');
const Onepay = require('onepay');

const BASE_URL = 'https://cdn.rawgit.com/TransbankDevelopers/transbank-sdk-js-onepay/v' +
require('onepay-lib-version') + '/html';
// This comment is util on development purposes
// const BASE_URL = 'https://rawgit.com/TransbankDevelopers/transbank-sdk-js-onepay/bug/mobile-chrome-change-to-' +
//   'app-context/html';

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
