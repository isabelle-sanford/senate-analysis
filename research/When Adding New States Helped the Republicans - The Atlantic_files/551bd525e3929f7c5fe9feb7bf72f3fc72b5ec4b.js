(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Bbg":function(e,t,r){e.exports=r("B5Ud")},"8Kt/":function(e,t,r){"use strict";r("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),s=r("FYa8"),u=r("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=l.length;u<c;u++){var f=l[u];if(o.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?a=!1:r.add(f);else{var p=o.props[f],d=n[f]||new Set;"name"===f&&i||!d.has(p)?(d.add(p),n[f]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}h.rewind=function(){};var v=h;t.default=v},B5Ud:function(e,t,r){"use strict";var n=r("vJKn"),o=r("/GRZ"),a=r("i2R6"),i=r("48fX"),s=r("tCBg"),u=r("T0f4"),c=r("qVT1");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}var p=r("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=g,t.default=void 0;var l=p(r("q1tI")),d=r("g/15");function h(e){return v.apply(this,arguments)}function v(){return(v=c(n.mark((function e(t){var r,o,a;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(r,o);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var y=function(e){i(r,e);var t=f(r);function r(){return o(this,r),t.apply(this,arguments)}return a(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return l.default.createElement(r,Object.assign({},n,o||a?{}:{url:g(t)}))}}]),r}(l.default.Component);function g(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",o=r||t;return e.push(n,o)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",o=r||t;return e.replace(n,o)}}}t.default=y,y.origGetInitialProps=h,y.getInitialProps=h},BOF4:function(e,t,r){"use strict";var n=r("evrj");function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidTokenError",e.exports=function(e,t){if("string"!==typeof e)throw new o("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(n(e.split(".")[r]))}catch(a){throw new o("Invalid token specified: "+a.message)}},e.exports.InvalidTokenError=o},FpJU:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return k}));var n=r("vJKn"),o=r.n(n),a=r("cpVT"),i=r("rg98"),s=r("dhJC"),u=r("q1tI"),c=r.n(u),f=r("8Bbg"),p=r.n(f),l=r("NyWP"),d=r("BOF4"),h=r.n(d),v=c.a.createElement;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=Object(u.createContext)({}),w=function(e){var t=e.isLoggedIn,r=e.hasPaywallAccess,n=e.children;return v(m.Provider,{value:{isLoggedIn:t,hasPaywallAccess:r}},n)},b=function(){var e=Object(u.useContext)(m);if(void 0===e)throw new Error("useContext must be used within a Provider");return e},k=function(e){var t=function(t){var r=t.isLoggedIn,n=t.hasPaywallAccess,o=Object(s.a)(t,["isLoggedIn","hasPaywallAccess"]);return v(w,{isLoggedIn:r,hasPaywallAccess:n},v(e,o))};return t.getInitialProps=function(){var e=Object(i.a)(o.a.mark((function e(t){var r,n,a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(r=t.ctx.res)||void 0===r||r.setHeader("Vary","X-JWT-State, X-JWT-PaymeterAccess"),e.next=3,p.a.getInitialProps(t);case 3:if(n=e.sent,a=Object(l.parseCookies)(t.ctx),i=a.atljwt){e.next=7;break}return e.abrupt("return",g({isLoggedIn:!1,hasPaywallAccess:!1},n));case 7:return s=h()(i),e.abrupt("return",g({isLoggedIn:!0,hasPaywallAccess:s.paymeter_access},n));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}},NyWP:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var o=r("ahXa"),a=r("U0US"),i=r("YAAg");function s(e,t){var r,n;return(null===(n=null===(r=null===e||void 0===e?void 0:e.req)||void 0===r?void 0:r.headers)||void 0===n?void 0:n.cookie)?o.parse(e.req.headers.cookie,t):i.isBrowser()?o.parse(document.cookie,t):{}}function u(e,t,r,s){var u,c;if(void 0===s&&(s={}),(null===(u=null===e||void 0===e?void 0:e.res)||void 0===u?void 0:u.getHeader)&&e.res.setHeader){if(null===(c=null===e||void 0===e?void 0:e.res)||void 0===c?void 0:c.finished)return console.warn('Not setting "'+t+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var f=e.res.getHeader("Set-Cookie")||[];"string"===typeof f&&(f=[f]),"number"===typeof f&&(f=[]);var p=a.parse(f,{decodeValues:!1}),l=i.createCookie(t,r,s),d=[];p.forEach((function(e){if(!i.areCookiesEqual(e,l)){var t=o.serialize(e.name,e.value,n({encode:function(e){return e}},e));d.push(t)}})),d.push(o.serialize(t,r,s)),e.res.setHeader("Set-Cookie",d)}if(i.isBrowser()){if(s&&s.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=o.serialize(t,r,s)}return{}}function c(e,t,r){return u(e,t,"",n(n({},r||{}),{maxAge:-1}))}t.parseCookies=s,t.setCookie=u,t.destroyCookie=c,t.default={set:u,get:s,destroy:c}},U0US:function(e,t,r){"use strict";var n={decodeValues:!0,map:!1,silent:!1};function o(e){return"string"===typeof e&&!!e.trim()}function a(e,t){var r=e.split(";").filter(o),a=r.shift().split("="),i=a.shift(),s=a.join("=");t=t?Object.assign({},n,t):n;try{s=t.decodeValues?decodeURIComponent(s):s}catch(c){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+s+"'. Set options.decodeValues to false to disable this feature.",c)}var u={name:i,value:s};return r.forEach((function(e){var t=e.split("="),r=t.shift().trimLeft().toLowerCase(),n=t.join("=");"expires"===r?u.expires=new Date(n):"max-age"===r?u.maxAge=parseInt(n,10):"secure"===r?u.secure=!0:"httponly"===r?u.httpOnly=!0:"samesite"===r?u.sameSite=n:u[r]=n})),u}function i(e,t){if(t=t?Object.assign({},n,t):n,!e)return t.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var r=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];r||!e.headers.cookie||t.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),(t=t?Object.assign({},n,t):n).map){return e.filter(o).reduce((function(e,r){var n=a(r,t);return e[n.name]=n,e}),{})}return e.filter(o).map((function(e){return a(e,t)}))}e.exports=i,e.exports.parse=i,e.exports.parseString=a,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var t,r,n,o,a,i=[],s=0;function u(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,a=!1;u();)if(","===(r=e.charAt(s))){for(n=s,s+=1,u(),o=s;s<e.length&&"="!==(r=e.charAt(s))&&";"!==r&&","!==r;)s+=1;s<e.length&&"="===e.charAt(s)?(a=!0,s=o,i.push(e.substring(t,n)),t=s):s=n+1}else s+=1;(!a||s>=e.length)&&i.push(e.substring(t,e.length))}return i}},Xuae:function(e,t,r){"use strict";var n=r("mPvQ"),o=r("/GRZ"),a=r("i2R6"),i=(r("qXWd"),r("48fX")),s=r("tCBg"),u=r("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var f=r("q1tI"),p=function(e){i(r,e);var t=c(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=p},YAAg:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++){var a=r[o];if(e[a]!==t[a])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.areCookiesEqual=t.hasSameProperties=t.createCookie=t.isBrowser=void 0,t.isBrowser=function(){return"undefined"!==typeof window},t.createCookie=function(e,t,r){var o=r.sameSite;!0===o&&(o="strict"),void 0!==o&&!1!==o||(o="lax");var a=n(n({},r),{sameSite:o});return delete a.encode,n({name:e,value:t},a)},t.hasSameProperties=o,t.areCookiesEqual=function(e,t){var r=e.sameSite===t.sameSite;return"string"===typeof e.sameSite&&"string"===typeof t.sameSite&&(r=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),o(n(n({},e),{sameSite:void 0}),n(n({},t),{sameSite:void 0}))&&r}},ahXa:function(e,t,r){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},o=t||{},i=e.split(a),u=o.decode||n,c=0;c<i.length;c++){var f=i[c],p=f.indexOf("=");if(!(p<0)){var l=f.substr(0,p).trim(),d=f.substr(++p,f.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==r[l]&&(r[l]=s(d,u))}}return r},t.serialize=function(e,t,r){var n=r||{},a=n.encode||o;if("function"!==typeof a)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!i.test(s))throw new TypeError("argument val is invalid");var u=e+"="+s;if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(c)}if(n.domain){if(!i.test(n.domain))throw new TypeError("option domain is invalid");u+="; Domain="+n.domain}if(n.path){if(!i.test(n.path))throw new TypeError("option path is invalid");u+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(u+="; HttpOnly");n.secure&&(u+="; Secure");if(n.sameSite){switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u};var n=decodeURIComponent,o=encodeURIComponent,a=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(r){return e}}},cpVT:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},dhJC:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},evrj:function(e,t,r){var n=r("m4GZ");e.exports=function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(n(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(r){return n(t)}}},g4pe:function(e,t,r){e.exports=r("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},m4GZ:function(e,t){function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidCharacterError",e.exports="undefined"!==typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,s="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?s+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return s}},mPvQ:function(e,t,r){var n=r("5fIB"),o=r("rlHP"),a=r("KckH"),i=r("kG2m");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},rg98:function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,u,"next",e)}function u(e){n(i,o,a,s,u,"throw",e)}s(void 0)}))}}r.d(t,"a",(function(){return o}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}}]);
//# sourceMappingURL=551bd525e3929f7c5fe9feb7bf72f3fc72b5ec4b.88c2481ca07eaebadfd4.js.map