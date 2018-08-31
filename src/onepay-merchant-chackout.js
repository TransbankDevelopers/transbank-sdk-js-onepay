import {styles} from 'merchant.css';
const zoid = require('zoid');

// Scripts
const BASE_URL = 'http://192.168.1.104:8081/onepay-sdk-example/';
const IFRAME_PATH = BASE_URL + '/checkout.jsp';

class MerchantCheckout {
  loadIframe(options) {
    // Create a DocumentFragment to build with
    let docFrag = document.createDocumentFragment();

    // Create modal element
    let modal = document.createElement('div');
    modal.className = 'onepay-modal fade-and-drop onepay-open';
    modal.style.minWidth = '750px';
    modal.style.maxWidth = '750px';
    modal.id = 'onepay-modal';

    // Add overlay
    let overlay = document.createElement('div');
    overlay.className = 'onepay-overlay fade-and-drop onepay-open';
    overlay.style = 'position:fixed;height:100vh;';
    overlay.id = 'onepay-overlay';

    let content = document.createElement('div', 'onepay-content');
    content.className = 'onepay-content';
    content.id = 'modal-iframe';

    // Create content area and append to modal
    let contentHolder = document.createElement('div');
    contentHolder.className = 'onepay-wrapper';
    contentHolder.appendChild(content);

    modal.appendChild(contentHolder);

    // Append modal to DocumentFragment
    overlay.appendChild(modal);
    docFrag.appendChild(overlay);

    // Append DocumentFragment to body
    document.body.appendChild(docFrag);

    CheckoutModal.render({
      callback: function (callbackUrl) {
        window.location = callbackUrl;
      },
      options: options,
      closeModal: function () {
        let modal = document.getElementById('onepay-modal');
        let overlay = document.getElementById('onepay-overlay');

        modal.className = modal.className.replace(' onepay-open', '');
        overlay.className = overlay.className.replace(' onepay-open', '');

        modal.addEventListener(transitionSelect(), function () {
          modal.parentNode.removeChild(modal);
        });

        overlay.addEventListener(transitionSelect(), function () {
          if (overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
          }
        });
      }
    }, '#modal-iframe');
  }
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

let CheckoutModal = zoid.create({
  tag: 'onepay-checkout-iframe',
  url: IFRAME_PATH,
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
    }
  }
});

module.exports = MerchantCheckout;
