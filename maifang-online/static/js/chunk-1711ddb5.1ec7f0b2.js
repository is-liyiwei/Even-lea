(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1711ddb5","chunk-2d22d5e7"],{b2a6:function(t,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return f}));var e=n("f6cd"),o=/^(?:[0-9]{9}X|[0-9]{10})$/,c=/^(?:[0-9]{13})$/,u=[1,3];function f(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(Object(e["default"])(t),r=String(r),!r)return f(t,10)||f(t,13);var n,i=t.replace(/[\s-]+/g,""),a=0;if("10"===r){if(!o.test(i))return!1;for(n=0;n<9;n++)a+=(n+1)*i.charAt(n);if("X"===i.charAt(9)?a+=100:a+=10*i.charAt(9),a%11===0)return!!i}else if("13"===r){if(!c.test(i))return!1;for(n=0;n<12;n++)a+=u[n%2]*i.charAt(n);if(i.charAt(12)-(10-a%10)%10===0)return!!i}return!1}},f6cd:function(t,r,n){"use strict";function e(t){return e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t){var r="string"===typeof t||t instanceof String;if(!r){var n=e(t);throw null===t?n="null":"object"===n&&(n=t.constructor.name),new TypeError("Expected a string but received a ".concat(n))}}n.r(r),n.d(r,"default",(function(){return o}))}}]);