!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=45)}({45:function(e,t,r){"use strict";r.r(t);var n,o=!0,a=function(){var e=window,t=e.moatTimerId,r=e.moatQueue,n=e.moatPrebidApi,a=void 0===n?{}:n,c=e.adslots,i=void 0===c?{}:c,s=a.setMoatTargetingForSlot;window.moatReady=!0,clearTimeout(t),r&&r.length&&r.forEach((function(e){var t=e.moatEnabled,r=e.adId,n=e.slot,a=e.requestAd,c=i[r]&&i[r].slot||n;if(o&&(performance.mark("moat-ace-firstAdItem"),o=!1),t&&"function"==typeof s&&s(c),!c)throw new ReferenceError("slot ".concat(r," is not defined"));a(c,e)})),window.moatQueue=null},c=function(e){var t=e.rel,r=e.href,n=e.as,o=e.crossorigin,a=document.createElement("link"),c=document.querySelector("head");t&&(a.rel=t),r&&(a.href=r),n&&(a.as=n),o&&a.setAttribute("crossorigin",""),c&&c.appendChild(a)},i=function(e){var t=e.id,r=e.baseUrl,n=e.fileName,o=e.loadingType,a=e.callback,c=e.element,i=e.params,s=document.createElement("script");s.src=r&&r.indexOf("_default.min.js")>-1?r:"".concat(r,"/").concat(n),s.type="text/javascript","async"===o&&(s.async=!0),"defer"===o&&(s.defer=!0),"function"==typeof a&&(s.onload=a),t&&(s.id=t),i&&s.setAttribute("data-params",JSON.stringify(i));var p=document.querySelector(c||"head");p&&p.appendChild(s)},s=function(){var e=(n||(n=document.querySelector("#ace-manifest")),n||{}),t=e.getAttribute("data-ace-uac-url"),r=e.getAttribute("data-product"),o=e.getAttribute("data-app"),a=e.getAttribute("data-config");return{baseUrl:t,product:r||o||"wsj",config:a&&decodeURIComponent(a)}};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={baseUrl:"https://z.moatads.com/dowjonesheader64568365681",fileName:"moatheader.js",loadingType:"async",element:"head",links:[{rel:"preload",href:"https://z.moatads.com/dowjonesheader64568365681/moatheader.js",as:"script"},{rel:"preconnect",href:"https://mb.moatads.com"}]},f={id:"apstag",baseUrl:"//c.amazon-adsystem.com/aax2",fileName:"apstag.js",element:"head",loadingType:"async",links:[{rel:"preload",href:"//c.amazon-adsystem.com/aax2/apstag.js",as:"script"}]},b={id:"prebid",baseUrl:"//us.tags.newscgp.com/prod/prebid",element:"head",loadingType:"async",fileName:"pb.js"};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},d,{callback:function(){performance.mark("moat-loaded")}})};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){var t=s().baseUrl,r=e.fileName;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{links:[{rel:"preload",href:"".concat(t,"/").concat(r),as:"script"}],baseUrl:t,loadingType:"async",element:"head",id:"djcmp"})};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(){var e=window,t=e.uacQueue,r=e.__buildAd;t&&t.length&&"function"==typeof r&&t.forEach((function(e){return r(e)}))},D=function(e){var t=s().baseUrl,r=e.fileName;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{links:[{rel:"preload",href:"".concat(t,"/").concat(r),as:"script"}],baseUrl:t,loadingType:"async",callback:P,element:"head"})};function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(){window.performance.mark("apstag-loaded"),window.apstag.init({pubID:"3482",adServer:"googletag",bidTimeout:1e3})},x=function(e){if(window.apstag)return{};var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},f,{callback:k});function r(e,t){window.apstag._Q.push([e,t])}return e.enabled&&(window.apstag={init:function(){r("i",arguments)},fetchBids:function(){r("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]}),t};function C(e){this.search=e}C.prototype.get=function(e){var t=new RegExp("".concat(e,"=(.+)&?")),r=this.search.match(t);return r&&r[1]};var N=function(e){var t="",r=window.URLSearchParams||C;window.location.search&&(t=new r(window.location.search).get(e)||"");return decodeURIComponent(t)};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=function(){window.performance.mark("prebid-loaded")},U=function(e){if(document.querySelector('[src*="pb.js"]')||document.querySelector('[href*="pb.js"]')||!e.enabled)return e;var t=s().product,r="";"fnews"===t&&(t="fnlondon"),function(e){var t;return!("1"!==N("prebid_stage")&&!(null===(t=e.params)||void 0===t?void 0:t.isStage))}(e)&&(r="/stage");var n="".concat(b.baseUrl,"/").concat(t).concat(r),o=b.fileName,a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){B(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},b,{baseUrl:n,callback:I,links:[{rel:"preload",href:"".concat(n,"/").concat(o),as:"script"}]});return window.pbjs={que:[]},a},M=function(e){try{return JSON.parse(e)}catch(e){return console.error("While trying to parse a json cookie, an error occurred:",e),{}}};function T(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e,t){t&&Object.keys(t).forEach((function(r){e[r]||(e[r]={params:{}}),e[r].params=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e[r].params,{},t[r])}))}var R=function(e,t){var r=function(e){var t={};return Object.keys(e).forEach((function(r){"boolean"==typeof e[r]&&("enableMoat"===r&&(t.moat={enabled:e[r]}),"enableDjcmp"===r&&(t.djcmp={enabled:e[r]}),"enableAps"===r&&(t.apstag={enabled:e[r]}),"enableUac"===r&&(t.uac={enabled:e[r]}),"enablePrebid"===r&&(t.prebid={enabled:e[r]}))})),t}(t),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach((function(r){var n=e[r],o=(n.fileName,T(n,["fileName"]));Object.keys(o).length&&(t[r]=o)})),t}(t[e]);return function(e,t){var r=t.enableSourcepoint,n=t.enableDjcmp;"boolean"==typeof r&&(e.djcmp||(e.djcmp={}),e.djcmp.params={enableSourcepoint:r}),"boolean"==typeof n&&(e.uac||(e.uac={}),e.uac.params={enableDjcmp:n})}(r,t),F(r,n),function(e,t){t&&Object.keys(t).forEach((function(r){var n=t[r].fileName;n&&"string"==typeof n&&(e[r]||(e[r]={}),e[r].fileName=n)}))}(r,t[e]),r},W=function(){var e,t,r=(e="ace_config",(t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)"))?t[2]:null);return r?M(r):{}};function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e,t){e.scripts.forEach((function(e){var r=t[e.id];if(r){var n=r.enabled,o=r.fileName,a=r.params;"boolean"==typeof n&&(e.enabled=n),o&&"string"==typeof o&&(e.fileName=o),a&&(e.params||(e.params={}),e.params=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.params,{},a))}}))}var L,J=function(){var e=s().config;return e?M(e):{}},Y={addScripts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scripts,r=void 0===t?[]:t;r.forEach((function(e){if(e.enabled){var t=e.links,r=e.baseUrl;t&&t.length&&t.forEach((function(e){return c(e)})),r&&i(e)}}))},setDataAttr:function(e){var t=e.scripts,r=s(),n={baseUrl:r.baseUrl,product:r.product},o=t.map((function(e){var t=e.id,r=e.params,o=l({},e),a={djcmp:n};return a[t]&&(o.params=l({},r,{},a[t])),o}));e.scripts=o},overloadScripts:function(e){var t={uac:D,moat:j,djcmp:w,apstag:x,prebid:U},r=e.scripts.map((function(e){var r=e.id;return t[r]?t[r](e):e}));e.scripts=r},extendConfigByAceCookie:function(e){var t,r;z(e,(t=e.id,r=W(),R(t,r)))},extendConfigByAceAttr:function(e){var t,r;z(e,(t=e.id,r=J(),R(t,r)))},extendConfigByAceQuery:function(e){var t,r,n;z(e,(t=e.id,r=N("ace_config"),n=r?M(r):{},R(t,n)))}},K={id:"wsj",scripts:[{id:"prebid",enabled:!1},{id:"moat",enabled:!0},{id:"uac",fileName:"uac.min.1.0.15.js",enabled:!0,params:{enableDjcmp:!0,enablePublisherProvidedId:!0}},{id:"djcmp",fileName:"djcmp.min.1.0.10.js",params:{enableSourcepoint:!0,sourcepointFileName:"wrapperMessagingWithoutDetection.1.0.5.js",modalId:143662,propertyHref:"https://www.wsj.com"},enabled:!0},{id:"apstag",enabled:!0}],preprocessor:["extendConfigByAceAttr","extendConfigByAceCookie","extendConfigByAceQuery","overloadScripts","setDataAttr","addScripts"],postprocessor:[]},$={id:"fnews",scripts:[{id:"moat",enabled:!0},{id:"uac",fileName:"uac.min.1.0.15.js",enabled:!0,params:{enableDjcmp:!0,enablePublisherProvidedId:!0}},{id:"djcmp",fileName:"djcmp.min.1.0.10.js",params:{enableSourcepoint:!0,sourcepointFileName:"wrapperMessagingWithoutDetection.1.0.5.js",modalId:413061,propertyHref:"https://www.fnlondon.com"},enabled:!0},{id:"apstag",enabled:!1}],preprocessor:["extendConfigByAceAttr","extendConfigByAceCookie","extendConfigByAceQuery","overloadScripts","setDataAttr","addScripts"],postprocessor:[]},G={id:"penews",scripts:[{id:"moat",enabled:!0},{id:"uac",fileName:"uac.min.1.0.15.js",enabled:!0,params:{enableDjcmp:!0,enablePublisherProvidedId:!0}},{id:"djcmp",fileName:"djcmp.min.1.0.10.js",params:{enableSourcepoint:!0,sourcepointFileName:"wrapperMessagingWithoutDetection.1.0.5.js",modalId:413077,propertyHref:"https://www.penews.com"},enabled:!0},{id:"apstag",enabled:!1}],preprocessor:["extendConfigByAceAttr","extendConfigByAceCookie","extendConfigByAceQuery","overloadScripts","setDataAttr","addScripts"],postprocessor:[]},V={id:"barrons",scripts:[{id:"moat",enabled:!0},{id:"uac",fileName:"uac.min.1.0.15.js",enabled:!0,params:{enableDjcmp:!0,enablePublisherProvidedId:!0}},{id:"djcmp",fileName:"djcmp.min.1.0.10.js",params:{enableSourcepoint:!0,sourcepointFileName:"wrapperMessagingWithoutDetection.1.0.5.js",modalId:410892,propertyHref:"https://www.barrons.com"},enabled:!0},{id:"apstag",enabled:!0}],preprocessor:["extendConfigByAceAttr","extendConfigByAceCookie","extendConfigByAceQuery","overloadScripts","setDataAttr","addScripts"],postprocessor:[]},X={id:"mansionglobal",scripts:[{id:"moat",enabled:!0},{id:"uac",fileName:"uac.min.1.0.15.js",enabled:!0,params:{enableDjcmp:!0,enablePublisherProvidedId:!0}},{id:"djcmp",fileName:"djcmp.min.1.0.10.js",params:{enableSourcepoint:!0,sourcepointFileName:"wrapperMessagingWithoutDetection.1.0.5.js",modalId:486483,propertyHref:"https://www.mansionglobal.com"},enabled:!0},{id:"apstag",enabled:!1}],preprocessor:["extendConfigByAceAttr","extendConfigByAceCookie","extendConfigByAceQuery","overloadScripts","setDataAttr","addScripts"],postprocessor:[]},Z={id:"marketwatch",scripts:[{id:"moat",enabled:!0},{id:"uac",fileName:"uac.min.1.0.15.js",enabled:!0,params:{enableDjcmp:!0,enablePublisherProvidedId:!0}},{id:"djcmp",fileName:"djcmp.min.1.0.10.js",params:{enableSourcepoint:!0,sourcepointFileName:"wrapperMessagingWithoutDetection.1.0.5.js",modalId:413042,propertyHref:"https://www.marketwatch.com"},enabled:!0}],preprocessor:["extendConfigByAceAttr","extendConfigByAceCookie","extendConfigByAceQuery","overloadScripts","setDataAttr","addScripts"],postprocessor:[]},ee={id:"custom-content",scripts:[{id:"djcmp",fileName:"djcmp.min.1.0.10.js",params:{enableSourcepoint:!0,sourcepointFileName:"wrapperMessagingWithoutDetection.1.0.5.js",modalId:143662,propertyHref:"https://www.wsjcs-dev.com"},enabled:!1}],preprocessor:["extendConfigByAceAttr","extendConfigByAceCookie","extendConfigByAceQuery","overloadScripts","setDataAttr","addScripts"],postprocessor:[]};function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var re=(te(L={},K.id,K),te(L,V.id,V),te(L,$.id,$),te(L,X.id,X),te(L,G.id,G),te(L,Z.id,Z),te(L,ee.id,ee),L);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ae,ce,ie,se,pe=function(e){if(J().enableLog){window.ace||(window.ace={messages:[]});var t=window.ace.messages,r=void 0===t?[]:t,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{date:(new Date).getTime()});r.push(n)}},le=function(e){window.ace||(window.ace={});var t=window.ace.messages,r=void 0===t?[]:t;return e?r.filter(e):r},ue=function(e){window.ace={messages:[],log:pe,getLog:le},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if("function"!=typeof e)throw new TypeError("moatYieldReady must be a function");window.moatYieldReady=e}(),window.aceManifest=re,function(e){var t=e.preprocessor;(void 0===t?[]:t).forEach((function(t){"function"==typeof Y[t]&&Y[t](e)}))}(e)};ae=s(),ce=ae.product,ie=ae.baseUrl,se=re[ce],function(e,t){"Promise"in window&&"find"in Array.prototype?t():i({fileName:"polyfill.min.js",baseUrl:e,callback:t})}(ie,(function(){ue(se)}))}});