(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Onepay", [], factory);
	else if(typeof exports === 'object')
		exports["Onepay"] = factory();
	else
		root["Onepay"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/onepay.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mersenne-twister/src/mersenne-twister.js":
/*!***************************************************************!*\
  !*** ./node_modules/mersenne-twister/src/mersenne-twister.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/

/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_seed(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/

var MersenneTwister = function(seed) {
	if (seed == undefined) {
		seed = new Date().getTime();
	}

	/* Period parameters */
	this.N = 624;
	this.M = 397;
	this.MATRIX_A = 0x9908b0df;   /* constant vector a */
	this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
	this.LOWER_MASK = 0x7fffffff; /* least significant r bits */

	this.mt = new Array(this.N); /* the array for the state vector */
	this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */

	if (seed.constructor == Array) {
		this.init_by_array(seed, seed.length);
	}
	else {
		this.init_seed(seed);
	}
}

/* initializes mt[N] with a seed */
/* origin name init_genrand */
MersenneTwister.prototype.init_seed = function(s) {
	this.mt[0] = s >>> 0;
	for (this.mti=1; this.mti<this.N; this.mti++) {
		var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
		this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
		+ this.mti;
		/* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
		/* In the previous versions, MSBs of the seed affect   */
		/* only MSBs of the array mt[].                        */
		/* 2002/01/09 modified by Makoto Matsumoto             */
		this.mt[this.mti] >>>= 0;
		/* for >32 bit machines */
	}
}

/* initialize by an array with array-length */
/* init_key is the array for initializing keys */
/* key_length is its length */
/* slight change for C++, 2004/2/26 */
MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
	var i, j, k;
	this.init_seed(19650218);
	i=1; j=0;
	k = (this.N>key_length ? this.N : key_length);
	for (; k; k--) {
		var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30)
		this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
		+ init_key[j] + j; /* non linear */
		this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
		i++; j++;
		if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
		if (j>=key_length) j=0;
	}
	for (k=this.N-1; k; k--) {
		var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
		this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
		- i; /* non linear */
		this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
		i++;
		if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
	}

	this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
}

/* generates a random number on [0,0xffffffff]-interval */
/* origin name genrand_int32 */
MersenneTwister.prototype.random_int = function() {
	var y;
	var mag01 = new Array(0x0, this.MATRIX_A);
	/* mag01[x] = x * MATRIX_A  for x=0,1 */

	if (this.mti >= this.N) { /* generate N words at one time */
		var kk;

		if (this.mti == this.N+1)  /* if init_seed() has not been called, */
			this.init_seed(5489);  /* a default initial seed is used */

		for (kk=0;kk<this.N-this.M;kk++) {
			y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
			this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
		}
		for (;kk<this.N-1;kk++) {
			y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
			this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
		}
		y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
		this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];

		this.mti = 0;
	}

	y = this.mt[this.mti++];

	/* Tempering */
	y ^= (y >>> 11);
	y ^= (y << 7) & 0x9d2c5680;
	y ^= (y << 15) & 0xefc60000;
	y ^= (y >>> 18);

	return y >>> 0;
}

/* generates a random number on [0,0x7fffffff]-interval */
/* origin name genrand_int31 */
MersenneTwister.prototype.random_int31 = function() {
	return (this.random_int()>>>1);
}

/* generates a random number on [0,1]-real-interval */
/* origin name genrand_real1 */
MersenneTwister.prototype.random_incl = function() {
	return this.random_int()*(1.0/4294967295.0);
	/* divided by 2^32-1 */
}

/* generates a random number on [0,1)-real-interval */
MersenneTwister.prototype.random = function() {
	return this.random_int()*(1.0/4294967296.0);
	/* divided by 2^32 */
}

/* generates a random number on (0,1)-real-interval */
/* origin name genrand_real3 */
MersenneTwister.prototype.random_excl = function() {
	return (this.random_int() + 0.5)*(1.0/4294967296.0);
	/* divided by 2^32 */
}

/* generates a random number on [0,1) with 53-bit resolution*/
/* origin name genrand_res53 */
MersenneTwister.prototype.random_long = function() {
	var a=this.random_int()>>>5, b=this.random_int()>>>6;
	return(a*67108864.0+b)*(1.0/9007199254740992.0);
}

/* These real versions are due to Isaku Wada, 2002/01/09 added */

module.exports = MersenneTwister;


/***/ }),

/***/ "./node_modules/polyfill-crypto.getrandomvalues/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/polyfill-crypto.getrandomvalues/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MersenneTwister = __webpack_require__(/*! mersenne-twister */ "./node_modules/mersenne-twister/src/mersenne-twister.js")

var twister = new MersenneTwister(Math.random()*Number.MAX_SAFE_INTEGER)

module.exports = getRandomValues


function getRandomValues (abv) {
  var l = abv.length
  while (l--) {
    abv[l] = Math.floor(randomFloat() * 256)
  }
  return abv
}

function randomFloat() {
  return twister.random()
}

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/onepay-checkout.js":
/*!********************************!*\
  !*** ./src/onepay-checkout.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! ./vendor/mqttclient.js */ "./src/vendor/mqttclient.js"),
    MQTTClient = _require.MQTTClient,
    ReceivedMsg = _require.ReceivedMsg;

var Smartphone = __webpack_require__(/*! ./smartphone */ "./src/smartphone.js");

if (!window.console) window.console = {};

if (!window.console.log) {
  window.console.log = function () {};
} // Define our constants


var RESOURCE_URL = 'https://web2desa.test.transbank.cl/tbk-ewallet-payment-login/static/js/onepay-modal-plugin-js'; // Scripts

var CSS_URL = RESOURCE_URL + '/onepay-plugin.css'; // MQTT

var SOCKET_CREDENTIALS_URL = 'https://w7t4h1avwk.execute-api.us-east-2.amazonaws.com/dev/onepayjs/auth/keys'; // OTT

var OTT_EXPIRATION = 10; // En minutos

var OTT_EXPIRATION_ERROR = "La transacción ha expirado"; // Mobile

var ANDROID_STORE_APP_URL = 'PLUGIN_ANDROID_STORE_APP_URL';
var APP_STORE_URL = 'https://itunes.apple.com/cl/app/onepay/id1218407961?mt=8'; // Images

var ANDROID_STORE_IMAGE = RESOURCE_URL + '/img/android.png';
var APP_STORE_IMAGE = RESOURCE_URL + '/img/ios.png';
var ONEPAY_LOGO = RESOURCE_URL + '/img/onepay-logo.png';
var ALERT_IMAGE = RESOURCE_URL + '/img/alert.png';
var ERROR_IMAGE = RESOURCE_URL + '/img/cogs.png';
var LOADING_IMAGE = RESOURCE_URL + '/img/loading.gif'; // Text

var INSTRUCTIONS_QR_HTML = 'Escanea el <span class="onepay-bold">código QR</span> con la<br />app ' + '<span class="onepay-bold">OnePay</span> de tu celular';
var INSTRUCTIONS_PIN_HTML = 'Digita tu <span class="onepay-bold">PIN</span> en la aplicación<br />' + '<span class="onepay-bold">OnePay</span> de tu celular';
var QR_LEGEND = '<br />Código de compra';
var INSTRUCTIONS_QR_IMAGE = RESOURCE_URL + '/img/onepay-instructions-qr.png';
var INSTRUCTIONS_PIN_IMAGE = RESOURCE_URL + '/img/onepay-instructions-pin.png';
var GO_BACK_TEXT = 'No pagar y volver al comercio';
var DOWNLOAD_APP_HTML = '¿No tienes Onepay?<br />Descarga con tu smartphone';
var BILL_TITLE = 'Pago exitoso';
var BILL_BODY = 'Veamos el comprobante en el sitio<br />web del comercio...';
var BILL_IMAGE = RESOURCE_URL + '/img/bill.png';
var ERROR_TITLE = 'Operación cancelada';
var ERROR_HEADER = 'El pago no pudo ser completado, lo sentimos';
var ERROR_DETAILS = '<ul class="onepay-error-list"><li><div class="bullet"></div>Lorem ipsum dolor sit amet</li>' + '<li><div class="bullet"></div>Lorem ipsum dolor sit amet</li><li><div class="bullet"></div>' + 'Lorem ipsum dolor sit amet</li></ul>';
var ERROR_BODY = '<span class="onepay-bold">Esto pudo ocurrir por los siguientes motivos:</span>' + ERROR_DETAILS;
var ERROR_FOOTER = 'Te recomendamos [texto de ayuda dependiendo del tipo de error y posibles acciones a seguir, ' + 'ejemplo, "reintentar la compra en unos 15 minutos"]';
var httpRequest;
var availableClasses = ['fade-and-drop']; // Define our constructor
// Create global element references

var OnepayCheckout =
/*#__PURE__*/
function () {
  function OnepayCheckout() {
    _classCallCheck(this, OnepayCheckout);

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
    this.countDownDate = null; // Determine proper prefix

    this.transitionEnd = transitionSelect(); // Define option defaults

    var defaults = {
      className: 'fade-and-drop',
      maxWidth: 750,
      minWidth: 750,
      commerceLogo: '',
      payButtonId: 'onepay-button',
      endpoint: '',
      callbackUrl: '',
      currency: 'CLP'
    }; // Create options by extending defaults with the passed in arguments

    if (arguments[0] && _typeof(arguments[0]) === 'object') {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    if (availableClasses.indexOf(this.options.className) < 0) {
      this.options.className = availableClasses[0];
    }

    importCss.call(this);
  } // Public Methods


  _createClass(OnepayCheckout, [{
    key: "closeModal",
    value: function closeModal() {
      var _ = this;

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
  }, {
    key: "openModal",
    value: function openModal() {
      buildOut.call(this);
      window.getComputedStyle(this.modal).height;
      this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ? ' onepay-open onepay-anchored' : ' onepay-open');
      this.overlay.className = this.overlay.className + ' onepay-open';
    }
  }, {
    key: "pay",
    value: function pay(params) {
      this.openModal();
      this.endpoint = this.options.endpoint;

      if (this.options.callbackUrl !== null) {
        this.callbackUrl = this.options.callbackUrl;
      }

      getOtt(this, params);
    }
  }]);

  return OnepayCheckout;
}(); // Private Methods


function getOtt(onepay, params) {
  params = prepareOnepayHttpRequestParams(params);
  httpRequest = getHttpRequestInstance();
  httpRequest.onreadystatechange = processOnepayHttpResponse(onepay);
  httpRequest.open('POST', onepay.endpoint);
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send(params);
}

function importCss() {
  var head = document.getElementsByTagName('head')[0];
  var cssNode = document.createElement('link');
  cssNode.type = 'text/css';
  cssNode.rel = 'stylesheet';
  cssNode.href = CSS_URL;
  cssNode.media = 'screen';
  head.appendChild(cssNode);
}

function buildOut() {
  var content, contentHolder, docFrag; // Create a DocumentFragment to build with

  docFrag = document.createDocumentFragment(); // Create modal element

  this.modal = document.createElement('div');
  this.modal.className = 'onepay-modal ' + this.options.className;
  this.modal.style.minWidth = this.options.minWidth + 'px';
  this.modal.style.maxWidth = this.options.maxWidth + 'px'; // Add overlay

  this.overlay = document.createElement('div');
  this.overlay.className = 'onepay-overlay ' + this.options.className;
  this.overlay.style = 'position:fixed;height:100vh;'; // Create content area and append to modal

  contentHolder = document.createElement('div');
  contentHolder.className = 'onepay-wrapper';
  content = buildContentWrapper();
  this.content = content;
  contentHolder.appendChild(content);
  this.modal.appendChild(contentHolder); // Append modal to DocumentFragment

  this.overlay.appendChild(this.modal);
  docFrag.appendChild(this.overlay); // Append DocumentFragment to body

  document.body.appendChild(docFrag);
}

function buildContentWrapper() {
  var wrapper = createElementWithClass('div', 'onepay-content'); // Header

  wrapper.appendChild(buildContentHeader()); // Body

  wrapper.appendChild(buildContentBody());
  return wrapper;
}

function buildContentHeader() {
  var wrapper = createElementWithClass('div', 'onepay-content-header');
  wrapper.id = 'onepay-content-header'; // Left Section

  var leftSection = createElementWithClass('div', 'onepay-content-header-left-section');
  leftSection.id = 'onepay-content-header-left-section';
  var loadingImage = createElementWithClass('img', 'onepay-loading-image');
  loadingImage.src = LOADING_IMAGE;
  leftSection.appendChild(loadingImage);
  wrapper.appendChild(leftSection); // Right Section

  var rightSection = createElementWithClass('div', 'onepay-content-header-right-section');
  var onepayLogoImage = createElementWithClass('img');
  onepayLogoImage.src = ONEPAY_LOGO;
  rightSection.appendChild(onepayLogoImage);
  wrapper.appendChild(rightSection);
  return wrapper;
}

function buildContentBody() {
  var wrapper = createElementWithClass('div', 'onepay-content-body');
  wrapper.id = 'onepay-content-body';
  var loadingImage = createElementWithClass('img', 'onepay-loading-image');
  loadingImage.src = LOADING_IMAGE;
  wrapper.appendChild(loadingImage);
  return wrapper;
}

function updateContentPayment(onepay) {
  updateContentPaymentHeader(onepay);
  updateContentPaymentBody(onepay);
}

function updateContentPaymentHeader(onepay) {
  var wrapper = document.getElementById('onepay-content-header-left-section');

  if (wrapper === null) {
    return false;
  }

  wrapper.innerHTML = ''; // Commerce Logo

  if (onepay.options.commerceLogo.length > 0) {
    var commerceLogo = createElementWithClass('div', 'onepay-content-header-left-section-commerce-logo');
    var commerceLogoImage = createElementWithClass('img');
    commerceLogoImage.src = onepay.options.commerceLogo;
    commerceLogo.appendChild(commerceLogoImage);
    wrapper.appendChild(commerceLogo);
  } // Cart Detail


  var cartDetail = createElementWithClass('div', 'onepay-content-header-left-section-amount');
  var amount = createElementWithClass('span', 'onepay-amount');
  amount.id = 'onepay-amount';
  amount.innerHTML = formatMoney(onepay.total);
  var currency = createElementWithClass('span', 'onepay-currency');
  currency.innerHTML = onepay.options.currency;
  cartDetail.appendChild(amount);
  cartDetail.appendChild(currency);
  wrapper.appendChild(cartDetail);
}

function updateContentPaymentBody(onepay) {
  var wrapper = document.getElementById('onepay-content-body');

  if (wrapper === null) {
    return false;
  }

  wrapper.innerHTML = ''; // Left Section

  wrapper.appendChild(buildContentPaymentBodyLeftSection(onepay)); // Right Section

  wrapper.appendChild(buildContentPaymentBodyRightSection(onepay));
}

function buildContentPaymentBodyLeftSection(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-body-left-section'); // Header

  wrapper.appendChild(buildContentPaymentBodyLeftSectionHeader()); // Body

  wrapper.appendChild(buildContentPaymentBodyLeftSectionBody()); // Footer

  wrapper.appendChild(buildContentPaymentBodyLeftSectionFooter(onepay));
  return wrapper;
}

function buildContentPaymentBodyLeftSectionHeader() {
  var wrapper = createElementWithClass('div', 'onepay-content-body-left-section-header');
  var instructions = createElementWithClass('div', 'onepay-content-body-left-section-header-content');
  instructions.innerHTML = INSTRUCTIONS_QR_HTML;
  wrapper.appendChild(instructions);
  return wrapper;
}

function buildContentPaymentBodyLeftSectionBody() {
  var wrapper = createElementWithClass('div', 'onepay-content-body-left-section-body');
  var instructions = createElementWithClass('img');
  instructions.src = INSTRUCTIONS_QR_IMAGE;
  wrapper.appendChild(instructions);
  return wrapper;
}

function buildContentPaymentBodyLeftSectionFooter(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-body-left-section-footer');
  var goBackWrapper = createElementWithClass('div', 'onepay-content-body-left-section-footer-content');
  var goBackArrow = createElementWithClass('span');
  goBackArrow.innerText = '< ';
  goBackWrapper.appendChild(goBackArrow);
  var goBack = document.createElement('a');
  goBack.addEventListener('click', onepay.closeModal.bind(onepay));
  goBack.id = 'onepay-modal-close';
  goBack.href = '#';
  goBack.innerText = GO_BACK_TEXT;
  goBackWrapper.appendChild(goBack);
  wrapper.appendChild(goBackWrapper);
  return wrapper;
}

function buildContentPaymentBodyRightSection(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-body-right-section');
  wrapper.appendChild(buildContentPaymentBodyRightSectionBody(onepay));
  wrapper.appendChild(buildContentPaymentBodyRightSectionFooter());
  return wrapper;
}

function buildContentPaymentBodyRightSectionBody(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-body-right-section-body');
  var content = createElementWithClass('div', 'onepay-content-body-right-section-body-content');
  content.id = 'onepay-qr-target';
  buildQRCode(content, onepay);
  wrapper.appendChild(content);
  return wrapper;
}

function buildQRCode(wrapper, onepay) {
  var qrImage = new Image();
  qrImage.setAttribute('src', ' data:image/png;charset=utf-8;base64,' + onepay.qrBase64);
  wrapper.appendChild(qrImage);
  var textWrapper = createElementWithClass('div', 'onepay-payment-qr-code-text');
  textWrapper.innerHTML = formatOtt(onepay.ott) + '<br />' + QR_LEGEND;
  wrapper.appendChild(textWrapper);
}

function buildContentPaymentBodyRightSectionFooter() {
  var wrapper = createElementWithClass('div', 'onepay-content-body-right-section-footer'); // Header

  var header = createElementWithClass('div', 'onepay-content-body-right-section-footer-header');
  header.innerHTML = DOWNLOAD_APP_HTML;
  wrapper.appendChild(header); // Body

  var body = createElementWithClass('div', 'onepay-content-body-right-section-footer-body'); // Android

  var androidLink = createElementWithClass('a');
  androidLink.href = ANDROID_STORE_APP_URL;
  var androidImage = createElementWithClass('img');
  androidImage.src = ANDROID_STORE_IMAGE;
  androidLink.appendChild(androidImage);
  body.appendChild(androidLink); // IOS

  var iosLink = createElementWithClass('a');
  iosLink.href = APP_STORE_URL;
  var iosImage = createElementWithClass('img');
  iosImage.src = APP_STORE_IMAGE;
  iosLink.appendChild(iosImage);
  body.appendChild(iosLink);
  wrapper.appendChild(body);
  return wrapper;
}

function updateContentAuthorizeBody(onepay) {
  var wrapper = document.getElementById('onepay-content-body');

  if (wrapper === null) {
    return false;
  }

  wrapper.innerHTML = ''; // Left Section

  wrapper.appendChild(buildContentAuthorizeBodyLeftSection(onepay)); // Right Section

  wrapper.appendChild(buildContentAuthorizeBodyRightSection(onepay));
}

function buildContentAuthorizeBodyLeftSection(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-body-left-section'); // Header

  wrapper.appendChild(buildContentAuthorizeBodyLeftSectionHeader()); // Body

  wrapper.appendChild(buildContentAuthorizeBodyLeftSectionBody()); // Footer

  wrapper.appendChild(buildContentAuthorizeBodyLeftSectionFooter(onepay));
  return wrapper;
}

function buildContentAuthorizeBodyLeftSectionHeader() {
  var wrapper = createElementWithClass('div', 'onepay-content-body-left-section-header');
  var instructions = createElementWithClass('div', 'onepay-content-body-left-section-header-content');
  instructions.innerHTML = INSTRUCTIONS_PIN_HTML;
  wrapper.appendChild(instructions);
  return wrapper;
}

function buildContentAuthorizeBodyLeftSectionBody() {
  var wrapper = createElementWithClass('div', 'onepay-content-body-left-section-body');
  var instructions = createElementWithClass('img');
  instructions.src = INSTRUCTIONS_PIN_IMAGE;
  wrapper.appendChild(instructions);
  return wrapper;
}

function buildContentAuthorizeBodyLeftSectionFooter(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-body-left-section-footer');
  var goBackWrapper = createElementWithClass('div', 'onepay-content-body-left-section-footer-content');
  var goBackArrow = createElementWithClass('span');
  goBackArrow.innerText = '< ';
  goBackWrapper.appendChild(goBackArrow);
  var goBack = document.createElement('a');
  goBack.addEventListener('click', onepay.closeModal.bind(onepay));
  goBack.id = 'onepay-modal-close';
  goBack.href = '#';
  goBack.innerText = GO_BACK_TEXT;
  goBackWrapper.appendChild(goBack);
  wrapper.appendChild(goBackWrapper);
  return wrapper;
}

function buildContentAuthorizeBodyRightSection(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-body-right-section');
  wrapper.appendChild(buildContentAuthorizeBodyRightSectionBody(onepay));
  wrapper.appendChild(buildContentAuthorizeBodyRightSectionFooter());
  return wrapper;
}

function buildContentAuthorizeBodyRightSectionBody(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-body-right-section-body');
  var content = createElementWithClass('div', 'onepay-content-body-right-section-body-content-loading');
  var loadingImage = createElementWithClass('img', 'onepay-loading-image');
  loadingImage.src = LOADING_IMAGE;
  var countdown = createElementWithClass('div', 'onepay-countdown');
  countdown.id = 'onepay-countdown';
  content.appendChild(loadingImage);
  content.appendChild(countdown);
  wrapper.appendChild(content);
  return wrapper;
}

function buildContentAuthorizeBodyRightSectionFooter() {
  var wrapper = createElementWithClass('div', 'onepay-content-body-right-section-footer'); // Header

  var header = createElementWithClass('div', 'onepay-content-body-right-section-footer-header');
  header.innerHTML = DOWNLOAD_APP_HTML;
  wrapper.appendChild(header); // Body

  var body = createElementWithClass('div', 'onepay-content-body-right-section-footer-body'); // Android

  var androidLink = createElementWithClass('a');
  androidLink.href = ANDROID_STORE_APP_URL;
  var androidImage = createElementWithClass('img');
  androidImage.src = ANDROID_STORE_IMAGE;
  androidLink.appendChild(androidImage);
  body.appendChild(androidLink); // IOS

  var iosLink = createElementWithClass('a');
  iosLink.href = APP_STORE_URL;
  var iosImage = createElementWithClass('img');
  iosImage.src = APP_STORE_IMAGE;
  iosLink.appendChild(iosImage);
  body.appendChild(iosLink);
  wrapper.appendChild(body);
  return wrapper;
}

function updateContentBillBody(onepay) {
  var wrapper = document.getElementById('onepay-content-body');

  if (wrapper === null) {
    return false;
  }

  wrapper.innerHTML = ''; // Left Section

  wrapper.appendChild(buildContentBillBodyLeftSection(onepay)); // Right Section

  wrapper.appendChild(buildContentBillBodyRightSection(onepay));
}

function buildContentBillBodyLeftSection(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-bill-body-left-section'); // Header

  wrapper.appendChild(buildContentBillBodyLeftSectionHeader()); // Body

  wrapper.appendChild(buildContentBillBodyLeftSectionBody());
  return wrapper;
}

function buildContentBillBodyLeftSectionHeader() {
  var wrapper = createElementWithClass('div', 'onepay-content-bill-body-left-section-header');
  var title = createElementWithClass('div', 'onepay-content-bill-body-left-section-header-title');
  title.innerHTML = BILL_TITLE;
  var body = createElementWithClass('div', 'onepay-content-bill-body-left-section-header-body');
  body.innerHTML = BILL_BODY;
  wrapper.appendChild(title);
  wrapper.appendChild(body);
  return wrapper;
}

function buildContentBillBodyLeftSectionBody() {
  var wrapper = createElementWithClass('div', 'onepay-content-bill-body-left-section-body');
  var instructions = createElementWithClass('img');
  instructions.src = BILL_IMAGE;
  wrapper.appendChild(instructions);
  return wrapper;
}

function buildContentBillBodyRightSection(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-bill-body-right-section');
  wrapper.appendChild(buildContentBillBodyRightSectionBody(onepay));
  return wrapper;
}

function buildContentBillBodyRightSectionBody(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-content-bill-body-right-section-body');
  var content = createElementWithClass('div', 'onepay-content-bill-body-right-section-body-content-loading');
  var loadingImage = createElementWithClass('img', 'onepay-loading-image');
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
  var wrapper = document.getElementById('onepay-content-header-left-section');

  if (wrapper === null) {
    return false;
  }

  wrapper.innerHTML = '';
  var errorImage = createElementWithClass('img', 'onepay-error-icon');
  errorImage.src = ALERT_IMAGE;
  var errorTitle = createElementWithClass('div', 'onepay-error-title');
  errorTitle.innerText = title || ERROR_TITLE;
  wrapper.appendChild(errorImage);
  wrapper.appendChild(errorTitle);
}

function updateContentErrorBody(onepay, headerHtml, bodyHtml, footerHtml) {
  var wrapper = document.getElementById('onepay-content-body');

  if (wrapper === null) {
    return false;
  }

  wrapper.innerHTML = ''; // Left Section

  wrapper.appendChild(buildContentErrorLeftSection(onepay, headerHtml, bodyHtml, footerHtml)); // Right Section

  wrapper.appendChild(buildContentErrorRightSection(onepay));
  return wrapper;
}

function buildContentErrorLeftSection(onepay, headerHtml, bodyHtml, footerHtml) {
  var wrapper = createElementWithClass('div', 'onepay-error-body-left-section'); // Header

  var header = createElementWithClass('div', 'onepay-error-body-left-section-header');
  header.innerHTML = headerHtml || ERROR_HEADER;
  wrapper.appendChild(header); // Body

  var body = createElementWithClass('div', 'onepay-error-body-left-section-body');
  body.innerHTML = bodyHtml || ERROR_BODY;
  wrapper.appendChild(body); // Footer

  var footer = createElementWithClass('div', 'onepay-error-body-left-section-footer');
  footer.innerHTML = footerHtml || ERROR_FOOTER;
  wrapper.appendChild(footer);
  return wrapper;
}

function buildContentErrorRightSection(onepay) {
  var wrapper = createElementWithClass('div', 'onepay-error-body-right-section'); // Cogs

  var errorImageWrapper = createElementWithClass('div', 'onepay-error-image-wrapper');
  var errorImage = createElementWithClass('img', 'onepay-error-cogs');
  errorImage.src = ERROR_IMAGE;
  errorImageWrapper.appendChild(errorImage);
  wrapper.appendChild(errorImageWrapper); // Button

  var acceptButtonWrapper = createElementWithClass('div', 'onepay-error-accept-wrapper');
  var acceptButton = createElementWithClass('div', 'onepay-error-accept-button');
  acceptButton.innerText = 'Entendido';
  acceptButton.addEventListener('click', onepay.closeModal.bind(onepay));
  acceptButtonWrapper.appendChild(acceptButton);
  wrapper.appendChild(acceptButtonWrapper);
  return wrapper;
}

function createElementWithClass(type, clazz) {
  var element = document.createElement(type);

  if (clazz) {
    element.className = clazz;
  }

  return element;
}

function extendDefaults(source, properties) {
  var property;

  for (property in properties) {
    if (properties.hasOwnProperty(property)) {
      source[property] = properties[property];
    }
  }

  return source;
}

function transitionSelect() {
  var el = document.createElement('div');

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
} // Http Methods


function getHttpRequestInstance() {
  return new XMLHttpRequest();
}

function prepareOnepayHttpRequestParams(params) {
  var paramsUrl = 'channel=WEB';

  if (typeof Smartphone !== 'undefined' && (Smartphone.isAndroid() || Smartphone.isIOS())) {
    paramsUrl = 'channel=MOBILE';
  }

  paramsUrl += '&' + params.map(function (param) {
    return encodeURIComponent(param.name) + '=' + encodeURIComponent(param.value);
  }).join('&');
  console.log(paramsUrl);
  return paramsUrl;
}

function processOnepayHttpResponse(onepay) {
  return function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var data = {};

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
            var options = {
              'onepay': onepay
            };
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
        var data = {};

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
  var countDownDate = (onepay.countDownDate || new Date()).getTime() + OTT_EXPIRATION * 60 * 1000;
  var countDownElement = document.getElementById('onepay-countdown');
  var x = setInterval(function (onepay) {
    if (countDownElement.length !== 0) {
      // Get todays date and time
      var now = new Date().getTime(); // Find the distance between now an the count down date

      var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000); // Output the result in an element with id="demo"

      countDownElement.innerHTML = addLeadingZeroes(minutes, 2) + ':' + addLeadingZeroes(seconds, 2); // If the count down is over, write some text

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
  var padding = '';

  for (var i = 0; i < zeroes; i++) {
    padding += '0';
  }

  if (number <= Math.pow(10, zeroes) - 1) {
    number = (padding + number).slice(-1 * zeroes);
  }

  return number;
}

function contextChange(status, onepay, method) {
  if (!method) {
    method = 'POST';
  }

  var form = document.createElement('form');
  form.method = method;
  form.action = onepay.callbackUrl;
  var occInput = document.createElement('input');
  occInput.type = 'hidden';
  occInput.name = 'occ';
  occInput.value = onepay.occ;
  var etnInput = document.createElement('input');
  etnInput.type = 'hidden';
  etnInput.name = 'externalUniqueNumber';
  etnInput.value = onepay.externalUniqueNumber;
  var statusInput = document.createElement('input');
  statusInput.type = 'hidden';
  statusInput.name = 'status';
  statusInput.value = status;
  var submitInput = document.createElement('input');
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
  var data = {};
  var status = null;
  var description = null;

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
  var clientId = uuidv4();
  var options = {
    clientId: clientId,
    endpoint: onepay.mqttCredentials.iotEndpoint,
    regionName: onepay.mqttCredentials.region,
    accessKey: onepay.mqttCredentials.accessKey,
    secretKey: onepay.mqttCredentials.secretKey,
    sessionToken: onepay.mqttCredentials.sessionToken
  };
  var topic = onepay.ott;
  var client = new MQTTClient(options);
  client.on('connectionLost', function () {
    console.log('Connection lost');
  });
  client.on('messageArrived', function (msg) {
    var message = new ReceivedMsg(msg);
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

/***/ }),

/***/ "./src/onepay-direct-qr.js":
/*!*********************************!*\
  !*** ./src/onepay-direct-qr.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OnepayWebSocket = __webpack_require__(/*! ./onepay-websocket.js */ "./src/onepay-websocket.js");

var OnepayDirectQr =
/*#__PURE__*/
function () {
  function OnepayDirectQr(transaction) {
    _classCallCheck(this, OnepayDirectQr);

    this.version = '1.3.0';
    this.transaction = transaction;
    this.qrCodeAsBase64 = null;
  }

  _createClass(OnepayDirectQr, [{
    key: "drawQrImage",
    value: function drawQrImage(htmlTagId) {
      var _this = this;

      if (!this.transaction) {
        console.log('transaction does not exist in object param');
        return;
      }

      if (!this.transaction['qrCodeAsBase64']) {
        console.log('qrCodeAsBase64 does not exist in object param');
        return;
      }

      if (!this.transaction['ott']) {
        console.log('ott does not exist in object param');
        return;
      }

      this.qrCodeAsBase64 = this.transaction.qrCodeAsBase64;
      var socket = new OnepayWebSocket(this.transaction);
      socket.connect(function () {
        var qrImage = new Image();
        qrImage.src = ' data:image/png;charset=utf-8;base64,' + _this.qrCodeAsBase64;
        var html = document.getElementById(htmlTagId);
        html.innerHTML = '';
        html.appendChild(qrImage);
      });
    }
  }, {
    key: "version",
    value: function version() {
      return this.version;
    }
  }]);

  return OnepayDirectQr;
}();

module.exports = OnepayDirectQr;

/***/ }),

/***/ "./src/onepay-websocket.js":
/*!*********************************!*\
  !*** ./src/onepay-websocket.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var OnepayUtil = __webpack_require__(/*! ./onepayutil.js */ "./src/onepayutil.js");

var _require = __webpack_require__(/*! ./vendor/mqttclient.js */ "./src/vendor/mqttclient.js"),
    MQTTClient = _require.MQTTClient,
    ReceivedMsg = _require.ReceivedMsg;

function OnepayWebSocket(transaction) {
  this.transaction = transaction;
  this.onepayUtil = new OnepayUtil();
  this.SOCKET_CREDENTIALS_URL = 'https://w7t4h1avwk.execute-api.us-east-2.amazonaws.com/dev/onepayjs/auth/keys';

  this.getCredentials = function (callback) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var data = {};

          try {
            data = JSON.parse(httpRequest.responseText);
            callback(data);
          } catch (e) {
            console.log(e);
          }
        }
      }
    };

    httpRequest.open('GET', this.SOCKET_CREDENTIALS_URL);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send();
  };

  this.connect = function (onSubscribe) {
    var onepayWebSocket = this;
    this.getCredentials(function (data) {
      data['clientId'] = onepayWebSocket.onepayUtil.createUuidv4();
      data['endpoint'] = data.iotEndpoint;
      data['regionName'] = data.region;
      var client = new MQTTClient(data);
      client.on('connected', function () {
        client.subscribe(String(onepayWebSocket.transaction.ott));
      });
      client.on('subscribeSucess', function () {
        onSubscribe();
      });
      client.on('messageArrived', function (msg) {
        onepayWebSocket.handleEvents(msg, client, onepayWebSocket.transaction.paymentStatusHandler);
      });
      client.on('connetionLost', function () {
        console.log('websocket has been disconnected');
      });
      client.connect();
    });
  };

  this.handleEvents = function (msg, client, paymentStatusHandler) {
    var message = new ReceivedMsg(msg);
    var data = {};
    var status = null; // eslint-disable-next-line no-unused-vars

    var description = null;

    try {
      data = JSON.parse(message.content);
      status = data.status; // eslint-disable-next-line no-unused-vars

      description = data.description;
    } catch (e) {
      console.log('json parser has failed');
      console.log(e);
    }

    switch (status) {
      case 'OTT_ASSIGNED':
        try {
          paymentStatusHandler.ottAssigned();
        } catch (e) {}

        break;

      case 'AUTHORIZED':
        try {
          paymentStatusHandler.authorized(this.transaction.occ, this.transaction.externalUniqueNumber);
        } catch (e) {}

        client.disconnect();
        break;

      case 'REJECTED_BY_USER':
        try {
          paymentStatusHandler.canceled();
        } catch (e) {}

        client.disconnect();
        break;

      case 'AUTHORIZATION_ERROR':
        try {
          paymentStatusHandler.authorizationError();
        } catch (e) {}

        client.disconnect();
        break;

      default:
        try {
          paymentStatusHandler.unknown();
        } catch (e) {}

        client.disconnect();
        break;
    }
  };
}

module.exports = OnepayWebSocket;

/***/ }),

/***/ "./src/onepay.js":
/*!***********************!*\
  !*** ./src/onepay.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OnepayDirectQr = __webpack_require__(/*! ./onepay-direct-qr */ "./src/onepay-direct-qr.js");

var OnepayCheckout = __webpack_require__(/*! ./onepay-checkout */ "./src/onepay-checkout.js");

var Smartphone = __webpack_require__(/*! ./smartphone */ "./src/smartphone.js");

var Onepay =
/*#__PURE__*/
function () {
  function Onepay(transaction) {
    _classCallCheck(this, Onepay);

    this.transaction = transaction;
  }

  _createClass(Onepay, [{
    key: "drawQrImage",
    value: function drawQrImage(htmlTagId) {
      var onepay = new OnepayDirectQr(this.transaction);
      onepay.drawQrImage(htmlTagId);
    }
  }], [{
    key: "directQr",
    value: function directQr(transaction, htmlTagId) {
      var onepay = new OnepayDirectQr(transaction);
      onepay.drawQrImage(htmlTagId);
    }
  }, {
    key: "checkout",
    value: function checkout(options, params) {
      var checkout = new OnepayCheckout(options);
      checkout.pay(params);
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return Smartphone.isAny();
    }
  }, {
    key: "getChannel",
    value: function getChannel() {
      if (Onepay.isMobile()) {
        return 'MOBILE';
      }

      return 'WEB';
    }
  }, {
    key: "redirectToApp",
    value: function redirectToApp(occ) {
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
  }]);

  return Onepay;
}();

Smartphone.userAgent = null;

if (typeof window === 'function' || (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
  Smartphone.setUserAgent(navigator.userAgent);
}

if (true) {
  var middleware = function middleware(isMiddleware) {
    isMiddleware = isMiddleware === void 0 ? true : isMiddleware;

    if (isMiddleware) {
      return function (req, res, next) {
        var userAgent = req.headers['user-agent'] || '';
        Smartphone.setUserAgent(userAgent);
        req.SmartPhone = Smartphone;

        if (typeof res.locals === 'function') {
          res.locals({
            SmartPhone: Smartphone
          });
        } else {
          res.locals.SmartPhone = Smartphone;
        }

        next();
      };
    }

    return Smartphone;
  };

  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = middleware;
  }

  exports = middleware;
} else {}

module.exports = Onepay;

/***/ }),

/***/ "./src/onepayutil.js":
/*!***************************!*\
  !*** ./src/onepayutil.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getRandomValues = __webpack_require__(/*! polyfill-crypto.getrandomvalues */ "./node_modules/polyfill-crypto.getrandomvalues/index.js");

function OnepayUtil() {
  this.createUuidv4 = function () {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
      return (c ^ getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
  };
}

module.exports = OnepayUtil;

/***/ }),

/***/ "./src/smartphone.js":
/*!***************************!*\
  !*** ./src/smartphone.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ANDROID_STORE_APP_PACKAGE = 'cl.ionix.ewallet';
var APP_STORE_URL = 'https://itunes.apple.com/cl/app/onepay/id1218407961?mt=8';

var Smartphone =
/*#__PURE__*/
function () {
  function Smartphone(obj) {
    _classCallCheck(this, Smartphone);

    if (obj instanceof Smartphone) {
      return obj;
    }

    if (!(this instanceof Smartphone)) {
      return new Smartphone(obj);
    }

    this._wrapped = obj;
  }

  _createClass(Smartphone, null, [{
    key: "getUserAgent",
    value: function getUserAgent() {
      return this.userAgent;
    }
  }, {
    key: "setUserAgent",
    value: function setUserAgent(userAgent) {
      this.userAgent = userAgent;
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return this.getUserAgent().match(/Android/i);
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return this.isIPhone() || this.isIPad() || this.isIPod();
    }
  }, {
    key: "isIPhone",
    value: function isIPhone() {
      return this.getUserAgent().match(/iPhone/i);
    }
  }, {
    key: "isIPad",
    value: function isIPad() {
      return this.getUserAgent().match(/iPad/i);
    }
  }, {
    key: "isIPod",
    value: function isIPod() {
      return this.getUserAgent().match(/iPod/i);
    }
  }, {
    key: "isOpera",
    value: function isOpera() {
      return this.getUserAgent().match(/Opera Mini/i);
    } // Detectar si es FirefoxMobile

  }, {
    key: "isFireFox",
    value: function isFireFox() {
      return this.getUserAgent().match(/Firefox/i) && (Smartphone.isAndroid() || Smartphone.isIOS());
    }
  }, {
    key: "isAny",
    value: function isAny() {
      var foundAny = false;
      var getAllMethods = Object.getOwnPropertyNames(Smartphone).filter(function (property) {
        return typeof Smartphone[property] === 'function';
      });

      for (var index in getAllMethods) {
        if (getAllMethods[index] === 'setUserAgent' || getAllMethods[index] === 'getUserAgent' || getAllMethods[index] === 'isAny' || getAllMethods[index] === 'isIOS') {
          continue;
        }

        if (Smartphone[getAllMethods[index]]()) {
          foundAny = true;
          break;
        }
      }

      return foundAny;
    }
  }, {
    key: "androidContextChange",
    value: function androidContextChange(occ) {
      var appScheme = 'ewallet';
      var appPackage = ANDROID_STORE_APP_PACKAGE;
      var action = appPackage + '.BROWSER_ACTION';
      var fallback = 'market://details?id=' + appPackage;
      var location = 'intent://#Intent' + ';scheme=' + appScheme + ';action=' + action + ';package=' + appPackage + ';S.occ=' + occ + ';S.browser_fallback_url=' + fallback + ';end';
      window.location = location;
    }
  }, {
    key: "iosContextChange",
    value: function iosContextChange(occ) {
      var now = new Date().valueOf();
      setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
        window.open(APP_STORE_URL, '_self');
      }, 500);
      window.open('onepay://?occ=' + occ, '_self');
    }
  }]);

  return Smartphone;
}();

module.exports = Smartphone;

/***/ }),

/***/ "./src/vendor/crypto-js.js":
/*!*********************************!*\
  !*** ./src/vendor/crypto-js.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

;

(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory();
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /**
   * CryptoJS core components.
   */
  var CryptoJS = CryptoJS || function (Math, undefined) {
    /*
     * Local polyfil of Object.create
     */
    var create = Object.create || function () {
      function F() {}

      ;
      return function (obj) {
        var subtype;
        F.prototype = obj;
        subtype = new F();
        F.prototype = null;
        return subtype;
      };
    }();
    /**
     * CryptoJS namespace.
     */


    var C = {};
    /**
     * Library namespace.
     */

    var C_lib = C.lib = {};
    /**
     * Base object for prototypal inheritance.
     */

    var Base = C_lib.Base = function () {
      return {
        /**
         * Creates a new object that inherits from this object.
         *
         * @param {Object} overrides Properties to copy into the new object.
         *
         * @return {Object} The new object.
         *
         * @static
         *
         * @example
         *
         *     var MyType = CryptoJS.lib.Base.extend({
         *         field: 'value',
         *
         *         method: function () {
         *         }
         *     });
         */
        extend: function extend(overrides) {
          // Spawn
          var subtype = create(this); // Augment

          if (overrides) {
            subtype.mixIn(overrides);
          } // Create default initializer


          if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
            subtype.init = function () {
              subtype.$super.init.apply(this, arguments);
            };
          } // Initializer's prototype is the subtype object


          subtype.init.prototype = subtype; // Reference supertype

          subtype.$super = this;
          return subtype;
        },

        /**
         * Extends this object and runs the init method.
         * Arguments to create() will be passed to init().
         *
         * @return {Object} The new object.
         *
         * @static
         *
         * @example
         *
         *     var instance = MyType.create();
         */
        create: function create() {
          var instance = this.extend();
          instance.init.apply(instance, arguments);
          return instance;
        },

        /**
         * Initializes a newly created object.
         * Override this method to add some logic when your objects are created.
         *
         * @example
         *
         *     var MyType = CryptoJS.lib.Base.extend({
         *         init: function () {
         *             // ...
         *         }
         *     });
         */
        init: function init() {},

        /**
         * Copies properties into this object.
         *
         * @param {Object} properties The properties to mix in.
         *
         * @example
         *
         *     MyType.mixIn({
         *         field: 'value'
         *     });
         */
        mixIn: function mixIn(properties) {
          for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
              this[propertyName] = properties[propertyName];
            }
          } // IE won't copy toString using the loop above


          if (properties.hasOwnProperty('toString')) {
            this.toString = properties.toString;
          }
        },

        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = instance.clone();
         */
        clone: function clone() {
          return this.init.prototype.extend(this);
        }
      };
    }();
    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */


    var WordArray = C_lib.WordArray = Base.extend({
      /**
       * Initializes a newly created word array.
       *
       * @param {Array} words (Optional) An array of 32-bit words.
       * @param {number} sigBytes (Optional) The number of significant bytes in the words.
       *
       * @example
       *
       *     var wordArray = CryptoJS.lib.WordArray.create();
       *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
       *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
       */
      init: function init(words, sigBytes) {
        words = this.words = words || [];

        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 4;
        }
      },

      /**
       * Converts this word array to a string.
       *
       * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
       *
       * @return {string} The stringified word array.
       *
       * @example
       *
       *     var string = wordArray + '';
       *     var string = wordArray.toString();
       *     var string = wordArray.toString(CryptoJS.enc.Utf8);
       */
      toString: function toString(encoder) {
        return (encoder || Hex).stringify(this);
      },

      /**
       * Concatenates a word array to this word array.
       *
       * @param {WordArray} wordArray The word array to append.
       *
       * @return {WordArray} This word array.
       *
       * @example
       *
       *     wordArray1.concat(wordArray2);
       */
      concat: function concat(wordArray) {
        // Shortcuts
        var thisWords = this.words;
        var thatWords = wordArray.words;
        var thisSigBytes = this.sigBytes;
        var thatSigBytes = wordArray.sigBytes; // Clamp excess bits

        this.clamp(); // Concat

        if (thisSigBytes % 4) {
          // Copy one byte at a time
          for (var i = 0; i < thatSigBytes; i++) {
            var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
          }
        } else {
          // Copy one word at a time
          for (var i = 0; i < thatSigBytes; i += 4) {
            thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
          }
        }

        this.sigBytes += thatSigBytes; // Chainable

        return this;
      },

      /**
       * Removes insignificant bits.
       *
       * @example
       *
       *     wordArray.clamp();
       */
      clamp: function clamp() {
        // Shortcuts
        var words = this.words;
        var sigBytes = this.sigBytes; // Clamp

        words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
        words.length = Math.ceil(sigBytes / 4);
      },

      /**
       * Creates a copy of this word array.
       *
       * @return {WordArray} The clone.
       *
       * @example
       *
       *     var clone = wordArray.clone();
       */
      clone: function clone() {
        var clone = Base.clone.call(this);
        clone.words = this.words.slice(0);
        return clone;
      },

      /**
       * Creates a word array filled with random bytes.
       *
       * @param {number} nBytes The number of random bytes to generate.
       *
       * @return {WordArray} The random word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.lib.WordArray.random(16);
       */
      random: function random(nBytes) {
        var words = [];

        var r = function r(m_w) {
          var m_w = m_w;
          var m_z = 0x3ade68b1;
          var mask = 0xffffffff;
          return function () {
            m_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;
            m_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;
            var result = (m_z << 0x10) + m_w & mask;
            result /= 0x100000000;
            result += 0.5;
            return result * (Math.random() > .5 ? 1 : -1);
          };
        };

        for (var i = 0, rcache; i < nBytes; i += 4) {
          var _r = r((rcache || Math.random()) * 0x100000000);

          rcache = _r() * 0x3ade67b7;
          words.push(_r() * 0x100000000 | 0);
        }

        return new WordArray.init(words, nBytes);
      }
    });
    /**
     * Encoder namespace.
     */

    var C_enc = C.enc = {};
    /**
     * Hex encoding strategy.
     */

    var Hex = C_enc.Hex = {
      /**
       * Converts a word array to a hex string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The hex string.
       *
       * @static
       *
       * @example
       *
       *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes; // Convert

        var hexChars = [];

        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          hexChars.push((bite >>> 4).toString(16));
          hexChars.push((bite & 0x0f).toString(16));
        }

        return hexChars.join('');
      },

      /**
       * Converts a hex string to a word array.
       *
       * @param {string} hexStr The hex string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
       */
      parse: function parse(hexStr) {
        // Shortcut
        var hexStrLength = hexStr.length; // Convert

        var words = [];

        for (var i = 0; i < hexStrLength; i += 2) {
          words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
        }

        return new WordArray.init(words, hexStrLength / 2);
      }
    };
    /**
     * Latin1 encoding strategy.
     */

    var Latin1 = C_enc.Latin1 = {
      /**
       * Converts a word array to a Latin1 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The Latin1 string.
       *
       * @static
       *
       * @example
       *
       *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes; // Convert

        var latin1Chars = [];

        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          latin1Chars.push(String.fromCharCode(bite));
        }

        return latin1Chars.join('');
      },

      /**
       * Converts a Latin1 string to a word array.
       *
       * @param {string} latin1Str The Latin1 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
       */
      parse: function parse(latin1Str) {
        // Shortcut
        var latin1StrLength = latin1Str.length; // Convert

        var words = [];

        for (var i = 0; i < latin1StrLength; i++) {
          words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
        }

        return new WordArray.init(words, latin1StrLength);
      }
    };
    /**
     * UTF-8 encoding strategy.
     */

    var Utf8 = C_enc.Utf8 = {
      /**
       * Converts a word array to a UTF-8 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-8 string.
       *
       * @static
       *
       * @example
       *
       *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        try {
          return decodeURIComponent(escape(Latin1.stringify(wordArray)));
        } catch (e) {
          throw new Error('Malformed UTF-8 data');
        }
      },

      /**
       * Converts a UTF-8 string to a word array.
       *
       * @param {string} utf8Str The UTF-8 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
       */
      parse: function parse(utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
      }
    };
    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */

    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
      /**
       * Resets this block algorithm's data buffer to its initial state.
       *
       * @example
       *
       *     bufferedBlockAlgorithm.reset();
       */
      reset: function reset() {
        // Initial values
        this._data = new WordArray.init();
        this._nDataBytes = 0;
      },

      /**
       * Adds new data to this block algorithm's buffer.
       *
       * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
       *
       * @example
       *
       *     bufferedBlockAlgorithm._append('data');
       *     bufferedBlockAlgorithm._append(wordArray);
       */
      _append: function _append(data) {
        // Convert string to WordArray, else assume WordArray already
        if (typeof data == 'string') {
          data = Utf8.parse(data);
        } // Append


        this._data.concat(data);

        this._nDataBytes += data.sigBytes;
      },

      /**
       * Processes available data blocks.
       *
       * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
       *
       * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
       *
       * @return {WordArray} The processed data.
       *
       * @example
       *
       *     var processedData = bufferedBlockAlgorithm._process();
       *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
       */
      _process: function _process(doFlush) {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var dataSigBytes = data.sigBytes;
        var blockSize = this.blockSize;
        var blockSizeBytes = blockSize * 4; // Count blocks ready

        var nBlocksReady = dataSigBytes / blockSizeBytes;

        if (doFlush) {
          // Round up to include partial blocks
          nBlocksReady = Math.ceil(nBlocksReady);
        } else {
          // Round down to include only full blocks,
          // less the number of blocks that must remain in the buffer
          nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        } // Count words ready


        var nWordsReady = nBlocksReady * blockSize; // Count bytes ready

        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes); // Process blocks

        if (nWordsReady) {
          for (var offset = 0; offset < nWordsReady; offset += blockSize) {
            // Perform concrete-algorithm logic
            this._doProcessBlock(dataWords, offset);
          } // Remove processed words


          var processedWords = dataWords.splice(0, nWordsReady);
          data.sigBytes -= nBytesReady;
        } // Return processed words


        return new WordArray.init(processedWords, nBytesReady);
      },

      /**
       * Creates a copy of this object.
       *
       * @return {Object} The clone.
       *
       * @example
       *
       *     var clone = bufferedBlockAlgorithm.clone();
       */
      clone: function clone() {
        var clone = Base.clone.call(this);
        clone._data = this._data.clone();
        return clone;
      },
      _minBufferSize: 0
    });
    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */

    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
      /**
       * Configuration options.
       */
      cfg: Base.extend(),

      /**
       * Initializes a newly created hasher.
       *
       * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
       *
       * @example
       *
       *     var hasher = CryptoJS.algo.SHA256.create();
       */
      init: function init(cfg) {
        // Apply config defaults
        this.cfg = this.cfg.extend(cfg); // Set initial values

        this.reset();
      },

      /**
       * Resets this hasher to its initial state.
       *
       * @example
       *
       *     hasher.reset();
       */
      reset: function reset() {
        // Reset data buffer
        BufferedBlockAlgorithm.reset.call(this); // Perform concrete-hasher logic

        this._doReset();
      },

      /**
       * Updates this hasher with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {Hasher} This hasher.
       *
       * @example
       *
       *     hasher.update('message');
       *     hasher.update(wordArray);
       */
      update: function update(messageUpdate) {
        // Append
        this._append(messageUpdate); // Update the hash


        this._process(); // Chainable


        return this;
      },

      /**
       * Finalizes the hash computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The hash.
       *
       * @example
       *
       *     var hash = hasher.finalize();
       *     var hash = hasher.finalize('message');
       *     var hash = hasher.finalize(wordArray);
       */
      finalize: function finalize(messageUpdate) {
        // Final message update
        if (messageUpdate) {
          this._append(messageUpdate);
        } // Perform concrete-hasher logic


        var hash = this._doFinalize();

        return hash;
      },
      blockSize: 512 / 32,

      /**
       * Creates a shortcut function to a hasher's object interface.
       *
       * @param {Hasher} hasher The hasher to create a helper for.
       *
       * @return {Function} The shortcut function.
       *
       * @static
       *
       * @example
       *
       *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
       */
      _createHelper: function _createHelper(hasher) {
        return function (message, cfg) {
          return new hasher.init(cfg).finalize(message);
        };
      },

      /**
       * Creates a shortcut function to the HMAC's object interface.
       *
       * @param {Hasher} hasher The hasher to use in this HMAC helper.
       *
       * @return {Function} The shortcut function.
       *
       * @static
       *
       * @example
       *
       *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
       */
      _createHmacHelper: function _createHmacHelper(hasher) {
        return function (message, key) {
          return new C_algo.HMAC.init(hasher, key).finalize(message);
        };
      }
    });
    /**
     * Algorithm namespace.
     */

    var C_algo = C.algo = {};
    return C;
  }(Math);

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;
    /**
     * Base64 encoding strategy.
     */

    var Base64 = C_enc.Base64 = {
      /**
       * Converts a word array to a Base64 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The Base64 string.
       *
       * @static
       *
       * @example
       *
       *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = this._map; // Clamp excess bits

        wordArray.clamp(); // Convert

        var base64Chars = [];

        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
          var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
          var triplet = byte1 << 16 | byte2 << 8 | byte3;

          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
          }
        } // Add padding


        var paddingChar = map.charAt(64);

        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }

        return base64Chars.join('');
      },

      /**
       * Converts a Base64 string to a word array.
       *
       * @param {string} base64Str The Base64 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
       */
      parse: function parse(base64Str) {
        // Shortcuts
        var base64StrLength = base64Str.length;
        var map = this._map;
        var reverseMap = this._reverseMap;

        if (!reverseMap) {
          reverseMap = this._reverseMap = [];

          for (var j = 0; j < map.length; j++) {
            reverseMap[map.charCodeAt(j)] = j;
          }
        } // Ignore padding


        var paddingChar = map.charAt(64);

        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);

          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        } // Convert


        return parseLoop(base64Str, base64StrLength, reverseMap);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };

    function parseLoop(base64Str, base64StrLength, reverseMap) {
      var words = [];
      var nBytes = 0;

      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
          var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
          words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }

      return WordArray.create(words, nBytes);
    }
  })();

  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo; // Constants table

    var T = []; // Compute constants

    (function () {
      for (var i = 0; i < 64; i++) {
        T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
      }
    })();
    /**
     * MD5 hash algorithm.
     */


    var MD5 = C_algo.MD5 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Swap endian
        for (var i = 0; i < 16; i++) {
          // Shortcuts
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];
          M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
        } // Shortcuts


        var H = this._hash.words;
        var M_offset_0 = M[offset + 0];
        var M_offset_1 = M[offset + 1];
        var M_offset_2 = M[offset + 2];
        var M_offset_3 = M[offset + 3];
        var M_offset_4 = M[offset + 4];
        var M_offset_5 = M[offset + 5];
        var M_offset_6 = M[offset + 6];
        var M_offset_7 = M[offset + 7];
        var M_offset_8 = M[offset + 8];
        var M_offset_9 = M[offset + 9];
        var M_offset_10 = M[offset + 10];
        var M_offset_11 = M[offset + 11];
        var M_offset_12 = M[offset + 12];
        var M_offset_13 = M[offset + 13];
        var M_offset_14 = M[offset + 14];
        var M_offset_15 = M[offset + 15]; // Working varialbes

        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3]; // Computation

        a = FF(a, b, c, d, M_offset_0, 7, T[0]);
        d = FF(d, a, b, c, M_offset_1, 12, T[1]);
        c = FF(c, d, a, b, M_offset_2, 17, T[2]);
        b = FF(b, c, d, a, M_offset_3, 22, T[3]);
        a = FF(a, b, c, d, M_offset_4, 7, T[4]);
        d = FF(d, a, b, c, M_offset_5, 12, T[5]);
        c = FF(c, d, a, b, M_offset_6, 17, T[6]);
        b = FF(b, c, d, a, M_offset_7, 22, T[7]);
        a = FF(a, b, c, d, M_offset_8, 7, T[8]);
        d = FF(d, a, b, c, M_offset_9, 12, T[9]);
        c = FF(c, d, a, b, M_offset_10, 17, T[10]);
        b = FF(b, c, d, a, M_offset_11, 22, T[11]);
        a = FF(a, b, c, d, M_offset_12, 7, T[12]);
        d = FF(d, a, b, c, M_offset_13, 12, T[13]);
        c = FF(c, d, a, b, M_offset_14, 17, T[14]);
        b = FF(b, c, d, a, M_offset_15, 22, T[15]);
        a = GG(a, b, c, d, M_offset_1, 5, T[16]);
        d = GG(d, a, b, c, M_offset_6, 9, T[17]);
        c = GG(c, d, a, b, M_offset_11, 14, T[18]);
        b = GG(b, c, d, a, M_offset_0, 20, T[19]);
        a = GG(a, b, c, d, M_offset_5, 5, T[20]);
        d = GG(d, a, b, c, M_offset_10, 9, T[21]);
        c = GG(c, d, a, b, M_offset_15, 14, T[22]);
        b = GG(b, c, d, a, M_offset_4, 20, T[23]);
        a = GG(a, b, c, d, M_offset_9, 5, T[24]);
        d = GG(d, a, b, c, M_offset_14, 9, T[25]);
        c = GG(c, d, a, b, M_offset_3, 14, T[26]);
        b = GG(b, c, d, a, M_offset_8, 20, T[27]);
        a = GG(a, b, c, d, M_offset_13, 5, T[28]);
        d = GG(d, a, b, c, M_offset_2, 9, T[29]);
        c = GG(c, d, a, b, M_offset_7, 14, T[30]);
        b = GG(b, c, d, a, M_offset_12, 20, T[31]);
        a = HH(a, b, c, d, M_offset_5, 4, T[32]);
        d = HH(d, a, b, c, M_offset_8, 11, T[33]);
        c = HH(c, d, a, b, M_offset_11, 16, T[34]);
        b = HH(b, c, d, a, M_offset_14, 23, T[35]);
        a = HH(a, b, c, d, M_offset_1, 4, T[36]);
        d = HH(d, a, b, c, M_offset_4, 11, T[37]);
        c = HH(c, d, a, b, M_offset_7, 16, T[38]);
        b = HH(b, c, d, a, M_offset_10, 23, T[39]);
        a = HH(a, b, c, d, M_offset_13, 4, T[40]);
        d = HH(d, a, b, c, M_offset_0, 11, T[41]);
        c = HH(c, d, a, b, M_offset_3, 16, T[42]);
        b = HH(b, c, d, a, M_offset_6, 23, T[43]);
        a = HH(a, b, c, d, M_offset_9, 4, T[44]);
        d = HH(d, a, b, c, M_offset_12, 11, T[45]);
        c = HH(c, d, a, b, M_offset_15, 16, T[46]);
        b = HH(b, c, d, a, M_offset_2, 23, T[47]);
        a = II(a, b, c, d, M_offset_0, 6, T[48]);
        d = II(d, a, b, c, M_offset_7, 10, T[49]);
        c = II(c, d, a, b, M_offset_14, 15, T[50]);
        b = II(b, c, d, a, M_offset_5, 21, T[51]);
        a = II(a, b, c, d, M_offset_12, 6, T[52]);
        d = II(d, a, b, c, M_offset_3, 10, T[53]);
        c = II(c, d, a, b, M_offset_10, 15, T[54]);
        b = II(b, c, d, a, M_offset_1, 21, T[55]);
        a = II(a, b, c, d, M_offset_8, 6, T[56]);
        d = II(d, a, b, c, M_offset_15, 10, T[57]);
        c = II(c, d, a, b, M_offset_6, 15, T[58]);
        b = II(b, c, d, a, M_offset_13, 21, T[59]);
        a = II(a, b, c, d, M_offset_4, 6, T[60]);
        d = II(d, a, b, c, M_offset_11, 10, T[61]);
        c = II(c, d, a, b, M_offset_2, 15, T[62]);
        b = II(b, c, d, a, M_offset_9, 21, T[63]); // Intermediate hash value

        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8; // Add padding

        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
        var nBitsTotalL = nBitsTotal;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;
        data.sigBytes = (dataWords.length + 1) * 4; // Hash final blocks

        this._process(); // Shortcuts


        var hash = this._hash;
        var H = hash.words; // Swap endian

        for (var i = 0; i < 4; i++) {
          // Shortcut
          var H_i = H[i];
          H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
        } // Return final computed hash


        return hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });

    function FF(a, b, c, d, x, s, t) {
      var n = a + (b & c | ~b & d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    function GG(a, b, c, d, x, s, t) {
      var n = a + (b & d | c & ~d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    function HH(a, b, c, d, x, s, t) {
      var n = a + (b ^ c ^ d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    function II(a, b, c, d, x, s, t) {
      var n = a + (c ^ (b | ~d)) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.MD5('message');
     *     var hash = CryptoJS.MD5(wordArray);
     */


    C.MD5 = Hasher._createHelper(MD5);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacMD5(message, key);
     */

    C.HmacMD5 = Hasher._createHmacHelper(MD5);
  })(Math);

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo; // Reusable object

    var W = [];
    /**
     * SHA-1 hash algorithm.
     */

    var SHA1 = C_algo.SHA1 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var H = this._hash.words; // Working variables

        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4]; // Computation

        for (var i = 0; i < 80; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = n << 1 | n >>> 31;
          }

          var t = (a << 5 | a >>> 27) + e + W[i];

          if (i < 20) {
            t += (b & c | ~b & d) + 0x5a827999;
          } else if (i < 40) {
            t += (b ^ c ^ d) + 0x6ed9eba1;
          } else if (i < 60) {
            t += (b & c | b & d | c & d) - 0x70e44324;
          } else
            /* if (i < 80) */
            {
              t += (b ^ c ^ d) - 0x359d3e2a;
            }

          e = d;
          d = c;
          c = b << 30 | b >>> 2;
          b = a;
          a = t;
        } // Intermediate hash value


        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8; // Add padding

        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4; // Hash final blocks

        this._process(); // Return final computed hash


        return this._hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA1('message');
     *     var hash = CryptoJS.SHA1(wordArray);
     */

    C.SHA1 = Hasher._createHelper(SHA1);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA1(message, key);
     */

    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
  })();

  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo; // Initialization and round constants tables

    var H = [];
    var K = []; // Compute constants

    (function () {
      function isPrime(n) {
        var sqrtN = Math.sqrt(n);

        for (var factor = 2; factor <= sqrtN; factor++) {
          if (!(n % factor)) {
            return false;
          }
        }

        return true;
      }

      function getFractionalBits(n) {
        return (n - (n | 0)) * 0x100000000 | 0;
      }

      var n = 2;
      var nPrime = 0;

      while (nPrime < 64) {
        if (isPrime(n)) {
          if (nPrime < 8) {
            H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
          }

          K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
          nPrime++;
        }

        n++;
      }
    })(); // Reusable object


    var W = [];
    /**
     * SHA-256 hash algorithm.
     */

    var SHA256 = C_algo.SHA256 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init(H.slice(0));
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var H = this._hash.words; // Working variables

        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        var f = H[5];
        var g = H[6];
        var h = H[7]; // Computation

        for (var i = 0; i < 64; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var gamma0x = W[i - 15];
            var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
            var gamma1x = W[i - 2];
            var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
            W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
          }

          var ch = e & f ^ ~e & g;
          var maj = a & b ^ a & c ^ b & c;
          var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
          var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
          var t1 = h + sigma1 + ch + K[i] + W[i];
          var t2 = sigma0 + maj;
          h = g;
          g = f;
          f = e;
          e = d + t1 | 0;
          d = c;
          c = b;
          b = a;
          a = t1 + t2 | 0;
        } // Intermediate hash value


        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
        H[5] = H[5] + f | 0;
        H[6] = H[6] + g | 0;
        H[7] = H[7] + h | 0;
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8; // Add padding

        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4; // Hash final blocks

        this._process(); // Return final computed hash


        return this._hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA256('message');
     *     var hash = CryptoJS.SHA256(wordArray);
     */

    C.SHA256 = Hasher._createHelper(SHA256);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA256(message, key);
     */

    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
  })(Math);

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;
    /**
     * UTF-16 BE encoding strategy.
     */

    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
      /**
       * Converts a word array to a UTF-16 BE string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-16 BE string.
       *
       * @static
       *
       * @example
       *
       *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes; // Convert

        var utf16Chars = [];

        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;
          utf16Chars.push(String.fromCharCode(codePoint));
        }

        return utf16Chars.join('');
      },

      /**
       * Converts a UTF-16 BE string to a word array.
       *
       * @param {string} utf16Str The UTF-16 BE string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
       */
      parse: function parse(utf16Str) {
        // Shortcut
        var utf16StrLength = utf16Str.length; // Convert

        var words = [];

        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
        }

        return WordArray.create(words, utf16StrLength * 2);
      }
    };
    /**
     * UTF-16 LE encoding strategy.
     */

    C_enc.Utf16LE = {
      /**
       * Converts a word array to a UTF-16 LE string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-16 LE string.
       *
       * @static
       *
       * @example
       *
       *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes; // Convert

        var utf16Chars = [];

        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);
          utf16Chars.push(String.fromCharCode(codePoint));
        }

        return utf16Chars.join('');
      },

      /**
       * Converts a UTF-16 LE string to a word array.
       *
       * @param {string} utf16Str The UTF-16 LE string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
       */
      parse: function parse(utf16Str) {
        // Shortcut
        var utf16StrLength = utf16Str.length; // Convert

        var words = [];

        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
        }

        return WordArray.create(words, utf16StrLength * 2);
      }
    };

    function swapEndian(word) {
      return word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;
    }
  })();

  (function () {
    // Check if typed arrays are supported
    if (typeof ArrayBuffer != 'function') {
      return;
    } // Shortcuts


    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray; // Reference original init

    var superInit = WordArray.init; // Augment WordArray.init to handle typed arrays

    var subInit = WordArray.init = function (typedArray) {
      // Convert buffers to uint8
      if (typedArray instanceof ArrayBuffer) {
        typedArray = new Uint8Array(typedArray);
      } // Convert other array views to uint8


      if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
        typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
      } // Handle Uint8Array


      if (typedArray instanceof Uint8Array) {
        // Shortcut
        var typedArrayByteLength = typedArray.byteLength; // Extract bytes

        var words = [];

        for (var i = 0; i < typedArrayByteLength; i++) {
          words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
        } // Initialize this word array


        superInit.call(this, words, typedArrayByteLength);
      } else {
        // Else call normal init
        superInit.apply(this, arguments);
      }
    };

    subInit.prototype = WordArray;
  })();
  /** @preserve
  (c) 2012 by Cédric Mesnil. All rights reserved.
  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */


  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo; // Constants table

    var _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);

    var _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);

    var _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);

    var _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

    var _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);

    var _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);
    /**
     * RIPEMD160 hash algorithm.
     */


    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Swap endian
        for (var i = 0; i < 16; i++) {
          // Shortcuts
          var offset_i = offset + i;
          var M_offset_i = M[offset_i]; // Swap

          M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
        } // Shortcut


        var H = this._hash.words;
        var hl = _hl.words;
        var hr = _hr.words;
        var zl = _zl.words;
        var zr = _zr.words;
        var sl = _sl.words;
        var sr = _sr.words; // Working variables

        var al, bl, cl, dl, el;
        var ar, br, cr, dr, er;
        ar = al = H[0];
        br = bl = H[1];
        cr = cl = H[2];
        dr = dl = H[3];
        er = el = H[4]; // Computation

        var t;

        for (var i = 0; i < 80; i += 1) {
          t = al + M[offset + zl[i]] | 0;

          if (i < 16) {
            t += f1(bl, cl, dl) + hl[0];
          } else if (i < 32) {
            t += f2(bl, cl, dl) + hl[1];
          } else if (i < 48) {
            t += f3(bl, cl, dl) + hl[2];
          } else if (i < 64) {
            t += f4(bl, cl, dl) + hl[3];
          } else {
            // if (i<80) {
            t += f5(bl, cl, dl) + hl[4];
          }

          t = t | 0;
          t = rotl(t, sl[i]);
          t = t + el | 0;
          al = el;
          el = dl;
          dl = rotl(cl, 10);
          cl = bl;
          bl = t;
          t = ar + M[offset + zr[i]] | 0;

          if (i < 16) {
            t += f5(br, cr, dr) + hr[0];
          } else if (i < 32) {
            t += f4(br, cr, dr) + hr[1];
          } else if (i < 48) {
            t += f3(br, cr, dr) + hr[2];
          } else if (i < 64) {
            t += f2(br, cr, dr) + hr[3];
          } else {
            // if (i<80) {
            t += f1(br, cr, dr) + hr[4];
          }

          t = t | 0;
          t = rotl(t, sr[i]);
          t = t + er | 0;
          ar = er;
          er = dr;
          dr = rotl(cr, 10);
          cr = br;
          br = t;
        } // Intermediate hash value


        t = H[1] + cl + dr | 0;
        H[1] = H[2] + dl + er | 0;
        H[2] = H[3] + el + ar | 0;
        H[3] = H[4] + al + br | 0;
        H[4] = H[0] + bl + cr | 0;
        H[0] = t;
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8; // Add padding

        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;
        data.sigBytes = (dataWords.length + 1) * 4; // Hash final blocks

        this._process(); // Shortcuts


        var hash = this._hash;
        var H = hash.words; // Swap endian

        for (var i = 0; i < 5; i++) {
          // Shortcut
          var H_i = H[i]; // Swap

          H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
        } // Return final computed hash


        return hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });

    function f1(x, y, z) {
      return x ^ y ^ z;
    }

    function f2(x, y, z) {
      return x & y | ~x & z;
    }

    function f3(x, y, z) {
      return (x | ~y) ^ z;
    }

    function f4(x, y, z) {
      return x & z | y & ~z;
    }

    function f5(x, y, z) {
      return x ^ (y | ~z);
    }

    function rotl(x, n) {
      return x << n | x >>> 32 - n;
    }
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.RIPEMD160('message');
     *     var hash = CryptoJS.RIPEMD160(wordArray);
     */


    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
     */

    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
  })(Math);

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;
    /**
     * HMAC algorithm.
     */

    var HMAC = C_algo.HMAC = Base.extend({
      /**
       * Initializes a newly created HMAC.
       *
       * @param {Hasher} hasher The hash algorithm to use.
       * @param {WordArray|string} key The secret key.
       *
       * @example
       *
       *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
       */
      init: function init(hasher, key) {
        // Init hasher
        hasher = this._hasher = new hasher.init(); // Convert string to WordArray, else assume WordArray already

        if (typeof key == 'string') {
          key = Utf8.parse(key);
        } // Shortcuts


        var hasherBlockSize = hasher.blockSize;
        var hasherBlockSizeBytes = hasherBlockSize * 4; // Allow arbitrary length keys

        if (key.sigBytes > hasherBlockSizeBytes) {
          key = hasher.finalize(key);
        } // Clamp excess bits


        key.clamp(); // Clone key for inner and outer pads

        var oKey = this._oKey = key.clone();
        var iKey = this._iKey = key.clone(); // Shortcuts

        var oKeyWords = oKey.words;
        var iKeyWords = iKey.words; // XOR keys with pad constants

        for (var i = 0; i < hasherBlockSize; i++) {
          oKeyWords[i] ^= 0x5c5c5c5c;
          iKeyWords[i] ^= 0x36363636;
        }

        oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes; // Set initial values

        this.reset();
      },

      /**
       * Resets this HMAC to its initial state.
       *
       * @example
       *
       *     hmacHasher.reset();
       */
      reset: function reset() {
        // Shortcut
        var hasher = this._hasher; // Reset

        hasher.reset();
        hasher.update(this._iKey);
      },

      /**
       * Updates this HMAC with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {HMAC} This HMAC instance.
       *
       * @example
       *
       *     hmacHasher.update('message');
       *     hmacHasher.update(wordArray);
       */
      update: function update(messageUpdate) {
        this._hasher.update(messageUpdate); // Chainable


        return this;
      },

      /**
       * Finalizes the HMAC computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The HMAC.
       *
       * @example
       *
       *     var hmac = hmacHasher.finalize();
       *     var hmac = hmacHasher.finalize('message');
       *     var hmac = hmacHasher.finalize(wordArray);
       */
      finalize: function finalize(messageUpdate) {
        // Shortcut
        var hasher = this._hasher; // Compute HMAC

        var innerHash = hasher.finalize(messageUpdate);
        hasher.reset();
        var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
        return hmac;
      }
    });
  })();

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var SHA1 = C_algo.SHA1;
    var HMAC = C_algo.HMAC;
    /**
     * Password-Based Key Derivation Function 2 algorithm.
     */

    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
      /**
       * Configuration options.
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hasher to use. Default: SHA1
       * @property {number} iterations The number of iterations to perform. Default: 1
       */
      cfg: Base.extend({
        keySize: 128 / 32,
        hasher: SHA1,
        iterations: 1
      }),

      /**
       * Initializes a newly created key derivation function.
       *
       * @param {Object} cfg (Optional) The configuration options to use for the derivation.
       *
       * @example
       *
       *     var kdf = CryptoJS.algo.PBKDF2.create();
       *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
       *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
       */
      init: function init(cfg) {
        this.cfg = this.cfg.extend(cfg);
      },

      /**
       * Computes the Password-Based Key Derivation Function 2.
       *
       * @param {WordArray|string} password The password.
       * @param {WordArray|string} salt A salt.
       *
       * @return {WordArray} The derived key.
       *
       * @example
       *
       *     var key = kdf.compute(password, salt);
       */
      compute: function compute(password, salt) {
        // Shortcut
        var cfg = this.cfg; // Init HMAC

        var hmac = HMAC.create(cfg.hasher, password); // Initial values

        var derivedKey = WordArray.create();
        var blockIndex = WordArray.create([0x00000001]); // Shortcuts

        var derivedKeyWords = derivedKey.words;
        var blockIndexWords = blockIndex.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations; // Generate key

        while (derivedKeyWords.length < keySize) {
          var block = hmac.update(salt).finalize(blockIndex);
          hmac.reset(); // Shortcuts

          var blockWords = block.words;
          var blockWordsLength = blockWords.length; // Iterations

          var intermediate = block;

          for (var i = 1; i < iterations; i++) {
            intermediate = hmac.finalize(intermediate);
            hmac.reset(); // Shortcut

            var intermediateWords = intermediate.words; // XOR intermediate with block

            for (var j = 0; j < blockWordsLength; j++) {
              blockWords[j] ^= intermediateWords[j];
            }
          }

          derivedKey.concat(block);
          blockIndexWords[0]++;
        }

        derivedKey.sigBytes = keySize * 4;
        return derivedKey;
      }
    });
    /**
     * Computes the Password-Based Key Derivation Function 2.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     * @param {Object} cfg (Optional) The configuration options to use for this computation.
     *
     * @return {WordArray} The derived key.
     *
     * @static
     *
     * @example
     *
     *     var key = CryptoJS.PBKDF2(password, salt);
     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
     */

    C.PBKDF2 = function (password, salt, cfg) {
      return PBKDF2.create(cfg).compute(password, salt);
    };
  })();

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var MD5 = C_algo.MD5;
    /**
     * This key derivation function is meant to conform with EVP_BytesToKey.
     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
     */

    var EvpKDF = C_algo.EvpKDF = Base.extend({
      /**
       * Configuration options.
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hash algorithm to use. Default: MD5
       * @property {number} iterations The number of iterations to perform. Default: 1
       */
      cfg: Base.extend({
        keySize: 128 / 32,
        hasher: MD5,
        iterations: 1
      }),

      /**
       * Initializes a newly created key derivation function.
       *
       * @param {Object} cfg (Optional) The configuration options to use for the derivation.
       *
       * @example
       *
       *     var kdf = CryptoJS.algo.EvpKDF.create();
       *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
       *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
       */
      init: function init(cfg) {
        this.cfg = this.cfg.extend(cfg);
      },

      /**
       * Derives a key from a password.
       *
       * @param {WordArray|string} password The password.
       * @param {WordArray|string} salt A salt.
       *
       * @return {WordArray} The derived key.
       *
       * @example
       *
       *     var key = kdf.compute(password, salt);
       */
      compute: function compute(password, salt) {
        // Shortcut
        var cfg = this.cfg; // Init hasher

        var hasher = cfg.hasher.create(); // Initial values

        var derivedKey = WordArray.create(); // Shortcuts

        var derivedKeyWords = derivedKey.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations; // Generate key

        while (derivedKeyWords.length < keySize) {
          if (block) {
            hasher.update(block);
          }

          var block = hasher.update(password).finalize(salt);
          hasher.reset(); // Iterations

          for (var i = 1; i < iterations; i++) {
            block = hasher.finalize(block);
            hasher.reset();
          }

          derivedKey.concat(block);
        }

        derivedKey.sigBytes = keySize * 4;
        return derivedKey;
      }
    });
    /**
     * Derives a key from a password.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     * @param {Object} cfg (Optional) The configuration options to use for this computation.
     *
     * @return {WordArray} The derived key.
     *
     * @static
     *
     * @example
     *
     *     var key = CryptoJS.EvpKDF(password, salt);
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
     */

    C.EvpKDF = function (password, salt, cfg) {
      return EvpKDF.create(cfg).compute(password, salt);
    };
  })();

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var SHA256 = C_algo.SHA256;
    /**
     * SHA-224 hash algorithm.
     */

    var SHA224 = C_algo.SHA224 = SHA256.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
      },
      _doFinalize: function _doFinalize() {
        var hash = SHA256._doFinalize.call(this);

        hash.sigBytes -= 4;
        return hash;
      }
    });
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA224('message');
     *     var hash = CryptoJS.SHA224(wordArray);
     */

    C.SHA224 = SHA256._createHelper(SHA224);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA224(message, key);
     */

    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
  })();

  (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var X32WordArray = C_lib.WordArray;
    /**
     * x64 namespace.
     */

    var C_x64 = C.x64 = {};
    /**
     * A 64-bit word.
     */

    var X64Word = C_x64.Word = Base.extend({
      /**
       * Initializes a newly created 64-bit word.
       *
       * @param {number} high The high 32 bits.
       * @param {number} low The low 32 bits.
       *
       * @example
       *
       *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
       */
      init: function init(high, low) {
        this.high = high;
        this.low = low;
      }
      /**
       * Bitwise NOTs this word.
       *
       * @return {X64Word} A new x64-Word object after negating.
       *
       * @example
       *
       *     var negated = x64Word.not();
       */
      // not: function () {
      // var high = ~this.high;
      // var low = ~this.low;
      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise ANDs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to AND with this word.
       *
       * @return {X64Word} A new x64-Word object after ANDing.
       *
       * @example
       *
       *     var anded = x64Word.and(anotherX64Word);
       */
      // and: function (word) {
      // var high = this.high & word.high;
      // var low = this.low & word.low;
      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise ORs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to OR with this word.
       *
       * @return {X64Word} A new x64-Word object after ORing.
       *
       * @example
       *
       *     var ored = x64Word.or(anotherX64Word);
       */
      // or: function (word) {
      // var high = this.high | word.high;
      // var low = this.low | word.low;
      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise XORs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to XOR with this word.
       *
       * @return {X64Word} A new x64-Word object after XORing.
       *
       * @example
       *
       *     var xored = x64Word.xor(anotherX64Word);
       */
      // xor: function (word) {
      // var high = this.high ^ word.high;
      // var low = this.low ^ word.low;
      // return X64Word.create(high, low);
      // },

      /**
       * Shifts this word n bits to the left.
       *
       * @param {number} n The number of bits to shift.
       *
       * @return {X64Word} A new x64-Word object after shifting.
       *
       * @example
       *
       *     var shifted = x64Word.shiftL(25);
       */
      // shiftL: function (n) {
      // if (n < 32) {
      // var high = (this.high << n) | (this.low >>> (32 - n));
      // var low = this.low << n;
      // } else {
      // var high = this.low << (n - 32);
      // var low = 0;
      // }
      // return X64Word.create(high, low);
      // },

      /**
       * Shifts this word n bits to the right.
       *
       * @param {number} n The number of bits to shift.
       *
       * @return {X64Word} A new x64-Word object after shifting.
       *
       * @example
       *
       *     var shifted = x64Word.shiftR(7);
       */
      // shiftR: function (n) {
      // if (n < 32) {
      // var low = (this.low >>> n) | (this.high << (32 - n));
      // var high = this.high >>> n;
      // } else {
      // var low = this.high >>> (n - 32);
      // var high = 0;
      // }
      // return X64Word.create(high, low);
      // },

      /**
       * Rotates this word n bits to the left.
       *
       * @param {number} n The number of bits to rotate.
       *
       * @return {X64Word} A new x64-Word object after rotating.
       *
       * @example
       *
       *     var rotated = x64Word.rotL(25);
       */
      // rotL: function (n) {
      // return this.shiftL(n).or(this.shiftR(64 - n));
      // },

      /**
       * Rotates this word n bits to the right.
       *
       * @param {number} n The number of bits to rotate.
       *
       * @return {X64Word} A new x64-Word object after rotating.
       *
       * @example
       *
       *     var rotated = x64Word.rotR(7);
       */
      // rotR: function (n) {
      // return this.shiftR(n).or(this.shiftL(64 - n));
      // },

      /**
       * Adds this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to add with this word.
       *
       * @return {X64Word} A new x64-Word object after adding.
       *
       * @example
       *
       *     var added = x64Word.add(anotherX64Word);
       */
      // add: function (word) {
      // var low = (this.low + word.low) | 0;
      // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
      // var high = (this.high + word.high + carry) | 0;
      // return X64Word.create(high, low);
      // }

    });
    /**
     * An array of 64-bit words.
     *
     * @property {Array} words The array of CryptoJS.x64.Word objects.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */

    var X64WordArray = C_x64.WordArray = Base.extend({
      /**
       * Initializes a newly created word array.
       *
       * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
       * @param {number} sigBytes (Optional) The number of significant bytes in the words.
       *
       * @example
       *
       *     var wordArray = CryptoJS.x64.WordArray.create();
       *
       *     var wordArray = CryptoJS.x64.WordArray.create([
       *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
       *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
       *     ]);
       *
       *     var wordArray = CryptoJS.x64.WordArray.create([
       *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
       *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
       *     ], 10);
       */
      init: function init(words, sigBytes) {
        words = this.words = words || [];

        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 8;
        }
      },

      /**
       * Converts this 64-bit word array to a 32-bit word array.
       *
       * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
       *
       * @example
       *
       *     var x32WordArray = x64WordArray.toX32();
       */
      toX32: function toX32() {
        // Shortcuts
        var x64Words = this.words;
        var x64WordsLength = x64Words.length; // Convert

        var x32Words = [];

        for (var i = 0; i < x64WordsLength; i++) {
          var x64Word = x64Words[i];
          x32Words.push(x64Word.high);
          x32Words.push(x64Word.low);
        }

        return X32WordArray.create(x32Words, this.sigBytes);
      },

      /**
       * Creates a copy of this word array.
       *
       * @return {X64WordArray} The clone.
       *
       * @example
       *
       *     var clone = x64WordArray.clone();
       */
      clone: function clone() {
        var clone = Base.clone.call(this); // Clone "words" array

        var words = clone.words = this.words.slice(0); // Clone each X64Word object

        var wordsLength = words.length;

        for (var i = 0; i < wordsLength; i++) {
          words[i] = words[i].clone();
        }

        return clone;
      }
    });
  })();

  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var C_algo = C.algo; // Constants tables

    var RHO_OFFSETS = [];
    var PI_INDEXES = [];
    var ROUND_CONSTANTS = []; // Compute Constants

    (function () {
      // Compute rho offset constants
      var x = 1,
          y = 0;

      for (var t = 0; t < 24; t++) {
        RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
        var newX = y % 5;
        var newY = (2 * x + 3 * y) % 5;
        x = newX;
        y = newY;
      } // Compute pi index constants


      for (var x = 0; x < 5; x++) {
        for (var y = 0; y < 5; y++) {
          PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
        }
      } // Compute round constants


      var LFSR = 0x01;

      for (var i = 0; i < 24; i++) {
        var roundConstantMsw = 0;
        var roundConstantLsw = 0;

        for (var j = 0; j < 7; j++) {
          if (LFSR & 0x01) {
            var bitPosition = (1 << j) - 1;

            if (bitPosition < 32) {
              roundConstantLsw ^= 1 << bitPosition;
            } else
              /* if (bitPosition >= 32) */
              {
                roundConstantMsw ^= 1 << bitPosition - 32;
              }
          } // Compute next LFSR


          if (LFSR & 0x80) {
            // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
            LFSR = LFSR << 1 ^ 0x71;
          } else {
            LFSR <<= 1;
          }
        }

        ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
      }
    })(); // Reusable objects for temporary values


    var T = [];

    (function () {
      for (var i = 0; i < 25; i++) {
        T[i] = X64Word.create();
      }
    })();
    /**
     * SHA-3 hash algorithm.
     */


    var SHA3 = C_algo.SHA3 = Hasher.extend({
      /**
       * Configuration options.
       *
       * @property {number} outputLength
       *   The desired number of bits in the output hash.
       *   Only values permitted are: 224, 256, 384, 512.
       *   Default: 512
       */
      cfg: Hasher.cfg.extend({
        outputLength: 512
      }),
      _doReset: function _doReset() {
        var state = this._state = [];

        for (var i = 0; i < 25; i++) {
          state[i] = new X64Word.init();
        }

        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcuts
        var state = this._state;
        var nBlockSizeLanes = this.blockSize / 2; // Absorb

        for (var i = 0; i < nBlockSizeLanes; i++) {
          // Shortcuts
          var M2i = M[offset + 2 * i];
          var M2i1 = M[offset + 2 * i + 1]; // Swap endian

          M2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;
          M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00; // Absorb message into state

          var lane = state[i];
          lane.high ^= M2i1;
          lane.low ^= M2i;
        } // Rounds


        for (var round = 0; round < 24; round++) {
          // Theta
          for (var x = 0; x < 5; x++) {
            // Mix column lanes
            var tMsw = 0,
                tLsw = 0;

            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              tMsw ^= lane.high;
              tLsw ^= lane.low;
            } // Temporary values


            var Tx = T[x];
            Tx.high = tMsw;
            Tx.low = tLsw;
          }

          for (var x = 0; x < 5; x++) {
            // Shortcuts
            var Tx4 = T[(x + 4) % 5];
            var Tx1 = T[(x + 1) % 5];
            var Tx1Msw = Tx1.high;
            var Tx1Lsw = Tx1.low; // Mix surrounding columns

            var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
            var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);

            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              lane.high ^= tMsw;
              lane.low ^= tLsw;
            }
          } // Rho Pi


          for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
            // Shortcuts
            var lane = state[laneIndex];
            var laneMsw = lane.high;
            var laneLsw = lane.low;
            var rhoOffset = RHO_OFFSETS[laneIndex]; // Rotate lanes

            if (rhoOffset < 32) {
              var tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
              var tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
            } else
              /* if (rhoOffset >= 32) */
              {
                var tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                var tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
              } // Transpose lanes


            var TPiLane = T[PI_INDEXES[laneIndex]];
            TPiLane.high = tMsw;
            TPiLane.low = tLsw;
          } // Rho pi at x = y = 0


          var T0 = T[0];
          var state0 = state[0];
          T0.high = state0.high;
          T0.low = state0.low; // Chi

          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              // Shortcuts
              var laneIndex = x + 5 * y;
              var lane = state[laneIndex];
              var TLane = T[laneIndex];
              var Tx1Lane = T[(x + 1) % 5 + 5 * y];
              var Tx2Lane = T[(x + 2) % 5 + 5 * y]; // Mix rows

              lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
              lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
            }
          } // Iota


          var lane = state[0];
          var roundConstant = ROUND_CONSTANTS[round];
          lane.high ^= roundConstant.high;
          lane.low ^= roundConstant.low;
          ;
        }
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        var blockSizeBits = this.blockSize * 32; // Add padding

        dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
        dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
        data.sigBytes = dataWords.length * 4; // Hash final blocks

        this._process(); // Shortcuts


        var state = this._state;
        var outputLengthBytes = this.cfg.outputLength / 8;
        var outputLengthLanes = outputLengthBytes / 8; // Squeeze

        var hashWords = [];

        for (var i = 0; i < outputLengthLanes; i++) {
          // Shortcuts
          var lane = state[i];
          var laneMsw = lane.high;
          var laneLsw = lane.low; // Swap endian

          laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;
          laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00; // Squeeze state to retrieve hash

          hashWords.push(laneLsw);
          hashWords.push(laneMsw);
        } // Return final computed hash


        return new WordArray.init(hashWords, outputLengthBytes);
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);

        var state = clone._state = this._state.slice(0);

        for (var i = 0; i < 25; i++) {
          state[i] = state[i].clone();
        }

        return clone;
      }
    });
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA3('message');
     *     var hash = CryptoJS.SHA3(wordArray);
     */

    C.SHA3 = Hasher._createHelper(SHA3);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA3(message, key);
     */

    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
  })(Math);

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;

    function X64Word_create() {
      return X64Word.create.apply(X64Word, arguments);
    } // Constants


    var K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)]; // Reusable objects

    var W = [];

    (function () {
      for (var i = 0; i < 80; i++) {
        W[i] = X64Word_create();
      }
    })();
    /**
     * SHA-512 hash algorithm.
     */


    var SHA512 = C_algo.SHA512 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcuts
        var H = this._hash.words;
        var H0 = H[0];
        var H1 = H[1];
        var H2 = H[2];
        var H3 = H[3];
        var H4 = H[4];
        var H5 = H[5];
        var H6 = H[6];
        var H7 = H[7];
        var H0h = H0.high;
        var H0l = H0.low;
        var H1h = H1.high;
        var H1l = H1.low;
        var H2h = H2.high;
        var H2l = H2.low;
        var H3h = H3.high;
        var H3l = H3.low;
        var H4h = H4.high;
        var H4l = H4.low;
        var H5h = H5.high;
        var H5l = H5.low;
        var H6h = H6.high;
        var H6l = H6.low;
        var H7h = H7.high;
        var H7l = H7.low; // Working variables

        var ah = H0h;
        var al = H0l;
        var bh = H1h;
        var bl = H1l;
        var ch = H2h;
        var cl = H2l;
        var dh = H3h;
        var dl = H3l;
        var eh = H4h;
        var el = H4l;
        var fh = H5h;
        var fl = H5l;
        var gh = H6h;
        var gl = H6l;
        var hh = H7h;
        var hl = H7l; // Rounds

        for (var i = 0; i < 80; i++) {
          // Shortcut
          var Wi = W[i]; // Extend message

          if (i < 16) {
            var Wih = Wi.high = M[offset + i * 2] | 0;
            var Wil = Wi.low = M[offset + i * 2 + 1] | 0;
          } else {
            // Gamma0
            var gamma0x = W[i - 15];
            var gamma0xh = gamma0x.high;
            var gamma0xl = gamma0x.low;
            var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
            var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25); // Gamma1

            var gamma1x = W[i - 2];
            var gamma1xh = gamma1x.high;
            var gamma1xl = gamma1x.low;
            var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
            var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26); // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]

            var Wi7 = W[i - 7];
            var Wi7h = Wi7.high;
            var Wi7l = Wi7.low;
            var Wi16 = W[i - 16];
            var Wi16h = Wi16.high;
            var Wi16l = Wi16.low;
            var Wil = gamma0l + Wi7l;
            var Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
            var Wil = Wil + gamma1l;
            var Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
            var Wil = Wil + Wi16l;
            var Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
            Wi.high = Wih;
            Wi.low = Wil;
          }

          var chh = eh & fh ^ ~eh & gh;
          var chl = el & fl ^ ~el & gl;
          var majh = ah & bh ^ ah & ch ^ bh & ch;
          var majl = al & bl ^ al & cl ^ bl & cl;
          var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
          var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
          var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
          var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9); // t1 = h + sigma1 + ch + K[i] + W[i]

          var Ki = K[i];
          var Kih = Ki.high;
          var Kil = Ki.low;
          var t1l = hl + sigma1l;
          var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
          var t1l = t1l + chl;
          var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
          var t1l = t1l + Kil;
          var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
          var t1l = t1l + Wil;
          var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0); // t2 = sigma0 + maj

          var t2l = sigma0l + majl;
          var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0); // Update working variables

          hh = gh;
          hl = gl;
          gh = fh;
          gl = fl;
          fh = eh;
          fl = el;
          el = dl + t1l | 0;
          eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
          dh = ch;
          dl = cl;
          ch = bh;
          cl = bl;
          bh = ah;
          bl = al;
          al = t1l + t2l | 0;
          ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
        } // Intermediate hash value


        H0l = H0.low = H0l + al;
        H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
        H1l = H1.low = H1l + bl;
        H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
        H2l = H2.low = H2l + cl;
        H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
        H3l = H3.low = H3l + dl;
        H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
        H4l = H4.low = H4l + el;
        H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
        H5l = H5.low = H5l + fl;
        H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
        H6l = H6.low = H6l + gl;
        H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
        H7l = H7.low = H7l + hl;
        H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8; // Add padding

        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
        data.sigBytes = dataWords.length * 4; // Hash final blocks

        this._process(); // Convert hash to 32-bit word array before returning


        var hash = this._hash.toX32(); // Return final computed hash


        return hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      },
      blockSize: 1024 / 32
    });
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA512('message');
     *     var hash = CryptoJS.SHA512(wordArray);
     */

    C.SHA512 = Hasher._createHelper(SHA512);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA512(message, key);
     */

    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
  })();

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;
    var SHA512 = C_algo.SHA512;
    /**
     * SHA-384 hash algorithm.
     */

    var SHA384 = C_algo.SHA384 = SHA512.extend({
      _doReset: function _doReset() {
        this._hash = new X64WordArray.init([new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507), new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939), new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511), new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);
      },
      _doFinalize: function _doFinalize() {
        var hash = SHA512._doFinalize.call(this);

        hash.sigBytes -= 16;
        return hash;
      }
    });
    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA384('message');
     *     var hash = CryptoJS.SHA384(wordArray);
     */

    C.SHA384 = SHA512._createHelper(SHA384);
    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA384(message, key);
     */

    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
  })();
  /**
   * Cipher core components.
   */


  CryptoJS.lib.Cipher || function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var Base64 = C_enc.Base64;
    var C_algo = C.algo;
    var EvpKDF = C_algo.EvpKDF;
    /**
     * Abstract base cipher template.
     *
     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
     */

    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
      /**
       * Configuration options.
       *
       * @property {WordArray} iv The IV to use for this operation.
       */
      cfg: Base.extend(),

      /**
       * Creates this cipher in encryption mode.
       *
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {Cipher} A cipher instance.
       *
       * @static
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
       */
      createEncryptor: function createEncryptor(key, cfg) {
        return this.create(this._ENC_XFORM_MODE, key, cfg);
      },

      /**
       * Creates this cipher in decryption mode.
       *
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {Cipher} A cipher instance.
       *
       * @static
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
       */
      createDecryptor: function createDecryptor(key, cfg) {
        return this.create(this._DEC_XFORM_MODE, key, cfg);
      },

      /**
       * Initializes a newly created cipher.
       *
       * @param {number} xformMode Either the encryption or decryption transormation mode constant.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
       */
      init: function init(xformMode, key, cfg) {
        // Apply config defaults
        this.cfg = this.cfg.extend(cfg); // Store transform mode and key

        this._xformMode = xformMode;
        this._key = key; // Set initial values

        this.reset();
      },

      /**
       * Resets this cipher to its initial state.
       *
       * @example
       *
       *     cipher.reset();
       */
      reset: function reset() {
        // Reset data buffer
        BufferedBlockAlgorithm.reset.call(this); // Perform concrete-cipher logic

        this._doReset();
      },

      /**
       * Adds data to be encrypted or decrypted.
       *
       * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
       *
       * @return {WordArray} The data after processing.
       *
       * @example
       *
       *     var encrypted = cipher.process('data');
       *     var encrypted = cipher.process(wordArray);
       */
      process: function process(dataUpdate) {
        // Append
        this._append(dataUpdate); // Process available blocks


        return this._process();
      },

      /**
       * Finalizes the encryption or decryption process.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
       *
       * @return {WordArray} The data after final processing.
       *
       * @example
       *
       *     var encrypted = cipher.finalize();
       *     var encrypted = cipher.finalize('data');
       *     var encrypted = cipher.finalize(wordArray);
       */
      finalize: function finalize(dataUpdate) {
        // Final data update
        if (dataUpdate) {
          this._append(dataUpdate);
        } // Perform concrete-cipher logic


        var finalProcessedData = this._doFinalize();

        return finalProcessedData;
      },
      keySize: 128 / 32,
      ivSize: 128 / 32,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,

      /**
       * Creates shortcut functions to a cipher's object interface.
       *
       * @param {Cipher} cipher The cipher to create a helper for.
       *
       * @return {Object} An object with encrypt and decrypt shortcut functions.
       *
       * @static
       *
       * @example
       *
       *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
       */
      _createHelper: function () {
        function selectCipherStrategy(key) {
          if (typeof key == 'string') {
            return PasswordBasedCipher;
          } else {
            return SerializableCipher;
          }
        }

        return function (cipher) {
          return {
            encrypt: function encrypt(message, key, cfg) {
              return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
            },
            decrypt: function decrypt(ciphertext, key, cfg) {
              return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
            }
          };
        };
      }()
    });
    /**
     * Abstract base stream cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
     */

    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
      _doFinalize: function _doFinalize() {
        // Process partial blocks
        var finalProcessedBlocks = this._process(!!'flush');

        return finalProcessedBlocks;
      },
      blockSize: 1
    });
    /**
     * Mode namespace.
     */

    var C_mode = C.mode = {};
    /**
     * Abstract base block cipher mode template.
     */

    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
      /**
       * Creates this mode for encryption.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @static
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
       */
      createEncryptor: function createEncryptor(cipher, iv) {
        return this.Encryptor.create(cipher, iv);
      },

      /**
       * Creates this mode for decryption.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @static
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
       */
      createDecryptor: function createDecryptor(cipher, iv) {
        return this.Decryptor.create(cipher, iv);
      },

      /**
       * Initializes a newly created mode.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
       */
      init: function init(cipher, iv) {
        this._cipher = cipher;
        this._iv = iv;
      }
    });
    /**
     * Cipher Block Chaining mode.
     */

    var CBC = C_mode.CBC = function () {
      /**
       * Abstract base CBC mode.
       */
      var CBC = BlockCipherMode.extend();
      /**
       * CBC encryptor.
       */

      CBC.Encryptor = CBC.extend({
        /**
         * Processes the data block at offset.
         *
         * @param {Array} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         *
         * @example
         *
         *     mode.processBlock(data.words, offset);
         */
        processBlock: function processBlock(words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize; // XOR and encrypt

          xorBlock.call(this, words, offset, blockSize);
          cipher.encryptBlock(words, offset); // Remember this block to use with next block

          this._prevBlock = words.slice(offset, offset + blockSize);
        }
      });
      /**
       * CBC decryptor.
       */

      CBC.Decryptor = CBC.extend({
        /**
         * Processes the data block at offset.
         *
         * @param {Array} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         *
         * @example
         *
         *     mode.processBlock(data.words, offset);
         */
        processBlock: function processBlock(words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize; // Remember this block to use with next block

          var thisBlock = words.slice(offset, offset + blockSize); // Decrypt and XOR

          cipher.decryptBlock(words, offset);
          xorBlock.call(this, words, offset, blockSize); // This block becomes the previous block

          this._prevBlock = thisBlock;
        }
      });

      function xorBlock(words, offset, blockSize) {
        // Shortcut
        var iv = this._iv; // Choose mixing block

        if (iv) {
          var block = iv; // Remove IV for subsequent blocks

          this._iv = undefined;
        } else {
          var block = this._prevBlock;
        } // XOR blocks


        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= block[i];
        }
      }

      return CBC;
    }();
    /**
     * Padding namespace.
     */


    var C_pad = C.pad = {};
    /**
     * PKCS #5/7 padding strategy.
     */

    var Pkcs7 = C_pad.Pkcs7 = {
      /**
       * Pads data using the algorithm defined in PKCS #5/7.
       *
       * @param {WordArray} data The data to pad.
       * @param {number} blockSize The multiple that the data should be padded to.
       *
       * @static
       *
       * @example
       *
       *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
       */
      pad: function pad(data, blockSize) {
        // Shortcut
        var blockSizeBytes = blockSize * 4; // Count padding bytes

        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes; // Create padding word

        var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes; // Create padding

        var paddingWords = [];

        for (var i = 0; i < nPaddingBytes; i += 4) {
          paddingWords.push(paddingWord);
        }

        var padding = WordArray.create(paddingWords, nPaddingBytes); // Add padding

        data.concat(padding);
      },

      /**
       * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
       *
       * @param {WordArray} data The data to unpad.
       *
       * @static
       *
       * @example
       *
       *     CryptoJS.pad.Pkcs7.unpad(wordArray);
       */
      unpad: function unpad(data) {
        // Get number of padding bytes from last byte
        var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

        data.sigBytes -= nPaddingBytes;
      }
    };
    /**
     * Abstract base block cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
     */

    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
      /**
       * Configuration options.
       *
       * @property {Mode} mode The block mode to use. Default: CBC
       * @property {Padding} padding The padding strategy to use. Default: Pkcs7
       */
      cfg: Cipher.cfg.extend({
        mode: CBC,
        padding: Pkcs7
      }),
      reset: function reset() {
        // Reset cipher
        Cipher.reset.call(this); // Shortcuts

        var cfg = this.cfg;
        var iv = cfg.iv;
        var mode = cfg.mode; // Reset block mode

        if (this._xformMode == this._ENC_XFORM_MODE) {
          var modeCreator = mode.createEncryptor;
        } else
          /* if (this._xformMode == this._DEC_XFORM_MODE) */
          {
            var modeCreator = mode.createDecryptor; // Keep at least one block in the buffer for unpadding

            this._minBufferSize = 1;
          }

        if (this._mode && this._mode.__creator == modeCreator) {
          this._mode.init(this, iv && iv.words);
        } else {
          this._mode = modeCreator.call(mode, this, iv && iv.words);
          this._mode.__creator = modeCreator;
        }
      },
      _doProcessBlock: function _doProcessBlock(words, offset) {
        this._mode.processBlock(words, offset);
      },
      _doFinalize: function _doFinalize() {
        // Shortcut
        var padding = this.cfg.padding; // Finalize

        if (this._xformMode == this._ENC_XFORM_MODE) {
          // Pad data
          padding.pad(this._data, this.blockSize); // Process final blocks

          var finalProcessedBlocks = this._process(!!'flush');
        } else
          /* if (this._xformMode == this._DEC_XFORM_MODE) */
          {
            // Process final blocks
            var finalProcessedBlocks = this._process(!!'flush'); // Unpad data


            padding.unpad(finalProcessedBlocks);
          }

        return finalProcessedBlocks;
      },
      blockSize: 128 / 32
    });
    /**
     * A collection of cipher parameters.
     *
     * @property {WordArray} ciphertext The raw ciphertext.
     * @property {WordArray} key The key to this ciphertext.
     * @property {WordArray} iv The IV used in the ciphering operation.
     * @property {WordArray} salt The salt used with a key derivation function.
     * @property {Cipher} algorithm The cipher algorithm.
     * @property {Mode} mode The block mode used in the ciphering operation.
     * @property {Padding} padding The padding scheme used in the ciphering operation.
     * @property {number} blockSize The block size of the cipher.
     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
     */

    var CipherParams = C_lib.CipherParams = Base.extend({
      /**
       * Initializes a newly created cipher params object.
       *
       * @param {Object} cipherParams An object with any of the possible cipher parameters.
       *
       * @example
       *
       *     var cipherParams = CryptoJS.lib.CipherParams.create({
       *         ciphertext: ciphertextWordArray,
       *         key: keyWordArray,
       *         iv: ivWordArray,
       *         salt: saltWordArray,
       *         algorithm: CryptoJS.algo.AES,
       *         mode: CryptoJS.mode.CBC,
       *         padding: CryptoJS.pad.PKCS7,
       *         blockSize: 4,
       *         formatter: CryptoJS.format.OpenSSL
       *     });
       */
      init: function init(cipherParams) {
        this.mixIn(cipherParams);
      },

      /**
       * Converts this cipher params object to a string.
       *
       * @param {Format} formatter (Optional) The formatting strategy to use.
       *
       * @return {string} The stringified cipher params.
       *
       * @throws Error If neither the formatter nor the default formatter is set.
       *
       * @example
       *
       *     var string = cipherParams + '';
       *     var string = cipherParams.toString();
       *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
       */
      toString: function toString(formatter) {
        return (formatter || this.formatter).stringify(this);
      }
    });
    /**
     * Format namespace.
     */

    var C_format = C.format = {};
    /**
     * OpenSSL formatting strategy.
     */

    var OpenSSLFormatter = C_format.OpenSSL = {
      /**
       * Converts a cipher params object to an OpenSSL-compatible string.
       *
       * @param {CipherParams} cipherParams The cipher params object.
       *
       * @return {string} The OpenSSL-compatible string.
       *
       * @static
       *
       * @example
       *
       *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
       */
      stringify: function stringify(cipherParams) {
        // Shortcuts
        var ciphertext = cipherParams.ciphertext;
        var salt = cipherParams.salt; // Format

        if (salt) {
          var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
        } else {
          var wordArray = ciphertext;
        }

        return wordArray.toString(Base64);
      },

      /**
       * Converts an OpenSSL-compatible string to a cipher params object.
       *
       * @param {string} openSSLStr The OpenSSL-compatible string.
       *
       * @return {CipherParams} The cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
       */
      parse: function parse(openSSLStr) {
        // Parse base64
        var ciphertext = Base64.parse(openSSLStr); // Shortcut

        var ciphertextWords = ciphertext.words; // Test for salt

        if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
          // Extract salt
          var salt = WordArray.create(ciphertextWords.slice(2, 4)); // Remove salt from ciphertext

          ciphertextWords.splice(0, 4);
          ciphertext.sigBytes -= 16;
        }

        return CipherParams.create({
          ciphertext: ciphertext,
          salt: salt
        });
      }
    };
    /**
     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
     */

    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
      /**
       * Configuration options.
       *
       * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
       */
      cfg: Base.extend({
        format: OpenSSLFormatter
      }),

      /**
       * Encrypts a message.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {WordArray|string} message The message to encrypt.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {CipherParams} A cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       */
      encrypt: function encrypt(cipher, message, key, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg); // Encrypt

        var encryptor = cipher.createEncryptor(key, cfg);
        var ciphertext = encryptor.finalize(message); // Shortcut

        var cipherCfg = encryptor.cfg; // Create and return serializable cipher params

        return CipherParams.create({
          ciphertext: ciphertext,
          key: key,
          iv: cipherCfg.iv,
          algorithm: cipher,
          mode: cipherCfg.mode,
          padding: cipherCfg.padding,
          blockSize: cipher.blockSize,
          formatter: cfg.format
        });
      },

      /**
       * Decrypts serialized ciphertext.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {WordArray} The plaintext.
       *
       * @static
       *
       * @example
       *
       *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       */
      decrypt: function decrypt(cipher, ciphertext, key, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg); // Convert string to CipherParams

        ciphertext = this._parse(ciphertext, cfg.format); // Decrypt

        var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
        return plaintext;
      },

      /**
       * Converts serialized ciphertext to CipherParams,
       * else assumed CipherParams already and returns ciphertext unchanged.
       *
       * @param {CipherParams|string} ciphertext The ciphertext.
       * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
       *
       * @return {CipherParams} The unserialized ciphertext.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
       */
      _parse: function _parse(ciphertext, format) {
        if (typeof ciphertext == 'string') {
          return format.parse(ciphertext, this);
        } else {
          return ciphertext;
        }
      }
    });
    /**
     * Key derivation function namespace.
     */

    var C_kdf = C.kdf = {};
    /**
     * OpenSSL key derivation function.
     */

    var OpenSSLKdf = C_kdf.OpenSSL = {
      /**
       * Derives a key and IV from a password.
       *
       * @param {string} password The password to derive from.
       * @param {number} keySize The size in words of the key to generate.
       * @param {number} ivSize The size in words of the IV to generate.
       * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
       *
       * @return {CipherParams} A cipher params object with the key, IV, and salt.
       *
       * @static
       *
       * @example
       *
       *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
       *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
       */
      execute: function execute(password, keySize, ivSize, salt) {
        // Generate random salt
        if (!salt) {
          salt = WordArray.random(64 / 8);
        } // Derive key and IV


        var key = EvpKDF.create({
          keySize: keySize + ivSize
        }).compute(password, salt); // Separate key and IV

        var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
        key.sigBytes = keySize * 4; // Return params

        return CipherParams.create({
          key: key,
          iv: iv,
          salt: salt
        });
      }
    };
    /**
     * A serializable cipher wrapper that derives the key from a password,
     * and returns ciphertext as a serializable cipher params object.
     */

    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
      /**
       * Configuration options.
       *
       * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
       */
      cfg: SerializableCipher.cfg.extend({
        kdf: OpenSSLKdf
      }),

      /**
       * Encrypts a message using a password.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {WordArray|string} message The message to encrypt.
       * @param {string} password The password.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {CipherParams} A cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
       *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
       */
      encrypt: function encrypt(cipher, message, password, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg); // Derive key and other params

        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize); // Add IV to config

        cfg.iv = derivedParams.iv; // Encrypt

        var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg); // Mix in derived params

        ciphertext.mixIn(derivedParams);
        return ciphertext;
      },

      /**
       * Decrypts serialized ciphertext using a password.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
       * @param {string} password The password.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {WordArray} The plaintext.
       *
       * @static
       *
       * @example
       *
       *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
       *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
       */
      decrypt: function decrypt(cipher, ciphertext, password, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg); // Convert string to CipherParams

        ciphertext = this._parse(ciphertext, cfg.format); // Derive key and other params

        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt); // Add IV to config

        cfg.iv = derivedParams.iv; // Decrypt

        var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
        return plaintext;
      }
    });
  }();
  /**
   * Cipher Feedback block mode.
   */

  CryptoJS.mode.CFB = function () {
    var CFB = CryptoJS.lib.BlockCipherMode.extend();
    CFB.Encryptor = CFB.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // Remember this block to use with next block

        this._prevBlock = words.slice(offset, offset + blockSize);
      }
    });
    CFB.Decryptor = CFB.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize; // Remember this block to use with next block

        var thisBlock = words.slice(offset, offset + blockSize);
        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // This block becomes the previous block

        this._prevBlock = thisBlock;
      }
    });

    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
      // Shortcut
      var iv = this._iv; // Generate keystream

      if (iv) {
        var keystream = iv.slice(0); // Remove IV for subsequent blocks

        this._iv = undefined;
      } else {
        var keystream = this._prevBlock;
      }

      cipher.encryptBlock(keystream, 0); // Encrypt

      for (var i = 0; i < blockSize; i++) {
        words[offset + i] ^= keystream[i];
      }
    }

    return CFB;
  }();
  /**
   * Electronic Codebook block mode.
   */


  CryptoJS.mode.ECB = function () {
    var ECB = CryptoJS.lib.BlockCipherMode.extend();
    ECB.Encryptor = ECB.extend({
      processBlock: function processBlock(words, offset) {
        this._cipher.encryptBlock(words, offset);
      }
    });
    ECB.Decryptor = ECB.extend({
      processBlock: function processBlock(words, offset) {
        this._cipher.decryptBlock(words, offset);
      }
    });
    return ECB;
  }();
  /**
   * ANSI X.923 padding strategy.
   */


  CryptoJS.pad.AnsiX923 = {
    pad: function pad(data, blockSize) {
      // Shortcuts
      var dataSigBytes = data.sigBytes;
      var blockSizeBytes = blockSize * 4; // Count padding bytes

      var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes; // Compute last byte position

      var lastBytePos = dataSigBytes + nPaddingBytes - 1; // Pad

      data.clamp();
      data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
      data.sigBytes += nPaddingBytes;
    },
    unpad: function unpad(data) {
      // Get number of padding bytes from last byte
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

      data.sigBytes -= nPaddingBytes;
    }
  };
  /**
   * ISO 10126 padding strategy.
   */

  CryptoJS.pad.Iso10126 = {
    pad: function pad(data, blockSize) {
      // Shortcut
      var blockSizeBytes = blockSize * 4; // Count padding bytes

      var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes; // Pad

      data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
    },
    unpad: function unpad(data) {
      // Get number of padding bytes from last byte
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

      data.sigBytes -= nPaddingBytes;
    }
  };
  /**
   * ISO/IEC 9797-1 Padding Method 2.
   */

  CryptoJS.pad.Iso97971 = {
    pad: function pad(data, blockSize) {
      // Add 0x80 byte
      data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1)); // Zero pad the rest

      CryptoJS.pad.ZeroPadding.pad(data, blockSize);
    },
    unpad: function unpad(data) {
      // Remove zero padding
      CryptoJS.pad.ZeroPadding.unpad(data); // Remove one more byte -- the 0x80 byte

      data.sigBytes--;
    }
  };
  /**
   * Output Feedback block mode.
   */

  CryptoJS.mode.OFB = function () {
    var OFB = CryptoJS.lib.BlockCipherMode.extend();
    var Encryptor = OFB.Encryptor = OFB.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var keystream = this._keystream; // Generate keystream

        if (iv) {
          keystream = this._keystream = iv.slice(0); // Remove IV for subsequent blocks

          this._iv = undefined;
        }

        cipher.encryptBlock(keystream, 0); // Encrypt

        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
    });
    OFB.Decryptor = Encryptor;
    return OFB;
  }();
  /**
   * A noop padding strategy.
   */


  CryptoJS.pad.NoPadding = {
    pad: function pad() {},
    unpad: function unpad() {}
  };

  (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var CipherParams = C_lib.CipherParams;
    var C_enc = C.enc;
    var Hex = C_enc.Hex;
    var C_format = C.format;
    var HexFormatter = C_format.Hex = {
      /**
       * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
       *
       * @param {CipherParams} cipherParams The cipher params object.
       *
       * @return {string} The hexadecimally encoded string.
       *
       * @static
       *
       * @example
       *
       *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
       */
      stringify: function stringify(cipherParams) {
        return cipherParams.ciphertext.toString(Hex);
      },

      /**
       * Converts a hexadecimally encoded ciphertext string to a cipher params object.
       *
       * @param {string} input The hexadecimally encoded string.
       *
       * @return {CipherParams} The cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
       */
      parse: function parse(input) {
        var ciphertext = Hex.parse(input);
        return CipherParams.create({
          ciphertext: ciphertext
        });
      }
    };
  })();

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo; // Lookup tables

    var SBOX = [];
    var INV_SBOX = [];
    var SUB_MIX_0 = [];
    var SUB_MIX_1 = [];
    var SUB_MIX_2 = [];
    var SUB_MIX_3 = [];
    var INV_SUB_MIX_0 = [];
    var INV_SUB_MIX_1 = [];
    var INV_SUB_MIX_2 = [];
    var INV_SUB_MIX_3 = []; // Compute lookup tables

    (function () {
      // Compute double table
      var d = [];

      for (var i = 0; i < 256; i++) {
        if (i < 128) {
          d[i] = i << 1;
        } else {
          d[i] = i << 1 ^ 0x11b;
        }
      } // Walk GF(2^8)


      var x = 0;
      var xi = 0;

      for (var i = 0; i < 256; i++) {
        // Compute sbox
        var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
        sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
        SBOX[x] = sx;
        INV_SBOX[sx] = x; // Compute multiplication

        var x2 = d[x];
        var x4 = d[x2];
        var x8 = d[x4]; // Compute sub bytes, mix columns tables

        var t = d[sx] * 0x101 ^ sx * 0x1010100;
        SUB_MIX_0[x] = t << 24 | t >>> 8;
        SUB_MIX_1[x] = t << 16 | t >>> 16;
        SUB_MIX_2[x] = t << 8 | t >>> 24;
        SUB_MIX_3[x] = t; // Compute inv sub bytes, inv mix columns tables

        var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
        INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
        INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
        INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
        INV_SUB_MIX_3[sx] = t; // Compute next counter

        if (!x) {
          x = xi = 1;
        } else {
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        }
      }
    })(); // Precomputed Rcon lookup


    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
    /**
     * AES block cipher algorithm.
     */

    var AES = C_algo.AES = BlockCipher.extend({
      _doReset: function _doReset() {
        // Skip reset of nRounds has been set before and key did not change
        if (this._nRounds && this._keyPriorReset === this._key) {
          return;
        } // Shortcuts


        var key = this._keyPriorReset = this._key;
        var keyWords = key.words;
        var keySize = key.sigBytes / 4; // Compute number of rounds

        var nRounds = this._nRounds = keySize + 6; // Compute number of key schedule rows

        var ksRows = (nRounds + 1) * 4; // Compute key schedule

        var keySchedule = this._keySchedule = [];

        for (var ksRow = 0; ksRow < ksRows; ksRow++) {
          if (ksRow < keySize) {
            keySchedule[ksRow] = keyWords[ksRow];
          } else {
            var t = keySchedule[ksRow - 1];

            if (!(ksRow % keySize)) {
              // Rot word
              t = t << 8 | t >>> 24; // Sub word

              t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff]; // Mix Rcon

              t ^= RCON[ksRow / keySize | 0] << 24;
            } else if (keySize > 6 && ksRow % keySize == 4) {
              // Sub word
              t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
            }

            keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
          }
        } // Compute inv key schedule


        var invKeySchedule = this._invKeySchedule = [];

        for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
          var ksRow = ksRows - invKsRow;

          if (invKsRow % 4) {
            var t = keySchedule[ksRow];
          } else {
            var t = keySchedule[ksRow - 4];
          }

          if (invKsRow < 4 || ksRow <= 4) {
            invKeySchedule[invKsRow] = t;
          } else {
            invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
          }
        }
      },
      encryptBlock: function encryptBlock(M, offset) {
        this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
      },
      decryptBlock: function decryptBlock(M, offset) {
        // Swap 2nd and 4th rows
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;

        this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX); // Inv swap 2nd and 4th rows


        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
      },
      _doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
        // Shortcut
        var nRounds = this._nRounds; // Get input, add round key

        var s0 = M[offset] ^ keySchedule[0];
        var s1 = M[offset + 1] ^ keySchedule[1];
        var s2 = M[offset + 2] ^ keySchedule[2];
        var s3 = M[offset + 3] ^ keySchedule[3]; // Key schedule row counter

        var ksRow = 4; // Rounds

        for (var round = 1; round < nRounds; round++) {
          // Shift rows, sub bytes, mix columns, add round key
          var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
          var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
          var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
          var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++]; // Update state

          s0 = t0;
          s1 = t1;
          s2 = t2;
          s3 = t3;
        } // Shift rows, sub bytes, add round key


        var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
        var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
        var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
        var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++]; // Set output

        M[offset] = t0;
        M[offset + 1] = t1;
        M[offset + 2] = t2;
        M[offset + 3] = t3;
      },
      keySize: 256 / 32
    });
    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
     */

    C.AES = BlockCipher._createHelper(AES);
  })();

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo; // Permuted Choice 1 constants

    var PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]; // Permuted Choice 2 constants

    var PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]; // Cumulative bit shift constants

    var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]; // SBOXes and round permutation constants

    var SBOX_P = [{
      0x0: 0x808200,
      0x10000000: 0x8000,
      0x20000000: 0x808002,
      0x30000000: 0x2,
      0x40000000: 0x200,
      0x50000000: 0x808202,
      0x60000000: 0x800202,
      0x70000000: 0x800000,
      0x80000000: 0x202,
      0x90000000: 0x800200,
      0xa0000000: 0x8200,
      0xb0000000: 0x808000,
      0xc0000000: 0x8002,
      0xd0000000: 0x800002,
      0xe0000000: 0x0,
      0xf0000000: 0x8202,
      0x8000000: 0x0,
      0x18000000: 0x808202,
      0x28000000: 0x8202,
      0x38000000: 0x8000,
      0x48000000: 0x808200,
      0x58000000: 0x200,
      0x68000000: 0x808002,
      0x78000000: 0x2,
      0x88000000: 0x800200,
      0x98000000: 0x8200,
      0xa8000000: 0x808000,
      0xb8000000: 0x800202,
      0xc8000000: 0x800002,
      0xd8000000: 0x8002,
      0xe8000000: 0x202,
      0xf8000000: 0x800000,
      0x1: 0x8000,
      0x10000001: 0x2,
      0x20000001: 0x808200,
      0x30000001: 0x800000,
      0x40000001: 0x808002,
      0x50000001: 0x8200,
      0x60000001: 0x200,
      0x70000001: 0x800202,
      0x80000001: 0x808202,
      0x90000001: 0x808000,
      0xa0000001: 0x800002,
      0xb0000001: 0x8202,
      0xc0000001: 0x202,
      0xd0000001: 0x800200,
      0xe0000001: 0x8002,
      0xf0000001: 0x0,
      0x8000001: 0x808202,
      0x18000001: 0x808000,
      0x28000001: 0x800000,
      0x38000001: 0x200,
      0x48000001: 0x8000,
      0x58000001: 0x800002,
      0x68000001: 0x2,
      0x78000001: 0x8202,
      0x88000001: 0x8002,
      0x98000001: 0x800202,
      0xa8000001: 0x202,
      0xb8000001: 0x808200,
      0xc8000001: 0x800200,
      0xd8000001: 0x0,
      0xe8000001: 0x8200,
      0xf8000001: 0x808002
    }, {
      0x0: 0x40084010,
      0x1000000: 0x4000,
      0x2000000: 0x80000,
      0x3000000: 0x40080010,
      0x4000000: 0x40000010,
      0x5000000: 0x40084000,
      0x6000000: 0x40004000,
      0x7000000: 0x10,
      0x8000000: 0x84000,
      0x9000000: 0x40004010,
      0xa000000: 0x40000000,
      0xb000000: 0x84010,
      0xc000000: 0x80010,
      0xd000000: 0x0,
      0xe000000: 0x4010,
      0xf000000: 0x40080000,
      0x800000: 0x40004000,
      0x1800000: 0x84010,
      0x2800000: 0x10,
      0x3800000: 0x40004010,
      0x4800000: 0x40084010,
      0x5800000: 0x40000000,
      0x6800000: 0x80000,
      0x7800000: 0x40080010,
      0x8800000: 0x80010,
      0x9800000: 0x0,
      0xa800000: 0x4000,
      0xb800000: 0x40080000,
      0xc800000: 0x40000010,
      0xd800000: 0x84000,
      0xe800000: 0x40084000,
      0xf800000: 0x4010,
      0x10000000: 0x0,
      0x11000000: 0x40080010,
      0x12000000: 0x40004010,
      0x13000000: 0x40084000,
      0x14000000: 0x40080000,
      0x15000000: 0x10,
      0x16000000: 0x84010,
      0x17000000: 0x4000,
      0x18000000: 0x4010,
      0x19000000: 0x80000,
      0x1a000000: 0x80010,
      0x1b000000: 0x40000010,
      0x1c000000: 0x84000,
      0x1d000000: 0x40004000,
      0x1e000000: 0x40000000,
      0x1f000000: 0x40084010,
      0x10800000: 0x84010,
      0x11800000: 0x80000,
      0x12800000: 0x40080000,
      0x13800000: 0x4000,
      0x14800000: 0x40004000,
      0x15800000: 0x40084010,
      0x16800000: 0x10,
      0x17800000: 0x40000000,
      0x18800000: 0x40084000,
      0x19800000: 0x40000010,
      0x1a800000: 0x40004010,
      0x1b800000: 0x80010,
      0x1c800000: 0x0,
      0x1d800000: 0x4010,
      0x1e800000: 0x40080010,
      0x1f800000: 0x84000
    }, {
      0x0: 0x104,
      0x100000: 0x0,
      0x200000: 0x4000100,
      0x300000: 0x10104,
      0x400000: 0x10004,
      0x500000: 0x4000004,
      0x600000: 0x4010104,
      0x700000: 0x4010000,
      0x800000: 0x4000000,
      0x900000: 0x4010100,
      0xa00000: 0x10100,
      0xb00000: 0x4010004,
      0xc00000: 0x4000104,
      0xd00000: 0x10000,
      0xe00000: 0x4,
      0xf00000: 0x100,
      0x80000: 0x4010100,
      0x180000: 0x4010004,
      0x280000: 0x0,
      0x380000: 0x4000100,
      0x480000: 0x4000004,
      0x580000: 0x10000,
      0x680000: 0x10004,
      0x780000: 0x104,
      0x880000: 0x4,
      0x980000: 0x100,
      0xa80000: 0x4010000,
      0xb80000: 0x10104,
      0xc80000: 0x10100,
      0xd80000: 0x4000104,
      0xe80000: 0x4010104,
      0xf80000: 0x4000000,
      0x1000000: 0x4010100,
      0x1100000: 0x10004,
      0x1200000: 0x10000,
      0x1300000: 0x4000100,
      0x1400000: 0x100,
      0x1500000: 0x4010104,
      0x1600000: 0x4000004,
      0x1700000: 0x0,
      0x1800000: 0x4000104,
      0x1900000: 0x4000000,
      0x1a00000: 0x4,
      0x1b00000: 0x10100,
      0x1c00000: 0x4010000,
      0x1d00000: 0x104,
      0x1e00000: 0x10104,
      0x1f00000: 0x4010004,
      0x1080000: 0x4000000,
      0x1180000: 0x104,
      0x1280000: 0x4010100,
      0x1380000: 0x0,
      0x1480000: 0x10004,
      0x1580000: 0x4000100,
      0x1680000: 0x100,
      0x1780000: 0x4010004,
      0x1880000: 0x10000,
      0x1980000: 0x4010104,
      0x1a80000: 0x10104,
      0x1b80000: 0x4000004,
      0x1c80000: 0x4000104,
      0x1d80000: 0x4010000,
      0x1e80000: 0x4,
      0x1f80000: 0x10100
    }, {
      0x0: 0x80401000,
      0x10000: 0x80001040,
      0x20000: 0x401040,
      0x30000: 0x80400000,
      0x40000: 0x0,
      0x50000: 0x401000,
      0x60000: 0x80000040,
      0x70000: 0x400040,
      0x80000: 0x80000000,
      0x90000: 0x400000,
      0xa0000: 0x40,
      0xb0000: 0x80001000,
      0xc0000: 0x80400040,
      0xd0000: 0x1040,
      0xe0000: 0x1000,
      0xf0000: 0x80401040,
      0x8000: 0x80001040,
      0x18000: 0x40,
      0x28000: 0x80400040,
      0x38000: 0x80001000,
      0x48000: 0x401000,
      0x58000: 0x80401040,
      0x68000: 0x0,
      0x78000: 0x80400000,
      0x88000: 0x1000,
      0x98000: 0x80401000,
      0xa8000: 0x400000,
      0xb8000: 0x1040,
      0xc8000: 0x80000000,
      0xd8000: 0x400040,
      0xe8000: 0x401040,
      0xf8000: 0x80000040,
      0x100000: 0x400040,
      0x110000: 0x401000,
      0x120000: 0x80000040,
      0x130000: 0x0,
      0x140000: 0x1040,
      0x150000: 0x80400040,
      0x160000: 0x80401000,
      0x170000: 0x80001040,
      0x180000: 0x80401040,
      0x190000: 0x80000000,
      0x1a0000: 0x80400000,
      0x1b0000: 0x401040,
      0x1c0000: 0x80001000,
      0x1d0000: 0x400000,
      0x1e0000: 0x40,
      0x1f0000: 0x1000,
      0x108000: 0x80400000,
      0x118000: 0x80401040,
      0x128000: 0x0,
      0x138000: 0x401000,
      0x148000: 0x400040,
      0x158000: 0x80000000,
      0x168000: 0x80001040,
      0x178000: 0x40,
      0x188000: 0x80000040,
      0x198000: 0x1000,
      0x1a8000: 0x80001000,
      0x1b8000: 0x80400040,
      0x1c8000: 0x1040,
      0x1d8000: 0x80401000,
      0x1e8000: 0x400000,
      0x1f8000: 0x401040
    }, {
      0x0: 0x80,
      0x1000: 0x1040000,
      0x2000: 0x40000,
      0x3000: 0x20000000,
      0x4000: 0x20040080,
      0x5000: 0x1000080,
      0x6000: 0x21000080,
      0x7000: 0x40080,
      0x8000: 0x1000000,
      0x9000: 0x20040000,
      0xa000: 0x20000080,
      0xb000: 0x21040080,
      0xc000: 0x21040000,
      0xd000: 0x0,
      0xe000: 0x1040080,
      0xf000: 0x21000000,
      0x800: 0x1040080,
      0x1800: 0x21000080,
      0x2800: 0x80,
      0x3800: 0x1040000,
      0x4800: 0x40000,
      0x5800: 0x20040080,
      0x6800: 0x21040000,
      0x7800: 0x20000000,
      0x8800: 0x20040000,
      0x9800: 0x0,
      0xa800: 0x21040080,
      0xb800: 0x1000080,
      0xc800: 0x20000080,
      0xd800: 0x21000000,
      0xe800: 0x1000000,
      0xf800: 0x40080,
      0x10000: 0x40000,
      0x11000: 0x80,
      0x12000: 0x20000000,
      0x13000: 0x21000080,
      0x14000: 0x1000080,
      0x15000: 0x21040000,
      0x16000: 0x20040080,
      0x17000: 0x1000000,
      0x18000: 0x21040080,
      0x19000: 0x21000000,
      0x1a000: 0x1040000,
      0x1b000: 0x20040000,
      0x1c000: 0x40080,
      0x1d000: 0x20000080,
      0x1e000: 0x0,
      0x1f000: 0x1040080,
      0x10800: 0x21000080,
      0x11800: 0x1000000,
      0x12800: 0x1040000,
      0x13800: 0x20040080,
      0x14800: 0x20000000,
      0x15800: 0x1040080,
      0x16800: 0x80,
      0x17800: 0x21040000,
      0x18800: 0x40080,
      0x19800: 0x21040080,
      0x1a800: 0x0,
      0x1b800: 0x21000000,
      0x1c800: 0x1000080,
      0x1d800: 0x40000,
      0x1e800: 0x20040000,
      0x1f800: 0x20000080
    }, {
      0x0: 0x10000008,
      0x100: 0x2000,
      0x200: 0x10200000,
      0x300: 0x10202008,
      0x400: 0x10002000,
      0x500: 0x200000,
      0x600: 0x200008,
      0x700: 0x10000000,
      0x800: 0x0,
      0x900: 0x10002008,
      0xa00: 0x202000,
      0xb00: 0x8,
      0xc00: 0x10200008,
      0xd00: 0x202008,
      0xe00: 0x2008,
      0xf00: 0x10202000,
      0x80: 0x10200000,
      0x180: 0x10202008,
      0x280: 0x8,
      0x380: 0x200000,
      0x480: 0x202008,
      0x580: 0x10000008,
      0x680: 0x10002000,
      0x780: 0x2008,
      0x880: 0x200008,
      0x980: 0x2000,
      0xa80: 0x10002008,
      0xb80: 0x10200008,
      0xc80: 0x0,
      0xd80: 0x10202000,
      0xe80: 0x202000,
      0xf80: 0x10000000,
      0x1000: 0x10002000,
      0x1100: 0x10200008,
      0x1200: 0x10202008,
      0x1300: 0x2008,
      0x1400: 0x200000,
      0x1500: 0x10000000,
      0x1600: 0x10000008,
      0x1700: 0x202000,
      0x1800: 0x202008,
      0x1900: 0x0,
      0x1a00: 0x8,
      0x1b00: 0x10200000,
      0x1c00: 0x2000,
      0x1d00: 0x10002008,
      0x1e00: 0x10202000,
      0x1f00: 0x200008,
      0x1080: 0x8,
      0x1180: 0x202000,
      0x1280: 0x200000,
      0x1380: 0x10000008,
      0x1480: 0x10002000,
      0x1580: 0x2008,
      0x1680: 0x10202008,
      0x1780: 0x10200000,
      0x1880: 0x10202000,
      0x1980: 0x10200008,
      0x1a80: 0x2000,
      0x1b80: 0x202008,
      0x1c80: 0x200008,
      0x1d80: 0x0,
      0x1e80: 0x10000000,
      0x1f80: 0x10002008
    }, {
      0x0: 0x100000,
      0x10: 0x2000401,
      0x20: 0x400,
      0x30: 0x100401,
      0x40: 0x2100401,
      0x50: 0x0,
      0x60: 0x1,
      0x70: 0x2100001,
      0x80: 0x2000400,
      0x90: 0x100001,
      0xa0: 0x2000001,
      0xb0: 0x2100400,
      0xc0: 0x2100000,
      0xd0: 0x401,
      0xe0: 0x100400,
      0xf0: 0x2000000,
      0x8: 0x2100001,
      0x18: 0x0,
      0x28: 0x2000401,
      0x38: 0x2100400,
      0x48: 0x100000,
      0x58: 0x2000001,
      0x68: 0x2000000,
      0x78: 0x401,
      0x88: 0x100401,
      0x98: 0x2000400,
      0xa8: 0x2100000,
      0xb8: 0x100001,
      0xc8: 0x400,
      0xd8: 0x2100401,
      0xe8: 0x1,
      0xf8: 0x100400,
      0x100: 0x2000000,
      0x110: 0x100000,
      0x120: 0x2000401,
      0x130: 0x2100001,
      0x140: 0x100001,
      0x150: 0x2000400,
      0x160: 0x2100400,
      0x170: 0x100401,
      0x180: 0x401,
      0x190: 0x2100401,
      0x1a0: 0x100400,
      0x1b0: 0x1,
      0x1c0: 0x0,
      0x1d0: 0x2100000,
      0x1e0: 0x2000001,
      0x1f0: 0x400,
      0x108: 0x100400,
      0x118: 0x2000401,
      0x128: 0x2100001,
      0x138: 0x1,
      0x148: 0x2000000,
      0x158: 0x100000,
      0x168: 0x401,
      0x178: 0x2100400,
      0x188: 0x2000001,
      0x198: 0x2100000,
      0x1a8: 0x0,
      0x1b8: 0x2100401,
      0x1c8: 0x100401,
      0x1d8: 0x400,
      0x1e8: 0x2000400,
      0x1f8: 0x100001
    }, {
      0x0: 0x8000820,
      0x1: 0x20000,
      0x2: 0x8000000,
      0x3: 0x20,
      0x4: 0x20020,
      0x5: 0x8020820,
      0x6: 0x8020800,
      0x7: 0x800,
      0x8: 0x8020000,
      0x9: 0x8000800,
      0xa: 0x20800,
      0xb: 0x8020020,
      0xc: 0x820,
      0xd: 0x0,
      0xe: 0x8000020,
      0xf: 0x20820,
      0x80000000: 0x800,
      0x80000001: 0x8020820,
      0x80000002: 0x8000820,
      0x80000003: 0x8000000,
      0x80000004: 0x8020000,
      0x80000005: 0x20800,
      0x80000006: 0x20820,
      0x80000007: 0x20,
      0x80000008: 0x8000020,
      0x80000009: 0x820,
      0x8000000a: 0x20020,
      0x8000000b: 0x8020800,
      0x8000000c: 0x0,
      0x8000000d: 0x8020020,
      0x8000000e: 0x8000800,
      0x8000000f: 0x20000,
      0x10: 0x20820,
      0x11: 0x8020800,
      0x12: 0x20,
      0x13: 0x800,
      0x14: 0x8000800,
      0x15: 0x8000020,
      0x16: 0x8020020,
      0x17: 0x20000,
      0x18: 0x0,
      0x19: 0x20020,
      0x1a: 0x8020000,
      0x1b: 0x8000820,
      0x1c: 0x8020820,
      0x1d: 0x20800,
      0x1e: 0x820,
      0x1f: 0x8000000,
      0x80000010: 0x20000,
      0x80000011: 0x800,
      0x80000012: 0x8020020,
      0x80000013: 0x20820,
      0x80000014: 0x20,
      0x80000015: 0x8020000,
      0x80000016: 0x8000000,
      0x80000017: 0x8000820,
      0x80000018: 0x8020820,
      0x80000019: 0x8000020,
      0x8000001a: 0x8000800,
      0x8000001b: 0x0,
      0x8000001c: 0x20800,
      0x8000001d: 0x820,
      0x8000001e: 0x20020,
      0x8000001f: 0x8020800
    }]; // Masks that select the SBOX input

    var SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];
    /**
     * DES block cipher algorithm.
     */

    var DES = C_algo.DES = BlockCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words; // Select 56 bits according to PC1

        var keyBits = [];

        for (var i = 0; i < 56; i++) {
          var keyBitPos = PC1[i] - 1;
          keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
        } // Assemble 16 subkeys


        var subKeys = this._subKeys = [];

        for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
          // Create subkey
          var subKey = subKeys[nSubKey] = []; // Shortcut

          var bitShift = BIT_SHIFTS[nSubKey]; // Select 48 bits according to PC2

          for (var i = 0; i < 24; i++) {
            // Select from the left 28 key bits
            subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6; // Select from the right 28 key bits

            subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
          } // Since each subkey is applied to an expanded 32-bit input,
          // the subkey can be broken into 8 values scaled to 32-bits,
          // which allows the key to be used without expansion


          subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;

          for (var i = 1; i < 7; i++) {
            subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
          }

          subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
        } // Compute inverse subkeys


        var invSubKeys = this._invSubKeys = [];

        for (var i = 0; i < 16; i++) {
          invSubKeys[i] = subKeys[15 - i];
        }
      },
      encryptBlock: function encryptBlock(M, offset) {
        this._doCryptBlock(M, offset, this._subKeys);
      },
      decryptBlock: function decryptBlock(M, offset) {
        this._doCryptBlock(M, offset, this._invSubKeys);
      },
      _doCryptBlock: function _doCryptBlock(M, offset, subKeys) {
        // Get input
        this._lBlock = M[offset];
        this._rBlock = M[offset + 1]; // Initial permutation

        exchangeLR.call(this, 4, 0x0f0f0f0f);
        exchangeLR.call(this, 16, 0x0000ffff);
        exchangeRL.call(this, 2, 0x33333333);
        exchangeRL.call(this, 8, 0x00ff00ff);
        exchangeLR.call(this, 1, 0x55555555); // Rounds

        for (var round = 0; round < 16; round++) {
          // Shortcuts
          var subKey = subKeys[round];
          var lBlock = this._lBlock;
          var rBlock = this._rBlock; // Feistel function

          var f = 0;

          for (var i = 0; i < 8; i++) {
            f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
          }

          this._lBlock = rBlock;
          this._rBlock = lBlock ^ f;
        } // Undo swap from last round


        var t = this._lBlock;
        this._lBlock = this._rBlock;
        this._rBlock = t; // Final permutation

        exchangeLR.call(this, 1, 0x55555555);
        exchangeRL.call(this, 8, 0x00ff00ff);
        exchangeRL.call(this, 2, 0x33333333);
        exchangeLR.call(this, 16, 0x0000ffff);
        exchangeLR.call(this, 4, 0x0f0f0f0f); // Set output

        M[offset] = this._lBlock;
        M[offset + 1] = this._rBlock;
      },
      keySize: 64 / 32,
      ivSize: 64 / 32,
      blockSize: 64 / 32
    }); // Swap bits across the left and right words

    function exchangeLR(offset, mask) {
      var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
      this._rBlock ^= t;
      this._lBlock ^= t << offset;
    }

    function exchangeRL(offset, mask) {
      var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
      this._lBlock ^= t;
      this._rBlock ^= t << offset;
    }
    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
     */


    C.DES = BlockCipher._createHelper(DES);
    /**
     * Triple-DES block cipher algorithm.
     */

    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words; // Create DES instances

        this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
        this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
        this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
      },
      encryptBlock: function encryptBlock(M, offset) {
        this._des1.encryptBlock(M, offset);

        this._des2.decryptBlock(M, offset);

        this._des3.encryptBlock(M, offset);
      },
      decryptBlock: function decryptBlock(M, offset) {
        this._des3.decryptBlock(M, offset);

        this._des2.encryptBlock(M, offset);

        this._des1.decryptBlock(M, offset);
      },
      keySize: 192 / 32,
      ivSize: 64 / 32,
      blockSize: 64 / 32
    });
    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
     */

    C.TripleDES = BlockCipher._createHelper(TripleDES);
  })();

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;
    /**
     * RC4 stream cipher algorithm.
     */

    var RC4 = C_algo.RC4 = StreamCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;
        var keySigBytes = key.sigBytes; // Init sbox

        var S = this._S = [];

        for (var i = 0; i < 256; i++) {
          S[i] = i;
        } // Key setup


        for (var i = 0, j = 0; i < 256; i++) {
          var keyByteIndex = i % keySigBytes;
          var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;
          j = (j + S[i] + keyByte) % 256; // Swap

          var t = S[i];
          S[i] = S[j];
          S[j] = t;
        } // Counters


        this._i = this._j = 0;
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        M[offset] ^= generateKeystreamWord.call(this);
      },
      keySize: 256 / 32,
      ivSize: 0
    });

    function generateKeystreamWord() {
      // Shortcuts
      var S = this._S;
      var i = this._i;
      var j = this._j; // Generate keystream word

      var keystreamWord = 0;

      for (var n = 0; n < 4; n++) {
        i = (i + 1) % 256;
        j = (j + S[i]) % 256; // Swap

        var t = S[i];
        S[i] = S[j];
        S[j] = t;
        keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
      } // Update counters


      this._i = i;
      this._j = j;
      return keystreamWord;
    }
    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
     */


    C.RC4 = StreamCipher._createHelper(RC4);
    /**
     * Modified RC4 stream cipher algorithm.
     */

    var RC4Drop = C_algo.RC4Drop = RC4.extend({
      /**
       * Configuration options.
       *
       * @property {number} drop The number of keystream words to drop. Default 192
       */
      cfg: RC4.cfg.extend({
        drop: 192
      }),
      _doReset: function _doReset() {
        RC4._doReset.call(this); // Drop


        for (var i = this.cfg.drop; i > 0; i--) {
          generateKeystreamWord.call(this);
        }
      }
    });
    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
     */

    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
  })();
  /** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   */


  CryptoJS.mode.CTRGladman = function () {
    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

    function incWord(word) {
      if ((word >> 24 & 0xff) === 0xff) {
        //overflow
        var b1 = word >> 16 & 0xff;
        var b2 = word >> 8 & 0xff;
        var b3 = word & 0xff;

        if (b1 === 0xff) // overflow b1
          {
            b1 = 0;

            if (b2 === 0xff) {
              b2 = 0;

              if (b3 === 0xff) {
                b3 = 0;
              } else {
                ++b3;
              }
            } else {
              ++b2;
            }
          } else {
          ++b1;
        }

        word = 0;
        word += b1 << 16;
        word += b2 << 8;
        word += b3;
      } else {
        word += 0x01 << 24;
      }

      return word;
    }

    function incCounter(counter) {
      if ((counter[0] = incWord(counter[0])) === 0) {
        // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
        counter[1] = incWord(counter[1]);
      }

      return counter;
    }

    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter; // Generate keystream

        if (iv) {
          counter = this._counter = iv.slice(0); // Remove IV for subsequent blocks

          this._iv = undefined;
        }

        incCounter(counter);
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0); // Encrypt

        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
    });
    CTRGladman.Decryptor = Encryptor;
    return CTRGladman;
  }();

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo; // Reusable objects

    var S = [];
    var C_ = [];
    var G = [];
    /**
     * Rabbit stream cipher algorithm
     */

    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var K = this._key.words;
        var iv = this.cfg.iv; // Swap endian

        for (var i = 0; i < 4; i++) {
          K[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;
        } // Generate initial state values


        var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16]; // Generate initial counter values

        var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff]; // Carry bit

        this._b = 0; // Iterate the system four times

        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        } // Modify the counters


        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        } // IV setup


        if (iv) {
          // Shortcuts
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1]; // Generate four subvectors

          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
          var i1 = i0 >>> 16 | i2 & 0xffff0000;
          var i3 = i2 << 16 | i0 & 0x0000ffff; // Modify counter values

          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3; // Iterate the system four times

          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var X = this._X; // Iterate the system

        nextState.call(this); // Generate four keystream words

        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

        for (var i = 0; i < 4; i++) {
          // Swap endian
          S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00; // Encrypt

          M[offset + i] ^= S[i];
        }
      },
      blockSize: 128 / 32,
      ivSize: 64 / 32
    });

    function nextState() {
      // Shortcuts
      var X = this._X;
      var C = this._C; // Save old counter values

      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      } // Calculate new counter values


      C[0] = C[0] + 0x4d34d34d + this._b | 0;
      C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
      C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
      C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
      C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
      C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
      C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
      C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0; // Calculate the g-values

      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i]; // Construct high and low argument for squaring

        var ga = gx & 0xffff;
        var gb = gx >>> 16; // Calculate high and low result of squaring

        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
        var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0); // High XOR low

        G[i] = gh ^ gl;
      } // Calculate new state values


      X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
      X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
      X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
      X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
      X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
      X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
      X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
      X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
    }
    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
     */


    C.Rabbit = StreamCipher._createHelper(Rabbit);
  })();
  /**
   * Counter block mode.
   */


  CryptoJS.mode.CTR = function () {
    var CTR = CryptoJS.lib.BlockCipherMode.extend();
    var Encryptor = CTR.Encryptor = CTR.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter; // Generate keystream

        if (iv) {
          counter = this._counter = iv.slice(0); // Remove IV for subsequent blocks

          this._iv = undefined;
        }

        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0); // Increment counter

        counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0; // Encrypt

        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
    });
    CTR.Decryptor = Encryptor;
    return CTR;
  }();

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo; // Reusable objects

    var S = [];
    var C_ = [];
    var G = [];
    /**
     * Rabbit stream cipher algorithm.
     *
     * This is a legacy version that neglected to convert the key to little-endian.
     * This error doesn't affect the cipher's security,
     * but it does affect its compatibility with other implementations.
     */

    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var K = this._key.words;
        var iv = this.cfg.iv; // Generate initial state values

        var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16]; // Generate initial counter values

        var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff]; // Carry bit

        this._b = 0; // Iterate the system four times

        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        } // Modify the counters


        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        } // IV setup


        if (iv) {
          // Shortcuts
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1]; // Generate four subvectors

          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
          var i1 = i0 >>> 16 | i2 & 0xffff0000;
          var i3 = i2 << 16 | i0 & 0x0000ffff; // Modify counter values

          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3; // Iterate the system four times

          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var X = this._X; // Iterate the system

        nextState.call(this); // Generate four keystream words

        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

        for (var i = 0; i < 4; i++) {
          // Swap endian
          S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00; // Encrypt

          M[offset + i] ^= S[i];
        }
      },
      blockSize: 128 / 32,
      ivSize: 64 / 32
    });

    function nextState() {
      // Shortcuts
      var X = this._X;
      var C = this._C; // Save old counter values

      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      } // Calculate new counter values


      C[0] = C[0] + 0x4d34d34d + this._b | 0;
      C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
      C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
      C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
      C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
      C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
      C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
      C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0; // Calculate the g-values

      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i]; // Construct high and low argument for squaring

        var ga = gx & 0xffff;
        var gb = gx >>> 16; // Calculate high and low result of squaring

        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
        var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0); // High XOR low

        G[i] = gh ^ gl;
      } // Calculate new state values


      X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
      X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
      X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
      X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
      X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
      X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
      X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
      X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
    }
    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
     */


    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
  })();
  /**
   * Zero padding strategy.
   */


  CryptoJS.pad.ZeroPadding = {
    pad: function pad(data, blockSize) {
      // Shortcut
      var blockSizeBytes = blockSize * 4; // Pad

      data.clamp();
      data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
    },
    unpad: function unpad(data) {
      // Shortcut
      var dataWords = data.words; // Unpad

      var i = data.sigBytes - 1;

      while (!(dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff)) {
        i--;
      }

      data.sigBytes = i + 1;
    }
  };
  return CryptoJS;
});

/***/ }),

/***/ "./src/vendor/moment.js":
/*!******************************!*\
  !*** ./src/vendor/moment.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var moment = function () {
  var hookCallback;

  function hooks() {
    return hookCallback.apply(null, arguments);
  } // This is done to register the method called with moment()
  // without creating circular dependencies.


  function setHookCallback(callback) {
    hookCallback = callback;
  }

  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }

  function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
  }

  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;

      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          return false;
        }
      }

      return true;
    }
  }

  function isUndefined(input) {
    return input === void 0;
  }

  function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  }

  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }

  function map(arr, fn) {
    var res = [],
        i;

    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }

    return res;
  }

  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }

    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }

    return a;
  }

  function createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }

  function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }

  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }

    return m._pf;
  }

  var some;

  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function some(fun) {
      var t = Object(this);
      var len = t.length >>> 0;

      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }

      return false;
    };
  }

  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      var parsedParts = some.call(flags.parsedDateParts, function (i) {
        return i != null;
      });
      var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }

      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }

    return m._isValid;
  }

  function createInvalid(flags) {
    var m = createUTC(NaN);

    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }

    return m;
  } // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.


  var momentProperties = hooks.momentProperties = [];

  function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }

    if (!isUndefined(from._i)) {
      to._i = from._i;
    }

    if (!isUndefined(from._f)) {
      to._f = from._f;
    }

    if (!isUndefined(from._l)) {
      to._l = from._l;
    }

    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }

    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }

    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }

    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }

    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }

    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
      for (i = 0; i < momentProperties.length; i++) {
        prop = momentProperties[i];
        val = from[prop];

        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }

    return to;
  }

  var updateInProgress = false; // Moment prototype object

  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);

    if (!this.isValid()) {
      this._d = new Date(NaN);
    } // Prevent infinite loop in case updateOffset creates new moment
    // objects.


    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }

  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }

  function absFloor(number) {
    if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }

  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }

    return value;
  } // compare two arrays, return the number of differences


  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;

    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }

    return diffs + lengthDiff;
  }

  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }

  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function () {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }

      if (firstTime) {
        var args = [];
        var arg;

        for (var i = 0; i < arguments.length; i++) {
          arg = '';

          if (_typeof(arguments[i]) === 'object') {
            arg += '\n[' + i + '] ';

            for (var key in arguments[0]) {
              arg += key + ': ' + arguments[0][key] + ', ';
            }

            arg = arg.slice(0, -2); // Remove trailing comma and space
          } else {
            arg = arguments[i];
          }

          args.push(arg);
        }

        warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
        firstTime = false;
      }

      return fn.apply(this, arguments);
    }, fn);
  }

  var deprecations = {};

  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }

    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }

  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }

  function set(config) {
    var prop, i;

    for (i in config) {
      prop = config[i];

      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this['_' + i] = prop;
      }
    }

    this._config = config; // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.

    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
  }

  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig),
        prop;

    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }

    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
        // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
      }
    }

    return res;
  }

  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }

  var keys;

  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function keys(obj) {
      var i,
          res = [];

      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }

      return res;
    };
  }

  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  };

  function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
  }

  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  };

  function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
      return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }

  var defaultInvalidDate = 'Invalid date';

  function invalidDate() {
    return this._invalidDate;
  }

  var defaultOrdinal = '%d';
  var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }

  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };

  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }

  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }

  var aliases = {};

  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }

  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }

  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);

        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }

    return normalizedInput;
  }

  var priorities = {};

  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }

  function getPrioritizedUnits(unitsObj) {
    var units = [];

    for (var u in unitsObj) {
      units.push({
        unit: u,
        priority: priorities[u]
      });
    }

    units.sort(function (a, b) {
      return a.priority - b.priority;
    });
    return units;
  }

  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }

  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var formatFunctions = {};
  var formatTokenFunctions = {}; // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }

  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;

    if (typeof callback === 'string') {
      func = function func() {
        return this[callback]();
      };
    }

    if (token) {
      formatTokenFunctions[token] = func;
    }

    if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }

    if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }

  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }

    return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;

    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }

    return function (mom) {
      var output = '',
          i;

      for (i = 0; i < length; i++) {
        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
      }

      return output;
    };
  } // format date using native date object


  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;

    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }

    return format;
  }

  var match1 = /\d/; //       0 - 9

  var match2 = /\d\d/; //      00 - 99

  var match3 = /\d{3}/; //     000 - 999

  var match4 = /\d{4}/; //    0000 - 9999

  var match6 = /[+-]?\d{6}/; // -999999 - 999999

  var match1to2 = /\d\d?/; //       0 - 99

  var match3to4 = /\d\d\d\d?/; //     999 - 9999

  var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

  var match1to3 = /\d{1,3}/; //       0 - 999

  var match1to4 = /\d{1,4}/; //       0 - 9999

  var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

  var matchUnsigned = /\d+/; //       0 - inf

  var matchSigned = /[+-]?\d+/; //    -inf - inf

  var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
  // any word (or two) characters or numbers including two/three word month in arabic.
  // includes scottish gaelic two word and hyphenated months

  var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  var regexes = {};

  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }

  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
  } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }

  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  var tokens = {};

  function addParseToken(token, callback) {
    var i,
        func = callback;

    if (typeof token === 'string') {
      token = [token];
    }

    if (isNumber(callback)) {
      func = function func(input, array) {
        array[callback] = toInt(input);
      };
    }

    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }

  function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }

  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }

  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8; // FORMATTING

  addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
  });
  addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
  });
  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

  addUnitAlias('year', 'y'); // PRIORITIES

  addUnitPriority('year', 1); // PARSING

  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);
  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
  }); // HELPERS

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  } // HOOKS


  hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  }; // MOMENTS


  var getSetYear = makeGetSet('FullYear', true);

  function getIsLeapYear() {
    return isLeapYear(this.year());
  }

  function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }

  function get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }

  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
      } else {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
    }
  } // MOMENTS


  function stringGet(units) {
    units = normalizeUnits(units);

    if (isFunction(this[units])) {
      return this[units]();
    }

    return this;
  }

  function stringSet(units, value) {
    if (_typeof(units) === 'object') {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units);

      for (var i = 0; i < prioritized.length; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);

      if (isFunction(this[units])) {
        return this[units](value);
      }
    }

    return this;
  }

  function mod(n, x) {
    return (n % x + x) % x;
  }

  var indexOf;

  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function indexOf(o) {
      // I know
      var i;

      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }

      return -1;
    };
  }

  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }

    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  } // FORMATTING


  addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  });
  addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
  }); // ALIASES

  addUnitAlias('month', 'M'); // PRIORITY

  addUnitPriority('month', 8); // PARSING

  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  }); // LOCALES

  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

  function localeMonths(m, format) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months['standalone'];
    }

    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  }

  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

  function localeMonthsShort(m, format) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
    }

    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }

  function handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();

    if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];

      for (i = 0; i < 12; ++i) {
        mom = createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    } // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse


    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);

      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }

      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      } // test the regex


      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  } // MOMENTS


  function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
      // No op
      return mom;
    }

    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

        if (!isNumber(value)) {
          return mom;
        }
      }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

    return mom;
  }

  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, 'Month');
    }
  }

  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }

  var defaultMonthsShortRegex = matchWord;

  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }

      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsShortRegex')) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }

      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }

  var defaultMonthsRegex = matchWord;

  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }

      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsRegex')) {
        this._monthsRegex = defaultMonthsRegex;
      }

      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }

  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;

    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    } // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.


    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }

    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }

  function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms); // the date constructor remaps years 0-99 to 1900-1999

    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }

    return date;
  }

  function createUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments)); // the Date.UTC function remaps years 0-99 to 1900-1999

    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }

    return date;
  } // start-of-first-week - start-of-year


  function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
    fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }

    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }

  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }

    return {
      week: resWeek,
      year: resYear
    };
  }

  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  } // FORMATTING


  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W'); // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5); // PARSING

  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);
  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  }); // HELPERS
  // LOCALES

  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }

  var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 1st is the first week of the year.

  };

  function localeFirstDayOfWeek() {
    return this._week.dow;
  }

  function localeFirstDayOfYear() {
    return this._week.doy;
  } // MOMENTS


  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  } // FORMATTING


  addFormatToken('d', 0, 'do', 'day');
  addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E'); // PRIORITY

  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11); // PARSING

  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });
  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
  }); // HELPERS

  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }

    if (!isNaN(input)) {
      return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);

    if (typeof input === 'number') {
      return input;
    }

    return null;
  }

  function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
    }

    return isNaN(input) ? null : input;
  } // LOCALES


  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

  function localeWeekdays(m, format) {
    if (!m) {
      return isArray(this._weekdays) ? this._weekdays : this._weekdays['standalone'];
    }

    return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }

  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

  function localeWeekdaysShort(m) {
    return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }

  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

  function localeWeekdaysMin(m) {
    return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }

  function handleStrictParse$1(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];

      for (i = 0; i < 7; ++i) {
        mom = createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._shortWeekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._weekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._weekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);

      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
      }

      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      } // test the regex


      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  } // MOMENTS


  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }

  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }

  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    } // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.


    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }

  var defaultWeekdaysRegex = matchWord;

  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }

      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }

      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }

  var defaultWeekdaysShortRegex = matchWord;

  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }

      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }

      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }

  var defaultWeekdaysMinRegex = matchWord;

  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }

      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }

      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }

  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = this.weekdaysMin(mom, '');
      shortp = this.weekdaysShort(mom, '');
      longp = this.weekdays(mom, '');
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.


    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  } // FORMATTING


  function hFormat() {
    return this.hours() % 12 || 12;
  }

  function kFormat() {
    return this.hours() || 24;
  }

  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);
  addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });

  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }

  meridiem('a', true);
  meridiem('A', false); // ALIASES

  addUnitAlias('hour', 'h'); // PRIORITY

  addUnitPriority('hour', 13); // PARSING

  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }

  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('k', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);
  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);
  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  }); // LOCALES

  function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
  }

  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  } // MOMENTS
  // Setting the hour should keep the time, because the user explicitly
  // specified which hour they want. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.


  var getSetHour = makeGetSet('Hours', true);
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  }; // internal storage for locale config files

  var locales = {};
  var localeFamilies = {};
  var globalLocale;

  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  } // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


  function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;

    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;

      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));

        if (locale) {
          return locale;
        }

        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          //the next array item is better than a shallower substring of this one
          break;
        }

        j--;
      }

      i++;
    }

    return globalLocale;
  }

  function loadLocale(name) {
    var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

    if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        var aliasedRequire = require;
        !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }

    return locales[name];
  } // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.


  function getSetGlobalLocale(key, values) {
    var data;

    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }

      if (data) {
        // moment.duration._locale = moment._locale = data;
        globalLocale = data;
      } else {
        if (typeof console !== 'undefined' && console.warn) {
          //warn user if arguments are passed but the locale could not be set
          console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
      }
    }

    return globalLocale._abbr;
  }

  function defineLocale(name, config) {
    if (config !== null) {
      var locale,
          parentConfig = baseConfig;
      config.abbr = name;

      if (locales[name] != null) {
        deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale = loadLocale(config.parentLocale);

          if (locale != null) {
            parentConfig = locale._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }

            localeFamilies[config.parentLocale].push({
              name: name,
              config: config
            });
            return null;
          }
        }
      }

      locales[name] = new Locale(mergeConfigs(parentConfig, config));

      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
          defineLocale(x.name, x.config);
        });
      } // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.


      getSetGlobalLocale(name);
      return locales[name];
    } else {
      // useful for testing
      delete locales[name];
      return null;
    }
  }

  function updateLocale(name, config) {
    if (config != null) {
      var locale,
          tmpLocale,
          parentConfig = baseConfig; // MERGE

      tmpLocale = loadLocale(name);

      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }

      config = mergeConfigs(parentConfig, config);
      locale = new Locale(config);
      locale.parentLocale = locales[name];
      locales[name] = locale; // backwards compat for now: also set the locale

      getSetGlobalLocale(name);
    } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }

    return locales[name];
  } // returns locale data


  function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }

    if (!key) {
      return globalLocale;
    }

    if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);

      if (locale) {
        return locale;
      }

      key = [key];
    }

    return chooseLocale(key);
  }

  function listLocales() {
    return keys(locales);
  }

  function checkOverflow(m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }

      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }

      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }

      getParsingFlags(m).overflow = overflow;
    }

    return m;
  } // Pick the first defined of two or three arguments.


  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }

    if (b != null) {
      return b;
    }

    return c;
  }

  function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());

    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }

    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  } // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]


  function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

    if (config._d) {
      return;
    }

    currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    } //if the day of the year is set, figure out what it is


    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }

      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    } // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything


    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    } // Zero out whatever was not defaulted, including time


    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    } // Check for 24:00:00.000


    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.

    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
      config._a[HOUR] = 24;
    } // check for mismatching day of week


    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }

  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
    w = config._w;

    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).

      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);

      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      var curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

      week = defaults(w.w, curWeek.week);

      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;

        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from begining of week
        weekday = w.e + dow;

        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        // default to begining of week
        weekday = dow;
      }
    }

    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  } // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
  ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

  var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

  function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

    if (match) {
      getParsingFlags(config).iso = true;

      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }

      if (dateFormat == null) {
        config._isValid = false;
        return;
      }

      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }

        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }

      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }

      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }

      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }

    return result;
  }

  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);

    if (year <= 49) {
      return 2000 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }

    return year;
  }

  function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }

  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
          weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }

    return true;
  }

  var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };

  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      // the only allowed military tz is Z
      return 0;
    } else {
      var hm = parseInt(numOffset, 10);
      var m = hm % 100,
          h = (hm - m) / 100;
      return h * 60 + m;
    }
  } // date and time from ref 2822 format


  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));

    if (match) {
      var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }

      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);

      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  } // date from iso format or fallback


  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }

    configFromISO(config);

    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    configFromRFC2822(config);

    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    } // Final attempt, use Input Fallback


    hooks.createFromInputFallback(config);
  }

  hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  }); // constant that refers to the ISO standard

  hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


  hooks.RFC_2822 = function () {}; // date from string and format string


  function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }

    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }

    config._a = [];
    getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
      //         'regex', getParseRegexForToken(token, config));

      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));

        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }

        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      } // don't parse if it's not a known token


      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }

        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    } // add remaining unparsed input length to the string


    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    } // clear _12h flag if hour is <= 12


    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    checkOverflow(config);
  }

  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
      // nothing to do
      return hour;
    }

    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);

      if (isPm && hour < 12) {
        hour += 12;
      }

      if (!isPm && hour === 12) {
        hour = 0;
      }

      return hour;
    } else {
      // this is not supposed to happen
      return hour;
    }
  } // date from string and array of format strings


  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore;

    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }

    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);

      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }

      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);

      if (!isValid(tempConfig)) {
        continue;
      } // if there is any input that was not parsed add a penalty for that format


      currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;

      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }

    extend(config, bestMoment || tempConfig);
  }

  function configFromObject(config) {
    if (config._d) {
      return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }

  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));

    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }

    return res;
  }

  function prepareConfig(config) {
    var input = config._i,
        format = config._f;
    config._locale = config._locale || getLocale(config._l);

    if (input === null || format === undefined && input === '') {
      return createInvalid({
        nullInput: true
      });
    }

    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }

    if (!isValid(config)) {
      config._d = null;
    }

    return config;
  }

  function configFromInput(config) {
    var input = config._i;

    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }

  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
    }

    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
      input = undefined;
    } // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423


    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }

  function createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }

  var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
    var other = createLocal.apply(null, arguments);

    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  });
  var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
    var other = createLocal.apply(null, arguments);

    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  }); // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.

  function pickBy(fn, moments) {
    var res, i;

    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }

    if (!moments.length) {
      return createLocal();
    }

    res = moments[0];

    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }

    return res;
  } // TODO: Use [].sort instead?


  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  }

  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  }

  var now = function now() {
    return Date.now ? Date.now() : +new Date();
  };

  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

  function isDurationValid(m) {
    for (var key in m) {
      if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }

    var unitHasDecimal = false;

    for (var i = 0; i < ordering.length; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false; // only allow non-integers for smallest unit
        }

        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }

    return true;
  }

  function isValid$1() {
    return this._isValid;
  }

  function createInvalid$1() {
    return createDuration(NaN);
  }

  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

    this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
    minutes * 6e4 + // 1000 * 60
    hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately

    this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.

    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = getLocale();

    this._bubble();
  }

  function isDuration(obj) {
    return obj instanceof Duration;
  }

  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  } // FORMATTING


  function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset();
      var sign = '+';

      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }

      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
    });
  }

  offset('Z', ':');
  offset('ZZ', ''); // PARSING

  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  }); // HELPERS
  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']

  var chunkOffset = /([\+\-]|\d\d)/gi;

  function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
      return null;
    }

    var chunk = matches[matches.length - 1] || [];
    var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);
    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
  } // Return a moment from input, that is local/utc/zone equivalent to model.


  function cloneWithOffset(input, model) {
    var res, diff;

    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

      res._d.setTime(res._d.valueOf() + diff);

      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }

  function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  } // HOOKS
  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.


  hooks.updateOffset = function () {}; // MOMENTS
  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.


  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;

    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);

        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }

      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }

      this._offset = input;
      this._isUTC = true;

      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }

      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }

      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }

  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }

      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }

  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }

  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;

      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }

    return this;
  }

  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
      var tZone = offsetFromString(matchOffset, this._i);

      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }

    return this;
  }

  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }

    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }

  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }

  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }

    var c = {};
    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
      var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }

    return this._isDSTShifted;
  }

  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }

  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }

  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  } // ASP.NET json date format regex


  var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
  // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
  // and further modified to allow for strings containing both week and day

  var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function createDuration(input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
    match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber(input)) {
      duration = {};

      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

      };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : match[1] === '+' ? 1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign)
      };
    } else if (duration == null) {
      // checks for null or undefined
      duration = {};
    } else if (_typeof(duration) === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }

    return ret;
  }

  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;

  function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

    return (isNaN(res) ? 0 : res) * sign;
  }

  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0
    };
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');
    return res;
  }

  function momentsDifference(base, other) {
    var res;

    if (!(base.isValid() && other.isValid())) {
      return {
        milliseconds: 0,
        months: 0
      };
    }

    other = cloneWithOffset(other, base);

    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }

    return res;
  } // TODO: remove 'name' arg after deprecation is removed


  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp; //invert the arguments, but complain about it

      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
        tmp = val;
        val = period;
        period = tmp;
      }

      val = typeof val === 'string' ? +val : val;
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }

  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
      // No op
      return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
    }

    if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }

    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }

    if (updateOffset) {
      hooks.updateOffset(mom, days || months);
    }
  }

  var add = createAdder(1, 'add');
  var subtract = createAdder(-1, 'subtract');

  function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
  }

  function calendar$1(time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';
    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  }

  function clone() {
    return new Moment(this);
  }

  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);

    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }

    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');

    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }

  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);

    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }

    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');

    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }

  function isBetween(from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
  }

  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;

    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }

    units = normalizeUnits(units || 'millisecond');

    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }

  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }

  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }

  function diff(input, units, asFloat) {
    var that, zoneDelta, output;

    if (!this.isValid()) {
      return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
      return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);

    switch (units) {
      case 'year':
        output = monthDiff(this, that) / 12;
        break;

      case 'month':
        output = monthDiff(this, that);
        break;

      case 'quarter':
        output = monthDiff(this, that) / 3;
        break;

      case 'second':
        output = (this - that) / 1e3;
        break;
      // 1000

      case 'minute':
        output = (this - that) / 6e4;
        break;
      // 1000 * 60

      case 'hour':
        output = (this - that) / 36e5;
        break;
      // 1000 * 60 * 60

      case 'day':
        output = (this - that - zoneDelta) / 864e5;
        break;
      // 1000 * 60 * 60 * 24, negate dst

      case 'week':
        output = (this - that - zoneDelta) / 6048e5;
        break;
      // 1000 * 60 * 60 * 24 * 7, negate dst

      default:
        output = this - that;
    }

    return asFloat ? output : absFloor(output);
  }

  function monthDiff(a, b) {
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
    anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

      adjust = (b - anchor) / (anchor2 - anchor);
    } //check for negative zero, return zero if negative zero


    return -(wholeMonthDiff + adjust) || 0;
  }

  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }

  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }

    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;

    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    if (isFunction(Date.prototype.toISOString)) {
      // native implementation is ~50x faster, use it when we can
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
      }
    }

    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
  }
  /**
   * Return a human readable representation of a moment that can
   * also be evaluated to get a new moment which is the same
   *
   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
   */


  function inspect() {
    if (!this.isValid()) {
      return 'moment.invalid(/* ' + this._i + ' */)';
    }

    var func = 'moment';
    var zone = '';

    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
    }

    var prefix = '[' + func + '("]';
    var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }

  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }

    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }

  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }

  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        from: this,
        to: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  } // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.


  function locale(key) {
    var newLocaleData;

    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);

      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }

      return this;
    }
  }

  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });

  function localeData() {
    return this._locale;
  }

  function startOf(units) {
    units = normalizeUnits(units); // the following switch intentionally omits break keywords
    // to utilize falling through the cases.

    switch (units) {
      case 'year':
        this.month(0);

      /* falls through */

      case 'quarter':
      case 'month':
        this.date(1);

      /* falls through */

      case 'week':
      case 'isoWeek':
      case 'day':
      case 'date':
        this.hours(0);

      /* falls through */

      case 'hour':
        this.minutes(0);

      /* falls through */

      case 'minute':
        this.seconds(0);

      /* falls through */

      case 'second':
        this.milliseconds(0);
    } // weeks are a special case


    if (units === 'week') {
      this.weekday(0);
    }

    if (units === 'isoWeek') {
      this.isoWeekday(1);
    } // quarters are also special


    if (units === 'quarter') {
      this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
  }

  function endOf(units) {
    units = normalizeUnits(units);

    if (units === undefined || units === 'millisecond') {
      return this;
    } // 'date' is an alias for 'day', so it should be considered as such.


    if (units === 'date') {
      units = 'day';
    }

    return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
  }

  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
  }

  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }

  function toDate() {
    return new Date(this.valueOf());
  }

  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }

  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }

  function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
  }

  function isValid$2() {
    return isValid(this);
  }

  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }

  function invalidAt() {
    return getParsingFlags(this).overflow;
  }

  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  } // FORMATTING


  addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
  });

  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }

  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1); // PARSING

  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);
  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
  }); // MOMENTS

  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }

  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }

  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }

  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;

    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }

  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;

    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);

      if (week > weeksTarget) {
        week = weeksTarget;
      }

      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }

  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  } // FORMATTING


  addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

  addUnitAlias('quarter', 'Q'); // PRIORITY

  addUnitPriority('quarter', 7); // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  }); // MOMENTS

  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  } // FORMATTING


  addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

  addUnitAlias('date', 'D'); // PRIORITY

  addUnitPriority('date', 9); // PARSING

  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  }); // MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

  addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

  addUnitPriority('dayOfYear', 4); // PARSING

  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
  }); // HELPERS
  // MOMENTS

  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  } // FORMATTING


  addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

  addUnitAlias('minute', 'm'); // PRIORITY

  addUnitPriority('minute', 14); // PARSING

  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE); // MOMENTS

  var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

  addUnitAlias('second', 's'); // PRIORITY

  addUnitPriority('second', 15); // PARSING

  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND); // MOMENTS

  var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

  addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
  }); // ALIASES

  addUnitAlias('millisecond', 'ms'); // PRIORITY

  addUnitPriority('millisecond', 16); // PARSING

  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);
  var token;

  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }

  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }

  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  } // MOMENTS


  var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }

  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }

  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

  function createUnix(input) {
    return createLocal(input * 1000);
  }

  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }

  function preParsePostFormat(string) {
    return string;
  }

  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;

  function get$1(format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
  }

  function listMonthsImpl(format, index, field) {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';

    if (index != null) {
      return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];

    for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
    }

    return out;
  } // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)


  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;

      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];

    for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }

    return out;
  }

  function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }

  function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }

  function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }

  function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }

  function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }

  getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
          output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    }
  }); // Side effect imports

  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
  var mathAbs = Math.abs;

  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }

  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  } // supports only 2.0-style add(1, 's') or add(duration)


  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  } // supports only 2.0-style subtract(1, 's') or subtract(duration)


  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }

  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }

  function bubble() {
    var milliseconds = this._milliseconds;
    var days = this._days;
    var months = this._months;
    var data = this._data;
    var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166

    if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    } // The following code bubbles up values, see the tests for
    // examples of what that means.


    data.milliseconds = milliseconds % 1000;
    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24); // convert days to months

    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }

  function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
  }

  function monthsToDays(months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
  }

  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }

    var days;
    var months;
    var milliseconds = this._milliseconds;
    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === 'month' ? months : months / 12;
    } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));

      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;

        case 'day':
          return days + milliseconds / 864e5;

        case 'hour':
          return days * 24 + milliseconds / 36e5;

        case 'minute':
          return days * 1440 + milliseconds / 6e4;

        case 'second':
          return days * 86400 + milliseconds / 1000;
        // Math.floor prevents floating point math errors here

        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;

        default:
          throw new Error('Unknown unit ' + units);
      }
    }
  } // TODO: Use this.as('ms')?


  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }

    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }

  function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }

  var asMilliseconds = makeAs('ms');
  var asSeconds = makeAs('s');
  var asMinutes = makeAs('m');
  var asHours = makeAs('h');
  var asDays = makeAs('d');
  var asWeeks = makeAs('w');
  var asMonths = makeAs('M');
  var asYears = makeAs('y');

  function clone$1() {
    return createDuration(this);
  }

  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
  }

  function makeGetter(name) {
    return function () {
      return this.isValid() ? this._data[name] : NaN;
    };
  }

  var milliseconds = makeGetter('milliseconds');
  var seconds = makeGetter('seconds');
  var minutes = makeGetter('minutes');
  var hours = makeGetter('hours');
  var days = makeGetter('days');
  var months = makeGetter('months');
  var years = makeGetter('years');

  function weeks() {
    return absFloor(this.days() / 7);
  }

  var round = Math.round;
  var thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year

  }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime$1(posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));
    var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  } // This function allows you to set the rounding function for relative time strings


  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
      return round;
    }

    if (typeof roundingFunction === 'function') {
      round = roundingFunction;
      return true;
    }

    return false;
  } // This function allows you to set a threshold for relative time strings


  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }

    if (limit === undefined) {
      return thresholds[threshold];
    }

    thresholds[threshold] = limit;

    if (threshold === 's') {
      thresholds.ss = limit - 1;
    }

    return true;
  }

  function humanize(withSuffix) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
  }

  var abs$1 = Math.abs;

  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }

  function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days = abs$1(this._days);
    var months = abs$1(this._months);
    var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60; // 12 months -> 1 year

    years = absFloor(months / 12);
    months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
    return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
  }

  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  proto$2.lang = lang; // Side effect imports
  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf'); // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
  }); // Side effect imports

  hooks.version = '2.22.2';
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

  hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
    // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',
    // <input type="date" />
    TIME: 'HH:mm',
    // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',
    // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',
    // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',
    // <input type="week" />
    MONTH: 'YYYY-MM' // <input type="month" />

  };
  return hooks;
}();

module.exports = moment;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/vendor/mqttclient.js":
/*!**********************************!*\
  !*** ./src/vendor/mqttclient.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * wrapper of received paho message
 * @class
 * @param {Paho.MQTT.Message} msg
 */
var SigV4Utils = __webpack_require__(/*! ./signv4utils.js */ "./src/vendor/signv4utils.js");

var moment = __webpack_require__(/*! ./moment.js */ "./src/vendor/moment.js");

var Paho = __webpack_require__(/*! ./mqttws31 */ "./src/vendor/mqttws31.js");

function ReceivedMsg(msg) {
  this.msg = msg;
  this.content = msg.payloadString;
}

var MQTTClient =
/*#__PURE__*/
function () {
  /**
   * AWS IOT MQTT Client
   * @class MQTTClient
   * @param {Object} options - the client options
   * @param {string} options.endpoint
   * @param {string} options.regionName
   * @param {string} options.accessKey
   * @param {string} options.secretKey
   * @param {string} options.clientId
   * @param {string} options.sessionToken
   */
  function MQTTClient(options) {
    _classCallCheck(this, MQTTClient);

    this.options = options;
    this.endpoint = this.computeUrl();
    console.log(this.endpoint);
    this.clientId = options.clientId;
    this.name = this.clientId + '@' + options.endpoint;
    this.connected = false;
    this.client = new Paho.MQTT.Client(this.endpoint, this.clientId);
    this.listeners = {};
    var self = this;

    this.client.onConnectionLost = function () {
      self.emit('connectionLost');
      self.connected = false;
    };

    this.client.onMessageArrived = function (msg) {
      self.emit('messageArrived', msg);
    };

    this.on('connected', function () {
      self.connected = true;
    });
  }

  _createClass(MQTTClient, [{
    key: "disconnect",
    value: function disconnect() {
      this.client.disconnect();
    }
  }, {
    key: "subscribe",
    value: function subscribe(topic) {
      var self = this;

      try {
        this.client.subscribe(topic, {
          onSuccess: function onSuccess() {
            self.emit('subscribeSucess');
          },
          onFailure: function onFailure() {
            self.emit('subscribeFailed');
          }
        });
      } catch (e) {
        this.emit('subscribeFailed', e);
      }
    }
  }, {
    key: "publish",
    value: function publish(topic, payload) {
      try {
        var message = new Paho.MQTT.Message(payload);
        message.destinationName = topic;
        this.client.send(message);
      } catch (e) {
        this.emit('publishFailed', e);
      }
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var listeners = this.listeners[event];

      if (listeners) {
        var args = Array.prototype.slice.apply(arguments, [1]);

        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          listener.apply(null, args);
        }
      }
    }
  }, {
    key: "computeUrl",
    value: function computeUrl() {
      // must use utc time
      var time = moment.utc();
      var dateStamp = time.format('YYYYMMDD');
      var amzdate = dateStamp + 'T' + time.format('HHmmss') + 'Z';
      var service = 'iotdevicegateway';
      var region = this.options.regionName;
      var secretKey = this.options.secretKey;
      var accessKey = this.options.accessKey;
      var algorithm = 'AWS4-HMAC-SHA256';
      var method = 'GET';
      var canonicalUri = '/mqtt';
      var host = this.options.endpoint;
      var credentialScope = dateStamp + '/' + region + '/' + service + '/' + 'aws4_request';
      var canonicalQuerystring = 'X-Amz-Algorithm=AWS4-HMAC-SHA256';
      canonicalQuerystring += '&X-Amz-Credential=' + encodeURIComponent(accessKey + '/' + credentialScope);
      canonicalQuerystring += '&X-Amz-Date=' + amzdate;
      canonicalQuerystring += '&X-Amz-Expires=86400';
      canonicalQuerystring += '&X-Amz-SignedHeaders=host';
      var canonicalHeaders = 'host:' + host + '\n';
      var payloadHash = SigV4Utils.sha256('');
      var canonicalRequest = method + '\n' + canonicalUri + '\n' + canonicalQuerystring + '\n' + canonicalHeaders + '\nhost\n' + payloadHash;
      var stringToSign = algorithm + '\n' + amzdate + '\n' + credentialScope + '\n' + SigV4Utils.sha256(canonicalRequest);
      var signingKey = SigV4Utils.getSignatureKey(secretKey, dateStamp, region, service);
      var signature = SigV4Utils.sign(signingKey, stringToSign);
      canonicalQuerystring += '&X-Amz-Signature=' + signature;
      canonicalQuerystring += '&X-Amz-Security-Token=' + encodeURIComponent(this.options.sessionToken);
      var requestUrl = 'wss://' + host + canonicalUri + '?' + canonicalQuerystring;
      return requestUrl;
    }
  }, {
    key: "connect",
    value: function connect() {
      var self = this;
      var connectOptions = {
        onSuccess: function onSuccess() {
          self.emit('connected');
        },
        useSSL: true,
        timeout: 3,
        mqttVersion: 4,
        onFailure: function onFailure() {
          self.emit('connectionLost');
        }
      };
      this.client.connect(connectOptions);
    }
  }, {
    key: "on",
    value: function on(event, handler) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }

      this.listeners[event].push(handler);
    }
  }]);

  return MQTTClient;
}();

;
module.exports = {
  MQTTClient: MQTTClient,
  ReceivedMsg: ReceivedMsg
};

/***/ }),

/***/ "./src/vendor/mqttws31.js":
/*!********************************!*\
  !*** ./src/vendor/mqttws31.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*******************************************************************************
 * Copyright (c) 2013 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *    http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *    Andrew Banks - initial API and implementation and initial documentation
 *******************************************************************************/
// Only expose a single object name in the global namespace.
// Everything must go through this module. Global Paho.MQTT module
// only has a single public function, client, which returns
// a Paho.MQTT client object given connection details.

/**
 * Send and receive messages using web browsers.
 * <p>
 * This programming interface lets a JavaScript client application use the MQTT V3.1 or
 * V3.1.1 protocol to connect to an MQTT-supporting messaging server.
 *
 * The function supported includes:
 * <ol>
 * <li>Connecting to and disconnecting from a server. The server is identified by its host name and port number.
 * <li>Specifying options that relate to the communications link with the server,
 * for example the frequency of keep-alive heartbeats, and whether SSL/TLS is required.
 * <li>Subscribing to and receiving messages from MQTT Topics.
 * <li>Publishing messages to MQTT Topics.
 * </ol>
 * <p>
 * The API consists of two main objects:
 * <dl>
 * <dt><b>{@link Paho.MQTT.Client}</b></dt>
 * <dd>This contains methods that provide the functionality of the API,
 * including provision of callbacks that notify the application when a message
 * arrives from or is delivered to the messaging server,
 * or when the status of its connection to the messaging server changes.</dd>
 * <dt><b>{@link Paho.MQTT.Message}</b></dt>
 * <dd>This encapsulates the payload of the message along with various attributes
 * associated with its delivery, in particular the destination to which it has
 * been (or is about to be) sent.</dd>
 * </dl>
 * <p>
 * The programming interface validates parameters passed to it, and will throw
 * an Error containing an error message intended for developer use, if it detects
 * an error with any parameter.
 * <p>
 * Example:
 *
 * <code><pre>
 client = new Paho.MQTT.Client(location.hostname, Number(location.port), "clientId");
 client.onConnectionLost = onConnectionLost;
 client.onMessageArrived = onMessageArrived;
 client.connect({onSuccess:onConnect});

 function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("/World");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "/World";
  client.send(message);
};
 function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0)
	console.log("onConnectionLost:"+responseObject.errorMessage);
};
 function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
  client.disconnect();
};
 * </pre></code>
 * @namespace Paho.MQTT
 */
if (typeof Paho === "undefined") {
  Paho = {};
}

Paho.MQTT = function (global) {
  // Private variables below, these are only visible inside the function closure
  // which is used to define the module.
  var version = "@VERSION@";
  var buildLevel = "@BUILDLEVEL@";
  /**
   * Unique message type identifiers, with associated
   * associated integer values.
   * @private
   */

  var MESSAGE_TYPE = {
    CONNECT: 1,
    CONNACK: 2,
    PUBLISH: 3,
    PUBACK: 4,
    PUBREC: 5,
    PUBREL: 6,
    PUBCOMP: 7,
    SUBSCRIBE: 8,
    SUBACK: 9,
    UNSUBSCRIBE: 10,
    UNSUBACK: 11,
    PINGREQ: 12,
    PINGRESP: 13,
    DISCONNECT: 14
  }; // Collection of utility methods used to simplify module code
  // and promote the DRY pattern.

  /**
   * Validate an object's parameter names to ensure they
   * match a list of expected variables name for this option
   * type. Used to ensure option object passed into the API don't
   * contain erroneous parameters.
   * @param {Object} obj - User options object
   * @param {Object} keys - valid keys and types that may exist in obj.
   * @throws {Error} Invalid option parameter found.
   * @private
   */

  var validate = function validate(obj, keys) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (keys.hasOwnProperty(key)) {
          if (_typeof(obj[key]) !== keys[key]) throw new Error(format(ERROR.INVALID_TYPE, [_typeof(obj[key]), key]));
        } else {
          var errorStr = "Unknown property, " + key + ". Valid properties are:";

          for (var key in keys) {
            if (keys.hasOwnProperty(key)) errorStr = errorStr + " " + key;
          }

          throw new Error(errorStr);
        }
      }
    }
  };
  /**
   * Return a new function which runs the user function bound
   * to a fixed scope.
   * @param {function} User function
   * @param {object} Function scope
   * @return {function} User function bound to another scope
   * @private
   */


  var scope = function scope(f, _scope) {
    return function () {
      return f.apply(_scope, arguments);
    };
  };
  /**
   * Unique message type identifiers, with associated
   * associated integer values.
   * @private
   */


  var ERROR = {
    OK: {
      code: 0,
      text: "AMQJSC0000I OK."
    },
    CONNECT_TIMEOUT: {
      code: 1,
      text: "AMQJSC0001E Connect timed out."
    },
    SUBSCRIBE_TIMEOUT: {
      code: 2,
      text: "AMQJS0002E Subscribe timed out."
    },
    UNSUBSCRIBE_TIMEOUT: {
      code: 3,
      text: "AMQJS0003E Unsubscribe timed out."
    },
    PING_TIMEOUT: {
      code: 4,
      text: "AMQJS0004E Ping timed out."
    },
    INTERNAL_ERROR: {
      code: 5,
      text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"
    },
    CONNACK_RETURNCODE: {
      code: 6,
      text: "AMQJS0006E Bad Connack return code:{0} {1}."
    },
    SOCKET_ERROR: {
      code: 7,
      text: "AMQJS0007E Socket error:{0}."
    },
    SOCKET_CLOSE: {
      code: 8,
      text: "AMQJS0008I Socket closed."
    },
    MALFORMED_UTF: {
      code: 9,
      text: "AMQJS0009E Malformed UTF data:{0} {1} {2}."
    },
    UNSUPPORTED: {
      code: 10,
      text: "AMQJS0010E {0} is not supported by this browser."
    },
    INVALID_STATE: {
      code: 11,
      text: "AMQJS0011E Invalid state {0}."
    },
    INVALID_TYPE: {
      code: 12,
      text: "AMQJS0012E Invalid type {0} for {1}."
    },
    INVALID_ARGUMENT: {
      code: 13,
      text: "AMQJS0013E Invalid argument {0} for {1}."
    },
    UNSUPPORTED_OPERATION: {
      code: 14,
      text: "AMQJS0014E Unsupported operation."
    },
    INVALID_STORED_DATA: {
      code: 15,
      text: "AMQJS0015E Invalid data in local storage key={0} value={1}."
    },
    INVALID_MQTT_MESSAGE_TYPE: {
      code: 16,
      text: "AMQJS0016E Invalid MQTT message type {0}."
    },
    MALFORMED_UNICODE: {
      code: 17,
      text: "AMQJS0017E Malformed Unicode string:{0} {1}."
    }
  };
  /** CONNACK RC Meaning. */

  var CONNACK_RC = {
    0: "Connection Accepted",
    1: "Connection Refused: unacceptable protocol version",
    2: "Connection Refused: identifier rejected",
    3: "Connection Refused: server unavailable",
    4: "Connection Refused: bad user name or password",
    5: "Connection Refused: not authorized"
  };
  /**
   * Format an error message text.
   * @private
   * @param {error} ERROR.KEY value above.
   * @param {substitutions} [array] substituted into the text.
   * @return the text with the substitutions made.
   */

  var format = function format(error, substitutions) {
    var text = error.text;

    if (substitutions) {
      var field, start;

      for (var i = 0; i < substitutions.length; i++) {
        field = "{" + i + "}";
        start = text.indexOf(field);

        if (start > 0) {
          var part1 = text.substring(0, start);
          var part2 = text.substring(start + field.length);
          text = part1 + substitutions[i] + part2;
        }
      }
    }

    return text;
  }; //MQTT protocol and version          6    M    Q    I    s    d    p    3


  var MqttProtoIdentifierv3 = [0x00, 0x06, 0x4d, 0x51, 0x49, 0x73, 0x64, 0x70, 0x03]; //MQTT proto/version for 311         4    M    Q    T    T    4

  var MqttProtoIdentifierv4 = [0x00, 0x04, 0x4d, 0x51, 0x54, 0x54, 0x04];
  /**
   * Construct an MQTT wire protocol message.
   * @param type MQTT packet type.
   * @param options optional wire message attributes.
   *
   * Optional properties
   *
   * messageIdentifier: message ID in the range [0..65535]
   * payloadMessage:	Application Message - PUBLISH only
   * connectStrings:	array of 0 or more Strings to be put into the CONNECT payload
   * topics:			array of strings (SUBSCRIBE, UNSUBSCRIBE)
   * requestQoS:		array of QoS values [0..2]
   *
   * "Flag" properties
   * cleanSession:	true if present / false if absent (CONNECT)
   * willMessage:  	true if present / false if absent (CONNECT)
   * isRetained:		true if present / false if absent (CONNECT)
   * userName:		true if present / false if absent (CONNECT)
   * password:		true if present / false if absent (CONNECT)
   * keepAliveInterval:	integer [0..65535]  (CONNECT)
   *
   * @private
   * @ignore
   */

  var WireMessage = function WireMessage(type, options) {
    this.type = type;

    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }
  };

  WireMessage.prototype.encode = function () {
    // Compute the first byte of the fixed header
    var first = (this.type & 0x0f) << 4;
    /*
     * Now calculate the length of the variable header + payload by adding up the lengths
     * of all the component parts
     */

    var remLength = 0;
    var topicStrLength = new Array();
    var destinationNameLength = 0; // if the message contains a messageIdentifier then we need two bytes for that

    if (this.messageIdentifier != undefined) remLength += 2;

    switch (this.type) {
      // If this a Connect then we need to include 12 bytes for its header
      case MESSAGE_TYPE.CONNECT:
        switch (this.mqttVersion) {
          case 3:
            remLength += MqttProtoIdentifierv3.length + 3;
            break;

          case 4:
            remLength += MqttProtoIdentifierv4.length + 3;
            break;
        }

        remLength += UTF8Length(this.clientId) + 2;

        if (this.willMessage != undefined) {
          remLength += UTF8Length(this.willMessage.destinationName) + 2; // Will message is always a string, sent as UTF-8 characters with a preceding length.

          var willMessagePayloadBytes = this.willMessage.payloadBytes;
          if (!(willMessagePayloadBytes instanceof Uint8Array)) willMessagePayloadBytes = new Uint8Array(payloadBytes);
          remLength += willMessagePayloadBytes.byteLength + 2;
        }

        if (this.userName != undefined) remLength += UTF8Length(this.userName) + 2;
        if (this.password != undefined) remLength += UTF8Length(this.password) + 2;
        break;
      // Subscribe, Unsubscribe can both contain topic strings

      case MESSAGE_TYPE.SUBSCRIBE:
        first |= 0x02; // Qos = 1;

        for (var i = 0; i < this.topics.length; i++) {
          topicStrLength[i] = UTF8Length(this.topics[i]);
          remLength += topicStrLength[i] + 2;
        }

        remLength += this.requestedQos.length; // 1 byte for each topic's Qos
        // QoS on Subscribe only

        break;

      case MESSAGE_TYPE.UNSUBSCRIBE:
        first |= 0x02; // Qos = 1;

        for (var i = 0; i < this.topics.length; i++) {
          topicStrLength[i] = UTF8Length(this.topics[i]);
          remLength += topicStrLength[i] + 2;
        }

        break;

      case MESSAGE_TYPE.PUBREL:
        first |= 0x02; // Qos = 1;

        break;

      case MESSAGE_TYPE.PUBLISH:
        if (this.payloadMessage.duplicate) first |= 0x08;
        first = first |= this.payloadMessage.qos << 1;
        if (this.payloadMessage.retained) first |= 0x01;
        destinationNameLength = UTF8Length(this.payloadMessage.destinationName);
        remLength += destinationNameLength + 2;
        var payloadBytes = this.payloadMessage.payloadBytes;
        remLength += payloadBytes.byteLength;
        if (payloadBytes instanceof ArrayBuffer) payloadBytes = new Uint8Array(payloadBytes);else if (!(payloadBytes instanceof Uint8Array)) payloadBytes = new Uint8Array(payloadBytes.buffer);
        break;

      case MESSAGE_TYPE.DISCONNECT:
        break;

      default:
        ;
    } // Now we can allocate a buffer for the message


    var mbi = encodeMBI(remLength); // Convert the length to MQTT MBI format

    var pos = mbi.length + 1; // Offset of start of variable header

    var buffer = new ArrayBuffer(remLength + pos);
    var byteStream = new Uint8Array(buffer); // view it as a sequence of bytes
    //Write the fixed header into the buffer

    byteStream[0] = first;
    byteStream.set(mbi, 1); // If this is a PUBLISH then the variable header starts with a topic

    if (this.type == MESSAGE_TYPE.PUBLISH) pos = writeString(this.payloadMessage.destinationName, destinationNameLength, byteStream, pos); // If this is a CONNECT then the variable header contains the protocol name/version, flags and keepalive time
    else if (this.type == MESSAGE_TYPE.CONNECT) {
        switch (this.mqttVersion) {
          case 3:
            byteStream.set(MqttProtoIdentifierv3, pos);
            pos += MqttProtoIdentifierv3.length;
            break;

          case 4:
            byteStream.set(MqttProtoIdentifierv4, pos);
            pos += MqttProtoIdentifierv4.length;
            break;
        }

        var connectFlags = 0;
        if (this.cleanSession) connectFlags = 0x02;

        if (this.willMessage != undefined) {
          connectFlags |= 0x04;
          connectFlags |= this.willMessage.qos << 3;

          if (this.willMessage.retained) {
            connectFlags |= 0x20;
          }
        }

        if (this.userName != undefined) connectFlags |= 0x80;
        if (this.password != undefined) connectFlags |= 0x40;
        byteStream[pos++] = connectFlags;
        pos = writeUint16(this.keepAliveInterval, byteStream, pos);
      } // Output the messageIdentifier - if there is one

    if (this.messageIdentifier != undefined) pos = writeUint16(this.messageIdentifier, byteStream, pos);

    switch (this.type) {
      case MESSAGE_TYPE.CONNECT:
        pos = writeString(this.clientId, UTF8Length(this.clientId), byteStream, pos);

        if (this.willMessage != undefined) {
          pos = writeString(this.willMessage.destinationName, UTF8Length(this.willMessage.destinationName), byteStream, pos);
          pos = writeUint16(willMessagePayloadBytes.byteLength, byteStream, pos);
          byteStream.set(willMessagePayloadBytes, pos);
          pos += willMessagePayloadBytes.byteLength;
        }

        if (this.userName != undefined) pos = writeString(this.userName, UTF8Length(this.userName), byteStream, pos);
        if (this.password != undefined) pos = writeString(this.password, UTF8Length(this.password), byteStream, pos);
        break;

      case MESSAGE_TYPE.PUBLISH:
        // PUBLISH has a text or binary payload, if text do not add a 2 byte length field, just the UTF characters.
        byteStream.set(payloadBytes, pos);
        break;
      //    	    case MESSAGE_TYPE.PUBREC:
      //    	    case MESSAGE_TYPE.PUBREL:
      //    	    case MESSAGE_TYPE.PUBCOMP:
      //    	    	break;

      case MESSAGE_TYPE.SUBSCRIBE:
        // SUBSCRIBE has a list of topic strings and request QoS
        for (var i = 0; i < this.topics.length; i++) {
          pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);
          byteStream[pos++] = this.requestedQos[i];
        }

        break;

      case MESSAGE_TYPE.UNSUBSCRIBE:
        // UNSUBSCRIBE has a list of topic strings
        for (var i = 0; i < this.topics.length; i++) {
          pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);
        }

        break;

      default: // Do nothing.

    }

    return buffer;
  };

  function decodeMessage(input, pos) {
    var startingPos = pos;
    var first = input[pos];
    var type = first >> 4;
    var messageInfo = first &= 0x0f;
    pos += 1; // Decode the remaining length (MBI format)

    var digit;
    var remLength = 0;
    var multiplier = 1;

    do {
      if (pos == input.length) {
        return [null, startingPos];
      }

      digit = input[pos++];
      remLength += (digit & 0x7F) * multiplier;
      multiplier *= 128;
    } while ((digit & 0x80) != 0);

    var endPos = pos + remLength;

    if (endPos > input.length) {
      return [null, startingPos];
    }

    var wireMessage = new WireMessage(type);

    switch (type) {
      case MESSAGE_TYPE.CONNACK:
        var connectAcknowledgeFlags = input[pos++];
        if (connectAcknowledgeFlags & 0x01) wireMessage.sessionPresent = true;
        wireMessage.returnCode = input[pos++];
        break;

      case MESSAGE_TYPE.PUBLISH:
        var qos = messageInfo >> 1 & 0x03;
        var len = readUint16(input, pos);
        pos += 2;
        var topicName = parseUTF8(input, pos, len);
        pos += len; // If QoS 1 or 2 there will be a messageIdentifier

        if (qos > 0) {
          wireMessage.messageIdentifier = readUint16(input, pos);
          pos += 2;
        }

        var message = new Paho.MQTT.Message(input.subarray(pos, endPos));
        if ((messageInfo & 0x01) == 0x01) message.retained = true;
        if ((messageInfo & 0x08) == 0x08) message.duplicate = true;
        message.qos = qos;
        message.destinationName = topicName;
        wireMessage.payloadMessage = message;
        break;

      case MESSAGE_TYPE.PUBACK:
      case MESSAGE_TYPE.PUBREC:
      case MESSAGE_TYPE.PUBREL:
      case MESSAGE_TYPE.PUBCOMP:
      case MESSAGE_TYPE.UNSUBACK:
        wireMessage.messageIdentifier = readUint16(input, pos);
        break;

      case MESSAGE_TYPE.SUBACK:
        wireMessage.messageIdentifier = readUint16(input, pos);
        pos += 2;
        wireMessage.returnCode = input.subarray(pos, endPos);
        break;

      default:
        ;
    }

    return [wireMessage, endPos];
  }

  function writeUint16(input, buffer, offset) {
    buffer[offset++] = input >> 8; //MSB

    buffer[offset++] = input % 256; //LSB

    return offset;
  }

  function writeString(input, utf8Length, buffer, offset) {
    offset = writeUint16(utf8Length, buffer, offset);
    stringToUTF8(input, buffer, offset);
    return offset + utf8Length;
  }

  function readUint16(buffer, offset) {
    return 256 * buffer[offset] + buffer[offset + 1];
  }
  /**
   * Encodes an MQTT Multi-Byte Integer
   * @private
   */


  function encodeMBI(number) {
    var output = new Array(1);
    var numBytes = 0;

    do {
      var digit = number % 128;
      number = number >> 7;

      if (number > 0) {
        digit |= 0x80;
      }

      output[numBytes++] = digit;
    } while (number > 0 && numBytes < 4);

    return output;
  }
  /**
   * Takes a String and calculates its length in bytes when encoded in UTF8.
   * @private
   */


  function UTF8Length(input) {
    var output = 0;

    for (var i = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i);

      if (charCode > 0x7FF) {
        // Surrogate pair means its a 4 byte character
        if (0xD800 <= charCode && charCode <= 0xDBFF) {
          i++;
          output++;
        }

        output += 3;
      } else if (charCode > 0x7F) output += 2;else output++;
    }

    return output;
  }
  /**
   * Takes a String and writes it into an array as UTF8 encoded bytes.
   * @private
   */


  function stringToUTF8(input, output, start) {
    var pos = start;

    for (var i = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i); // Check for a surrogate pair.

      if (0xD800 <= charCode && charCode <= 0xDBFF) {
        var lowCharCode = input.charCodeAt(++i);

        if (isNaN(lowCharCode)) {
          throw new Error(format(ERROR.MALFORMED_UNICODE, [charCode, lowCharCode]));
        }

        charCode = (charCode - 0xD800 << 10) + (lowCharCode - 0xDC00) + 0x10000;
      }

      if (charCode <= 0x7F) {
        output[pos++] = charCode;
      } else if (charCode <= 0x7FF) {
        output[pos++] = charCode >> 6 & 0x1F | 0xC0;
        output[pos++] = charCode & 0x3F | 0x80;
      } else if (charCode <= 0xFFFF) {
        output[pos++] = charCode >> 12 & 0x0F | 0xE0;
        output[pos++] = charCode >> 6 & 0x3F | 0x80;
        output[pos++] = charCode & 0x3F | 0x80;
      } else {
        output[pos++] = charCode >> 18 & 0x07 | 0xF0;
        output[pos++] = charCode >> 12 & 0x3F | 0x80;
        output[pos++] = charCode >> 6 & 0x3F | 0x80;
        output[pos++] = charCode & 0x3F | 0x80;
      }

      ;
    }

    return output;
  }

  function parseUTF8(input, offset, length) {
    var output = "";
    var utf16;
    var pos = offset;

    while (pos < offset + length) {
      var byte1 = input[pos++];
      if (byte1 < 128) utf16 = byte1;else {
        var byte2 = input[pos++] - 128;
        if (byte2 < 0) throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), ""]));
        if (byte1 < 0xE0) // 2 byte character
          utf16 = 64 * (byte1 - 0xC0) + byte2;else {
          var byte3 = input[pos++] - 128;
          if (byte3 < 0) throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16)]));
          if (byte1 < 0xF0) // 3 byte character
            utf16 = 4096 * (byte1 - 0xE0) + 64 * byte2 + byte3;else {
            var byte4 = input[pos++] - 128;
            if (byte4 < 0) throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
            if (byte1 < 0xF8) // 4 byte character
              utf16 = 262144 * (byte1 - 0xF0) + 4096 * byte2 + 64 * byte3 + byte4;else // longer encodings are not supported
              throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
          }
        }
      }

      if (utf16 > 0xFFFF) // 4 byte character - express as a surrogate pair
        {
          utf16 -= 0x10000;
          output += String.fromCharCode(0xD800 + (utf16 >> 10)); // lead character

          utf16 = 0xDC00 + (utf16 & 0x3FF); // trail character
        }

      output += String.fromCharCode(utf16);
    }

    return output;
  }
  /**
   * Repeat keepalive requests, monitor responses.
   * @ignore
   */


  var Pinger = function Pinger(client, window, keepAliveInterval) {
    this._client = client;
    this._window = window;
    this._keepAliveInterval = keepAliveInterval * 1000;
    this.isReset = false;
    var pingReq = new WireMessage(MESSAGE_TYPE.PINGREQ).encode();

    var doTimeout = function doTimeout(pinger) {
      return function () {
        return doPing.apply(pinger);
      };
    };
    /** @ignore */


    var doPing = function doPing() {
      if (!this.isReset) {
        this._client._trace("Pinger.doPing", "Timed out");

        this._client._disconnected(ERROR.PING_TIMEOUT.code, format(ERROR.PING_TIMEOUT));
      } else {
        this.isReset = false;

        this._client._trace("Pinger.doPing", "send PINGREQ");

        this._client.socket.send(pingReq);

        this.timeout = this._window.setTimeout(doTimeout(this), this._keepAliveInterval);
      }
    };

    this.reset = function () {
      this.isReset = true;

      this._window.clearTimeout(this.timeout);

      if (this._keepAliveInterval > 0) this.timeout = setTimeout(doTimeout(this), this._keepAliveInterval);
    };

    this.cancel = function () {
      this._window.clearTimeout(this.timeout);
    };
  };
  /**
   * Monitor request completion.
   * @ignore
   */


  var Timeout = function Timeout(client, window, timeoutSeconds, action, args) {
    this._window = window;
    if (!timeoutSeconds) timeoutSeconds = 30;

    var doTimeout = function doTimeout(action, client, args) {
      return function () {
        return action.apply(client, args);
      };
    };

    this.timeout = setTimeout(doTimeout(action, client, args), timeoutSeconds * 1000);

    this.cancel = function () {
      this._window.clearTimeout(this.timeout);
    };
  };
  /*
   * Internal implementation of the Websockets MQTT V3.1 client.
   *
   * @name Paho.MQTT.ClientImpl @constructor
   * @param {String} host the DNS nameof the webSocket host.
   * @param {Number} port the port number for that host.
   * @param {String} clientId the MQ client identifier.
   */


  var ClientImpl = function ClientImpl(uri, host, port, path, clientId) {
    // Check dependencies are satisfied in this browser.
    if (!("WebSocket" in global && global["WebSocket"] !== null)) {
      throw new Error(format(ERROR.UNSUPPORTED, ["WebSocket"]));
    }

    if (!("localStorage" in global && global["localStorage"] !== null)) {
      throw new Error(format(ERROR.UNSUPPORTED, ["localStorage"]));
    }

    if (!("ArrayBuffer" in global && global["ArrayBuffer"] !== null)) {
      throw new Error(format(ERROR.UNSUPPORTED, ["ArrayBuffer"]));
    }

    this._trace("Paho.MQTT.Client", uri, host, port, path, clientId);

    this.host = host;
    this.port = port;
    this.path = path;
    this.uri = uri;
    this.clientId = clientId; // Local storagekeys are qualified with the following string.
    // The conditional inclusion of path in the key is for backward
    // compatibility to when the path was not configurable and assumed to
    // be /mqtt

    this._localKey = host + ":" + port + (path != "/mqtt" ? ":" + path : "") + ":" + clientId + ":"; // Create private instance-only message queue
    // Internal queue of messages to be sent, in sending order.

    this._msg_queue = []; // Messages we have sent and are expecting a response for, indexed by their respective message ids.

    this._sentMessages = {}; // Messages we have received and acknowleged and are expecting a confirm message for
    // indexed by their respective message ids.

    this._receivedMessages = {}; // Internal list of callbacks to be executed when messages
    // have been successfully sent over web socket, e.g. disconnect
    // when it doesn't have to wait for ACK, just message is dispatched.

    this._notify_msg_sent = {}; // Unique identifier for SEND messages, incrementing
    // counter as messages are sent.

    this._message_identifier = 1; // Used to determine the transmission sequence of stored sent messages.

    this._sequence = 0; // Load the local state, if any, from the saved version, only restore state relevant to this client.

    for (var key in localStorage) {
      if (key.indexOf("Sent:" + this._localKey) == 0 || key.indexOf("Received:" + this._localKey) == 0) this.restore(key);
    }
  }; // Messaging Client public instance members.


  ClientImpl.prototype.host;
  ClientImpl.prototype.port;
  ClientImpl.prototype.path;
  ClientImpl.prototype.uri;
  ClientImpl.prototype.clientId; // Messaging Client private instance members.

  ClientImpl.prototype.socket;
  /* true once we have received an acknowledgement to a CONNECT packet. */

  ClientImpl.prototype.connected = false;
  /* The largest message identifier allowed, may not be larger than 2**16 but
   * if set smaller reduces the maximum number of outbound messages allowed.
   */

  ClientImpl.prototype.maxMessageIdentifier = 65536;
  ClientImpl.prototype.connectOptions;
  ClientImpl.prototype.hostIndex;
  ClientImpl.prototype.onConnectionLost;
  ClientImpl.prototype.onMessageDelivered;
  ClientImpl.prototype.onMessageArrived;
  ClientImpl.prototype.traceFunction;
  ClientImpl.prototype._msg_queue = null;
  ClientImpl.prototype._connectTimeout;
  /* The sendPinger monitors how long we allow before we send data to prove to the server that we are alive. */

  ClientImpl.prototype.sendPinger = null;
  /* The receivePinger monitors how long we allow before we require evidence that the server is alive. */

  ClientImpl.prototype.receivePinger = null;
  ClientImpl.prototype.receiveBuffer = null;
  ClientImpl.prototype._traceBuffer = null;
  ClientImpl.prototype._MAX_TRACE_ENTRIES = 100;

  ClientImpl.prototype.connect = function (connectOptions) {
    var connectOptionsMasked = this._traceMask(connectOptions, "password");

    this._trace("Client.connect", connectOptionsMasked, this.socket, this.connected);

    if (this.connected) throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));
    if (this.socket) throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));
    this.connectOptions = connectOptions;

    if (connectOptions.uris) {
      this.hostIndex = 0;

      this._doConnect(connectOptions.uris[0]);
    } else {
      this._doConnect(this.uri);
    }
  };

  ClientImpl.prototype.subscribe = function (filter, subscribeOptions) {
    this._trace("Client.subscribe", filter, subscribeOptions);

    if (!this.connected) throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
    var wireMessage = new WireMessage(MESSAGE_TYPE.SUBSCRIBE);
    wireMessage.topics = [filter];
    if (subscribeOptions.qos != undefined) wireMessage.requestedQos = [subscribeOptions.qos];else wireMessage.requestedQos = [0];

    if (subscribeOptions.onSuccess) {
      wireMessage.onSuccess = function (grantedQos) {
        subscribeOptions.onSuccess({
          invocationContext: subscribeOptions.invocationContext,
          grantedQos: grantedQos
        });
      };
    }

    if (subscribeOptions.onFailure) {
      wireMessage.onFailure = function (errorCode) {
        subscribeOptions.onFailure({
          invocationContext: subscribeOptions.invocationContext,
          errorCode: errorCode
        });
      };
    }

    if (subscribeOptions.timeout) {
      wireMessage.timeOut = new Timeout(this, window, subscribeOptions.timeout, subscribeOptions.onFailure, [{
        invocationContext: subscribeOptions.invocationContext,
        errorCode: ERROR.SUBSCRIBE_TIMEOUT.code,
        errorMessage: format(ERROR.SUBSCRIBE_TIMEOUT)
      }]);
    } // All subscriptions return a SUBACK.


    this._requires_ack(wireMessage);

    this._schedule_message(wireMessage);
  };
  /** @ignore */


  ClientImpl.prototype.unsubscribe = function (filter, unsubscribeOptions) {
    this._trace("Client.unsubscribe", filter, unsubscribeOptions);

    if (!this.connected) throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
    var wireMessage = new WireMessage(MESSAGE_TYPE.UNSUBSCRIBE);
    wireMessage.topics = [filter];

    if (unsubscribeOptions.onSuccess) {
      wireMessage.callback = function () {
        unsubscribeOptions.onSuccess({
          invocationContext: unsubscribeOptions.invocationContext
        });
      };
    }

    if (unsubscribeOptions.timeout) {
      wireMessage.timeOut = new Timeout(this, window, unsubscribeOptions.timeout, unsubscribeOptions.onFailure, [{
        invocationContext: unsubscribeOptions.invocationContext,
        errorCode: ERROR.UNSUBSCRIBE_TIMEOUT.code,
        errorMessage: format(ERROR.UNSUBSCRIBE_TIMEOUT)
      }]);
    } // All unsubscribes return a SUBACK.


    this._requires_ack(wireMessage);

    this._schedule_message(wireMessage);
  };

  ClientImpl.prototype.send = function (message) {
    this._trace("Client.send", message);

    if (!this.connected) throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
    wireMessage = new WireMessage(MESSAGE_TYPE.PUBLISH);
    wireMessage.payloadMessage = message;
    if (message.qos > 0) this._requires_ack(wireMessage);else if (this.onMessageDelivered) this._notify_msg_sent[wireMessage] = this.onMessageDelivered(wireMessage.payloadMessage);

    this._schedule_message(wireMessage);
  };

  ClientImpl.prototype.disconnect = function () {
    this._trace("Client.disconnect");

    if (!this.socket) throw new Error(format(ERROR.INVALID_STATE, ["not connecting or connected"]));
    wireMessage = new WireMessage(MESSAGE_TYPE.DISCONNECT); // Run the disconnected call back as soon as the message has been sent,
    // in case of a failure later on in the disconnect processing.
    // as a consequence, the _disconected call back may be run several times.

    this._notify_msg_sent[wireMessage] = scope(this._disconnected, this);

    this._schedule_message(wireMessage);
  };

  ClientImpl.prototype.getTraceLog = function () {
    if (this._traceBuffer !== null) {
      this._trace("Client.getTraceLog", new Date());

      this._trace("Client.getTraceLog in flight messages", this._sentMessages.length);

      for (var key in this._sentMessages) {
        this._trace("_sentMessages ", key, this._sentMessages[key]);
      }

      for (var key in this._receivedMessages) {
        this._trace("_receivedMessages ", key, this._receivedMessages[key]);
      }

      return this._traceBuffer;
    }
  };

  ClientImpl.prototype.startTrace = function () {
    if (this._traceBuffer === null) {
      this._traceBuffer = [];
    }

    this._trace("Client.startTrace", new Date(), version);
  };

  ClientImpl.prototype.stopTrace = function () {
    delete this._traceBuffer;
  };

  ClientImpl.prototype._doConnect = function (wsurl) {
    // When the socket is open, this client will send the CONNECT WireMessage using the saved parameters.
    if (this.connectOptions.useSSL) {
      var uriParts = wsurl.split(":");
      uriParts[0] = "wss";
      wsurl = uriParts.join(":");
    }

    this.connected = false;

    if (this.connectOptions.mqttVersion < 4) {
      this.socket = new WebSocket(wsurl, ["mqttv3.1"]);
    } else {
      this.socket = new WebSocket(wsurl, ["mqtt"]);
    }

    this.socket.binaryType = 'arraybuffer';
    this.socket.onopen = scope(this._on_socket_open, this);
    this.socket.onmessage = scope(this._on_socket_message, this);
    this.socket.onerror = scope(this._on_socket_error, this);
    this.socket.onclose = scope(this._on_socket_close, this);
    this.sendPinger = new Pinger(this, window, this.connectOptions.keepAliveInterval);
    this.receivePinger = new Pinger(this, window, this.connectOptions.keepAliveInterval);
    this._connectTimeout = new Timeout(this, window, this.connectOptions.timeout, this._disconnected, [ERROR.CONNECT_TIMEOUT.code, format(ERROR.CONNECT_TIMEOUT)]);
  }; // Schedule a new message to be sent over the WebSockets
  // connection. CONNECT messages cause WebSocket connection
  // to be started. All other messages are queued internally
  // until this has happened. When WS connection starts, process
  // all outstanding messages.


  ClientImpl.prototype._schedule_message = function (message) {
    this._msg_queue.push(message); // Process outstanding messages in the queue if we have an  open socket, and have received CONNACK.


    if (this.connected) {
      this._process_queue();
    }
  };

  ClientImpl.prototype.store = function (prefix, wireMessage) {
    var storedMessage = {
      type: wireMessage.type,
      messageIdentifier: wireMessage.messageIdentifier,
      version: 1
    };

    switch (wireMessage.type) {
      case MESSAGE_TYPE.PUBLISH:
        if (wireMessage.pubRecReceived) storedMessage.pubRecReceived = true; // Convert the payload to a hex string.

        storedMessage.payloadMessage = {};
        var hex = "";
        var messageBytes = wireMessage.payloadMessage.payloadBytes;

        for (var i = 0; i < messageBytes.length; i++) {
          if (messageBytes[i] <= 0xF) hex = hex + "0" + messageBytes[i].toString(16);else hex = hex + messageBytes[i].toString(16);
        }

        storedMessage.payloadMessage.payloadHex = hex;
        storedMessage.payloadMessage.qos = wireMessage.payloadMessage.qos;
        storedMessage.payloadMessage.destinationName = wireMessage.payloadMessage.destinationName;
        if (wireMessage.payloadMessage.duplicate) storedMessage.payloadMessage.duplicate = true;
        if (wireMessage.payloadMessage.retained) storedMessage.payloadMessage.retained = true; // Add a sequence number to sent messages.

        if (prefix.indexOf("Sent:") == 0) {
          if (wireMessage.sequence === undefined) wireMessage.sequence = ++this._sequence;
          storedMessage.sequence = wireMessage.sequence;
        }

        break;

      default:
        throw Error(format(ERROR.INVALID_STORED_DATA, [key, storedMessage]));
    }

    localStorage.setItem(prefix + this._localKey + wireMessage.messageIdentifier, JSON.stringify(storedMessage));
  };

  ClientImpl.prototype.restore = function (key) {
    var value = localStorage.getItem(key);
    var storedMessage = JSON.parse(value);
    var wireMessage = new WireMessage(storedMessage.type, storedMessage);

    switch (storedMessage.type) {
      case MESSAGE_TYPE.PUBLISH:
        // Replace the payload message with a Message object.
        var hex = storedMessage.payloadMessage.payloadHex;
        var buffer = new ArrayBuffer(hex.length / 2);
        var byteStream = new Uint8Array(buffer);
        var i = 0;

        while (hex.length >= 2) {
          var x = parseInt(hex.substring(0, 2), 16);
          hex = hex.substring(2, hex.length);
          byteStream[i++] = x;
        }

        var payloadMessage = new Paho.MQTT.Message(byteStream);
        payloadMessage.qos = storedMessage.payloadMessage.qos;
        payloadMessage.destinationName = storedMessage.payloadMessage.destinationName;
        if (storedMessage.payloadMessage.duplicate) payloadMessage.duplicate = true;
        if (storedMessage.payloadMessage.retained) payloadMessage.retained = true;
        wireMessage.payloadMessage = payloadMessage;
        break;

      default:
        throw Error(format(ERROR.INVALID_STORED_DATA, [key, value]));
    }

    if (key.indexOf("Sent:" + this._localKey) == 0) {
      wireMessage.payloadMessage.duplicate = true;
      this._sentMessages[wireMessage.messageIdentifier] = wireMessage;
    } else if (key.indexOf("Received:" + this._localKey) == 0) {
      this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
    }
  };

  ClientImpl.prototype._process_queue = function () {
    var message = null; // Process messages in order they were added

    var fifo = this._msg_queue.reverse(); // Send all queued messages down socket connection


    while (message = fifo.pop()) {
      this._socket_send(message); // Notify listeners that message was successfully sent


      if (this._notify_msg_sent[message]) {
        this._notify_msg_sent[message]();

        delete this._notify_msg_sent[message];
      }
    }
  };
  /**
   * Expect an ACK response for this message. Add message to the set of in progress
   * messages and set an unused identifier in this message.
   * @ignore
   */


  ClientImpl.prototype._requires_ack = function (wireMessage) {
    var messageCount = Object.keys(this._sentMessages).length;
    if (messageCount > this.maxMessageIdentifier) throw Error("Too many messages:" + messageCount);

    while (this._sentMessages[this._message_identifier] !== undefined) {
      this._message_identifier++;
    }

    wireMessage.messageIdentifier = this._message_identifier;
    this._sentMessages[wireMessage.messageIdentifier] = wireMessage;

    if (wireMessage.type === MESSAGE_TYPE.PUBLISH) {
      this.store("Sent:", wireMessage);
    }

    if (this._message_identifier === this.maxMessageIdentifier) {
      this._message_identifier = 1;
    }
  };
  /**
   * Called when the underlying websocket has been opened.
   * @ignore
   */


  ClientImpl.prototype._on_socket_open = function () {
    // Create the CONNECT message object.
    var wireMessage = new WireMessage(MESSAGE_TYPE.CONNECT, this.connectOptions);
    wireMessage.clientId = this.clientId;

    this._socket_send(wireMessage);
  };
  /**
   * Called when the underlying websocket has received a complete packet.
   * @ignore
   */


  ClientImpl.prototype._on_socket_message = function (event) {
    this._trace("Client._on_socket_message", event.data); // Reset the receive ping timer, we now have evidence the server is alive.


    this.receivePinger.reset();

    var messages = this._deframeMessages(event.data);

    for (var i = 0; i < messages.length; i += 1) {
      this._handleMessage(messages[i]);
    }
  };

  ClientImpl.prototype._deframeMessages = function (data) {
    var byteArray = new Uint8Array(data);

    if (this.receiveBuffer) {
      var newData = new Uint8Array(this.receiveBuffer.length + byteArray.length);
      newData.set(this.receiveBuffer);
      newData.set(byteArray, this.receiveBuffer.length);
      byteArray = newData;
      delete this.receiveBuffer;
    }

    try {
      var offset = 0;
      var messages = [];

      while (offset < byteArray.length) {
        var result = decodeMessage(byteArray, offset);
        var wireMessage = result[0];
        offset = result[1];

        if (wireMessage !== null) {
          messages.push(wireMessage);
        } else {
          break;
        }
      }

      if (offset < byteArray.length) {
        this.receiveBuffer = byteArray.subarray(offset);
      }
    } catch (error) {
      this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, error.stack.toString()]));

      return;
    }

    return messages;
  };

  ClientImpl.prototype._handleMessage = function (wireMessage) {
    this._trace("Client._handleMessage", wireMessage);

    try {
      switch (wireMessage.type) {
        case MESSAGE_TYPE.CONNACK:
          this._connectTimeout.cancel(); // If we have started using clean session then clear up the local state.


          if (this.connectOptions.cleanSession) {
            for (var key in this._sentMessages) {
              var sentMessage = this._sentMessages[key];
              localStorage.removeItem("Sent:" + this._localKey + sentMessage.messageIdentifier);
            }

            this._sentMessages = {};

            for (var key in this._receivedMessages) {
              var receivedMessage = this._receivedMessages[key];
              localStorage.removeItem("Received:" + this._localKey + receivedMessage.messageIdentifier);
            }

            this._receivedMessages = {};
          } // Client connected and ready for business.


          if (wireMessage.returnCode === 0) {
            this.connected = true; // Jump to the end of the list of uris and stop looking for a good host.

            if (this.connectOptions.uris) this.hostIndex = this.connectOptions.uris.length;
          } else {
            this._disconnected(ERROR.CONNACK_RETURNCODE.code, format(ERROR.CONNACK_RETURNCODE, [wireMessage.returnCode, CONNACK_RC[wireMessage.returnCode]]));

            break;
          } // Resend messages.


          var sequencedMessages = new Array();

          for (var msgId in this._sentMessages) {
            if (this._sentMessages.hasOwnProperty(msgId)) sequencedMessages.push(this._sentMessages[msgId]);
          } // Sort sentMessages into the original sent order.


          var sequencedMessages = sequencedMessages.sort(function (a, b) {
            return a.sequence - b.sequence;
          });

          for (var i = 0, len = sequencedMessages.length; i < len; i++) {
            var sentMessage = sequencedMessages[i];

            if (sentMessage.type == MESSAGE_TYPE.PUBLISH && sentMessage.pubRecReceived) {
              var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, {
                messageIdentifier: sentMessage.messageIdentifier
              });

              this._schedule_message(pubRelMessage);
            } else {
              this._schedule_message(sentMessage);
            }

            ;
          } // Execute the connectOptions.onSuccess callback if there is one.


          if (this.connectOptions.onSuccess) {
            this.connectOptions.onSuccess({
              invocationContext: this.connectOptions.invocationContext
            });
          } // Process all queued messages now that the connection is established.


          this._process_queue();

          break;

        case MESSAGE_TYPE.PUBLISH:
          this._receivePublish(wireMessage);

          break;

        case MESSAGE_TYPE.PUBACK:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier]; // If this is a re flow of a PUBACK after we have restarted receivedMessage will not exist.

          if (sentMessage) {
            delete this._sentMessages[wireMessage.messageIdentifier];
            localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
            if (this.onMessageDelivered) this.onMessageDelivered(sentMessage.payloadMessage);
          }

          break;

        case MESSAGE_TYPE.PUBREC:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier]; // If this is a re flow of a PUBREC after we have restarted receivedMessage will not exist.

          if (sentMessage) {
            sentMessage.pubRecReceived = true;
            var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, {
              messageIdentifier: wireMessage.messageIdentifier
            });
            this.store("Sent:", sentMessage);

            this._schedule_message(pubRelMessage);
          }

          break;

        case MESSAGE_TYPE.PUBREL:
          var receivedMessage = this._receivedMessages[wireMessage.messageIdentifier];
          localStorage.removeItem("Received:" + this._localKey + wireMessage.messageIdentifier); // If this is a re flow of a PUBREL after we have restarted receivedMessage will not exist.

          if (receivedMessage) {
            this._receiveMessage(receivedMessage);

            delete this._receivedMessages[wireMessage.messageIdentifier];
          } // Always flow PubComp, we may have previously flowed PubComp but the server lost it and restarted.


          var pubCompMessage = new WireMessage(MESSAGE_TYPE.PUBCOMP, {
            messageIdentifier: wireMessage.messageIdentifier
          });

          this._schedule_message(pubCompMessage);

          break;

        case MESSAGE_TYPE.PUBCOMP:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
          delete this._sentMessages[wireMessage.messageIdentifier];
          localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
          if (this.onMessageDelivered) this.onMessageDelivered(sentMessage.payloadMessage);
          break;

        case MESSAGE_TYPE.SUBACK:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier];

          if (sentMessage) {
            if (sentMessage.timeOut) sentMessage.timeOut.cancel(); // This will need to be fixed when we add multiple topic support

            if (wireMessage.returnCode[0] === 0x80) {
              if (sentMessage.onFailure) {
                sentMessage.onFailure(wireMessage.returnCode);
              }
            } else if (sentMessage.onSuccess) {
              sentMessage.onSuccess(wireMessage.returnCode);
            }

            delete this._sentMessages[wireMessage.messageIdentifier];
          }

          break;

        case MESSAGE_TYPE.UNSUBACK:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier];

          if (sentMessage) {
            if (sentMessage.timeOut) sentMessage.timeOut.cancel();

            if (sentMessage.callback) {
              sentMessage.callback();
            }

            delete this._sentMessages[wireMessage.messageIdentifier];
          }

          break;

        case MESSAGE_TYPE.PINGRESP:
          /* The sendPinger or receivePinger may have sent a ping, the receivePinger has already been reset. */
          this.sendPinger.reset();
          break;

        case MESSAGE_TYPE.DISCONNECT:
          // Clients do not expect to receive disconnect packets.
          this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));

          break;

        default:
          this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));

      }

      ;
    } catch (error) {
      this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, error.stack.toString()]));

      return;
    }
  };
  /** @ignore */


  ClientImpl.prototype._on_socket_error = function (error) {
    this._disconnected(ERROR.SOCKET_ERROR.code, format(ERROR.SOCKET_ERROR, [error.data]));
  };
  /** @ignore */


  ClientImpl.prototype._on_socket_close = function () {
    this._disconnected(ERROR.SOCKET_CLOSE.code, format(ERROR.SOCKET_CLOSE));
  };
  /** @ignore */


  ClientImpl.prototype._socket_send = function (wireMessage) {
    if (wireMessage.type == 1) {
      var wireMessageMasked = this._traceMask(wireMessage, "password");

      this._trace("Client._socket_send", wireMessageMasked);
    } else this._trace("Client._socket_send", wireMessage);

    this.socket.send(wireMessage.encode());
    /* We have proved to the server we are alive. */

    this.sendPinger.reset();
  };
  /** @ignore */


  ClientImpl.prototype._receivePublish = function (wireMessage) {
    switch (wireMessage.payloadMessage.qos) {
      case "undefined":
      case 0:
        this._receiveMessage(wireMessage);

        break;

      case 1:
        var pubAckMessage = new WireMessage(MESSAGE_TYPE.PUBACK, {
          messageIdentifier: wireMessage.messageIdentifier
        });

        this._schedule_message(pubAckMessage);

        this._receiveMessage(wireMessage);

        break;

      case 2:
        this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
        this.store("Received:", wireMessage);
        var pubRecMessage = new WireMessage(MESSAGE_TYPE.PUBREC, {
          messageIdentifier: wireMessage.messageIdentifier
        });

        this._schedule_message(pubRecMessage);

        break;

      default:
        throw Error("Invaild qos=" + wireMmessage.payloadMessage.qos);
    }

    ;
  };
  /** @ignore */


  ClientImpl.prototype._receiveMessage = function (wireMessage) {
    if (this.onMessageArrived) {
      this.onMessageArrived(wireMessage.payloadMessage);
    }
  };
  /**
   * Client has disconnected either at its own request or because the server
   * or network disconnected it. Remove all non-durable state.
   * @param {errorCode} [number] the error number.
   * @param {errorText} [string] the error text.
   * @ignore
   */


  ClientImpl.prototype._disconnected = function (errorCode, errorText) {
    this._trace("Client._disconnected", errorCode, errorText);

    this.sendPinger.cancel();
    this.receivePinger.cancel();
    if (this._connectTimeout) this._connectTimeout.cancel(); // Clear message buffers.

    this._msg_queue = [];
    this._notify_msg_sent = {};

    if (this.socket) {
      // Cancel all socket callbacks so that they cannot be driven again by this socket.
      this.socket.onopen = null;
      this.socket.onmessage = null;
      this.socket.onerror = null;
      this.socket.onclose = null;
      if (this.socket.readyState === 1) this.socket.close();
      delete this.socket;
    }

    if (this.connectOptions.uris && this.hostIndex < this.connectOptions.uris.length - 1) {
      // Try the next host.
      this.hostIndex++;

      this._doConnect(this.connectOptions.uris[this.hostIndex]);
    } else {
      if (errorCode === undefined) {
        errorCode = ERROR.OK.code;
        errorText = format(ERROR.OK);
      } // Run any application callbacks last as they may attempt to reconnect and hence create a new socket.


      if (this.connected) {
        this.connected = false; // Execute the connectionLostCallback if there is one, and we were connected.

        if (this.onConnectionLost) this.onConnectionLost({
          errorCode: errorCode,
          errorMessage: errorText
        });
      } else {
        // Otherwise we never had a connection, so indicate that the connect has failed.
        if (this.connectOptions.mqttVersion === 4 && this.connectOptions.mqttVersionExplicit === false) {
          this._trace("Failed to connect V4, dropping back to V3");

          this.connectOptions.mqttVersion = 3;

          if (this.connectOptions.uris) {
            this.hostIndex = 0;

            this._doConnect(this.connectOptions.uris[0]);
          } else {
            this._doConnect(this.uri);
          }
        } else if (this.connectOptions.onFailure) {
          this.connectOptions.onFailure({
            invocationContext: this.connectOptions.invocationContext,
            errorCode: errorCode,
            errorMessage: errorText
          });
        }
      }
    }
  };
  /** @ignore */


  ClientImpl.prototype._trace = function () {
    // Pass trace message back to client's callback function
    if (this.traceFunction) {
      for (var i in arguments) {
        if (typeof arguments[i] !== "undefined") arguments[i] = JSON.stringify(arguments[i]);
      }

      var record = Array.prototype.slice.call(arguments).join("");
      this.traceFunction({
        severity: "Debug",
        message: record
      });
    } //buffer style trace


    if (this._traceBuffer !== null) {
      for (var i = 0, max = arguments.length; i < max; i++) {
        if (this._traceBuffer.length == this._MAX_TRACE_ENTRIES) {
          this._traceBuffer.shift();
        }

        if (i === 0) this._traceBuffer.push(arguments[i]);else if (typeof arguments[i] === "undefined") this._traceBuffer.push(arguments[i]);else this._traceBuffer.push("  " + JSON.stringify(arguments[i]));
      }

      ;
    }

    ;
  };
  /** @ignore */


  ClientImpl.prototype._traceMask = function (traceObject, masked) {
    var traceObjectMasked = {};

    for (var attr in traceObject) {
      if (traceObject.hasOwnProperty(attr)) {
        if (attr == masked) traceObjectMasked[attr] = "******";else traceObjectMasked[attr] = traceObject[attr];
      }
    }

    return traceObjectMasked;
  }; // ------------------------------------------------------------------------
  // Public Programming interface.
  // ------------------------------------------------------------------------

  /**
   * The JavaScript application communicates to the server using a {@link Paho.MQTT.Client} object.
   * <p>
   * Most applications will create just one Client object and then call its connect() method,
   * however applications can create more than one Client object if they wish.
   * In this case the combination of host, port and clientId attributes must be different for each Client object.
   * <p>
   * The send, subscribe and unsubscribe methods are implemented as asynchronous JavaScript methods
   * (even though the underlying protocol exchange might be synchronous in nature).
   * This means they signal their completion by calling back to the application,
   * via Success or Failure callback functions provided by the application on the method in question.
   * Such callbacks are called at most once per method invocation and do not persist beyond the lifetime
   * of the script that made the invocation.
   * <p>
   * In contrast there are some callback functions, most notably <i>onMessageArrived</i>,
   * that are defined on the {@link Paho.MQTT.Client} object.
   * These may get called multiple times, and aren't directly related to specific method invocations made by the client.
   *
   * @name Paho.MQTT.Client
   *
   * @constructor
   *
   * @param {string} host - the address of the messaging server, as a fully qualified WebSocket URI, as a DNS name or dotted decimal IP address.
   * @param {number} port - the port number to connect to - only required if host is not a URI
   * @param {string} path - the path on the host to connect to - only used if host is not a URI. Default: '/mqtt'.
   * @param {string} clientId - the Messaging client identifier, between 1 and 23 characters in length.
   *
   * @property {string} host - <i>read only</i> the server's DNS hostname or dotted decimal IP address.
   * @property {number} port - <i>read only</i> the server's port.
   * @property {string} path - <i>read only</i> the server's path.
   * @property {string} clientId - <i>read only</i> used when connecting to the server.
   * @property {function} onConnectionLost - called when a connection has been lost.
   *                            after a connect() method has succeeded.
   *                            Establish the call back used when a connection has been lost. The connection may be
   *                            lost because the client initiates a disconnect or because the server or network
   *                            cause the client to be disconnected. The disconnect call back may be called without
   *                            the connectionComplete call back being invoked if, for example the client fails to
   *                            connect.
   *                            A single response object parameter is passed to the onConnectionLost callback containing the following fields:
   *                            <ol>
   *                            <li>errorCode
   *                            <li>errorMessage
   *                            </ol>
   * @property {function} onMessageDelivered called when a message has been delivered.
   *                            All processing that this Client will ever do has been completed. So, for example,
   *                            in the case of a Qos=2 message sent by this client, the PubComp flow has been received from the server
   *                            and the message has been removed from persistent storage before this callback is invoked.
   *                            Parameters passed to the onMessageDelivered callback are:
   *                            <ol>
   *                            <li>{@link Paho.MQTT.Message} that was delivered.
   *                            </ol>
   * @property {function} onMessageArrived called when a message has arrived in this Paho.MQTT.client.
   *                            Parameters passed to the onMessageArrived callback are:
   *                            <ol>
   *                            <li>{@link Paho.MQTT.Message} that has arrived.
   *                            </ol>
   */


  var Client = function Client(host, port, path, clientId) {
    var uri;
    if (typeof host !== "string") throw new Error(format(ERROR.INVALID_TYPE, [_typeof(host), "host"]));

    if (arguments.length == 2) {
      // host: must be full ws:// uri
      // port: clientId
      clientId = port;
      uri = host;
      var match = uri.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);

      if (match) {
        host = match[4] || match[2];
        port = parseInt(match[7]);
        path = match[8];
      } else {
        throw new Error(format(ERROR.INVALID_ARGUMENT, [host, "host"]));
      }
    } else {
      if (arguments.length == 3) {
        clientId = path;
        path = "/mqtt";
      }

      if (typeof port !== "number" || port < 0) throw new Error(format(ERROR.INVALID_TYPE, [_typeof(port), "port"]));
      if (typeof path !== "string") throw new Error(format(ERROR.INVALID_TYPE, [_typeof(path), "path"]));
      var ipv6AddSBracket = host.indexOf(":") != -1 && host.slice(0, 1) != "[" && host.slice(-1) != "]";
      uri = "ws://" + (ipv6AddSBracket ? "[" + host + "]" : host) + ":" + port + path;
    }

    var clientIdLength = 0;

    for (var i = 0; i < clientId.length; i++) {
      var charCode = clientId.charCodeAt(i);

      if (0xD800 <= charCode && charCode <= 0xDBFF) {
        i++; // Surrogate pair.
      }

      clientIdLength++;
    }

    if (typeof clientId !== "string" || clientIdLength > 65535) throw new Error(format(ERROR.INVALID_ARGUMENT, [clientId, "clientId"]));
    var client = new ClientImpl(uri, host, port, path, clientId);

    this._getHost = function () {
      return host;
    };

    this._setHost = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };

    this._getPort = function () {
      return port;
    };

    this._setPort = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };

    this._getPath = function () {
      return path;
    };

    this._setPath = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };

    this._getURI = function () {
      return uri;
    };

    this._setURI = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };

    this._getClientId = function () {
      return client.clientId;
    };

    this._setClientId = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };

    this._getOnConnectionLost = function () {
      return client.onConnectionLost;
    };

    this._setOnConnectionLost = function (newOnConnectionLost) {
      if (typeof newOnConnectionLost === "function") client.onConnectionLost = newOnConnectionLost;else throw new Error(format(ERROR.INVALID_TYPE, [_typeof(newOnConnectionLost), "onConnectionLost"]));
    };

    this._getOnMessageDelivered = function () {
      return client.onMessageDelivered;
    };

    this._setOnMessageDelivered = function (newOnMessageDelivered) {
      if (typeof newOnMessageDelivered === "function") client.onMessageDelivered = newOnMessageDelivered;else throw new Error(format(ERROR.INVALID_TYPE, [_typeof(newOnMessageDelivered), "onMessageDelivered"]));
    };

    this._getOnMessageArrived = function () {
      return client.onMessageArrived;
    };

    this._setOnMessageArrived = function (newOnMessageArrived) {
      if (typeof newOnMessageArrived === "function") client.onMessageArrived = newOnMessageArrived;else throw new Error(format(ERROR.INVALID_TYPE, [_typeof(newOnMessageArrived), "onMessageArrived"]));
    };

    this._getTrace = function () {
      return client.traceFunction;
    };

    this._setTrace = function (trace) {
      if (typeof trace === "function") {
        client.traceFunction = trace;
      } else {
        throw new Error(format(ERROR.INVALID_TYPE, [_typeof(trace), "onTrace"]));
      }
    };
    /**
     * Connect this Messaging client to its server.
     *
     * @name Paho.MQTT.Client#connect
     * @function
     * @param {Object} connectOptions - attributes used with the connection.
     * @param {number} connectOptions.timeout - If the connect has not succeeded within this
     *                    number of seconds, it is deemed to have failed.
     *                    The default is 30 seconds.
     * @param {string} connectOptions.userName - Authentication username for this connection.
     * @param {string} connectOptions.password - Authentication password for this connection.
     * @param {Paho.MQTT.Message} connectOptions.willMessage - sent by the server when the client
     *                    disconnects abnormally.
     * @param {Number} connectOptions.keepAliveInterval - the server disconnects this client if
     *                    there is no activity for this number of seconds.
     *                    The default value of 60 seconds is assumed if not set.
     * @param {boolean} connectOptions.cleanSession - if true(default) the client and server
     *                    persistent state is deleted on successful connect.
     * @param {boolean} connectOptions.useSSL - if present and true, use an SSL Websocket connection.
     * @param {object} connectOptions.invocationContext - passed to the onSuccess callback or onFailure callback.
     * @param {function} connectOptions.onSuccess - called when the connect acknowledgement
     *                    has been received from the server.
     * A single response object parameter is passed to the onSuccess callback containing the following fields:
     * <ol>
     * <li>invocationContext as passed in to the onSuccess method in the connectOptions.
     * </ol>
     * @config {function} [onFailure] called when the connect request has failed or timed out.
     * A single response object parameter is passed to the onFailure callback containing the following fields:
     * <ol>
     * <li>invocationContext as passed in to the onFailure method in the connectOptions.
     * <li>errorCode a number indicating the nature of the error.
     * <li>errorMessage text describing the error.
     * </ol>
     * @config {Array} [hosts] If present this contains either a set of hostnames or fully qualified
     * WebSocket URIs (ws://example.com:1883/mqtt), that are tried in order in place
     * of the host and port paramater on the construtor. The hosts are tried one at at time in order until
     * one of then succeeds.
     * @config {Array} [ports] If present the set of ports matching the hosts. If hosts contains URIs, this property
     * is not used.
     * @throws {InvalidState} if the client is not in disconnected state. The client must have received connectionLost
     * or disconnected before calling connect for a second or subsequent time.
     */


    this.connect = function (connectOptions) {
      connectOptions = connectOptions || {};
      validate(connectOptions, {
        timeout: "number",
        userName: "string",
        password: "string",
        willMessage: "object",
        keepAliveInterval: "number",
        cleanSession: "boolean",
        useSSL: "boolean",
        invocationContext: "object",
        onSuccess: "function",
        onFailure: "function",
        hosts: "object",
        ports: "object",
        mqttVersion: "number"
      }); // If no keep alive interval is set, assume 60 seconds.

      if (connectOptions.keepAliveInterval === undefined) connectOptions.keepAliveInterval = 60;

      if (connectOptions.mqttVersion > 4 || connectOptions.mqttVersion < 3) {
        throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.mqttVersion, "connectOptions.mqttVersion"]));
      }

      if (connectOptions.mqttVersion === undefined) {
        connectOptions.mqttVersionExplicit = false;
        connectOptions.mqttVersion = 4;
      } else {
        connectOptions.mqttVersionExplicit = true;
      } //Check that if password is set, so is username


      if (connectOptions.password === undefined && connectOptions.userName !== undefined) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.password, "connectOptions.password"]));

      if (connectOptions.willMessage) {
        if (!(connectOptions.willMessage instanceof Message)) throw new Error(format(ERROR.INVALID_TYPE, [connectOptions.willMessage, "connectOptions.willMessage"])); // The will message must have a payload that can be represented as a string.
        // Cause the willMessage to throw an exception if this is not the case.

        connectOptions.willMessage.stringPayload;
        if (typeof connectOptions.willMessage.destinationName === "undefined") throw new Error(format(ERROR.INVALID_TYPE, [_typeof(connectOptions.willMessage.destinationName), "connectOptions.willMessage.destinationName"]));
      }

      if (typeof connectOptions.cleanSession === "undefined") connectOptions.cleanSession = true;

      if (connectOptions.hosts) {
        if (!(connectOptions.hosts instanceof Array)) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));
        if (connectOptions.hosts.length < 1) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));
        var usingURIs = false;

        for (var i = 0; i < connectOptions.hosts.length; i++) {
          if (typeof connectOptions.hosts[i] !== "string") throw new Error(format(ERROR.INVALID_TYPE, [_typeof(connectOptions.hosts[i]), "connectOptions.hosts[" + i + "]"]));

          if (/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(connectOptions.hosts[i])) {
            if (i == 0) {
              usingURIs = true;
            } else if (!usingURIs) {
              throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));
            }
          } else if (usingURIs) {
            throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));
          }
        }

        if (!usingURIs) {
          if (!connectOptions.ports) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
          if (!(connectOptions.ports instanceof Array)) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
          if (connectOptions.hosts.length != connectOptions.ports.length) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
          connectOptions.uris = [];

          for (var i = 0; i < connectOptions.hosts.length; i++) {
            if (typeof connectOptions.ports[i] !== "number" || connectOptions.ports[i] < 0) throw new Error(format(ERROR.INVALID_TYPE, [_typeof(connectOptions.ports[i]), "connectOptions.ports[" + i + "]"]));
            var host = connectOptions.hosts[i];
            var port = connectOptions.ports[i];
            var ipv6 = host.indexOf(":") != -1;
            uri = "ws://" + (ipv6 ? "[" + host + "]" : host) + ":" + port + path;
            connectOptions.uris.push(uri);
          }
        } else {
          connectOptions.uris = connectOptions.hosts;
        }
      }

      client.connect(connectOptions);
    };
    /**
     * Subscribe for messages, request receipt of a copy of messages sent to the destinations described by the filter.
     *
     * @name Paho.MQTT.Client#subscribe
     * @function
     * @param {string} filter describing the destinations to receive messages from.
     * <br>
     * @param {object} subscribeOptions - used to control the subscription
     *
     * @param {number} subscribeOptions.qos - the maiximum qos of any publications sent
     *                                  as a result of making this subscription.
     * @param {object} subscribeOptions.invocationContext - passed to the onSuccess callback
     *                                  or onFailure callback.
     * @param {function} subscribeOptions.onSuccess - called when the subscribe acknowledgement
     *                                  has been received from the server.
     *                                  A single response object parameter is passed to the onSuccess callback containing the following fields:
     *                                  <ol>
     *                                  <li>invocationContext if set in the subscribeOptions.
     *                                  </ol>
     * @param {function} subscribeOptions.onFailure - called when the subscribe request has failed or timed out.
     *                                  A single response object parameter is passed to the onFailure callback containing the following fields:
     *                                  <ol>
     *                                  <li>invocationContext - if set in the subscribeOptions.
     *                                  <li>errorCode - a number indicating the nature of the error.
     *                                  <li>errorMessage - text describing the error.
     *                                  </ol>
     * @param {number} subscribeOptions.timeout - which, if present, determines the number of
     *                                  seconds after which the onFailure calback is called.
     *                                  The presence of a timeout does not prevent the onSuccess
     *                                  callback from being called when the subscribe completes.
     * @throws {InvalidState} if the client is not in connected state.
     */


    this.subscribe = function (filter, subscribeOptions) {
      if (typeof filter !== "string") throw new Error("Invalid argument:" + filter);
      subscribeOptions = subscribeOptions || {};
      validate(subscribeOptions, {
        qos: "number",
        invocationContext: "object",
        onSuccess: "function",
        onFailure: "function",
        timeout: "number"
      });
      if (subscribeOptions.timeout && !subscribeOptions.onFailure) throw new Error("subscribeOptions.timeout specified with no onFailure callback.");
      if (typeof subscribeOptions.qos !== "undefined" && !(subscribeOptions.qos === 0 || subscribeOptions.qos === 1 || subscribeOptions.qos === 2)) throw new Error(format(ERROR.INVALID_ARGUMENT, [subscribeOptions.qos, "subscribeOptions.qos"]));
      client.subscribe(filter, subscribeOptions);
    };
    /**
     * Unsubscribe for messages, stop receiving messages sent to destinations described by the filter.
     *
     * @name Paho.MQTT.Client#unsubscribe
     * @function
     * @param {string} filter - describing the destinations to receive messages from.
     * @param {object} unsubscribeOptions - used to control the subscription
     * @param {object} unsubscribeOptions.invocationContext - passed to the onSuccess callback
     or onFailure callback.
     * @param {function} unsubscribeOptions.onSuccess - called when the unsubscribe acknowledgement has been received from the server.
     *                                    A single response object parameter is passed to the
     *                                    onSuccess callback containing the following fields:
     *                                    <ol>
     *                                    <li>invocationContext - if set in the unsubscribeOptions.
     *                                    </ol>
     * @param {function} unsubscribeOptions.onFailure called when the unsubscribe request has failed or timed out.
     *                                    A single response object parameter is passed to the onFailure callback containing the following fields:
     *                                    <ol>
     *                                    <li>invocationContext - if set in the unsubscribeOptions.
     *                                    <li>errorCode - a number indicating the nature of the error.
     *                                    <li>errorMessage - text describing the error.
     *                                    </ol>
     * @param {number} unsubscribeOptions.timeout - which, if present, determines the number of seconds
     *                                    after which the onFailure callback is called. The presence of
     *                                    a timeout does not prevent the onSuccess callback from being
     *                                    called when the unsubscribe completes
     * @throws {InvalidState} if the client is not in connected state.
     */


    this.unsubscribe = function (filter, unsubscribeOptions) {
      if (typeof filter !== "string") throw new Error("Invalid argument:" + filter);
      unsubscribeOptions = unsubscribeOptions || {};
      validate(unsubscribeOptions, {
        invocationContext: "object",
        onSuccess: "function",
        onFailure: "function",
        timeout: "number"
      });
      if (unsubscribeOptions.timeout && !unsubscribeOptions.onFailure) throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");
      client.unsubscribe(filter, unsubscribeOptions);
    };
    /**
     * Send a message to the consumers of the destination in the Message.
     *
     * @name Paho.MQTT.Client#send
     * @function
     * @param {string|Paho.MQTT.Message} topic - <b>mandatory</b> The name of the destination to which the message is to be sent.
     * 					   - If it is the only parameter, used as Paho.MQTT.Message object.
     * @param {String|ArrayBuffer} payload - The message data to be sent.
     * @param {number} qos The Quality of Service used to deliver the message.
     * 		<dl>
     * 			<dt>0 Best effort (default).
     *     			<dt>1 At least once.
     *     			<dt>2 Exactly once.
     * 		</dl>
     * @param {Boolean} retained If true, the message is to be retained by the server and delivered
     *                     to both current and future subscriptions.
     *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
     *                     A received message has the retained boolean set to true if the message was published
     *                     with the retained boolean set to true
     *                     and the subscrption was made after the message has been published.
     * @throws {InvalidState} if the client is not connected.
     */


    this.send = function (topic, payload, qos, retained) {
      var message;

      if (arguments.length == 0) {
        throw new Error("Invalid argument." + "length");
      } else if (arguments.length == 1) {
        if (!(topic instanceof Message) && typeof topic !== "string") throw new Error("Invalid argument:" + _typeof(topic));
        message = topic;
        if (typeof message.destinationName === "undefined") throw new Error(format(ERROR.INVALID_ARGUMENT, [message.destinationName, "Message.destinationName"]));
        client.send(message);
      } else {
        //parameter checking in Message object
        message = new Message(payload);
        message.destinationName = topic;
        if (arguments.length >= 3) message.qos = qos;
        if (arguments.length >= 4) message.retained = retained;
        client.send(message);
      }
    };
    /**
     * Normal disconnect of this Messaging client from its server.
     *
     * @name Paho.MQTT.Client#disconnect
     * @function
     * @throws {InvalidState} if the client is already disconnected.
     */


    this.disconnect = function () {
      client.disconnect();
    };
    /**
     * Get the contents of the trace log.
     *
     * @name Paho.MQTT.Client#getTraceLog
     * @function
     * @return {Object[]} tracebuffer containing the time ordered trace records.
     */


    this.getTraceLog = function () {
      return client.getTraceLog();
    };
    /**
     * Start tracing.
     *
     * @name Paho.MQTT.Client#startTrace
     * @function
     */


    this.startTrace = function () {
      client.startTrace();
    };
    /**
     * Stop tracing.
     *
     * @name Paho.MQTT.Client#stopTrace
     * @function
     */


    this.stopTrace = function () {
      client.stopTrace();
    };

    this.isConnected = function () {
      return client.connected;
    };
  };

  Client.prototype = {
    get host() {
      return this._getHost();
    },

    set host(newHost) {
      this._setHost(newHost);
    },

    get port() {
      return this._getPort();
    },

    set port(newPort) {
      this._setPort(newPort);
    },

    get path() {
      return this._getPath();
    },

    set path(newPath) {
      this._setPath(newPath);
    },

    get clientId() {
      return this._getClientId();
    },

    set clientId(newClientId) {
      this._setClientId(newClientId);
    },

    get onConnectionLost() {
      return this._getOnConnectionLost();
    },

    set onConnectionLost(newOnConnectionLost) {
      this._setOnConnectionLost(newOnConnectionLost);
    },

    get onMessageDelivered() {
      return this._getOnMessageDelivered();
    },

    set onMessageDelivered(newOnMessageDelivered) {
      this._setOnMessageDelivered(newOnMessageDelivered);
    },

    get onMessageArrived() {
      return this._getOnMessageArrived();
    },

    set onMessageArrived(newOnMessageArrived) {
      this._setOnMessageArrived(newOnMessageArrived);
    },

    get trace() {
      return this._getTrace();
    },

    set trace(newTraceFunction) {
      this._setTrace(newTraceFunction);
    }

  };
  /**
   * An application message, sent or received.
   * <p>
   * All attributes may be null, which implies the default values.
   *
   * @name Paho.MQTT.Message
   * @constructor
   * @param {String|ArrayBuffer} payload The message data to be sent.
   * <p>
   * @property {string} payloadString <i>read only</i> The payload as a string if the payload consists of valid UTF-8 characters.
   * @property {ArrayBuffer} payloadBytes <i>read only</i> The payload as an ArrayBuffer.
   * <p>
   * @property {string} destinationName <b>mandatory</b> The name of the destination to which the message is to be sent
   *                    (for messages about to be sent) or the name of the destination from which the message has been received.
   *                    (for messages received by the onMessage function).
   * <p>
   * @property {number} qos The Quality of Service used to deliver the message.
   * <dl>
   *     <dt>0 Best effort (default).
   *     <dt>1 At least once.
   *     <dt>2 Exactly once.
   * </dl>
   * <p>
   * @property {Boolean} retained If true, the message is to be retained by the server and delivered
   *                     to both current and future subscriptions.
   *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
   *                     A received message has the retained boolean set to true if the message was published
   *                     with the retained boolean set to true
   *                     and the subscrption was made after the message has been published.
   * <p>
   * @property {Boolean} duplicate <i>read only</i> If true, this message might be a duplicate of one which has already been received.
   *                     This is only set on messages received from the server.
   *
   */

  var Message = function Message(newPayload) {
    var payload;

    if (typeof newPayload === "string" || newPayload instanceof ArrayBuffer || newPayload instanceof Int8Array || newPayload instanceof Uint8Array || newPayload instanceof Int16Array || newPayload instanceof Uint16Array || newPayload instanceof Int32Array || newPayload instanceof Uint32Array || newPayload instanceof Float32Array || newPayload instanceof Float64Array) {
      payload = newPayload;
    } else {
      throw format(ERROR.INVALID_ARGUMENT, [newPayload, "newPayload"]);
    }

    this._getPayloadString = function () {
      if (typeof payload === "string") return payload;else return parseUTF8(payload, 0, payload.length);
    };

    this._getPayloadBytes = function () {
      if (typeof payload === "string") {
        var buffer = new ArrayBuffer(UTF8Length(payload));
        var byteStream = new Uint8Array(buffer);
        stringToUTF8(payload, byteStream, 0);
        return byteStream;
      } else {
        return payload;
      }

      ;
    };

    var destinationName = undefined;

    this._getDestinationName = function () {
      return destinationName;
    };

    this._setDestinationName = function (newDestinationName) {
      if (typeof newDestinationName === "string") destinationName = newDestinationName;else throw new Error(format(ERROR.INVALID_ARGUMENT, [newDestinationName, "newDestinationName"]));
    };

    var qos = 0;

    this._getQos = function () {
      return qos;
    };

    this._setQos = function (newQos) {
      if (newQos === 0 || newQos === 1 || newQos === 2) qos = newQos;else throw new Error("Invalid argument:" + newQos);
    };

    var retained = false;

    this._getRetained = function () {
      return retained;
    };

    this._setRetained = function (newRetained) {
      if (typeof newRetained === "boolean") retained = newRetained;else throw new Error(format(ERROR.INVALID_ARGUMENT, [newRetained, "newRetained"]));
    };

    var duplicate = false;

    this._getDuplicate = function () {
      return duplicate;
    };

    this._setDuplicate = function (newDuplicate) {
      duplicate = newDuplicate;
    };
  };

  Message.prototype = {
    get payloadString() {
      return this._getPayloadString();
    },

    get payloadBytes() {
      return this._getPayloadBytes();
    },

    get destinationName() {
      return this._getDestinationName();
    },

    set destinationName(newDestinationName) {
      this._setDestinationName(newDestinationName);
    },

    get qos() {
      return this._getQos();
    },

    set qos(newQos) {
      this._setQos(newQos);
    },

    get retained() {
      return this._getRetained();
    },

    set retained(newRetained) {
      this._setRetained(newRetained);
    },

    get duplicate() {
      return this._getDuplicate();
    },

    set duplicate(newDuplicate) {
      this._setDuplicate(newDuplicate);
    }

  }; // Module contents.

  return {
    Client: Client,
    Message: Message
  };
}(window);

module.exports = {
  MQTT: Paho.MQTT,
  Paho: Paho
};

/***/ }),

/***/ "./src/vendor/signv4utils.js":
/*!***********************************!*\
  !*** ./src/vendor/signv4utils.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CryptoJS = __webpack_require__(/*! ./crypto-js */ "./src/vendor/crypto-js.js");

var SigV4Utils =
/*#__PURE__*/
function () {
  /**
   * utilities to do sigv4
   * @class SigV4Utils
   */
  function SigV4Utils() {
    _classCallCheck(this, SigV4Utils);
  }

  _createClass(SigV4Utils, null, [{
    key: "sha256",
    value: function sha256(msg) {
      var hash = CryptoJS.SHA256(msg);
      return hash.toString(CryptoJS.enc.Hex);
    }
  }, {
    key: "sign",
    value: function sign(key, msg) {
      var hash = CryptoJS.HmacSHA256(msg, key);
      return hash.toString(CryptoJS.enc.Hex);
    }
  }, {
    key: "getSignatureKey",
    value: function getSignatureKey(key, dateStamp, regionName, serviceName) {
      var kDate = CryptoJS.HmacSHA256(dateStamp, 'AWS4' + key);
      var kRegion = CryptoJS.HmacSHA256(regionName, kDate);
      var kService = CryptoJS.HmacSHA256(serviceName, kRegion);
      var kSigning = CryptoJS.HmacSHA256('aws4_request', kService);
      return kSigning;
    }
  }]);

  return SigV4Utils;
}();

module.exports = SigV4Utils;

/***/ })

/******/ });
});
//# sourceMappingURL=onepay.js.map