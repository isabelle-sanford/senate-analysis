/**
 * JS Tag v3.4.7 (Tue Mar 30 12:04:47 UTC 2021)
 * RevJet
 * https://www.revjet.com/
 */
(function(){var h;function aa(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var ba="function"==typeof Object.create?Object.create:function(a){function c(){}c.prototype=a;return new c},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var ca={ea:!0},m={};try{m.__proto__=ca;l=m.ea;break a}catch(a){}l=!1}k=l?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var p=k;function da(a){var c;return function(){var b=this,d=arguments;clearTimeout(c);c=setTimeout(function(){c=null;a.apply(b,d)},200)}}function ea(a,c){var b=document.createElement("STYLE");b.type="text/css";(c||document.getElementsByTagName("HEAD")[0]).appendChild(b);b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a))}var fa=function(a){var c=!1,b;return function(){c||(b=a(),c=!0);return b}}(function(){return!!("srcdoc"in document.createElement("iframe"))});var ha="undefined"!==typeof window.postMessage,ia="undefined"!==typeof window.JSON&&"function"===typeof window.JSON.parse,ja="undefined"!==typeof window?window:{};function q(a){a=a.split(".");for(var c=ja,b;b=a.shift();)if(null!=c[b])c=c[b];else return null;return c};var ka=Array.prototype.forEach?function(a,c){Array.prototype.forEach.call(a,c,void 0)}:function(a,c){for(var b=a.length,d="string"==typeof a?a.split(""):a,e=0;e<b;e++)e in d&&c.call(void 0,d[e],e,a)},la=Array.prototype.reduce?function(a,c,b){return Array.prototype.reduce.call(a,c,b)}:function(a,c,b){var d=b;ka(a,function(b,f){d=c.call(void 0,d,b,f,a)});return d},ma=Array.prototype.some?function(a,c){return Array.prototype.some.call(a,c,void 0)}:function(a,c){for(var b=a.length,d="string"==typeof a?
a.split(""):a,e=0;e<b;e++)if(e in d&&c.call(void 0,d[e],e,a))return!0;return!1};function na(a,c){a:{var b=a.length;for(var d="string"==typeof a?a.split(""):a,e=0;e<b;e++)if(e in d&&c.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"==typeof a?a.charAt(b):a[b]};function r(a,c,b){if("string"==typeof c)a.style[c]=b;else for(var d in c)a.style[d]=c[d]};function t(a){try{window.document.write(a)}catch(c){}}function u(a,c,b){b=void 0===b?window.document:b;a=b.createElement(a);for(var d in c.s)c.s.hasOwnProperty(d)&&a.setAttribute(d,c.s[d]);for(var e in c.style)c.style.hasOwnProperty(e)&&(a.style[e]=c.style[e]);return a}function v(a){var c={margin:0,padding:0,position:"relative",left:0,top:0,opacity:1,visibility:"visible",overflow:"hidden",border:"none",cssFloat:"none"};if(a)for(var b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);return c}
function w(a){var c={allowtransparency:"false",frameborder:"0",hspace:"0",marginwidth:"0",marginheight:"0",scrolling:"no",vspace:"0"};if(a)for(var b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);return c};function x(a,c,b){"undefined"!==typeof window.addEventListener?a.addEventListener(c,b,!1):a.attachEvent("on"+c,b)}function y(a,c,b){"undefined"!==typeof window.removeEventListener?a.removeEventListener(c,b,!1):a.detachEvent("on"+c,b)};function oa(a){var c="addEventListener close expand getExpandProperties getPlacementType getState getVersion isViewable open removeEventListener setExpandProperties useCustomClose".split(" ");return c.every&&c.every(function(b){b=a.mraid[b];return"function"===typeof b&&"undefined"!==typeof b.call||b&&("[object Function]"===Object.prototype.toString.call(b)||"undefined"!==typeof b.call&&"undefined"!==typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))?!0:!1})}
function z(){for(var a=window;a;){try{if(a.mraid&&oa(a))return a}catch(c){}a=a===a.parent?null:a.parent}return null}function pa(){var a=z();a&&a.mraid.useCustomClose(!0)};function qa(a){return a.replace(/<script[^>]*/ig,function(a){return a.replace(/(\s+)(type)(\s*=\s*)/ig,"$1data-revjet-script-type$3").replace(/(\s+)(language)(\s*=\s*)/ig,"$1data-revjet-script-language$3").replace(/(\s+)(src)(\s*=\s*)/ig,"$1data-revjet-script-src$3")+' type="text/revjet"'})}function ra(a,c){var b=c.bind(this);a.addEventListener?a.addEventListener("load",b,!1):a.onreadystatechange=function(){if("loaded"===a.readyState||"complete"===a.readyState)a.onreadystatechange=null,b()}}
function A(a,c,b,d){return function(){if(0===c.length)d&&d();else{var e=c.shift(),f=A(a,c,b,d);if("SCRIPT"===e.nodeName&&"text/revjet"===e.type){var g=b.createElement("script");g.async=!1;var n=e.getAttribute("data-revjet-script-type");n&&(g.type=n);g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";(n=e.getAttribute("data-revjet-script-language"))&&g.setAttribute("language",n);e.charset&&(g.charset=e.charset);if(e=e.getAttribute("data-revjet-script-src"))g.src=e;g.src&&ra(g,f);a.insertBefore(g,
null);g.src||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(g=[];e.firstChild;)g.push(e.removeChild(e.firstChild));a.insertBefore(e,null);A(e,g,b,f)()}else a.insertBefore(e,null),f()}}}function sa(a,c,b){if(c){var d=b.createElement("div");d.innerHTML="L<div>"+qa(c)+"</div>";c=[];for(d=d.lastChild;d.firstChild;)c.push(d.removeChild(d.firstChild));d=c}else d=[];A(a,d,b)()};var B=null;function ta(){this.c=q("extern")||q("$sf.ext");this.a=!1;this.f=[]}function ua(a,c,b){if(a.c&&!a.a)try{$sf.ext.register(c,b,function(b,c){for(var d=a.f,e=0;e<d.length;e++)d[e](b,c)}),a.a=!0}catch(d){}};function C(a,c){this.j=a;this.a={};this.c=this.f=null;this.i=[];this.m=[];this.g=[];if(c&&c.c&&!this.f){var b=this.j.document.getElementById("REVJET_Tag-MESSAGING_FRAME");b?this.f=b:(this.f=u("iframe",{s:w({id:"REVJET_Tag-MESSAGING_FRAME"}),style:v({display:"none"})}),this.j.document.body.appendChild(this.f))}}function va(a,c){return ma(a.i,function(a){return a.Y===c})}function D(a,c,b){var d=na(a.i,function(a){return a.Y===c});d?b(d.oa):a.g=a.g.concat({ha:c,code:b})}
C.prototype.o=function(a,c,b){if(a.initialized){for(c=this.m.length-1;0<=c;c--){var d=this.m[c];d.target===b&&(d.target.postMessage(JSON.stringify(d.message),"*"),this.m.splice(c,1))}if(!va(this,b))for(this.i=this.i.concat({Y:b,oa:a}),c=this.g.length-1;0<=c;c--)d=this.g[c],d.ha===b&&d.code(a)}};
function wa(a,c){a.c||(a.c=function(b){if(b&&"data"in b){var d=null;try{d=JSON.parse(b.data)}catch(f){}if(d&&"module"in d&&d.method&&"REVJET_Tag.Ad"===d.module){var e=c[d.method];e&&e.call(a,d.properties,d.messageId,b.source)}}},x(a.f?a.f.contentWindow:a.j,"message",a.c))}function E(a){a.c&&(y(a.j,"message",a.c),a.c=null)};var F=0;
function G(a,c,b){b=void 0===b?!1:b;var d=a.getSlotResponseObject();this.ca=!!window.inDapIF;this.c=a;var e=window.parent;if(this.ca&&window!==e){var f=this.c.getSlotObjectName();e[f]?F=++e[f].instanceNumber:(e[f]={},e[f].instanceNumber=++F)}else F++;this.$=c;this.Z=d.content||"";this.U=d.failover_query_string;this.V=d.failover_url;this.i=a.getAdWidth();this.j=a.getAdHeight();this.da=this.i;this.H=this.j;this.g=0;this.u=window;B||(B=new ta);this.O=B;ua(this.O,this.i,this.j);if(this.f=b?null:new C(this.u,
this.O))this.f.a.close=this.ia.bind(this),this.f.a.collapse=this.ja.bind(this),this.f.a.expand=this.ka.bind(this),this.f.a.relayAction=this.ma.bind(this),this.f.a.reload=this.na.bind(this),this.f.a.refresh=this.la.bind(this)}h=G.prototype;h.ia=function(a,c,b){this.K(b)&&this.c.destroy()};h.ka=function(){};h.ja=function(){};h.ma=function(){};h.na=function(a,c,b){this.K(b)&&this.c.reload()};h.la=function(a,c,b){this.K(b)&&this.c.refresh()};h.K=function(){return!1};h.ga=function(){return this.$};
function H(a){var c=a.U;if(a.V||c){c=a.V;var b=a.U;if(c){b=a.c;var d=b.getAdapter();c="https://"+b.getAdsDomainName()+(d?"/"+d:"")+c}else c=b?(-1!==b.toString().indexOf("msgCode=1005")?I(a,"/~cdn/Ads/ad_shared/static/406.html"):I(a,"/~cdn/Ads/ad_shared/static/failover.html"))+"?"+b:null;if(c)return'<!DOCTYPE html>\n<html>\n<head>\n<style type="text/css">* {padding:0;margin:0;}</style>\n</head>\n<body style="background-color: #fff;">\n<iframe '+['src="'+c+'"','allowtransparency="false" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"',
'width="'+a.i+'"','height="'+a.j+'"','style="border:0;vertical-align:bottom;width:'+a.i+"px;height:"+a.j+'px;"'].join(" ")+"></iframe>\n</body>\n</html>"}return a.Z}h.L=function(){var a=this.g;if((0===a||2===a)&&this.f){var c=this.f;ha&&ia&&(c.a.setElementsInitialized=c.o.bind(c),wa(c,c.a))}0===a&&window.context&&window.context.reportRenderedEntityIdentifier&&window.context.reportRenderedEntityIdentifier(xa(this))};h.J=function(){1===this.g&&this.f&&E(this.f)};
h.I=function(){if(3!==this.g){if(this.f){var a=this.f;E(a);a.m=[];a.g=[];a.i=[]}this.O.f=[]}};h.P=function(){return[]};h.fa=function(){return 3===this.g};h.getWidth=function(){return this.da};h.getHeight=function(){return this.H};function I(a,c){var b=a.c,d=b.getAdapter();return"https://"+b.getCdnDomainName()+(d?"/"+d:"")+c}function xa(a){if(a=H(a)){var c=/<title>([0-9]+)\/[0-9]+<\/title>/gi.exec(a);return c&&0<c.length?"revjet-"+c[1]:"revjet-S"+a.length}return"revjet-S0"}
function J(a){a=a.c;return(a.getOptions?a.getOptions():{}).content?!1:fa()}function K(a){a=a.c;var c=a.getOptions?a.getOptions():{};a={};for(var b in c)c.hasOwnProperty(b)&&"content"!==b&&"b64"!==b&&(a[b]=c[b]);b="{}";try{b=JSON.stringify(a)}catch(d){}return b}G.prototype.getHeight=G.prototype.getHeight;G.prototype.getWidth=G.prototype.getWidth;G.prototype.adDestroyed=G.prototype.fa;G.prototype.getFrames=G.prototype.P;G.prototype.destroyAd=G.prototype.I;G.prototype.hideAd=G.prototype.J;
G.prototype.showAd=G.prototype.L;G.prototype.getAdType=G.prototype.ga;var ya=/<\/body>\s*<\/html>/i;function L(a,c,b){G.call(this,a,c,b);a=a.getSlotResponseObject();this.T=a.embd_tag_id;this.S=a.embd_element;this.ba=a.disable_iframe;this.aa=a.deliveryWrapper;this.M=!!a.autoscale;this.A=!!a.autohide;this.X=!!a.fixed_width;this.W=!!a.fixed_height;this.N=this.X?"fixed":a.responsive_width||"fit";this.B=this.W?"fixed":a.responsive_height||"fit";this.G=this.o=this.m=this.a=null;this.R=!!a.close_button;this.F=this.C=this.D=this.v=null}L.prototype=ba(G.prototype);
L.prototype.constructor=L;if(p)p(L,G);else for(var M in G)if("prototype"!=M)if(Object.defineProperties){var N=Object.getOwnPropertyDescriptor(G,M);N&&Object.defineProperty(L,M,N)}else L[M]=G[M];L.a=G.prototype;function O(a,c){try{var b=a.contentDocument||a.contentWindow.document;b.open();b.write(c);b.close()}catch(d){}}function P(a,c){var b=a.i;b=0>=c?1:c/b;return{scale:b.toFixed(4),height:Math.round(a.j*b)}}
function Q(a,c){if(c){var b=a.m;if(b)return b.getBoundingClientRect().width}else{var d=R(a);if(d)return b=a.u.document.createElement("div"),b.style.cssText="position:relative;left:0;top:0;right:auto;bottom:auto;width:100%;border:none;padding:0;margin:0;visibility:hidden;",d.appendChild(b),d=b.getBoundingClientRect().width,b.parentNode.removeChild(b),d}return 0}
function za(a){function c(){var b=Q(a,!0);b=P(a,b);var c=a.m;c&&(a.H=b.height,r(c,"height",b.height+"px"));if(c=a.o)a.H=b.height,r(c,"height",b.height+"px");if(c=a.a)b="scale("+b.scale+")",c.style.webkitTransform=b,c.style.transform=b;a.c.onAdEvent("resize")}var b=a.u;b.requestAnimationFrame?b.requestAnimationFrame(function(){return c()}):b.setTimeout(function(){return c()},16)}
function S(a){a=w({width:a.i,height:a.j,name:"revjet-single-iframe","data-revjet-options":K(a)});return u("iframe",{s:a,style:v()})}function Aa(a){var c=w({name:"revjet-single-iframe","data-revjet-options":K(a)}),b={display:"block",border:"0",padding:"0",margin:"0",top:"0",bottom:"0",left:"0"},d=a.B,e=a.N;b.position="dynamic"===d||"dynamic"===e?"relative":"absolute";b.width="fixed"===e?a.i+"px":"100%";b.height="fixed"===d?a.j+"px":"dynamic"===d?"auto":"100%";return u("iframe",{s:c,style:b})}
function Ba(a){if(!/loaded|complete/.test(window.document.readyState)){var c=a.c,b=H(a);a.ba||!ya.test(b)?t(b):(t('<ins id="'+c.getHolderId()+'"></ins>'),a.u.setTimeout(function(){var d=a.u.document.getElementById(c.getHolderId());a.o=d;var e=v({width:a.i+"px",height:a.j+"px"});r(d,e);a.A&&(T(d,{width:e.width,height:e.height,position:e.position,visibility:e.visibility}),r(d,{width:"1px",height:"1px",position:"absolute",visibility:"hidden"}));e=S(a);a.a=e;var f=J(a);f&&e.setAttribute("srcdoc",b);d.appendChild(e);
f||O(e,b);f=a.f;a.A&&f&&D(f,e.contentWindow,function(a){a&&a.isEmptyPersonalization||U(d)})},0))}}function Ca(a){var c=a.B,b="fixed"===a.N?a.i+"px":"100%";a="fixed"===c?a.j+"px":"dynamic"===c?"auto":"100%";return"html, body { width: "+b+"; height: "+a+"; } "+("#revjet_container { width: "+b+" !important; height: "+a+" !important; } ")+("#revjet_container > div { width: "+b+" !important; height: "+a+" !important; } ")}
function Da(a,c){a.A&&r(c,{width:"1px",height:"1px",visibility:"hidden"});var b=Aa(a);a.a=b;var d=H(a),e=J(a);e&&b.setAttribute("srcdoc",d);c.appendChild(b);e||O(b,d);d=a.f;var f=b.contentWindow;d&&D(d,f,function(b){var d=Ca(a);if(d){var e=f.document;ea(d,e.getElementsByTagName("HEAD")[0]||e.body)}a.A&&(b&&b.isEmptyPersonalization||r(c,{width:a.X?a.i+"px":"100%",height:a.W?a.j+"px":"100%",visibility:"inherit"}));if("dynamic"===a.B){var g=f.document.body,Y=da(function(){return V(a,f)});Y();window.ResizeObserver&&
(new window.ResizeObserver(function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:aa(a)};for(b=a.next();!b.done;b=a.next())b.value.target===g&&Y()})).observe(g)}});X(a)}function V(a,c){var b=(b=c.document.body)?Math.floor(b.getBoundingClientRect().height):0;0<b&&a.a&&(a.a.style.height=b+"px",a.H=b,a.c.onAdEvent("resize"))}
function X(a){a.R&&a.v&&(pa(),a.D=Ea(a),x(a.v,"click",a.D));a.M&&(a.C=function(){return za(a)},x(a.u,"resize",a.C));"dynamic"===a.B&&(a.F=function(){"dynamic"===a.B&&V(a,a.a.contentWindow)},x(a.a,"load",a.F))}function Z(a){a.M&&a.C&&(y(a.u,"resize",a.C),a.C=null);a.D&&a.v&&(y(a.v,"click",a.D),a.D=null);a.F&&a.a&&(y(a.a,"load",a.F),a.F=null)}h=L.prototype;h.K=function(a){var c=this.a;return!(!c||c.contentWindow!==a)};
h.L=function(){var a=this;G.prototype.L.call(this);if(2===this.g){var c=this.m,b=R(this);this.c.isResponsive()&&r(b,"display","block");c&&r(c,"display","inline-block");X(this);this.g=1}else if(0===this.g){c=this.c;var d=this.u.document;if(c.getIsSyncLoading())Ba(this),this.g=1;else{b=this.T;var e=this.S;if(this.c.isResponsive()&&(b||e)){var f=b?document.getElementById(b):e;if(f){var g={display:"block",padding:"0",margin:"0",overflow:"hidden"},n=this.B,W=this.N;g.position="dynamic"===n||"dynamic"===
W?"relative":"absolute";g.width="fixed"===W?this.i+"px":"100%";g.height="fixed"===n?this.j+"px":"dynamic"===n?"auto":"100%";b&&0===b.indexOf("revjet-tag")||e?r(f,g):this.G||(this.G=u("div",{s:{},style:g}),f.appendChild(this.G))}}if(b=R(this)){if(this.c.isResponsive())Da(this,b);else if("div"===this.aa)c=H(this).replace(/<body id="ad_body">/ig,'<div id="ad_body" style="display:block;">').replace(/<\/body>/ig,"</div>"),sa(b,c,d);else{g={display:"inline-block",width:this.i+"px",height:this.j+"px"};e=
1;if(d=this.M)e=Q(this,!1),f=P(this,e),e=f.scale,g={display:"block",width:"100%",height:f.height+"px"};f=v(g);this.m=u("ins",{s:{id:c.getWrapperId()},style:f});g=v(g);g.display="block";this.o=u("ins",{s:{id:c.getHolderId()},style:g});this.A&&(T(this.m,{width:f.width,height:f.height,position:f.position,visibility:f.visibility}),r(this.m,{width:"1px",height:"1px",position:"absolute",visibility:"hidden"}),T(this.o,{width:g.width,height:g.height,position:g.position,visibility:g.visibility}),r(this.o,
{width:"1px",height:"1px",position:"absolute",visibility:"hidden"}));this.a=S(this);J(this)&&this.a.setAttribute("srcdoc",H(this));d&&(c="scale("+e+")",this.a.style.webkitTransformOrigin="0 0",this.a.style.transformOrigin="0 0",this.a.style.webkitTransform=c,this.a.style.transform=c,this.a.style.backfaceVisibility="hidden");this.o.appendChild(this.a);this.R&&!this.v&&(this.v=c=Fa(this),this.o.appendChild(c));for(this.m.appendChild(this.o);b.firstChild;)b.removeChild(b.firstChild);b.appendChild(this.m);
J(this)||O(this.a,H(this));c=this.f;this.A&&c&&D(c,this.a.contentWindow,function(b){b&&b.isEmptyPersonalization||(U(a.m),U(a.o))});X(this)}this.g=1}}}};
function Fa(a){var c=I(a,"/~cdn/JS/03/3.4.7/x-button.28x28.png");var b=void 0===b?window.document:b;c=u("img",{s:{src:c},style:{margin:0,padding:0,position:"absolute",left:"auto",bottom:"auto",right:0,top:0,border:0,zIndex:999999,width:"18px",height:"18px",cursor:"pointer",overflow:"hidden",cssFloat:"none",webkitAppearance:"none"}},b);r(c,{zIndex:989999,left:a.i-18+"px",right:"auto",pointerEvents:"auto"});return c}function Ea(a){return function(){a.c.hide();var c=z();c&&c.mraid.close()}}
function R(a){var c=a.c,b=a.u.document;c=a.T||c.getContainerId();return a.G||a.S||b.getElementById(c)}h.J=function(){G.prototype.J.call(this);if(1===this.g){Z(this);if(this.c.isResponsive()){var a=R(this);r(a,"display","none")}else this.m&&r(this.m,"display","none");this.g=2}};
h.I=function(){G.prototype.I.call(this);if(3!==this.g){Z(this);if(this.c.isResponsive()){var a=R(this);a&&a&&a.parentNode&&a.parentNode.removeChild(a)}else this.a&&(a=this.a)&&a.parentNode&&a.parentNode.removeChild(a);this.v=this.m=this.o=this.a=null;this.g=3}};h.P=function(){return this.a?[this.a]:[]};function T(a,c){for(var b in c)c.hasOwnProperty(b)&&a.setAttribute("data-revjet-"+b,c[b])}
function U(a){r(a,la(["width","height","position","visibility"],function(c,b){var d=a.getAttribute("data-revjet-"+b);null!=d&&(c[b]=d);return c},{}))}L.prototype.getFrames=L.prototype.P;L.prototype.destroyAd=L.prototype.I;L.prototype.hideAd=L.prototype.J;L.prototype.showAd=L.prototype.L;REVJET_Tag.ModuleManager.getInstance().setLoaded("banner",L);})();
