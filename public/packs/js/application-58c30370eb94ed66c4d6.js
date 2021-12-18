/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
__webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js").start();

__webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js").start();

__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js").start();

__webpack_require__(/*! channels */ "./app/javascript/channels/index.js");

__webpack_require__(/*! fullcalendar/main.min */ "./node_modules/fullcalendar/main.min.js"); // Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery/src/jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/fullcalendar/main.min.js":
/*!***********************************************!*\
  !*** ./node_modules/fullcalendar/main.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
FullCalendar v5.3.2
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/
var FullCalendar = function (e) {
  "use strict";

  var _t2 = function t(e, n) {
    return (_t2 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, n);
  };

  function n(e, n) {
    function r() {
      this.constructor = e;
    }

    _t2(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  }

  var _r2 = function r() {
    return (_r2 = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var o in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }

      return e;
    }).apply(this, arguments);
  };

  function o() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
      e += arguments[t].length;
    }

    var r = Array(e),
        o = 0;

    for (t = 0; t < n; t++) {
      for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) {
        r[o] = i[a];
      }
    }

    return r;
  }

  var i,
      a,
      s,
      l,
      u,
      c,
      d,
      p = {},
      f = [],
      h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

  function v(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }

    return e;
  }

  function g(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }

  function m(e, t, n) {
    var r,
        o = arguments,
        i = {};

    for (r in t) {
      "key" !== r && "ref" !== r && (i[r] = t[r]);
    }

    if (arguments.length > 3) for (n = [n], r = 3; r < arguments.length; r++) {
      n.push(o[r]);
    }
    if (null != n && (i.children = n), "function" == typeof e && null != e.defaultProps) for (r in e.defaultProps) {
      void 0 === i[r] && (i[r] = e.defaultProps[r]);
    }
    return y(e, i, t && t.key, t && t.ref, null);
  }

  function y(e, t, n, r, o) {
    var a = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: o
    };
    return null == o && (a.__v = a), i.vnode && i.vnode(a), a;
  }

  function E(e) {
    return e.children;
  }

  function S(e, t) {
    this.props = e, this.context = t;
  }

  function D(e, t) {
    if (null == t) return e.__ ? D(e.__, e.__.__k.indexOf(e) + 1) : null;

    for (var n; t < e.__k.length; t++) {
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    }

    return "function" == typeof e.type ? D(e) : null;
  }

  function b(e) {
    var t, n;

    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) {
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      }

      return b(e);
    }
  }

  function C(e) {
    (!e.__d && (e.__d = !0) && a.push(e) && !s++ || u !== i.debounceRendering) && ((u = i.debounceRendering) || l)(w);
  }

  function w() {
    for (var e; s = a.length;) {
      e = a.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      }), a = [], e.some(function (e) {
        var t, n, r, o, i, a, s;
        e.__d && (a = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = v({}, i)).__v = r, o = _(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null, n, null == a ? D(i) : a), I(n, i), o != a && b(i)));
      });
    }
  }

  function R(e, t, n, r, o, i, a, s, l) {
    var u,
        c,
        d,
        h,
        v,
        m,
        y,
        E = n && n.__k || f,
        S = E.length;
    if (s == p && (s = null != i ? i[0] : S ? D(n, 0) : null), u = 0, t.__k = T(t.__k, function (n) {
      if (null != n) {
        if (n.__ = t, n.__b = t.__b + 1, null === (d = E[u]) || d && n.key == d.key && n.type === d.type) E[u] = void 0;else for (c = 0; c < S; c++) {
          if ((d = E[c]) && n.key == d.key && n.type === d.type) {
            E[c] = void 0;
            break;
          }

          d = null;
        }

        if (h = _(e, n, d = d || p, r, o, i, a, s, l), (c = n.ref) && d.ref != c && (y || (y = []), d.ref && y.push(d.ref, null, n), y.push(c, n.__c || h, n)), null != h) {
          var f;
          if (null == m && (m = h), void 0 !== n.__d) f = n.__d, n.__d = void 0;else if (i == d || h != s || null == h.parentNode) {
            e: if (null == s || s.parentNode !== e) e.appendChild(h), f = null;else {
              for (v = s, c = 0; (v = v.nextSibling) && c < S; c += 2) {
                if (v == h) break e;
              }

              e.insertBefore(h, s), f = s;
            }

            "option" == t.type && (e.value = "");
          }
          s = void 0 !== f ? f : h.nextSibling, "function" == typeof t.type && (t.__d = s);
        } else s && d.__e == s && s.parentNode != e && (s = D(d));
      }

      return u++, n;
    }), t.__e = m, null != i && "function" != typeof t.type) for (u = i.length; u--;) {
      null != i[u] && g(i[u]);
    }

    for (u = S; u--;) {
      null != E[u] && H(E[u], E[u]);
    }

    if (y) for (u = 0; u < y.length; u++) {
      N(y[u], y[++u], y[++u]);
    }
  }

  function T(e, t, n) {
    if (null == n && (n = []), null == e || "boolean" == typeof e) t && n.push(t(null));else if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
      T(e[r], t, n);
    } else n.push(t ? t("string" == typeof e || "number" == typeof e ? y(null, e, null, null, e) : null != e.__e || null != e.__c ? y(e.type, e.props, e.key, null, e.__v) : e) : e);
    return n;
  }

  function k(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === h.test(t) ? n + "px" : null == n ? "" : n;
  }

  function M(e, t, n, r, o) {
    var i, a, s, l, u;
    if (o ? "className" === t && (t = "class") : "class" === t && (t = "className"), "style" === t) {
      if (i = e.style, "string" == typeof n) i.cssText = n;else {
        if ("string" == typeof r && (i.cssText = "", r = null), r) for (l in r) {
          n && l in n || k(i, l, "");
        }
        if (n) for (u in n) {
          r && n[u] === r[u] || k(i, u, n[u]);
        }
      }
    } else "o" === t[0] && "n" === t[1] ? (a = t !== (t = t.replace(/Capture$/, "")), s = t.toLowerCase(), t = (s in e ? s : t).slice(2), n ? (r || e.addEventListener(t, x, a), (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, x, a)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n));
  }

  function x(e) {
    this.l[e.type](i.event ? i.event(e) : e);
  }

  function _(e, t, n, r, o, a, s, l, u) {
    var c,
        d,
        p,
        f,
        h,
        g,
        m,
        y,
        D,
        b,
        C = t.type;
    if (void 0 !== t.constructor) return null;
    (c = i.__b) && c(t);

    try {
      e: if ("function" == typeof C) {
        if (y = t.props, D = (c = C.contextType) && r[c.__c], b = c ? D ? D.props.value : c.__ : r, n.__c ? m = (d = t.__c = n.__c).__ = d.__E : ("prototype" in C && C.prototype.render ? t.__c = d = new C(y, b) : (t.__c = d = new S(y, b), d.constructor = C, d.render = O), D && D.sub(d), d.props = y, d.state || (d.state = {}), d.context = b, d.__n = r, p = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != C.getDerivedStateFromProps && (d.__s == d.state && (d.__s = v({}, d.__s)), v(d.__s, C.getDerivedStateFromProps(y, d.__s))), f = d.props, h = d.state, p) null == C.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);else {
          if (null == C.getDerivedStateFromProps && y !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(y, b), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(y, d.__s, b) || t.__v === n.__v && !d.__) {
            for (d.props = y, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, d.__h.length && s.push(d), c = 0; c < t.__k.length; c++) {
              t.__k[c] && (t.__k[c].__ = t);
            }

            break e;
          }

          null != d.componentWillUpdate && d.componentWillUpdate(y, d.__s, b), null != d.componentDidUpdate && d.__h.push(function () {
            d.componentDidUpdate(f, h, g);
          });
        }
        d.context = b, d.props = y, d.state = d.__s, (c = i.__r) && c(t), d.__d = !1, d.__v = t, d.__P = e, c = d.render(d.props, d.state, d.context), t.__k = null != c && c.type == E && null == c.key ? c.props.children : Array.isArray(c) ? c : [c], null != d.getChildContext && (r = v(v({}, r), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(f, h)), R(e, t, n, r, o, a, s, l, u), d.base = t.__e, d.__h.length && s.push(d), m && (d.__E = d.__ = null), d.__e = !1;
      } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = P(n.__e, t, n, r, o, a, s, u);

      (c = i.diffed) && c(t);
    } catch (e) {
      t.__v = null, i.__e(e, t, n);
    }

    return t.__e;
  }

  function I(e, t) {
    i.__c && i.__c(t, e), e.some(function (t) {
      try {
        e = t.__h, t.__h = [], e.some(function (e) {
          e.call(t);
        });
      } catch (e) {
        i.__e(e, t.__v);
      }
    });
  }

  function P(e, t, n, r, o, i, a, s) {
    var l,
        u,
        c,
        d,
        h,
        v = n.props,
        g = t.props;
    if (o = "svg" === t.type || o, null != i) for (l = 0; l < i.length; l++) {
      if (null != (u = i[l]) && ((null === t.type ? 3 === u.nodeType : u.localName === t.type) || e == u)) {
        e = u, i[l] = null;
        break;
      }
    }

    if (null == e) {
      if (null === t.type) return document.createTextNode(g);
      e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, g.is && {
        is: g.is
      }), i = null, s = !1;
    }

    if (null === t.type) v !== g && e.data != g && (e.data = g);else {
      if (null != i && (i = f.slice.call(e.childNodes)), c = (v = n.props || p).dangerouslySetInnerHTML, d = g.dangerouslySetInnerHTML, !s) {
        if (v === p) for (v = {}, h = 0; h < e.attributes.length; h++) {
          v[e.attributes[h].name] = e.attributes[h].value;
        }
        (d || c) && (d && c && d.__html == c.__html || (e.innerHTML = d && d.__html || ""));
      }

      (function (e, t, n, r, o) {
        var i;

        for (i in n) {
          "children" === i || "key" === i || i in t || M(e, i, null, n[i], r);
        }

        for (i in t) {
          o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || M(e, i, t[i], n[i], r);
        }
      })(e, g, v, o, s), d ? t.__k = [] : (t.__k = t.props.children, R(e, t, n, r, "foreignObject" !== t.type && o, i, a, p, s)), s || ("value" in g && void 0 !== (l = g.value) && l !== e.value && M(e, "value", l, v.value, !1), "checked" in g && void 0 !== (l = g.checked) && l !== e.checked && M(e, "checked", l, v.checked, !1));
    }
    return e;
  }

  function N(e, t, n) {
    try {
      "function" == typeof e ? e(t) : e.current = t;
    } catch (e) {
      i.__e(e, n);
    }
  }

  function H(e, t, n) {
    var r, o, a;

    if (i.unmount && i.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || N(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c)) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount();
      } catch (e) {
        i.__e(e, t);
      }
      r.base = r.__P = null;
    }

    if (r = e.__k) for (a = 0; a < r.length; a++) {
      r[a] && H(r[a], t, n);
    }
    null != o && g(o);
  }

  function O(e, t, n) {
    return this.constructor(e, n);
  }

  function A(e, t, n) {
    var r, o, a;
    i.__ && i.__(e, t), o = (r = n === c) ? null : n && n.__k || t.__k, e = m(E, null, [e]), a = [], _(t, (r ? t : n || t).__k = e, o || p, p, void 0 !== t.ownerSVGElement, n && !r ? [n] : o ? null : f.slice.call(t.childNodes), a, n || p, r), I(a, e);
  }

  i = {
    __e: function __e(e, t) {
      for (var n, r; t = t.__;) {
        if ((n = t.__c) && !n.__) try {
          if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(e))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(e)), r) return C(n.__E = n);
        } catch (t) {
          e = t;
        }
      }

      throw e;
    }
  }, S.prototype.setState = function (e, t) {
    var n;
    n = this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof e && (e = e(n, this.props)), e && v(n, e), null != e && this.__v && (t && this.__h.push(t), C(this));
  }, S.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), C(this));
  }, S.prototype.render = E, a = [], s = 0, l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, c = p, d = 0, ("undefined" != typeof globalThis ? globalThis : window).FullCalendarVDom = {
    Component: S,
    createElement: m,
    render: A,
    createRef: function createRef() {
      return {};
    },
    Fragment: E,
    createContext: function createContext(e) {
      var t = function (e) {
        var t = {},
            n = {
          __c: "__cC" + d++,
          __: e,
          Consumer: function Consumer(e, t) {
            return e.children(t);
          },
          Provider: function Provider(e) {
            var r,
                o = this;
            return this.getChildContext || (r = [], this.getChildContext = function () {
              return t[n.__c] = o, t;
            }, this.shouldComponentUpdate = function (e) {
              o.props.value !== e.value && r.some(function (t) {
                t.context = e.value, C(t);
              });
            }, this.sub = function (e) {
              r.push(e);
              var t = e.componentWillUnmount;

              e.componentWillUnmount = function () {
                r.splice(r.indexOf(e), 1), t && t.call(e);
              };
            }), e.children;
          }
        };
        return n.Consumer.contextType = n, n.Provider.__ = n, n;
      }(e),
          n = t.Provider;

      return t.Provider = function () {
        var e = this,
            t = !this.getChildContext,
            r = n.apply(this, arguments);

        if (t) {
          var o = [];
          this.shouldComponentUpdate = function (t) {
            e.props.value !== t.value && o.some(function (e) {
              e.context = t.value, e.forceUpdate();
            });
          }, this.sub = function (e) {
            o.push(e);
            var t = e.componentWillUnmount;

            e.componentWillUnmount = function () {
              o.splice(o.indexOf(e), 1), t && t.call(e);
            };
          };
        }

        return r;
      }, t;
    },
    flushToDom: function flushToDom() {
      var e = i.debounceRendering,
          t = [];
      i.debounceRendering = function (e) {
        t.push(e);
      }, A(m(U, {}), document.createElement("div"));

      for (; t.length;) {
        t.shift()();
      }

      i.debounceRendering = e;
    }
  };

  var U = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      return m("div", {});
    }, t.prototype.componentDidMount = function () {
      this.setState({});
    }, t;
  }(S);

  var L = function () {
    function e(e, t) {
      this.context = e, this.internalEventSource = t;
    }

    return e.prototype.remove = function () {
      this.context.dispatch({
        type: "REMOVE_EVENT_SOURCE",
        sourceId: this.internalEventSource.sourceId
      });
    }, e.prototype.refetch = function () {
      this.context.dispatch({
        type: "FETCH_EVENT_SOURCES",
        sourceIds: [this.internalEventSource.sourceId]
      });
    }, Object.defineProperty(e.prototype, "id", {
      get: function get() {
        return this.internalEventSource.publicId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "url", {
      get: function get() {
        return this.internalEventSource.meta.url;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }();

  function W(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }

  function V(e, t) {
    if (e.closest) return e.closest(t);
    if (!document.documentElement.contains(e)) return null;

    do {
      if (z(e, t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);

    return null;
  }

  function z(e, t) {
    return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
  }

  function F(e, t) {
    for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o++) {
      for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a++) {
        r.push(i[a]);
      }
    }

    return r;
  }

  var B = /(top|left|right|bottom|width|height)$/i;

  function j(e, t) {
    for (var n in t) {
      G(e, n, t[n]);
    }
  }

  function G(e, t, n) {
    null == n ? e.style[t] = "" : "number" == typeof n && B.test(t) ? e.style[t] = n + "px" : e.style[t] = n;
  }

  function q(e) {
    e.preventDefault();
  }

  function Y(e, t) {
    return function (n) {
      var r = V(n.target, e);
      r && t.call(r, n, r);
    };
  }

  function Z(e, t, n, r) {
    var o = Y(n, r);
    return e.addEventListener(t, o), function () {
      e.removeEventListener(t, o);
    };
  }

  var X = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

  function K(e, t) {
    var n = function n(r) {
      t(r), X.forEach(function (t) {
        e.removeEventListener(t, n);
      });
    };

    X.forEach(function (t) {
      e.addEventListener(t, n);
    });
  }

  var J = 0;

  function $() {
    return String(J++);
  }

  function Q() {
    document.body.classList.add("fc-not-allowed");
  }

  function ee() {
    document.body.classList.remove("fc-not-allowed");
  }

  function te(e) {
    e.classList.add("fc-unselectable"), e.addEventListener("selectstart", q);
  }

  function ne(e) {
    e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", q);
  }

  function re(e) {
    e.addEventListener("contextmenu", q);
  }

  function oe(e) {
    e.removeEventListener("contextmenu", q);
  }

  function ie(e) {
    var t,
        n,
        r = [],
        o = [];

    for ("string" == typeof e ? o = e.split(/\s*,\s*/) : "function" == typeof e ? o = [e] : Array.isArray(e) && (o = e), t = 0; t < o.length; t++) {
      "string" == typeof (n = o[t]) ? r.push("-" === n.charAt(0) ? {
        field: n.substring(1),
        order: -1
      } : {
        field: n,
        order: 1
      }) : "function" == typeof n && r.push({
        func: n
      });
    }

    return r;
  }

  function ae(e, t, n) {
    var r, o;

    for (r = 0; r < n.length; r++) {
      if (o = se(e, t, n[r])) return o;
    }

    return 0;
  }

  function se(e, t, n) {
    return n.func ? n.func(e, t) : le(e[n.field], t[n.field]) * (n.order || 1);
  }

  function le(e, t) {
    return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0;
  }

  function ue(e, t) {
    var n = String(e);
    return "000".substr(0, t - n.length) + n;
  }

  function ce(e, t) {
    return e - t;
  }

  function de(e) {
    return e % 1 == 0;
  }

  function pe(e) {
    var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
        n = e.querySelector(".fc-scrollgrid-shrink-cushion");
    if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
    if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
    return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width;
  }

  var fe = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  function he(e, t) {
    var n = ke(e);
    return n[2] += 7 * t, Me(n);
  }

  function ve(e, t) {
    var n = ke(e);
    return n[2] += t, Me(n);
  }

  function ge(e, t) {
    var n = ke(e);
    return n[6] += t, Me(n);
  }

  function me(e, t) {
    return ye(e, t) / 7;
  }

  function ye(e, t) {
    return (t.valueOf() - e.valueOf()) / 864e5;
  }

  function Ee(e, t) {
    var n = be(e),
        r = be(t);
    return {
      years: 0,
      months: 0,
      days: Math.round(ye(n, r)),
      milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
    };
  }

  function Se(e, t) {
    var n = De(e, t);
    return null !== n && n % 7 == 0 ? n / 7 : null;
  }

  function De(e, t) {
    return _e(e) === _e(t) ? Math.round(ye(e, t)) : null;
  }

  function be(e) {
    return Me([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
  }

  function Ce(e, t, n, r) {
    var o = Me([t, 0, 1 + we(t, n, r)]),
        i = be(e),
        a = Math.round(ye(o, i));
    return Math.floor(a / 7) + 1;
  }

  function we(e, t, n) {
    var r = 7 + t - n;
    return -((7 + Me([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
  }

  function Re(e) {
    return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()];
  }

  function Te(e) {
    return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0);
  }

  function ke(e) {
    return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()];
  }

  function Me(e) {
    return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e));
  }

  function xe(e) {
    return !isNaN(e.valueOf());
  }

  function _e(e) {
    return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds();
  }

  function Ie(e, t, n, r) {
    return {
      instanceId: $(),
      defId: e,
      range: t,
      forcedStartTzo: null == n ? null : n,
      forcedEndTzo: null == r ? null : r
    };
  }

  var Pe = Object.prototype.hasOwnProperty;

  function Ne(e, t) {
    var n = {};
    if (t) for (var r in t) {
      for (var o = [], i = e.length - 1; i >= 0; i--) {
        var a = e[i][r];
        if ("object" == _typeof(a) && a) o.unshift(a);else if (void 0 !== a) {
          n[r] = a;
          break;
        }
      }

      o.length && (n[r] = Ne(o));
    }

    for (i = e.length - 1; i >= 0; i--) {
      var s = e[i];

      for (var l in s) {
        l in n || (n[l] = s[l]);
      }
    }

    return n;
  }

  function He(e, t) {
    var n = {};

    for (var r in e) {
      t(e[r], r) && (n[r] = e[r]);
    }

    return n;
  }

  function Oe(e, t) {
    var n = {};

    for (var r in e) {
      n[r] = t(e[r], r);
    }

    return n;
  }

  function Ae(e) {
    for (var t = {}, n = 0, r = e; n < r.length; n++) {
      t[r[n]] = !0;
    }

    return t;
  }

  function Ue(e) {
    var t = [];

    for (var n in e) {
      t.push(e[n]);
    }

    return t;
  }

  function Le(e, t) {
    if (e === t) return !0;

    for (var n in e) {
      if (Pe.call(e, n) && !(n in t)) return !1;
    }

    for (var n in t) {
      if (Pe.call(t, n) && e[n] !== t[n]) return !1;
    }

    return !0;
  }

  function We(e, t) {
    var n = [];

    for (var r in e) {
      Pe.call(e, r) && (r in t || n.push(r));
    }

    for (var r in t) {
      Pe.call(t, r) && e[r] !== t[r] && n.push(r);
    }

    return n;
  }

  function Ve(e, t, n) {
    if (void 0 === n && (n = {}), e === t) return !0;

    for (var r in t) {
      if (!(r in e) || !ze(e[r], t[r], n[r])) return !1;
    }

    for (var r in e) {
      if (!(r in t)) return !1;
    }

    return !0;
  }

  function ze(e, t, n) {
    return e === t || !0 === n || !!n && n(e, t);
  }

  function Fe(e, t, n, r) {
    void 0 === t && (t = 0), void 0 === r && (r = 1);
    var o = [];
    null == n && (n = Object.keys(e).length);

    for (var i = t; i < n; i += r) {
      var a = e[i];
      void 0 !== a && o.push(a);
    }

    return o;
  }

  function Be(e, t, n) {
    var r = n.dateEnv,
        o = n.pluginHooks,
        i = n.options,
        a = e.defs,
        s = e.instances;

    for (var l in s = He(s, function (e) {
      return !a[e.defId].recurringDef;
    }), a) {
      var u = a[l];

      if (u.recurringDef) {
        var c = u.recurringDef.duration;
        c || (c = u.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);

        for (var d = 0, p = je(u, c, t, r, o.recurringTypes); d < p.length; d++) {
          var f = p[d],
              h = Ie(l, {
            start: f,
            end: r.add(f, c)
          });
          s[h.instanceId] = h;
        }
      }
    }

    return {
      defs: a,
      instances: s
    };
  }

  function je(e, t, n, r, o) {
    var i = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
      start: r.subtract(n.start, t),
      end: n.end
    }, r);
    return e.allDay && (i = i.map(be)), i;
  }

  var Ge = ["years", "months", "days", "milliseconds"],
      qe = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

  function Ye(e, t) {
    var n;
    return "string" == typeof e ? function (e) {
      var t = qe.exec(e);

      if (t) {
        var n = t[1] ? -1 : 1;
        return {
          years: 0,
          months: 0,
          days: n * (t[2] ? parseInt(t[2], 10) : 0),
          milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
        };
      }

      return null;
    }(e) : "object" == _typeof(e) && e ? Ze(e) : "number" == typeof e ? Ze(((n = {})[t || "milliseconds"] = e, n)) : null;
  }

  function Ze(e) {
    var t = {
      years: e.years || e.year || 0,
      months: e.months || e.month || 0,
      days: e.days || e.day || 0,
      milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
    },
        n = e.weeks || e.week;
    return n && (t.days += 7 * n, t.specifiedWeeks = !0), t;
  }

  function Xe(e, t) {
    return {
      years: e.years + t.years,
      months: e.months + t.months,
      days: e.days + t.days,
      milliseconds: e.milliseconds + t.milliseconds
    };
  }

  function Ke(e, t) {
    return {
      years: e.years * t,
      months: e.months * t,
      days: e.days * t,
      milliseconds: e.milliseconds * t
    };
  }

  function Je(e) {
    return $e(e) / 864e5;
  }

  function $e(e) {
    return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds;
  }

  function Qe(e, t) {
    for (var n = null, r = 0; r < Ge.length; r++) {
      var o = Ge[r];

      if (t[o]) {
        var i = e[o] / t[o];
        if (!de(i) || null !== n && n !== i) return null;
        n = i;
      } else if (e[o]) return null;
    }

    return n;
  }

  function et(e) {
    var t = e.milliseconds;

    if (t) {
      if (t % 1e3 != 0) return {
        unit: "millisecond",
        value: t
      };
      if (t % 6e4 != 0) return {
        unit: "second",
        value: t / 1e3
      };
      if (t % 36e5 != 0) return {
        unit: "minute",
        value: t / 6e4
      };
      if (t) return {
        unit: "hour",
        value: t / 36e5
      };
    }

    return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
      unit: "week",
      value: e.days / 7
    } : {
      unit: "day",
      value: e.days
    } : e.months ? {
      unit: "month",
      value: e.months
    } : e.years ? {
      unit: "year",
      value: e.years
    } : {
      unit: "millisecond",
      value: 0
    };
  }

  function tt(e) {
    return e.toISOString().replace(/T.*$/, "");
  }

  function nt(e) {
    return ue(e.getUTCHours(), 2) + ":" + ue(e.getUTCMinutes(), 2) + ":" + ue(e.getUTCSeconds(), 2);
  }

  function rt(e, t) {
    void 0 === t && (t = !1);
    var n = e < 0 ? "-" : "+",
        r = Math.abs(e),
        o = Math.floor(r / 60),
        i = Math.round(r % 60);
    return t ? n + ue(o, 2) + ":" + ue(i, 2) : "GMT" + n + o + (i ? ":" + ue(i, 2) : "");
  }

  function ot(e, t, n) {
    if (e === t) return !0;
    var r,
        o = e.length;
    if (o !== t.length) return !1;

    for (r = 0; r < o; r++) {
      if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
    }

    return !0;
  }

  function it(e, t, n) {
    var r, o;
    return function () {
      for (var i = [], a = 0; a < arguments.length; a++) {
        i[a] = arguments[a];
      }

      if (r) {
        if (!ot(r, i)) {
          n && n(o);
          var s = e.apply(this, i);
          t && t(s, o) || (o = s);
        }
      } else o = e.apply(this, i);

      return r = i, o;
    };
  }

  function at(e, t, n) {
    var r, o;
    return function (i) {
      if (r) {
        if (!Le(r, i)) {
          n && n(o);
          var a = e.call(this, i);
          t && t(a, o) || (o = a);
        }
      } else o = e.call(this, i);

      return r = i, o;
    };
  }

  var st = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0
  },
      lt = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
  },
      ut = /\s*([ap])\.?m\.?/i,
      ct = /,/g,
      dt = /\s+/g,
      pt = /\u200e/g,
      ft = /UTC|GMT/,
      ht = function () {
    function e(e) {
      var t = {},
          n = {},
          r = 0;

      for (var o in e) {
        o in st ? (n[o] = e[o], r = Math.max(st[o], r)) : (t[o] = e[o], o in lt && (r = Math.max(lt[o], r)));
      }

      this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = it(vt);
    }

    return e.prototype.format = function (e, t) {
      return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e);
    }, e.prototype.formatRange = function (e, t, n, r) {
      var o = this.standardDateProps,
          i = this.extendedSettings,
          a = function (e, t, n) {
        if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
        if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
        if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
        if (_e(e) !== _e(t)) return 1;
        return 0;
      }(e.marker, t.marker, n.calendarSystem);

      if (!a) return this.format(e, n);
      var s = a;
      !(s > 1) || "numeric" !== o.year && "2-digit" !== o.year || "numeric" !== o.month && "2-digit" !== o.month || "numeric" !== o.day && "2-digit" !== o.day || (s = 1);
      var l = this.format(e, n),
          u = this.format(t, n);
      if (l === u) return l;

      var c = vt(function (e, t) {
        var n = {};

        for (var r in e) {
          (!(r in lt) || lt[r] <= t) && (n[r] = e[r]);
        }

        return n;
      }(o, s), i, n),
          d = c(e),
          p = c(t),
          f = function (e, t, n, r) {
        var o = 0;

        for (; o < e.length;) {
          var i = e.indexOf(t, o);
          if (-1 === i) break;
          var a = e.substr(0, i);
          o = i + t.length;

          for (var s = e.substr(o), l = 0; l < n.length;) {
            var u = n.indexOf(r, l);
            if (-1 === u) break;
            var c = n.substr(0, u);
            l = u + r.length;
            var d = n.substr(l);
            if (a === c && s === d) return {
              before: a,
              after: s
            };
          }
        }

        return null;
      }(l, d, u, p),
          h = i.separator || r || n.defaultSeparator || "";

      return f ? f.before + d + h + p + f.after : l + h + u;
    }, e.prototype.getLargestUnit = function () {
      switch (this.severity) {
        case 7:
        case 6:
        case 5:
          return "year";

        case 4:
          return "month";

        case 3:
          return "week";

        case 2:
          return "day";

        default:
          return "time";
      }
    }, e;
  }();

  function vt(e, t, n) {
    var o = Object.keys(e).length;
    return 1 === o && "short" === e.timeZoneName ? function (e) {
      return rt(e.timeZoneOffset);
    } : 0 === o && t.week ? function (e) {
      return function (e, t, n, r) {
        var o = [];
        "narrow" === r ? o.push(t) : "short" === r && o.push(t, " ");
        o.push(n.simpleNumberFormat.format(e)), "rtl" === n.options.direction && o.reverse();
        return o.join("");
      }(n.computeWeekNumber(e.marker), n.weekText, n.locale, t.week);
    } : function (e, t, n) {
      e = _r2({}, e), t = _r2({}, t), function (e, t) {
        e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
        "long" === e.timeZoneName && (e.timeZoneName = "short");
        t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute;
      }(e, t), e.timeZone = "UTC";
      var o,
          i = new Intl.DateTimeFormat(n.locale.codes, e);

      if (t.omitZeroMinute) {
        var a = _r2({}, e);

        delete a.minute, o = new Intl.DateTimeFormat(n.locale.codes, a);
      }

      return function (r) {
        var a = r.marker;
        return function (e, t, n, r, o) {
          e = e.replace(pt, ""), "short" === n.timeZoneName && (e = function (e, t) {
            var n = !1;
            e = e.replace(ft, function () {
              return n = !0, t;
            }), n || (e += " " + t);
            return e;
          }(e, "UTC" === o.timeZone || null == t.timeZoneOffset ? "UTC" : rt(t.timeZoneOffset)));
          r.omitCommas && (e = e.replace(ct, "").trim());
          r.omitZeroMinute && (e = e.replace(":00", ""));
          !1 === r.meridiem ? e = e.replace(ut, "").trim() : "narrow" === r.meridiem ? e = e.replace(ut, function (e, t) {
            return t.toLocaleLowerCase();
          }) : "short" === r.meridiem ? e = e.replace(ut, function (e, t) {
            return t.toLocaleLowerCase() + "m";
          }) : "lowercase" === r.meridiem && (e = e.replace(ut, function (e) {
            return e.toLocaleLowerCase();
          }));
          return e = (e = e.replace(dt, " ")).trim();
        }((o && !a.getUTCMinutes() ? o : i).format(a), r, e, t, n);
      };
    }(e, t, n);
  }

  function gt(e, t) {
    var n = t.markerToArray(e.marker);
    return {
      marker: e.marker,
      timeZoneOffset: e.timeZoneOffset,
      array: n,
      year: n[0],
      month: n[1],
      day: n[2],
      hour: n[3],
      minute: n[4],
      second: n[5],
      millisecond: n[6]
    };
  }

  function mt(e, t, n, r) {
    var o = gt(e, n.calendarSystem);
    return {
      date: o,
      start: o,
      end: t ? gt(t, n.calendarSystem) : null,
      timeZone: n.timeZone,
      localeCodes: n.locale.codes,
      defaultSeparator: r || n.defaultSeparator
    };
  }

  var yt = function () {
    function e(e) {
      this.cmdStr = e;
    }

    return e.prototype.format = function (e, t, n) {
      return t.cmdFormatter(this.cmdStr, mt(e, null, t, n));
    }, e.prototype.formatRange = function (e, t, n, r) {
      return n.cmdFormatter(this.cmdStr, mt(e, t, n, r));
    }, e;
  }(),
      Et = function () {
    function e(e) {
      this.func = e;
    }

    return e.prototype.format = function (e, t, n) {
      return this.func(mt(e, null, t, n));
    }, e.prototype.formatRange = function (e, t, n, r) {
      return this.func(mt(e, t, n, r));
    }, e;
  }();

  function St(e) {
    return "object" == _typeof(e) && e ? new ht(e) : "string" == typeof e ? new yt(e) : "function" == typeof e ? new Et(e) : void 0;
  }

  var Dt = {
    navLinkDayClick: _t,
    navLinkWeekClick: _t,
    duration: Ye,
    bootstrapFontAwesome: _t,
    buttonIcons: _t,
    customButtons: _t,
    defaultAllDayEventDuration: Ye,
    defaultTimedEventDuration: Ye,
    nextDayThreshold: Ye,
    scrollTime: Ye,
    slotMinTime: Ye,
    slotMaxTime: Ye,
    dayPopoverFormat: St,
    slotDuration: Ye,
    snapDuration: Ye,
    headerToolbar: _t,
    footerToolbar: _t,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: St,
    dayHeaderClassNames: _t,
    dayHeaderContent: _t,
    dayHeaderDidMount: _t,
    dayHeaderWillUnmount: _t,
    dayCellClassNames: _t,
    dayCellContent: _t,
    dayCellDidMount: _t,
    dayCellWillUnmount: _t,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: _t,
    weekNumbers: Boolean,
    weekNumberClassNames: _t,
    weekNumberContent: _t,
    weekNumberDidMount: _t,
    weekNumberWillUnmount: _t,
    editable: Boolean,
    viewClassNames: _t,
    viewDidMount: _t,
    viewWillUnmount: _t,
    nowIndicator: Boolean,
    nowIndicatorClassNames: _t,
    nowIndicatorContent: _t,
    nowIndicatorDidMount: _t,
    nowIndicatorWillUnmount: _t,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: _t,
    locale: _t,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: _t,
    eventOrder: ie,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: _t,
    contentHeight: _t,
    direction: String,
    weekNumberFormat: St,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    progressiveEventRendering: Boolean,
    businessHours: _t,
    initialDate: _t,
    now: _t,
    eventDataTransform: _t,
    stickyHeaderDates: _t,
    stickyFooterScrollbar: _t,
    viewHeight: _t,
    defaultAllDay: Boolean,
    eventSourceFailure: _t,
    eventSourceSuccess: _t,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: _t,
    eventConstraint: _t,
    eventAllow: _t,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: _t,
    eventContent: _t,
    eventDidMount: _t,
    eventWillUnmount: _t,
    selectConstraint: _t,
    selectOverlap: _t,
    selectAllow: _t,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: _t,
    slotLaneClassNames: _t,
    slotLaneContent: _t,
    slotLaneDidMount: _t,
    slotLaneWillUnmount: _t,
    slotLabelClassNames: _t,
    slotLabelContent: _t,
    slotLabelDidMount: _t,
    slotLabelWillUnmount: _t,
    dayMaxEvents: _t,
    dayMaxEventRows: _t,
    dayMinWidth: Number,
    slotLabelInterval: Ye,
    allDayText: String,
    allDayClassNames: _t,
    allDayContent: _t,
    allDayDidMount: _t,
    allDayWillUnmount: _t,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: St,
    rerenderDelay: Number,
    moreLinkText: _t,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMinHeight: Number,
    slotEventOverlap: Boolean,
    plugins: _t,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: Ye,
    hiddenDays: _t,
    monthMode: Boolean,
    fixedWeekCount: Boolean,
    validRange: _t,
    visibleRange: _t,
    titleFormat: _t,
    noEventsText: String
  },
      bt = {
    eventDisplay: "auto",
    defaultRangeSeparator: " - ",
    titleRangeSeparator: " – ",
    defaultTimedEventDuration: "01:00:00",
    defaultAllDayEventDuration: {
      day: 1
    },
    forceEventDuration: !1,
    nextDayThreshold: "00:00:00",
    dayHeaders: !0,
    initialView: "",
    aspectRatio: 1.35,
    headerToolbar: {
      start: "title",
      center: "",
      end: "today prev,next"
    },
    weekends: !0,
    weekNumbers: !1,
    weekNumberCalculation: "local",
    editable: !1,
    nowIndicator: !1,
    scrollTime: "06:00:00",
    slotMinTime: "00:00:00",
    slotMaxTime: "24:00:00",
    showNonCurrentDates: !0,
    lazyFetching: !0,
    startParam: "start",
    endParam: "end",
    timeZoneParam: "timeZone",
    timeZone: "local",
    locales: [],
    locale: "",
    themeSystem: "standard",
    dragRevertDuration: 500,
    dragScroll: !0,
    allDayMaintainDuration: !1,
    unselectAuto: !0,
    dropAccept: "*",
    eventOrder: "start,-duration,allDay,title",
    dayPopoverFormat: {
      month: "long",
      day: "numeric",
      year: "numeric"
    },
    handleWindowResize: !0,
    windowResizeDelay: 100,
    longPressDelay: 1e3,
    eventDragMinDistance: 5,
    expandRows: !1,
    navLinks: !1,
    selectable: !1
  },
      Ct = {
    datesSet: _t,
    eventsSet: _t,
    eventAdd: _t,
    eventChange: _t,
    eventRemove: _t,
    windowResize: _t,
    eventClick: _t,
    eventMouseEnter: _t,
    eventMouseLeave: _t,
    select: _t,
    unselect: _t,
    loading: _t,
    _unmount: _t,
    _beforeprint: _t,
    _afterprint: _t,
    _noEventDrop: _t,
    _noEventResize: _t,
    _resize: _t,
    _scrollRequest: _t
  },
      wt = {
    buttonText: _t,
    views: _t,
    plugins: _t,
    initialEvents: _t,
    events: _t,
    eventSources: _t
  },
      Rt = {
    headerToolbar: Tt,
    footerToolbar: Tt,
    buttonText: Tt,
    buttonIcons: Tt
  };

  function Tt(e, t) {
    return "object" == _typeof(e) && "object" == _typeof(t) && e && t ? Le(e, t) : e === t;
  }

  var kt = {
    type: String,
    component: _t,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: _t,
    usesMinMaxTime: Boolean,
    classNames: _t,
    content: _t,
    didMount: _t,
    willUnmount: _t
  };

  function Mt(e) {
    return Ne(e, Rt);
  }

  function xt(e, t) {
    var n = {},
        r = {};

    for (var o in t) {
      o in e && (n[o] = t[o](e[o]));
    }

    for (var o in e) {
      o in t || (r[o] = e[o]);
    }

    return {
      refined: n,
      extra: r
    };
  }

  function _t(e) {
    return e;
  }

  function It(e, t, n, r) {
    for (var o = {
      defs: {},
      instances: {}
    }, i = Zt(n), a = 0, s = e; a < s.length; a++) {
      var l = qt(s[a], t, n, r, i);
      l && Pt(l, o);
    }

    return o;
  }

  function Pt(e, t) {
    return void 0 === t && (t = {
      defs: {},
      instances: {}
    }), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t;
  }

  function Nt(e, t) {
    var n = e.instances[t];

    if (n) {
      var r = e.defs[n.defId],
          o = At(e, function (e) {
        return t = r, n = e, Boolean(t.groupId && t.groupId === n.groupId);
        var t, n;
      });
      return o.defs[r.defId] = r, o.instances[n.instanceId] = n, o;
    }

    return {
      defs: {},
      instances: {}
    };
  }

  function Ht() {
    return {
      defs: {},
      instances: {}
    };
  }

  function Ot(e, t) {
    return {
      defs: _r2(_r2({}, e.defs), t.defs),
      instances: _r2(_r2({}, e.instances), t.instances)
    };
  }

  function At(e, t) {
    var n = He(e.defs, t),
        r = He(e.instances, function (e) {
      return n[e.defId];
    });
    return {
      defs: n,
      instances: r
    };
  }

  function Ut(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [];
  }

  var Lt = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: _t,
    overlap: _t,
    allow: _t,
    className: Ut,
    classNames: Ut,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
  };

  function Wt(e, t) {
    var n = function (e, t) {
      return Array.isArray(e) ? It(e, null, t, !0) : "object" == _typeof(e) && e ? It([e], null, t, !0) : null != e ? String(e) : null;
    }(e.constraint, t);

    return {
      display: e.display || null,
      startEditable: null != e.startEditable ? e.startEditable : e.editable,
      durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
      constraints: null != n ? [n] : [],
      overlap: null != e.overlap ? e.overlap : null,
      allows: null != e.allow ? [e.allow] : [],
      backgroundColor: e.backgroundColor || e.color || "",
      borderColor: e.borderColor || e.color || "",
      textColor: e.textColor || "",
      classNames: (e.className || []).concat(e.classNames || [])
    };
  }

  function Vt(e) {
    return e.reduce(zt, Ft);
  }

  function zt(e, t) {
    return {
      display: null != t.display ? t.display : e.display,
      startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
      durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
      constraints: e.constraints.concat(t.constraints),
      overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
      allows: e.allows.concat(t.allows),
      backgroundColor: t.backgroundColor || e.backgroundColor,
      borderColor: t.borderColor || e.borderColor,
      textColor: t.textColor || e.textColor,
      classNames: e.classNames.concat(t.classNames)
    };
  }

  var Ft = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: "",
    borderColor: "",
    textColor: "",
    classNames: []
  },
      Bt = {
    id: String,
    groupId: String,
    title: String,
    url: String
  },
      jt = {
    start: _t,
    end: _t,
    date: _t,
    allDay: Boolean
  },
      Gt = _r2(_r2(_r2({}, Bt), jt), {
    extendedProps: _t
  });

  function qt(e, t, n, r, o) {
    void 0 === o && (o = Zt(n));

    var i = Yt(e, n, o),
        a = i.refined,
        s = i.extra,
        l = function (e, t) {
      var n = null;
      e && (n = e.defaultAllDay);
      null == n && (n = t.options.defaultAllDay);
      return n;
    }(t, n),
        u = function (e, t, n, r) {
      for (var o = 0; o < r.length; o++) {
        var i = r[o].parse(e, n);

        if (i) {
          var a = e.allDay;
          return null == a && null == (a = t) && null == (a = i.allDayGuess) && (a = !1), {
            allDay: a,
            duration: i.duration,
            typeData: i.typeData,
            typeId: o
          };
        }
      }

      return null;
    }(a, l, n.dateEnv, n.pluginHooks.recurringTypes);

    if (u) return (c = Xt(a, s, t ? t.sourceId : "", u.allDay, Boolean(u.duration), n)).recurringDef = {
      typeId: u.typeId,
      typeData: u.typeData,
      duration: u.duration
    }, {
      def: c,
      instance: null
    };

    var c,
        d = function (e, t, n, r) {
      var o,
          i,
          a = e.allDay,
          s = null,
          l = !1,
          u = null,
          c = null != e.start ? e.start : e.date;
      if (o = n.dateEnv.createMarkerMeta(c)) s = o.marker;else if (!r) return null;
      null != e.end && (i = n.dateEnv.createMarkerMeta(e.end));
      null == a && (a = null != t ? t : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified));
      a && s && (s = be(s));
      i && (u = i.marker, a && (u = be(u)), s && u <= s && (u = null));
      u ? l = !0 : r || (l = n.options.forceEventDuration || !1, u = n.dateEnv.add(s, a ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
      return {
        allDay: a,
        hasEnd: l,
        range: {
          start: s,
          end: u
        },
        forcedStartTzo: o ? o.forcedTzo : null,
        forcedEndTzo: i ? i.forcedTzo : null
      };
    }(a, l, n, r);

    return d ? {
      def: c = Xt(a, s, t ? t.sourceId : "", d.allDay, d.hasEnd, n),
      instance: Ie(c.defId, d.range, d.forcedStartTzo, d.forcedEndTzo)
    } : null;
  }

  function Yt(e, t, n) {
    return void 0 === n && (n = Zt(t)), xt(e, n);
  }

  function Zt(e) {
    return _r2(_r2(_r2({}, Lt), Gt), e.pluginHooks.eventRefiners);
  }

  function Xt(e, t, n, o, i, a) {
    for (var s = {
      title: e.title || "",
      groupId: e.groupId || "",
      publicId: e.id || "",
      url: e.url || "",
      recurringDef: null,
      defId: $(),
      sourceId: n,
      allDay: o,
      hasEnd: i,
      ui: Wt(e, a),
      extendedProps: _r2(_r2({}, e.extendedProps || {}), t)
    }, l = 0, u = a.pluginHooks.eventDefMemberAdders; l < u.length; l++) {
      var c = u[l];

      _r2(s, c(e));
    }

    return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s;
  }

  function Kt(e) {
    var t = Math.floor(ye(e.start, e.end)) || 1,
        n = be(e.start);
    return {
      start: n,
      end: ve(n, t)
    };
  }

  function Jt(e, t) {
    void 0 === t && (t = Ye(0));
    var n = null,
        r = null;

    if (e.end) {
      r = be(e.end);
      var o = e.end.valueOf() - r.valueOf();
      o && o >= $e(t) && (r = ve(r, 1));
    }

    return e.start && (n = be(e.start), r && r <= n && (r = ve(n, 1))), {
      start: n,
      end: r
    };
  }

  function $t(e) {
    var t = Jt(e);
    return ye(t.start, t.end) > 1;
  }

  function Qt(e, t, n, r) {
    return "year" === r ? Ye(n.diffWholeYears(e, t), "year") : "month" === r ? Ye(n.diffWholeMonths(e, t), "month") : Ee(e, t);
  }

  function en(e, t) {
    var n,
        r,
        o = [],
        i = t.start;

    for (e.sort(tn), n = 0; n < e.length; n++) {
      (r = e[n]).start > i && o.push({
        start: i,
        end: r.start
      }), r.end > i && (i = r.end);
    }

    return i < t.end && o.push({
      start: i,
      end: t.end
    }), o;
  }

  function tn(e, t) {
    return e.start.valueOf() - t.start.valueOf();
  }

  function nn(e, t) {
    var n = e.start,
        r = e.end,
        o = null;
    return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (o = {
      start: n,
      end: r
    }), o;
  }

  function rn(e, t) {
    return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf());
  }

  function on(e, t) {
    return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end);
  }

  function an(e, t) {
    return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end);
  }

  function sn(e, t) {
    return (null === e.start || t >= e.start) && (null === e.end || t < e.end);
  }

  function ln(e, t, n, r) {
    var o = {},
        i = {},
        a = {},
        s = [],
        l = [],
        u = pn(e.defs, t);

    for (var c in e.defs) {
      "inverse-background" === (f = u[(S = e.defs[c]).defId]).display && (S.groupId ? (o[S.groupId] = [], a[S.groupId] || (a[S.groupId] = S)) : i[c] = []);
    }

    for (var d in e.instances) {
      var p = e.instances[d],
          f = u[(S = e.defs[p.defId]).defId],
          h = p.range,
          v = !S.allDay && r ? Jt(h, r) : h,
          g = nn(v, n);
      g && ("inverse-background" === f.display ? S.groupId ? o[S.groupId].push(g) : i[p.defId].push(g) : "none" !== f.display && ("background" === f.display ? s : l).push({
        def: S,
        ui: f,
        instance: p,
        range: g,
        isStart: v.start && v.start.valueOf() === g.start.valueOf(),
        isEnd: v.end && v.end.valueOf() === g.end.valueOf()
      }));
    }

    for (var m in o) {
      for (var y = 0, E = en(o[m], n); y < E.length; y++) {
        var S,
            D = E[y];
        f = u[(S = a[m]).defId];
        s.push({
          def: S,
          ui: f,
          instance: null,
          range: D,
          isStart: !1,
          isEnd: !1
        });
      }
    }

    for (var c in i) {
      for (var b = 0, C = en(i[c], n); b < C.length; b++) {
        D = C[b];
        s.push({
          def: e.defs[c],
          ui: u[c],
          instance: null,
          range: D,
          isStart: !1,
          isEnd: !1
        });
      }
    }

    return {
      bg: s,
      fg: l
    };
  }

  function un(e) {
    return "background" === e.ui.display || "inverse-background" === e.ui.display;
  }

  function cn(e, t) {
    e.fcSeg = t;
  }

  function dn(e) {
    return e.fcSeg || e.parentNode.fcSeg || null;
  }

  function pn(e, t) {
    return Oe(e, function (e) {
      return fn(e, t);
    });
  }

  function fn(e, t) {
    var n = [];
    return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Vt(n);
  }

  function hn(e, t) {
    var n = e.map(vn);
    return n.sort(function (e, n) {
      return ae(e, n, t);
    }), n.map(function (e) {
      return e._seg;
    });
  }

  function vn(e) {
    var t = e.eventRange,
        n = t.def,
        o = t.instance ? t.instance.range : t.range,
        i = o.start ? o.start.valueOf() : 0,
        a = o.end ? o.end.valueOf() : 0;
    return _r2(_r2(_r2({}, n.extendedProps), n), {
      id: n.publicId,
      start: i,
      end: a,
      duration: a - i,
      allDay: Number(n.allDay),
      _seg: e
    });
  }

  function gn(e, t) {
    for (var n = t.pluginHooks.isDraggableTransformers, r = e.eventRange, o = r.def, i = r.ui, a = i.startEditable, s = 0, l = n; s < l.length; s++) {
      a = (0, l[s])(a, o, i, t);
    }

    return a;
  }

  function mn(e, t) {
    return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart;
  }

  function yn(e, t) {
    return e.isEnd && e.eventRange.ui.durationEditable;
  }

  function En(e, t, n, r, o, i, a) {
    var s = n.dateEnv,
        l = n.options,
        u = l.displayEventTime,
        c = l.displayEventEnd,
        d = e.eventRange.def,
        p = e.eventRange.instance;

    if (null == u && (u = !1 !== r), null == c && (c = !1 !== o), u && !d.allDay && (e.isStart || e.isEnd)) {
      var f = i || (e.isStart ? p.range.start : e.start || e.eventRange.range.start),
          h = a || (e.isEnd ? p.range.end : e.end || e.eventRange.range.end);
      return c && d.hasEnd ? s.formatRange(f, h, t, {
        forcedStartTzo: i ? null : p.forcedStartTzo,
        forcedEndTzo: a ? null : p.forcedEndTzo
      }) : s.format(f, t, {
        forcedTzo: i ? null : p.forcedStartTzo
      });
    }

    return "";
  }

  function Sn(e, t, n) {
    var r = e.eventRange.range;
    return {
      isPast: r.end < (n || t.start),
      isFuture: r.start >= (n || t.end),
      isToday: t && sn(t, r.start)
    };
  }

  function Dn(e) {
    var t = ["fc-event"];
    return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t;
  }

  function bn(e) {
    return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString();
  }

  var Cn = {
    start: _t,
    end: _t,
    allDay: Boolean
  };

  function wn(e, t, n) {
    var o = function (e, t) {
      var n = xt(e, Cn),
          o = n.refined,
          i = n.extra,
          a = o.start ? t.createMarkerMeta(o.start) : null,
          s = o.end ? t.createMarkerMeta(o.end) : null,
          l = o.allDay;
      null == l && (l = a && a.isTimeUnspecified && (!s || s.isTimeUnspecified));
      return _r2({
        range: {
          start: a ? a.marker : null,
          end: s ? s.marker : null
        },
        allDay: l
      }, i);
    }(e, t),
        i = o.range;

    if (!i.start) return null;

    if (!i.end) {
      if (null == n) return null;
      i.end = t.add(i.start, n);
    }

    return o;
  }

  function Rn(e, t) {
    return rn(e.range, t.range) && e.allDay === t.allDay && function (e, t) {
      for (var n in t) {
        if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
      }

      for (var n in e) {
        if (!(n in t)) return !1;
      }

      return !0;
    }(e, t);
  }

  function Tn(e, t, n) {
    return _r2(_r2({}, kn(e, t, n)), {
      timeZone: t.timeZone
    });
  }

  function kn(e, t, n) {
    return {
      start: t.toDate(e.start),
      end: t.toDate(e.end),
      startStr: t.formatIso(e.start, {
        omitTime: n
      }),
      endStr: t.formatIso(e.end, {
        omitTime: n
      })
    };
  }

  function Mn(e, t, n) {
    var r = Yt({
      editable: !1
    }, n),
        o = Xt(r.refined, r.extra, "", e.allDay, !0, n);
    return {
      def: o,
      ui: fn(o, t),
      instance: Ie(o.defId, e.range),
      range: e.range,
      isStart: !0,
      isEnd: !0
    };
  }

  function xn(e, t, n) {
    n.emitter.trigger("select", _r2(_r2({}, _n(e, n)), {
      jsEvent: t ? t.origEvent : null,
      view: n.viewApi || n.calendarApi.view
    }));
  }

  function _n(e, t) {
    for (var n, o, i = {}, a = 0, s = t.pluginHooks.dateSpanTransforms; a < s.length; a++) {
      var l = s[a];

      _r2(i, l(e, t));
    }

    return _r2(i, (n = e, o = t.dateEnv, _r2(_r2({}, kn(n.range, o, n.allDay)), {
      allDay: n.allDay
    }))), i;
  }

  function In(e, t, n) {
    var r = n.dateEnv,
        o = n.options,
        i = t;
    return e ? (i = be(i), i = r.add(i, o.defaultAllDayEventDuration)) : i = r.add(i, o.defaultTimedEventDuration), i;
  }

  function Pn(e, t, n, r) {
    var o = pn(e.defs, t),
        i = {
      defs: {},
      instances: {}
    };

    for (var a in e.defs) {
      var s = e.defs[a];
      i.defs[a] = Nn(s, o[a], n, r);
    }

    for (var l in e.instances) {
      var u = e.instances[l];
      s = i.defs[u.defId];
      i.instances[l] = Hn(u, s, o[u.defId], n, r);
    }

    return i;
  }

  function Nn(e, t, n, o) {
    var i = n.standardProps || {};
    null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);

    var a = _r2(_r2(_r2({}, e), i), {
      ui: _r2(_r2({}, e.ui), i.ui)
    });

    n.extendedProps && (a.extendedProps = _r2(_r2({}, a.extendedProps), n.extendedProps));

    for (var s = 0, l = o.pluginHooks.eventDefMutationAppliers; s < l.length; s++) {
      (0, l[s])(a, n, o);
    }

    return !a.hasEnd && o.options.forceEventDuration && (a.hasEnd = !0), a;
  }

  function Hn(e, t, n, o, i) {
    var a = i.dateEnv,
        s = o.standardProps && !0 === o.standardProps.allDay,
        l = o.standardProps && !1 === o.standardProps.hasEnd,
        u = _r2({}, e);

    return s && (u.range = Kt(u.range)), o.datesDelta && n.startEditable && (u.range = {
      start: a.add(u.range.start, o.datesDelta),
      end: a.add(u.range.end, o.datesDelta)
    }), o.startDelta && n.durationEditable && (u.range = {
      start: a.add(u.range.start, o.startDelta),
      end: u.range.end
    }), o.endDelta && n.durationEditable && (u.range = {
      start: u.range.start,
      end: a.add(u.range.end, o.endDelta)
    }), l && (u.range = {
      start: u.range.start,
      end: In(t.allDay, u.range.start, i)
    }), t.allDay && (u.range = {
      start: be(u.range.start),
      end: be(u.range.end)
    }), u.range.end < u.range.start && (u.range.end = In(t.allDay, u.range.start, i)), u;
  }

  var On = function () {
    function e(e, t, n) {
      this.type = e, this.getCurrentData = t, this.dateEnv = n;
    }

    return Object.defineProperty(e.prototype, "calendar", {
      get: function get() {
        return this.getCurrentData().calendarApi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "title", {
      get: function get() {
        return this.getCurrentData().viewTitle;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "activeStart", {
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "activeEnd", {
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "currentStart", {
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "currentEnd", {
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getOption = function (e) {
      return this.getCurrentData().options[e];
    }, e;
  }(),
      An = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    events: _t,
    eventDataTransform: _t,
    success: _t,
    failure: _t
  };

  function Un(e, t, n) {
    var r;

    if (void 0 === n && (n = Ln(t)), "string" == typeof e ? r = {
      url: e
    } : "function" == typeof e || Array.isArray(e) ? r = {
      events: e
    } : "object" == _typeof(e) && e && (r = e), r) {
      var o = xt(r, n),
          i = o.refined,
          a = o.extra,
          s = function (e, t) {
        for (var n = t.pluginHooks.eventSourceDefs, r = n.length - 1; r >= 0; r--) {
          var o = n[r].parseMeta(e);
          if (o) return {
            sourceDefId: r,
            meta: o
          };
        }

        return null;
      }(i, t);

      if (s) return {
        _raw: e,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: $(),
        sourceDefId: s.sourceDefId,
        meta: s.meta,
        ui: Wt(i, t),
        extendedProps: a
      };
    }

    return null;
  }

  function Ln(e) {
    return _r2(_r2(_r2({}, Lt), An), e.pluginHooks.eventSourceRefiners);
  }

  function Wn(e, t) {
    return "function" == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e);
  }

  var Vn = function () {
    function e() {}

    return e.prototype.getCurrentData = function () {
      return this.currentDataManager.getCurrentData();
    }, e.prototype.dispatch = function (e) {
      return this.currentDataManager.dispatch(e);
    }, Object.defineProperty(e.prototype, "view", {
      get: function get() {
        return this.getCurrentData().viewApi;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.batchRendering = function (e) {
      e();
    }, e.prototype.updateSize = function () {
      this.trigger("_resize", !0);
    }, e.prototype.setOption = function (e, t) {
      this.dispatch({
        type: "SET_OPTION",
        optionName: e,
        rawOptionValue: t
      });
    }, e.prototype.getOption = function (e) {
      return this.currentDataManager.currentCalendarOptionsInput[e];
    }, e.prototype.getAvailableLocaleCodes = function () {
      return Object.keys(this.getCurrentData().availableRawLocales);
    }, e.prototype.on = function (e, t) {
      var n = this.currentDataManager;
      n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '" + e + "'");
    }, e.prototype.off = function (e, t) {
      this.currentDataManager.emitter.off(e, t);
    }, e.prototype.trigger = function (e) {
      for (var t, n = [], r = 1; r < arguments.length; r++) {
        n[r - 1] = arguments[r];
      }

      (t = this.currentDataManager.emitter).trigger.apply(t, o([e], n));
    }, e.prototype.changeView = function (e, t) {
      var n = this;
      this.batchRendering(function () {
        if (n.unselect(), t) {
          if (t.start && t.end) n.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), n.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: t
          });else {
            var r = n.getCurrentData().dateEnv;
            n.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: e,
              dateMarker: r.createMarker(t)
            });
          }
        } else n.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
      });
    }, e.prototype.zoomTo = function (e, t) {
      var n;
      t = t || "day", n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({
        type: "CHANGE_VIEW_TYPE",
        viewType: n.type,
        dateMarker: e
      }) : this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e
      });
    }, e.prototype.getUnitViewSpec = function (e) {
      var t,
          n,
          r = this.getCurrentData(),
          o = r.viewSpecs,
          i = r.toolbarConfig,
          a = [].concat(i.viewsWithButtons);

      for (var s in o) {
        a.push(s);
      }

      for (t = 0; t < a.length; t++) {
        if ((n = o[a[t]]) && n.singleUnit === e) return n;
      }
    }, e.prototype.prev = function () {
      this.unselect(), this.dispatch({
        type: "PREV"
      });
    }, e.prototype.next = function () {
      this.unselect(), this.dispatch({
        type: "NEXT"
      });
    }, e.prototype.prevYear = function () {
      var e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e.dateEnv.addYears(e.currentDate, -1)
      });
    }, e.prototype.nextYear = function () {
      var e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e.dateEnv.addYears(e.currentDate, 1)
      });
    }, e.prototype.today = function () {
      var e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: Wn(e.calendarOptions.now, e.dateEnv)
      });
    }, e.prototype.gotoDate = function (e) {
      var t = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: t.dateEnv.createMarker(e)
      });
    }, e.prototype.incrementDate = function (e) {
      var t = this.getCurrentData(),
          n = Ye(e);
      n && (this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: t.dateEnv.add(t.currentDate, n)
      }));
    }, e.prototype.getDate = function () {
      var e = this.getCurrentData();
      return e.dateEnv.toDate(e.currentDate);
    }, e.prototype.formatDate = function (e, t) {
      var n = this.getCurrentData().dateEnv;
      return n.format(n.createMarker(e), St(t));
    }, e.prototype.formatRange = function (e, t, n) {
      var r = this.getCurrentData().dateEnv;
      return r.formatRange(r.createMarker(e), r.createMarker(t), St(n), n);
    }, e.prototype.formatIso = function (e, t) {
      var n = this.getCurrentData().dateEnv;
      return n.formatIso(n.createMarker(e), {
        omitTime: t
      });
    }, e.prototype.select = function (e, t) {
      var n;
      n = null == t ? null != e.start ? e : {
        start: e,
        end: null
      } : {
        start: e,
        end: t
      };
      var r = this.getCurrentData(),
          o = wn(n, r.dateEnv, Ye({
        days: 1
      }));
      o && (this.dispatch({
        type: "SELECT_DATES",
        selection: o
      }), xn(o, null, r));
    }, e.prototype.unselect = function (e) {
      var t = this.getCurrentData();
      t.dateSelection && (this.dispatch({
        type: "UNSELECT_DATES"
      }), function (e, t) {
        t.emitter.trigger("unselect", {
          jsEvent: e ? e.origEvent : null,
          view: t.viewApi || t.calendarApi.view
        });
      }(e, t));
    }, e.prototype.addEvent = function (e, t) {
      if (e instanceof zn) {
        var n = e._def,
            r = e._instance;
        return this.getCurrentData().eventStore.defs[n.defId] || (this.dispatch({
          type: "ADD_EVENTS",
          eventStore: Pt({
            def: n,
            instance: r
          })
        }), this.triggerEventAdd(e)), e;
      }

      var o,
          i = this.getCurrentData();
      if (t instanceof L) o = t.internalEventSource;else if ("boolean" == typeof t) t && (o = Ue(i.eventSources)[0]);else if (null != t) {
        var a = this.getEventSourceById(t);
        if (!a) return console.warn('Could not find an event source with ID "' + t + '"'), null;
        o = a.internalEventSource;
      }
      var s = qt(e, o, i, !1);

      if (s) {
        var l = new zn(i, s.def, s.def.recurringDef ? null : s.instance);
        return this.dispatch({
          type: "ADD_EVENTS",
          eventStore: Pt(s)
        }), this.triggerEventAdd(l), l;
      }

      return null;
    }, e.prototype.triggerEventAdd = function (e) {
      var t = this;
      this.getCurrentData().emitter.trigger("eventAdd", {
        event: e,
        relatedEvents: [],
        revert: function revert() {
          t.dispatch({
            type: "REMOVE_EVENTS",
            eventStore: Fn(e)
          });
        }
      });
    }, e.prototype.getEventById = function (e) {
      var t = this.getCurrentData(),
          n = t.eventStore,
          r = n.defs,
          o = n.instances;

      for (var i in e = String(e), r) {
        var a = r[i];

        if (a.publicId === e) {
          if (a.recurringDef) return new zn(t, a, null);

          for (var s in o) {
            var l = o[s];
            if (l.defId === a.defId) return new zn(t, a, l);
          }
        }
      }

      return null;
    }, e.prototype.getEvents = function () {
      var e = this.getCurrentData();
      return Bn(e.eventStore, e);
    }, e.prototype.removeAllEvents = function () {
      this.dispatch({
        type: "REMOVE_ALL_EVENTS"
      });
    }, e.prototype.getEventSources = function () {
      var e = this.getCurrentData(),
          t = e.eventSources,
          n = [];

      for (var r in t) {
        n.push(new L(e, t[r]));
      }

      return n;
    }, e.prototype.getEventSourceById = function (e) {
      var t = this.getCurrentData(),
          n = t.eventSources;

      for (var r in e = String(e), n) {
        if (n[r].publicId === e) return new L(t, n[r]);
      }

      return null;
    }, e.prototype.addEventSource = function (e) {
      var t = this.getCurrentData();
      if (e instanceof L) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
      var n = Un(e, t);
      return n ? (this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [n]
      }), new L(t, n)) : null;
    }, e.prototype.removeAllEventSources = function () {
      this.dispatch({
        type: "REMOVE_ALL_EVENT_SOURCES"
      });
    }, e.prototype.refetchEvents = function () {
      this.dispatch({
        type: "FETCH_EVENT_SOURCES"
      });
    }, e.prototype.scrollToTime = function (e) {
      var t = Ye(e);
      t && this.trigger("_scrollRequest", {
        time: t
      });
    }, e;
  }(),
      zn = function () {
    function e(e, t, n) {
      this._context = e, this._def = t, this._instance = n || null;
    }

    return e.prototype.setProp = function (e, t) {
      var n, r;
      if (e in jt) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");else if (e in Bt) t = Bt[e](t), this.mutate({
        standardProps: (n = {}, n[e] = t, n)
      });else if (e in Lt) {
        var o = Lt[e](t);
        "color" === e ? o = {
          backgroundColor: t,
          borderColor: t
        } : "editable" === e ? o = {
          startEditable: t,
          durationEditable: t
        } : ((r = {})[e] = t, o = r), this.mutate({
          standardProps: {
            ui: o
          }
        });
      } else console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.");
    }, e.prototype.setExtendedProp = function (e, t) {
      var n;
      this.mutate({
        extendedProps: (n = {}, n[e] = t, n)
      });
    }, e.prototype.setStart = function (e, t) {
      void 0 === t && (t = {});
      var n = this._context.dateEnv,
          r = n.createMarker(e);

      if (r && this._instance) {
        var o = Qt(this._instance.range.start, r, n, t.granularity);
        t.maintainDuration ? this.mutate({
          datesDelta: o
        }) : this.mutate({
          startDelta: o
        });
      }
    }, e.prototype.setEnd = function (e, t) {
      void 0 === t && (t = {});
      var n,
          r = this._context.dateEnv;
      if ((null == e || (n = r.createMarker(e))) && this._instance) if (n) {
        var o = Qt(this._instance.range.end, n, r, t.granularity);
        this.mutate({
          endDelta: o
        });
      } else this.mutate({
        standardProps: {
          hasEnd: !1
        }
      });
    }, e.prototype.setDates = function (e, t, n) {
      void 0 === n && (n = {});
      var r,
          o,
          i,
          a = this._context.dateEnv,
          s = {
        allDay: n.allDay
      },
          l = a.createMarker(e);

      if (l && (null == t || (r = a.createMarker(t))) && this._instance) {
        var u = this._instance.range;
        !0 === n.allDay && (u = Kt(u));
        var c = Qt(u.start, l, a, n.granularity);

        if (r) {
          var d = Qt(u.end, r, a, n.granularity);
          i = d, (o = c).years === i.years && o.months === i.months && o.days === i.days && o.milliseconds === i.milliseconds ? this.mutate({
            datesDelta: c,
            standardProps: s
          }) : this.mutate({
            startDelta: c,
            endDelta: d,
            standardProps: s
          });
        } else s.hasEnd = !1, this.mutate({
          datesDelta: c,
          standardProps: s
        });
      }
    }, e.prototype.moveStart = function (e) {
      var t = Ye(e);
      t && this.mutate({
        startDelta: t
      });
    }, e.prototype.moveEnd = function (e) {
      var t = Ye(e);
      t && this.mutate({
        endDelta: t
      });
    }, e.prototype.moveDates = function (e) {
      var t = Ye(e);
      t && this.mutate({
        datesDelta: t
      });
    }, e.prototype.setAllDay = function (e, t) {
      void 0 === t && (t = {});
      var n = {
        allDay: e
      },
          r = t.maintainDuration;
      null == r && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = r), this.mutate({
        standardProps: n
      });
    }, e.prototype.formatRange = function (e) {
      var t = this._context.dateEnv,
          n = this._instance,
          r = St(e);
      return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
        forcedStartTzo: n.forcedStartTzo,
        forcedEndTzo: n.forcedEndTzo
      }) : t.format(n.range.start, r, {
        forcedTzo: n.forcedStartTzo
      });
    }, e.prototype.mutate = function (t) {
      var n = this._instance;

      if (n) {
        var r = this._def,
            o = this._context,
            i = Nt(o.getCurrentData().eventStore, n.instanceId);
        i = Pn(i, {
          "": {
            display: "",
            startEditable: !0,
            durationEditable: !0,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: []
          }
        }, t, o);
        var a = new e(o, r, n);
        this._def = i.defs[r.defId], this._instance = i.instances[n.instanceId], o.dispatch({
          type: "MERGE_EVENTS",
          eventStore: i
        }), o.emitter.trigger("eventChange", {
          oldEvent: a,
          event: this,
          relatedEvents: Bn(i, o, n),
          revert: function revert() {
            o.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: i
            });
          }
        });
      }
    }, e.prototype.remove = function () {
      var e = this._context,
          t = Fn(this);
      e.dispatch({
        type: "REMOVE_EVENTS",
        eventStore: t
      }), e.emitter.trigger("eventRemove", {
        event: this,
        relatedEvents: [],
        revert: function revert() {
          e.dispatch({
            type: "MERGE_EVENTS",
            eventStore: t
          });
        }
      });
    }, Object.defineProperty(e.prototype, "source", {
      get: function get() {
        var e = this._def.sourceId;
        return e ? new L(this._context, this._context.getCurrentData().eventSources[e]) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "start", {
      get: function get() {
        return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "end", {
      get: function get() {
        return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "startStr", {
      get: function get() {
        var e = this._instance;
        return e ? this._context.dateEnv.formatIso(e.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedStartTzo
        }) : "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "endStr", {
      get: function get() {
        var e = this._instance;
        return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedEndTzo
        }) : "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "id", {
      get: function get() {
        return this._def.publicId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "groupId", {
      get: function get() {
        return this._def.groupId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "allDay", {
      get: function get() {
        return this._def.allDay;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "title", {
      get: function get() {
        return this._def.title;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "url", {
      get: function get() {
        return this._def.url;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "display", {
      get: function get() {
        return this._def.ui.display || "auto";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "startEditable", {
      get: function get() {
        return this._def.ui.startEditable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "durationEditable", {
      get: function get() {
        return this._def.ui.durationEditable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "constraint", {
      get: function get() {
        return this._def.ui.constraints[0] || null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "overlap", {
      get: function get() {
        return this._def.ui.overlap;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "allow", {
      get: function get() {
        return this._def.ui.allows[0] || null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "backgroundColor", {
      get: function get() {
        return this._def.ui.backgroundColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "borderColor", {
      get: function get() {
        return this._def.ui.borderColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "textColor", {
      get: function get() {
        return this._def.ui.textColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "classNames", {
      get: function get() {
        return this._def.ui.classNames;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "extendedProps", {
      get: function get() {
        return this._def.extendedProps;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toPlainObject = function (e) {
      void 0 === e && (e = {});
      var t = this._def,
          n = t.ui,
          o = this.startStr,
          i = this.endStr,
          a = {};
      return t.title && (a.title = t.title), o && (a.start = o), i && (a.end = i), t.publicId && (a.id = t.publicId), t.groupId && (a.groupId = t.groupId), t.url && (a.url = t.url), n.display && "auto" !== n.display && (a.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? a.color = n.backgroundColor : (n.backgroundColor && (a.backgroundColor = n.backgroundColor), n.borderColor && (a.borderColor = n.borderColor)), n.textColor && (a.textColor = n.textColor), n.classNames.length && (a.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? _r2(a, t.extendedProps) : a.extendedProps = t.extendedProps), a;
    }, e.prototype.toJSON = function () {
      return this.toPlainObject();
    }, e;
  }();

  function Fn(e) {
    var t,
        n,
        r = e._def,
        o = e._instance;
    return {
      defs: (t = {}, t[r.defId] = r, t),
      instances: o ? (n = {}, n[o.instanceId] = o, n) : {}
    };
  }

  function Bn(e, t, n) {
    var r = e.defs,
        o = e.instances,
        i = [],
        a = n ? n.instanceId : "";

    for (var s in o) {
      var l = o[s],
          u = r[l.defId];
      l.instanceId !== a && i.push(new zn(t, u, l));
    }

    return i;
  }

  var jn = {};

  var Gn,
      qn = function () {
    function e() {}

    return e.prototype.getMarkerYear = function (e) {
      return e.getUTCFullYear();
    }, e.prototype.getMarkerMonth = function (e) {
      return e.getUTCMonth();
    }, e.prototype.getMarkerDay = function (e) {
      return e.getUTCDate();
    }, e.prototype.arrayToMarker = function (e) {
      return Me(e);
    }, e.prototype.markerToArray = function (e) {
      return ke(e);
    }, e;
  }();

  Gn = qn, jn["gregory"] = Gn;
  var Yn = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

  function Zn(e) {
    var t = Yn.exec(e);

    if (t) {
      var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));

      if (xe(n)) {
        var r = null;
        return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
          marker: n,
          isTimeUnspecified: !t[6],
          timeZoneOffset: r
        };
      }
    }

    return null;
  }

  var Xn = function () {
    function e(e) {
      var t = this.timeZone = e.timeZone,
          n = "local" !== t && "UTC" !== t;
      e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = function (e) {
        return new jn[e]();
      }(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
    }

    return e.prototype.createMarker = function (e) {
      var t = this.createMarkerMeta(e);
      return null === t ? null : t.marker;
    }, e.prototype.createNowMarker = function () {
      return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : Me(Re(new Date()));
    }, e.prototype.createMarkerMeta = function (e) {
      if ("string" == typeof e) return this.parse(e);
      var t = null;
      return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = Me(e)), null !== t && xe(t) ? {
        marker: t,
        isTimeUnspecified: !1,
        forcedTzo: null
      } : null;
    }, e.prototype.parse = function (e) {
      var t = Zn(e);
      if (null === t) return null;
      var n = t.marker,
          r = null;
      return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), {
        marker: n,
        isTimeUnspecified: t.isTimeUnspecified,
        forcedTzo: r
      };
    }, e.prototype.getYear = function (e) {
      return this.calendarSystem.getMarkerYear(e);
    }, e.prototype.getMonth = function (e) {
      return this.calendarSystem.getMarkerMonth(e);
    }, e.prototype.add = function (e, t) {
      var n = this.calendarSystem.markerToArray(e);
      return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n);
    }, e.prototype.subtract = function (e, t) {
      var n = this.calendarSystem.markerToArray(e);
      return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n);
    }, e.prototype.addYears = function (e, t) {
      var n = this.calendarSystem.markerToArray(e);
      return n[0] += t, this.calendarSystem.arrayToMarker(n);
    }, e.prototype.addMonths = function (e, t) {
      var n = this.calendarSystem.markerToArray(e);
      return n[1] += t, this.calendarSystem.arrayToMarker(n);
    }, e.prototype.diffWholeYears = function (e, t) {
      var n = this.calendarSystem;
      return _e(e) === _e(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null;
    }, e.prototype.diffWholeMonths = function (e, t) {
      var n = this.calendarSystem;
      return _e(e) === _e(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null;
    }, e.prototype.greatestWholeUnit = function (e, t) {
      var n = this.diffWholeYears(e, t);
      return null !== n ? {
        unit: "year",
        value: n
      } : null !== (n = this.diffWholeMonths(e, t)) ? {
        unit: "month",
        value: n
      } : null !== (n = Se(e, t)) ? {
        unit: "week",
        value: n
      } : null !== (n = De(e, t)) ? {
        unit: "day",
        value: n
      } : de(n = function (e, t) {
        return (t.valueOf() - e.valueOf()) / 36e5;
      }(e, t)) ? {
        unit: "hour",
        value: n
      } : de(n = function (e, t) {
        return (t.valueOf() - e.valueOf()) / 6e4;
      }(e, t)) ? {
        unit: "minute",
        value: n
      } : de(n = function (e, t) {
        return (t.valueOf() - e.valueOf()) / 1e3;
      }(e, t)) ? {
        unit: "second",
        value: n
      } : {
        unit: "millisecond",
        value: t.valueOf() - e.valueOf()
      };
    }, e.prototype.countDurationsBetween = function (e, t, n) {
      var r;
      return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (Je(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / function (e) {
        return Je(e) / 30;
      }(n) : n.days && null !== (r = De(e, t)) ? r / Je(n) : (t.valueOf() - e.valueOf()) / $e(n);
    }, e.prototype.startOf = function (e, t) {
      return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? be(e) : "hour" === t ? function (e) {
        return Me([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()]);
      }(e) : "minute" === t ? function (e) {
        return Me([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()]);
      }(e) : "second" === t ? function (e) {
        return Me([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()]);
      }(e) : void 0;
    }, e.prototype.startOfYear = function (e) {
      return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)]);
    }, e.prototype.startOfMonth = function (e) {
      return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)]);
    }, e.prototype.startOfWeek = function (e) {
      return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7]);
    }, e.prototype.computeWeekNumber = function (e) {
      return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function (e, t, n) {
        var r = e.getUTCFullYear(),
            o = Ce(e, r, t, n);
        if (o < 1) return Ce(e, r - 1, t, n);
        var i = Ce(e, r + 1, t, n);
        return i >= 1 ? Math.min(o, i) : o;
      }(e, this.weekDow, this.weekDoy);
    }, e.prototype.format = function (e, t, n) {
      return void 0 === n && (n = {}), t.format({
        marker: e,
        timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
      }, this);
    }, e.prototype.formatRange = function (e, t, n, r) {
      return void 0 === r && (r = {}), r.isEndExclusive && (t = ge(t, -1)), n.formatRange({
        marker: e,
        timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
      }, {
        marker: t,
        timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
      }, this, r.defaultSeparator);
    }, e.prototype.formatIso = function (e, t) {
      void 0 === t && (t = {});
      var n = null;
      return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), function (e, t, n) {
        void 0 === n && (n = !1);
        var r = e.toISOString();
        return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", rt(t, !0)))), r;
      }(e, n, t.omitTime);
    }, e.prototype.timestampToMarker = function (e) {
      return "local" === this.timeZone ? Me(Re(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? Me(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e);
    }, e.prototype.offsetForMarker = function (e) {
      return "local" === this.timeZone ? -Te(ke(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(ke(e)) : null;
    }, e.prototype.toDate = function (e, t) {
      return "local" === this.timeZone ? Te(ke(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(ke(e)) * 60) : new Date(e.valueOf() - (t || 0));
    }, e;
  }(),
      Kn = [],
      Jn = {
    code: "en",
    week: {
      dow: 0,
      doy: 4
    },
    direction: "ltr",
    buttonText: {
      prev: "prev",
      next: "next",
      prevYear: "prev year",
      nextYear: "next year",
      year: "year",
      today: "today",
      month: "month",
      week: "week",
      day: "day",
      list: "list"
    },
    weekText: "W",
    allDayText: "all-day",
    moreLinkText: "more",
    noEventsText: "No events to display"
  };

  function $n(e) {
    for (var t = e.length > 0 ? e[0].code : "en", n = Kn.concat(e), r = {
      en: Jn
    }, o = 0, i = n; o < i.length; o++) {
      var a = i[o];
      r[a.code] = a;
    }

    return {
      map: r,
      defaultCode: t
    };
  }

  function Qn(e, t) {
    return "object" != _typeof(e) || Array.isArray(e) ? function (e, t) {
      var n = [].concat(e || []),
          r = function (e, t) {
        for (var n = 0; n < e.length; n++) {
          for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; o > 0; o--) {
            var i = r.slice(0, o).join("-");
            if (t[i]) return t[i];
          }
        }

        return null;
      }(n, t) || Jn;

      return er(e, n, r);
    }(e, t) : er(e.code, [e.code], e);
  }

  function er(e, t, n) {
    var r = Ne([Jn, n], ["buttonText"]);
    delete r.code;
    var o = r.week;
    return delete r.week, {
      codeArg: e,
      codes: t,
      week: o,
      simpleNumberFormat: new Intl.NumberFormat(e),
      options: r
    };
  }

  function tr(e) {
    var t = Qn(e.locale || "en", $n([]).map);
    return new Xn(_r2(_r2({
      timeZone: bt.timeZone,
      calendarSystem: "gregory"
    }, e), {
      locale: t
    }));
  }

  var nr,
      rr = {
    startTime: "09:00",
    endTime: "17:00",
    daysOfWeek: [1, 2, 3, 4, 5],
    display: "inverse-background",
    classNames: "fc-non-business",
    groupId: "_businessHours"
  };

  function or(e, t) {
    return It(function (e) {
      var t;
      t = !0 === e ? [{}] : Array.isArray(e) ? e.filter(function (e) {
        return e.daysOfWeek;
      }) : "object" == _typeof(e) && e ? [e] : [];
      return t = t.map(function (e) {
        return _r2(_r2({}, rr), e);
      });
    }(e), null, t);
  }

  function ir(e, t) {
    return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom;
  }

  function ar(e, t) {
    var n = {
      left: Math.max(e.left, t.left),
      right: Math.min(e.right, t.right),
      top: Math.max(e.top, t.top),
      bottom: Math.min(e.bottom, t.bottom)
    };
    return n.left < n.right && n.top < n.bottom && n;
  }

  function sr(e, t) {
    return {
      left: Math.min(Math.max(e.left, t.left), t.right),
      top: Math.min(Math.max(e.top, t.top), t.bottom)
    };
  }

  function lr(e) {
    return {
      left: (e.left + e.right) / 2,
      top: (e.top + e.bottom) / 2
    };
  }

  function ur(e, t) {
    return {
      left: e.left - t.left,
      top: e.top - t.top
    };
  }

  function cr() {
    return null == nr && (nr = function () {
      if ("undefined" == typeof document) return !0;
      var e = document.createElement("div");
      e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
      var t = e.querySelector("div").offsetHeight > 0;
      return document.body.removeChild(e), t;
    }()), nr;
  }

  var dr = {
    defs: {},
    instances: {}
  },
      pr = function () {
    function e() {
      this.getKeysForEventDefs = it(this._getKeysForEventDefs), this.splitDateSelection = it(this._splitDateSpan), this.splitEventStore = it(this._splitEventStore), this.splitIndividualUi = it(this._splitIndividualUi), this.splitEventDrag = it(this._splitInteraction), this.splitEventResize = it(this._splitInteraction), this.eventUiBuilders = {};
    }

    return e.prototype.splitProps = function (e) {
      var t = this,
          n = this.getKeyInfo(e),
          r = this.getKeysForEventDefs(e.eventStore),
          o = this.splitDateSelection(e.dateSelection),
          i = this.splitIndividualUi(e.eventUiBases, r),
          a = this.splitEventStore(e.eventStore, r),
          s = this.splitEventDrag(e.eventDrag),
          l = this.splitEventResize(e.eventResize),
          u = {};

      for (var c in this.eventUiBuilders = Oe(n, function (e, n) {
        return t.eventUiBuilders[n] || it(fr);
      }), n) {
        var d = n[c],
            p = a[c] || dr,
            f = this.eventUiBuilders[c];
        u[c] = {
          businessHours: d.businessHours || e.businessHours,
          dateSelection: o[c] || null,
          eventStore: p,
          eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
          eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
          eventDrag: s[c] || null,
          eventResize: l[c] || null
        };
      }

      return u;
    }, e.prototype._splitDateSpan = function (e) {
      var t = {};
      if (e) for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) {
        t[r[n]] = e;
      }
      return t;
    }, e.prototype._getKeysForEventDefs = function (e) {
      var t = this;
      return Oe(e.defs, function (e) {
        return t.getKeysForEventDef(e);
      });
    }, e.prototype._splitEventStore = function (e, t) {
      var n = e.defs,
          r = e.instances,
          o = {};

      for (var i in n) {
        for (var a = 0, s = t[i]; a < s.length; a++) {
          o[p = s[a]] || (o[p] = {
            defs: {},
            instances: {}
          }), o[p].defs[i] = n[i];
        }
      }

      for (var l in r) {
        for (var u = r[l], c = 0, d = t[u.defId]; c < d.length; c++) {
          var p;
          o[p = d[c]] && (o[p].instances[l] = u);
        }
      }

      return o;
    }, e.prototype._splitIndividualUi = function (e, t) {
      var n = {};

      for (var r in e) {
        if (r) for (var o = 0, i = t[r]; o < i.length; o++) {
          var a = i[o];
          n[a] || (n[a] = {}), n[a][r] = e[r];
        }
      }

      return n;
    }, e.prototype._splitInteraction = function (e) {
      var t = {};

      if (e) {
        var n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
            r = this._getKeysForEventDefs(e.mutatedEvents),
            o = this._splitEventStore(e.mutatedEvents, r),
            i = function i(r) {
          t[r] || (t[r] = {
            affectedEvents: n[r] || dr,
            mutatedEvents: o[r] || dr,
            isEvent: e.isEvent
          });
        };

        for (var a in n) {
          i(a);
        }

        for (var a in o) {
          i(a);
        }
      }

      return t;
    }, e;
  }();

  function fr(e, t, n) {
    var o = [];
    e && o.push(e), t && o.push(t);
    var i = {
      "": Vt(o)
    };
    return n && _r2(i, n), i;
  }

  function hr(e, t, n, r) {
    return {
      dow: e.getUTCDay(),
      isDisabled: Boolean(r && !sn(r.activeRange, e)),
      isOther: Boolean(r && !sn(r.currentRange, e)),
      isToday: Boolean(t && sn(t, e)),
      isPast: Boolean(n ? e < n : !!t && e < t.start),
      isFuture: Boolean(n ? e > n : !!t && e >= t.end)
    };
  }

  function vr(e, t) {
    var n = ["fc-day", "fc-day-" + fe[e.dow]];
    return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n;
  }

  function gr(e, t) {
    return void 0 === t && (t = "day"), JSON.stringify({
      date: tt(e),
      type: t
    });
  }

  var mr,
      yr = null;

  function Er() {
    return null === yr && (yr = function () {
      var e = document.createElement("div");
      j(e, {
        position: "absolute",
        top: -1e3,
        left: 0,
        border: 0,
        padding: 0,
        overflow: "scroll",
        direction: "rtl"
      }), e.innerHTML = "<div></div>", document.body.appendChild(e);
      var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
      return W(e), t;
    }()), yr;
  }

  function Sr() {
    return mr || (mr = function () {
      var e = document.createElement("div");
      e.style.overflow = "scroll", document.body.appendChild(e);
      var t = Dr(e);
      return document.body.removeChild(e), t;
    }()), mr;
  }

  function Dr(e) {
    return {
      x: e.offsetHeight - e.clientHeight,
      y: e.offsetWidth - e.clientWidth
    };
  }

  function br(e, t) {
    void 0 === t && (t = !1);
    var n = window.getComputedStyle(e),
        r = parseInt(n.borderLeftWidth, 10) || 0,
        o = parseInt(n.borderRightWidth, 10) || 0,
        i = parseInt(n.borderTopWidth, 10) || 0,
        a = parseInt(n.borderBottomWidth, 10) || 0,
        s = Dr(e),
        l = s.y - r - o,
        u = {
      borderLeft: r,
      borderRight: o,
      borderTop: i,
      borderBottom: a,
      scrollbarBottom: s.x - i - a,
      scrollbarLeft: 0,
      scrollbarRight: 0
    };
    return Er() && "rtl" === n.direction ? u.scrollbarLeft = l : u.scrollbarRight = l, t && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u;
  }

  function Cr(e, t, n) {
    void 0 === t && (t = !1);
    var r = n ? e.getBoundingClientRect() : wr(e),
        o = br(e, t),
        i = {
      left: r.left + o.borderLeft + o.scrollbarLeft,
      right: r.right - o.borderRight - o.scrollbarRight,
      top: r.top + o.borderTop,
      bottom: r.bottom - o.borderBottom - o.scrollbarBottom
    };
    return t && (i.left += o.paddingLeft, i.right -= o.paddingRight, i.top += o.paddingTop, i.bottom -= o.paddingBottom), i;
  }

  function wr(e) {
    var t = e.getBoundingClientRect();
    return {
      left: t.left + window.pageXOffset,
      top: t.top + window.pageYOffset,
      right: t.right + window.pageXOffset,
      bottom: t.bottom + window.pageYOffset
    };
  }

  function Rr(e) {
    for (var t = []; e instanceof HTMLElement;) {
      var n = window.getComputedStyle(e);
      if ("fixed" === n.position) break;
      /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode;
    }

    return t;
  }

  function Tr(e, t, n) {
    var r = !1,
        o = function o() {
      r || (r = !0, t.apply(this, arguments));
    },
        i = function i() {
      r || (r = !0, n && n.apply(this, arguments));
    },
        a = e(o, i);

    a && "function" == typeof a.then && a.then(o, i);
  }

  var kr = function () {
    function e() {
      this.handlers = {}, this.thisContext = null;
    }

    return e.prototype.setThisContext = function (e) {
      this.thisContext = e;
    }, e.prototype.setOptions = function (e) {
      this.options = e;
    }, e.prototype.on = function (e, t) {
      !function (e, t, n) {
        (e[t] || (e[t] = [])).push(n);
      }(this.handlers, e, t);
    }, e.prototype.off = function (e, t) {
      !function (e, t, n) {
        n ? e[t] && (e[t] = e[t].filter(function (e) {
          return e !== n;
        })) : delete e[t];
      }(this.handlers, e, t);
    }, e.prototype.trigger = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }

      for (var r = this.handlers[e] || [], o = this.options && this.options[e], i = [].concat(o || [], r), a = 0, s = i; a < s.length; a++) {
        var l = s[a];
        l.apply(this.thisContext, t);
      }
    }, e.prototype.hasHandlers = function (e) {
      return this.handlers[e] && this.handlers[e].length || this.options && this.options[e];
    }, e;
  }();

  var Mr = function () {
    function e(e, t, n, r) {
      this.els = t;
      var o = this.originClientRect = e.getBoundingClientRect();
      n && this.buildElHorizontals(o.left), r && this.buildElVerticals(o.top);
    }

    return e.prototype.buildElHorizontals = function (e) {
      for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
        var i = o[r].getBoundingClientRect();
        t.push(i.left - e), n.push(i.right - e);
      }

      this.lefts = t, this.rights = n;
    }, e.prototype.buildElVerticals = function (e) {
      for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
        var i = o[r].getBoundingClientRect();
        t.push(i.top - e), n.push(i.bottom - e);
      }

      this.tops = t, this.bottoms = n;
    }, e.prototype.leftToIndex = function (e) {
      var t,
          n = this.lefts,
          r = this.rights,
          o = n.length;

      for (t = 0; t < o; t++) {
        if (e >= n[t] && e < r[t]) return t;
      }
    }, e.prototype.topToIndex = function (e) {
      var t,
          n = this.tops,
          r = this.bottoms,
          o = n.length;

      for (t = 0; t < o; t++) {
        if (e >= n[t] && e < r[t]) return t;
      }
    }, e.prototype.getWidth = function (e) {
      return this.rights[e] - this.lefts[e];
    }, e.prototype.getHeight = function (e) {
      return this.bottoms[e] - this.tops[e];
    }, e;
  }(),
      xr = function () {
    function e() {}

    return e.prototype.getMaxScrollTop = function () {
      return this.getScrollHeight() - this.getClientHeight();
    }, e.prototype.getMaxScrollLeft = function () {
      return this.getScrollWidth() - this.getClientWidth();
    }, e.prototype.canScrollVertically = function () {
      return this.getMaxScrollTop() > 0;
    }, e.prototype.canScrollHorizontally = function () {
      return this.getMaxScrollLeft() > 0;
    }, e.prototype.canScrollUp = function () {
      return this.getScrollTop() > 0;
    }, e.prototype.canScrollDown = function () {
      return this.getScrollTop() < this.getMaxScrollTop();
    }, e.prototype.canScrollLeft = function () {
      return this.getScrollLeft() > 0;
    }, e.prototype.canScrollRight = function () {
      return this.getScrollLeft() < this.getMaxScrollLeft();
    }, e;
  }(),
      _r = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      return n.el = t, n;
    }

    return n(t, e), t.prototype.getScrollTop = function () {
      return this.el.scrollTop;
    }, t.prototype.getScrollLeft = function () {
      return this.el.scrollLeft;
    }, t.prototype.setScrollTop = function (e) {
      this.el.scrollTop = e;
    }, t.prototype.setScrollLeft = function (e) {
      this.el.scrollLeft = e;
    }, t.prototype.getScrollWidth = function () {
      return this.el.scrollWidth;
    }, t.prototype.getScrollHeight = function () {
      return this.el.scrollHeight;
    }, t.prototype.getClientHeight = function () {
      return this.el.clientHeight;
    }, t.prototype.getClientWidth = function () {
      return this.el.clientWidth;
    }, t;
  }(xr),
      Ir = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.getScrollTop = function () {
      return window.pageYOffset;
    }, t.prototype.getScrollLeft = function () {
      return window.pageXOffset;
    }, t.prototype.setScrollTop = function (e) {
      window.scroll(window.pageXOffset, e);
    }, t.prototype.setScrollLeft = function (e) {
      window.scroll(e, window.pageYOffset);
    }, t.prototype.getScrollWidth = function () {
      return document.documentElement.scrollWidth;
    }, t.prototype.getScrollHeight = function () {
      return document.documentElement.scrollHeight;
    }, t.prototype.getClientHeight = function () {
      return document.documentElement.clientHeight;
    }, t.prototype.getClientWidth = function () {
      return document.documentElement.clientWidth;
    }, t;
  }(xr),
      Pr = function () {
    function e(e) {
      this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
    }

    return e.prototype.setIconOverride = function (e) {
      var t, n;

      if ("object" == _typeof(e) && e) {
        for (n in t = _r2({}, this.iconClasses), e) {
          t[n] = this.applyIconOverridePrefix(e[n]);
        }

        this.iconClasses = t;
      } else !1 === e && (this.iconClasses = {});
    }, e.prototype.applyIconOverridePrefix = function (e) {
      var t = this.iconOverridePrefix;
      return t && 0 !== e.indexOf(t) && (e = t + e), e;
    }, e.prototype.getClass = function (e) {
      return this.classes[e] || "";
    }, e.prototype.getIconClass = function (e, t) {
      var n;
      return (n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e]) ? this.baseIconClass + " " + n : "";
    }, e.prototype.getCustomButtonIconClass = function (e) {
      var t;
      return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : "";
    }, e;
  }();

  if (Pr.prototype.classes = {}, Pr.prototype.iconClasses = {}, Pr.prototype.baseIconClass = "", Pr.prototype.iconOverridePrefix = "", "undefined" == typeof FullCalendarVDom) throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");

  var Nr = FullCalendarVDom.Component,
      Hr = FullCalendarVDom.createElement,
      Or = FullCalendarVDom.render,
      Ar = FullCalendarVDom.createRef,
      Ur = FullCalendarVDom.Fragment,
      Lr = FullCalendarVDom.createContext,
      Wr = FullCalendarVDom.flushToDom,
      Vr = function () {
    function e(e, t, n) {
      var o = this;
      this.execFunc = e, this.emitter = t, this.scrollTime = n, this.handleScrollRequest = function (e) {
        o.queuedRequest = _r2({}, o.queuedRequest || {}, e), o.drain();
      }, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
    }

    return e.prototype.detach = function () {
      this.emitter.off("_scrollRequest", this.handleScrollRequest);
    }, e.prototype.update = function (e) {
      e ? this.fireInitialScroll() : this.drain();
    }, e.prototype.fireInitialScroll = function () {
      this.handleScrollRequest({
        time: this.scrollTime
      });
    }, e.prototype.drain = function () {
      this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
    }, e;
  }(),
      zr = Lr({});

  function Fr(e, t, n, r, o, i, a, s, l, u, c, d, p) {
    return {
      dateEnv: o,
      options: n,
      pluginHooks: a,
      emitter: u,
      dispatch: s,
      getCurrentData: l,
      calendarApi: c,
      viewSpec: e,
      viewApi: t,
      dateProfileGenerator: r,
      theme: i,
      isRtl: "rtl" === n.direction,
      addResizeHandler: function addResizeHandler(e) {
        u.on("_resize", e);
      },
      removeResizeHandler: function removeResizeHandler(e) {
        u.off("_resize", e);
      },
      createScrollResponder: function createScrollResponder(e) {
        return new Vr(e, u, Ye(n.scrollTime));
      },
      registerInteractiveComponent: d,
      unregisterInteractiveComponent: p
    };
  }

  var Br = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.shouldComponentUpdate = function (e, t) {
      return this.debug && console.log(We(e, this.props), We(t, this.state)), !Ve(this.props, e, this.propEquality) || !Ve(this.state, t, this.stateEquality);
    }, t.addPropsEquality = Gr, t.addStateEquality = qr, t.contextType = zr, t;
  }(Nr);

  Br.prototype.propEquality = {}, Br.prototype.stateEquality = {};

  var jr = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.contextType = zr, t;
  }(Br);

  function Gr(e) {
    var t = Object.create(this.prototype.propEquality);
    _r2(t, e), this.prototype.propEquality = t;
  }

  function qr(e) {
    var t = Object.create(this.prototype.stateEquality);
    _r2(t, e), this.prototype.stateEquality = t;
  }

  function Yr(e, t) {
    "function" == typeof e ? e(t) : e && (e.current = t);
  }

  function Zr(e, t, n, r, o) {
    switch (t.type) {
      case "RECEIVE_EVENTS":
        return function (e, t, n, r, o, i) {
          if (t && n === t.latestFetchId) {
            var a = It(function (e, t, n) {
              var r = n.options.eventDataTransform,
                  o = t ? t.eventDataTransform : null;
              o && (e = Xr(e, o));
              r && (e = Xr(e, r));
              return e;
            }(o, t, i), t, i);
            return r && (a = Be(a, r, i)), Ot(Kr(e, t.sourceId), a);
          }

          return e;
        }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);

      case "ADD_EVENTS":
        return function (e, t, n, r) {
          n && (t = Be(t, n, r));
          return Ot(e, t);
        }(e, t.eventStore, r ? r.activeRange : null, o);

      case "MERGE_EVENTS":
        return Ot(e, t.eventStore);

      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return r ? Be(e, r.activeRange, o) : e;

      case "REMOVE_EVENTS":
        return function (e, t) {
          var n = e.defs,
              r = e.instances,
              o = {},
              i = {};

          for (var a in n) {
            t.defs[a] || (o[a] = n[a]);
          }

          for (var s in r) {
            !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
          }

          return {
            defs: o,
            instances: i
          };
        }(e, t.eventStore);

      case "REMOVE_EVENT_SOURCE":
        return Kr(e, t.sourceId);

      case "REMOVE_ALL_EVENT_SOURCES":
        return At(e, function (e) {
          return !e.sourceId;
        });

      case "REMOVE_ALL_EVENTS":
        return {
          defs: {},
          instances: {}
        };

      default:
        return e;
    }
  }

  function Xr(e, t) {
    var n;

    if (t) {
      n = [];

      for (var r = 0, o = e; r < o.length; r++) {
        var i = o[r],
            a = t(i);
        a ? n.push(a) : null == a && n.push(i);
      }
    } else n = e;

    return n;
  }

  function Kr(e, t) {
    return At(e, function (e) {
      return e.sourceId !== t;
    });
  }

  function Jr(e, t) {
    return $r({
      eventDrag: e
    }, t);
  }

  function $r(e, t) {
    var n = t.getCurrentData(),
        o = _r2({
      businessHours: n.businessHours,
      dateSelection: "",
      eventStore: n.eventStore,
      eventUiBases: n.eventUiBases,
      eventSelection: "",
      eventDrag: null,
      eventResize: null
    }, e);

    return (t.pluginHooks.isPropsValid || Qr)(o, t);
  }

  function Qr(e, t, n, o) {
    return void 0 === n && (n = {}), !(e.eventDrag && !function (e, t, n, o) {
      var i = t.getCurrentData(),
          a = e.eventDrag,
          s = a.mutatedEvents,
          l = s.defs,
          u = s.instances,
          c = pn(l, a.isEvent ? e.eventUiBases : {
        "": i.selectionConfig
      });
      o && (c = Oe(c, o));
      var d = (v = e.eventStore, g = a.affectedEvents.instances, {
        defs: v.defs,
        instances: He(v.instances, function (e) {
          return !g[e.instanceId];
        })
      }),
          p = d.defs,
          f = d.instances,
          h = pn(p, e.eventUiBases);
      var v, g;

      for (var m in u) {
        var y = u[m],
            E = y.range,
            S = c[y.defId],
            D = l[y.defId];
        if (!eo(S.constraints, E, d, e.businessHours, t)) return !1;
        var b = t.options.eventOverlap,
            C = "function" == typeof b ? b : null;

        for (var w in f) {
          var R = f[w];

          if (on(E, R.range)) {
            if (!1 === h[R.defId].overlap && a.isEvent) return !1;
            if (!1 === S.overlap) return !1;
            if (C && !C(new zn(t, p[R.defId], R), new zn(t, D, y))) return !1;
          }
        }

        for (var T = i.eventStore, k = 0, M = S.allows; k < M.length; k++) {
          var x = M[k],
              _ = _r2(_r2({}, n), {
            range: y.range,
            allDay: D.allDay
          }),
              I = T.defs[D.defId],
              P = T.instances[m],
              N = void 0;

          if (N = I ? new zn(t, I, P) : new zn(t, D), !x(_n(_, t), N)) return !1;
        }
      }

      return !0;
    }(e, t, n, o)) && !(e.dateSelection && !function (e, t, n, o) {
      var i = e.eventStore,
          a = i.defs,
          s = i.instances,
          l = e.dateSelection,
          u = l.range,
          c = t.getCurrentData().selectionConfig;
      o && (c = o(c));
      if (!eo(c.constraints, u, i, e.businessHours, t)) return !1;
      var d = t.options.selectOverlap,
          p = "function" == typeof d ? d : null;

      for (var f in s) {
        var h = s[f];

        if (on(u, h.range)) {
          if (!1 === c.overlap) return !1;
          if (p && !p(new zn(t, a[h.defId], h), null)) return !1;
        }
      }

      for (var v = 0, g = c.allows; v < g.length; v++) {
        var m = g[v],
            y = _r2(_r2({}, n), l);

        if (!m(_n(y, t), null)) return !1;
      }

      return !0;
    }(e, t, n, o));
  }

  function eo(e, t, n, r, o) {
    for (var i = 0, a = e; i < a.length; i++) {
      if (!ro(to(a[i], t, n, r, o), t)) return !1;
    }

    return !0;
  }

  function to(e, t, n, r, o) {
    return "businessHours" === e ? no(Be(r, t, o)) : "string" == typeof e ? no(At(n, function (t) {
      return t.groupId === e;
    })) : "object" == _typeof(e) && e ? no(Be(e, t, o)) : [];
  }

  function no(e) {
    var t = e.instances,
        n = [];

    for (var r in t) {
      n.push(t[r].range);
    }

    return n;
  }

  function ro(e, t) {
    for (var n = 0, r = e; n < r.length; n++) {
      if (an(r[n], t)) return !0;
    }

    return !1;
  }

  var oo = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.uid = $(), t;
    }

    return n(t, e), t.prototype.prepareHits = function () {}, t.prototype.queryHit = function (e, t, n, r) {
      return null;
    }, t.prototype.isInteractionValid = function (e) {
      var t = this.props.dateProfile,
          n = e.mutatedEvents.instances;
      if (t) for (var r in n) {
        if (!an(t.validRange, n[r].range)) return !1;
      }
      return Jr(e, this.context);
    }, t.prototype.isDateSelectionValid = function (e) {
      var t,
          n,
          r = this.props.dateProfile;
      return !(r && !an(r.validRange, e.range)) && (t = e, n = this.context, $r({
        dateSelection: t
      }, n));
    }, t.prototype.isValidSegDownEl = function (e) {
      return !this.props.eventDrag && !this.props.eventResize && !V(e, ".fc-event-mirror") && (this.isPopover() || !this.isInPopover(e));
    }, t.prototype.isValidDateDownEl = function (e) {
      return !(V(e, ".fc-event:not(.fc-bg-event)") || V(e, ".fc-daygrid-more-link") || V(e, "a[data-navlink]") || this.isInPopover(e));
    }, t.prototype.isPopover = function () {
      return !1;
    }, t.prototype.isInPopover = function (e) {
      return Boolean(V(e, ".fc-popover"));
    }, t;
  }(jr);

  function io(e) {
    return {
      id: $(),
      deps: e.deps || [],
      reducers: e.reducers || [],
      contextInit: [].concat(e.contextInit || []),
      eventRefiners: e.eventRefiners || {},
      eventDefMemberAdders: e.eventDefMemberAdders || [],
      eventSourceRefiners: e.eventSourceRefiners || {},
      isDraggableTransformers: e.isDraggableTransformers || [],
      eventDragMutationMassagers: e.eventDragMutationMassagers || [],
      eventDefMutationAppliers: e.eventDefMutationAppliers || [],
      dateSelectionTransformers: e.dateSelectionTransformers || [],
      datePointTransforms: e.datePointTransforms || [],
      dateSpanTransforms: e.dateSpanTransforms || [],
      views: e.views || {},
      viewPropsTransformers: e.viewPropsTransformers || [],
      isPropsValid: e.isPropsValid || null,
      externalDefTransforms: e.externalDefTransforms || [],
      eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
      viewContainerAppends: e.viewContainerAppends || [],
      eventDropTransformers: e.eventDropTransformers || [],
      componentInteractions: e.componentInteractions || [],
      calendarInteractions: e.calendarInteractions || [],
      themeClasses: e.themeClasses || {},
      eventSourceDefs: e.eventSourceDefs || [],
      cmdFormatter: e.cmdFormatter,
      recurringTypes: e.recurringTypes || [],
      namedTimeZonedImpl: e.namedTimeZonedImpl,
      initialView: e.initialView || "",
      elementDraggingImpl: e.elementDraggingImpl,
      optionChangeHandlers: e.optionChangeHandlers || {},
      scrollGridImpl: e.scrollGridImpl || null,
      contentTypeHandlers: e.contentTypeHandlers || {},
      listenerRefiners: e.listenerRefiners || {},
      optionRefiners: e.optionRefiners || {},
      propSetHandlers: e.propSetHandlers || {}
    };
  }

  function ao() {
    var e,
        t = [],
        n = [];
    return function (o, i) {
      return e && ot(o, t) && ot(i, n) || (e = function (e, t) {
        var n = {},
            o = {
          reducers: [],
          contextInit: [],
          eventRefiners: {},
          eventDefMemberAdders: [],
          eventSourceRefiners: {},
          isDraggableTransformers: [],
          eventDragMutationMassagers: [],
          eventDefMutationAppliers: [],
          dateSelectionTransformers: [],
          datePointTransforms: [],
          dateSpanTransforms: [],
          views: {},
          viewPropsTransformers: [],
          isPropsValid: null,
          externalDefTransforms: [],
          eventResizeJoinTransforms: [],
          viewContainerAppends: [],
          eventDropTransformers: [],
          componentInteractions: [],
          calendarInteractions: [],
          themeClasses: {},
          eventSourceDefs: [],
          cmdFormatter: null,
          recurringTypes: [],
          namedTimeZonedImpl: null,
          initialView: "",
          elementDraggingImpl: null,
          optionChangeHandlers: {},
          scrollGridImpl: null,
          contentTypeHandlers: {},
          listenerRefiners: {},
          optionRefiners: {},
          propSetHandlers: {}
        };

        function i(e) {
          for (var t = 0, a = e; t < a.length; t++) {
            var s = a[t];
            n[s.id] || (n[s.id] = !0, i(s.deps), u = s, o = {
              reducers: (l = o).reducers.concat(u.reducers),
              contextInit: l.contextInit.concat(u.contextInit),
              eventRefiners: _r2(_r2({}, l.eventRefiners), u.eventRefiners),
              eventDefMemberAdders: l.eventDefMemberAdders.concat(u.eventDefMemberAdders),
              eventSourceRefiners: _r2(_r2({}, l.eventSourceRefiners), u.eventSourceRefiners),
              isDraggableTransformers: l.isDraggableTransformers.concat(u.isDraggableTransformers),
              eventDragMutationMassagers: l.eventDragMutationMassagers.concat(u.eventDragMutationMassagers),
              eventDefMutationAppliers: l.eventDefMutationAppliers.concat(u.eventDefMutationAppliers),
              dateSelectionTransformers: l.dateSelectionTransformers.concat(u.dateSelectionTransformers),
              datePointTransforms: l.datePointTransforms.concat(u.datePointTransforms),
              dateSpanTransforms: l.dateSpanTransforms.concat(u.dateSpanTransforms),
              views: _r2(_r2({}, l.views), u.views),
              viewPropsTransformers: l.viewPropsTransformers.concat(u.viewPropsTransformers),
              isPropsValid: u.isPropsValid || l.isPropsValid,
              externalDefTransforms: l.externalDefTransforms.concat(u.externalDefTransforms),
              eventResizeJoinTransforms: l.eventResizeJoinTransforms.concat(u.eventResizeJoinTransforms),
              viewContainerAppends: l.viewContainerAppends.concat(u.viewContainerAppends),
              eventDropTransformers: l.eventDropTransformers.concat(u.eventDropTransformers),
              calendarInteractions: l.calendarInteractions.concat(u.calendarInteractions),
              componentInteractions: l.componentInteractions.concat(u.componentInteractions),
              themeClasses: _r2(_r2({}, l.themeClasses), u.themeClasses),
              eventSourceDefs: l.eventSourceDefs.concat(u.eventSourceDefs),
              cmdFormatter: u.cmdFormatter || l.cmdFormatter,
              recurringTypes: l.recurringTypes.concat(u.recurringTypes),
              namedTimeZonedImpl: u.namedTimeZonedImpl || l.namedTimeZonedImpl,
              initialView: l.initialView || u.initialView,
              elementDraggingImpl: l.elementDraggingImpl || u.elementDraggingImpl,
              optionChangeHandlers: _r2(_r2({}, l.optionChangeHandlers), u.optionChangeHandlers),
              scrollGridImpl: u.scrollGridImpl || l.scrollGridImpl,
              contentTypeHandlers: _r2(_r2({}, l.contentTypeHandlers), u.contentTypeHandlers),
              listenerRefiners: _r2(_r2({}, l.listenerRefiners), u.listenerRefiners),
              optionRefiners: _r2(_r2({}, l.optionRefiners), u.optionRefiners),
              propSetHandlers: _r2(_r2({}, l.propSetHandlers), u.propSetHandlers)
            });
          }

          var l, u;
        }

        return e && i(e), i(t), o;
      }(o, i)), t = o, n = i, e;
    };
  }

  var so = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t;
  }(Pr);

  function lo(e, t, n, o) {
    if (t[e]) return t[e];

    var i = function (e, t, n, o) {
      var i = n[e],
          a = o[e],
          s = function s(e) {
        return i && null !== i[e] ? i[e] : a && null !== a[e] ? a[e] : null;
      },
          l = s("component"),
          u = s("superType"),
          c = null;

      if (u) {
        if (u === e) throw new Error("Can't have a custom view type that references itself");
        c = lo(u, t, n, o);
      }

      !l && c && (l = c.component);
      if (!l) return null;
      return {
        type: e,
        component: l,
        defaults: _r2(_r2({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
        overrides: _r2(_r2({}, c ? c.overrides : {}), a ? a.rawOptions : {})
      };
    }(e, t, n, o);

    return i && (t[e] = i), i;
  }

  so.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active"
  }, so.prototype.baseIconClass = "fc-icon", so.prototype.iconClasses = {
    close: "fc-icon-x",
    prev: "fc-icon-chevron-left",
    next: "fc-icon-chevron-right",
    prevYear: "fc-icon-chevrons-left",
    nextYear: "fc-icon-chevrons-right"
  }, so.prototype.rtlIconClasses = {
    prev: "fc-icon-chevron-right",
    next: "fc-icon-chevron-left",
    prevYear: "fc-icon-chevrons-right",
    nextYear: "fc-icon-chevrons-left"
  }, so.prototype.iconOverrideOption = "buttonIcons", so.prototype.iconOverrideCustomButtonOption = "icon", so.prototype.iconOverridePrefix = "fc-icon-";

  var uo = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.rootElRef = Ar(), t.handleRootEl = function (e) {
        Yr(t.rootElRef, e), t.props.elRef && Yr(t.props.elRef, e);
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.props,
          n = t.hookProps;
      return Hr(ho, {
        hookProps: n,
        didMount: t.didMount,
        willUnmount: t.willUnmount,
        elRef: this.handleRootEl
      }, function (r) {
        return Hr(po, {
          hookProps: n,
          content: t.content,
          defaultContent: t.defaultContent,
          backupElRef: e.rootElRef
        }, function (e, o) {
          return t.children(r, go(t.classNames, n), e, o);
        });
      });
    }, t;
  }(jr),
      co = Lr(0);

  function po(e) {
    return Hr(co.Consumer, null, function (t) {
      return Hr(fo, _r2({
        renderId: t
      }, e));
    });
  }

  var fo = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.innerElRef = Ar(), t;
    }

    return n(t, e), t.prototype.render = function () {
      return this.props.children(this.innerElRef, this.renderInnerContent());
    }, t.prototype.componentDidMount = function () {
      this.updateCustomContent();
    }, t.prototype.componentDidUpdate = function () {
      this.updateCustomContent();
    }, t.prototype.renderInnerContent = function () {
      var e = this.context.pluginHooks.contentTypeHandlers,
          t = this.props,
          n = this.customContentInfo,
          r = mo(t.content, t.hookProps),
          o = null;

      if (void 0 === r && (r = mo(t.defaultContent, t.hookProps)), void 0 !== r) {
        if (n) n.contentVal = r[n.contentKey];else if ("object" == _typeof(r)) for (var i in e) {
          if (void 0 !== r[i]) {
            n = this.customContentInfo = {
              contentKey: i,
              contentVal: r[i],
              handler: e[i]()
            };
            break;
          }
        }
        o = n ? [] : r;
      }

      return o;
    }, t.prototype.updateCustomContent = function () {
      this.customContentInfo && this.customContentInfo.handler(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal);
    }, t;
  }(jr),
      ho = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.handleRootEl = function (e) {
        t.rootEl = e, t.props.elRef && Yr(t.props.elRef, e);
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      return this.props.children(this.handleRootEl);
    }, t.prototype.componentDidMount = function () {
      var e = this.props.didMount;
      e && e(_r2(_r2({}, this.props.hookProps), {
        el: this.rootEl
      }));
    }, t.prototype.componentWillUnmount = function () {
      var e = this.props.willUnmount;
      e && e(_r2(_r2({}, this.props.hookProps), {
        el: this.rootEl
      }));
    }, t;
  }(jr);

  function vo() {
    var e,
        t,
        n = [];
    return function (r, o) {
      return t && Le(t, o) && r === e || (e = r, t = o, n = go(r, o)), n;
    };
  }

  function go(e, t) {
    return "function" == typeof e && (e = e(t)), Ut(e);
  }

  function mo(e, t) {
    return "function" == typeof e ? e(t, Hr) : e;
  }

  var yo = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.normalizeClassNames = vo(), t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context,
          n = t.options,
          r = {
        view: t.viewApi
      },
          o = this.normalizeClassNames(n.viewClassNames, r);
      return Hr(ho, {
        hookProps: r,
        didMount: n.viewDidMount,
        willUnmount: n.viewWillUnmount,
        elRef: e.elRef
      }, function (t) {
        return e.children(t, ["fc-" + e.viewSpec.type + "-view", "fc-view"].concat(o));
      });
    }, t;
  }(jr);

  function Eo(e) {
    return Oe(e, So);
  }

  function So(e) {
    var t,
        n = "function" == typeof e ? {
      component: e
    } : e,
        o = n.component;
    return n.content && (t = n, o = function o(e) {
      return Hr(zr.Consumer, null, function (n) {
        return Hr(yo, {
          viewSpec: n.viewSpec
        }, function (o, i) {
          var a = _r2(_r2({}, e), {
            nextDayThreshold: n.options.nextDayThreshold
          });

          return Hr(uo, {
            hookProps: a,
            classNames: t.classNames,
            content: t.content,
            didMount: t.didMount,
            willUnmount: t.willUnmount,
            elRef: o
          }, function (e, t, n, r) {
            return Hr("div", {
              className: i.concat(t).join(" "),
              ref: e
            }, r);
          });
        });
      });
    }), {
      superType: n.type,
      component: o,
      rawOptions: n
    };
  }

  function Do(e, t, n, o) {
    var i = Eo(e),
        a = Eo(t.views);
    return Oe(function (e, t) {
      var n,
          r = {};

      for (n in e) {
        lo(n, r, e, t);
      }

      for (n in t) {
        lo(n, r, e, t);
      }

      return r;
    }(i, a), function (e) {
      return function (e, t, n, o, i) {
        var a = e.overrides.duration || e.defaults.duration || o.duration || n.duration,
            s = null,
            l = "",
            u = "",
            c = {};

        if (a && (s = function (e) {
          var t = JSON.stringify(e),
              n = bo[t];
          void 0 === n && (n = Ye(e), bo[t] = n);
          return n;
        }(a))) {
          var d = et(s);
          l = d.unit, 1 === d.value && (u = l, c = t[l] ? t[l].rawOptions : {});
        }

        var p = function p(t) {
          var n = t.buttonText || {},
              r = e.defaults.buttonTextKey;
          return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[u] ? n[u] : void 0;
        };

        return {
          type: e.type,
          component: e.component,
          duration: s,
          durationUnit: l,
          singleUnit: u,
          optionDefaults: e.defaults,
          optionOverrides: _r2(_r2({}, c), e.overrides),
          buttonTextOverride: p(o) || p(n) || e.overrides.buttonText,
          buttonTextDefault: p(i) || e.defaults.buttonText || p(bt) || e.type
        };
      }(e, a, t, n, o);
    });
  }

  var bo = {};

  var Co = function () {
    function e(e) {
      this.props = e, this.nowDate = Wn(e.nowInput, e.dateEnv), this.initHiddenDays();
    }

    return e.prototype.buildPrev = function (e, t, n) {
      var r = this.props.dateEnv,
          o = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
      return this.build(o, -1, n);
    }, e.prototype.buildNext = function (e, t, n) {
      var r = this.props.dateEnv,
          o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
      return this.build(o, 1, n);
    }, e.prototype.build = function (e, t, n) {
      void 0 === n && (n = !0);
      var r,
          o,
          i,
          a,
          s,
          l,
          u,
          c,
          d = this.props;
      return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (u = e, e = null != (c = r).start && u < c.start ? c.start : null != c.end && u >= c.end ? new Date(c.end.valueOf() - 1) : u), o = this.buildCurrentRangeInfo(e, t), i = /^(year|month|week|day)$/.test(o.unit), a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, i), s = a = this.trimHiddenDays(a), d.showNonCurrentDates || (s = nn(s, o.range)), s = nn(s = this.adjustActiveRange(s), r), l = on(o.range, r), {
        validRange: r,
        currentRange: o.range,
        currentRangeUnit: o.unit,
        isRangeAllDay: i,
        activeRange: s,
        renderRange: a,
        slotMinTime: d.slotMinTime,
        slotMaxTime: d.slotMaxTime,
        isValid: l,
        dateIncrement: this.buildDateIncrement(o.duration)
      };
    }, e.prototype.buildValidRange = function () {
      var e = this.props.validRangeInput,
          t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
      return this.refineRange(t) || {
        start: null,
        end: null
      };
    }, e.prototype.buildCurrentRangeInfo = function (e, t) {
      var n,
          r = this.props,
          o = null,
          i = null,
          a = null;
      return r.duration ? (o = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, t, o, i)) : (n = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, t, n)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (i = et(o = this.getFallbackDuration()).unit, a = this.buildRangeFromDuration(e, t, o, i)), {
        duration: o,
        unit: i,
        range: a
      };
    }, e.prototype.getFallbackDuration = function () {
      return Ye({
        day: 1
      });
    }, e.prototype.adjustActiveRange = function (e) {
      var t = this.props,
          n = t.dateEnv,
          r = t.usesMinMaxTime,
          o = t.slotMinTime,
          i = t.slotMaxTime,
          a = e.start,
          s = e.end;
      return r && (Je(o) < 0 && (a = be(a), a = n.add(a, o)), Je(i) > 1 && (s = ve(s = be(s), -1), s = n.add(s, i))), {
        start: a,
        end: s
      };
    }, e.prototype.buildRangeFromDuration = function (e, t, n, r) {
      var o,
          i,
          a,
          s = this.props,
          l = s.dateEnv,
          u = s.dateAlignment;

      if (!u) {
        var c = this.props.dateIncrement;
        u = c && $e(c) < $e(n) ? et(c).unit : r;
      }

      function d() {
        o = l.startOf(e, u), i = l.add(o, n), a = {
          start: o,
          end: i
        };
      }

      return Je(n) <= 1 && this.isHiddenDay(o) && (o = be(o = this.skipHiddenDays(o, t))), d(), this.trimHiddenDays(a) || (e = this.skipHiddenDays(e, t), d()), a;
    }, e.prototype.buildRangeFromDayCount = function (e, t, n) {
      var r,
          o = this.props,
          i = o.dateEnv,
          a = o.dateAlignment,
          s = 0,
          l = e;
      a && (l = i.startOf(l, a)), l = be(l), r = l = this.skipHiddenDays(l, t);

      do {
        r = ve(r, 1), this.isHiddenDay(r) || s++;
      } while (s < n);

      return {
        start: l,
        end: r
      };
    }, e.prototype.buildCustomVisibleRange = function (e) {
      var t = this.props,
          n = t.visibleRangeInput,
          r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
          o = this.refineRange(r);
      return !o || null != o.start && null != o.end ? o : null;
    }, e.prototype.buildRenderRange = function (e, t, n) {
      return e;
    }, e.prototype.buildDateIncrement = function (e) {
      var t,
          n = this.props.dateIncrement;
      return n || ((t = this.props.dateAlignment) ? Ye(1, t) : e || Ye({
        days: 1
      }));
    }, e.prototype.refineRange = function (e) {
      if (e) {
        var t = (n = e, r = this.props.dateEnv, o = null, i = null, n.start && (o = r.createMarker(n.start)), n.end && (i = r.createMarker(n.end)), o || i ? o && i && i < o ? null : {
          start: o,
          end: i
        } : null);
        return t && (t = Jt(t)), t;
      }

      var n, r, o, i;
      return null;
    }, e.prototype.initHiddenDays = function () {
      var e,
          t = this.props.hiddenDays || [],
          n = [],
          r = 0;

      for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e++) {
        (n[e] = -1 !== t.indexOf(e)) || r++;
      }

      if (!r) throw new Error("invalid hiddenDays");
      this.isHiddenDayHash = n;
    }, e.prototype.trimHiddenDays = function (e) {
      var t = e.start,
          n = e.end;
      return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? {
        start: t,
        end: n
      } : null;
    }, e.prototype.isHiddenDay = function (e) {
      return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
    }, e.prototype.skipHiddenDays = function (e, t, n) {
      for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) {
        e = ve(e, t);
      }

      return e;
    }, e;
  }();

  function wo(e, t, n) {
    var r = t ? t.activeRange : null;
    return ko({}, function (e, t) {
      var n = Ln(t),
          r = [].concat(e.eventSources || []),
          o = [];
      e.initialEvents && r.unshift(e.initialEvents);
      e.events && r.unshift(e.events);

      for (var i = 0, a = r; i < a.length; i++) {
        var s = Un(a[i], t, n);
        s && o.push(s);
      }

      return o;
    }(e, n), r, n);
  }

  function Ro(e, t, n, o) {
    var i,
        a,
        s = n ? n.activeRange : null;

    switch (t.type) {
      case "ADD_EVENT_SOURCES":
        return ko(e, t.sources, s, o);

      case "REMOVE_EVENT_SOURCE":
        return i = e, a = t.sourceId, He(i, function (e) {
          return e.sourceId !== a;
        });

      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return n ? Mo(e, s, o) : e;

      case "FETCH_EVENT_SOURCES":
        return xo(e, t.sourceIds ? Ae(t.sourceIds) : Io(e, o), s, o);

      case "RECEIVE_EVENTS":
      case "RECEIVE_EVENT_ERROR":
        return function (e, t, n, o) {
          var i,
              a = e[t];
          if (a && n === a.latestFetchId) return _r2(_r2({}, e), ((i = {})[t] = _r2(_r2({}, a), {
            isFetching: !1,
            fetchRange: o
          }), i));
          return e;
        }(e, t.sourceId, t.fetchId, t.fetchRange);

      case "REMOVE_ALL_EVENT_SOURCES":
        return {};

      default:
        return e;
    }
  }

  function To(e) {
    var t = 0;

    for (var n in e) {
      e[n].isFetching && t++;
    }

    return t;
  }

  function ko(e, t, n, o) {
    for (var i = {}, a = 0, s = t; a < s.length; a++) {
      var l = s[a];
      i[l.sourceId] = l;
    }

    return n && (i = Mo(i, n, o)), _r2(_r2({}, e), i);
  }

  function Mo(e, t, n) {
    return xo(e, He(e, function (e) {
      return function (e, t, n) {
        return Po(e, n) ? !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId;
      }(e, t, n);
    }), t, n);
  }

  function xo(e, t, n, r) {
    var o = {};

    for (var i in e) {
      var a = e[i];
      t[i] ? o[i] = _o(a, n, r) : o[i] = a;
    }

    return o;
  }

  function _o(e, t, n) {
    var o = n.options,
        i = n.calendarApi,
        a = n.pluginHooks.eventSourceDefs[e.sourceDefId],
        s = $();
    return a.fetch({
      eventSource: e,
      range: t,
      context: n
    }, function (r) {
      var a = r.rawEvents;
      o.eventSourceSuccess && (a = o.eventSourceSuccess.call(i, a, r.xhr) || a), e.success && (a = e.success.call(i, a, r.xhr) || a), n.dispatch({
        type: "RECEIVE_EVENTS",
        sourceId: e.sourceId,
        fetchId: s,
        fetchRange: t,
        rawEvents: a
      });
    }, function (r) {
      console.warn(r.message, r), o.eventSourceFailure && o.eventSourceFailure.call(i, r), e.failure && e.failure(r), n.dispatch({
        type: "RECEIVE_EVENT_ERROR",
        sourceId: e.sourceId,
        fetchId: s,
        fetchRange: t,
        error: r
      });
    }), _r2(_r2({}, e), {
      isFetching: !0,
      latestFetchId: s
    });
  }

  function Io(e, t) {
    return He(e, function (e) {
      return Po(e, t);
    });
  }

  function Po(e, t) {
    return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
  }

  function No(e, t) {
    switch (t.type) {
      case "UNSELECT_DATES":
        return null;

      case "SELECT_DATES":
        return t.selection;

      default:
        return e;
    }
  }

  function Ho(e, t) {
    switch (t.type) {
      case "UNSELECT_EVENT":
        return "";

      case "SELECT_EVENT":
        return t.eventInstanceId;

      default:
        return e;
    }
  }

  function Oo(e, t) {
    var n;

    switch (t.type) {
      case "UNSET_EVENT_DRAG":
        return null;

      case "SET_EVENT_DRAG":
        return {
          affectedEvents: (n = t.state).affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent
        };

      default:
        return e;
    }
  }

  function Ao(e, t) {
    var n;

    switch (t.type) {
      case "UNSET_EVENT_RESIZE":
        return null;

      case "SET_EVENT_RESIZE":
        return {
          affectedEvents: (n = t.state).affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent
        };

      default:
        return e;
    }
  }

  function Uo(e, t, n, r, o) {
    var i = [];
    return {
      headerToolbar: e.headerToolbar ? Lo(e.headerToolbar, e, t, n, r, o, i) : null,
      footerToolbar: e.footerToolbar ? Lo(e.footerToolbar, e, t, n, r, o, i) : null,
      viewsWithButtons: i
    };
  }

  function Lo(e, t, n, r, o, i, a) {
    return Oe(e, function (e) {
      return function (e, t, n, r, o, i, a) {
        var s = "rtl" === t.direction,
            l = t.customButtons || {},
            u = n.buttonText || {},
            c = t.buttonText || {};
        return (e ? e.split(" ") : []).map(function (e) {
          return e.split(",").map(function (e) {
            if ("title" === e) return {
              buttonName: e
            };
            var t,
                n = void 0,
                d = void 0,
                p = void 0,
                f = void 0;
            return (t = l[e]) ? (d = function d(e) {
              t.click && t.click.call(e.target, e, e.target);
            }, (p = r.getCustomButtonIconClass(t)) || (p = r.getIconClass(e, s)) || (f = t.text)) : (n = o[e]) ? (a.push(e), d = function d() {
              i.changeView(e);
            }, (f = n.buttonTextOverride) || (p = r.getIconClass(e, s)) || (f = n.buttonTextDefault)) : i[e] && (d = function d() {
              i[e]();
            }, (f = u[e]) || (p = r.getIconClass(e, s)) || (f = c[e])), {
              buttonName: e,
              buttonClick: d,
              buttonIcon: p,
              buttonText: f
            };
          });
        });
      }(e, t, n, r, o, i, a);
    });
  }

  function Wo(e, t, n, r, o) {
    var i = null;
    "GET" === (e = e.toUpperCase()) ? t = function (e, t) {
      return e + (-1 === e.indexOf("?") ? "?" : "&") + Vo(t);
    }(t, n) : i = Vo(n);
    var a = new XMLHttpRequest();
    a.open(e, t, !0), "GET" !== e && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.onload = function () {
      if (a.status >= 200 && a.status < 400) {
        var e = !1,
            t = void 0;

        try {
          t = JSON.parse(a.responseText), e = !0;
        } catch (e) {}

        e ? r(t, a) : o("Failure parsing JSON", a);
      } else o("Request failed", a);
    }, a.onerror = function () {
      o("Request failed", a);
    }, a.send(i);
  }

  function Vo(e) {
    var t = [];

    for (var n in e) {
      t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    }

    return t.join("&");
  }

  function zo(e, t) {
    for (var n = Ue(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
      for (var a = i[o], s = !1, l = 0; l < n.length; l++) {
        if (n[l]._raw === a) {
          n.splice(l, 1), s = !0;
          break;
        }
      }

      s || r.push(a);
    }

    for (var u = 0, c = n; u < c.length; u++) {
      var d = c[u];
      t.dispatch({
        type: "REMOVE_EVENT_SOURCE",
        sourceId: d.sourceId
      });
    }

    for (var p = 0, f = r; p < f.length; p++) {
      var h = f[p];
      t.calendarApi.addEventSource(h);
    }
  }

  var Fo = [io({
    eventSourceDefs: [{
      ignoreRange: !0,
      parseMeta: function parseMeta(e) {
        return Array.isArray(e.events) ? e.events : null;
      },
      fetch: function fetch(e, t) {
        t({
          rawEvents: e.eventSource.meta
        });
      }
    }]
  }), io({
    eventSourceDefs: [{
      parseMeta: function parseMeta(e) {
        return "function" == typeof e.events ? e.events : null;
      },
      fetch: function fetch(e, t, n) {
        var r = e.context.dateEnv;
        Tr(e.eventSource.meta.bind(null, Tn(e.range, r)), function (e) {
          t({
            rawEvents: e
          });
        }, n);
      }
    }]
  }), io({
    eventSourceRefiners: {
      method: String,
      extraParams: _t,
      startParam: String,
      endParam: String,
      timeZoneParam: String
    },
    eventSourceDefs: [{
      parseMeta: function parseMeta(e) {
        return e.url ? {
          url: e.url,
          method: (e.method || "GET").toUpperCase(),
          extraParams: e.extraParams,
          startParam: e.startParam,
          endParam: e.endParam,
          timeZoneParam: e.timeZoneParam
        } : null;
      },
      fetch: function fetch(e, t, n) {
        var o = e.eventSource.meta,
            i = function (e, t, n) {
          var o,
              i,
              a,
              s,
              l = n.dateEnv,
              u = n.options,
              c = {};
          null == (o = e.startParam) && (o = u.startParam);
          null == (i = e.endParam) && (i = u.endParam);
          null == (a = e.timeZoneParam) && (a = u.timeZoneParam);
          s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
          _r2(c, s), c[o] = l.formatIso(t.start), c[i] = l.formatIso(t.end), "local" !== l.timeZone && (c[a] = l.timeZone);
          return c;
        }(o, e.range, e.context);

        Wo(o.method, o.url, i, function (e, n) {
          t({
            rawEvents: e,
            xhr: n
          });
        }, function (e, t) {
          n({
            message: e,
            xhr: t
          });
        });
      }
    }]
  }), io({
    recurringTypes: [{
      parse: function parse(e, t) {
        if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
          var n = {
            daysOfWeek: e.daysOfWeek || null,
            startTime: e.startTime || null,
            endTime: e.endTime || null,
            startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
            endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
          },
              r = void 0;
          return e.duration && (r = e.duration), !r && e.startTime && e.endTime && (o = e.endTime, i = e.startTime, r = {
            years: o.years - i.years,
            months: o.months - i.months,
            days: o.days - i.days,
            milliseconds: o.milliseconds - i.milliseconds
          }), {
            allDayGuess: Boolean(!e.startTime && !e.endTime),
            duration: r,
            typeData: n
          };
        }

        var o, i;
        return null;
      },
      expand: function expand(e, t, n) {
        var r = nn(t, {
          start: e.startRecur,
          end: e.endRecur
        });
        return r ? function (e, t, n, r) {
          var o = e ? Ae(e) : null,
              i = be(n.start),
              a = n.end,
              s = [];

          for (; i < a;) {
            var l = void 0;
            o && !o[i.getUTCDay()] || (l = t ? r.add(i, t) : i, s.push(l)), i = ve(i, 1);
          }

          return s;
        }(e.daysOfWeek, e.startTime, r, n) : [];
      }
    }],
    eventRefiners: {
      daysOfWeek: _t,
      startTime: Ye,
      endTime: Ye,
      duration: Ye,
      startRecur: _t,
      endRecur: _t
    }
  }), io({
    optionChangeHandlers: {
      events: function events(e, t) {
        zo([e], t);
      },
      eventSources: zo
    }
  }), io({
    contentTypeHandlers: {
      html: function html() {
        return Bo;
      },
      domNodes: function domNodes() {
        return jo;
      }
    },
    propSetHandlers: {
      dateProfile: function dateProfile(e, t) {
        t.emitter.trigger("datesSet", _r2(_r2({}, Tn(e.activeRange, t.dateEnv)), {
          view: t.viewApi
        }));
      },
      eventStore: function eventStore(e, t) {
        var n = t.emitter;
        n.hasHandlers("eventsSet") && n.trigger("eventsSet", Bn(e, t));
      }
    }
  })];

  function Bo(e, t) {
    e.innerHTML = t;
  }

  function jo(e, t) {
    var n = Array.prototype.slice.call(e.childNodes),
        r = Array.prototype.slice.call(t);

    if (!ot(n, r)) {
      for (var o = 0, i = r; o < i.length; o++) {
        var a = i[o];
        e.appendChild(a);
      }

      n.forEach(W);
    }
  }

  var Go = function () {
    function e(e) {
      this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
    }

    return e.prototype.request = function (e) {
      this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e));
    }, e.prototype.pause = function (e) {
      void 0 === e && (e = "");
      var t = this.pauseDepths;
      t[e] = (t[e] || 0) + 1, this.clearTimeout();
    }, e.prototype.resume = function (e, t) {
      void 0 === e && (e = "");
      var n = this.pauseDepths;

      if (e in n) {
        if (t) delete n[e];else --n[e] <= 0 && delete n[e];
        this.tryDrain();
      }
    }, e.prototype.isPaused = function () {
      return Object.keys(this.pauseDepths).length;
    }, e.prototype.tryDrain = function () {
      if (!this.isRunning && !this.isPaused()) {
        for (this.isRunning = !0; this.isDirty;) {
          this.isDirty = !1, this.drained();
        }

        this.isRunning = !1;
      }
    }, e.prototype.clear = function () {
      this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
    }, e.prototype.clearTimeout = function () {
      this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
    }, e.prototype.drained = function () {
      this.drainedOption && this.drainedOption();
    }, e;
  }(),
      qo = function () {
    function e(e, t) {
      this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new Go(this.drain.bind(this));
    }

    return e.prototype.request = function (e, t) {
      this.queue.push(e), this.delayedRunner.request(t);
    }, e.prototype.pause = function (e) {
      this.delayedRunner.pause(e);
    }, e.prototype.resume = function (e, t) {
      this.delayedRunner.resume(e, t);
    }, e.prototype.drain = function () {
      for (var e = this.queue; e.length;) {
        for (var t = [], n = void 0; n = e.shift();) {
          this.runTask(n), t.push(n);
        }

        this.drained(t);
      }
    }, e.prototype.runTask = function (e) {
      this.runTaskOption && this.runTaskOption(e);
    }, e.prototype.drained = function (e) {
      this.drainedOption && this.drainedOption(e);
    }, e;
  }();

  function Yo(e, t, n) {
    var r;
    return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, St(t.titleFormat || function (e) {
      var t = e.currentRangeUnit;
      if ("year" === t) return {
        year: "numeric"
      };
      if ("month" === t) return {
        year: "numeric",
        month: "long"
      };
      var n = De(e.currentRange.start, e.currentRange.end);
      return null !== n && n > 1 ? {
        year: "numeric",
        month: "short",
        day: "numeric"
      } : {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
    }(e)), {
      isEndExclusive: e.isRangeAllDay,
      defaultSeparator: t.titleRangeSeparator
    });
  }

  var Zo = function () {
    function e(e) {
      var t = this;
      this.computeOptionsData = it(this._computeOptionsData), this.computeCurrentViewData = it(this._computeCurrentViewData), this.organizeRawLocales = it($n), this.buildLocale = it(Qn), this.buildPluginHooks = ao(), this.buildDateEnv = it(Xo), this.buildTheme = it(Ko), this.parseToolbars = it(Uo), this.buildViewSpecs = it(Do), this.buildDateProfileGenerator = at(Jo), this.buildViewApi = it($o), this.buildViewUiProps = at(ti), this.buildEventUiBySource = it(Qo, Le), this.buildEventUiBases = it(ei), this.parseContextBusinessHours = at(ni), this.buildTitle = it(Yo), this.emitter = new kr(), this.actionRunner = new qo(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function () {
        return t.data;
      }, this.dispatch = function (e) {
        t.actionRunner.request(e);
      }, this.props = e, this.actionRunner.pause();
      var n = {},
          o = this.computeOptionsData(e.optionOverrides, n, e.calendarApi),
          i = o.calendarOptions.initialView || o.pluginHooks.initialView,
          a = this.computeCurrentViewData(i, o, e.optionOverrides, n);
      e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(a.options);
      var s,
          l,
          u,
          c = (s = o.calendarOptions, l = o.dateEnv, null != (u = s.initialDate) ? l.createMarker(u) : Wn(s.now, l)),
          d = a.dateProfileGenerator.build(c);
      sn(d.activeRange, c) || (c = d.currentRange.start);

      for (var p = {
        dateEnv: o.dateEnv,
        options: o.calendarOptions,
        pluginHooks: o.pluginHooks,
        calendarApi: e.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData
      }, f = 0, h = o.pluginHooks.contextInit; f < h.length; f++) {
        (0, h[f])(p);
      }

      for (var v = wo(o.calendarOptions, d, p), g = {
        dynamicOptionOverrides: n,
        currentViewType: i,
        currentDate: c,
        dateProfile: d,
        businessHours: this.parseContextBusinessHours(p),
        eventSources: v,
        eventUiBases: {},
        loadingLevel: To(v),
        eventStore: {
          defs: {},
          instances: {}
        },
        renderableEventStore: {
          defs: {},
          instances: {}
        },
        dateSelection: null,
        eventSelection: "",
        eventDrag: null,
        eventResize: null,
        selectionConfig: this.buildViewUiProps(p).selectionConfig
      }, m = _r2(_r2({}, p), g), y = 0, E = o.pluginHooks.reducers; y < E.length; y++) {
        var S = E[y];

        _r2(g, S(null, null, m));
      }

      g.loadingLevel && this.emitter.trigger("loading", !0), this.state = g, this.updateData(), this.actionRunner.resume();
    }

    return e.prototype.resetOptions = function (e, t) {
      var n = this.props;
      n.optionOverrides = t ? _r2(_r2({}, n.optionOverrides), e) : e, this.actionRunner.request({
        type: "NOTHING"
      });
    }, e.prototype._handleAction = function (e) {
      var t = this.props,
          n = this.state,
          o = this.emitter,
          i = function (e, t) {
        var n;

        switch (t.type) {
          case "SET_OPTION":
            return _r2(_r2({}, e), ((n = {})[t.optionName] = t.rawOptionValue, n));

          default:
            return e;
        }
      }(n.dynamicOptionOverrides, e),
          a = this.computeOptionsData(t.optionOverrides, i, t.calendarApi),
          s = function (e, t) {
        switch (t.type) {
          case "CHANGE_VIEW_TYPE":
            return t.viewType;
        }

        return e;
      }(n.currentViewType, e),
          l = this.computeCurrentViewData(s, a, t.optionOverrides, i);

      t.calendarApi.currentDataManager = this, o.setThisContext(t.calendarApi), o.setOptions(l.options);
      var u = {
        dateEnv: a.dateEnv,
        options: a.calendarOptions,
        pluginHooks: a.pluginHooks,
        calendarApi: t.calendarApi,
        dispatch: this.dispatch,
        emitter: o,
        getCurrentData: this.getCurrentData
      },
          c = n.currentDate,
          d = n.dateProfile;
      this.data && this.data.dateProfileGenerator !== l.dateProfileGenerator && (d = l.dateProfileGenerator.build(c)), d = function (e, t, n, r) {
        var o;

        switch (t.type) {
          case "CHANGE_VIEW_TYPE":
            return r.build(t.dateMarker || n);

          case "CHANGE_DATE":
            if (!e.activeRange || !sn(e.currentRange, t.dateMarker)) return r.build(t.dateMarker);
            break;

          case "PREV":
            if ((o = r.buildPrev(e, n)).isValid) return o;
            break;

          case "NEXT":
            if ((o = r.buildNext(e, n)).isValid) return o;
        }

        return e;
      }(d, e, c = function (e, t) {
        switch (t.type) {
          case "CHANGE_DATE":
            return t.dateMarker;

          default:
            return e;
        }
      }(c, e), l.dateProfileGenerator), sn(d.currentRange, c) || (c = d.currentRange.start);

      for (var p = Ro(n.eventSources, e, d, u), f = To(p), h = Zr(n.eventStore, e, p, d, u), v = f && !l.options.progressiveEventRendering && n.renderableEventStore || h, g = this.buildViewUiProps(u), m = g.eventUiSingleBase, y = g.selectionConfig, E = this.buildEventUiBySource(p), S = this.buildEventUiBases(v.defs, m, E), D = n.loadingLevel || 0, b = f, C = {
        dynamicOptionOverrides: i,
        currentViewType: s,
        currentDate: c,
        dateProfile: d,
        eventSources: p,
        eventStore: h,
        renderableEventStore: v,
        selectionConfig: y,
        eventUiBases: S,
        loadingLevel: b,
        businessHours: this.parseContextBusinessHours(u),
        dateSelection: No(n.dateSelection, e),
        eventSelection: Ho(n.eventSelection, e),
        eventDrag: Oo(n.eventDrag, e),
        eventResize: Ao(n.eventResize, e)
      }, w = _r2(_r2({}, u), C), R = 0, T = a.pluginHooks.reducers; R < T.length; R++) {
        var k = T[R];

        _r2(C, k(n, e, w));
      }

      !D && b ? o.trigger("loading", !0) : D && !b && o.trigger("loading", !1), this.state = C, t.onAction && t.onAction(e);
    }, e.prototype.updateData = function () {
      var e,
          t,
          n,
          o,
          i,
          a,
          s,
          l,
          u,
          c = this.props,
          d = this.state,
          p = this.data,
          f = this.computeOptionsData(c.optionOverrides, d.dynamicOptionOverrides, c.calendarApi),
          h = this.computeCurrentViewData(d.currentViewType, f, c.optionOverrides, d.dynamicOptionOverrides),
          v = this.data = _r2(_r2(_r2({
        viewTitle: this.buildTitle(d.dateProfile, h.options, f.dateEnv),
        calendarApi: c.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData
      }, f), h), d),
          g = f.pluginHooks.optionChangeHandlers,
          m = p && p.calendarOptions,
          y = f.calendarOptions;

      if (m && m !== y) for (var E in m.timeZone !== y.timeZone && (d.eventSources = v.eventSources = (a = v.eventSources, s = d.dateProfile, l = v, u = s ? s.activeRange : null, xo(a, Io(a, l), u, l)), d.eventStore = v.eventStore = (e = v.eventStore, t = p.dateEnv, n = v.dateEnv, o = e.defs, i = Oe(e.instances, function (e) {
        var i = o[e.defId];
        return i.allDay || i.recurringDef ? e : _r2(_r2({}, e), {
          range: {
            start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
            end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
          },
          forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
          forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
        });
      }), {
        defs: o,
        instances: i
      })), g) {
        m[E] !== y[E] && g[E](y[E], v);
      }
      c.onData && c.onData(v);
    }, e.prototype._computeOptionsData = function (e, t, n) {
      var r = this.processRawCalendarOptions(e, t),
          o = r.refinedOptions,
          i = r.pluginHooks,
          a = r.localeDefaults,
          s = r.availableLocaleData;
      ri(r.extra);
      var l = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator),
          u = this.buildViewSpecs(i.views, e, t, a),
          c = this.buildTheme(o, i);
      return {
        calendarOptions: o,
        pluginHooks: i,
        dateEnv: l,
        viewSpecs: u,
        theme: c,
        toolbarConfig: this.parseToolbars(o, e, c, u, n),
        localeDefaults: a,
        availableRawLocales: s.map
      };
    }, e.prototype.processRawCalendarOptions = function (e, t) {
      var n = Mt([bt, e, t]),
          o = n.locales,
          i = n.locale,
          a = this.organizeRawLocales(o),
          s = a.map,
          l = this.buildLocale(i || a.defaultCode, s).options,
          u = this.buildPluginHooks(e.plugins || [], Fo),
          c = this.currentCalendarOptionsRefiners = _r2(_r2(_r2(_r2(_r2({}, Dt), Ct), wt), u.listenerRefiners), u.optionRefiners),
          d = {},
          p = Mt([bt, l, e, t]),
          f = {},
          h = this.currentCalendarOptionsInput,
          v = this.currentCalendarOptionsRefined,
          g = !1;

      for (var m in p) {
        "plugins" !== m && (p[m] === h[m] || Rt[m] && m in h && Rt[m](h[m], p[m]) ? f[m] = v[m] : c[m] ? (f[m] = c[m](p[m]), g = !0) : d[m] = h[m]);
      }

      return g && (this.currentCalendarOptionsInput = p, this.currentCalendarOptionsRefined = f), {
        rawOptions: this.currentCalendarOptionsInput,
        refinedOptions: this.currentCalendarOptionsRefined,
        pluginHooks: u,
        availableLocaleData: a,
        localeDefaults: l,
        extra: d
      };
    }, e.prototype._computeCurrentViewData = function (e, t, n, r) {
      var o = t.viewSpecs[e];
      if (!o) throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
      var i = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r),
          a = i.refinedOptions;
      return ri(i.extra), {
        viewSpec: o,
        options: a,
        dateProfileGenerator: this.buildDateProfileGenerator({
          dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
          duration: o.duration,
          durationUnit: o.durationUnit,
          usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
          dateEnv: t.dateEnv,
          calendarApi: this.props.calendarApi,
          slotMinTime: a.slotMinTime,
          slotMaxTime: a.slotMaxTime,
          showNonCurrentDates: a.showNonCurrentDates,
          dayCount: a.dayCount,
          dateAlignment: a.dateAlignment,
          dateIncrement: a.dateIncrement,
          hiddenDays: a.hiddenDays,
          weekends: a.weekends,
          nowInput: a.now,
          validRangeInput: a.validRange,
          visibleRangeInput: a.visibleRange,
          monthMode: a.monthMode,
          fixedWeekCount: a.fixedWeekCount
        }),
        viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
      };
    }, e.prototype.processRawViewOptions = function (e, t, n, o, i) {
      var a = Mt([bt, e.optionDefaults, n, o, e.optionOverrides, i]),
          s = _r2(_r2(_r2(_r2(_r2(_r2({}, Dt), Ct), wt), kt), t.listenerRefiners), t.optionRefiners),
          l = {},
          u = this.currentViewOptionsInput,
          c = this.currentViewOptionsRefined,
          d = !1,
          p = {};

      for (var f in a) {
        a[f] === u[f] ? l[f] = c[f] : (a[f] === this.currentCalendarOptionsInput[f] ? f in this.currentCalendarOptionsRefined && (l[f] = this.currentCalendarOptionsRefined[f]) : s[f] ? l[f] = s[f](a[f]) : p[f] = a[f], d = !0);
      }

      return d && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = l), {
        rawOptions: this.currentViewOptionsInput,
        refinedOptions: this.currentViewOptionsRefined,
        extra: p
      };
    }, e;
  }();

  function Xo(e, t, n, r, o, i, a, s) {
    var l = Qn(t || a.defaultCode, a.map);
    return new Xn({
      calendarSystem: "gregory",
      timeZone: e,
      namedTimeZoneImpl: i.namedTimeZonedImpl,
      locale: l,
      weekNumberCalculation: n,
      firstDay: r,
      weekText: o,
      cmdFormatter: i.cmdFormatter,
      defaultSeparator: s
    });
  }

  function Ko(e, t) {
    return new (t.themeClasses[e.themeSystem] || so)(e);
  }

  function Jo(e) {
    return new (e.dateProfileGeneratorClass || Co)(e);
  }

  function $o(e, t, n) {
    return new On(e, t, n);
  }

  function Qo(e) {
    return Oe(e, function (e) {
      return e.ui;
    });
  }

  function ei(e, t, n) {
    var r = {
      "": t
    };

    for (var o in e) {
      var i = e[o];
      i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId]);
    }

    return r;
  }

  function ti(e) {
    var t = e.options;
    return {
      eventUiSingleBase: Wt({
        display: t.eventDisplay,
        editable: t.editable,
        startEditable: t.eventStartEditable,
        durationEditable: t.eventDurationEditable,
        constraint: t.eventConstraint,
        overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
        allow: t.eventAllow,
        backgroundColor: t.eventBackgroundColor,
        borderColor: t.eventBorderColor,
        textColor: t.eventTextColor,
        color: t.eventColor
      }, e),
      selectionConfig: Wt({
        constraint: t.selectConstraint,
        overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
        allow: t.selectAllow
      }, e)
    };
  }

  function ni(e) {
    return or(e.options.businessHours, e);
  }

  function ri(e, t) {
    for (var n in e) {
      console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""));
    }
  }

  var oi = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      return n.handleData = function (e) {
        n.dataManager ? n.setState(e) : n.state = e;
      }, n.dataManager = new Zo({
        optionOverrides: t.optionOverrides,
        calendarApi: t.calendarApi,
        onData: n.handleData
      }), n;
    }

    return n(t, e), t.prototype.render = function () {
      return this.props.children(this.state);
    }, t.prototype.componentDidUpdate = function (e) {
      var t = this.props.optionOverrides;
      t !== e.optionOverrides && this.dataManager.resetOptions(t);
    }, t;
  }(Nr);

  var ii = function ii(e) {
    this.timeZoneName = e;
  },
      ai = function () {
    function e(e) {
      this.component = e.component;
    }

    return e.prototype.destroy = function () {}, e;
  }();

  function si(e, t) {
    return {
      component: e,
      el: t.el,
      useEventCenter: null == t.useEventCenter || t.useEventCenter
    };
  }

  function li(e) {
    var t;
    return (t = {})[e.component.uid] = e, t;
  }

  var ui = {},
      ci = function () {
    function e(e, t) {
      this.emitter = new kr();
    }

    return e.prototype.destroy = function () {}, e.prototype.setMirrorIsVisible = function (e) {}, e.prototype.setMirrorNeedsRevert = function (e) {}, e.prototype.setAutoScrollEnabled = function (e) {}, e;
  }(),
      di = {},
      pi = {
    startTime: Ye,
    duration: Ye,
    create: Boolean,
    sourceId: String
  };

  function fi(e) {
    var t = xt(e, pi),
        n = t.refined,
        r = t.extra;
    return {
      startTime: n.startTime || null,
      duration: n.duration || null,
      create: null == n.create || n.create,
      sourceId: n.sourceId,
      leftoverProps: r
    };
  }

  var hi = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e,
          t,
          n = this.props,
          r = n.model,
          o = n.extraClassName,
          i = !1,
          a = r.center;
      return r.left ? (i = !0, e = r.left) : e = r.start, r.right ? (i = !0, t = r.right) : t = r.end, Hr("div", {
        className: [o || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")
      }, this.renderSection("start", e || []), this.renderSection("center", a || []), this.renderSection("end", t || []));
    }, t.prototype.renderSection = function (e, t) {
      var n = this.props;
      return Hr(vi, {
        key: e,
        widgetGroups: t,
        title: n.title,
        activeButton: n.activeButton,
        isTodayEnabled: n.isTodayEnabled,
        isPrevEnabled: n.isPrevEnabled,
        isNextEnabled: n.isNextEnabled
      });
    }, t;
  }(jr),
      vi = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.props.widgetGroups.map(function (t) {
        return e.renderWidgetGroup(t);
      });
      return Hr.apply(void 0, o(["div", {
        className: "fc-toolbar-chunk"
      }], t));
    }, t.prototype.renderWidgetGroup = function (e) {
      for (var t = this.props, n = this.context.theme, i = [], a = !0, s = 0, l = e; s < l.length; s++) {
        var u = l[s],
            c = u.buttonName,
            d = u.buttonClick,
            p = u.buttonText,
            f = u.buttonIcon;
        if ("title" === c) a = !1, i.push(Hr("h2", {
          className: "fc-toolbar-title"
        }, t.title));else {
          var h = f ? {
            "aria-label": c
          } : {},
              v = ["fc-" + c + "-button", n.getClass("button")];
          c === t.activeButton && v.push(n.getClass("buttonActive"));
          var g = !t.isTodayEnabled && "today" === c || !t.isPrevEnabled && "prev" === c || !t.isNextEnabled && "next" === c;
          i.push(Hr("button", _r2({
            disabled: g,
            className: v.join(" "),
            onClick: d,
            type: "button"
          }, h), p || (f ? Hr("span", {
            className: f
          }) : "")));
        }
      }

      if (i.length > 1) {
        var m = a && n.getClass("buttonGroup") || "";
        return Hr.apply(void 0, o(["div", {
          className: m
        }], i));
      }

      return i[0];
    }, t;
  }(jr),
      gi = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.state = {
        availableWidth: null
      }, t.handleEl = function (e) {
        t.el = e, Yr(t.props.elRef, e), t.updateAvailableWidth();
      }, t.handleResize = function () {
        t.updateAvailableWidth();
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.state,
          n = e.aspectRatio,
          r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
          o = "",
          i = "";
      return n ? null !== t.availableWidth ? o = t.availableWidth / n : i = 1 / n * 100 + "%" : o = e.height || "", Hr("div", {
        ref: this.handleEl,
        onClick: e.onClick,
        className: r.join(" "),
        style: {
          height: o,
          paddingBottom: i
        }
      }, e.children);
    }, t.prototype.componentDidMount = function () {
      this.context.addResizeHandler(this.handleResize);
    }, t.prototype.componentWillUnmount = function () {
      this.context.removeResizeHandler(this.handleResize);
    }, t.prototype.updateAvailableWidth = function () {
      this.el && this.props.aspectRatio && this.setState({
        availableWidth: this.el.offsetWidth
      });
    }, t;
  }(jr),
      mi = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      return n.handleSegClick = function (e, t) {
        var r = n.component,
            o = r.context,
            i = dn(t);

        if (i && r.isValidSegDownEl(e.target)) {
          var a = V(e.target, ".fc-event-forced-url"),
              s = a ? a.querySelector("a[href]").href : "";
          o.emitter.trigger("eventClick", {
            el: t,
            event: new zn(r.context, i.eventRange.def, i.eventRange.instance),
            jsEvent: e,
            view: o.viewApi
          }), s && !e.defaultPrevented && (window.location.href = s);
        }
      }, n.destroy = Z(t.el, "click", ".fc-event", n.handleSegClick), n;
    }

    return n(t, e), t;
  }(ai),
      yi = function (e) {
    function t(t) {
      var n,
          r,
          o,
          i,
          a,
          s = e.call(this, t) || this;
      return s.handleEventElRemove = function (e) {
        e === s.currentSegEl && s.handleSegLeave(null, s.currentSegEl);
      }, s.handleSegEnter = function (e, t) {
        dn(t) && (s.currentSegEl = t, s.triggerEvent("eventMouseEnter", e, t));
      }, s.handleSegLeave = function (e, t) {
        s.currentSegEl && (s.currentSegEl = null, s.triggerEvent("eventMouseLeave", e, t));
      }, s.removeHoverListeners = (n = t.el, r = ".fc-event", o = s.handleSegEnter, i = s.handleSegLeave, Z(n, "mouseover", r, function (e, t) {
        if (t !== a) {
          a = t, o(e, t);

          var n = function n(e) {
            a = null, i(e, t), t.removeEventListener("mouseleave", n);
          };

          t.addEventListener("mouseleave", n);
        }
      })), s;
    }

    return n(t, e), t.prototype.destroy = function () {
      this.removeHoverListeners();
    }, t.prototype.triggerEvent = function (e, t, n) {
      var r = this.component,
          o = r.context,
          i = dn(n);
      t && !r.isValidSegDownEl(t.target) || o.emitter.trigger(e, {
        el: n,
        event: new zn(o, i.eventRange.def, i.eventRange.instance),
        jsEvent: t,
        view: o.viewApi
      });
    }, t;
  }(ai),
      Ei = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.buildViewContext = it(Fr), t.buildViewPropTransformers = it(Di), t.buildToolbarProps = it(Si), t.handleNavLinkClick = Y("a[data-navlink]", t._handleNavLinkClick.bind(t)), t.headerRef = Ar(), t.footerRef = Ar(), t.interactionsStore = {}, t.registerInteractiveComponent = function (e, n) {
        var r = si(e, n),
            o = [mi, yi].concat(t.props.pluginHooks.componentInteractions).map(function (e) {
          return new e(r);
        });
        t.interactionsStore[e.uid] = o, ui[e.uid] = r;
      }, t.unregisterInteractiveComponent = function (e) {
        for (var n = 0, r = t.interactionsStore[e.uid]; n < r.length; n++) {
          r[n].destroy();
        }

        delete t.interactionsStore[e.uid], delete ui[e.uid];
      }, t.resizeRunner = new Go(function () {
        t.props.emitter.trigger("_resize", !0), t.props.emitter.trigger("windowResize", {
          view: t.props.viewApi
        });
      }), t.handleWindowResize = function (e) {
        var n = t.props.options;
        n.handleWindowResize && e.target === window && t.resizeRunner.request(n.windowResizeDelay);
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e,
          t = this.props,
          n = t.toolbarConfig,
          o = t.options,
          i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, Wn(t.options.now, t.dateEnv), t.viewTitle),
          a = !1,
          s = "";
      t.isHeightAuto || t.forPrint ? s = "" : null != o.height ? a = !0 : null != o.contentHeight ? s = o.contentHeight : e = Math.max(o.aspectRatio, .5);
      var l = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
      return Hr(zr.Provider, {
        value: l
      }, n.headerToolbar && Hr(hi, _r2({
        ref: this.headerRef,
        extraClassName: "fc-header-toolbar",
        model: n.headerToolbar
      }, i)), Hr(gi, {
        liquid: a,
        height: s,
        aspectRatio: e,
        onClick: this.handleNavLinkClick
      }, this.renderView(t), this.buildAppendContent()), n.footerToolbar && Hr(hi, _r2({
        ref: this.footerRef,
        extraClassName: "fc-footer-toolbar",
        model: n.footerToolbar
      }, i)));
    }, t.prototype.componentDidMount = function () {
      var e = this.props;
      this.calendarInteractions = e.pluginHooks.calendarInteractions.map(function (t) {
        return new t(e);
      }), window.addEventListener("resize", this.handleWindowResize);
      var t = e.pluginHooks.propSetHandlers;

      for (var n in t) {
        t[n](e[n], e);
      }
    }, t.prototype.componentDidUpdate = function (e) {
      var t = this.props,
          n = t.pluginHooks.propSetHandlers;

      for (var r in n) {
        t[r] !== e[r] && n[r](t[r], t);
      }
    }, t.prototype.componentWillUnmount = function () {
      window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();

      for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
        t[e].destroy();
      }

      this.props.emitter.trigger("_unmount");
    }, t.prototype._handleNavLinkClick = function (e, t) {
      var n = this.props,
          r = n.dateEnv,
          o = n.options,
          i = n.calendarApi,
          a = t.getAttribute("data-navlink");
      a = a ? JSON.parse(a) : {};
      var s = r.createMarker(a.date),
          l = a.type,
          u = "day" === l ? o.navLinkDayClick : "week" === l ? o.navLinkWeekClick : null;
      "function" == typeof u ? u.call(i, r.toDate(s), e) : ("string" == typeof u && (l = u), i.zoomTo(s, l));
    }, t.prototype.buildAppendContent = function () {
      var e = this.props,
          t = e.pluginHooks.viewContainerAppends.map(function (t) {
        return t(e);
      });
      return Hr.apply(void 0, o([Ur, {}], t));
    }, t.prototype.renderView = function (e) {
      for (var t = e.pluginHooks, n = e.viewSpec, o = {
        dateProfile: e.dateProfile,
        businessHours: e.businessHours,
        eventStore: e.renderableEventStore,
        eventUiBases: e.eventUiBases,
        dateSelection: e.dateSelection,
        eventSelection: e.eventSelection,
        eventDrag: e.eventDrag,
        eventResize: e.eventResize,
        isHeightAuto: e.isHeightAuto,
        forPrint: e.forPrint
      }, i = 0, a = this.buildViewPropTransformers(t.viewPropsTransformers); i < a.length; i++) {
        var s = a[i];

        _r2(o, s.transform(o, e));
      }

      var l = n.component;
      return Hr(l, _r2({}, o));
    }, t;
  }(Br);

  function Si(e, t, n, r, o, i) {
    var a = n.build(o, void 0, !1),
        s = n.buildPrev(t, r, !1),
        l = n.buildNext(t, r, !1);
    return {
      title: i,
      activeButton: e.type,
      isTodayEnabled: a.isValid && !sn(t.currentRange, o),
      isPrevEnabled: s.isValid,
      isNextEnabled: l.isValid
    };
  }

  function Di(e) {
    return e.map(function (e) {
      return new e();
    });
  }

  var bi = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.state = {
        forPrint: !1
      }, t.handleBeforePrint = function () {
        t.setState({
          forPrint: !0
        });
      }, t.handleAfterPrint = function () {
        t.setState({
          forPrint: !1
        });
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = e.options,
          n = this.state.forPrint,
          r = n || "auto" === t.height || "auto" === t.contentHeight,
          o = r || null == t.height ? "" : t.height,
          i = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
      return cr() || i.push("fc-liquid-hack"), e.children(i, o, r, n);
    }, t.prototype.componentDidMount = function () {
      var e = this.props.emitter;
      e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
    }, t.prototype.componentWillUnmount = function () {
      var e = this.props.emitter;
      e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
    }, t;
  }(jr);

  function Ci(e, t) {
    return St(!e || t > 10 ? {
      weekday: "short"
    } : t > 1 ? {
      weekday: "short",
      month: "numeric",
      day: "numeric",
      omitCommas: !0
    } : {
      weekday: "long"
    });
  }

  var wi = "fc-col-header-cell",
      Ri = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.context,
          t = e.dateEnv,
          n = e.options,
          o = e.theme,
          i = e.viewApi,
          a = this.props,
          s = a.date,
          l = a.dateProfile,
          u = hr(s, a.todayRange, null, l),
          c = [wi].concat(vr(u, o)),
          d = t.format(s, a.dayHeaderFormat),
          p = n.navLinks && !u.isDisabled && a.colCnt > 1 ? {
        "data-navlink": gr(s),
        tabIndex: 0
      } : {},
          f = _r2(_r2(_r2({
        date: t.toDate(s),
        view: i
      }, a.extraHookProps), {
        text: d
      }), u);

      return Hr(uo, {
        hookProps: f,
        classNames: n.dayHeaderClassNames,
        content: n.dayHeaderContent,
        defaultContent: ki,
        didMount: n.dayHeaderDidMount,
        willUnmount: n.dayHeaderWillUnmount
      }, function (e, t, n, o) {
        return Hr("th", _r2({
          ref: e,
          className: c.concat(t).join(" "),
          "data-date": u.isDisabled ? void 0 : tt(s),
          colSpan: a.colSpan
        }, a.extraDataAttrs), Hr("div", {
          className: "fc-scrollgrid-sync-inner"
        }, !u.isDisabled && Hr("a", _r2({
          ref: n,
          className: ["fc-col-header-cell-cushion", a.isSticky ? "fc-sticky" : ""].join(" ")
        }, p), o)));
      });
    }, t;
  }(jr),
      Ti = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context,
          n = t.dateEnv,
          o = t.theme,
          i = t.viewApi,
          a = t.options,
          s = ve(new Date(2592e5), e.dow),
          l = {
        dow: e.dow,
        isDisabled: !1,
        isFuture: !1,
        isPast: !1,
        isToday: !1,
        isOther: !1
      },
          u = [wi].concat(vr(l, o), e.extraClassNames || []),
          c = n.format(s, e.dayHeaderFormat),
          d = _r2(_r2(_r2(_r2({
        date: s
      }, l), {
        view: i
      }), e.extraHookProps), {
        text: c
      });

      return Hr(uo, {
        hookProps: d,
        classNames: a.dayHeaderClassNames,
        content: a.dayHeaderContent,
        defaultContent: ki,
        didMount: a.dayHeaderDidMount,
        willUnmount: a.dayHeaderWillUnmount
      }, function (t, n, o, i) {
        return Hr("th", _r2({
          ref: t,
          className: u.concat(n).join(" "),
          colSpan: e.colSpan
        }, e.extraDataAttrs), Hr("div", {
          className: "fc-scrollgrid-sync-inner"
        }, Hr("a", {
          className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "),
          ref: o
        }, i)));
      });
    }, t;
  }(jr);

  function ki(e) {
    return e.text;
  }

  var Mi = function (e) {
    function t(t, n) {
      var r = e.call(this, t, n) || this;
      return r.initialNowDate = Wn(n.options.now, n.dateEnv), r.initialNowQueriedMs = new Date().valueOf(), r.state = r.computeTiming().currentState, r;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.state;
      return e.children(t.nowDate, t.todayRange);
    }, t.prototype.componentDidMount = function () {
      this.setTimeout();
    }, t.prototype.componentDidUpdate = function (e) {
      e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
    }, t.prototype.componentWillUnmount = function () {
      this.clearTimeout();
    }, t.prototype.computeTiming = function () {
      var e = this.props,
          t = this.context,
          n = ge(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs),
          r = t.dateEnv.startOf(n, e.unit),
          o = t.dateEnv.add(r, Ye(1, e.unit)),
          i = o.valueOf() - n.valueOf();
      return {
        currentState: {
          nowDate: r,
          todayRange: xi(r)
        },
        nextState: {
          nowDate: o,
          todayRange: xi(o)
        },
        waitMs: i
      };
    }, t.prototype.setTimeout = function () {
      var e = this,
          t = this.computeTiming(),
          n = t.nextState,
          r = t.waitMs;
      this.timeoutId = setTimeout(function () {
        e.setState(n, function () {
          e.setTimeout();
        });
      }, r);
    }, t.prototype.clearTimeout = function () {
      this.timeoutId && clearTimeout(this.timeoutId);
    }, t.contextType = zr, t;
  }(Nr);

  function xi(e) {
    var t = be(e);
    return {
      start: t,
      end: ve(t, 1)
    };
  }

  var _i = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.createDayHeaderFormatter = it(Ii), t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.context,
          t = this.props,
          n = t.dates,
          r = t.dateProfile,
          o = t.datesRepDistinctDays,
          i = t.renderIntro,
          a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
      return Hr(Mi, {
        unit: "day"
      }, function (e, t) {
        return Hr("tr", null, i && i(), n.map(function (e) {
          return o ? Hr(Ri, {
            key: e.toISOString(),
            date: e,
            dateProfile: r,
            todayRange: t,
            colCnt: n.length,
            dayHeaderFormat: a
          }) : Hr(Ti, {
            key: e.getUTCDay(),
            dow: e.getUTCDay(),
            dayHeaderFormat: a
          });
        }));
      });
    }, t;
  }(jr);

  function Ii(e, t, n) {
    return e || Ci(t, n);
  }

  var Pi = function () {
    function e(e, t) {
      for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r;) {
        t.isHiddenDay(n) ? o.push(a + .5) : (a++, o.push(a), i.push(n)), n = ve(n, 1);
      }

      this.dates = i, this.indices = o, this.cnt = i.length;
    }

    return e.prototype.sliceRange = function (e) {
      var t = this.getDateDayIndex(e.start),
          n = this.getDateDayIndex(ve(e.end, -1)),
          r = Math.max(0, t),
          o = Math.min(this.cnt - 1, n);
      return (r = Math.ceil(r)) <= (o = Math.floor(o)) ? {
        firstIndex: r,
        lastIndex: o,
        isStart: t === r,
        isEnd: n === o
      } : null;
    }, e.prototype.getDateDayIndex = function (e) {
      var t = this.indices,
          n = Math.floor(ye(this.dates[0], e));
      return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n];
    }, e;
  }(),
      Ni = function () {
    function e(e, t) {
      var n,
          r,
          o,
          i = e.dates;

      if (t) {
        for (r = i[0].getUTCDay(), n = 1; n < i.length && i[n].getUTCDay() !== r; n++) {
          ;
        }

        o = Math.ceil(i.length / n);
      } else o = 1, n = i.length;

      this.rowCnt = o, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
    }

    return e.prototype.buildCells = function () {
      for (var e = [], t = 0; t < this.rowCnt; t++) {
        for (var n = [], r = 0; r < this.colCnt; r++) {
          n.push(this.buildCell(t, r));
        }

        e.push(n);
      }

      return e;
    }, e.prototype.buildCell = function (e, t) {
      var n = this.daySeries.dates[e * this.colCnt + t];
      return {
        key: n.toISOString(),
        date: n
      };
    }, e.prototype.buildHeaderDates = function () {
      for (var e = [], t = 0; t < this.colCnt; t++) {
        e.push(this.cells[0][t].date);
      }

      return e;
    }, e.prototype.sliceRange = function (e) {
      var t = this.colCnt,
          n = this.daySeries.sliceRange(e),
          r = [];
      if (n) for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i;) {
        var s = Math.floor(a / t),
            l = Math.min((s + 1) * t, i + 1);
        r.push({
          row: s,
          firstCol: a % t,
          lastCol: (l - 1) % t,
          isStart: n.isStart && a === o,
          isEnd: n.isEnd && l - 1 === i
        }), a = l;
      }
      return r;
    }, e;
  }(),
      Hi = function () {
    function e() {
      this.sliceBusinessHours = it(this._sliceBusinessHours), this.sliceDateSelection = it(this._sliceDateSpan), this.sliceEventStore = it(this._sliceEventStore), this.sliceEventDrag = it(this._sliceInteraction), this.sliceEventResize = it(this._sliceInteraction), this.forceDayIfListItem = !1;
    }

    return e.prototype.sliceProps = function (e, t, n, r) {
      for (var i = [], a = 4; a < arguments.length; a++) {
        i[a - 4] = arguments[a];
      }

      var s = e.eventUiBases,
          l = this.sliceEventStore.apply(this, o([e.eventStore, s, t, n], i));
      return {
        dateSelectionSegs: this.sliceDateSelection.apply(this, o([e.dateSelection, s, r], i)),
        businessHourSegs: this.sliceBusinessHours.apply(this, o([e.businessHours, t, n, r], i)),
        fgEventSegs: l.fg,
        bgEventSegs: l.bg,
        eventDrag: this.sliceEventDrag.apply(this, o([e.eventDrag, s, t, n], i)),
        eventResize: this.sliceEventResize.apply(this, o([e.eventResize, s, t, n], i)),
        eventSelection: e.eventSelection
      };
    }, e.prototype.sliceNowDate = function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) {
        n[r - 2] = arguments[r];
      }

      return this._sliceDateSpan.apply(this, o([{
        range: {
          start: e,
          end: ge(e, 1)
        },
        allDay: !1
      }, {}, t], n));
    }, e.prototype._sliceBusinessHours = function (e, t, n, r) {
      for (var i = [], a = 4; a < arguments.length; a++) {
        i[a - 4] = arguments[a];
      }

      return e ? this._sliceEventStore.apply(this, o([Be(e, Oi(t, Boolean(n)), r), {}, t, n], i)).bg : [];
    }, e.prototype._sliceEventStore = function (e, t, n, r) {
      for (var o = [], i = 4; i < arguments.length; i++) {
        o[i - 4] = arguments[i];
      }

      if (e) {
        var a = ln(e, t, Oi(n, Boolean(r)), r);
        return {
          bg: this.sliceEventRanges(a.bg, o),
          fg: this.sliceEventRanges(a.fg, o)
        };
      }

      return {
        bg: [],
        fg: []
      };
    }, e.prototype._sliceInteraction = function (e, t, n, r) {
      for (var o = [], i = 4; i < arguments.length; i++) {
        o[i - 4] = arguments[i];
      }

      if (!e) return null;
      var a = ln(e.mutatedEvents, t, Oi(n, Boolean(r)), r);
      return {
        segs: this.sliceEventRanges(a.fg, o),
        affectedInstances: e.affectedEvents.instances,
        isEvent: e.isEvent
      };
    }, e.prototype._sliceDateSpan = function (e, t, n) {
      for (var r = [], i = 3; i < arguments.length; i++) {
        r[i - 3] = arguments[i];
      }

      if (!e) return [];

      for (var a = Mn(e, t, n), s = this.sliceRange.apply(this, o([e.range], r)), l = 0, u = s; l < u.length; l++) {
        var c = u[l];
        c.eventRange = a;
      }

      return s;
    }, e.prototype.sliceEventRanges = function (e, t) {
      for (var n = [], r = 0, o = e; r < o.length; r++) {
        var i = o[r];
        n.push.apply(n, this.sliceEventRange(i, t));
      }

      return n;
    }, e.prototype.sliceEventRange = function (e, t) {
      var n = e.range;
      this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
        start: n.start,
        end: ve(n.start, 1)
      });

      for (var r = this.sliceRange.apply(this, o([n], t)), i = 0, a = r; i < a.length; i++) {
        var s = a[i];
        s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
      }

      return r;
    }, e;
  }();

  function Oi(e, t) {
    var n = e.activeRange;
    return t ? n : {
      start: ge(n.start, e.slotMinTime.milliseconds),
      end: ge(n.end, e.slotMaxTime.milliseconds - 864e5)
    };
  }

  var Ai = /^(visible|hidden)$/,
      Ui = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.handleEl = function (e) {
        t.el = e, Yr(t.props.elRef, e);
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = e.liquid,
          n = e.liquidIsAbsolute,
          r = t && n,
          o = ["fc-scroller"];
      return t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), Hr("div", {
        ref: this.handleEl,
        className: o.join(" "),
        style: {
          overflowX: e.overflowX,
          overflowY: e.overflowY,
          left: r && -(e.overcomeLeft || 0) || "",
          right: r && -(e.overcomeRight || 0) || "",
          bottom: r && -(e.overcomeBottom || 0) || "",
          marginLeft: !r && -(e.overcomeLeft || 0) || "",
          marginRight: !r && -(e.overcomeRight || 0) || "",
          marginBottom: !r && -(e.overcomeBottom || 0) || "",
          maxHeight: e.maxHeight || ""
        }
      }, e.children);
    }, t.prototype.needsXScrolling = function () {
      if (Ai.test(this.props.overflowX)) return !1;

      for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r++) {
        if (n[r].getBoundingClientRect().width > t) return !0;
      }

      return !1;
    }, t.prototype.needsYScrolling = function () {
      if (Ai.test(this.props.overflowY)) return !1;

      for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r++) {
        if (n[r].getBoundingClientRect().height > t) return !0;
      }

      return !1;
    }, t.prototype.getXScrollbarWidth = function () {
      return Ai.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
    }, t.prototype.getYScrollbarWidth = function () {
      return Ai.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
    }, t;
  }(jr),
      Li = function () {
    function e(e) {
      var t = this;
      this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function (e, n) {
        var r = t,
            o = r.depths,
            i = r.currentMap,
            a = !1,
            s = !1;
        null !== e ? (a = n in i, i[n] = e, o[n] = (o[n] || 0) + 1, s = !0) : 0 == --o[n] && (delete i[n], delete t.callbackMap[n], a = !0), t.masterCallback && (a && t.masterCallback(null, String(n)), s && t.masterCallback(e, String(n)));
      };
    }

    return e.prototype.createRef = function (e) {
      var t = this,
          n = this.callbackMap[e];
      return n || (n = this.callbackMap[e] = function (n) {
        t.handleValue(n, String(e));
      }), n;
    }, e.prototype.collect = function (e, t, n) {
      return Fe(this.currentMap, e, t, n);
    }, e.prototype.getAll = function () {
      return Ue(this.currentMap);
    }, e;
  }();

  function Wi(e) {
    for (var t = 0, n = 0, r = F(e, ".fc-scrollgrid-shrink"); n < r.length; n++) {
      var o = r[n];
      t = Math.max(t, pe(o));
    }

    return Math.ceil(t);
  }

  function Vi(e, t) {
    return e.liquid && t.liquid;
  }

  function zi(e, t) {
    return null != t.maxHeight || Vi(e, t);
  }

  function Fi(e, t, n) {
    var r = n.expandRows;
    return "function" == typeof t.content ? t.content(n) : Hr("table", {
      className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
      style: {
        minWidth: n.tableMinWidth,
        width: n.clientWidth,
        height: r ? n.clientHeight : ""
      }
    }, n.tableColGroupNode, Hr("tbody", {}, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent));
  }

  function Bi(e, t) {
    return ot(e, t, Le);
  }

  function ji(e, t) {
    for (var n = [], r = 0, i = e; r < i.length; r++) {
      for (var a = i[r], s = a.span || 1, l = 0; l < s; l++) {
        n.push(Hr("col", {
          style: {
            width: "shrink" === a.width ? Gi(t) : a.width || "",
            minWidth: a.minWidth || ""
          }
        }));
      }
    }

    return Hr.apply(void 0, o(["colgroup", {}], n));
  }

  function Gi(e) {
    return null == e ? 4 : e;
  }

  function qi(e) {
    for (var t = 0, n = e; t < n.length; t++) {
      if ("shrink" === n[t].width) return !0;
    }

    return !1;
  }

  function Yi(e, t) {
    var n = ["fc-scrollgrid", t.theme.getClass("table")];
    return e && n.push("fc-scrollgrid-liquid"), n;
  }

  function Zi(e, t) {
    var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
    return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
  }

  function Xi(e) {
    return Hr("div", {
      className: "fc-scrollgrid-sticky-shim",
      style: {
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      }
    });
  }

  function Ki(e) {
    var t = e.stickyHeaderDates;
    return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t;
  }

  function Ji(e) {
    var t = e.stickyFooterScrollbar;
    return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t;
  }

  var $i = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.processCols = it(function (e) {
        return e;
      }, Bi), t.renderMicroColGroup = it(ji), t.scrollerRefs = new Li(), t.scrollerElRefs = new Li(t._handleScrollerEl.bind(t)), t.state = {
        shrinkWidth: null,
        forceYScrollbars: !1,
        scrollerClientWidths: {},
        scrollerClientHeights: {}
      }, t.handleSizing = function () {
        t.setState(_r2({
          shrinkWidth: t.computeShrinkWidth()
        }, t.computeScrollerDims()));
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      for (var e, t = this.props, n = this.state, r = this.context, i = t.sections || [], a = this.processCols(t.cols), s = this.renderMicroColGroup(a, n.shrinkWidth), l = Yi(t.liquid, r), u = i.length, c = 0, d = [], p = [], f = []; c < u && "header" === (e = i[c]).type;) {
        d.push(this.renderSection(e, c, s)), c++;
      }

      for (; c < u && "body" === (e = i[c]).type;) {
        p.push(this.renderSection(e, c, s)), c++;
      }

      for (; c < u && "footer" === (e = i[c]).type;) {
        f.push(this.renderSection(e, c, s)), c++;
      }

      var h = !cr();
      return Hr("table", {
        className: l.join(" "),
        style: {
          height: t.height
        }
      }, Boolean(!h && d.length) && Hr.apply(void 0, o(["thead", {}], d)), Boolean(!h && p.length) && Hr.apply(void 0, o(["tbody", {}], p)), Boolean(!h && f.length) && Hr.apply(void 0, o(["tfoot", {}], f)), h && Hr.apply(void 0, o(["tbody", {}], d, p, f)));
    }, t.prototype.renderSection = function (e, t, n) {
      return "outerContent" in e ? Hr(Ur, {
        key: e.key
      }, e.outerContent) : Hr("tr", {
        key: e.key,
        className: Zi(e, this.props.liquid).join(" ")
      }, this.renderChunkTd(e, t, n, e.chunk));
    }, t.prototype.renderChunkTd = function (e, t, n, r) {
      if ("outerContent" in r) return r.outerContent;
      var o = this.props,
          i = this.state,
          a = i.forceYScrollbars,
          s = i.scrollerClientWidths,
          l = i.scrollerClientHeights,
          u = zi(o, e),
          c = Vi(o, e),
          d = o.liquid ? a ? "scroll" : u ? "auto" : "hidden" : "visible",
          p = Fi(e, r, {
        tableColGroupNode: n,
        tableMinWidth: "",
        clientWidth: void 0 !== s[t] ? s[t] : null,
        clientHeight: void 0 !== l[t] ? l[t] : null,
        expandRows: e.expandRows,
        syncRowHeights: !1,
        rowSyncHeights: [],
        reportRowHeightChange: function reportRowHeightChange() {}
      });
      return Hr("td", {
        ref: r.elRef
      }, Hr("div", {
        className: "fc-scroller-harness" + (c ? " fc-scroller-harness-liquid" : "")
      }, Hr(Ui, {
        ref: this.scrollerRefs.createRef(t),
        elRef: this.scrollerElRefs.createRef(t),
        overflowY: d,
        overflowX: o.liquid ? "hidden" : "visible",
        maxHeight: e.maxHeight,
        liquid: c,
        liquidIsAbsolute: !0
      }, p)));
    }, t.prototype._handleScrollerEl = function (e, t) {
      var n = parseInt(t, 10);
      Yr(this.props.sections[n].chunk.scrollerElRef, e);
    }, t.prototype.componentDidMount = function () {
      this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
    }, t.prototype.componentDidUpdate = function () {
      this.handleSizing();
    }, t.prototype.componentWillUnmount = function () {
      this.context.removeResizeHandler(this.handleSizing);
    }, t.prototype.computeShrinkWidth = function () {
      return qi(this.props.cols) ? Wi(this.scrollerElRefs.getAll()) : 0;
    }, t.prototype.computeScrollerDims = function () {
      for (var e = Sr(), t = this.props.sections.length, n = this.scrollerRefs, r = this.scrollerElRefs, o = !1, i = {}, a = {}, s = 0; s < t; s++) {
        var l = n.currentMap[s];

        if (l && l.needsYScrolling()) {
          o = !0;
          break;
        }
      }

      for (s = 0; s < t; s++) {
        var u = r.currentMap[s];

        if (u) {
          var c = u.parentNode;
          i[s] = Math.floor(c.getBoundingClientRect().width - (o ? e.y : 0)), a[s] = Math.floor(c.getBoundingClientRect().height);
        }
      }

      return {
        forceYScrollbars: o,
        scrollerClientWidths: i,
        scrollerClientHeights: a
      };
    }, t;
  }(jr);

  $i.addStateEquality({
    scrollerClientWidths: Le,
    scrollerClientHeights: Le
  });

  var Qi = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.elRef = Ar(), t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context,
          n = t.options,
          r = e.seg,
          o = r.eventRange,
          i = o.ui,
          a = {
        event: new zn(t, o.def, o.instance),
        view: t.viewApi,
        timeText: e.timeText,
        textColor: i.textColor,
        backgroundColor: i.backgroundColor,
        borderColor: i.borderColor,
        isDraggable: !e.disableDragging && gn(r, t),
        isStartResizable: !e.disableResizing && mn(r, t),
        isEndResizable: !e.disableResizing && yn(r),
        isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
        isStart: Boolean(r.isStart),
        isEnd: Boolean(r.isEnd),
        isPast: Boolean(e.isPast),
        isFuture: Boolean(e.isFuture),
        isToday: Boolean(e.isToday),
        isSelected: Boolean(e.isSelected),
        isDragging: Boolean(e.isDragging),
        isResizing: Boolean(e.isResizing)
      },
          s = Dn(a).concat(i.classNames);
      return Hr(uo, {
        hookProps: a,
        classNames: n.eventClassNames,
        content: n.eventContent,
        defaultContent: e.defaultContent,
        didMount: n.eventDidMount,
        willUnmount: n.eventWillUnmount,
        elRef: this.elRef
      }, function (t, n, r, o) {
        return e.children(t, s.concat(n), r, o, a);
      });
    }, t.prototype.componentDidMount = function () {
      cn(this.elRef.current, this.props.seg);
    }, t.prototype.componentDidUpdate = function (e) {
      var t = this.props.seg;
      t !== e.seg && cn(this.elRef.current, t);
    }, t;
  }(jr),
      ea = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context,
          n = e.seg,
          o = t.options.eventTimeFormat || e.defaultTimeFormat,
          i = En(n, o, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
      return Hr(Qi, {
        seg: n,
        timeText: i,
        disableDragging: e.disableDragging,
        disableResizing: e.disableResizing,
        defaultContent: e.defaultContent || ta,
        isDragging: e.isDragging,
        isResizing: e.isResizing,
        isDateSelecting: e.isDateSelecting,
        isSelected: e.isSelected,
        isPast: e.isPast,
        isFuture: e.isFuture,
        isToday: e.isToday
      }, function (t, o, i, a, s) {
        return Hr("a", _r2({
          className: e.extraClassNames.concat(o).join(" "),
          style: {
            borderColor: s.borderColor,
            backgroundColor: s.backgroundColor
          },
          ref: t
        }, function (e) {
          var t = e.eventRange.def.url;
          return t ? {
            href: t
          } : {};
        }(n)), Hr("div", {
          className: "fc-event-main",
          ref: i,
          style: {
            color: s.textColor
          }
        }, a), s.isStartResizable && Hr("div", {
          className: "fc-event-resizer fc-event-resizer-start"
        }), s.isEndResizable && Hr("div", {
          className: "fc-event-resizer fc-event-resizer-end"
        }));
      });
    }, t;
  }(jr);

  function ta(e) {
    return Hr("div", {
      className: "fc-event-main-frame"
    }, e.timeText && Hr("div", {
      className: "fc-event-time"
    }, e.timeText), Hr("div", {
      className: "fc-event-title-container"
    }, Hr("div", {
      className: "fc-event-title fc-sticky"
    }, e.event.title || Hr(Ur, null, " "))));
  }

  var na = function na(e) {
    return Hr(zr.Consumer, null, function (t) {
      var n = t.options,
          r = {
        isAxis: e.isAxis,
        date: t.dateEnv.toDate(e.date),
        view: t.viewApi
      };
      return Hr(uo, {
        hookProps: r,
        classNames: n.nowIndicatorClassNames,
        content: n.nowIndicatorContent,
        didMount: n.nowIndicatorDidMount,
        willUnmount: n.nowIndicatorWillUnmount
      }, e.children);
    });
  },
      ra = St({
    day: "numeric"
  }),
      oa = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.refineHookProps = at(aa), t.normalizeClassNames = vo(), t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context,
          n = t.options,
          r = this.refineHookProps({
        date: e.date,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        showDayNumber: e.showDayNumber,
        extraProps: e.extraHookProps,
        viewApi: t.viewApi,
        dateEnv: t.dateEnv
      }),
          o = vr(r, t.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)),
          i = r.isDisabled ? {} : {
        "data-date": tt(e.date)
      };
      return Hr(ho, {
        hookProps: r,
        didMount: n.dayCellDidMount,
        willUnmount: n.dayCellWillUnmount,
        elRef: e.elRef
      }, function (t) {
        return e.children(t, o, i, r.isDisabled);
      });
    }, t;
  }(jr),
      ia = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context,
          n = t.options,
          r = aa({
        date: e.date,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        showDayNumber: e.showDayNumber,
        extraProps: e.extraHookProps,
        viewApi: t.viewApi,
        dateEnv: t.dateEnv
      });
      return Hr(po, {
        hookProps: r,
        content: n.dayCellContent,
        defaultContent: e.defaultContent
      }, e.children);
    }, t;
  }(jr);

  function aa(e) {
    var t = e.date,
        n = e.dateEnv,
        o = hr(t, e.todayRange, null, e.dateProfile);
    return _r2(_r2(_r2({
      date: n.toDate(t),
      view: e.viewApi
    }, o), {
      dayNumberText: e.showDayNumber ? n.format(t, ra) : ""
    }), e.extraProps);
  }

  function sa(e) {
    return Hr("div", {
      className: "fc-" + e
    });
  }

  var la = function la(e) {
    return Hr(Qi, {
      defaultContent: ua,
      seg: e.seg,
      timeText: "",
      disableDragging: !0,
      disableResizing: !0,
      isDragging: !1,
      isResizing: !1,
      isDateSelecting: !1,
      isSelected: !1,
      isPast: e.isPast,
      isFuture: e.isFuture,
      isToday: e.isToday
    }, function (e, t, n, r, o) {
      return Hr("div", {
        ref: e,
        className: ["fc-bg-event"].concat(t).join(" "),
        style: {
          backgroundColor: o.backgroundColor
        }
      }, r);
    });
  };

  function ua(e) {
    return e.event.title && Hr("div", {
      className: "fc-event-title"
    }, e.event.title);
  }

  var ca = function ca(e) {
    return Hr(zr.Consumer, null, function (t) {
      var n = t.dateEnv,
          r = t.options,
          o = e.date,
          i = r.weekNumberFormat || e.defaultFormat,
          a = n.computeWeekNumber(o),
          s = n.format(o, i);
      return Hr(uo, {
        hookProps: {
          num: a,
          text: s,
          date: o
        },
        classNames: r.weekNumberClassNames,
        content: r.weekNumberContent,
        defaultContent: da,
        didMount: r.weekNumberDidMount,
        willUnmount: r.weekNumberWillUnmount
      }, e.children);
    });
  };

  function da(e) {
    return e.text;
  }

  var pa = function (e) {
    function t(t, n) {
      void 0 === n && (n = {});
      var o = e.call(this) || this;
      return o.isRendering = !1, o.isRendered = !1, o.currentClassNames = [], o.customContentRenderId = 0, o.handleAction = function (e) {
        switch (e.type) {
          case "SET_EVENT_DRAG":
          case "SET_EVENT_RESIZE":
            o.renderRunner.tryDrain();
        }
      }, o.handleData = function (e) {
        o.currentData = e, o.renderRunner.request(e.calendarOptions.rerenderDelay);
      }, o.handleRenderRequest = function () {
        if (o.isRendering) {
          o.isRendered = !0;
          var e = o.currentData;
          Or(Hr(bi, {
            options: e.calendarOptions,
            theme: e.theme,
            emitter: e.emitter
          }, function (t, n, i, a) {
            return o.setClassNames(t), o.setHeight(n), Hr(co.Provider, {
              value: o.customContentRenderId
            }, Hr(Ei, _r2({
              isHeightAuto: i,
              forPrint: a
            }, e)));
          }), o.el);
        } else o.isRendered && (o.isRendered = !1, Or(null, o.el), o.setClassNames([]), o.setHeight(""));

        Wr();
      }, o.el = t, o.renderRunner = new Go(o.handleRenderRequest), new Zo({
        optionOverrides: n,
        calendarApi: o,
        onAction: o.handleAction,
        onData: o.handleData
      }), o;
    }

    return n(t, e), Object.defineProperty(t.prototype, "view", {
      get: function get() {
        return this.currentData.viewApi;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.render = function () {
      var e = this.isRendering;
      e ? this.customContentRenderId++ : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
    }, t.prototype.destroy = function () {
      this.isRendering && (this.isRendering = !1, this.renderRunner.request());
    }, t.prototype.updateSize = function () {
      e.prototype.updateSize.call(this), Wr();
    }, t.prototype.batchRendering = function (e) {
      this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
    }, t.prototype.pauseRendering = function () {
      this.renderRunner.pause("pauseRendering");
    }, t.prototype.resumeRendering = function () {
      this.renderRunner.resume("pauseRendering", !0);
    }, t.prototype.resetOptions = function (e, t) {
      this.currentDataManager.resetOptions(e, t);
    }, t.prototype.setClassNames = function (e) {
      if (!ot(e, this.currentClassNames)) {
        for (var t = this.el.classList, n = 0, r = this.currentClassNames; n < r.length; n++) {
          var o = r[n];
          t.remove(o);
        }

        for (var i = 0, a = e; i < a.length; i++) {
          o = a[i];
          t.add(o);
        }

        this.currentClassNames = e;
      }
    }, t.prototype.setHeight = function (e) {
      G(this.el, "height", e);
    }, t;
  }(Vn);

  di.touchMouseIgnoreWait = 500;

  var fa = 0,
      ha = 0,
      va = !1,
      ga = function () {
    function e(e) {
      var t = this;
      this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function (e) {
        if (!t.shouldIgnoreMouse() && function (e) {
          return 0 === e.button && !e.ctrlKey;
        }(e) && t.tryStart(e)) {
          var n = t.createEventFromMouse(e, !0);
          t.emitter.trigger("pointerdown", n), t.initScrollWatch(n), t.shouldIgnoreMove || document.addEventListener("mousemove", t.handleMouseMove), document.addEventListener("mouseup", t.handleMouseUp);
        }
      }, this.handleMouseMove = function (e) {
        var n = t.createEventFromMouse(e);
        t.recordCoords(n), t.emitter.trigger("pointermove", n);
      }, this.handleMouseUp = function (e) {
        document.removeEventListener("mousemove", t.handleMouseMove), document.removeEventListener("mouseup", t.handleMouseUp), t.emitter.trigger("pointerup", t.createEventFromMouse(e)), t.cleanup();
      }, this.handleTouchStart = function (e) {
        if (t.tryStart(e)) {
          t.isTouchDragging = !0;
          var n = t.createEventFromTouch(e, !0);
          t.emitter.trigger("pointerdown", n), t.initScrollWatch(n);
          var r = e.target;
          t.shouldIgnoreMove || r.addEventListener("touchmove", t.handleTouchMove), r.addEventListener("touchend", t.handleTouchEnd), r.addEventListener("touchcancel", t.handleTouchEnd), window.addEventListener("scroll", t.handleTouchScroll, !0);
        }
      }, this.handleTouchMove = function (e) {
        var n = t.createEventFromTouch(e);
        t.recordCoords(n), t.emitter.trigger("pointermove", n);
      }, this.handleTouchEnd = function (e) {
        if (t.isDragging) {
          var n = e.target;
          n.removeEventListener("touchmove", t.handleTouchMove), n.removeEventListener("touchend", t.handleTouchEnd), n.removeEventListener("touchcancel", t.handleTouchEnd), window.removeEventListener("scroll", t.handleTouchScroll, !0), t.emitter.trigger("pointerup", t.createEventFromTouch(e)), t.cleanup(), t.isTouchDragging = !1, fa++, setTimeout(function () {
            fa--;
          }, di.touchMouseIgnoreWait);
        }
      }, this.handleTouchScroll = function () {
        t.wasTouchScroll = !0;
      }, this.handleScroll = function (e) {
        if (!t.shouldIgnoreMove) {
          var n = window.pageXOffset - t.prevScrollX + t.prevPageX,
              r = window.pageYOffset - t.prevScrollY + t.prevPageY;
          t.emitter.trigger("pointermove", {
            origEvent: e,
            isTouch: t.isTouchDragging,
            subjectEl: t.subjectEl,
            pageX: n,
            pageY: r,
            deltaX: n - t.origPageX,
            deltaY: r - t.origPageY
          });
        }
      }, this.containerEl = e, this.emitter = new kr(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
        passive: !0
      }), ha++ || window.addEventListener("touchmove", ma, {
        passive: !1
      });
    }

    return e.prototype.destroy = function () {
      this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
        passive: !0
      }), --ha || window.removeEventListener("touchmove", ma, {
        passive: !1
      });
    }, e.prototype.tryStart = function (e) {
      var t = this.querySubjectEl(e),
          n = e.target;
      return !(!t || this.handleSelector && !V(n, this.handleSelector)) && (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0);
    }, e.prototype.cleanup = function () {
      va = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
    }, e.prototype.querySubjectEl = function (e) {
      return this.selector ? V(e.target, this.selector) : this.containerEl;
    }, e.prototype.shouldIgnoreMouse = function () {
      return fa || this.isTouchDragging;
    }, e.prototype.cancelTouchScroll = function () {
      this.isDragging && (va = !0);
    }, e.prototype.initScrollWatch = function (e) {
      this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
    }, e.prototype.recordCoords = function (e) {
      this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
    }, e.prototype.destroyScrollWatch = function () {
      this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
    }, e.prototype.createEventFromMouse = function (e, t) {
      var n = 0,
          r = 0;
      return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
        origEvent: e,
        isTouch: !1,
        subjectEl: this.subjectEl,
        pageX: e.pageX,
        pageY: e.pageY,
        deltaX: n,
        deltaY: r
      };
    }, e.prototype.createEventFromTouch = function (e, t) {
      var n,
          r,
          o = e.touches,
          i = 0,
          a = 0;
      return o && o.length ? (n = o[0].pageX, r = o[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (i = n - this.origPageX, a = r - this.origPageY), {
        origEvent: e,
        isTouch: !0,
        subjectEl: this.subjectEl,
        pageX: n,
        pageY: r,
        deltaX: i,
        deltaY: a
      };
    }, e;
  }();

  function ma(e) {
    va && e.preventDefault();
  }

  var ya = function () {
    function e() {
      this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
    }

    return e.prototype.start = function (e, t, n) {
      this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
    }, e.prototype.handleMove = function (e, t) {
      this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition();
    }, e.prototype.setIsVisible = function (e) {
      e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
    }, e.prototype.stop = function (e, t) {
      var n = this,
          r = function r() {
        n.cleanup(), t();
      };

      e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0);
    }, e.prototype.doRevertAnimation = function (e, t) {
      var n = this.mirrorEl,
          r = this.sourceEl.getBoundingClientRect();
      n.style.transition = "top " + t + "ms,left " + t + "ms", j(n, {
        left: r.left,
        top: r.top
      }), K(n, function () {
        n.style.transition = "", e();
      });
    }, e.prototype.cleanup = function () {
      this.mirrorEl && (W(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
    }, e.prototype.updateElPosition = function () {
      this.sourceEl && this.isVisible && j(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }, e.prototype.getMirrorEl = function () {
      var e = this.sourceElRect,
          t = this.mirrorEl;
      return t || ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"), t.classList.add("fc-event-dragging"), j(t, {
        position: "fixed",
        zIndex: this.zIndex,
        visibility: "",
        boxSizing: "border-box",
        width: e.right - e.left,
        height: e.bottom - e.top,
        right: "auto",
        bottom: "auto",
        margin: 0
      }), this.parentNode.appendChild(t)), t;
    }, e;
  }(),
      Ea = function (e) {
    function t(t, n) {
      var r = e.call(this) || this;
      return r.handleScroll = function () {
        r.scrollTop = r.scrollController.getScrollTop(), r.scrollLeft = r.scrollController.getScrollLeft(), r.handleScrollChange();
      }, r.scrollController = t, r.doesListening = n, r.scrollTop = r.origScrollTop = t.getScrollTop(), r.scrollLeft = r.origScrollLeft = t.getScrollLeft(), r.scrollWidth = t.getScrollWidth(), r.scrollHeight = t.getScrollHeight(), r.clientWidth = t.getClientWidth(), r.clientHeight = t.getClientHeight(), r.clientRect = r.computeClientRect(), r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll), r;
    }

    return n(t, e), t.prototype.destroy = function () {
      this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
    }, t.prototype.getScrollTop = function () {
      return this.scrollTop;
    }, t.prototype.getScrollLeft = function () {
      return this.scrollLeft;
    }, t.prototype.setScrollTop = function (e) {
      this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
    }, t.prototype.setScrollLeft = function (e) {
      this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
    }, t.prototype.getClientWidth = function () {
      return this.clientWidth;
    }, t.prototype.getClientHeight = function () {
      return this.clientHeight;
    }, t.prototype.getScrollWidth = function () {
      return this.scrollWidth;
    }, t.prototype.getScrollHeight = function () {
      return this.scrollHeight;
    }, t.prototype.handleScrollChange = function () {}, t;
  }(xr),
      Sa = function (e) {
    function t(t, n) {
      return e.call(this, new _r(t), n) || this;
    }

    return n(t, e), t.prototype.getEventTarget = function () {
      return this.scrollController.el;
    }, t.prototype.computeClientRect = function () {
      return Cr(this.scrollController.el);
    }, t;
  }(Ea),
      Da = function (e) {
    function t(t) {
      return e.call(this, new Ir(), t) || this;
    }

    return n(t, e), t.prototype.getEventTarget = function () {
      return window;
    }, t.prototype.computeClientRect = function () {
      return {
        left: this.scrollLeft,
        right: this.scrollLeft + this.clientWidth,
        top: this.scrollTop,
        bottom: this.scrollTop + this.clientHeight
      };
    }, t.prototype.handleScrollChange = function () {
      this.clientRect = this.computeClientRect();
    }, t;
  }(Ea),
      ba = "function" == typeof performance ? performance.now : Date.now,
      Ca = function () {
    function e() {
      var e = this;
      this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function () {
        if (e.isAnimating) {
          var t = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);

          if (t) {
            var n = ba();
            e.handleSide(t, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n);
          } else e.isAnimating = !1;
        }
      };
    }

    return e.prototype.start = function (e, t) {
      this.isEnabled && (this.scrollCaches = this.buildCaches(), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t));
    }, e.prototype.handleMove = function (e, t) {
      if (this.isEnabled) {
        var n = e - window.pageXOffset,
            r = t - window.pageYOffset,
            o = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
            i = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
        o < 0 ? this.everMovedUp = !0 : o > 0 && (this.everMovedDown = !0), i < 0 ? this.everMovedLeft = !0 : i > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(ba()));
      }
    }, e.prototype.stop = function () {
      if (this.isEnabled) {
        this.isAnimating = !1;

        for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
          t[e].destroy();
        }

        this.scrollCaches = null;
      }
    }, e.prototype.requestAnimation = function (e) {
      this.msSinceRequest = e, requestAnimationFrame(this.animate);
    }, e.prototype.handleSide = function (e, t) {
      var n = e.scrollCache,
          r = this.edgeThreshold,
          o = r - e.distance,
          i = o * o / (r * r) * this.maxVelocity * t,
          a = 1;

      switch (e.name) {
        case "left":
          a = -1;

        case "right":
          n.setScrollLeft(n.getScrollLeft() + i * a);
          break;

        case "top":
          a = -1;

        case "bottom":
          n.setScrollTop(n.getScrollTop() + i * a);
      }
    }, e.prototype.computeBestEdge = function (e, t) {
      for (var n = this.edgeThreshold, r = null, o = 0, i = this.scrollCaches; o < i.length; o++) {
        var a = i[o],
            s = a.clientRect,
            l = e - s.left,
            u = s.right - e,
            c = t - s.top,
            d = s.bottom - t;
        l >= 0 && u >= 0 && c >= 0 && d >= 0 && (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
          scrollCache: a,
          name: "top",
          distance: c
        }), d <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > d) && (r = {
          scrollCache: a,
          name: "bottom",
          distance: d
        }), l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = {
          scrollCache: a,
          name: "left",
          distance: l
        }), u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = {
          scrollCache: a,
          name: "right",
          distance: u
        }));
      }

      return r;
    }, e.prototype.buildCaches = function () {
      return this.queryScrollEls().map(function (e) {
        return e === window ? new Da(!1) : new Sa(e, !1);
      });
    }, e.prototype.queryScrollEls = function () {
      for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
        var r = n[t];
        "object" == _typeof(r) ? e.push(r) : e.push.apply(e, Array.prototype.slice.call(document.querySelectorAll(r)));
      }

      return e;
    }, e;
  }(),
      wa = function (e) {
    function t(t, n) {
      var r = e.call(this, t) || this;
      r.delay = null, r.minDistance = 0, r.touchScrollAllowed = !0, r.mirrorNeedsRevert = !1, r.isInteracting = !1, r.isDragging = !1, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, r.delayTimeoutId = null, r.onPointerDown = function (e) {
        r.isDragging || (r.isInteracting = !0, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, te(document.body), re(document.body), e.isTouch || e.origEvent.preventDefault(), r.emitter.trigger("pointerdown", e), r.isInteracting && !r.pointer.shouldIgnoreMove && (r.mirror.setIsVisible(!1), r.mirror.start(e.subjectEl, e.pageX, e.pageY), r.startDelay(e), r.minDistance || r.handleDistanceSurpassed(e)));
      }, r.onPointerMove = function (e) {
        if (r.isInteracting) {
          if (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed) {
            var t = r.minDistance,
                n = e.deltaX,
                o = e.deltaY;
            n * n + o * o >= t * t && r.handleDistanceSurpassed(e);
          }

          r.isDragging && ("scroll" !== e.origEvent.type && (r.mirror.handleMove(e.pageX, e.pageY), r.autoScroller.handleMove(e.pageX, e.pageY)), r.emitter.trigger("dragmove", e));
        }
      }, r.onPointerUp = function (e) {
        r.isInteracting && (r.isInteracting = !1, ne(document.body), oe(document.body), r.emitter.trigger("pointerup", e), r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)), r.delayTimeoutId && (clearTimeout(r.delayTimeoutId), r.delayTimeoutId = null));
      };
      var o = r.pointer = new ga(t);
      return o.emitter.on("pointerdown", r.onPointerDown), o.emitter.on("pointermove", r.onPointerMove), o.emitter.on("pointerup", r.onPointerUp), n && (o.selector = n), r.mirror = new ya(), r.autoScroller = new Ca(), r;
    }

    return n(t, e), t.prototype.destroy = function () {
      this.pointer.destroy(), this.onPointerUp({});
    }, t.prototype.startDelay = function (e) {
      var t = this;
      "number" == typeof this.delay ? this.delayTimeoutId = setTimeout(function () {
        t.delayTimeoutId = null, t.handleDelayEnd(e);
      }, this.delay) : this.handleDelayEnd(e);
    }, t.prototype.handleDelayEnd = function (e) {
      this.isDelayEnded = !0, this.tryStartDrag(e);
    }, t.prototype.handleDistanceSurpassed = function (e) {
      this.isDistanceSurpassed = !0, this.tryStartDrag(e);
    }, t.prototype.tryStartDrag = function (e) {
      this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()));
    }, t.prototype.tryStopDrag = function (e) {
      this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
    }, t.prototype.stopDrag = function (e) {
      this.isDragging = !1, this.emitter.trigger("dragend", e);
    }, t.prototype.setIgnoreMove = function (e) {
      this.pointer.shouldIgnoreMove = e;
    }, t.prototype.setMirrorIsVisible = function (e) {
      this.mirror.setIsVisible(e);
    }, t.prototype.setMirrorNeedsRevert = function (e) {
      this.mirrorNeedsRevert = e;
    }, t.prototype.setAutoScrollEnabled = function (e) {
      this.autoScroller.isEnabled = e;
    }, t;
  }(ci),
      Ra = function () {
    function e(e) {
      this.origRect = wr(e), this.scrollCaches = Rr(e).map(function (e) {
        return new Sa(e, !0);
      });
    }

    return e.prototype.destroy = function () {
      for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
        t[e].destroy();
      }
    }, e.prototype.computeLeft = function () {
      for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
        var r = n[t];
        e += r.origScrollLeft - r.getScrollLeft();
      }

      return e;
    }, e.prototype.computeTop = function () {
      for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
        var r = n[t];
        e += r.origScrollTop - r.getScrollTop();
      }

      return e;
    }, e.prototype.isWithinClipping = function (e, t) {
      for (var n, r, o = {
        left: e,
        top: t
      }, i = 0, a = this.scrollCaches; i < a.length; i++) {
        var s = a[i];
        if (n = s.getEventTarget(), r = void 0, "HTML" !== (r = n.tagName) && "BODY" !== r && !ir(o, s.clientRect)) return !1;
      }

      return !0;
    }, e;
  }();

  var Ta = function () {
    function e(e, t) {
      var n = this;
      this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function (e) {
        var t = n.dragging;
        n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(e), n.initialHit || !n.requireInitial ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0);
      }, this.handleDragStart = function (e) {
        n.emitter.trigger("dragstart", e), n.handleMove(e, !0);
      }, this.handleDragMove = function (e) {
        n.emitter.trigger("dragmove", e), n.handleMove(e);
      }, this.handlePointerUp = function (e) {
        n.releaseHits(), n.emitter.trigger("pointerup", e);
      }, this.handleDragEnd = function (e) {
        n.movingHit && n.emitter.trigger("hitupdate", null, !0, e), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", e);
      }, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new kr();
    }

    return e.prototype.processFirstCoord = function (e) {
      var t,
          n = {
        left: e.pageX,
        top: e.pageY
      },
          r = n,
          o = e.subjectEl;
      o !== document && (r = sr(r, t = wr(o)));
      var i = this.initialHit = this.queryHitForOffset(r.left, r.top);

      if (i) {
        if (this.useSubjectCenter && t) {
          var a = ar(t, i.rect);
          a && (r = lr(a));
        }

        this.coordAdjust = ur(r, n);
      } else this.coordAdjust = {
        left: 0,
        top: 0
      };
    }, e.prototype.handleMove = function (e, t) {
      var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
      !t && ka(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
    }, e.prototype.prepareHits = function () {
      this.offsetTrackers = Oe(this.droppableStore, function (e) {
        return e.component.prepareHits(), new Ra(e.el);
      });
    }, e.prototype.releaseHits = function () {
      var e = this.offsetTrackers;

      for (var t in e) {
        e[t].destroy();
      }

      this.offsetTrackers = {};
    }, e.prototype.queryHitForOffset = function (e, t) {
      var n = this.droppableStore,
          r = this.offsetTrackers,
          o = null;

      for (var i in n) {
        var a = n[i].component,
            s = r[i];

        if (s && s.isWithinClipping(e, t)) {
          var l = s.computeLeft(),
              u = s.computeTop(),
              c = e - l,
              d = t - u,
              p = s.origRect,
              f = p.right - p.left,
              h = p.bottom - p.top;

          if (c >= 0 && c < f && d >= 0 && d < h) {
            var v = a.queryHit(c, d, f, h),
                g = a.context.getCurrentData().dateProfile;
            v && an(g.activeRange, v.dateSpan.range) && (!o || v.layer > o.layer) && (v.rect.left += l, v.rect.right += l, v.rect.top += u, v.rect.bottom += u, o = v);
          }
        }
      }

      return o;
    }, e;
  }();

  function ka(e, t) {
    return !e && !t || Boolean(e) === Boolean(t) && Rn(e.dateSpan, t.dateSpan);
  }

  function Ma(e, t) {
    for (var n, o, i = {}, a = 0, s = t.pluginHooks.datePointTransforms; a < s.length; a++) {
      var l = s[a];

      _r2(i, l(e, t));
    }

    return _r2(i, (n = e, {
      date: (o = t.dateEnv).toDate(n.range.start),
      dateStr: o.formatIso(n.range.start, {
        omitTime: n.allDay
      }),
      allDay: n.allDay
    })), i;
  }

  var xa = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.handlePointerDown = function (e) {
        var t = n.dragging,
            r = e.origEvent.target;
        t.setIgnoreMove(!n.component.isValidDateDownEl(r));
      }, n.handleDragEnd = function (e) {
        var t = n.component;

        if (!n.dragging.pointer.wasTouchScroll) {
          var o = n.hitDragging,
              i = o.initialHit,
              a = o.finalHit;

          if (i && a && ka(i, a)) {
            var s = t.context,
                l = _r2(_r2({}, Ma(i.dateSpan, s)), {
              dayEl: i.dayEl,
              jsEvent: e.origEvent,
              view: s.viewApi || s.calendarApi.view
            });

            s.emitter.trigger("dateClick", l);
          }
        }
      }, n.dragging = new wa(t.el), n.dragging.autoScroller.isEnabled = !1;
      var o = n.hitDragging = new Ta(n.dragging, li(t));
      return o.emitter.on("pointerdown", n.handlePointerDown), o.emitter.on("dragend", n.handleDragEnd), n;
    }

    return n(t, e), t.prototype.destroy = function () {
      this.dragging.destroy();
    }, t;
  }(ai),
      _a = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.dragSelection = null, n.handlePointerDown = function (e) {
        var t = n,
            r = t.component,
            o = t.dragging,
            i = r.context.options.selectable && r.isValidDateDownEl(e.origEvent.target);
        o.setIgnoreMove(!i), o.delay = e.isTouch ? function (e) {
          var t = e.context.options,
              n = t.selectLongPressDelay;
          null == n && (n = t.longPressDelay);
          return n;
        }(r) : null;
      }, n.handleDragStart = function (e) {
        n.component.context.calendarApi.unselect(e);
      }, n.handleHitUpdate = function (e, t) {
        var o = n.component.context,
            i = null,
            a = !1;
        e && ((i = function (e, t, n) {
          var o = e.dateSpan,
              i = t.dateSpan,
              a = [o.range.start, o.range.end, i.range.start, i.range.end];
          a.sort(ce);

          for (var s = {}, l = 0, u = n; l < u.length; l++) {
            var c = (0, u[l])(e, t);
            if (!1 === c) return null;
            c && _r2(s, c);
          }

          return s.range = {
            start: a[0],
            end: a[3]
          }, s.allDay = o.allDay, s;
        }(n.hitDragging.initialHit, e, o.pluginHooks.dateSelectionTransformers)) && n.component.isDateSelectionValid(i) || (a = !0, i = null)), i ? o.dispatch({
          type: "SELECT_DATES",
          selection: i
        }) : t || o.dispatch({
          type: "UNSELECT_DATES"
        }), a ? Q() : ee(), t || (n.dragSelection = i);
      }, n.handlePointerUp = function (e) {
        n.dragSelection && (xn(n.dragSelection, e, n.component.context), n.dragSelection = null);
      };
      var o = t.component.context.options,
          i = n.dragging = new wa(t.el);
      i.touchScrollAllowed = !1, i.minDistance = o.selectMinDistance || 0, i.autoScroller.isEnabled = o.dragScroll;
      var a = n.hitDragging = new Ta(n.dragging, li(t));
      return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("pointerup", n.handlePointerUp), n;
    }

    return n(t, e), t.prototype.destroy = function () {
      this.dragging.destroy();
    }, t;
  }(ai);

  var Ia = function (e) {
    function t(n) {
      var o = e.call(this, n) || this;
      o.subjectEl = null, o.subjectSeg = null, o.isDragging = !1, o.eventRange = null, o.relevantEvents = null, o.receivingContext = null, o.validMutation = null, o.mutatedRelevantEvents = null, o.handlePointerDown = function (e) {
        var t = e.origEvent.target,
            n = o,
            r = n.component,
            i = n.dragging,
            a = i.mirror,
            s = r.context.options,
            l = r.context;
        o.subjectEl = e.subjectEl;
        var u = o.subjectSeg = dn(e.subjectEl),
            c = (o.eventRange = u.eventRange).instance.instanceId;
        o.relevantEvents = Nt(l.getCurrentData().eventStore, c), i.minDistance = e.isTouch ? 0 : s.eventDragMinDistance, i.delay = e.isTouch && c !== r.props.eventSelection ? function (e) {
          var t = e.context.options,
              n = t.eventLongPressDelay;
          null == n && (n = t.longPressDelay);
          return n;
        }(r) : null, a.parentNode = V(t, ".fc"), a.revertDuration = s.dragRevertDuration;
        var d = r.isValidSegDownEl(t) && !V(t, ".fc-event-resizer");
        i.setIgnoreMove(!d), o.isDragging = d && e.subjectEl.classList.contains("fc-event-draggable");
      }, o.handleDragStart = function (e) {
        var t = o.component.context,
            n = o.eventRange,
            r = n.instance.instanceId;
        e.isTouch ? r !== o.component.props.eventSelection && t.dispatch({
          type: "SELECT_EVENT",
          eventInstanceId: r
        }) : t.dispatch({
          type: "UNSELECT_EVENT"
        }), o.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
          el: o.subjectEl,
          event: new zn(t, n.def, n.instance),
          jsEvent: e.origEvent,
          view: t.viewApi
        }));
      }, o.handleHitUpdate = function (e, t) {
        if (o.isDragging) {
          var n = o.relevantEvents,
              r = o.hitDragging.initialHit,
              i = o.component.context,
              a = null,
              s = null,
              l = null,
              u = !1,
              c = {
            affectedEvents: n,
            mutatedEvents: {
              defs: {},
              instances: {}
            },
            isEvent: !0
          };

          if (e) {
            var d = e.component,
                p = (a = d.context).options;
            i === a || p.editable && p.droppable ? (s = function (e, t, n) {
              var r = e.dateSpan,
                  o = t.dateSpan,
                  i = r.range.start,
                  a = o.range.start,
                  s = {};
              r.allDay !== o.allDay && (s.allDay = o.allDay, s.hasEnd = t.component.context.options.allDayMaintainDuration, o.allDay && (i = be(i)));
              var l = Qt(i, a, e.component.context.dateEnv, e.component === t.component ? e.component.largeUnit : null);
              l.milliseconds && (s.allDay = !1);

              for (var u = {
                datesDelta: l,
                standardProps: s
              }, c = 0, d = n; c < d.length; c++) {
                (0, d[c])(u, e, t);
              }

              return u;
            }(r, e, a.getCurrentData().pluginHooks.eventDragMutationMassagers)) && (l = Pn(n, a.getCurrentData().eventUiBases, s, a), c.mutatedEvents = l, d.isInteractionValid(c) || (u = !0, s = null, l = null, c.mutatedEvents = {
              defs: {},
              instances: {}
            })) : a = null;
          }

          o.displayDrag(a, c), u ? Q() : ee(), t || (i === a && ka(r, e) && (s = null), o.dragging.setMirrorNeedsRevert(!s), o.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-event-mirror")), o.receivingContext = a, o.validMutation = s, o.mutatedRelevantEvents = l);
        }
      }, o.handlePointerUp = function () {
        o.isDragging || o.cleanup();
      }, o.handleDragEnd = function (e) {
        if (o.isDragging) {
          var t = o.component.context,
              n = t.viewApi,
              i = o,
              a = i.receivingContext,
              s = i.validMutation,
              l = o.eventRange.def,
              u = o.eventRange.instance,
              c = new zn(t, l, u),
              d = o.relevantEvents,
              p = o.mutatedRelevantEvents,
              f = o.hitDragging.finalHit;

          if (o.clearDrag(), t.emitter.trigger("eventDragStop", {
            el: o.subjectEl,
            event: c,
            jsEvent: e.origEvent,
            view: n
          }), s) {
            if (a === t) {
              var h = new zn(t, p.defs[l.defId], u ? p.instances[u.instanceId] : null);
              t.dispatch({
                type: "MERGE_EVENTS",
                eventStore: p
              });

              for (var v = {
                oldEvent: c,
                event: h,
                relatedEvents: Bn(p, t, u),
                revert: function revert() {
                  t.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: d
                  });
                }
              }, g = {}, m = 0, y = t.getCurrentData().pluginHooks.eventDropTransformers; m < y.length; m++) {
                var E = y[m];

                _r2(g, E(s, t));
              }

              t.emitter.trigger("eventDrop", _r2(_r2(_r2({}, v), g), {
                el: e.subjectEl,
                delta: s.datesDelta,
                jsEvent: e.origEvent,
                view: n
              })), t.emitter.trigger("eventChange", v);
            } else if (a) {
              var S = {
                event: c,
                relatedEvents: Bn(d, t, u),
                revert: function revert() {
                  t.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: d
                  });
                }
              };
              t.emitter.trigger("eventLeave", _r2(_r2({}, S), {
                draggedEl: e.subjectEl,
                view: n
              })), t.dispatch({
                type: "REMOVE_EVENTS",
                eventStore: d
              }), t.emitter.trigger("eventRemove", S);
              var D = p.defs[l.defId],
                  b = p.instances[u.instanceId],
                  C = new zn(a, D, b);
              a.dispatch({
                type: "MERGE_EVENTS",
                eventStore: p
              });
              var w = {
                event: C,
                relatedEvents: Bn(p, a, b),
                revert: function revert() {
                  a.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: p
                  });
                }
              };
              a.emitter.trigger("eventAdd", w), e.isTouch && a.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: u.instanceId
              }), a.emitter.trigger("drop", _r2(_r2({}, Ma(f.dateSpan, a)), {
                draggedEl: e.subjectEl,
                jsEvent: e.origEvent,
                view: f.component.context.viewApi
              })), a.emitter.trigger("eventReceive", _r2(_r2({}, w), {
                draggedEl: e.subjectEl,
                view: f.component.context.viewApi
              }));
            }
          } else t.emitter.trigger("_noEventDrop");
        }

        o.cleanup();
      };
      var i = o.component.context.options,
          a = o.dragging = new wa(n.el);
      a.pointer.selector = t.SELECTOR, a.touchScrollAllowed = !1, a.autoScroller.isEnabled = i.dragScroll;
      var s = o.hitDragging = new Ta(o.dragging, ui);
      return s.useSubjectCenter = n.useEventCenter, s.emitter.on("pointerdown", o.handlePointerDown), s.emitter.on("dragstart", o.handleDragStart), s.emitter.on("hitupdate", o.handleHitUpdate), s.emitter.on("pointerup", o.handlePointerUp), s.emitter.on("dragend", o.handleDragEnd), o;
    }

    return n(t, e), t.prototype.destroy = function () {
      this.dragging.destroy();
    }, t.prototype.displayDrag = function (e, t) {
      var n = this.component.context,
          r = this.receivingContext;
      r && r !== e && (r === n ? r.dispatch({
        type: "SET_EVENT_DRAG",
        state: {
          affectedEvents: t.affectedEvents,
          mutatedEvents: {
            defs: {},
            instances: {}
          },
          isEvent: !0
        }
      }) : r.dispatch({
        type: "UNSET_EVENT_DRAG"
      })), e && e.dispatch({
        type: "SET_EVENT_DRAG",
        state: t
      });
    }, t.prototype.clearDrag = function () {
      var e = this.component.context,
          t = this.receivingContext;
      t && t.dispatch({
        type: "UNSET_EVENT_DRAG"
      }), e !== t && e.dispatch({
        type: "UNSET_EVENT_DRAG"
      });
    }, t.prototype.cleanup = function () {
      this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
    }, t.SELECTOR = ".fc-event-draggable, .fc-event-resizable", t;
  }(ai);

  var Pa = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.draggingSegEl = null, n.draggingSeg = null, n.eventRange = null, n.relevantEvents = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function (e) {
        var t = n.component,
            r = dn(n.querySegEl(e)),
            o = n.eventRange = r.eventRange;
        n.dragging.minDistance = t.context.options.eventDragMinDistance, n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && n.component.props.eventSelection !== o.instance.instanceId);
      }, n.handleDragStart = function (e) {
        var t = n.component.context,
            r = n.eventRange;
        n.relevantEvents = Nt(t.getCurrentData().eventStore, n.eventRange.instance.instanceId);
        var o = n.querySegEl(e);
        n.draggingSegEl = o, n.draggingSeg = dn(o), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
          el: o,
          event: new zn(t, r.def, r.instance),
          jsEvent: e.origEvent,
          view: t.viewApi
        });
      }, n.handleHitUpdate = function (e, t, o) {
        var i = n.component.context,
            a = n.relevantEvents,
            s = n.hitDragging.initialHit,
            l = n.eventRange.instance,
            u = null,
            c = null,
            d = !1,
            p = {
          affectedEvents: a,
          mutatedEvents: {
            defs: {},
            instances: {}
          },
          isEvent: !0
        };
        e && (u = function (e, t, n, o, i) {
          for (var a = e.component.context.dateEnv, s = e.dateSpan.range.start, l = t.dateSpan.range.start, u = Qt(s, l, a, e.component.largeUnit), c = {}, d = 0, p = i; d < p.length; d++) {
            var f = (0, p[d])(e, t);
            if (!1 === f) return null;
            f && _r2(c, f);
          }

          if (n) {
            if (a.add(o.start, u) < o.end) return c.startDelta = u, c;
          } else if (a.add(o.end, u) > o.start) return c.endDelta = u, c;

          return null;
        }(s, e, o.subjectEl.classList.contains("fc-event-resizer-start"), l.range, i.pluginHooks.eventResizeJoinTransforms)), u && (c = Pn(a, i.getCurrentData().eventUiBases, u, i), p.mutatedEvents = c, n.component.isInteractionValid(p) || (d = !0, u = null, c = null, p.mutatedEvents = null)), c ? i.dispatch({
          type: "SET_EVENT_RESIZE",
          state: p
        }) : i.dispatch({
          type: "UNSET_EVENT_RESIZE"
        }), d ? Q() : ee(), t || (u && ka(s, e) && (u = null), n.validMutation = u, n.mutatedRelevantEvents = c);
      }, n.handleDragEnd = function (e) {
        var t = n.component.context,
            o = n.eventRange.def,
            i = n.eventRange.instance,
            a = new zn(t, o, i),
            s = n.relevantEvents,
            l = n.mutatedRelevantEvents;

        if (t.emitter.trigger("eventResizeStop", {
          el: n.draggingSegEl,
          event: a,
          jsEvent: e.origEvent,
          view: t.viewApi
        }), n.validMutation) {
          var u = new zn(t, l.defs[o.defId], i ? l.instances[i.instanceId] : null);
          t.dispatch({
            type: "MERGE_EVENTS",
            eventStore: l
          });
          var c = {
            oldEvent: a,
            event: u,
            relatedEvents: Bn(l, t, i),
            revert: function revert() {
              t.dispatch({
                type: "MERGE_EVENTS",
                eventStore: s
              });
            }
          };
          t.emitter.trigger("eventResize", _r2(_r2({}, c), {
            el: n.draggingSegEl,
            startDelta: n.validMutation.startDelta || Ye(0),
            endDelta: n.validMutation.endDelta || Ye(0),
            jsEvent: e.origEvent,
            view: t.viewApi
          })), t.emitter.trigger("eventChange", c);
        } else t.emitter.trigger("_noEventResize");

        n.draggingSeg = null, n.relevantEvents = null, n.validMutation = null;
      };
      var o = t.component,
          i = n.dragging = new wa(t.el);
      i.pointer.selector = ".fc-event-resizer", i.touchScrollAllowed = !1, i.autoScroller.isEnabled = o.context.options.dragScroll;
      var a = n.hitDragging = new Ta(n.dragging, li(t));
      return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("dragend", n.handleDragEnd), n;
    }

    return n(t, e), t.prototype.destroy = function () {
      this.dragging.destroy();
    }, t.prototype.querySegEl = function (e) {
      return V(e.subjectEl, ".fc-event");
    }, t;
  }(ai);

  var Na = function () {
    function e(e) {
      var t = this;
      this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function (e) {
        e.jsEvent && (t.isRecentPointerDateSelect = !0);
      }, this.onDocumentPointerDown = function (e) {
        var n = t.context.options.unselectCancel,
            r = e.origEvent.target;
        t.matchesCancel = !!V(r, n), t.matchesEvent = !!V(r, Ia.SELECTOR);
      }, this.onDocumentPointerUp = function (e) {
        var n = t.context,
            r = t.documentPointer,
            o = n.getCurrentData();

        if (!r.wasTouchScroll) {
          if (o.dateSelection && !t.isRecentPointerDateSelect) {
            var i = n.options.unselectAuto;
            !i || i && t.matchesCancel || n.calendarApi.unselect(e);
          }

          o.eventSelection && !t.matchesEvent && n.dispatch({
            type: "UNSELECT_EVENT"
          });
        }

        t.isRecentPointerDateSelect = !1;
      };
      var n = this.documentPointer = new ga(document);
      n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
    }

    return e.prototype.destroy = function () {
      this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
    }, e;
  }(),
      Ha = {
    dateClick: _t,
    eventDragStart: _t,
    eventDragStop: _t,
    eventDrop: _t,
    eventResizeStart: _t,
    eventResizeStop: _t,
    eventResize: _t,
    drop: _t,
    eventReceive: _t,
    eventLeave: _t
  },
      Oa = function () {
    function e(e, t) {
      var n = this;
      this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function (e) {
        n.dragMeta = n.buildDragMeta(e.subjectEl);
      }, this.handleHitUpdate = function (e, t, o) {
        var i = n.hitDragging.dragging,
            a = null,
            s = null,
            l = !1,
            u = {
          affectedEvents: {
            defs: {},
            instances: {}
          },
          mutatedEvents: {
            defs: {},
            instances: {}
          },
          isEvent: n.dragMeta.create
        };
        e && (a = e.component.context, n.canDropElOnCalendar(o.subjectEl, a) && (s = function (e, t, n) {
          for (var o = _r2({}, t.leftoverProps), i = 0, a = n.pluginHooks.externalDefTransforms; i < a.length; i++) {
            var s = a[i];

            _r2(o, s(e, t));
          }

          var l = Yt(o, n),
              u = l.refined,
              c = l.extra,
              d = Xt(u, c, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
              p = e.range.start;
          e.allDay && t.startTime && (p = n.dateEnv.add(p, t.startTime));
          var f = t.duration ? n.dateEnv.add(p, t.duration) : In(e.allDay, p, n),
              h = Ie(d.defId, {
            start: p,
            end: f
          });
          return {
            def: d,
            instance: h
          };
        }(e.dateSpan, n.dragMeta, a), u.mutatedEvents = Pt(s), (l = !Jr(u, a)) && (u.mutatedEvents = {
          defs: {},
          instances: {}
        }, s = null))), n.displayDrag(a, u), i.setMirrorIsVisible(t || !s || !document.querySelector(".fc-event-mirror")), l ? Q() : ee(), t || (i.setMirrorNeedsRevert(!s), n.receivingContext = a, n.droppableEvent = s);
      }, this.handleDragEnd = function (e) {
        var t = n,
            o = t.receivingContext,
            i = t.droppableEvent;

        if (n.clearDrag(), o && i) {
          var a = n.hitDragging.finalHit,
              s = a.component.context.viewApi,
              l = n.dragMeta;

          if (o.emitter.trigger("drop", _r2(_r2({}, Ma(a.dateSpan, o)), {
            draggedEl: e.subjectEl,
            jsEvent: e.origEvent,
            view: s
          })), l.create) {
            var u = Pt(i);
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: u
            }), e.isTouch && o.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: i.instance.instanceId
            }), o.emitter.trigger("eventReceive", {
              event: new zn(o, i.def, i.instance),
              relatedEvents: [],
              revert: function revert() {
                o.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: u
                });
              },
              draggedEl: e.subjectEl,
              view: s
            });
          }
        }

        n.receivingContext = null, n.droppableEvent = null;
      };
      var o = this.hitDragging = new Ta(e, ui);
      o.requireInitial = !1, o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t;
    }

    return e.prototype.buildDragMeta = function (e) {
      return "object" == _typeof(this.suppliedDragMeta) ? fi(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? fi(this.suppliedDragMeta(e)) : fi((t = function (e, t) {
        var n = di.dataAttrPrefix,
            r = (n ? n + "-" : "") + t;
        return e.getAttribute("data-" + r) || "";
      }(e, "event")) ? JSON.parse(t) : {
        create: !1
      });
      var t;
    }, e.prototype.displayDrag = function (e, t) {
      var n = this.receivingContext;
      n && n !== e && n.dispatch({
        type: "UNSET_EVENT_DRAG"
      }), e && e.dispatch({
        type: "SET_EVENT_DRAG",
        state: t
      });
    }, e.prototype.clearDrag = function () {
      this.receivingContext && this.receivingContext.dispatch({
        type: "UNSET_EVENT_DRAG"
      });
    }, e.prototype.canDropElOnCalendar = function (e, t) {
      var n = t.options.dropAccept;
      return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(z(e, n));
    }, e;
  }();

  di.dataAttrPrefix = "";

  var Aa = function () {
    function e(e, t) {
      var n = this;
      void 0 === t && (t = {}), this.handlePointerDown = function (e) {
        var t = n.dragging,
            r = n.settings,
            o = r.minDistance,
            i = r.longPressDelay;
        t.minDistance = null != o ? o : e.isTouch ? 0 : bt.eventDragMinDistance, t.delay = e.isTouch ? null != i ? i : bt.longPressDelay : 0;
      }, this.handleDragStart = function (e) {
        e.isTouch && n.dragging.delay && e.subjectEl.classList.contains("fc-event") && n.dragging.mirror.getMirrorEl().classList.add("fc-event-selected");
      }, this.settings = t;
      var r = this.dragging = new wa(e);
      r.touchScrollAllowed = !1, null != t.itemSelector && (r.pointer.selector = t.itemSelector), null != t.appendTo && (r.mirror.parentNode = t.appendTo), r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), new Oa(r, t.eventData);
    }

    return e.prototype.destroy = function () {
      this.dragging.destroy();
    }, e;
  }(),
      Ua = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function (e) {
        n.emitter.trigger("pointerdown", e), n.shouldIgnoreMove || n.emitter.trigger("dragstart", e);
      }, n.handlePointerMove = function (e) {
        n.shouldIgnoreMove || n.emitter.trigger("dragmove", e);
      }, n.handlePointerUp = function (e) {
        n.emitter.trigger("pointerup", e), n.shouldIgnoreMove || n.emitter.trigger("dragend", e);
      };
      var r = n.pointer = new ga(t);
      return r.emitter.on("pointerdown", n.handlePointerDown), r.emitter.on("pointermove", n.handlePointerMove), r.emitter.on("pointerup", n.handlePointerUp), n;
    }

    return n(t, e), t.prototype.destroy = function () {
      this.pointer.destroy();
    }, t.prototype.setIgnoreMove = function (e) {
      this.shouldIgnoreMove = e;
    }, t.prototype.setMirrorIsVisible = function (e) {
      if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);else {
        var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
        t && (this.currentMirrorEl = t, t.style.visibility = "hidden");
      }
    }, t;
  }(ci),
      La = function () {
    function e(e, t) {
      var n = document;
      e === document || e instanceof Element ? (n = e, t = t || {}) : t = e || {};
      var r = this.dragging = new Ua(n);
      "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new Oa(r, t.eventData);
    }

    return e.prototype.destroy = function () {
      this.dragging.destroy();
    }, e;
  }(),
      Wa = io({
    componentInteractions: [xa, _a, Ia, Pa],
    calendarInteractions: [Na],
    elementDraggingImpl: wa,
    listenerRefiners: Ha
  }),
      Va = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.headerElRef = Ar(), t;
    }

    return n(t, e), t.prototype.renderSimpleLayout = function (e, t) {
      var n = this.props,
          r = this.context,
          o = [],
          i = Ki(r.options);
      return e && o.push({
        type: "header",
        key: "header",
        isSticky: i,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      }), o.push({
        type: "body",
        key: "body",
        liquid: !0,
        chunk: {
          content: t
        }
      }), Hr(yo, {
        viewSpec: r.viewSpec
      }, function (e, t) {
        return Hr("div", {
          ref: e,
          className: ["fc-daygrid"].concat(t).join(" ")
        }, Hr($i, {
          liquid: !n.isHeightAuto && !n.forPrint,
          cols: [],
          sections: o
        }));
      });
    }, t.prototype.renderHScrollLayout = function (e, t, n, r) {
      var o = this.context.pluginHooks.scrollGridImpl;
      if (!o) throw new Error("No ScrollGrid implementation");
      var i = this.props,
          a = this.context,
          s = !i.forPrint && Ki(a.options),
          l = !i.forPrint && Ji(a.options),
          u = [];
      return e && u.push({
        type: "header",
        key: "header",
        isSticky: s,
        chunks: [{
          key: "main",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }]
      }), u.push({
        type: "body",
        key: "body",
        liquid: !0,
        chunks: [{
          key: "main",
          content: t
        }]
      }), l && u.push({
        type: "footer",
        key: "footer",
        isSticky: !0,
        chunks: [{
          key: "main",
          content: Xi
        }]
      }), Hr(yo, {
        viewSpec: a.viewSpec
      }, function (e, t) {
        return Hr("div", {
          ref: e,
          className: ["fc-daygrid"].concat(t).join(" ")
        }, Hr(o, {
          liquid: !i.isHeightAuto && !i.forPrint,
          colGroups: [{
            cols: [{
              span: n,
              minWidth: r
            }]
          }],
          sections: u
        }));
      });
    }, t;
  }(oo);

  function za(e, t) {
    for (var n = [], r = 0; r < t; r++) {
      n[r] = [];
    }

    for (var o = 0, i = e; o < i.length; o++) {
      var a = i[o];
      n[a.row].push(a);
    }

    return n;
  }

  function Fa(e, t) {
    for (var n = [], r = 0; r < t; r++) {
      n[r] = [];
    }

    for (var o = 0, i = e; o < i.length; o++) {
      var a = i[o];
      n[a.firstCol].push(a);
    }

    return n;
  }

  function Ba(e, t) {
    var n = [];

    if (e) {
      for (a = 0; a < t; a++) {
        n[a] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: []
        };
      }

      for (var r = 0, o = e.segs; r < o.length; r++) {
        var i = o[r];
        n[i.row].segs.push(i);
      }
    } else for (var a = 0; a < t; a++) {
      n[a] = null;
    }

    return n;
  }

  var ja = St({
    week: "narrow"
  }),
      Ga = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.handleRootEl = function (e) {
        t.rootEl = e, Yr(t.props.elRef, e);
      }, t.handleMoreLinkClick = function (e) {
        var n = t.props;

        if (n.onMoreClick) {
          var r = n.segsByEachCol,
              o = r.filter(function (e) {
            return n.segIsHidden[e.eventRange.instance.instanceId];
          });
          n.onMoreClick({
            date: n.date,
            allSegs: r,
            hiddenSegs: o,
            moreCnt: n.moreCnt,
            dayEl: t.rootEl,
            ev: e
          });
        }
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.context,
          n = t.options,
          o = t.viewApi,
          i = this.props,
          a = i.date,
          s = i.dateProfile,
          l = {
        num: i.moreCnt,
        text: i.buildMoreLinkText(i.moreCnt),
        view: o
      },
          u = n.navLinks ? {
        "data-navlink": gr(a, "week"),
        tabIndex: 0
      } : {};
      return Hr(oa, {
        date: a,
        dateProfile: s,
        todayRange: i.todayRange,
        showDayNumber: i.showDayNumber,
        extraHookProps: i.extraHookProps,
        elRef: this.handleRootEl
      }, function (t, o, c, d) {
        return Hr("td", _r2({
          ref: t,
          className: ["fc-daygrid-day"].concat(o, i.extraClassNames || []).join(" ")
        }, c, i.extraDataAttrs), Hr("div", {
          className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
          ref: i.innerElRef
        }, i.showWeekNumber && Hr(ca, {
          date: a,
          defaultFormat: ja
        }, function (e, t, n, o) {
          return Hr("a", _r2({
            ref: e,
            className: ["fc-daygrid-week-number"].concat(t).join(" ")
          }, u), o);
        }), !d && Hr(Za, {
          date: a,
          dateProfile: s,
          showDayNumber: i.showDayNumber,
          forceDayTop: i.forceDayTop,
          todayRange: i.todayRange,
          extraHookProps: i.extraHookProps
        }), Hr("div", {
          className: "fc-daygrid-day-events",
          ref: i.fgContentElRef,
          style: {
            paddingBottom: i.fgPaddingBottom
          }
        }, i.fgContent, Boolean(i.moreCnt) && Hr("div", {
          className: "fc-daygrid-day-bottom",
          style: {
            marginTop: i.moreMarginTop
          }
        }, Hr(uo, {
          hookProps: l,
          classNames: n.moreLinkClassNames,
          content: n.moreLinkContent,
          defaultContent: Ya,
          didMount: n.moreLinkDidMount,
          willUnmount: n.moreLinkWillUnmount
        }, function (t, n, r, o) {
          return Hr("a", {
            onClick: e.handleMoreLinkClick,
            ref: t,
            className: ["fc-daygrid-more-link"].concat(n).join(" ")
          }, o);
        }))), Hr("div", {
          className: "fc-daygrid-day-bg"
        }, i.bgContent)));
      });
    }, t;
  }(oo);

  function qa(e) {
    return e.dayNumberText;
  }

  function Ya(e) {
    return e.text;
  }

  var Za = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context.options.navLinks ? {
        "data-navlink": gr(e.date),
        tabIndex: 0
      } : {};
      return Hr(ia, {
        date: e.date,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        showDayNumber: e.showDayNumber,
        extraHookProps: e.extraHookProps,
        defaultContent: qa
      }, function (n, o) {
        return (o || e.forceDayTop) && Hr("div", {
          className: "fc-daygrid-day-top",
          ref: n
        }, Hr("a", _r2({
          className: "fc-daygrid-day-number"
        }, t), o || Hr(Ur, null, " ")));
      });
    }, t;
  }(jr),
      Xa = St({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "narrow"
  });

  function Ka(e) {
    var t = e.eventRange.ui.display;
    return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd;
  }

  var Ja = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context,
          n = t.options.eventTimeFormat || Xa,
          o = En(e.seg, n, t, !0, e.defaultDisplayEventEnd);
      return Hr(Qi, {
        seg: e.seg,
        timeText: o,
        defaultContent: $a,
        isDragging: e.isDragging,
        isResizing: !1,
        isDateSelecting: !1,
        isSelected: e.isSelected,
        isPast: e.isPast,
        isFuture: e.isFuture,
        isToday: e.isToday
      }, function (t, n, o, i) {
        return Hr("a", _r2({
          className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(n).join(" "),
          ref: t
        }, (a = e.seg, (s = a.eventRange.def.url) ? {
          href: s
        } : {})), i);
        var a, s;
      });
    }, t;
  }(jr);

  function $a(e) {
    return Hr(Ur, null, Hr("div", {
      className: "fc-daygrid-event-dot",
      style: {
        borderColor: e.borderColor || e.backgroundColor
      }
    }), e.timeText && Hr("div", {
      className: "fc-event-time"
    }, e.timeText), Hr("div", {
      className: "fc-event-title"
    }, e.event.title || Hr(Ur, null, " ")));
  }

  var Qa = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props;
      return Hr(ea, _r2({}, e, {
        extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
        defaultTimeFormat: Xa,
        defaultDisplayEventEnd: e.defaultDisplayEventEnd,
        disableResizing: !e.seg.eventRange.def.allDay
      }));
    }, t;
  }(jr);

  function es(e, t, n, o, i, a, s, l) {
    for (var u = [], c = [], d = {}, p = {}, f = {}, h = {}, v = {}, g = 0; g < s; g++) {
      u.push([]), c.push(0);
    }

    for (var m = 0, y = t = hn(t, l); m < y.length; m++) {
      T(w = y[m], i[w.eventRange.instance.instanceId + ":" + w.firstCol] || 0);
    }

    !0 === n || !0 === o ? function (e, t, n, r) {
      ns(e, t, n, !0, function (e) {
        return e.bottom <= r;
      });
    }(c, d, u, a) : "number" == typeof n ? function (e, t, n, r) {
      ns(e, t, n, !1, function (e, t) {
        return t < r;
      });
    }(c, d, u, n) : "number" == typeof o && function (e, t, n, r) {
      ns(e, t, n, !0, function (e, t) {
        return t < r;
      });
    }(c, d, u, o);

    for (var E = 0; E < s; E++) {
      for (var S = 0, D = 0, b = 0, C = u[E]; b < C.length; b++) {
        var w,
            R = C[b];
        d[(w = R.seg).eventRange.instance.instanceId] || (p[w.eventRange.instance.instanceId] = R.top, w.firstCol === w.lastCol && w.isStart && w.isEnd ? (f[w.eventRange.instance.instanceId] = R.top - S, D = 0, S = R.bottom) : D = R.bottom - S);
      }

      D && (c[E] ? h[E] = D : v[E] = D);
    }

    function T(e, t) {
      if (!k(e, t, 0)) for (var n = e.firstCol; n <= e.lastCol; n++) {
        for (var r = 0, o = u[n]; r < o.length; r++) {
          if (k(e, t, o[r].bottom)) return;
        }
      }
    }

    function k(e, t, n) {
      if (function (e, t, n) {
        for (var r = e.firstCol; r <= e.lastCol; r++) {
          for (var o = 0, i = u[r]; o < i.length; o++) {
            var a = i[o];
            if (n < a.bottom && n + t > a.top) return !1;
          }
        }

        return !0;
      }(e, t, n)) {
        for (var r = e.firstCol; r <= e.lastCol; r++) {
          for (var o = u[r], i = 0; i < o.length && n >= o[i].top;) {
            i++;
          }

          o.splice(i, 0, {
            seg: e,
            top: n,
            bottom: n + t
          });
        }

        return !0;
      }

      return !1;
    }

    for (var M in i) {
      i[M] || (d[M.split(":")[0]] = !0);
    }

    return {
      segsByFirstCol: u.map(ts),
      segsByEachCol: u.map(function (t, n) {
        var o = function (e) {
          for (var t = [], n = 0, r = e; n < r.length; n++) {
            var o = r[n];
            t.push(o.seg);
          }

          return t;
        }(t);

        return o = function (e, t, n) {
          for (var o = t, i = ve(o, 1), a = {
            start: o,
            end: i
          }, s = [], l = 0, u = e; l < u.length; l++) {
            var c = u[l],
                d = c.eventRange,
                p = d.range,
                f = nn(p, a);
            f && s.push(_r2(_r2({}, c), {
              firstCol: n,
              lastCol: n,
              eventRange: {
                def: d.def,
                ui: _r2(_r2({}, d.ui), {
                  durationEditable: !1
                }),
                instance: d.instance,
                range: f
              },
              isStart: c.isStart && f.start.valueOf() === p.start.valueOf(),
              isEnd: c.isEnd && f.end.valueOf() === p.end.valueOf()
            }));
          }

          return s;
        }(o, e[n].date, n);
      }),
      segIsHidden: d,
      segTops: p,
      segMarginTops: f,
      moreCnts: c,
      moreTops: h,
      paddingBottoms: v
    };
  }

  function ts(e, t) {
    for (var n = [], r = 0, o = e; r < o.length; r++) {
      var i = o[r];
      i.seg.firstCol === t && n.push(i.seg);
    }

    return n;
  }

  function ns(e, t, n, r, o) {
    for (var i = e.length, a = {}, s = [], l = 0; l < i; l++) {
      s.push([]);
    }

    for (l = 0; l < i; l++) {
      for (var u = 0, c = 0, d = n[l]; c < d.length; c++) {
        var p = d[c];
        o(p, u) ? f(p) : h(p, u, r), p.top !== p.bottom && u++;
      }
    }

    function f(e) {
      var t = e.seg,
          n = t.eventRange.instance.instanceId;

      if (!a[n]) {
        a[n] = !0;

        for (var r = t.firstCol; r <= t.lastCol; r++) {
          s[r].push(e);
        }
      }
    }

    function h(n, r, o) {
      var i = n.seg,
          a = i.eventRange.instance.instanceId;

      if (!t[a]) {
        t[a] = !0;

        for (var l = i.firstCol; l <= i.lastCol; l++) {
          var u = ++e[l];
          if (o && 1 === u) for (var c = r - 1; s[l].length > c;) {
            h(s[l].pop(), s[l].length, !1);
          }
        }
      }
    }
  }

  var rs = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.cellElRefs = new Li(), t.frameElRefs = new Li(), t.fgElRefs = new Li(), t.segHarnessRefs = new Li(), t.rootElRef = Ar(), t.state = {
        framePositions: null,
        maxContentHeight: null,
        segHeights: {}
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.props,
          n = this.state,
          r = this.context,
          o = t.cells.length,
          i = Fa(t.businessHourSegs, o),
          a = Fa(t.bgEventSegs, o),
          s = Fa(this.getHighlightSegs(), o),
          l = Fa(this.getMirrorSegs(), o),
          u = es(t.cells, t.fgEventSegs, t.dayMaxEvents, t.dayMaxEventRows, n.segHeights, n.maxContentHeight, o, r.options.eventOrder),
          c = u.paddingBottoms,
          d = u.segsByFirstCol,
          p = u.segsByEachCol,
          f = u.segIsHidden,
          h = u.segTops,
          v = u.segMarginTops,
          g = u.moreCnts,
          m = u.moreTops,
          y = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {};
      return Hr("tr", {
        ref: this.rootElRef
      }, t.renderIntro && t.renderIntro(), t.cells.map(function (n, r) {
        var o = e.renderFgSegs(d[r], f, h, v, y, t.todayRange),
            u = e.renderFgSegs(l[r], {}, h, {}, {}, t.todayRange, Boolean(t.eventDrag), Boolean(t.eventResize), !1);
        return Hr(Ga, {
          key: n.key,
          elRef: e.cellElRefs.createRef(n.key),
          innerElRef: e.frameElRefs.createRef(n.key),
          dateProfile: t.dateProfile,
          date: n.date,
          showDayNumber: t.showDayNumbers,
          showWeekNumber: t.showWeekNumbers && 0 === r,
          forceDayTop: t.showWeekNumbers,
          todayRange: t.todayRange,
          extraHookProps: n.extraHookProps,
          extraDataAttrs: n.extraDataAttrs,
          extraClassNames: n.extraClassNames,
          moreCnt: g[r],
          buildMoreLinkText: t.buildMoreLinkText,
          onMoreClick: t.onMoreClick,
          segIsHidden: f,
          moreMarginTop: m[r],
          segsByEachCol: p[r],
          fgPaddingBottom: c[r],
          fgContentElRef: e.fgElRefs.createRef(n.key),
          fgContent: Hr(Ur, null, Hr(Ur, null, o), Hr(Ur, null, u)),
          bgContent: Hr(Ur, null, e.renderFillSegs(s[r], "highlight"), e.renderFillSegs(i[r], "non-business"), e.renderFillSegs(a[r], "bg-event"))
        });
      }));
    }, t.prototype.componentDidMount = function () {
      this.updateSizing(!0);
    }, t.prototype.componentDidUpdate = function (e, t) {
      var n = this.props;
      this.updateSizing(!Le(e, n));
    }, t.prototype.getHighlightSegs = function () {
      var e = this.props;
      return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
    }, t.prototype.getMirrorSegs = function () {
      var e = this.props;
      return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
    }, t.prototype.renderFgSegs = function (e, t, n, o, i, a, s, l, u) {
      var c = this.context,
          d = this.props.eventSelection,
          p = this.state.framePositions,
          f = 1 === this.props.cells.length,
          h = [];
      if (p) for (var v = 0, g = e; v < g.length; v++) {
        var m = g[v],
            y = m.eventRange.instance.instanceId,
            E = s || l || u,
            S = i[y],
            D = t[y] || S,
            b = t[y] || E || m.firstCol !== m.lastCol || !m.isStart || !m.isEnd,
            C = void 0,
            w = void 0,
            R = void 0,
            T = void 0;
        b ? (w = n[y], c.isRtl ? (T = 0, R = p.lefts[m.lastCol] - p.lefts[m.firstCol]) : (R = 0, T = p.rights[m.firstCol] - p.rights[m.lastCol])) : C = o[y], h.push(Hr("div", {
          className: "fc-daygrid-event-harness" + (b ? " fc-daygrid-event-harness-abs" : ""),
          key: y,
          ref: E ? null : this.segHarnessRefs.createRef(y + ":" + m.firstCol),
          style: {
            visibility: D ? "hidden" : "",
            marginTop: C || "",
            top: w || "",
            left: R || "",
            right: T || ""
          }
        }, Ka(m) ? Hr(Ja, _r2({
          seg: m,
          isDragging: s,
          isSelected: y === d,
          defaultDisplayEventEnd: f
        }, Sn(m, a))) : Hr(Qa, _r2({
          seg: m,
          isDragging: s,
          isResizing: l,
          isDateSelecting: u,
          isSelected: y === d,
          defaultDisplayEventEnd: f
        }, Sn(m, a)))));
      }
      return h;
    }, t.prototype.renderFillSegs = function (e, t) {
      var n = this.context.isRtl,
          i = this.props.todayRange,
          a = this.state.framePositions,
          s = [];
      if (a) for (var l = 0, u = e; l < u.length; l++) {
        var c = u[l],
            d = n ? {
          right: 0,
          left: a.lefts[c.lastCol] - a.lefts[c.firstCol]
        } : {
          left: 0,
          right: a.rights[c.firstCol] - a.rights[c.lastCol]
        };
        s.push(Hr("div", {
          key: bn(c.eventRange),
          className: "fc-daygrid-bg-harness",
          style: d
        }, "bg-event" === t ? Hr(la, _r2({
          seg: c
        }, Sn(c, i))) : sa(t)));
      }
      return Hr.apply(void 0, o([Ur, {}], s));
    }, t.prototype.updateSizing = function (e) {
      var t = this.props,
          n = this.frameElRefs;

      if (null !== t.clientWidth) {
        if (e) {
          var r = t.cells.map(function (e) {
            return n.currentMap[e.key];
          });

          if (r.length) {
            var o = this.rootElRef.current;
            this.setState({
              framePositions: new Mr(o, r, !0, !1)
            });
          }
        }

        var i = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
        this.setState({
          segHeights: this.computeSegHeights(),
          maxContentHeight: i ? this.computeMaxContentHeight() : null
        });
      }
    }, t.prototype.computeSegHeights = function () {
      return Oe(this.segHarnessRefs.currentMap, function (e) {
        return e.getBoundingClientRect().height;
      });
    }, t.prototype.computeMaxContentHeight = function () {
      var e = this.props.cells[0].key,
          t = this.cellElRefs.currentMap[e],
          n = this.fgElRefs.currentMap[e];
      return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top;
    }, t.prototype.getCellEls = function () {
      var e = this.cellElRefs.currentMap;
      return this.props.cells.map(function (t) {
        return e[t.key];
      });
    }, t;
  }(oo);

  rs.addStateEquality({
    segHeights: Le
  });

  var os = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.repositioner = new Go(t.updateSize.bind(t)), t.handleRootEl = function (e) {
        t.rootEl = e, t.props.elRef && Yr(t.props.elRef, e);
      }, t.handleDocumentMousedown = function (e) {
        var n = t.props.onClose;
        n && !t.rootEl.contains(e.target) && n();
      }, t.handleDocumentScroll = function () {
        t.repositioner.request(10);
      }, t.handleCloseClick = function () {
        var e = t.props.onClose;
        e && e();
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.context.theme,
          t = this.props,
          n = ["fc-popover", e.getClass("popover")].concat(t.extraClassNames || []);
      return Hr("div", _r2({
        className: n.join(" ")
      }, t.extraAttrs, {
        ref: this.handleRootEl
      }), Hr("div", {
        className: "fc-popover-header " + e.getClass("popoverHeader")
      }, Hr("span", {
        className: "fc-popover-title"
      }, t.title), Hr("span", {
        className: "fc-popover-close " + e.getIconClass("close"),
        onClick: this.handleCloseClick
      })), Hr("div", {
        className: "fc-popover-body " + e.getClass("popoverContent")
      }, t.children));
    }, t.prototype.componentDidMount = function () {
      document.addEventListener("mousedown", this.handleDocumentMousedown), document.addEventListener("scroll", this.handleDocumentScroll), this.updateSize();
    }, t.prototype.componentWillUnmount = function () {
      document.removeEventListener("mousedown", this.handleDocumentMousedown), document.removeEventListener("scroll", this.handleDocumentScroll);
    }, t.prototype.updateSize = function () {
      var e = this.props,
          t = e.alignmentEl,
          n = e.topAlignmentEl,
          r = this.rootEl;

      if (r) {
        var o,
            i = r.getBoundingClientRect(),
            a = t.getBoundingClientRect(),
            s = n ? n.getBoundingClientRect().top : a.top;
        s = Math.min(s, window.innerHeight - i.height - 10), s = Math.max(s, 10), o = this.context.isRtl ? a.right - i.width : a.left, o = Math.min(o, window.innerWidth - i.width - 10), j(r, {
          top: s,
          left: o = Math.max(o, 10)
        });
      }
    }, t;
  }(jr),
      is = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.handlePopoverEl = function (e) {
        t.popoverEl = e, e ? t.context.registerInteractiveComponent(t, {
          el: e,
          useEventCenter: !1
        }) : t.context.unregisterInteractiveComponent(t);
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.context,
          t = e.options,
          n = e.dateEnv,
          o = this.props,
          i = o.date,
          a = o.hiddenInstances,
          s = o.todayRange,
          l = o.dateProfile,
          u = o.selectedInstanceId,
          c = n.format(i, t.dayPopoverFormat);
      return Hr(oa, {
        date: i,
        dateProfile: l,
        todayRange: s,
        elRef: this.handlePopoverEl
      }, function (e, t, n) {
        return Hr(os, {
          elRef: e,
          title: c,
          extraClassNames: ["fc-more-popover"].concat(t),
          extraAttrs: n,
          onClose: o.onCloseClick,
          alignmentEl: o.alignmentEl,
          topAlignmentEl: o.topAlignmentEl
        }, Hr(ia, {
          date: i,
          dateProfile: l,
          todayRange: s
        }, function (e, t) {
          return t && Hr("div", {
            className: "fc-more-popover-misc",
            ref: e
          }, t);
        }), o.segs.map(function (e) {
          var t = e.eventRange.instance.instanceId;
          return Hr("div", {
            className: "fc-daygrid-event-harness",
            key: t,
            style: {
              visibility: a[t] ? "hidden" : ""
            }
          }, Ka(e) ? Hr(Ja, _r2({
            seg: e,
            isDragging: !1,
            isSelected: t === u,
            defaultDisplayEventEnd: !1
          }, Sn(e, s))) : Hr(Qa, _r2({
            seg: e,
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: t === u,
            defaultDisplayEventEnd: !1
          }, Sn(e, s))));
        }));
      });
    }, t.prototype.queryHit = function (e, t, n, r) {
      var o = this.props.date;
      if (e < n && t < r) return {
        component: this,
        dateSpan: {
          allDay: !0,
          range: {
            start: o,
            end: ve(o, 1)
          }
        },
        dayEl: this.popoverEl,
        rect: {
          left: 0,
          top: 0,
          right: n,
          bottom: r
        },
        layer: 1
      };
    }, t.prototype.isPopover = function () {
      return !0;
    }, t;
  }(oo),
      as = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.splitBusinessHourSegs = it(za), t.splitBgEventSegs = it(za), t.splitFgEventSegs = it(za), t.splitDateSelectionSegs = it(za), t.splitEventDrag = it(Ba), t.splitEventResize = it(Ba), t.buildBuildMoreLinkText = it(ss), t.rowRefs = new Li(), t.state = {
        morePopoverState: null
      }, t.handleRootEl = function (e) {
        t.rootEl = e, Yr(t.props.elRef, e);
      }, t.handleMoreLinkClick = function (e) {
        var n = t.context,
            o = n.dateEnv,
            i = n.options.moreLinkClick;

        function a(e) {
          var t = e.eventRange,
              r = t.def,
              i = t.instance,
              a = t.range;
          return {
            event: new zn(n, r, i),
            start: o.toDate(a.start),
            end: o.toDate(a.end),
            isStart: e.isStart,
            isEnd: e.isEnd
          };
        }

        "function" == typeof i && (i = i({
          date: o.toDate(e.date),
          allDay: !0,
          allSegs: e.allSegs.map(a),
          hiddenSegs: e.hiddenSegs.map(a),
          jsEvent: e.ev,
          view: n.viewApi
        })), i && "popover" !== i ? "string" == typeof i && n.calendarApi.zoomTo(e.date, i) : t.setState({
          morePopoverState: _r2(_r2({}, e), {
            currentFgEventSegs: t.props.fgEventSegs
          })
        });
      }, t.handleMorePopoverClose = function () {
        t.setState({
          morePopoverState: null
        });
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.props,
          n = t.dateProfile,
          r = t.dayMaxEventRows,
          o = t.dayMaxEvents,
          i = t.expandRows,
          a = this.state.morePopoverState,
          s = t.cells.length,
          l = this.splitBusinessHourSegs(t.businessHourSegs, s),
          u = this.splitBgEventSegs(t.bgEventSegs, s),
          c = this.splitFgEventSegs(t.fgEventSegs, s),
          d = this.splitDateSelectionSegs(t.dateSelectionSegs, s),
          p = this.splitEventDrag(t.eventDrag, s),
          f = this.splitEventResize(t.eventResize, s),
          h = this.buildBuildMoreLinkText(this.context.options.moreLinkText),
          v = !0 === o || !0 === r;
      return v && !i && (v = !1, r = null, o = null), Hr("div", {
        className: ["fc-daygrid-body", v ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", i ? "" : "fc-daygrid-body-natural"].join(" "),
        ref: this.handleRootEl,
        style: {
          width: t.clientWidth,
          minWidth: t.tableMinWidth
        }
      }, Hr(Mi, {
        unit: "day"
      }, function (v, g) {
        return Hr(Ur, null, Hr("table", {
          className: "fc-scrollgrid-sync-table",
          style: {
            width: t.clientWidth,
            minWidth: t.tableMinWidth,
            height: i ? t.clientHeight : ""
          }
        }, t.colGroupNode, Hr("tbody", null, t.cells.map(function (i, a) {
          return Hr(rs, {
            ref: e.rowRefs.createRef(a),
            key: i.length ? i[0].date.toISOString() : a,
            showDayNumbers: s > 1,
            showWeekNumbers: t.showWeekNumbers,
            todayRange: g,
            dateProfile: n,
            cells: i,
            renderIntro: t.renderRowIntro,
            businessHourSegs: l[a],
            eventSelection: t.eventSelection,
            bgEventSegs: u[a].filter(ls),
            fgEventSegs: c[a],
            dateSelectionSegs: d[a],
            eventDrag: p[a],
            eventResize: f[a],
            dayMaxEvents: o,
            dayMaxEventRows: r,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            buildMoreLinkText: h,
            onMoreClick: e.handleMoreLinkClick
          });
        }))), !t.forPrint && a && a.currentFgEventSegs === t.fgEventSegs && Hr(is, {
          date: a.date,
          dateProfile: n,
          segs: a.allSegs,
          alignmentEl: a.dayEl,
          topAlignmentEl: 1 === s ? t.headerAlignElRef.current : null,
          onCloseClick: e.handleMorePopoverClose,
          selectedInstanceId: t.eventSelection,
          hiddenInstances: (t.eventDrag ? t.eventDrag.affectedInstances : null) || (t.eventResize ? t.eventResize.affectedInstances : null) || {},
          todayRange: g
        }));
      }));
    }, t.prototype.prepareHits = function () {
      this.rowPositions = new Mr(this.rootEl, this.rowRefs.collect().map(function (e) {
        return e.getCellEls()[0];
      }), !1, !0), this.colPositions = new Mr(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1);
    }, t.prototype.positionToHit = function (e, t) {
      var n = this.colPositions,
          r = this.rowPositions,
          o = n.leftToIndex(e),
          i = r.topToIndex(t);
      if (null != i && null != o) return {
        row: i,
        col: o,
        dateSpan: {
          range: this.getCellRange(i, o),
          allDay: !0
        },
        dayEl: this.getCellEl(i, o),
        relativeRect: {
          left: n.lefts[o],
          right: n.rights[o],
          top: r.tops[i],
          bottom: r.bottoms[i]
        }
      };
    }, t.prototype.getCellEl = function (e, t) {
      return this.rowRefs.currentMap[e].getCellEls()[t];
    }, t.prototype.getCellRange = function (e, t) {
      var n = this.props.cells[e][t].date;
      return {
        start: n,
        end: ve(n, 1)
      };
    }, t;
  }(oo);

  function ss(e) {
    return "function" == typeof e ? e : function (t) {
      return "+" + t + " " + e;
    };
  }

  function ls(e) {
    return e.eventRange.def.allDay;
  }

  var us = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.slicer = new cs(), t.tableRef = Ar(), t.handleRootEl = function (e) {
        e ? t.context.registerInteractiveComponent(t, {
          el: e
        }) : t.context.unregisterInteractiveComponent(t);
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context;
      return Hr(as, _r2({
        ref: this.tableRef,
        elRef: this.handleRootEl
      }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
        dateProfile: e.dateProfile,
        cells: e.dayTableModel.cells,
        colGroupNode: e.colGroupNode,
        tableMinWidth: e.tableMinWidth,
        renderRowIntro: e.renderRowIntro,
        dayMaxEvents: e.dayMaxEvents,
        dayMaxEventRows: e.dayMaxEventRows,
        showWeekNumbers: e.showWeekNumbers,
        expandRows: e.expandRows,
        headerAlignElRef: e.headerAlignElRef,
        clientWidth: e.clientWidth,
        clientHeight: e.clientHeight,
        forPrint: e.forPrint
      }));
    }, t.prototype.prepareHits = function () {
      this.tableRef.current.prepareHits();
    }, t.prototype.queryHit = function (e, t) {
      var n = this.tableRef.current.positionToHit(e, t);
      if (n) return {
        component: this,
        dateSpan: n.dateSpan,
        dayEl: n.dayEl,
        rect: {
          left: n.relativeRect.left,
          right: n.relativeRect.right,
          top: n.relativeRect.top,
          bottom: n.relativeRect.bottom
        },
        layer: 0
      };
    }, t;
  }(oo),
      cs = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.forceDayIfListItem = !0, t;
    }

    return n(t, e), t.prototype.sliceRange = function (e, t) {
      return t.sliceRange(e);
    }, t;
  }(Hi),
      ds = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.buildDayTableModel = it(ps), t.headerRef = Ar(), t.tableRef = Ar(), t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.context,
          n = t.options,
          r = t.dateProfileGenerator,
          o = this.props,
          i = this.buildDayTableModel(o.dateProfile, r),
          a = n.dayHeaders && Hr(_i, {
        ref: this.headerRef,
        dateProfile: o.dateProfile,
        dates: i.headerDates,
        datesRepDistinctDays: 1 === i.rowCnt
      }),
          s = function s(t) {
        return Hr(us, {
          ref: e.tableRef,
          dateProfile: o.dateProfile,
          dayTableModel: i,
          businessHours: o.businessHours,
          dateSelection: o.dateSelection,
          eventStore: o.eventStore,
          eventUiBases: o.eventUiBases,
          eventSelection: o.eventSelection,
          eventDrag: o.eventDrag,
          eventResize: o.eventResize,
          nextDayThreshold: n.nextDayThreshold,
          colGroupNode: t.tableColGroupNode,
          tableMinWidth: t.tableMinWidth,
          dayMaxEvents: n.dayMaxEvents,
          dayMaxEventRows: n.dayMaxEventRows,
          showWeekNumbers: n.weekNumbers,
          expandRows: !o.isHeightAuto,
          headerAlignElRef: e.headerElRef,
          clientWidth: t.clientWidth,
          clientHeight: t.clientHeight,
          forPrint: o.forPrint
        });
      };

      return n.dayMinWidth ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth) : this.renderSimpleLayout(a, s);
    }, t;
  }(Va);

  function ps(e, t) {
    var n = new Pi(e.renderRange, t);
    return new Ni(n, /year|month|week/.test(e.currentRangeUnit));
  }

  var fs = io({
    initialView: "dayGridMonth",
    optionRefiners: {
      moreLinkClick: _t,
      moreLinkClassNames: _t,
      moreLinkContent: _t,
      moreLinkDidMount: _t,
      moreLinkWillUnmount: _t
    },
    views: {
      dayGrid: {
        component: ds,
        dateProfileGeneratorClass: function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }

          return n(t, e), t.prototype.buildRenderRange = function (t, n, r) {
            var o,
                i = this.props.dateEnv,
                a = e.prototype.buildRenderRange.call(this, t, n, r),
                s = a.start,
                l = a.end;
            (/^(year|month)$/.test(n) && (s = i.startOfWeek(s), (o = i.startOfWeek(l)).valueOf() !== l.valueOf() && (l = he(o, 1))), this.props.monthMode && this.props.fixedWeekCount) && (l = he(l, 6 - Math.ceil(me(s, l))));
            return {
              start: s,
              end: l
            };
          }, t;
        }(Co)
      },
      dayGridDay: {
        type: "dayGrid",
        duration: {
          days: 1
        }
      },
      dayGridWeek: {
        type: "dayGrid",
        duration: {
          weeks: 1
        }
      },
      dayGridMonth: {
        type: "dayGrid",
        duration: {
          months: 1
        },
        monthMode: !0,
        fixedWeekCount: !0
      }
    }
  }),
      hs = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.getKeyInfo = function () {
      return {
        allDay: {},
        timed: {}
      };
    }, t.prototype.getKeysForDateSpan = function (e) {
      return e.allDay ? ["allDay"] : ["timed"];
    }, t.prototype.getKeysForEventDef = function (e) {
      return e.allDay ? un(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
    }, t;
  }(pr),
      vs = function () {
    function e(e, t, n) {
      this.positions = e, this.dateProfile = t, this.slatMetas = n;
    }

    return e.prototype.safeComputeTop = function (e) {
      var t = this.dateProfile;

      if (sn(t.currentRange, e)) {
        var n = be(e),
            r = e.valueOf() - n.valueOf();
        if (r >= $e(t.slotMinTime) && r < $e(t.slotMaxTime)) return this.computeTimeTop(Ye(r));
      }
    }, e.prototype.computeDateTop = function (e, t) {
      return t || (t = be(e)), this.computeTimeTop(Ye(e.valueOf() - t.valueOf()));
    }, e.prototype.computeTimeTop = function (e) {
      var t,
          n,
          r = this.positions,
          o = this.dateProfile,
          i = this.slatMetas,
          a = r.els.length,
          s = i[1].date.valueOf() - i[0].date.valueOf(),
          l = (e.milliseconds - $e(o.slotMinTime)) / s;
      return l = Math.max(0, l), l = Math.min(a, l), t = Math.floor(l), n = l - (t = Math.min(t, a - 1)), r.tops[t] + r.getHeight(t) * n;
    }, e;
  }(),
      gs = [{
    hours: 1
  }, {
    minutes: 30
  }, {
    minutes: 15
  }, {
    seconds: 30
  }, {
    seconds: 15
  }],
      ms = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.rootElRef = Ar(), t.slatElRefs = new Li(), t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context;
      return Hr("div", {
        className: "fc-timegrid-slots",
        ref: this.rootElRef
      }, Hr("table", {
        className: t.theme.getClass("table"),
        style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth,
          height: e.minHeight
        }
      }, e.tableColGroupNode, Hr(ys, {
        slatElRefs: this.slatElRefs,
        axis: e.axis,
        slatMetas: e.slatMetas
      })));
    }, t.prototype.componentDidMount = function () {
      this.updateSizing();
    }, t.prototype.componentDidUpdate = function () {
      this.updateSizing();
    }, t.prototype.componentWillUnmount = function () {
      this.props.onCoords && this.props.onCoords(null);
    }, t.prototype.updateSizing = function () {
      var e,
          t = this.props;
      t.onCoords && null !== t.clientWidth && this.rootElRef.current.offsetHeight && t.onCoords(new vs(new Mr(this.rootElRef.current, (e = this.slatElRefs.currentMap, t.slatMetas.map(function (t) {
        return e[t.key];
      })), !1, !0), this.props.dateProfile, t.slatMetas));
    }, t;
  }(jr);

  var ys = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context,
          n = t.options,
          o = e.slatElRefs;
      return Hr("tbody", null, e.slatMetas.map(function (i, a) {
        var s = {
          time: i.time,
          date: t.dateEnv.toDate(i.date),
          view: t.viewApi
        },
            l = ["fc-timegrid-slot", "fc-timegrid-slot-lane", i.isLabeled ? "" : "fc-timegrid-slot-minor"];
        return Hr("tr", {
          key: i.key,
          ref: o.createRef(i.key)
        }, e.axis && Hr(Ss, _r2({}, i)), Hr(uo, {
          hookProps: s,
          classNames: n.slotLaneClassNames,
          content: n.slotLaneContent,
          didMount: n.slotLaneDidMount,
          willUnmount: n.slotLaneWillUnmount
        }, function (e, t, n, r) {
          return Hr("td", {
            ref: e,
            className: l.concat(t).join(" "),
            "data-time": i.isoTimeStr
          }, r);
        }));
      }));
    }, t;
  }(jr),
      Es = St({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "short"
  });

  function Ss(e) {
    var t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
    return Hr(zr.Consumer, null, function (n) {
      if (e.isLabeled) {
        var r = n.dateEnv,
            o = n.options,
            i = n.viewApi,
            a = null == o.slotLabelFormat ? Es : Array.isArray(o.slotLabelFormat) ? St(o.slotLabelFormat[0]) : St(o.slotLabelFormat),
            s = {
          level: 0,
          time: e.time,
          date: r.toDate(e.date),
          view: i,
          text: r.format(e.date, a)
        };
        return Hr(uo, {
          hookProps: s,
          classNames: o.slotLabelClassNames,
          content: o.slotLabelContent,
          defaultContent: Ds,
          didMount: o.slotLabelDidMount,
          willUnmount: o.slotLabelWillUnmount
        }, function (n, r, o, i) {
          return Hr("td", {
            ref: n,
            className: t.concat(r).join(" "),
            "data-time": e.isoTimeStr
          }, Hr("div", {
            className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
          }, Hr("div", {
            className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
            ref: o
          }, i)));
        });
      }

      return Hr("td", {
        className: t.join(" "),
        "data-time": e.isoTimeStr
      });
    });
  }

  function Ds(e) {
    return e.text;
  }

  function bs(e, t, n, r, o) {
    for (var i = new Date(0), a = e, s = Ye(0), l = n || function (e) {
      var t, n, r;

      for (t = gs.length - 1; t >= 0; t--) {
        if (n = Ye(gs[t]), null !== (r = Qe(n, e)) && r > 1) return n;
      }

      return e;
    }(r), u = []; $e(a) < $e(t);) {
      var c = o.add(i, a),
          d = null !== Qe(s, l);
      u.push({
        date: c,
        time: a,
        key: c.toISOString(),
        isoTimeStr: nt(c),
        isLabeled: d
      }), a = Xe(a, r), s = Xe(s, r);
    }

    return u;
  }

  var Cs = St({
    week: "short"
  }),
      ws = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.allDaySplitter = new hs(), t.headerElRef = Ar(), t.rootElRef = Ar(), t.scrollerElRef = Ar(), t.state = {
        slatCoords: null
      }, t.handleScrollTopRequest = function (e) {
        var n = t.scrollerElRef.current;
        n && (n.scrollTop = e);
      }, t.renderHeadAxis = function (e) {
        void 0 === e && (e = "");
        var n = t.context.options,
            o = t.props.dateProfile.renderRange,
            i = ye(o.start, o.end),
            a = n.navLinks && 1 === i ? {
          "data-navlink": gr(o.start, "week"),
          tabIndex: 0
        } : {};
        return n.weekNumbers ? Hr(ca, {
          date: o.start,
          defaultFormat: Cs
        }, function (t, n, o, i) {
          return Hr("th", {
            ref: t,
            className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(n).join(" ")
          }, Hr("div", {
            className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
            style: {
              height: e
            }
          }, Hr("a", _r2({
            ref: o,
            className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
          }, a), i)));
        }) : Hr("th", {
          className: "fc-timegrid-axis"
        }, Hr("div", {
          className: "fc-timegrid-axis-frame",
          style: {
            height: e
          }
        }));
      }, t.renderTableRowAxis = function (e) {
        var n = t.context,
            r = n.options,
            o = n.viewApi,
            i = {
          text: r.allDayText,
          view: o
        };
        return Hr(uo, {
          hookProps: i,
          classNames: r.allDayClassNames,
          content: r.allDayContent,
          defaultContent: Rs,
          didMount: r.allDayDidMount,
          willUnmount: r.allDayWillUnmount
        }, function (t, n, r, o) {
          return Hr("td", {
            ref: t,
            className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(n).join(" ")
          }, Hr("div", {
            className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (null == e ? " fc-timegrid-axis-frame-liquid" : ""),
            style: {
              height: e
            }
          }, Hr("span", {
            className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
            ref: r
          }, o)));
        });
      }, t.handleSlatCoords = function (e) {
        t.setState({
          slatCoords: e
        });
      }, t;
    }

    return n(t, e), t.prototype.renderSimpleLayout = function (e, t, n) {
      var r = this.context,
          o = this.props,
          i = [],
          a = Ki(r.options);
      return e && i.push({
        type: "header",
        key: "header",
        isSticky: a,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      }), t && (i.push({
        type: "body",
        key: "all-day",
        chunk: {
          content: t
        }
      }), i.push({
        type: "body",
        key: "all-day-divider",
        outerContent: Hr("tr", {
          className: "fc-scrollgrid-section"
        }, Hr("td", {
          className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
        }))
      })), i.push({
        type: "body",
        key: "body",
        liquid: !0,
        expandRows: Boolean(r.options.expandRows),
        chunk: {
          scrollerElRef: this.scrollerElRef,
          content: n
        }
      }), Hr(yo, {
        viewSpec: r.viewSpec,
        elRef: this.rootElRef
      }, function (e, t) {
        return Hr("div", {
          className: ["fc-timegrid"].concat(t).join(" "),
          ref: e
        }, Hr($i, {
          liquid: !o.isHeightAuto && !o.forPrint,
          cols: [{
            width: "shrink"
          }],
          sections: i
        }));
      });
    }, t.prototype.renderHScrollLayout = function (e, t, n, r, o, i, a) {
      var s = this,
          l = this.context.pluginHooks.scrollGridImpl;
      if (!l) throw new Error("No ScrollGrid implementation");
      var u = this.context,
          c = this.props,
          d = !c.forPrint && Ki(u.options),
          p = !c.forPrint && Ji(u.options),
          f = [];
      e && f.push({
        type: "header",
        key: "header",
        isSticky: d,
        syncRowHeights: !0,
        chunks: [{
          key: "axis",
          rowContent: function rowContent(e) {
            return Hr("tr", null, s.renderHeadAxis(e.rowSyncHeights[0]));
          }
        }, {
          key: "cols",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }]
      }), t && (f.push({
        type: "body",
        key: "all-day",
        syncRowHeights: !0,
        chunks: [{
          key: "axis",
          rowContent: function rowContent(e) {
            return Hr("tr", null, s.renderTableRowAxis(e.rowSyncHeights[0]));
          }
        }, {
          key: "cols",
          content: t
        }]
      }), f.push({
        key: "all-day-divider",
        type: "body",
        outerContent: Hr("tr", {
          className: "fc-scrollgrid-section"
        }, Hr("td", {
          colSpan: 2,
          className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded")
        }))
      }));
      var h = u.options.nowIndicator;
      return f.push({
        type: "body",
        key: "body",
        liquid: !0,
        expandRows: Boolean(u.options.expandRows),
        chunks: [{
          key: "axis",
          content: function content(e) {
            return Hr("div", {
              className: "fc-timegrid-axis-chunk"
            }, Hr("table", {
              style: {
                height: e.expandRows ? e.clientHeight : ""
              }
            }, e.tableColGroupNode, Hr("tbody", null, Hr(Ts, {
              slatMetas: i
            }))), Hr("div", {
              className: "fc-timegrid-now-indicator-container"
            }, Hr(Mi, {
              unit: h ? "minute" : "day"
            }, function (e) {
              var t = h && a && a.safeComputeTop(e);
              return "number" == typeof t ? Hr(na, {
                isAxis: !0,
                date: e
              }, function (e, n, r, o) {
                return Hr("div", {
                  ref: e,
                  className: ["fc-timegrid-now-indicator-arrow"].concat(n).join(" "),
                  style: {
                    top: t
                  }
                }, o);
              }) : null;
            })));
          }
        }, {
          key: "cols",
          scrollerElRef: this.scrollerElRef,
          content: n
        }]
      }), p && f.push({
        key: "footer",
        type: "footer",
        isSticky: !0,
        chunks: [{
          key: "axis",
          content: Xi
        }, {
          key: "cols",
          content: Xi
        }]
      }), Hr(yo, {
        viewSpec: u.viewSpec,
        elRef: this.rootElRef
      }, function (e, t) {
        return Hr("div", {
          className: ["fc-timegrid"].concat(t).join(" "),
          ref: e
        }, Hr(l, {
          liquid: !c.isHeightAuto && !c.forPrint,
          colGroups: [{
            width: "shrink",
            cols: [{
              width: "shrink"
            }]
          }, {
            cols: [{
              span: r,
              minWidth: o
            }]
          }],
          sections: f
        }));
      });
    }, t.prototype.getAllDayMaxEventProps = function () {
      var e = this.context.options,
          t = e.dayMaxEvents,
          n = e.dayMaxEventRows;
      return !0 !== t && !0 !== n || (t = void 0, n = 5), {
        dayMaxEvents: t,
        dayMaxEventRows: n
      };
    }, t;
  }(oo);

  function Rs(e) {
    return e.text;
  }

  var Ts = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      return this.props.slatMetas.map(function (e) {
        return Hr("tr", {
          key: e.key
        }, Hr(Ss, _r2({}, e)));
      });
    }, t;
  }(jr);

  function ks(e, t) {
    var n,
        r = [];

    for (n = 0; n < t; n++) {
      r.push([]);
    }

    if (e) for (n = 0; n < e.length; n++) {
      r[e[n].col].push(e[n]);
    }
    return r;
  }

  function Ms(e, t) {
    var n = [];

    if (e) {
      for (a = 0; a < t; a++) {
        n[a] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: []
        };
      }

      for (var r = 0, o = e.segs; r < o.length; r++) {
        var i = o[r];
        n[i.col].segs.push(i);
      }
    } else for (var a = 0; a < t; a++) {
      n[a] = null;
    }

    return n;
  }

  function xs(e, t, n, r, o) {
    return _s(e, t, n, r), function (e, t) {
      for (var n = 0, r = e; n < r.length; n++) {
        (c = r[n]).level = null, c.forwardCoord = null, c.backwardCoord = null, c.forwardPressure = null;
      }

      var o,
          i = function (e) {
        var t,
            n,
            r,
            o = [];

        for (t = 0; t < e.length; t++) {
          for (n = e[t], r = 0; r < o.length && Is(n, o[r]).length; r++) {
            ;
          }

          n.level = r, (o[r] || (o[r] = [])).push(n);
        }

        return o;
      }(e = hn(e, t));

      if (function (e) {
        var t, n, r, o, i;

        for (t = 0; t < e.length; t++) {
          for (n = e[t], r = 0; r < n.length; r++) {
            for ((o = n[r]).forwardSegs = [], i = t + 1; i < e.length; i++) {
              Is(o, e[i], o.forwardSegs);
            }
          }
        }
      }(i), o = i[0]) {
        for (var a = 0, s = o; a < s.length; a++) {
          Ps(c = s[a]);
        }

        for (var l = 0, u = o; l < u.length; l++) {
          var c;
          Ns(c = u[l], 0, 0, t);
        }
      }

      return e;
    }(e, o);
  }

  function _s(e, t, n, r) {
    for (var o = 0, i = e; o < i.length; o++) {
      var a = i[o];
      a.top = n.computeDateTop(a.start, t), a.bottom = Math.max(a.top + (r || 0), n.computeDateTop(a.end, t));
    }
  }

  function Is(e, t, n) {
    void 0 === n && (n = []);

    for (var r = 0; r < t.length; r++) {
      o = e, i = t[r], o.bottom > i.top && o.top < i.bottom && n.push(t[r]);
    }

    var o, i;
    return n;
  }

  function Ps(e) {
    var t,
        n,
        r = e.forwardSegs,
        o = 0;

    if (null == e.forwardPressure) {
      for (t = 0; t < r.length; t++) {
        Ps(n = r[t]), o = Math.max(o, 1 + n.forwardPressure);
      }

      e.forwardPressure = o;
    }
  }

  function Ns(e, t, n, r) {
    var o,
        i = e.forwardSegs;
    if (null == e.forwardCoord) for (i.length ? (!function (e, t) {
      var n = e.map(Hs),
          r = [{
        field: "forwardPressure",
        order: -1
      }, {
        field: "backwardCoord",
        order: 1
      }].concat(t);
      n.sort(function (e, t) {
        return ae(e, t, r);
      }), n.map(function (e) {
        return e._seg;
      });
    }(i, r), Ns(i[0], t + 1, n, r), e.forwardCoord = i[0].backwardCoord) : e.forwardCoord = 1, e.backwardCoord = e.forwardCoord - (e.forwardCoord - n) / (t + 1), o = 0; o < i.length; o++) {
      Ns(i[o], 0, e.forwardCoord, r);
    }
  }

  function Hs(e) {
    var t = vn(e);
    return t.forwardPressure = e.forwardPressure, t.backwardCoord = e.backwardCoord, t;
  }

  var Os = St({
    hour: "numeric",
    minute: "2-digit",
    meridiem: !1
  }),
      As = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = ["fc-timegrid-event", "fc-v-event"];
      return this.props.isCondensed && e.push("fc-timegrid-event-condensed"), Hr(ea, _r2({}, this.props, {
        defaultTimeFormat: Os,
        extraClassNames: e
      }));
    }, t;
  }(jr);

  di.timeGridEventCondensedHeight = 30;

  var Us = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.props,
          n = this.context.options.selectMirror,
          o = t.eventDrag && t.eventDrag.segs || t.eventResize && t.eventResize.segs || n && t.dateSelectionSegs || [],
          i = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {};
      return Hr(oa, {
        elRef: t.elRef,
        date: t.date,
        dateProfile: t.dateProfile,
        todayRange: t.todayRange,
        extraHookProps: t.extraHookProps
      }, function (a, s, l) {
        return Hr("td", _r2({
          ref: a,
          className: ["fc-timegrid-col"].concat(s, t.extraClassNames || []).join(" ")
        }, l, t.extraDataAttrs), Hr("div", {
          className: "fc-timegrid-col-frame"
        }, Hr("div", {
          className: "fc-timegrid-col-bg"
        }, e.renderFillSegs(t.businessHourSegs, "non-business"), e.renderFillSegs(t.bgEventSegs, "bg-event"), e.renderFillSegs(t.dateSelectionSegs, "highlight")), Hr("div", {
          className: "fc-timegrid-col-events"
        }, e.renderFgSegs(t.fgEventSegs, i)), Hr("div", {
          className: "fc-timegrid-col-events"
        }, e.renderFgSegs(o, {}, Boolean(t.eventDrag), Boolean(t.eventResize), Boolean(n))), Hr("div", {
          className: "fc-timegrid-now-indicator-container"
        }, e.renderNowIndicator(t.nowIndicatorSegs)), Hr(Ls, {
          date: t.date,
          dateProfile: t.dateProfile,
          todayRange: t.todayRange,
          extraHookProps: t.extraHookProps
        })));
      });
    }, t.prototype.renderFgSegs = function (e, t, n, r, o) {
      var i = this.props;
      return i.forPrint ? this.renderPrintFgSegs(e) : i.slatCoords ? this.renderPositionedFgSegs(e, t, n, r, o) : void 0;
    }, t.prototype.renderPrintFgSegs = function (e) {
      var t = this.props;
      return (e = hn(e, this.context.options.eventOrder)).map(function (e) {
        return Hr("div", {
          className: "fc-timegrid-event-harness",
          key: e.eventRange.instance.instanceId
        }, Hr(As, _r2({
          seg: e,
          isDragging: !1,
          isResizing: !1,
          isDateSelecting: !1,
          isSelected: !1,
          isCondensed: !1
        }, Sn(e, t.todayRange, t.nowDate))));
      });
    }, t.prototype.renderPositionedFgSegs = function (e, t, n, o, i) {
      var a = this,
          s = this.context,
          l = this.props;
      return (e = xs(e, l.date, l.slatCoords, s.options.eventMinHeight, s.options.eventOrder)).map(function (e) {
        var s = e.eventRange.instance.instanceId,
            u = n || o || i ? _r2({
          left: 0,
          right: 0
        }, a.computeSegTopBottomCss(e)) : a.computeFgSegPositionCss(e);
        return Hr("div", {
          className: "fc-timegrid-event-harness" + (e.level > 0 ? " fc-timegrid-event-harness-inset" : ""),
          key: s,
          style: _r2({
            visibility: t[s] ? "hidden" : ""
          }, u)
        }, Hr(As, _r2({
          seg: e,
          isDragging: n,
          isResizing: o,
          isDateSelecting: i,
          isSelected: s === l.eventSelection,
          isCondensed: e.bottom - e.top < di.timeGridEventCondensedHeight
        }, Sn(e, l.todayRange, l.nowDate))));
      });
    }, t.prototype.renderFillSegs = function (e, t) {
      var n = this,
          o = this.context,
          i = this.props;

      if (i.slatCoords) {
        _s(e, i.date, i.slatCoords, o.options.eventMinHeight);

        var a = e.map(function (e) {
          return Hr("div", {
            key: bn(e.eventRange),
            className: "fc-timegrid-bg-harness",
            style: n.computeSegTopBottomCss(e)
          }, "bg-event" === t ? Hr(la, _r2({
            seg: e
          }, Sn(e, i.todayRange, i.nowDate))) : sa(t));
        });
        return Hr(Ur, null, a);
      }
    }, t.prototype.renderNowIndicator = function (e) {
      var t = this.props,
          n = t.slatCoords,
          r = t.date;
      if (n) return e.map(function (e, t) {
        return Hr(na, {
          isAxis: !1,
          date: r,
          key: t
        }, function (t, o, i, a) {
          return Hr("div", {
            ref: t,
            className: ["fc-timegrid-now-indicator-line"].concat(o).join(" "),
            style: {
              top: n.computeDateTop(e.start, r)
            }
          }, a);
        });
      });
    }, t.prototype.computeFgSegPositionCss = function (e) {
      var t,
          n,
          o = this.context,
          i = o.isRtl,
          a = o.options.slotEventOverlap,
          s = e.backwardCoord,
          l = e.forwardCoord;
      a && (l = Math.min(1, s + 2 * (l - s))), i ? (t = 1 - l, n = s) : (t = s, n = 1 - l);
      var u = {
        zIndex: e.level + 1,
        left: 100 * t + "%",
        right: 100 * n + "%"
      };
      return a && e.forwardPressure && (u[i ? "marginLeft" : "marginRight"] = 20), _r2(_r2({}, u), this.computeSegTopBottomCss(e));
    }, t.prototype.computeSegTopBottomCss = function (e) {
      return {
        top: e.top,
        bottom: -e.bottom
      };
    }, t;
  }(jr),
      Ls = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props;
      return Hr(ia, {
        date: e.date,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        extraHookProps: e.extraHookProps
      }, function (e, t) {
        return t && Hr("div", {
          className: "fc-timegrid-col-misc",
          ref: e
        }, t);
      });
    }, t;
  }(jr),
      Ws = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.splitFgEventSegs = it(ks), t.splitBgEventSegs = it(ks), t.splitBusinessHourSegs = it(ks), t.splitNowIndicatorSegs = it(ks), t.splitDateSelectionSegs = it(ks), t.splitEventDrag = it(Ms), t.splitEventResize = it(Ms), t.rootElRef = Ar(), t.cellElRefs = new Li(), t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.props,
          n = this.context.options.nowIndicator && t.slatCoords && t.slatCoords.safeComputeTop(t.nowDate),
          r = t.cells.length,
          o = this.splitFgEventSegs(t.fgEventSegs, r),
          i = this.splitBgEventSegs(t.bgEventSegs, r),
          a = this.splitBusinessHourSegs(t.businessHourSegs, r),
          s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r),
          l = this.splitDateSelectionSegs(t.dateSelectionSegs, r),
          u = this.splitEventDrag(t.eventDrag, r),
          c = this.splitEventResize(t.eventResize, r);
      return Hr("div", {
        className: "fc-timegrid-cols",
        ref: this.rootElRef
      }, Hr("table", {
        style: {
          minWidth: t.tableMinWidth,
          width: t.clientWidth
        }
      }, t.tableColGroupNode, Hr("tbody", null, Hr("tr", null, t.axis && Hr("td", {
        className: "fc-timegrid-col fc-timegrid-axis"
      }, Hr("div", {
        className: "fc-timegrid-col-frame"
      }, Hr("div", {
        className: "fc-timegrid-now-indicator-container"
      }, "number" == typeof n && Hr(na, {
        isAxis: !0,
        date: t.nowDate
      }, function (e, t, r, o) {
        return Hr("div", {
          ref: e,
          className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
          style: {
            top: n
          }
        }, o);
      })))), t.cells.map(function (n, r) {
        return Hr(Us, {
          key: n.key,
          elRef: e.cellElRefs.createRef(n.key),
          dateProfile: t.dateProfile,
          date: n.date,
          nowDate: t.nowDate,
          todayRange: t.todayRange,
          extraHookProps: n.extraHookProps,
          extraDataAttrs: n.extraDataAttrs,
          extraClassNames: n.extraClassNames,
          fgEventSegs: o[r],
          bgEventSegs: i[r],
          businessHourSegs: a[r],
          nowIndicatorSegs: s[r],
          dateSelectionSegs: l[r],
          eventDrag: u[r],
          eventResize: c[r],
          slatCoords: t.slatCoords,
          eventSelection: t.eventSelection,
          forPrint: t.forPrint
        });
      })))));
    }, t.prototype.componentDidMount = function () {
      this.updateCoords();
    }, t.prototype.componentDidUpdate = function () {
      this.updateCoords();
    }, t.prototype.updateCoords = function () {
      var e,
          t = this.props;
      t.onColCoords && null !== t.clientWidth && t.onColCoords(new Mr(this.rootElRef.current, (e = this.cellElRefs.currentMap, t.cells.map(function (t) {
        return e[t.key];
      })), !0, !1));
    }, t;
  }(jr);

  var Vs = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.processSlotOptions = it(zs), t.state = {
        slatCoords: null
      }, t.handleScrollRequest = function (e) {
        var n = t.props.onScrollTopRequest,
            r = t.state.slatCoords;

        if (n && r) {
          if (e.time) {
            var o = r.computeTimeTop(e.time);
            (o = Math.ceil(o)) && o++, n(o);
          }

          return !0;
        }
      }, t.handleColCoords = function (e) {
        t.colCoords = e;
      }, t.handleSlatCoords = function (e) {
        t.setState({
          slatCoords: e
        }), t.props.onSlatCoords && t.props.onSlatCoords(e);
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.state;
      return Hr("div", {
        className: "fc-timegrid-body",
        ref: e.rootElRef,
        style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth
        }
      }, Hr(ms, {
        axis: e.axis,
        dateProfile: e.dateProfile,
        slatMetas: e.slatMetas,
        clientWidth: e.clientWidth,
        minHeight: e.expandRows ? e.clientHeight : "",
        tableMinWidth: e.tableMinWidth,
        tableColGroupNode: e.axis ? e.tableColGroupNode : null,
        onCoords: this.handleSlatCoords
      }), Hr(Ws, {
        cells: e.cells,
        axis: e.axis,
        dateProfile: e.dateProfile,
        businessHourSegs: e.businessHourSegs,
        bgEventSegs: e.bgEventSegs,
        fgEventSegs: e.fgEventSegs,
        dateSelectionSegs: e.dateSelectionSegs,
        eventSelection: e.eventSelection,
        eventDrag: e.eventDrag,
        eventResize: e.eventResize,
        todayRange: e.todayRange,
        nowDate: e.nowDate,
        nowIndicatorSegs: e.nowIndicatorSegs,
        clientWidth: e.clientWidth,
        tableMinWidth: e.tableMinWidth,
        tableColGroupNode: e.tableColGroupNode,
        slatCoords: t.slatCoords,
        onColCoords: this.handleColCoords,
        forPrint: e.forPrint
      }));
    }, t.prototype.componentDidMount = function () {
      this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    }, t.prototype.componentDidUpdate = function (e) {
      this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
    }, t.prototype.componentWillUnmount = function () {
      this.scrollResponder.detach();
    }, t.prototype.positionToHit = function (e, t) {
      var n = this.context,
          r = n.dateEnv,
          o = n.options,
          i = this.colCoords,
          a = this.props.dateProfile,
          s = this.state.slatCoords,
          l = this.processSlotOptions(this.props.slotDuration, o.snapDuration),
          u = l.snapDuration,
          c = l.snapsPerSlot,
          d = i.leftToIndex(e),
          p = s.positions.topToIndex(t);

      if (null != d && null != p) {
        var f = s.positions.tops[p],
            h = s.positions.getHeight(p),
            v = (t - f) / h,
            g = p * c + Math.floor(v * c),
            m = this.props.cells[d].date,
            y = Xe(a.slotMinTime, Ke(u, g)),
            E = r.add(m, y);
        return {
          col: d,
          dateSpan: {
            range: {
              start: E,
              end: r.add(E, u)
            },
            allDay: !1
          },
          dayEl: i.els[d],
          relativeRect: {
            left: i.lefts[d],
            right: i.rights[d],
            top: f,
            bottom: f + h
          }
        };
      }
    }, t;
  }(jr);

  function zs(e, t) {
    var n = t || e,
        r = Qe(e, n);
    return null === r && (n = e, r = 1), {
      snapDuration: n,
      snapsPerSlot: r
    };
  }

  var Fs = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.buildDayRanges = it(Bs), t.slicer = new js(), t.timeColsRef = Ar(), t.handleRootEl = function (e) {
        e ? t.context.registerInteractiveComponent(t, {
          el: e
        }) : t.context.unregisterInteractiveComponent(t);
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.props,
          n = this.context,
          o = t.dateProfile,
          i = t.dayTableModel,
          a = n.options.nowIndicator,
          s = this.buildDayRanges(i, o, n.dateEnv);
      return Hr(Mi, {
        unit: a ? "minute" : "day"
      }, function (l, u) {
        return Hr(Vs, _r2({
          ref: e.timeColsRef,
          rootElRef: e.handleRootEl
        }, e.slicer.sliceProps(t, o, null, n, s), {
          forPrint: t.forPrint,
          axis: t.axis,
          dateProfile: o,
          slatMetas: t.slatMetas,
          slotDuration: t.slotDuration,
          cells: i.cells[0],
          tableColGroupNode: t.tableColGroupNode,
          tableMinWidth: t.tableMinWidth,
          clientWidth: t.clientWidth,
          clientHeight: t.clientHeight,
          expandRows: t.expandRows,
          nowDate: l,
          nowIndicatorSegs: a && e.slicer.sliceNowDate(l, n, s),
          todayRange: u,
          onScrollTopRequest: t.onScrollTopRequest,
          onSlatCoords: t.onSlatCoords
        }));
      });
    }, t.prototype.queryHit = function (e, t) {
      var n = this.timeColsRef.current.positionToHit(e, t);
      if (n) return {
        component: this,
        dateSpan: n.dateSpan,
        dayEl: n.dayEl,
        rect: {
          left: n.relativeRect.left,
          right: n.relativeRect.right,
          top: n.relativeRect.top,
          bottom: n.relativeRect.bottom
        },
        layer: 0
      };
    }, t;
  }(oo);

  function Bs(e, t, n) {
    for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
      var a = i[o];
      r.push({
        start: n.add(a, t.slotMinTime),
        end: n.add(a, t.slotMaxTime)
      });
    }

    return r;
  }

  var js = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.sliceRange = function (e, t) {
      for (var n = [], r = 0; r < t.length; r++) {
        var o = nn(e, t[r]);
        o && n.push({
          start: o.start,
          end: o.end,
          isStart: o.start.valueOf() === e.start.valueOf(),
          isEnd: o.end.valueOf() === e.end.valueOf(),
          col: r
        });
      }

      return n;
    }, t;
  }(Hi),
      Gs = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.buildTimeColsModel = it(qs), t.buildSlatMetas = it(bs), t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.context,
          n = t.options,
          o = t.dateEnv,
          i = t.dateProfileGenerator,
          a = this.props,
          s = a.dateProfile,
          l = this.buildTimeColsModel(s, i),
          u = this.allDaySplitter.splitProps(a),
          c = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, n.slotLabelInterval, n.slotDuration, o),
          d = n.dayMinWidth,
          p = !d,
          f = d,
          h = n.dayHeaders && Hr(_i, {
        dates: l.headerDates,
        dateProfile: s,
        datesRepDistinctDays: !0,
        renderIntro: p ? this.renderHeadAxis : null
      }),
          v = !1 !== n.allDaySlot && function (t) {
        return Hr(us, _r2({}, u.allDay, {
          dateProfile: s,
          dayTableModel: l,
          nextDayThreshold: n.nextDayThreshold,
          tableMinWidth: t.tableMinWidth,
          colGroupNode: t.tableColGroupNode,
          renderRowIntro: p ? e.renderTableRowAxis : null,
          showWeekNumbers: !1,
          expandRows: !1,
          headerAlignElRef: e.headerElRef,
          clientWidth: t.clientWidth,
          clientHeight: t.clientHeight,
          forPrint: a.forPrint
        }, e.getAllDayMaxEventProps()));
      },
          g = function g(t) {
        return Hr(Fs, _r2({}, u.timed, {
          dayTableModel: l,
          dateProfile: s,
          axis: p,
          slotDuration: n.slotDuration,
          slatMetas: c,
          forPrint: a.forPrint,
          tableColGroupNode: t.tableColGroupNode,
          tableMinWidth: t.tableMinWidth,
          clientWidth: t.clientWidth,
          clientHeight: t.clientHeight,
          onSlatCoords: e.handleSlatCoords,
          expandRows: t.expandRows,
          onScrollTopRequest: e.handleScrollTopRequest
        }));
      };

      return f ? this.renderHScrollLayout(h, v, g, l.colCnt, d, c, this.state.slatCoords) : this.renderSimpleLayout(h, v, g);
    }, t;
  }(ws);

  function qs(e, t) {
    var n = new Pi(e.renderRange, t);
    return new Ni(n, !1);
  }

  var Ys = io({
    initialView: "timeGridWeek",
    optionRefiners: {
      allDaySlot: Boolean
    },
    views: {
      timeGrid: {
        component: Gs,
        usesMinMaxTime: !0,
        allDaySlot: !0,
        slotDuration: "00:30:00",
        slotEventOverlap: !0
      },
      timeGridDay: {
        type: "timeGrid",
        duration: {
          days: 1
        }
      },
      timeGridWeek: {
        type: "timeGrid",
        duration: {
          weeks: 1
        }
      }
    }
  }),
      Zs = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = e.dayDate,
          n = e.todayRange,
          o = this.context,
          i = o.theme,
          a = o.dateEnv,
          s = o.options,
          l = o.viewApi,
          u = hr(t, n),
          c = s.listDayFormat ? a.format(t, s.listDayFormat) : "",
          d = s.listDaySideFormat ? a.format(t, s.listDaySideFormat) : "",
          p = s.navLinks ? gr(t) : null,
          f = _r2({
        date: a.toDate(t),
        view: l,
        text: c,
        sideText: d,
        navLinkData: p
      }, u),
          h = ["fc-list-day"].concat(vr(u, i));

      return Hr(uo, {
        hookProps: f,
        classNames: s.dayHeaderClassNames,
        content: s.dayHeaderContent,
        defaultContent: Xs,
        didMount: s.dayHeaderDidMount,
        willUnmount: s.dayHeaderWillUnmount
      }, function (e, n, r, o) {
        return Hr("tr", {
          ref: e,
          className: h.concat(n).join(" "),
          "data-date": tt(t)
        }, Hr("th", {
          colSpan: 3
        }, Hr("div", {
          className: "fc-list-day-cushion " + i.getClass("tableCellShaded"),
          ref: r
        }, o)));
      });
    }, t;
  }(jr);

  function Xs(e) {
    var t = e.navLinkData ? {
      "data-navlink": e.navLinkData,
      tabIndex: 0
    } : {};
    return Hr(Ur, null, e.text && Hr("a", _r2({
      className: "fc-list-day-text"
    }, t), e.text), e.sideText && Hr("a", _r2({
      className: "fc-list-day-side-text"
    }, t), e.sideText));
  }

  var Ks = St({
    hour: "numeric",
    minute: "2-digit",
    meridiem: "short"
  }),
      Js = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this.props,
          t = this.context,
          n = e.seg,
          r = t.options.eventTimeFormat || Ks;
      return Hr(Qi, {
        seg: n,
        timeText: "",
        disableDragging: !0,
        disableResizing: !0,
        defaultContent: $s,
        isPast: e.isPast,
        isFuture: e.isFuture,
        isToday: e.isToday,
        isSelected: e.isSelected,
        isDragging: e.isDragging,
        isResizing: e.isResizing,
        isDateSelecting: e.isDateSelecting
      }, function (e, o, i, a, s) {
        return Hr("tr", {
          className: ["fc-list-event", s.event.url ? "fc-event-forced-url" : ""].concat(o).join(" "),
          ref: e
        }, function (e, t, n) {
          var r = n.options;

          if (!1 !== r.displayEventTime) {
            var o = e.eventRange.def,
                i = e.eventRange.instance,
                a = !1,
                s = void 0;

            if (o.allDay ? a = !0 : $t(e.eventRange.range) ? e.isStart ? s = En(e, t, n, null, null, i.range.start, e.end) : e.isEnd ? s = En(e, t, n, null, null, e.start, i.range.end) : a = !0 : s = En(e, t, n), a) {
              var l = {
                text: n.options.allDayText,
                view: n.viewApi
              };
              return Hr(uo, {
                hookProps: l,
                classNames: r.allDayClassNames,
                content: r.allDayContent,
                defaultContent: Qs,
                didMount: r.allDayDidMount,
                willUnmount: r.allDayWillUnmount
              }, function (e, t, n, r) {
                return Hr("td", {
                  className: ["fc-list-event-time"].concat(t).join(" "),
                  ref: e
                }, r);
              });
            }

            return Hr("td", {
              className: "fc-list-event-time"
            }, s);
          }

          return null;
        }(n, r, t), Hr("td", {
          className: "fc-list-event-graphic"
        }, Hr("span", {
          className: "fc-list-event-dot",
          style: {
            borderColor: s.borderColor || s.backgroundColor
          }
        })), Hr("td", {
          className: "fc-list-event-title",
          ref: i
        }, a));
      });
    }, t;
  }(jr);

  function $s(e) {
    var t = e.event,
        n = t.url;
    return Hr("a", _r2({}, n ? {
      href: n
    } : {}), t.title);
  }

  function Qs(e) {
    return e.text;
  }

  var el = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.computeDateVars = it(nl), t.eventStoreToSegs = it(t._eventStoreToSegs), t.setRootEl = function (e) {
        e ? t.context.registerInteractiveComponent(t, {
          el: e
        }) : t.context.unregisterInteractiveComponent(t);
      }, t;
    }

    return n(t, e), t.prototype.render = function () {
      var e = this,
          t = this.props,
          n = this.context,
          r = ["fc-list", n.theme.getClass("table"), !1 !== n.options.stickyHeaderDates ? "fc-list-sticky" : ""],
          o = this.computeDateVars(t.dateProfile),
          i = o.dayDates,
          a = o.dayRanges,
          s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
      return Hr(yo, {
        viewSpec: n.viewSpec,
        elRef: this.setRootEl
      }, function (n, o) {
        return Hr("div", {
          ref: n,
          className: r.concat(o).join(" ")
        }, Hr(Ui, {
          liquid: !t.isHeightAuto,
          overflowX: t.isHeightAuto ? "visible" : "hidden",
          overflowY: t.isHeightAuto ? "visible" : "auto"
        }, s.length > 0 ? e.renderSegList(s, i) : e.renderEmptyMessage()));
      });
    }, t.prototype.renderEmptyMessage = function () {
      var e = this.context,
          t = e.options,
          n = e.viewApi,
          r = {
        text: t.noEventsText,
        view: n
      };
      return Hr(uo, {
        hookProps: r,
        classNames: t.noEventsClassNames,
        content: t.noEventsContent,
        defaultContent: tl,
        didMount: t.noEventsDidMount,
        willUnmount: t.noEventsWillUnmount
      }, function (e, t, n, r) {
        return Hr("div", {
          className: ["fc-list-empty"].concat(t).join(" "),
          ref: e
        }, Hr("div", {
          className: "fc-list-empty-cushion",
          ref: n
        }, r));
      });
    }, t.prototype.renderSegList = function (e, t) {
      var n = this.context,
          o = n.theme,
          i = n.options,
          a = function (e) {
        var t,
            n,
            r = [];

        for (t = 0; t < e.length; t++) {
          n = e[t], (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
        }

        return r;
      }(e);

      return Hr(Mi, {
        unit: "day"
      }, function (e, n) {
        for (var s = [], l = 0; l < a.length; l++) {
          var u = a[l];

          if (u) {
            var c = t[l].toISOString();
            s.push(Hr(Zs, {
              key: c,
              dayDate: t[l],
              todayRange: n
            }));

            for (var d = 0, p = u = hn(u, i.eventOrder); d < p.length; d++) {
              var f = p[d];
              s.push(Hr(Js, _r2({
                key: c + ":" + f.eventRange.instance.instanceId,
                seg: f,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: !1
              }, Sn(f, n, e))));
            }
          }
        }

        return Hr("table", {
          className: "fc-list-table " + o.getClass("table")
        }, Hr("tbody", null, s));
      });
    }, t.prototype._eventStoreToSegs = function (e, t, n) {
      return this.eventRangesToSegs(ln(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n);
    }, t.prototype.eventRangesToSegs = function (e, t) {
      for (var n = [], r = 0, o = e; r < o.length; r++) {
        var i = o[r];
        n.push.apply(n, this.eventRangeToSegs(i, t));
      }

      return n;
    }, t.prototype.eventRangeToSegs = function (e, t) {
      var n,
          r,
          o,
          i = this.context.dateEnv,
          a = this.context.options.nextDayThreshold,
          s = e.range,
          l = e.def.allDay,
          u = [];

      for (n = 0; n < t.length; n++) {
        if ((r = nn(s, t[n])) && (o = {
          component: this,
          eventRange: e,
          start: r.start,
          end: r.end,
          isStart: e.isStart && r.start.valueOf() === s.start.valueOf(),
          isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
          dayIndex: n
        }, u.push(o), !o.isEnd && !l && n + 1 < t.length && s.end < i.add(t[n + 1].start, a))) {
          o.end = s.end, o.isEnd = !0;
          break;
        }
      }

      return u;
    }, t;
  }(oo);

  function tl(e) {
    return e.text;
  }

  function nl(e) {
    for (var t = be(e.renderRange.start), n = e.renderRange.end, r = [], o = []; t < n;) {
      r.push(t), o.push({
        start: t,
        end: ve(t, 1)
      }), t = ve(t, 1);
    }

    return {
      dayDates: r,
      dayRanges: o
    };
  }

  function rl(e) {
    return !1 === e ? null : St(e);
  }

  var ol = io({
    optionRefiners: {
      listDayFormat: rl,
      listDaySideFormat: rl,
      noEventsClassNames: _t,
      noEventsContent: _t,
      noEventsDidMount: _t,
      noEventsWillUnmount: _t
    },
    views: {
      list: {
        component: el,
        buttonTextKey: "list",
        listDayFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      listDay: {
        type: "list",
        duration: {
          days: 1
        },
        listDayFormat: {
          weekday: "long"
        }
      },
      listWeek: {
        type: "list",
        duration: {
          weeks: 1
        },
        listDayFormat: {
          weekday: "long"
        },
        listDaySideFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      listMonth: {
        type: "list",
        duration: {
          month: 1
        },
        listDaySideFormat: {
          weekday: "long"
        }
      },
      listYear: {
        type: "list",
        duration: {
          year: 1
        },
        listDaySideFormat: {
          weekday: "long"
        }
      }
    }
  }),
      il = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return n(t, e), t;
  }(Pr);

  il.prototype.classes = {
    root: "fc-theme-bootstrap",
    table: "table-bordered",
    tableCellShaded: "table-active",
    buttonGroup: "btn-group",
    button: "btn btn-primary",
    buttonActive: "active",
    popover: "popover",
    popoverHeader: "popover-header",
    popoverContent: "popover-body"
  }, il.prototype.baseIconClass = "fa", il.prototype.iconClasses = {
    close: "fa-times",
    prev: "fa-chevron-left",
    next: "fa-chevron-right",
    prevYear: "fa-angle-double-left",
    nextYear: "fa-angle-double-right"
  }, il.prototype.rtlIconClasses = {
    prev: "fa-chevron-right",
    next: "fa-chevron-left",
    prevYear: "fa-angle-double-right",
    nextYear: "fa-angle-double-left"
  }, il.prototype.iconOverrideOption = "bootstrapFontAwesome", il.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome", il.prototype.iconOverridePrefix = "fa-";
  var al = io({
    themeClasses: {
      bootstrap: il
    }
  });
  var sl = io({
    eventSourceDefs: [{
      parseMeta: function parseMeta(e) {
        var t = e.googleCalendarId;
        return !t && e.url && (t = function (e) {
          var t;
          if (/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e)) return e;
          if ((t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e))) return decodeURIComponent(t[1]);
        }(e.url)), t ? {
          googleCalendarId: t,
          googleCalendarApiKey: e.googleCalendarApiKey,
          googleCalendarApiBase: e.googleCalendarApiBase,
          extraParams: e.extraParams
        } : null;
      },
      fetch: function fetch(e, t, n) {
        var o = e.context,
            i = o.dateEnv,
            a = o.options,
            s = e.eventSource.meta,
            l = s.googleCalendarApiKey || a.googleCalendarApiKey;

        if (l) {
          var u = function (e) {
            var t = e.googleCalendarApiBase;
            t || (t = "https://www.googleapis.com/calendar/v3/calendars");
            return t + "/" + encodeURIComponent(e.googleCalendarId) + "/events";
          }(s),
              c = s.extraParams,
              d = "function" == typeof c ? c() : c,
              p = function (e, t, n, o) {
            var i, a, s;
            o.canComputeOffset ? (a = o.formatIso(e.start), s = o.formatIso(e.end)) : (a = ve(e.start, -1).toISOString(), s = ve(e.end, 1).toISOString());
            i = _r2(_r2({}, n || {}), {
              key: t,
              timeMin: a,
              timeMax: s,
              singleEvents: !0,
              maxResults: 9999
            }), "local" !== o.timeZone && (i.timeZone = o.timeZone);
            return i;
          }(e.range, l, d, i);

          Wo("GET", u, p, function (e, r) {
            var o, i;
            e.error ? n({
              message: "Google Calendar API: " + e.error.message,
              errors: e.error.errors,
              xhr: r
            }) : t({
              rawEvents: (o = e.items, i = p.timeZone, o.map(function (e) {
                return function (e, t) {
                  var n = e.htmlLink || null;
                  n && t && (n = function (e, t) {
                    return e.replace(/(\?.*?)?(#|$)/, function (e, n, r) {
                      return (n ? n + "&" : "?") + t + r;
                    });
                  }(n, "ctz=" + t));
                  return {
                    id: e.id,
                    title: e.summary,
                    start: e.start.dateTime || e.start.date,
                    end: e.end.dateTime || e.end.date,
                    url: n,
                    location: e.location,
                    description: e.description
                  };
                }(e, i);
              })),
              xhr: r
            });
          }, function (e, t) {
            n({
              message: e,
              xhr: t
            });
          });
        } else n({
          message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"
        });
      }
    }],
    optionRefiners: {
      googleCalendarApiKey: String
    },
    eventSourceRefiners: {
      googleCalendarApiKey: String,
      googleCalendarId: String,
      googleCalendarApiBase: String,
      extraParams: _t
    }
  });
  return Fo.push(Wa, fs, Ys, ol, al, sl), e.BASE_OPTION_DEFAULTS = bt, e.BASE_OPTION_REFINERS = Dt, e.BaseComponent = jr, e.BgEvent = la, e.BootstrapTheme = il, e.Calendar = pa, e.CalendarApi = Vn, e.CalendarContent = Ei, e.CalendarDataManager = Zo, e.CalendarDataProvider = oi, e.CalendarRoot = bi, e.Component = Nr, e.ContentHook = po, e.CustomContentRenderContext = co, e.DateComponent = oo, e.DateEnv = Xn, e.DateProfileGenerator = Co, e.DayCellContent = ia, e.DayCellRoot = oa, e.DayGridView = ds, e.DayHeader = _i, e.DaySeriesModel = Pi, e.DayTable = us, e.DayTableModel = Ni, e.DayTableSlicer = cs, e.DayTimeCols = Fs, e.DayTimeColsSlicer = js, e.DayTimeColsView = Gs, e.DelayedRunner = Go, e.Draggable = Aa, e.ElementDragging = ci, e.ElementScrollController = _r, e.Emitter = kr, e.EventApi = zn, e.EventRoot = Qi, e.EventSourceApi = L, e.FeaturefulElementDragging = wa, e.Fragment = Ur, e.Interaction = ai, e.ListView = el, e.MountHook = ho, e.NamedTimeZoneImpl = ii, e.NowIndicatorRoot = na, e.NowTimer = Mi, e.PointerDragging = ga, e.PositionCache = Mr, e.RefMap = Li, e.RenderHook = uo, e.ScrollController = xr, e.ScrollResponder = Vr, e.Scroller = Ui, e.SimpleScrollGrid = $i, e.Slicer = Hi, e.Splitter = pr, e.StandardEvent = ea, e.Table = as, e.TableDateCell = Ri, e.TableDowCell = Ti, e.TableView = Va, e.Theme = Pr, e.ThirdPartyDraggable = La, e.TimeCols = Vs, e.TimeColsSlatsCoords = vs, e.TimeColsView = ws, e.ViewApi = On, e.ViewContextType = zr, e.ViewRoot = yo, e.WeekNumberRoot = ca, e.WindowScrollController = Ir, e.addDays = ve, e.addDurations = Xe, e.addMs = ge, e.addWeeks = he, e.allowContextMenu = oe, e.allowSelection = ne, e.applyMutationToEventStore = Pn, e.applyStyle = j, e.applyStyleProp = G, e.asCleanDays = function (e) {
    return e.years || e.months || e.milliseconds ? 0 : e.days;
  }, e.asRoughMinutes = function (e) {
    return $e(e) / 6e4;
  }, e.asRoughMs = $e, e.asRoughSeconds = function (e) {
    return $e(e) / 1e3;
  }, e.buildClassNameNormalizer = vo, e.buildDayRanges = Bs, e.buildDayTableModel = ps, e.buildEventApis = Bn, e.buildEventRangeKey = bn, e.buildHashFromArray = function (e, t) {
    for (var n = {}, r = 0; r < e.length; r++) {
      var o = t(e[r], r);
      n[o[0]] = o[1];
    }

    return n;
  }, e.buildNavLinkData = gr, e.buildSegCompareObj = vn, e.buildSegTimeText = En, e.buildSlatMetas = bs, e.buildTimeColsModel = qs, e.collectFromHash = Fe, e.combineEventUis = Vt, e.compareByFieldSpec = se, e.compareByFieldSpecs = ae, e.compareNumbers = ce, e.compareObjs = Ve, e.computeEdges = br, e.computeFallbackHeaderFormat = Ci, e.computeHeightAndMargins = function (e) {
    return e.getBoundingClientRect().height + function (e) {
      var t = window.getComputedStyle(e);
      return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10);
    }(e);
  }, e.computeInnerRect = Cr, e.computeRect = wr, e.computeSegDraggable = gn, e.computeSegEndResizable = yn, e.computeSegStartResizable = mn, e.computeShrinkWidth = Wi, e.computeSmallestCellWidth = pe, e.computeVisibleDayRange = Jt, e.config = di, e.constrainPoint = sr, e.createContext = Lr, e.createDuration = Ye, e.createElement = Hr, e.createEmptyEventStore = Ht, e.createEventInstance = Ie, e.createEventUi = Wt, e.createFormatter = St, e.createPlugin = io, e.createRef = Ar, e.diffDates = Qt, e.diffDayAndTime = Ee, e.diffDays = ye, e.diffPoints = ur, e.diffWeeks = me, e.diffWholeDays = De, e.diffWholeWeeks = Se, e.disableCursor = Q, e.elementClosest = V, e.elementMatches = z, e.enableCursor = ee, e.eventTupleToStore = Pt, e.filterEventStoreDefs = At, e.filterHash = He, e.findDirectChildren = function (e, t) {
    for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o++) {
      for (var i = n[o].children, a = 0; a < i.length; a++) {
        var s = i[a];
        t && !z(s, t) || r.push(s);
      }
    }

    return r;
  }, e.findElements = F, e.flexibleCompare = le, e.flushToDom = Wr, e.formatDate = function (e, t) {
    void 0 === t && (t = {});
    var n = tr(t),
        r = St(t),
        o = n.createMarkerMeta(e);
    return o ? n.format(o.marker, r, {
      forcedTzo: o.forcedTzo
    }) : "";
  }, e.formatDayString = tt, e.formatIsoTimeString = nt, e.formatRange = function (e, t, n) {
    var r = tr("object" == _typeof(n) && n ? n : {}),
        o = St(n),
        i = r.createMarkerMeta(e),
        a = r.createMarkerMeta(t);
    return i && a ? r.formatRange(i.marker, a.marker, o, {
      forcedStartTzo: i.forcedTzo,
      forcedEndTzo: a.forcedTzo,
      isEndExclusive: n.isEndExclusive,
      defaultSeparator: bt.defaultRangeSeparator
    }) : "";
  }, e.getAllowYScrolling = zi, e.getCanVGrowWithinCell = cr, e.getClippingParents = Rr, e.getDateMeta = hr, e.getDayClassNames = vr, e.getDefaultEventEnd = In, e.getElSeg = dn, e.getEventClassNames = Dn, e.getIsRtlScrollbarOnLeft = Er, e.getRectCenter = lr, e.getRelevantEvents = Nt, e.getScrollGridClassNames = Yi, e.getScrollbarWidths = Sr, e.getSectionClassNames = Zi, e.getSectionHasLiquidHeight = Vi, e.getSegMeta = Sn, e.getSlotClassNames = function (e, t) {
    var n = ["fc-slot", "fc-slot-" + fe[e.dow]];
    return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n;
  }, e.getStickyFooterScrollbar = Ji, e.getStickyHeaderDates = Ki, e.getUnequalProps = We, e.globalLocales = Kn, e.globalPlugins = Fo, e.greatestDurationDenominator = et, e.guid = $, e.hasBgRendering = un, e.hasShrinkWidth = qi, e.identity = _t, e.interactionSettingsStore = ui, e.interactionSettingsToStore = li, e.intersectRanges = nn, e.intersectRects = ar, e.isArraysEqual = ot, e.isColPropsEqual = Bi, e.isDateSpansEqual = Rn, e.isInt = de, e.isInteractionValid = Jr, e.isMultiDayRange = $t, e.isPropsEqual = Le, e.isPropsValid = Qr, e.isValidDate = xe, e.listenBySelector = Z, e.mapHash = Oe, e.memoize = it, e.memoizeArraylike = function (e, t, n) {
    var r = [],
        o = [];
    return function (i) {
      for (var a = r.length, s = i.length, l = 0; l < a; l++) {
        if (i[l]) {
          if (!ot(r[l], i[l])) {
            n && n(o[l]);
            var u = e.apply(this, i[l]);
            t && t(u, o[l]) || (o[l] = u);
          }
        } else n && n(o[l]);
      }

      for (; l < s; l++) {
        o[l] = e.apply(this, i[l]);
      }

      return r = i, o.splice(s), o;
    };
  }, e.memoizeHashlike = function (e, t, n) {
    var r = {},
        o = {};
    return function (i) {
      var a = {};

      for (var s in i) {
        if (o[s]) {
          if (ot(r[s], i[s])) a[s] = o[s];else {
            n && n(o[s]);
            var l = e.apply(this, i[s]);
            a[s] = t && t(l, o[s]) ? o[s] : l;
          }
        } else a[s] = e.apply(this, i[s]);
      }

      return r = i, o = a, a;
    };
  }, e.memoizeObjArg = at, e.mergeEventStores = Ot, e.multiplyDuration = Ke, e.padStart = ue, e.parseBusinessHours = or, e.parseClassNames = Ut, e.parseDragMeta = fi, e.parseEventDef = Xt, e.parseFieldSpecs = ie, e.parseMarker = Zn, e.pointInsideRect = ir, e.preventContextMenu = re, e.preventDefault = q, e.preventSelection = te, e.rangeContainsMarker = sn, e.rangeContainsRange = an, e.rangesEqual = rn, e.rangesIntersect = on, e.refineEventDef = Yt, e.refineProps = xt, e.removeElement = W, e.removeExact = function (e, t) {
    for (var n = 0, r = 0; r < e.length;) {
      e[r] === t ? (e.splice(r, 1), n++) : r++;
    }

    return n;
  }, e.render = Or, e.renderChunkContent = Fi, e.renderFill = sa, e.renderMicroColGroup = ji, e.renderScrollShim = Xi, e.requestJson = Wo, e.sanitizeShrinkWidth = Gi, e.setElSeg = cn, e.setRef = Yr, e.sliceEventStore = ln, e.sliceEvents = function (e, t) {
    return ln(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg;
  }, e.sortEventSegs = hn, e.startOfDay = be, e.translateRect = function (e, t, n) {
    return {
      left: e.left + t,
      right: e.right + t,
      top: e.top + n,
      bottom: e.bottom + n
    };
  }, e.triggerDateSelect = xn, e.unpromisify = Tr, e.version = "5.3.2", e.whenTransitionDone = K, e.wholeDivideDurations = Qe, e;
}({});

/***/ }),

/***/ "./node_modules/jquery/external/sizzle/dist/sizzle.js":
/*!************************************************************!*\
  !*** ./node_modules/jquery/external/sizzle/dist/sizzle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
(function (window) {
  var i,
      support,
      Expr,
      getText,
      isXML,
      tokenize,
      compile,
      select,
      outermostContext,
      sortInput,
      hasDuplicate,
      // Local document vars
  setDocument,
      document,
      docElem,
      documentIsHTML,
      rbuggyQSA,
      rbuggyMatches,
      matches,
      contains,
      // Instance-specific data
  expando = "sizzle" + 1 * new Date(),
      preferredDoc = window.document,
      dirruns = 0,
      done = 0,
      classCache = createCache(),
      tokenCache = createCache(),
      compilerCache = createCache(),
      nonnativeSelectorCache = createCache(),
      sortOrder = function sortOrder(a, b) {
    if (a === b) {
      hasDuplicate = true;
    }

    return 0;
  },
      // Instance methods
  hasOwn = {}.hasOwnProperty,
      arr = [],
      pop = arr.pop,
      pushNative = arr.push,
      push = arr.push,
      slice = arr.slice,
      // Use a stripped-down indexOf as it's faster than native
  // https://jsperf.com/thor-indexof-vs-for/5
  indexOf = function indexOf(list, elem) {
    var i = 0,
        len = list.length;

    for (; i < len; i++) {
      if (list[i] === elem) {
        return i;
      }
    }

    return -1;
  },
      booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
      // Regular expressions
  // http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",
      // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
  identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
  attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
  "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
  // or strings [capture 3 or capture 4]"
  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
      pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
  // 1. quoted (capture 3; capture 4 or capture 5)
  "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
  "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
  ".*" + ")\\)|)",
      // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rwhitespace = new RegExp(whitespace + "+", "g"),
      rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
      rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
      rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
      rdescend = new RegExp(whitespace + "|>"),
      rpseudo = new RegExp(pseudos),
      ridentifier = new RegExp("^" + identifier + "$"),
      matchExpr = {
    "ID": new RegExp("^#(" + identifier + ")"),
    "CLASS": new RegExp("^\\.(" + identifier + ")"),
    "TAG": new RegExp("^(" + identifier + "|[*])"),
    "ATTR": new RegExp("^" + attributes),
    "PSEUDO": new RegExp("^" + pseudos),
    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
  },
      rhtml = /HTML$/i,
      rinputs = /^(?:input|select|textarea|button)$/i,
      rheader = /^h\d$/i,
      rnative = /^[^{]+\{\s*\[native \w/,
      // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      rsibling = /[+~]/,
      // CSS escapes
  // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
      funescape = function funescape(escape, nonHex) {
    var high = "0x" + escape.slice(1) - 0x10000;
    return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
    nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
    // Support: IE <=11+
    // For values outside the Basic Multilingual Plane (BMP), manually construct a
    // surrogate pair
    high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
  },
      // CSS string/identifier serialization
  // https://drafts.csswg.org/cssom/#common-serializing-idioms
  rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      fcssescape = function fcssescape(ch, asCodePoint) {
    if (asCodePoint) {
      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if (ch === "\0") {
        return "\uFFFD";
      } // Control characters and (dependent upon position) numbers get escaped as code points


      return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
    } // Other potentially-special ASCII characters get backslash-escaped


    return "\\" + ch;
  },
      // Used for iframes
  // See setDocument()
  // Removing the function wrapper causes a "Permission Denied"
  // error in IE
  unloadHandler = function unloadHandler() {
    setDocument();
  },
      inDisabledFieldset = addCombinator(function (elem) {
    return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
  }, {
    dir: "parentNode",
    next: "legend"
  }); // Optimize for push.apply( _, NodeList )


  try {
    push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
    // Detect silently failing push.apply
    // eslint-disable-next-line no-unused-expressions

    arr[preferredDoc.childNodes.length].nodeType;
  } catch (e) {
    push = {
      apply: arr.length ? // Leverage slice if possible
      function (target, els) {
        pushNative.apply(target, slice.call(els));
      } : // Support: IE<9
      // Otherwise append directly
      function (target, els) {
        var j = target.length,
            i = 0; // Can't trust NodeList.length

        while (target[j++] = els[i++]) {}

        target.length = j - 1;
      }
    };
  }

  function Sizzle(selector, context, results, seed) {
    var m,
        i,
        elem,
        nid,
        match,
        groups,
        newSelector,
        newContext = context && context.ownerDocument,
        // nodeType defaults to 9, since context defaults to document
    nodeType = context ? context.nodeType : 9;
    results = results || []; // Return early from calls with invalid selector or context

    if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
      return results;
    } // Try to shortcut find operations (as opposed to filters) in HTML documents


    if (!seed) {
      setDocument(context);
      context = context || document;

      if (documentIsHTML) {
        // If the selector is sufficiently simple, try using a "get*By*" DOM method
        // (excepting DocumentFragment context, where the methods don't exist)
        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
          // ID selector
          if (m = match[1]) {
            // Document context
            if (nodeType === 9) {
              if (elem = context.getElementById(m)) {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } else {
                return results;
              } // Element context

            } else {
              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                results.push(elem);
                return results;
              }
            } // Type selector

          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector));
            return results; // Class selector
          } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m));
            return results;
          }
        } // Take advantage of querySelectorAll


        if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
        // Exclude object elements
        nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
          newSelector = selector;
          newContext = context; // qSA considers elements outside a scoping root when evaluating child or
          // descendant combinators, which is not what we want.
          // In such cases, we work around the behavior by prefixing every selector in the
          // list with an ID selector referencing the scope context.
          // The technique has to be used as well when a leading combinator is used
          // as such selectors are not recognized by querySelectorAll.
          // Thanks to Andrew Dupont for this technique.

          if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
            // Expand context for sibling selectors
            newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
            // supports it & if we're not changing the context.

            if (newContext !== context || !support.scope) {
              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              }
            } // Prefix every selector in the list


            groups = tokenize(selector);
            i = groups.length;

            while (i--) {
              groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
            }

            newSelector = groups.join(",");
          }

          try {
            push.apply(results, newContext.querySelectorAll(newSelector));
            return results;
          } catch (qsaError) {
            nonnativeSelectorCache(selector, true);
          } finally {
            if (nid === expando) {
              context.removeAttribute("id");
            }
          }
        }
      }
    } // All others


    return select(selector.replace(rtrim, "$1"), context, results, seed);
  }
  /**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */


  function createCache() {
    var keys = [];

    function cache(key, value) {
      // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
      if (keys.push(key + " ") > Expr.cacheLength) {
        // Only keep the most recent entries
        delete cache[keys.shift()];
      }

      return cache[key + " "] = value;
    }

    return cache;
  }
  /**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */


  function markFunction(fn) {
    fn[expando] = true;
    return fn;
  }
  /**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */


  function assert(fn) {
    var el = document.createElement("fieldset");

    try {
      return !!fn(el);
    } catch (e) {
      return false;
    } finally {
      // Remove from its parent by default
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      } // release memory in IE


      el = null;
    }
  }
  /**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */


  function addHandle(attrs, handler) {
    var arr = attrs.split("|"),
        i = arr.length;

    while (i--) {
      Expr.attrHandle[arr[i]] = handler;
    }
  }
  /**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */


  function siblingCheck(a, b) {
    var cur = b && a,
        diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

    if (diff) {
      return diff;
    } // Check if b follows a


    if (cur) {
      while (cur = cur.nextSibling) {
        if (cur === b) {
          return -1;
        }
      }
    }

    return a ? 1 : -1;
  }
  /**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */


  function createInputPseudo(type) {
    return function (elem) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === type;
    };
  }
  /**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */


  function createButtonPseudo(type) {
    return function (elem) {
      var name = elem.nodeName.toLowerCase();
      return (name === "input" || name === "button") && elem.type === type;
    };
  }
  /**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */


  function createDisabledPseudo(disabled) {
    // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
    return function (elem) {
      // Only certain elements can match :enabled or :disabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
      if ("form" in elem) {
        // Check for inherited disabledness on relevant non-disabled elements:
        // * listed form-associated elements in a disabled fieldset
        //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
        // * option elements in a disabled optgroup
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
        // All such elements have a "form" property.
        if (elem.parentNode && elem.disabled === false) {
          // Option elements defer to a parent optgroup if present
          if ("label" in elem) {
            if ("label" in elem.parentNode) {
              return elem.parentNode.disabled === disabled;
            } else {
              return elem.disabled === disabled;
            }
          } // Support: IE 6 - 11
          // Use the isDisabled shortcut property to check for disabled fieldset ancestors


          return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

          /* jshint -W018 */
          elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
        }

        return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
        // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
        // even exist on them, let alone have a boolean value.
      } else if ("label" in elem) {
        return elem.disabled === disabled;
      } // Remaining elements are neither :enabled nor :disabled


      return false;
    };
  }
  /**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */


  function createPositionalPseudo(fn) {
    return markFunction(function (argument) {
      argument = +argument;
      return markFunction(function (seed, matches) {
        var j,
            matchIndexes = fn([], seed.length, argument),
            i = matchIndexes.length; // Match elements found at the specified indexes

        while (i--) {
          if (seed[j = matchIndexes[i]]) {
            seed[j] = !(matches[j] = seed[j]);
          }
        }
      });
    });
  }
  /**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */


  function testContext(context) {
    return context && typeof context.getElementsByTagName !== "undefined" && context;
  } // Expose support vars for convenience


  support = Sizzle.support = {};
  /**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */

  isXML = Sizzle.isXML = function (elem) {
    var namespace = elem.namespaceURI,
        docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
    // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
    // https://bugs.jquery.com/ticket/4833

    return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
  };
  /**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */


  setDocument = Sizzle.setDocument = function (node) {
    var hasCompare,
        subWindow,
        doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq

    if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
      return document;
    } // Update global variables


    document = doc;
    docElem = document.documentElement;
    documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
    // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq

    if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
      // Support: IE 11, Edge
      if (subWindow.addEventListener) {
        subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
      } else if (subWindow.attachEvent) {
        subWindow.attachEvent("onunload", unloadHandler);
      }
    } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
    // Safari 4 - 5 only, Opera <=11.6 - 12.x only
    // IE/Edge & older browsers don't support the :scope pseudo-class.
    // Support: Safari 6.0 only
    // Safari 6.0 supports :scope but it's an alias of :root there.


    support.scope = assert(function (el) {
      docElem.appendChild(el).appendChild(document.createElement("div"));
      return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
    });
    /* Attributes
    ---------------------------------------------------------------------- */
    // Support: IE<8
    // Verify that getAttribute really returns attributes and not properties
    // (excepting IE8 booleans)

    support.attributes = assert(function (el) {
      el.className = "i";
      return !el.getAttribute("className");
    });
    /* getElement(s)By*
    ---------------------------------------------------------------------- */
    // Check if getElementsByTagName("*") returns only elements

    support.getElementsByTagName = assert(function (el) {
      el.appendChild(document.createComment(""));
      return !el.getElementsByTagName("*").length;
    }); // Support: IE<9

    support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
    // Check if getElementById returns elements by name
    // The broken getElementById methods don't pick up programmatically-set names,
    // so use a roundabout getElementsByName test

    support.getById = assert(function (el) {
      docElem.appendChild(el).id = expando;
      return !document.getElementsByName || !document.getElementsByName(expando).length;
    }); // ID filter and find

    if (support.getById) {
      Expr.filter["ID"] = function (id) {
        var attrId = id.replace(runescape, funescape);
        return function (elem) {
          return elem.getAttribute("id") === attrId;
        };
      };

      Expr.find["ID"] = function (id, context) {
        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
          var elem = context.getElementById(id);
          return elem ? [elem] : [];
        }
      };
    } else {
      Expr.filter["ID"] = function (id) {
        var attrId = id.replace(runescape, funescape);
        return function (elem) {
          var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
          return node && node.value === attrId;
        };
      }; // Support: IE 6 - 7 only
      // getElementById is not reliable as a find shortcut


      Expr.find["ID"] = function (id, context) {
        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
          var node,
              i,
              elems,
              elem = context.getElementById(id);

          if (elem) {
            // Verify the id attribute
            node = elem.getAttributeNode("id");

            if (node && node.value === id) {
              return [elem];
            } // Fall back on getElementsByName


            elems = context.getElementsByName(id);
            i = 0;

            while (elem = elems[i++]) {
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              }
            }
          }

          return [];
        }
      };
    } // Tag


    Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
      if (typeof context.getElementsByTagName !== "undefined") {
        return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
      } else if (support.qsa) {
        return context.querySelectorAll(tag);
      }
    } : function (tag, context) {
      var elem,
          tmp = [],
          i = 0,
          // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
      results = context.getElementsByTagName(tag); // Filter out possible comments

      if (tag === "*") {
        while (elem = results[i++]) {
          if (elem.nodeType === 1) {
            tmp.push(elem);
          }
        }

        return tmp;
      }

      return results;
    }; // Class

    Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
      if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
        return context.getElementsByClassName(className);
      }
    };
    /* QSA/matchesSelector
    ---------------------------------------------------------------------- */
    // QSA and matchesSelector support
    // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


    rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
    // We allow this because of a bug in IE8/9 that throws an error
    // whenever `document.activeElement` is accessed on an iframe
    // So, we allow :focus to pass through QSA all the time to avoid the IE error
    // See https://bugs.jquery.com/ticket/13378

    rbuggyQSA = [];

    if (support.qsa = rnative.test(document.querySelectorAll)) {
      // Build QSA regex
      // Regex strategy adopted from Diego Perini
      assert(function (el) {
        var input; // Select is set to empty string on purpose
        // This is to test IE's treatment of not explicitly
        // setting a boolean content attribute,
        // since its presence should be enough
        // https://bugs.jquery.com/ticket/12359

        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
        // Nothing should be selected when empty strings follow ^= or $= or *=
        // The test attribute must be unknown in Opera but "safe" for WinRT
        // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

        if (el.querySelectorAll("[msallowcapture^='']").length) {
          rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
        } // Support: IE8
        // Boolean attributes and "value" are not treated correctly


        if (!el.querySelectorAll("[selected]").length) {
          rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
        } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
          rbuggyQSA.push("~=");
        } // Support: IE 11+, Edge 15 - 18+
        // IE 11/Edge don't find elements on a `[name='']` query in some cases.
        // Adding a temporary attribute to the document before the selection works
        // around the issue.
        // Interestingly, IE 10 & older don't seem to have the issue.


        input = document.createElement("input");
        input.setAttribute("name", "");
        el.appendChild(input);

        if (!el.querySelectorAll("[name='']").length) {
          rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
        } // Webkit/Opera - :checked should return selected option elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        // IE8 throws error here and will not see later tests


        if (!el.querySelectorAll(":checked").length) {
          rbuggyQSA.push(":checked");
        } // Support: Safari 8+, iOS 8+
        // https://bugs.webkit.org/show_bug.cgi?id=136851
        // In-page `selector#id sibling-combinator selector` fails


        if (!el.querySelectorAll("a#" + expando + "+*").length) {
          rbuggyQSA.push(".#.+[+~]");
        } // Support: Firefox <=3.6 - 5 only
        // Old Firefox doesn't throw on a badly-escaped identifier.


        el.querySelectorAll("\\\f");
        rbuggyQSA.push("[\\r\\n\\f]");
      });
      assert(function (el) {
        el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
        // The type and name attributes are restricted during .innerHTML assignment

        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        el.appendChild(input).setAttribute("name", "D"); // Support: IE8
        // Enforce case-sensitivity of name attribute

        if (el.querySelectorAll("[name=d]").length) {
          rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
        } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
        // IE8 throws error here and will not see later tests


        if (el.querySelectorAll(":enabled").length !== 2) {
          rbuggyQSA.push(":enabled", ":disabled");
        } // Support: IE9-11+
        // IE's :disabled selector does not pick up the children of disabled fieldsets


        docElem.appendChild(el).disabled = true;

        if (el.querySelectorAll(":disabled").length !== 2) {
          rbuggyQSA.push(":enabled", ":disabled");
        } // Support: Opera 10 - 11 only
        // Opera 10-11 does not throw on post-comma invalid pseudos


        el.querySelectorAll("*,:x");
        rbuggyQSA.push(",.*:");
      });
    }

    if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
      assert(function (el) {
        // Check to see if it's possible to do matchesSelector
        // on a disconnected node (IE 9)
        support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
        // Gecko does not error, returns false instead

        matches.call(el, "[s!='']:x");
        rbuggyMatches.push("!=", pseudos);
      });
    }

    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
    /* Contains
    ---------------------------------------------------------------------- */

    hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
    // Purposefully self-exclusive
    // As in, an element does not contain itself

    contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
      var adown = a.nodeType === 9 ? a.documentElement : a,
          bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    } : function (a, b) {
      if (b) {
        while (b = b.parentNode) {
          if (b === a) {
            return true;
          }
        }
      }

      return false;
    };
    /* Sorting
    ---------------------------------------------------------------------- */
    // Document order sorting

    sortOrder = hasCompare ? function (a, b) {
      // Flag for duplicate removal
      if (a === b) {
        hasDuplicate = true;
        return 0;
      } // Sort on method existence if only one input has compareDocumentPosition


      var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

      if (compare) {
        return compare;
      } // Calculate position if both inputs belong to the same document
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq


      compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
      1; // Disconnected nodes

      if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
        // Choose the first element that is related to our preferred document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
          return -1;
        } // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
          return 1;
        } // Maintain original order


        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
      }

      return compare & 4 ? -1 : 1;
    } : function (a, b) {
      // Exit early if the nodes are identical
      if (a === b) {
        hasDuplicate = true;
        return 0;
      }

      var cur,
          i = 0,
          aup = a.parentNode,
          bup = b.parentNode,
          ap = [a],
          bp = [b]; // Parentless nodes are either documents or disconnected

      if (!aup || !bup) {
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        return a == document ? -1 : b == document ? 1 :
        /* eslint-enable eqeqeq */
        aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
      } else if (aup === bup) {
        return siblingCheck(a, b);
      } // Otherwise we need full lists of their ancestors for comparison


      cur = a;

      while (cur = cur.parentNode) {
        ap.unshift(cur);
      }

      cur = b;

      while (cur = cur.parentNode) {
        bp.unshift(cur);
      } // Walk down the tree looking for a discrepancy


      while (ap[i] === bp[i]) {
        i++;
      }

      return i ? // Do a sibling check if the nodes have a common ancestor
      siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.

      /* eslint-disable eqeqeq */
      ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
      /* eslint-enable eqeqeq */
      0;
    };
    return document;
  };

  Sizzle.matches = function (expr, elements) {
    return Sizzle(expr, null, null, elements);
  };

  Sizzle.matchesSelector = function (elem, expr) {
    setDocument(elem);

    if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
      try {
        var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

        if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
        // fragment in IE 9
        elem.document && elem.document.nodeType !== 11) {
          return ret;
        }
      } catch (e) {
        nonnativeSelectorCache(expr, true);
      }
    }

    return Sizzle(expr, document, null, [elem]).length > 0;
  };

  Sizzle.contains = function (context, elem) {
    // Set document vars if needed
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if ((context.ownerDocument || context) != document) {
      setDocument(context);
    }

    return contains(context, elem);
  };

  Sizzle.attr = function (elem, name) {
    // Set document vars if needed
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if ((elem.ownerDocument || elem) != document) {
      setDocument(elem);
    }

    var fn = Expr.attrHandle[name.toLowerCase()],
        // Don't get fooled by Object.prototype properties (jQuery #13807)
    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
    return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
  };

  Sizzle.escape = function (sel) {
    return (sel + "").replace(rcssescape, fcssescape);
  };

  Sizzle.error = function (msg) {
    throw new Error("Syntax error, unrecognized expression: " + msg);
  };
  /**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */


  Sizzle.uniqueSort = function (results) {
    var elem,
        duplicates = [],
        j = 0,
        i = 0; // Unless we *know* we can detect duplicates, assume their presence

    hasDuplicate = !support.detectDuplicates;
    sortInput = !support.sortStable && results.slice(0);
    results.sort(sortOrder);

    if (hasDuplicate) {
      while (elem = results[i++]) {
        if (elem === results[i]) {
          j = duplicates.push(i);
        }
      }

      while (j--) {
        results.splice(duplicates[j], 1);
      }
    } // Clear input after sorting to release objects
    // See https://github.com/jquery/sizzle/pull/225


    sortInput = null;
    return results;
  };
  /**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */


  getText = Sizzle.getText = function (elem) {
    var node,
        ret = "",
        i = 0,
        nodeType = elem.nodeType;

    if (!nodeType) {
      // If no nodeType, this is expected to be an array
      while (node = elem[i++]) {
        // Do not traverse comment nodes
        ret += getText(node);
      }
    } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
      // Use textContent for elements
      // innerText usage removed for consistency of new lines (jQuery #11153)
      if (typeof elem.textContent === "string") {
        return elem.textContent;
      } else {
        // Traverse its children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          ret += getText(elem);
        }
      }
    } else if (nodeType === 3 || nodeType === 4) {
      return elem.nodeValue;
    } // Do not include comment or processing instruction nodes


    return ret;
  };

  Expr = Sizzle.selectors = {
    // Can be adjusted by the user
    cacheLength: 50,
    createPseudo: markFunction,
    match: matchExpr,
    attrHandle: {},
    find: {},
    relative: {
      ">": {
        dir: "parentNode",
        first: true
      },
      " ": {
        dir: "parentNode"
      },
      "+": {
        dir: "previousSibling",
        first: true
      },
      "~": {
        dir: "previousSibling"
      }
    },
    preFilter: {
      "ATTR": function ATTR(match) {
        match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

        if (match[2] === "~=") {
          match[3] = " " + match[3] + " ";
        }

        return match.slice(0, 4);
      },
      "CHILD": function CHILD(match) {
        /* matches from matchExpr["CHILD"]
        	1 type (only|nth|...)
        	2 what (child|of-type)
        	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        	4 xn-component of xn+y argument ([+-]?\d*n|)
        	5 sign of xn-component
        	6 x of xn-component
        	7 sign of y-component
        	8 y of y-component
        */
        match[1] = match[1].toLowerCase();

        if (match[1].slice(0, 3) === "nth") {
          // nth-* requires argument
          if (!match[3]) {
            Sizzle.error(match[0]);
          } // numeric x and y parameters for Expr.filter.CHILD
          // remember that false/true cast respectively to 0/1


          match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
          match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
        } else if (match[3]) {
          Sizzle.error(match[0]);
        }

        return match;
      },
      "PSEUDO": function PSEUDO(match) {
        var excess,
            unquoted = !match[6] && match[2];

        if (matchExpr["CHILD"].test(match[0])) {
          return null;
        } // Accept quoted arguments as-is


        if (match[3]) {
          match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
        } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
        excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
        excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
          // excess is a negative index
          match[0] = match[0].slice(0, excess);
          match[2] = unquoted.slice(0, excess);
        } // Return only captures needed by the pseudo filter method (type and argument)


        return match.slice(0, 3);
      }
    },
    filter: {
      "TAG": function TAG(nodeNameSelector) {
        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
        return nodeNameSelector === "*" ? function () {
          return true;
        } : function (elem) {
          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
        };
      },
      "CLASS": function CLASS(className) {
        var pattern = classCache[className + " "];
        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
          return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
        });
      },
      "ATTR": function ATTR(name, operator, check) {
        return function (elem) {
          var result = Sizzle.attr(elem, name);

          if (result == null) {
            return operator === "!=";
          }

          if (!operator) {
            return true;
          }

          result += "";
          /* eslint-disable max-len */

          return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          /* eslint-enable max-len */
        };
      },
      "CHILD": function CHILD(type, what, _argument, first, last) {
        var simple = type.slice(0, 3) !== "nth",
            forward = type.slice(-4) !== "last",
            ofType = what === "of-type";
        return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
        function (elem) {
          return !!elem.parentNode;
        } : function (elem, _context, xml) {
          var cache,
              uniqueCache,
              outerCache,
              node,
              nodeIndex,
              start,
              dir = simple !== forward ? "nextSibling" : "previousSibling",
              parent = elem.parentNode,
              name = ofType && elem.nodeName.toLowerCase(),
              useCache = !xml && !ofType,
              diff = false;

          if (parent) {
            // :(first|last|only)-(child|of-type)
            if (simple) {
              while (dir) {
                node = elem;

                while (node = node[dir]) {
                  if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                    return false;
                  }
                } // Reverse direction for :only-* (if we haven't yet done so)


                start = dir = type === "only" && !start && "nextSibling";
              }

              return true;
            }

            start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

            if (forward && useCache) {
              // Seek `elem` from a previously-cached index
              // ...in a gzip-friendly way
              node = parent;
              outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
              cache = uniqueCache[type] || [];
              nodeIndex = cache[0] === dirruns && cache[1];
              diff = nodeIndex && cache[2];
              node = nodeIndex && parent.childNodes[nodeIndex];

              while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
              diff = nodeIndex = 0) || start.pop()) {
                // When found, cache indexes on `parent` and break
                if (node.nodeType === 1 && ++diff && node === elem) {
                  uniqueCache[type] = [dirruns, nodeIndex, diff];
                  break;
                }
              }
            } else {
              // Use previously-cached element index if available
              if (useCache) {
                // ...in a gzip-friendly way
                node = elem;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex;
              } // xml :nth-child(...)
              // or :nth-last-child(...) or :nth(-last)?-of-type(...)


              if (diff === false) {
                // Use the same loop as above to seek `elem` from the start
                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                  if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                    // Cache the index of each encountered element
                    if (useCache) {
                      outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)

                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      uniqueCache[type] = [dirruns, diff];
                    }

                    if (node === elem) {
                      break;
                    }
                  }
                }
              }
            } // Incorporate the offset, then check against cycle size


            diff -= last;
            return diff === first || diff % first === 0 && diff / first >= 0;
          }
        };
      },
      "PSEUDO": function PSEUDO(pseudo, argument) {
        // pseudo-class names are case-insensitive
        // http://www.w3.org/TR/selectors/#pseudo-classes
        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
        // Remember that setFilters inherits from pseudos
        var args,
            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
        // arguments are needed to create the filter function
        // just as Sizzle does

        if (fn[expando]) {
          return fn(argument);
        } // But maintain support for old signatures


        if (fn.length > 1) {
          args = [pseudo, pseudo, "", argument];
          return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
            var idx,
                matched = fn(seed, argument),
                i = matched.length;

            while (i--) {
              idx = indexOf(seed, matched[i]);
              seed[idx] = !(matches[idx] = matched[i]);
            }
          }) : function (elem) {
            return fn(elem, 0, args);
          };
        }

        return fn;
      }
    },
    pseudos: {
      // Potentially complex pseudos
      "not": markFunction(function (selector) {
        // Trim the selector passed to compile
        // to avoid treating leading and trailing
        // spaces as combinators
        var input = [],
            results = [],
            matcher = compile(selector.replace(rtrim, "$1"));
        return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
          var elem,
              unmatched = matcher(seed, null, xml, []),
              i = seed.length; // Match elements unmatched by `matcher`

          while (i--) {
            if (elem = unmatched[i]) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) : function (elem, _context, xml) {
          input[0] = elem;
          matcher(input, null, xml, results); // Don't keep the element (issue #299)

          input[0] = null;
          return !results.pop();
        };
      }),
      "has": markFunction(function (selector) {
        return function (elem) {
          return Sizzle(selector, elem).length > 0;
        };
      }),
      "contains": markFunction(function (text) {
        text = text.replace(runescape, funescape);
        return function (elem) {
          return (elem.textContent || getText(elem)).indexOf(text) > -1;
        };
      }),
      // "Whether an element is represented by a :lang() selector
      // is based solely on the element's language value
      // being equal to the identifier C,
      // or beginning with the identifier C immediately followed by "-".
      // The matching of C against the element's language value is performed case-insensitively.
      // The identifier C does not have to be a valid language name."
      // http://www.w3.org/TR/selectors/#lang-pseudo
      "lang": markFunction(function (lang) {
        // lang value must be a valid identifier
        if (!ridentifier.test(lang || "")) {
          Sizzle.error("unsupported lang: " + lang);
        }

        lang = lang.replace(runescape, funescape).toLowerCase();
        return function (elem) {
          var elemLang;

          do {
            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
              elemLang = elemLang.toLowerCase();
              return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
            }
          } while ((elem = elem.parentNode) && elem.nodeType === 1);

          return false;
        };
      }),
      // Miscellaneous
      "target": function target(elem) {
        var hash = window.location && window.location.hash;
        return hash && hash.slice(1) === elem.id;
      },
      "root": function root(elem) {
        return elem === docElem;
      },
      "focus": function focus(elem) {
        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
      },
      // Boolean properties
      "enabled": createDisabledPseudo(false),
      "disabled": createDisabledPseudo(true),
      "checked": function checked(elem) {
        // In CSS3, :checked should return both checked and selected elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        var nodeName = elem.nodeName.toLowerCase();
        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
      },
      "selected": function selected(elem) {
        // Accessing this property makes selected-by-default
        // options in Safari work properly
        if (elem.parentNode) {
          // eslint-disable-next-line no-unused-expressions
          elem.parentNode.selectedIndex;
        }

        return elem.selected === true;
      },
      // Contents
      "empty": function empty(elem) {
        // http://www.w3.org/TR/selectors/#empty-pseudo
        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
        //   but not by others (comment: 8; processing instruction: 7; etc.)
        // nodeType < 6 works because attributes (2) do not appear as children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          if (elem.nodeType < 6) {
            return false;
          }
        }

        return true;
      },
      "parent": function parent(elem) {
        return !Expr.pseudos["empty"](elem);
      },
      // Element/input types
      "header": function header(elem) {
        return rheader.test(elem.nodeName);
      },
      "input": function input(elem) {
        return rinputs.test(elem.nodeName);
      },
      "button": function button(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === "button" || name === "button";
      },
      "text": function text(elem) {
        var attr;
        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
        // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
        (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
      },
      // Position-in-collection
      "first": createPositionalPseudo(function () {
        return [0];
      }),
      "last": createPositionalPseudo(function (_matchIndexes, length) {
        return [length - 1];
      }),
      "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
        return [argument < 0 ? argument + length : argument];
      }),
      "even": createPositionalPseudo(function (matchIndexes, length) {
        var i = 0;

        for (; i < length; i += 2) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      }),
      "odd": createPositionalPseudo(function (matchIndexes, length) {
        var i = 1;

        for (; i < length; i += 2) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      }),
      "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
        var i = argument < 0 ? argument + length : argument > length ? length : argument;

        for (; --i >= 0;) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      }),
      "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
        var i = argument < 0 ? argument + length : argument;

        for (; ++i < length;) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      })
    }
  };
  Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

  for (i in {
    radio: true,
    checkbox: true,
    file: true,
    password: true,
    image: true
  }) {
    Expr.pseudos[i] = createInputPseudo(i);
  }

  for (i in {
    submit: true,
    reset: true
  }) {
    Expr.pseudos[i] = createButtonPseudo(i);
  } // Easy API for creating new setFilters


  function setFilters() {}

  setFilters.prototype = Expr.filters = Expr.pseudos;
  Expr.setFilters = new setFilters();

  tokenize = Sizzle.tokenize = function (selector, parseOnly) {
    var matched,
        match,
        tokens,
        type,
        soFar,
        groups,
        preFilters,
        cached = tokenCache[selector + " "];

    if (cached) {
      return parseOnly ? 0 : cached.slice(0);
    }

    soFar = selector;
    groups = [];
    preFilters = Expr.preFilter;

    while (soFar) {
      // Comma and first run
      if (!matched || (match = rcomma.exec(soFar))) {
        if (match) {
          // Don't consume trailing commas as valid
          soFar = soFar.slice(match[0].length) || soFar;
        }

        groups.push(tokens = []);
      }

      matched = false; // Combinators

      if (match = rcombinators.exec(soFar)) {
        matched = match.shift();
        tokens.push({
          value: matched,
          // Cast descendant combinators to space
          type: match[0].replace(rtrim, " ")
        });
        soFar = soFar.slice(matched.length);
      } // Filters


      for (type in Expr.filter) {
        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: type,
            matches: match
          });
          soFar = soFar.slice(matched.length);
        }
      }

      if (!matched) {
        break;
      }
    } // Return the length of the invalid excess
    // if we're just parsing
    // Otherwise, throw an error or return tokens


    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
    tokenCache(selector, groups).slice(0);
  };

  function toSelector(tokens) {
    var i = 0,
        len = tokens.length,
        selector = "";

    for (; i < len; i++) {
      selector += tokens[i].value;
    }

    return selector;
  }

  function addCombinator(matcher, combinator, base) {
    var dir = combinator.dir,
        skip = combinator.next,
        key = skip || dir,
        checkNonElements = base && key === "parentNode",
        doneName = done++;
    return combinator.first ? // Check against closest ancestor/preceding element
    function (elem, context, xml) {
      while (elem = elem[dir]) {
        if (elem.nodeType === 1 || checkNonElements) {
          return matcher(elem, context, xml);
        }
      }

      return false;
    } : // Check against all ancestor/preceding elements
    function (elem, context, xml) {
      var oldCache,
          uniqueCache,
          outerCache,
          newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

      if (xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            if (matcher(elem, context, xml)) {
              return true;
            }
          }
        }
      } else {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
            // Defend against cloned attroperties (jQuery gh-1709)

            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

            if (skip && skip === elem.nodeName.toLowerCase()) {
              elem = elem[dir] || elem;
            } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
              // Assign to newCache so results back-propagate to previous elements
              return newCache[2] = oldCache[2];
            } else {
              // Reuse newcache so results back-propagate to previous elements
              uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

              if (newCache[2] = matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        }
      }

      return false;
    };
  }

  function elementMatcher(matchers) {
    return matchers.length > 1 ? function (elem, context, xml) {
      var i = matchers.length;

      while (i--) {
        if (!matchers[i](elem, context, xml)) {
          return false;
        }
      }

      return true;
    } : matchers[0];
  }

  function multipleContexts(selector, contexts, results) {
    var i = 0,
        len = contexts.length;

    for (; i < len; i++) {
      Sizzle(selector, contexts[i], results);
    }

    return results;
  }

  function condense(unmatched, map, filter, context, xml) {
    var elem,
        newUnmatched = [],
        i = 0,
        len = unmatched.length,
        mapped = map != null;

    for (; i < len; i++) {
      if (elem = unmatched[i]) {
        if (!filter || filter(elem, context, xml)) {
          newUnmatched.push(elem);

          if (mapped) {
            map.push(i);
          }
        }
      }
    }

    return newUnmatched;
  }

  function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
    if (postFilter && !postFilter[expando]) {
      postFilter = setMatcher(postFilter);
    }

    if (postFinder && !postFinder[expando]) {
      postFinder = setMatcher(postFinder, postSelector);
    }

    return markFunction(function (seed, results, context, xml) {
      var temp,
          i,
          elem,
          preMap = [],
          postMap = [],
          preexisting = results.length,
          // Get initial elements from seed or context
      elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
          // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
          matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
      postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
      [] : // ...otherwise use results directly
      results : matcherIn; // Find primary matches

      if (matcher) {
        matcher(matcherIn, matcherOut, context, xml);
      } // Apply postFilter


      if (postFilter) {
        temp = condense(matcherOut, postMap);
        postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

        i = temp.length;

        while (i--) {
          if (elem = temp[i]) {
            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
          }
        }
      }

      if (seed) {
        if (postFinder || preFilter) {
          if (postFinder) {
            // Get the final matcherOut by condensing this intermediate into postFinder contexts
            temp = [];
            i = matcherOut.length;

            while (i--) {
              if (elem = matcherOut[i]) {
                // Restore matcherIn since elem is not yet a final match
                temp.push(matcherIn[i] = elem);
              }
            }

            postFinder(null, matcherOut = [], temp, xml);
          } // Move matched elements from seed to results to keep them synchronized


          i = matcherOut.length;

          while (i--) {
            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
              seed[temp] = !(results[temp] = elem);
            }
          }
        } // Add elements to results, through postFinder if defined

      } else {
        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

        if (postFinder) {
          postFinder(null, results, matcherOut, xml);
        } else {
          push.apply(results, matcherOut);
        }
      }
    });
  }

  function matcherFromTokens(tokens) {
    var checkContext,
        matcher,
        j,
        len = tokens.length,
        leadingRelative = Expr.relative[tokens[0].type],
        implicitRelative = leadingRelative || Expr.relative[" "],
        i = leadingRelative ? 1 : 0,
        // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator(function (elem) {
      return elem === checkContext;
    }, implicitRelative, true),
        matchAnyContext = addCombinator(function (elem) {
      return indexOf(checkContext, elem) > -1;
    }, implicitRelative, true),
        matchers = [function (elem, context, xml) {
      var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

      checkContext = null;
      return ret;
    }];

    for (; i < len; i++) {
      if (matcher = Expr.relative[tokens[i].type]) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)];
      } else {
        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

        if (matcher[expando]) {
          // Find the next relative operator (if any) for proper handling
          j = ++i;

          for (; j < len; j++) {
            if (Expr.relative[tokens[j].type]) {
              break;
            }
          }

          return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
          tokens.slice(0, i - 1).concat({
            value: tokens[i - 2].type === " " ? "*" : ""
          })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
        }

        matchers.push(matcher);
      }
    }

    return elementMatcher(matchers);
  }

  function matcherFromGroupMatchers(elementMatchers, setMatchers) {
    var bySet = setMatchers.length > 0,
        byElement = elementMatchers.length > 0,
        superMatcher = function superMatcher(seed, context, xml, results, outermost) {
      var elem,
          j,
          matcher,
          matchedCount = 0,
          i = "0",
          unmatched = seed && [],
          setMatched = [],
          contextBackup = outermostContext,
          // We must always have either seed elements or outermost context
      elems = seed || byElement && Expr.find["TAG"]("*", outermost),
          // Use integer dirruns iff this is the outermost matcher
      dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
          len = elems.length;

      if (outermost) {
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        outermostContext = context == document || context || outermost;
      } // Add elements passing elementMatchers directly to results
      // Support: IE<9, Safari
      // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


      for (; i !== len && (elem = elems[i]) != null; i++) {
        if (byElement && elem) {
          j = 0; // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq

          if (!context && elem.ownerDocument != document) {
            setDocument(elem);
            xml = !documentIsHTML;
          }

          while (matcher = elementMatchers[j++]) {
            if (matcher(elem, context || document, xml)) {
              results.push(elem);
              break;
            }
          }

          if (outermost) {
            dirruns = dirrunsUnique;
          }
        } // Track unmatched elements for set filters


        if (bySet) {
          // They will have gone through all possible matchers
          if (elem = !matcher && elem) {
            matchedCount--;
          } // Lengthen the array for every element, matched or not


          if (seed) {
            unmatched.push(elem);
          }
        }
      } // `i` is now the count of elements visited above, and adding it to `matchedCount`
      // makes the latter nonnegative.


      matchedCount += i; // Apply set filters to unmatched elements
      // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
      // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
      // no element matchers and no seed.
      // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
      // case, which will result in a "00" `matchedCount` that differs from `i` but is also
      // numerically zero.

      if (bySet && i !== matchedCount) {
        j = 0;

        while (matcher = setMatchers[j++]) {
          matcher(unmatched, setMatched, context, xml);
        }

        if (seed) {
          // Reintegrate element matches to eliminate the need for sorting
          if (matchedCount > 0) {
            while (i--) {
              if (!(unmatched[i] || setMatched[i])) {
                setMatched[i] = pop.call(results);
              }
            }
          } // Discard index placeholder values to get only actual matches


          setMatched = condense(setMatched);
        } // Add matches to results


        push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

        if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
          Sizzle.uniqueSort(results);
        }
      } // Override manipulation of globals by nested matchers


      if (outermost) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }

      return unmatched;
    };

    return bySet ? markFunction(superMatcher) : superMatcher;
  }

  compile = Sizzle.compile = function (selector, match
  /* Internal Use Only */
  ) {
    var i,
        setMatchers = [],
        elementMatchers = [],
        cached = compilerCache[selector + " "];

    if (!cached) {
      // Generate a function of recursive functions that can be used to check each element
      if (!match) {
        match = tokenize(selector);
      }

      i = match.length;

      while (i--) {
        cached = matcherFromTokens(match[i]);

        if (cached[expando]) {
          setMatchers.push(cached);
        } else {
          elementMatchers.push(cached);
        }
      } // Cache the compiled function


      cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

      cached.selector = selector;
    }

    return cached;
  };
  /**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */


  select = Sizzle.select = function (selector, context, results, seed) {
    var i,
        tokens,
        token,
        type,
        find,
        compiled = typeof selector === "function" && selector,
        match = !seed && tokenize(selector = compiled.selector || selector);
    results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
    // (the latter of which guarantees us context)

    if (match.length === 1) {
      // Reduce context if the leading compound selector is an ID
      tokens = match[0] = match[0].slice(0);

      if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

        if (!context) {
          return results; // Precompiled matchers will still verify ancestry, so step up a level
        } else if (compiled) {
          context = context.parentNode;
        }

        selector = selector.slice(tokens.shift().value.length);
      } // Fetch a seed set for right-to-left matching


      i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

      while (i--) {
        token = tokens[i]; // Abort if we hit a combinator

        if (Expr.relative[type = token.type]) {
          break;
        }

        if (find = Expr.find[type]) {
          // Search, expanding context for leading sibling combinators
          if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
            // If seed is empty or no tokens remain, we can return early
            tokens.splice(i, 1);
            selector = seed.length && toSelector(tokens);

            if (!selector) {
              push.apply(results, seed);
              return results;
            }

            break;
          }
        }
      }
    } // Compile and execute a filtering function if one is not provided
    // Provide `match` to avoid retokenization if we modified the selector above


    (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
    return results;
  }; // One-time assignments
  // Sort stability


  support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
  // Always assume duplicates if they aren't passed to the comparison function

  support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

  setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
  // Detached nodes confoundingly follow *each other*

  support.sortDetached = assert(function (el) {
    // Should return 1, but returns 4 (following)
    return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
  }); // Support: IE<8
  // Prevent attribute/property "interpolation"
  // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

  if (!assert(function (el) {
    el.innerHTML = "<a href='#'></a>";
    return el.firstChild.getAttribute("href") === "#";
  })) {
    addHandle("type|href|height|width", function (elem, name, isXML) {
      if (!isXML) {
        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
      }
    });
  } // Support: IE<9
  // Use defaultValue in place of getAttribute("value")


  if (!support.attributes || !assert(function (el) {
    el.innerHTML = "<input/>";
    el.firstChild.setAttribute("value", "");
    return el.firstChild.getAttribute("value") === "";
  })) {
    addHandle("value", function (elem, _name, isXML) {
      if (!isXML && elem.nodeName.toLowerCase() === "input") {
        return elem.defaultValue;
      }
    });
  } // Support: IE<9
  // Use getAttributeNode to fetch booleans when getAttribute lies


  if (!assert(function (el) {
    return el.getAttribute("disabled") == null;
  })) {
    addHandle(booleans, function (elem, name, isXML) {
      var val;

      if (!isXML) {
        return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      }
    });
  } // EXPOSE


  var _sizzle = window.Sizzle;

  Sizzle.noConflict = function () {
    if (window.Sizzle === Sizzle) {
      window.Sizzle = _sizzle;
    }

    return Sizzle;
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Sizzle;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Sizzle requires that there be a global window in Common-JS like environments
  } else {} // EXPOSE

})(window);

/***/ }),

/***/ "./node_modules/jquery/src/ajax.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/ajax.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ./ajax/var/location */ "./node_modules/jquery/src/ajax/var/location.js"), __webpack_require__(/*! ./ajax/var/nonce */ "./node_modules/jquery/src/ajax/var/nonce.js"), __webpack_require__(/*! ./ajax/var/rquery */ "./node_modules/jquery/src/ajax/var/rquery.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./core/parseXML */ "./node_modules/jquery/src/core/parseXML.js"), __webpack_require__(/*! ./event/trigger */ "./node_modules/jquery/src/event/trigger.js"), __webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"), __webpack_require__(/*! ./serialize */ "./node_modules/jquery/src/serialize.js") // jQuery.param
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, isFunction, rnothtmlwhite, location, nonce, rquery) {
  "use strict";

  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Use a noop converter for missing script


        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
          s.converters["text script"] = function () {};
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    var i;

    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/jsonp.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/ajax/jsonp.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/nonce */ "./node_modules/jquery/src/ajax/var/nonce.js"), __webpack_require__(/*! ./var/rquery */ "./node_modules/jquery/src/ajax/var/rquery.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isFunction, nonce, rquery) {
  "use strict";

  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/load.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/ajax/load.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/stripAndCollapse */ "./node_modules/jquery/src/core/stripAndCollapse.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ../core/parseHTML */ "./node_modules/jquery/src/core/parseHTML.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js"), __webpack_require__(/*! ../traversing */ "./node_modules/jquery/src/traversing.js"), __webpack_require__(/*! ../manipulation */ "./node_modules/jquery/src/manipulation.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, stripAndCollapse, isFunction) {
  "use strict";
  /**
   * Load a url into a page
   */

  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/script.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/ajax/script.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document) {
  "use strict"; // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback = function callback(evt) {
            script.remove();
            _callback = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/var/location.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/location.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return window.location;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/var/nonce.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/nonce.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return {
    guid: Date.now()
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/var/rquery.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/rquery.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return /\?/;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/xhr.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/ajax/xhr.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, support) {
  "use strict";

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/attributes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./attributes/attr */ "./node_modules/jquery/src/attributes/attr.js"), __webpack_require__(/*! ./attributes/prop */ "./node_modules/jquery/src/attributes/prop.js"), __webpack_require__(/*! ./attributes/classes */ "./node_modules/jquery/src/attributes/classes.js"), __webpack_require__(/*! ./attributes/val */ "./node_modules/jquery/src/attributes/val.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // Return jQuery for attributes-only inclusion

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/attr.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/attributes/attr.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ../core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/attributes/support.js"), __webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, nodeName, support, rnothtmlwhite) {
  "use strict";

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/classes.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/attributes/classes.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/stripAndCollapse */ "./node_modules/jquery/src/core/stripAndCollapse.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ../core/init */ "./node_modules/jquery/src/core/init.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, stripAndCollapse, isFunction, rnothtmlwhite, dataPriv) {
  "use strict";

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/prop.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/attributes/prop.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/attributes/support.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, support) {
  "use strict";

  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/support.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/attributes/support.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document, support) {
  "use strict";

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/val.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/attributes/val.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/stripAndCollapse */ "./node_modules/jquery/src/core/stripAndCollapse.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/attributes/support.js"), __webpack_require__(/*! ../core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ../core/init */ "./node_modules/jquery/src/core/init.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, stripAndCollapse, support, nodeName, isFunction) {
  "use strict";

  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/callbacks.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/callbacks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, toType, isFunction, rnothtmlwhite) {
  "use strict"; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/core.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./var/arr */ "./node_modules/jquery/src/var/arr.js"), __webpack_require__(/*! ./var/getProto */ "./node_modules/jquery/src/var/getProto.js"), __webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"), __webpack_require__(/*! ./var/flat */ "./node_modules/jquery/src/var/flat.js"), __webpack_require__(/*! ./var/push */ "./node_modules/jquery/src/var/push.js"), __webpack_require__(/*! ./var/indexOf */ "./node_modules/jquery/src/var/indexOf.js"), __webpack_require__(/*! ./var/class2type */ "./node_modules/jquery/src/var/class2type.js"), __webpack_require__(/*! ./var/toString */ "./node_modules/jquery/src/var/toString.js"), __webpack_require__(/*! ./var/hasOwn */ "./node_modules/jquery/src/var/hasOwn.js"), __webpack_require__(/*! ./var/fnToString */ "./node_modules/jquery/src/var/fnToString.js"), __webpack_require__(/*! ./var/ObjectFunctionString */ "./node_modules/jquery/src/var/ObjectFunctionString.js"), __webpack_require__(/*! ./var/support */ "./node_modules/jquery/src/var/support.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ./core/DOMEval */ "./node_modules/jquery/src/core/DOMEval.js"), __webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr, getProto, _slice, flat, push, indexOf, class2type, toString, hasOwn, fnToString, ObjectFunctionString, support, isFunction, isWindow, DOMEval, toType) {
  "use strict";

  var version = "3.5.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery/src/jquery */ "./node_modules/jquery/src/jquery.js")))

/***/ }),

/***/ "./node_modules/jquery/src/core/DOMEval.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/core/DOMEval.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document) {
  "use strict";

  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  return DOMEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/access.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/core/access.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, toType, isFunction) {
  "use strict"; // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function

  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  };

  return access;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/camelCase.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/core/camelCase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // Matches dashed string for camelizing

  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  return camelCase;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/init.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/core/init.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rsingleTag */ "./node_modules/jquery/src/core/var/rsingleTag.js"), __webpack_require__(/*! ../traversing/findFilter */ "./node_modules/jquery/src/traversing/findFilter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, isFunction, rsingleTag) {
  "use strict"; // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  return init;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/isAttached.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/core/isAttached.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js") // jQuery.contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, documentElement) {
  "use strict";

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  return isAttached;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/nodeName.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/core/nodeName.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  return nodeName;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/parseHTML.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/core/parseHTML.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ./var/rsingleTag */ "./node_modules/jquery/src/core/var/rsingleTag.js"), __webpack_require__(/*! ../manipulation/buildFragment */ "./node_modules/jquery/src/manipulation/buildFragment.js"), // This is the only module that needs core/support
__webpack_require__(/*! ./support */ "./node_modules/jquery/src/core/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, rsingleTag, buildFragment, support) {
  "use strict"; // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string

  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };

  return jQuery.parseHTML;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/parseXML.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/core/parseXML.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  return jQuery.parseXML;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/ready.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/core/ready.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../core/readyException */ "./node_modules/jquery/src/core/readyException.js"), __webpack_require__(/*! ../deferred */ "./node_modules/jquery/src/deferred.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document) {
  "use strict"; // The deferred used on DOM ready

  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/readyException.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/core/readyException.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/stripAndCollapse.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/core/stripAndCollapse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (rnothtmlwhite) {
  "use strict"; // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  return stripAndCollapse;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/support.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/core/support.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document, support) {
  "use strict"; // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }();

  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/toType.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/core/toType.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/class2type */ "./node_modules/jquery/src/var/class2type.js"), __webpack_require__(/*! ../var/toString */ "./node_modules/jquery/src/var/toString.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (class2type, toString) {
  "use strict";

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }

  return toType;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/var/rsingleTag.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/core/var/rsingleTag.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // rsingleTag matches a string consisting of a single HTML element with no attributes
  // and captures the element's name

  return /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css.js":
/*!****************************************!*\
  !*** ./node_modules/jquery/src/css.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./var/rcssNum */ "./node_modules/jquery/src/var/rcssNum.js"), __webpack_require__(/*! ./css/var/rnumnonpx */ "./node_modules/jquery/src/css/var/rnumnonpx.js"), __webpack_require__(/*! ./css/var/cssExpand */ "./node_modules/jquery/src/css/var/cssExpand.js"), __webpack_require__(/*! ./css/var/getStyles */ "./node_modules/jquery/src/css/var/getStyles.js"), __webpack_require__(/*! ./css/var/swap */ "./node_modules/jquery/src/css/var/swap.js"), __webpack_require__(/*! ./css/curCSS */ "./node_modules/jquery/src/css/curCSS.js"), __webpack_require__(/*! ./css/adjustCSS */ "./node_modules/jquery/src/css/adjustCSS.js"), __webpack_require__(/*! ./css/addGetHookIf */ "./node_modules/jquery/src/css/addGetHookIf.js"), __webpack_require__(/*! ./css/support */ "./node_modules/jquery/src/css/support.js"), __webpack_require__(/*! ./css/finalPropName */ "./node_modules/jquery/src/css/finalPropName.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./core/ready */ "./node_modules/jquery/src/core/ready.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js") // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, camelCase, nodeName, rcssNum, rnumnonpx, cssExpand, getStyles, swap, curCSS, adjustCSS, addGetHookIf, support, finalPropName) {
  "use strict";

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/addGetHookIf.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery/src/css/addGetHookIf.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  return addGetHookIf;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/adjustCSS.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/css/adjustCSS.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/rcssNum */ "./node_modules/jquery/src/var/rcssNum.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, rcssNum) {
  "use strict";

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  return adjustCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/curCSS.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/css/curCSS.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/isAttached */ "./node_modules/jquery/src/core/isAttached.js"), __webpack_require__(/*! ./var/rboxStyle */ "./node_modules/jquery/src/css/var/rboxStyle.js"), __webpack_require__(/*! ./var/rnumnonpx */ "./node_modules/jquery/src/css/var/rnumnonpx.js"), __webpack_require__(/*! ./var/getStyles */ "./node_modules/jquery/src/css/var/getStyles.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/css/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isAttached, rboxStyle, rnumnonpx, getStyles, support) {
  "use strict";

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  return curCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/finalPropName.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/finalPropName.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document, jQuery) {
  "use strict";

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  return finalPropName;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/hiddenVisibleSelectors.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/css/hiddenVisibleSelectors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/showHide.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/css/showHide.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ../css/var/isHiddenWithinTree */ "./node_modules/jquery/src/css/var/isHiddenWithinTree.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, dataPriv, isHiddenWithinTree) {
  "use strict";

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  return showHide;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/support.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/css/support.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, documentElement, support) {
  "use strict";

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px";
          tr.style.height = "1px";
          trChild.style.height = "9px";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/cssExpand.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/cssExpand.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return ["Top", "Right", "Bottom", "Left"];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/getStyles.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/getStyles.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return function (elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/isHiddenWithinTree.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/css/var/isHiddenWithinTree.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../../core/isAttached */ "./node_modules/jquery/src/core/isAttached.js") // css is assumed
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isAttached) {
  "use strict"; // isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
  // through the CSS cascade), which is useful in deciding whether or not to make it visible.
  // It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
  // * A hidden ancestor does not force an element to be classified as hidden.
  // * Being disconnected from the document does not force an element to be classified as hidden.
  // These differences improve the behavior of .toggle() et al. when applied to elements that are
  // detached or contained within hidden ancestors (gh-2404, gh-2863).

  return function (elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/rboxStyle.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/rboxStyle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./cssExpand */ "./node_modules/jquery/src/css/var/cssExpand.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (cssExpand) {
  "use strict";

  return new RegExp(cssExpand.join("|"), "i");
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/rnumnonpx.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/rnumnonpx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../var/pnum */ "./node_modules/jquery/src/var/pnum.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (pnum) {
  "use strict";

  return new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/swap.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/css/var/swap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // A method for quickly swapping in/out CSS properties to get correct calculations.

  return function (elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/data.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./data/var/dataUser */ "./node_modules/jquery/src/data/var/dataUser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, camelCase, dataPriv, dataUser) {
  "use strict"; //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data/Data.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/data/Data.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ./var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, camelCase, rnothtmlwhite, acceptData) {
  "use strict";

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  return Data;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data/var/acceptData.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/data/var/acceptData.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";
  /**
   * Determines whether an object can have data
   */

  return function (owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data/var/dataPriv.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/data/var/dataPriv.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../Data */ "./node_modules/jquery/src/data/Data.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Data) {
  "use strict";

  return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data/var/dataUser.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/data/var/dataUser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../Data */ "./node_modules/jquery/src/data/Data.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Data) {
  "use strict";

  return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deferred.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/deferred.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"), __webpack_require__(/*! ./callbacks */ "./node_modules/jquery/src/callbacks.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isFunction, slice) {
  "use strict";

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deferred/exceptionHook.js":
/*!***********************************************************!*\
  !*** ./node_modules/jquery/src/deferred/exceptionHook.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../deferred */ "./node_modules/jquery/src/deferred.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deprecated.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/deprecated.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"), __webpack_require__(/*! ./deprecated/ajax-event-alias */ "./node_modules/jquery/src/deprecated/ajax-event-alias.js"), __webpack_require__(/*! ./deprecated/event */ "./node_modules/jquery/src/deprecated/event.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, nodeName, camelCase, toType, isFunction, isWindow, slice) {
  "use strict"; // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP

  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };

  jQuery.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "");
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deprecated/ajax-event-alias.js":
/*!****************************************************************!*\
  !*** ./node_modules/jquery/src/deprecated/ajax-event-alias.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js"), __webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deprecated/event.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery/src/deprecated/event.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js"), __webpack_require__(/*! ../event/trigger */ "./node_modules/jquery/src/event/trigger.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/dimensions.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/dimensions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, isWindow) {
  "use strict"; // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/effects.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/src/effects.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ./var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rcssNum */ "./node_modules/jquery/src/var/rcssNum.js"), __webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ./css/var/cssExpand */ "./node_modules/jquery/src/css/var/cssExpand.js"), __webpack_require__(/*! ./css/var/isHiddenWithinTree */ "./node_modules/jquery/src/css/var/isHiddenWithinTree.js"), __webpack_require__(/*! ./css/adjustCSS */ "./node_modules/jquery/src/css/adjustCSS.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./css/showHide */ "./node_modules/jquery/src/css/showHide.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./queue */ "./node_modules/jquery/src/queue.js"), __webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"), __webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"), __webpack_require__(/*! ./manipulation */ "./node_modules/jquery/src/manipulation.js"), __webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js"), __webpack_require__(/*! ./effects/Tween */ "./node_modules/jquery/src/effects/Tween.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, camelCase, document, isFunction, rcssNum, rnothtmlwhite, cssExpand, isHiddenWithinTree, adjustCSS, dataPriv, showHide) {
  "use strict";

  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  };
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/effects/Tween.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/effects/Tween.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../css/finalPropName */ "./node_modules/jquery/src/css/finalPropName.js"), __webpack_require__(/*! ../css */ "./node_modules/jquery/src/css.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, finalPropName) {
  "use strict";

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/effects/animatedSelector.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery/src/effects/animatedSelector.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js"), __webpack_require__(/*! ../effects */ "./node_modules/jquery/src/effects.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/event.js":
/*!******************************************!*\
  !*** ./node_modules/jquery/src/event.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ./var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ./var/rcheckableType */ "./node_modules/jquery/src/var/rcheckableType.js"), __webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"), __webpack_require__(/*! ./data/var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, documentElement, isFunction, rnothtmlwhite, rcheckableType, slice, acceptData, dataPriv, nodeName) {
  "use strict";

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/event/focusin.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/focusin.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/event/support.js"), __webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js"), __webpack_require__(/*! ./trigger */ "./node_modules/jquery/src/event/trigger.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, dataPriv, support) {
  "use strict"; // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          // Handle: regular nodes (via `this.ownerDocument`), window
          // (via `this.document`) & document (via `this`).
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/event/support.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/support.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (support) {
  "use strict";

  support.focusin = "onfocusin" in window;
  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/event/trigger.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/trigger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ../data/var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js"), __webpack_require__(/*! ../var/hasOwn */ "./node_modules/jquery/src/var/hasOwn.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ../var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, dataPriv, acceptData, hasOwn, isFunction, isWindow) {
  "use strict";

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/exports/amd.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/exports/amd.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/exports/global.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/exports/global.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/jquery.js":
/*!*******************************************!*\
  !*** ./node_modules/jquery/src/jquery.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js"), __webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"), __webpack_require__(/*! ./callbacks */ "./node_modules/jquery/src/callbacks.js"), __webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"), __webpack_require__(/*! ./deferred/exceptionHook */ "./node_modules/jquery/src/deferred/exceptionHook.js"), __webpack_require__(/*! ./core/ready */ "./node_modules/jquery/src/core/ready.js"), __webpack_require__(/*! ./data */ "./node_modules/jquery/src/data.js"), __webpack_require__(/*! ./queue */ "./node_modules/jquery/src/queue.js"), __webpack_require__(/*! ./queue/delay */ "./node_modules/jquery/src/queue/delay.js"), __webpack_require__(/*! ./attributes */ "./node_modules/jquery/src/attributes.js"), __webpack_require__(/*! ./event */ "./node_modules/jquery/src/event.js"), __webpack_require__(/*! ./event/focusin */ "./node_modules/jquery/src/event/focusin.js"), __webpack_require__(/*! ./manipulation */ "./node_modules/jquery/src/manipulation.js"), __webpack_require__(/*! ./manipulation/_evalUrl */ "./node_modules/jquery/src/manipulation/_evalUrl.js"), __webpack_require__(/*! ./wrap */ "./node_modules/jquery/src/wrap.js"), __webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js"), __webpack_require__(/*! ./css/hiddenVisibleSelectors */ "./node_modules/jquery/src/css/hiddenVisibleSelectors.js"), __webpack_require__(/*! ./serialize */ "./node_modules/jquery/src/serialize.js"), __webpack_require__(/*! ./ajax */ "./node_modules/jquery/src/ajax.js"), __webpack_require__(/*! ./ajax/xhr */ "./node_modules/jquery/src/ajax/xhr.js"), __webpack_require__(/*! ./ajax/script */ "./node_modules/jquery/src/ajax/script.js"), __webpack_require__(/*! ./ajax/jsonp */ "./node_modules/jquery/src/ajax/jsonp.js"), __webpack_require__(/*! ./ajax/load */ "./node_modules/jquery/src/ajax/load.js"), __webpack_require__(/*! ./core/parseXML */ "./node_modules/jquery/src/core/parseXML.js"), __webpack_require__(/*! ./core/parseHTML */ "./node_modules/jquery/src/core/parseHTML.js"), __webpack_require__(/*! ./effects */ "./node_modules/jquery/src/effects.js"), __webpack_require__(/*! ./effects/animatedSelector */ "./node_modules/jquery/src/effects/animatedSelector.js"), __webpack_require__(/*! ./offset */ "./node_modules/jquery/src/offset.js"), __webpack_require__(/*! ./dimensions */ "./node_modules/jquery/src/dimensions.js"), __webpack_require__(/*! ./deprecated */ "./node_modules/jquery/src/deprecated.js"), __webpack_require__(/*! ./exports/amd */ "./node_modules/jquery/src/exports/amd.js"), __webpack_require__(/*! ./exports/global */ "./node_modules/jquery/src/exports/global.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/manipulation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/isAttached */ "./node_modules/jquery/src/core/isAttached.js"), __webpack_require__(/*! ./var/flat */ "./node_modules/jquery/src/var/flat.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/push */ "./node_modules/jquery/src/var/push.js"), __webpack_require__(/*! ./var/rcheckableType */ "./node_modules/jquery/src/var/rcheckableType.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./manipulation/var/rtagName */ "./node_modules/jquery/src/manipulation/var/rtagName.js"), __webpack_require__(/*! ./manipulation/var/rscriptType */ "./node_modules/jquery/src/manipulation/var/rscriptType.js"), __webpack_require__(/*! ./manipulation/wrapMap */ "./node_modules/jquery/src/manipulation/wrapMap.js"), __webpack_require__(/*! ./manipulation/getAll */ "./node_modules/jquery/src/manipulation/getAll.js"), __webpack_require__(/*! ./manipulation/setGlobalEval */ "./node_modules/jquery/src/manipulation/setGlobalEval.js"), __webpack_require__(/*! ./manipulation/buildFragment */ "./node_modules/jquery/src/manipulation/buildFragment.js"), __webpack_require__(/*! ./manipulation/support */ "./node_modules/jquery/src/manipulation/support.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./data/var/dataUser */ "./node_modules/jquery/src/data/var/dataUser.js"), __webpack_require__(/*! ./data/var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js"), __webpack_require__(/*! ./core/DOMEval */ "./node_modules/jquery/src/core/DOMEval.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js"), __webpack_require__(/*! ./event */ "./node_modules/jquery/src/event.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isAttached, flat, isFunction, push, rcheckableType, access, rtagName, rscriptType, wrapMap, getAll, setGlobalEval, buildFragment, support, dataPriv, dataUser, acceptData, DOMEval, nodeName) {
  "use strict";

  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/_evalUrl.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/_evalUrl.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };

  return jQuery._evalUrl;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/buildFragment.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/buildFragment.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ../core/isAttached */ "./node_modules/jquery/src/core/isAttached.js"), __webpack_require__(/*! ./var/rtagName */ "./node_modules/jquery/src/manipulation/var/rtagName.js"), __webpack_require__(/*! ./var/rscriptType */ "./node_modules/jquery/src/manipulation/var/rscriptType.js"), __webpack_require__(/*! ./wrapMap */ "./node_modules/jquery/src/manipulation/wrapMap.js"), __webpack_require__(/*! ./getAll */ "./node_modules/jquery/src/manipulation/getAll.js"), __webpack_require__(/*! ./setGlobalEval */ "./node_modules/jquery/src/manipulation/setGlobalEval.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, toType, isAttached, rtagName, rscriptType, wrapMap, getAll, setGlobalEval) {
  "use strict";

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  return buildFragment;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/getAll.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/getAll.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/nodeName */ "./node_modules/jquery/src/core/nodeName.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, nodeName) {
  "use strict";

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  }

  return getAll;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/setGlobalEval.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/setGlobalEval.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (dataPriv) {
  "use strict"; // Mark scripts as having already been evaluated

  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  return setGlobalEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/support.js":
/*!*********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/support.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document, support) {
  "use strict";

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })();

  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/var/rscriptType.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/var/rscriptType.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return /^$|^module$|\/(?:java|ecma)script/i;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/var/rtagName.js":
/*!**************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/var/rtagName.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // rtagName captures the name from the first start tag in a string of HTML
  // https://html.spec.whatwg.org/multipage/syntax.html#tag-open-state
  // https://html.spec.whatwg.org/multipage/syntax.html#tag-name-state

  return /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/wrapMap.js":
/*!*********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/wrapMap.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./support */ "./node_modules/jquery/src/manipulation/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (support) {
  "use strict"; // We have to close these tags to support XHTML (#13200)

  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  return wrapMap;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/offset.js":
/*!*******************************************!*\
  !*** ./node_modules/jquery/src/offset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./css/var/rnumnonpx */ "./node_modules/jquery/src/css/var/rnumnonpx.js"), __webpack_require__(/*! ./css/curCSS */ "./node_modules/jquery/src/css/curCSS.js"), __webpack_require__(/*! ./css/addGetHookIf */ "./node_modules/jquery/src/css/addGetHookIf.js"), __webpack_require__(/*! ./css/support */ "./node_modules/jquery/src/css/support.js"), __webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js") // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, documentElement, isFunction, rnumnonpx, curCSS, addGetHookIf, support, isWindow) {
  "use strict";

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        if (typeof props.top === "number") {
          props.top += "px";
        }

        if (typeof props.left === "number") {
          props.left += "px";
        }

        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/queue.js":
/*!******************************************!*\
  !*** ./node_modules/jquery/src/queue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"), __webpack_require__(/*! ./callbacks */ "./node_modules/jquery/src/callbacks.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, dataPriv) {
  "use strict";

  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/queue/delay.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/queue/delay.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../queue */ "./node_modules/jquery/src/queue.js"), __webpack_require__(/*! ../effects */ "./node_modules/jquery/src/effects.js") // Delay is optional because of this dependency
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  return jQuery.fn.delay;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/selector-sizzle.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/selector-sizzle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../external/sizzle/dist/sizzle */ "./node_modules/jquery/external/sizzle/dist/sizzle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, Sizzle) {
  "use strict";

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/selector.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/selector.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./selector-sizzle */ "./node_modules/jquery/src/selector-sizzle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/serialize.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/serialize.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ./var/rcheckableType */ "./node_modules/jquery/src/var/rcheckableType.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"), // filter
__webpack_require__(/*! ./attributes/prop */ "./node_modules/jquery/src/attributes/prop.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, toType, rcheckableType, isFunction) {
  "use strict";

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/traversing.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/getProto */ "./node_modules/jquery/src/var/getProto.js"), __webpack_require__(/*! ./var/indexOf */ "./node_modules/jquery/src/var/indexOf.js"), __webpack_require__(/*! ./traversing/var/dir */ "./node_modules/jquery/src/traversing/var/dir.js"), __webpack_require__(/*! ./traversing/var/siblings */ "./node_modules/jquery/src/traversing/var/siblings.js"), __webpack_require__(/*! ./traversing/var/rneedsContext */ "./node_modules/jquery/src/traversing/var/rneedsContext.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./traversing/findFilter */ "./node_modules/jquery/src/traversing/findFilter.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, getProto, indexOf, dir, _siblings, rneedsContext, nodeName) {
  "use strict";

  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing/findFilter.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/traversing/findFilter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/indexOf */ "./node_modules/jquery/src/var/indexOf.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rneedsContext */ "./node_modules/jquery/src/traversing/var/rneedsContext.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, indexOf, isFunction, rneedsContext) {
  "use strict"; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing/var/dir.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/dir.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  return function (elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing/var/rneedsContext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/rneedsContext.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  return jQuery.expr.match.needsContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing/var/siblings.js":
/*!************************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/siblings.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return function (n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/ObjectFunctionString.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery/src/var/ObjectFunctionString.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./fnToString */ "./node_modules/jquery/src/var/fnToString.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (fnToString) {
  "use strict";

  return fnToString.call(Object);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/arr.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/src/var/arr.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return [];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/class2type.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/class2type.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // [[Class]] -> type pairs

  return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/document.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/document.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return window.document;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/documentElement.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/var/documentElement.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./document */ "./node_modules/jquery/src/var/document.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document) {
  "use strict";

  return document.documentElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/flat.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/flat.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr) {
  "use strict"; // Support: IE 9 - 11+, Edge 18+, Android Browser 4.0 - 4.3 only, iOS 7 - 11 only, Safari 11 only,
  // Firefox <= 61 only
  // Provide fallback for browsers without Array#flat.

  return arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/fnToString.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/fnToString.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./hasOwn */ "./node_modules/jquery/src/var/hasOwn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (hasOwn) {
  "use strict";

  return hasOwn.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/getProto.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/getProto.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return Object.getPrototypeOf;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/hasOwn.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/var/hasOwn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./class2type */ "./node_modules/jquery/src/var/class2type.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (class2type) {
  "use strict";

  return class2type.hasOwnProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/indexOf.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/indexOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr) {
  "use strict";

  return arr.indexOf;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/isFunction.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/isFunction.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/isWindow.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/isWindow.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return function isWindow(obj) {
    return obj != null && obj === obj.window;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/pnum.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/pnum.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/push.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/push.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr) {
  "use strict";

  return arr.push;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/rcheckableType.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/var/rcheckableType.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return /^(?:checkbox|radio)$/i;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/rcssNum.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/rcssNum.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/pnum */ "./node_modules/jquery/src/var/pnum.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (pnum) {
  "use strict";

  return new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/rnothtmlwhite.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/var/rnothtmlwhite.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // Only count HTML whitespace
  // Other whitespace should count in values
  // https://infra.spec.whatwg.org/#ascii-whitespace

  return /[^\x20\t\r\n\f]+/g;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/slice.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/var/slice.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr) {
  "use strict";

  return arr.slice;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/support.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/support.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // All support tests are defined in their respective modules.

  return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/toString.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/toString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./class2type */ "./node_modules/jquery/src/var/class2type.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (class2type) {
  "use strict";

  return class2type.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/wrap.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/wrap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./manipulation */ "./node_modules/jquery/src/manipulation.js"), // clone
__webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js") // parent, contents
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isFunction) {
  "use strict";

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-58c30370eb94ed66c4d6.js.map