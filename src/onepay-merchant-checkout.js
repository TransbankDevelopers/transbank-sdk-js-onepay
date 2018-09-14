/* eslint-disable no-unused-vars */
import {styles} from 'merchant.css';
const CheckoutModal = require('./zoid-checkout-modal');
/* eslint-enable no-unused-vars */
const Smartphone = require('./smartphone');

let httpRequest;

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
      callback: callbackMerchant,
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
      },
      getOtt: getOtt,
      iosContextChange: function (occ) {
        return Smartphone.iosContextChange(occ);
      },
      androidContextChange: function (occ) {
        return Smartphone.androidContextChange(occ);
      }
    }, '#modal-iframe');
  }
}

function callbackMerchant(callbackUrl) {
  window.location = callbackUrl;
}

function getOtt(onepay, params, resultCallback) {
  params = prepareOnepayHttpRequestParams(params);

  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = processOnepayHttpResponse(onepay, resultCallback);
  httpRequest.open('POST', onepay.endpoint);
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send(params);
}

function prepareOnepayHttpRequestParams(params) {
  let paramsUrl = 'channel=WEB';
  if (typeof Smartphone !== 'undefined' && (Smartphone.isAndroid() || Smartphone.isIOS())) {
    paramsUrl = 'channel=MOBILE';
  }

  if (params) {
    paramsUrl += '&' + params.map(function (param) {
      return encodeURIComponent(param.name) + '=' + encodeURIComponent(param.value);
    }).join('&');
  }
  return paramsUrl;
}

function processOnepayHttpResponse(onepay, resultCallback) {
  return function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      resultCallback(onepay, httpRequest.status, httpRequest.responseText);
    }
  };
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

module.exports = MerchantCheckout;
