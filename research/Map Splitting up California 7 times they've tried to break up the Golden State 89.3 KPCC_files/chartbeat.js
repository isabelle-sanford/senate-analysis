(function(){var g=void 0,h=true,j=null,m=false,n,o=this;
function aa(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function ba(a,b){function c(){}c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ca(){}
function da(a,b,c){switch(typeof b){case "string":ea(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==j){c.push("null");break}if(aa(b)=="array"){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),da(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],typeof f!="function"&&(c.push(d),ea(e,c),c.push(":"),da(a,f,c),d=","));
c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var fa={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},ga=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function ea(a,b){b.push('"',a.replace(ga,function(a){if(a in fa)return fa[a];var b=a.charCodeAt(0),e="\\u";b<16?e+="000":b<256?e+="00":b<4096&&(e+="0");return fa[a]=e+b.toString(16)}),'"')};var ha={scroll:5E3,keydown:5E3,mousemove:5E3,resize:5E3,mousedown:5E3,focus:5E3,pageload:5E3};function ia(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function p(a,b){var c="",d=ja(encodeURIComponent(a));d.splice(b||5,d.length);q(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function ja(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,f=271733878,i=3285377520,k=[],l,t,w,D,F,T=Math.ceil((a.length/4+2)/16),P=[T],y=0,v;y<T;y++){P[y]=[];for(l=0;l<16;l++)P[y][l]=a.charCodeAt(y*64+l*4)<<24|a.charCodeAt(y*64+l*4+1)<<16|a.charCodeAt(y*64+l*4+2)<<8|a.charCodeAt(y*64+l*4+3)}y=(a.length-1)*8;a=T-1;P[a][14]=Math.floor(y/Math.pow(2,32));P[a][15]=y&4294967295;for(y=0;y<T;y++){for(v=0;v<16;v++)k[v]=P[y][v];
for(v=16;v<80;v++)k[v]=(k[v-3]^k[v-8]^k[v-14]^k[v-16])<<1|(k[v-3]^k[v-8]^k[v-14]^k[v-16])>>>31;a=c;l=d;t=e;w=f;D=i;for(v=0;v<80;v++)F=Math.floor(v/20),F=(a<<5|a>>>27)+(F==0?l&t^~l&w:F==1?l^t^w:F==2?l&t^l&w^t&w:l^t^w)+D+b[F]+k[v]&4294967295,D=w,w=t,t=l<<30|l>>>2,l=a,a=F;c=c+a&4294967295;d=d+l&4294967295;e=e+t&4294967295;f=f+w&4294967295;i=i+D&4294967295}return[c,d,e,f,i]}
function ka(a){var b=o.navigator,c=o.window.screen,d=[b.userAgent,b.platform,(new Date).getTimezoneOffset(),c.width+c.height+c.colorDepth];q(b.plugins,function(a){d.push(a.name+a.description+a.filename+a[0].type)});b=o.performance;d=d.concat([b&&b.now?b.now():"",document.title,o.location.href,r(),ia()]);return d.concat(a||[]).join()}function s(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}
function u(a){return typeof a!=="undefined"}function x(a){return a&&a.replace(/^www\./,"")}var la=/^((https?\:)?(\/\/))/i;function ma(a){return a&&a.replace(la,"")}var na=/^((https?\:)?(\/\/))?[^\/]*/;function oa(a){return a.replace(na,"")}var pa=/\#.*/;function qa(a){return a.replace(pa,"")}var ra=/\?[^\#]*/;function sa(a){return a.toLowerCase()}var ta=/\/+((\?|\#).*)?$/;function ua(a){return a.replace(ta,"$1")}function va(a){return a&&a.replace(ra,"")}
function wa(a){var b=a.match(/\?(.*)$/ig)?a.match(/\?(.*)$/ig)[0].slice(1).replace(/#(.*)?/ig,"").split("&"):[],c=a.match(/#(.*)$/ig)?a.match(/#(.*)$/ig)[0]:"",a=a.match(/[#|\?](.*)?/ig)?a.slice(0,a.search(/[#|\?](.*)?/ig)):a,b=xa(b,function(a){return a.search("utm")!==0});b.length>0&&(a+="?"+b.join("&"));return a+c}function ya(a,b){if(a===b)return 0;var c=j;q([sa,ua,ma,oa,qa,va],function(d,e){a=d(a);b=d(b);if(a===b)return c=e+1,m});return c}
function z(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}function za(a,b){var c=o;c.removeEventListener?c.removeEventListener(a,b,m):c.detachEvent&&c.detachEvent("on"+a,b)}function Aa(a){return typeof a==="number"}function A(a){return typeof a==="string"}function Ba(a){return Object.prototype.toString.call(a)==="[object Array]"}function Ca(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}
function r(){return(new Date).getTime()}function Da(){return o.location.protocol==="http:"?"http:":"https:"}function Ea(a){return!!a&&a.constructor===Object}function q(a,b){if(Ea(a)===h)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===m)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===m)break}}function Fa(a,b){for(var c=0,d=a.length;c<d;c++)if(b(a[c]))return c;return-1}function xa(a,b){var c=[];q(a,function(a){b(a)&&c.push(a)});return c}
function Ga(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var f=0,i=a.length;f<=i;f++)c[0][f]=f;for(var k,l,t,d=1;d<=e;d++)for(f=1;f<=i;f++)k=d-1,l=f-1,t=c[k][l],b.charAt(k)==a.charAt(l)?c[d][f]=t:(l=c[d][l]+1,k=c[k][f]+1,t+=2,c[d][f]=Math.min(l,k,t));return c[b.length][a.length]}function Ha(){if(Ia!==g)return Ia;var a=o.navigator.userAgent;return Ia=a.indexOf("AppleWebKit")>0&&a.indexOf("FBIOS")>0}var Ia;
function Ja(){}var Ka=o.setInterval,La=o.clearInterval,Ma=o.setTimeout,Na=o.clearTimeout;function Oa(a){switch(a){case g:return"undefined";case "":return"empty";default:return a}};function Pa(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace(/\+/g," "),q(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function Qa(a,b){var c="",d=o.location.href.match(/[^?]+[?]([^#]+).*/);if(d){var d=Pa(d[1]),e=b||a;d[e]&&(c=d[e])}return encodeURIComponent(c)}function Ra(a,b){return!b?h:a==="http:"&&b==="80"||a==="https:"&&b==="443"}
function Sa(a){var b=[];q(Ta,function(c){var d=a[c];u(d)&&(Ba(d)?q(d,function(a){b.push(c+"="+a)}):Ea(d)?q(d,function(a,c){b.push(c+"="+a)}):((d+"").length||c=="r")&&b.push(c+"="+d))});b.push("_");return b.join("&")}
function Ua(a){var b={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!a)return b;var c=document.createElement("a"),d=o.location;if(!/^https?:/.test(a)&&a.indexOf("javascript:")!==0&&a.indexOf("app:")<0)if(a.indexOf("//")===0)a=d.protocol+a;else if(a.indexOf("/")===0)var e=Ra(d.protocol,d.port)?"":d.port,a=d.protocol+"//"+d.hostname+(e?":"+e:"")+a;else{var e=document.baseURI||d.href,f=e.indexOf("?");f===-1&&(f=e.indexOf("#"));if(f===-1)f=e.length;f=e.lastIndexOf("/",f);a=f===-1?
"/"+a:e.substr(0,f)+"/"+a}c.href=a;b.hostname=c.hostname;b.pathname=c.pathname;b.search=c.search;b.protocol=c.protocol;b.port=c.port;b.hash=c.hash;if(b.pathname.charAt(0)!=="/")b.pathname="/"+b.pathname;if(b.hostname==="")b.hostname=d.hostname;if(b.protocol==="")b.protocol=d.protocol;if(b.protocol==="javascript:")b.pathname="",b.hostname="",b.port="",b.hash="";if(Ra(b.protocol,b.port)||b.port==="0")b.port="";return b}
function Va(a){var b=a.protocol;a.hostname&&(b+="//"+a.hostname,a.port&&(b+=":"+a.port));return b+a.pathname+a.search+a.hash};function Wa(a,b,c,d){b=b||"*";c=c||document;if("querySelectorAll"in c)return c.querySelectorAll(b+"["+(a+(d?'="'+d+'"':""))+"]");for(var e=[],b=c.getElementsByTagName(b),c=b.length,f="";c--;)(f=b[c].getAttribute(a))&&(!d||f===d)&&e.push(b[c]);return e}function Xa(a,b,c){c=c||"";if(a===g)a=m;else{var d;if(!(d=c===""&&a.getAttribute(b)))if(d=a.getAttribute(b))d=a.getAttribute(b)===c;a=d?a:a===document.body?m:Xa(a.parentNode,b,c)}return a}
function Ya(a,b,c){a="page"+a+"Offset";b="scroll"+b;if(c&&(c=Wa("data-cb-scroll-element"))&&c.length)return c[0][b];if(Aa(o[a]))return o[a];else if(document.body&&document.body[b])return document.body[b];else if(document.documentElement[b])return document.documentElement[b];return 0}function Za(a){var b=document,b=b[b.compatMode==="CSS1Compat"?"documentElement":"body"]["client"+a]||0;window["inner"+a]&&(b=Math.min(window["inner"+a],b));return b}
function $a(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}function ab(a,b,c){a.ownerDocument||(a=a.correspondingUseElement);if(!a||!a.ownerDocument)return j;var d=a.ownerDocument.documentElement,e=0,f=u(c)?c+1:-1;A(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return j}
function bb(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}function cb(a){a=a||window.event;return!a?j:ab(a.target||a.srcElement,bb,10)}function db(a,b){var c=document.createElement(a);q(b,function(a,b){c.setAttribute(b,a)});return c}function eb(){return o.document.readyState==="complete"||o.document.readyState!=="loading"&&!o.document.documentElement.doScroll}
function fb(a){function b(){if(o.document.addEventListener||o.event.type==="load"||o.document.readyState==="complete")o.document.addEventListener?(o.document.removeEventListener("DOMContentLoaded",b,m),o.removeEventListener("load",b,m)):(o.document.detachEvent("onreadystatechange",b),o.detachEvent("onload",b)),a()}eb()?a():o.document.addEventListener?(o.document.addEventListener("DOMContentLoaded",b,m),o.addEventListener("load",b,m)):(o.document.attachEvent("onreadystatechange",b),o.attachEvent("onload",
b))};function gb(){this.G={};this.Za=1}function B(a,b,c,d){a.Za++;a.G[b]=a.G[b]||{};a.G[b][a.Za]=[c,d];return a.Za}function hb(a,b){if(A(b))a.G[b]=g,delete a.G[b];else if(Aa(b)){var c=h;q(a.G,function(a){q(a,function(e,f){if(parseInt(f,10)===b)return a[f]=g,delete a[f],c=m});return c})}}gb.prototype.S=function(a,b){if(this.G[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];q(this.G[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};
gb.prototype.addEventListener=function(a,b){var c=B(this,a,b);b._cbEventId=c};gb.prototype.removeEventListener=function(a,b){this.G[a]&&this.G[a][b._cbEventId]&&this.G[a][b._cbEventId][0]===b&&hb(this,b._cbEventId)};var C=new gb,ib="a";var E={};
E.D=function(){E.Ka?E.va("pageload"):(E.Bb=[{target:o,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:o,event:"resize"},{target:document.body,event:"mousedown"}],E.Ca=j,E.aa=j,E.Ja={},E.mb={},q(E.Bb,function(a){var b=a.event;z(a.target,b,function(a){E.va.call(E,b,a)})}),B(C,"f",function(){E.va("focus")}),E.va("pageload"),z(document.body,"click",function(a){(a=cb(a))&&C.S("c",a)},h),z(document.body,"contextmenu",function(a){(a=cb(a))&&C.S("r",
a)}),E.Ka=h)};E.Gb=function(){var a,b=E.mb.keydown;if(b===g)return m;b=r()-b;return b<=(a||15E3)&&b>=0};E.bb=100;E.va=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}E.rc(a);if(E.Ca===j)E.vb(a);else if(!E.aa||ha[E.aa]<ha[a])E.aa=a};E.rc=function(a){E.mb[a]=r()};E.vb=function(a){E.Ca=Ma(E.Lb,E.bb);C.S(ib);E.Ja[a]!==j&&Na(E.Ja[a]);E.hc(a)};
E.hc=function(a){var b=E.Ja;b[a]=Ma(function(){Na(b[a]);delete b[a];var c=m;q(b,function(){c=h;return m});c||C.S("i")},ha[a]+E.bb)};E.Lb=function(){Na(E.Ca);E.Ca=j;if(E.aa)E.vb(E.aa),E.aa=j};var jb,kb,lb,mb,nb;(function(){var a,b;q(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof o.document[a]==="boolean")return b=c,m});b!==g&&(mb=a,nb=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),lb=b+"visibilitychange")})();var ob=m;function pb(){ob=nb&&o.document[nb]==="prerender"?h:m}function qb(){kb=h;C.S("f")}function rb(){kb=m;C.S("b")}
function sb(a,b,c){o.addEventListener?o.addEventListener(a,c,m):o.document.attachEvent&&o.document.attachEvent(b,c)}function tb(){var a=h;!Ha()&&o.document.hasFocus&&(a=o.document.hasFocus());var b=m;mb&&(b=o.document[mb]);return a&&!b}function ub(){tb()?qb():rb()}function vb(a){pb();if(ob){var b=m,c=function(){b||(pb(),ob||(b=h,a(),o.window.setTimeout(function(){o.document.removeEventListener(lb,c,m)},100)))};o.document.addEventListener(lb,c,m)}else a()};function G(){this.a=o._sf_async_config||{};this.hb=s(this.qb,this)}G.prototype.D=function(){this.ja=0};G.prototype.qb=function(){};G.prototype.za=function(a){if(!ob){var b=this.hb,c;c=new Image(1,1);if(b)c.onerror=b;c.src=a}};G.prototype.oa=function(){this.hb=j};var H="path",I="domain",wb="useCanonical",xb="useCanonicalDomain",J="title",yb="virtualReferrer";function K(a,b,c){a[b]=a[b]||c}function zb(a,b){for(var c=o[a]||[];c.length;)b(c.shift());o[a]={push:b}}function Ab(a){q(document.getElementsByTagName("script"),function(b){if(typeof b.src==="string"&&b.src.match(/chartbeat.js/))return b=Pa(b.src.split("?")[1]),K(a,"uid",b.uid),K(a,I,b.domain),m})}function Bb(a,b){return a[b]?encodeURIComponent(a[b]):""}
function Cb(a){var b={};q(a,function(a,d){d.charAt(0)=="_"&&(b[d]=a)});return b};var L={};L.Jb=function(a){try{L.create("_cb_test","1",1,a);var b=L.k("_cb_test");L.remove("_cb_test",a);return b==="1"}catch(c){return m}};L.k=function(a){a+="=";var b="";q(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),m});return b};
L.create=function(a,b,c,d){var e=o._sf_async_config;if(e&&e.noCookies)return"";e=new Date;e.setTime(r()+c*1E3);a=a+"="+b+("; expires="+e.toGMTString())+("; path="+d);return document.cookie=a};L.remove=function(a,b){return L.k(a)?L.create(a,"",-86400,b):""};var M={};M.B=function(a){var b=o._sf_async_config;if(!a&&b&&b.noCookies)return j;if(M.B.Ga!==g)return M.B.Ga;var a=r()+"",c,d;try{if((d=o.localStorage).setItem("_cb_ls_test",a),c=d.getItem("_cb_ls_test")===a,d.removeItem("_cb_ls_test"),c)return M.B.Ga=d}catch(e){}return M.B.Ga=j};M.k=function(a){var b=M.B();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&r()>c)?(M.remove(a),""):b.getItem(a)||""};
M.create=function(a,b,c){var d=M.B();if(d){var e=new Date;e.setTime(r()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(f){}}};M.remove=function(a){var b=M.B();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function Db(a,b){this.ya=a||"";this.N=b||"/";this.Mb=M.B()!==j||L.Jb(this.N);this.Ya=m;Eb(this)}n=Db.prototype;n.isSupported=function(){return this.Mb};
function Eb(a){if(!L.k("_cb_ls")){var b=M.B()!==j,c=L.k("_SUPERFLY_lockout");c&&q(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_lockout",c,600,h)});var d=L.k("_chartbeat3");d&&(a.create("_v__chartbeat3",d,34128E3,h),L.remove("_chartbeat3",a.N));b&&((b=L.k("_chartbeat2"))&&a.create("_chartbeat2",b,34128E3,h),(b=L.k("_chartbeat5"))&&a.create("_chartbeat5",b,60,h));L.create("_cb_ls","1",34128E3,a.N)}}
n.create=function(a,b,c,d){a=d?a:this.ya+a;(M.B()?M:L).create(a,b,c,this.N);M.B()&&L.create(a,b,c,this.N)};n.update=function(a,b,c,d,e,f,i){a=d?a:this.ya+a;e=A(e)?e:"::";d=(d=this.k(a,h))?d.split(e):[];if(i&&d.length){var k=i(b),l=Fa(d,function(a){return i(a)===k});l!==-1&&d.splice(l,1)}d.push(b);for(Aa(f)&&d.length>f&&d.splice(0,d.length-f);d.length>1&&d.join(e).length>4E3;)d.shift();this.create(a,d.join(e),c,h)};
n.k=function(a,b){var a=b?a:this.ya+a,c=(M.B()?M:L).k(a);if(!c&&M.B()&&(c=L.k(a))&&L.k("_cb_ls")){this.Ya=h;var d;switch(a){case "_SUPERFLY_lockout":d=600;break;case "_chartbeat4":d=60;break;case "_cb_cp":d=60;break;case "_chartbeat3":d=34128E3;break;default:d=34128E3}M.create(a,c,d)}return c};n.remove=function(a,b){a=b?a:this.ya+a;(M.B()?M:L).remove(a,this.N);M.B()&&L.remove(a,this.N)};function Fb(a){var b=j;if(a&&(b=Gb(),b=!b?b:N(b.pathname)+b.search+b.hash))return b;var c=o.location,b=N(c.pathname),a=c.search||"",a=a.replace(/PHPSESSID=[^&]+/,""),d=/&utm_[^=]+=[^&]+/ig;(c=d.exec(c.search))&&(a=a.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(c=d.exec(a))&&(a=a.replace(d,c[1]!=""?"?"+c[1]:""));a=N(a);return b+a}function Hb(a){return a&&(a=Gb(),a=!a?a:a.hostname)?a:o.location.hostname}function Gb(){var a=Ib();return!a?a:Ua(a.href)}
function Ib(){var a=j;q(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return a=b,m});return a}for(var Jb={},Kb=0;Kb<81;Kb++)Jb["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Kb)]=h;function Lb(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return Jb[c]?String.fromCharCode(c):"%"+b.toUpperCase()}
function N(a){if(!A(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,Lb);a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent);return a=a.replace(/[A-Za-z0-9-_.'+]+(@|%40)\w+([-.]\w+)*\.\w+([-.]\w+)*/g,"")};function O(a,b){var c=Q();return u(b)&&!u(c[a])?b:c[a]}function Q(){u(o._cb_shared)||(o._cb_shared={});return o._cb_shared};var R={Db:{IDLE:0,Cc:1,vc:2,Cb:3},J:0};R.D=function(){if(!R.Ka)B(C,ib,R.Sb,R),B(C,"i",R.Vb,R),B(C,"f",R.Ub,R),B(C,"b",R.Tb,R),R.Ka=h};R.Qb=function(){return R.J};R.Sb=function(){R.J===1?R.Q(3):R.J===0&&R.Q(2)};R.Vb=function(){R.J===3?R.Q(1):R.J===2&&R.Q(0)};R.Ub=function(){(R.J===0||R.J===2)&&R.Q(3)};R.Tb=function(){R.J===3?R.Q(2):R.J===1&&R.Q(0)};R.Q=function(a){R.J=a;C.S("s",a)};function Mb(a,b){this.Ia=a||g;this.Oa=b||g;this.fa=this.ca=0;this.Yb=s(this.Zb,this);this.xb=this.ba=j}n=Mb.prototype;n.D=function(){this.fa=this.ca=0;this.ba=j;this.xb=B(C,"s",this.kb,this);this.kb(R.Qb())};n.kb=function(a){La(this.ba);this.ba=j;if(a===R.Db.Cb)this.ba=Ka(this.Yb,1E3)};n.Zb=function(){if(this.Ia===g||this.Ia())this.ca++,this.fa++,this.Oa&&this.Oa()};n.terminate=function(){La(this.ba);this.ba=j;hb(C,this.xb)};n.oa=function(){this.terminate();this.Oa=this.Ia=g};function S(){G.call(this);this.T=[];this.q=new Db(this.mc,this.a.cookiePath||"/");this.q.remove("_SUPERFLY_nosample");this.F=new Mb;this.Qa=s(this.xa,this);z(o,"unload",this.Qa);this.ta=m;Nb(s(this.D,this))}ba(S,G);function Nb(a){fb(function(){vb(a)})}n=S.prototype;n.Va=h;n.Sa=m;
n.D=function(){S.M.D.call(this);this.ra=this.X=0;this.ka=r();this.Ua=p(Ob(this));this.Ta=h;this.La=72E5;if(this.Va){var a=+this.a.sessionLength;if(!isNaN(a))this.La=a*6E4}a=O("d");if(!a){var a=[],b=this.q.k("_chartbeat2",h);b.length>0&&(a=b.split("."));a.length>6&&(a=[]);var b=r(),c=this.q.k("_cb",h);c.length>0?a[1]=a[1]||b:c=a[0];a[0]="";var d=b-+(a[1]||0),e=b-+(a[2]||0);Q().n=c&&d>18E5&&e<2592E6?0:1;var d=a[4],f=parseInt(a[5],10)||0;if(!(e=e>18E5))if(Pb(this))e=m;else{var e=U(this),e=decodeURIComponent(e),
e=Qb(e)||e,i;i=Rb(this);i=decodeURIComponent(i);i=Qb(i)||i;e=e!==i}!d||e?(d=p(Ob(this)),a[4]=d,f=1,this.q.remove("_cb_svref",h)):f+=1;a[5]=f;f="1";e=a&&+a[2];d=a&&a[3];if(a&&e&&d)if(f=Math.abs((Ca(b)-Ca(e))/864E5)){f=Math.min(f,16)-1;for(e="";f--;)e+=0;f=(d+e+"1").slice(-16)}else f=d;d=f;c||(c=this.a.utoken||p(Ob(this),3),a[1]=b);a[2]=b;a[3]=d;this.a.utoken=this.ma;this.q.create("_cb",c,34128E3,h);this.q.create("_chartbeat2",a.join("."),34128E3,h);a[0]=c;Q().d=a}this.Fc=a.join(".");var k;c=+a[1];
d=+a[2];if((b=a[3])&&c&&d)k=(Math.min((Math.abs((Ca(d)-Ca(c))/864E5)||0)+1,16,b.length)-1).toString(16),k+=("0000"+parseInt(b,2).toString(16)).slice(-4);this.jb=k;this.bc=O("n",1);this.ma=a[0];this.lc=a[4];this.jc=a[5];this.kc=Rb(this);this.q.create("_cb_svref",Rb(this)||"null",1800,h);this.F.D();R.D();E.D();jb||(kb=tb(),lb&&o.document.addEventListener&&o.document.addEventListener(lb,ub,m),sb("focus","onfocusin",qb),sb("blur","onfocusout",rb),kb&&qb(),jb=h);this.ga=0;this.Fb=B(C,ib,this.dc,this);
this.Sa=h;if(this.Pa)Ma(this.Pa,0),this.Pa=j};n.Da=function(){if(!this.q.k("_SUPERFLY_lockout"))this.Sa?!eb()&&!this.ta?(this.wa=s(this.Xa,this),z(o,"load",this.wa)):this.Xa():this.Pa=s(this.Da,this)};n.Xa=function(){this.Ra=Sb();E.D();var a=s(this.ha,this);this.lb=Ka(a,15E3);this.ha()};
n.ha=function(){var a=this.F.fa,a=this.a.reading&&+this.a.reading||a>0;this.ra<this.X&&!a?this.ra++:Ha()&&!a?this.ra++:(a?this.X=0:Tb(this),this.ra=0,this.T.push(0),this.T.length>18&&this.T.shift(),this.Va&&r()-this.ka>=this.La?this.terminate():this.Z())};n.qb=function(){this.T.push(1);var a=0;q(this.T,function(b){a+=b});a<3?(this.Ta=h,Tb(this)):(this.terminate(),this.q.create("_SUPERFLY_lockout","1",600))};n.xa=function(){};n.dc=function(){var a=Ub(this);this.ga=Math.max(this.ga,a)};
function Ub(a){return Math.floor(Ya("Y","Top",!!a.a.scrollElement))}function Tb(a){var b=a.X,b=b?Math.min(b*2,16):1;a.X=b}n.pa=function(){this.xa();this.terminate()};n.Aa=function(){this.ta=h;this.Sa=m;this.D();this.Da()};function Pb(a){if(a.a[yb])return h;if(Vb(a))return m;a=document.referrer.indexOf("://"+o.location.hostname+"/");return a!=-1&&a<9}
function Vb(a){var b=a.a.referrerOverrideQueryParam,c="";q(window.location.search.substr(1).split("&"),function(a){a=a.split("=");if(a.length==2&&a[0]==b&&a[1])return c=decodeURIComponent(a[1]).replace(/\+/g," "),m});c&&c.indexOf("::")==-1&&(c="external::"+c);return c}function U(a){a=a.a[yb]||Vb(a);if(!a&&(a=document.referrer||"")&&!/^(android-)?app:/.test(a)){var b=Ua(a);if(b.protocol==="http:"||b.protocol==="https:")b.pathname=N(b.pathname),a=Va(b)}return encodeURIComponent(a)}
function Wb(a){a=a.a[J].slice(0,100);return encodeURIComponent(a)}function Ob(a){a=[U(a),$a("Width"),$a("Height")];return ka(a)}function Xb(a){var b=[],c=a.q.k("_chartbeat4");c&&(q(c.split("::"),function(a){b.push(encodeURIComponent(a))}),a.q.remove("_chartbeat4"));return b}function Rb(a){a=a.q.k("_cb_svref",h)||U(a)||"null";a==="null"&&(a="");return a=a.substr(0,128).replace(/%.?$/,"")}function Qb(a){a=a.match(/^https?:\/\/([^\/]*)/);return!a?j:a[1]}
function Sb(){var a=o.performance&&o.performance.timing;if(!a||a.navigationStart==0)return-1;var b=a.navigationStart,a=a.loadEventStart;return Aa(b)&&b?Aa(a)&&a>b?a-b:r()-b:-1}n.terminate=function(){this.F.terminate();hb(C,this.Fb);this.wa!==g&&za("load",this.wa);La(this.lb);Q().d=g;Q().n=g};n.oa=function(){this.terminate();za("unload",this.Qa);this.Qa=this.wa=this.q=this.T=this.a=j;this.F.oa();this.F=j;S.M.oa.call(this)};function Yb(a){for(var b=O("m")||[];b.length;)a(b.shift());a={push:a};Q().m=a};function Zb(a,b,c){var d=a.offsetLeft,e=a.offsetTop,f=$b(a);d+=f.x;e+=f.y;for(var i=m,k=c?0:Math.floor(Ya("X","Left",g)),l=c?0:Math.floor(Ya("Y","Top",g)),f=a.offsetParent;a&&a!==b&&a!==document.body;){if(a===f)f=$b(a),d+=a.offsetLeft+f.x,e+=a.offsetTop+f.y,f=a.offsetParent;c||(d-=a.scrollLeft,e-=a.scrollTop);if(ac(a,["position"]).position==="fixed"){i=h;break}a=a.parentElement}c||(d-=b?b.scrollLeft:k,e-=b?b.scrollTop:l);i&&(d+=k,e+=l);return{x:d,y:e}}
function ac(a,b){var c={},d,e;o.getComputedStyle?d=o.getComputedStyle(a,j):a.currentStyle?e="currentStyle":a.style&&(e="style");q(b,function(b){c[b]=d?d[b]||d.getPropertyValue(b):a[e][b]});return c}var bc=/matrix(3d)?\((.*)\)/;function $b(a){var b={x:0,y:0},a=ac(a,["transform"]).transform;if(!A(a))return b;var c=a.match(bc);if(!c)return b;var a=c[2].split(", "),d;u(c[1])?(c=12,d=13):(c=4,d=5);b.x=parseInt(a[c],10);b.y=parseInt(a[d],10);return b};function cc(){var a=o.location.href,a=a.replace(/-{2,}/g,"-"),a=Ua(a);a.pathname=N(a.pathname);return a}
function dc(a){var b=L.k("_chartbeat6");if(!b)return j;var b=b.split("::"),c,d;if(b.length===1)c=b[0].split(","),d=0;else{var e,f=cc(),i=Va(f);q(b,function(a,b){var f=a.split(","),l=Ga(i,decodeURIComponent(f[0]));if(l===0)return c=f,d=b,m;if(e===g||l<e)e=l,c=f,d=b})}b.splice(d,1);a="_chartbeat6="+b.join("::")+ec(a);document.cookie=a;var a=[],b=decodeURIComponent(c[0]),f=decodeURIComponent(c[1]),k=c[2];c.splice(0,3);for(var l=c.length/3,t=0;t<l;t++){var w=t*3+2;a.push({Dc:b,origin:f,O:k,$:w<c.length?
c[w]:"",Nb:c[t*3],sc:c[t*3+1]})}return a}function ec(a){var b="",c;if(!Ea(a))return b;a.ob&&(c=new Date,c.setTime(c.getTime()+a.ob),b+="; expires="+c.toGMTString());a.domain&&(b+="; domain="+a.domain);a.path&&(b+="; path="+a.path);return b}function fc(a){var b=a.topStorageDomain,a=a[I],c=o.location.hostname;return b?b:gc(c,a)?a:c.replace(/^www\./,"")}
function gc(a,b){if(a===b)return h;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return m;if(c.pop()!==d.pop())return m}return h}function hc(a,b,c,d,e){this.Pb=a;this.Ob=b;this.tc=c;this.O=d;this.$=e}function ic(a){var b=a.d,c=j;if(b!==j){var d={};b.s&&q(b.s,function(a,b){d[b]=typeof a==="string"?{eb:a,$:""}:{eb:a.chosenVariant,$:a.specificLocation}});c={ub:d,O:b.g,nb:b.m}}return{status:a.s,data:c,code:a.c,message:a.m}};function jc(a,b){for(var c=b||document.documentElement,d=[],e=j,f=a,i,k,l,t,w,D;f&&f!==c;){i=f.nodeName.toLowerCase();e=f;k=e.nodeName;if((f=f.parentNode)&&f!==document.documentElement){l=f.children;t=0;for(w=0,D=l.length;w<D;w++){if(e===l[w]){i+="["+(1+w-t)+"]";break}l[w].nodeName!==k&&t++}}d.unshift(i)}return d.join("/")};function V(){this.mc="_t_";this.gb=this.wb=Ja;S.call(this)}ba(V,S);n=V.prototype;
n.D=function(){V.M.D.call(this);Ab(this.a);var a=!!this.a[wb],b=Hb(!!this.a[xb]&&a);K(this.a,"mabServer","mabping.chartbeat.net");K(this.a,J,document.title);K(this.a,I,b);this.a[H]=this.a[H]?N(this.a[H]):Fb(a);this.ea=x(b);this.a[I]=x(this.a[I]);this.qc=fc(this.a);this.da=this.sa=m;this.ib=[];var c=this,a=dc({domain:"."+this.qc,ob:6E4,path:"/"});if(a!==j)this.sa=h,q(a,function(a){c.ib.push(new hc(a.origin,a.Nb,a.sc,a.O,a.$))});this.pb=0;this.Ba=j;Yb(s(this.Xb,this))};
n.Z=function(){var a=this.F.ca,b=kc(this),c,d=this;this.sa&&q(this.ib,function(e){c=b+"&x="+e.Ob+"&v="+e.tc+"&ml="+e.O+"&xo="+e.Pb+"&e="+a+"&sl="+e.$;d.za(c)});!this.da&&this.Ba&&lc(this,this.Ba);this.da=h};n.Xa=function(){this.Ra=Sb();E.D();if(this.sa){var a=s(this.ha,this);this.lb=Ka(a,500)}this.ha()};n.ha=function(){var a,b;this.da?(a=this.F.ca,b=this.pb*15,a-b>=15&&(this.Z(),this.pb+=1),a>=45&&this.terminate()):this.Z()};
function kc(a){var b=a.a;return Da()+"//"+b.mabServer+"/ping/mab?h="+encodeURIComponent(b[I])+"&p="+encodeURIComponent(b[H])+"&d="+encodeURIComponent(a.ea)+"&u="+a.ma+"&c="+Math.round((r()-a.ka)/600)/100}n.xa=function(){};n.oc=function(a){a=ic(a);this.da?lc(this,a):this.Ba=a};
function lc(a,b){var c=kc(a),d=b.status,e=b.data;if(d=="s"&&e!==j){var f=s(a.za,a);Ea(e.ub)&&q(e.ub,function(a,b){f(c+"&x="+b+"&v="+a.eb+"&ml="+e.O+"&sl="+a.$+"&e=-1")});Ba(e.nb)?q(e.nb,function(a){f(c+"&me=3&ml="+e.O+"&x="+a)}):Ba(e.ac)&&q(e.ac,function(a){f(c+"&me=5&ml="+e.O+"&x="+a)})}else d=="e"&&a.za(c+"&me="+b.code)}
n.Xb=function(a,b){for(var c=0,d=arguments.length;c<d;c++){var a=arguments[c],e=a.shift();e==="t"?this.oc.apply(this,a):e==="v"?this.tb.apply(this,a):e==="sv"?this.ic.apply(this,a):e==="ev"&&this.tb.apply(this,a)}};n.pa=function(){this.gb();V.M.pa.call(this)};n.Aa=function(){Q().m=[];this.wb();V.M.Aa.call(this)};n.ic=function(a){this.wb=a};n.tb=function(a){this.gb=a};n.terminate=function(){this.Ec=g;this.Ba=j;this.da=this.sa=g;V.M.terminate.call(this)};if(!L.k("cb_optout")&&!o.pSUPERFLY_mab){var mc=new V,nc={};nc.evps=s(mc.pa,mc);nc.svps=s(mc.Aa,mc);o.pSUPERFLY_mab=nc;mc.Da()};var oc="engagedSeconds",pc={Ac:"id",zc:oc,wc:"campaignId",xc:"creativeId",Bc:"placementId",yc:"element"};var qc,rc,W;
function sc(a){if(a.origin==="https://chartbeat.com"&&(a=String(a.data),a.indexOf("_cb_hud_version=")===0)){var b=a.substr(16);tc();if(b!=="NONE")b=b.indexOf("HUD2.")===0?b.substr(5):"OLD",a="https://static.chartbeat.com/js/inpage.js",b!=="OLD"&&(a="https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-"+b+".js"),b=u(g)?g:{},b.src=a,a=db("script",b),a.setAttribute("type","text/javascript"),b=document.head||document.getElementsByTagName("head")[0],u(g)?g.appendChild(a):b&&b.appendChild(a)}}
function tc(){Na(rc);rc=g;za("message",sc);W&&W.parentNode&&W.parentNode.removeChild(W);W=g};var uc=/^https?:\/\/([^/]*\.)?chartbeat\.com\/publishing\/hud2\/launch\//;function vc(){var a=o._sf_async_config&&o._sf_async_config.domain;if(a&&!qc){qc=h;a="https://chartbeat.com/publishing/hud2/versioninfo/?host="+encodeURIComponent(a);z(o,"message",sc);rc=Ma(tc,1E4);var b=u(g)?g:{};b.src=a;a=db("iframe",b);a.style.display="none";u(g)?g.appendChild(a):document.body&&document.body.appendChild(a);W=a}}
function wc(){var a=M.B(h);return a?(a.setItem("_cb_ip","1"),a.removeItem("_cb_hud_collapsed"),h):m}function xc(a){/[\/.]chartbeat\.com$/.test(a.origin)&&String(a.data).indexOf("_cb_ip")==0&&wc()&&(a.source.postMessage(1,a.origin),fb(vc),za("message",xc))};function yc(a,b){this.Ab=b;this.zb=a[wb];this.yb=a[xb];this.P=a[H];this.pc=a[J];this.fb=a[I];this.uc=a[yb];this.cb=(this.H=Gb())?this.H.hostname:"";this.na=this.H?N(this.H.pathname)+this.H.search+this.H.hash:"";this.sb=Fb(m);this.gc=Hb(m);var c=Wa("property","meta",j,"og:url");this.ia=(this.Y=c&&c.length?Ua(c[0].content):j)?N(this.Y.pathname)+this.Y.search+this.Y.hash:"";this.cc=this.Y?this.Y.hostname:"";this.Ha=document.title||"";var d;if((c=Wa("property","meta",j,"og:title"))&&c.length)d=c[0].content;
this.ua=d;var e;if((d=Wa("property","meta",j,"twitter:title"))&&d.length)e=d[0].content;this.la=e;e=!!this.zb;d=this.zb!==g;var c=!!this.yb,f=this.yb!==g,i=!!this.H,k;k=x(this.cb);var l=x(this.gc);k=k===l;var l=!!this.ia,t=!this.H?m:this.na===this.ia,w=this.na===this.sb,D;D=this.na;var F=va(this.sb);D=D===F;var F=!!this.Ha,T=!!this.ua,P=!!this.la,y=this.Ha===this.ua,v=!this.la?m:this.Ha===this.la,Gc=!this.ua||!this.la?m:this.ua===this.la,Hc=!!this.pc,Ic=!!this.P,Jc=this.P?this.P.charAt(0)!=="/":m,
Kc=!this.H?m:this.P===this.na,Lc=!this.ia?m:this.P===this.ia,Mc=!this.H?m:this.fb===x(this.cb),Nc=!this.ia?m:this.fb===x(this.cc),Oc=!!this.Ab,Pc=this.Ab?m:!!this.uc,Qc=Da()==="https:",Rc=!!XMLHttpRequest,Y;this.P?(Y=wa(this.P),Y=Y!==va(Y)):Y=m;e=[e,d,c,f,i,k,l,t,w,D,F,T,P,y,v,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Y];d=1;for(f=c=0;f<e.length;f++)c|=e[f]&&d,d<<=1;this.Kb=("00000000"+c.toString(16)).slice(-8)};function X(){"postMessage"in window&&z(o,"message",s(this.Wb,this));S.call(this);zb("_cbq",s(this.rb,this))}ba(X,S);
X.prototype.D=function(){X.M.D.call(this);var a=this.ma;Q().u=a;a=this.Ua;Q().t=a;this.$b=new yc(this.a,this.ta);this.Fa=j;Ab(this.a);var a=!!this.a[wb],b=Hb(!!this.a[xb]&&a);K(this.a,"pingServer","ping.chartbeat.net");K(this.a,J,document.title);K(this.a,I,b);this.a[H]=this.a[H]?N(this.a[H]):Fb(a);this.ea=x(b);this.a[I]=x(this.a[I]);this.Hb=B(C,"c",this.ec,this);this.Ib=B(C,"r",this.fc,this);this.U=j};X.prototype.Eb=function(a){this.Fa=a};
X.prototype.xa=function(){this.q.update("_chartbeat4",["t="+this.Ua,"E="+this.F.ca,"x="+Ub(this),"c="+Math.round((r()-this.ka)/600)/100,"y="+$a("Height"),"w="+Za("Height")].join("&"),60,g,g,1)};var Ta="h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,sv,sr,sd,im".split(",");n=X.prototype;
n.Z=function(a){this.ja++;var b={};b.g=this.a.uid;b.g0=Bb(this.a,"sections")||"No%20Section";b.g1=Bb(this.a,"authors")||"No%20Author";b.g2=Bb(this.a,"zone");b.g3=Bb(this.a,"sponsorName");b.g4=Bb(this.a,"type");!this.a.noCookies&&this.q.isSupported()?b.n=this.bc:b.nc=1;b.c=Math.round((r()-this.ka)/600)/100;b.E=this.F.ca;var c=Ub(this);this.ga=Math.max(this.ga,c);b.x=c;b.m=this.ga;b.y=$a("Height");b.o=$a("Width");b.w=Za("Height");b.b=this.Ra>0?this.Ra:"";if(this.jb&&!this.a.noCookies&&this.q.isSupported())b.f=
this.jb;b[""]=Cb(this.a);b.t=this.Ua;b.V=126;b.tz=(new Date).getTimezoneOffset();b.sn=this.ja;b.sv=this.lc;b.sr=this.kc;b.sd=this.jc;c=this.F.fa;b.h=encodeURIComponent(this.a[I]);b.p=encodeURIComponent(this.a[H]);b.u=this.ma;b.d=encodeURIComponent(this.ea);b.j=Math.round((this.X+2)*15E3/1E3);b.R=0;b.W=0;b.I=0;E.Gb()?b.W=1:this.a.reading&&+this.a.reading||c>0||b.c<0.09?b.R=1:b.I=1;b.e=c;c=Pb(this);if(this.Ta){this.Ta=m;if(c)this.U=zc(this);b.i=Wb(this);var d=this.a.hudTrackable;d!==g&&(b.L=d?"1":"0");
this.a.alias&&(b.PA=encodeURIComponent(this.a.alias))}if(c){if(this.U){if(b.v=encodeURIComponent(this.U.path),b.K=Ac(this.U),this.U.Na>1)b.l1=this.U.Na}else b.v=U(this);this.ta&&(b.vp=1)}else b.r=U(this);c=Oa(b.v);Q().v=c;c=Oa(b.r);Q().r=c;b.A=this.Fa?this.Fa:"";b._c=Qa("utm_campaign",this.a.campaignTag);b._m=Qa("utm_medium",this.a.mediumTag);b._x=Qa("utm_source",this.a.sourceTag);b._y=Qa("utm_content",this.a.contentTag);b._z=Qa("utm_term",this.a.termTag);b.im=this.$b.Kb;this.a.idSync?(c=[],da(new ca,
this.a.idSync,c),c=encodeURIComponent(c.join(""))):c="";b._s=c;b.z=Xb(this);b.C=this.a.mobileApp?1:"";b.KK=a?Ac(a):"";a=this.q;c=a.Ya;a.Ya=m;b.l=c?1:"";this.F.fa=0;this.za(Da()+"//"+this.a.pingServer+"/ping?"+Sa(b))};
n.Wb=function(a){var b=this.a,c=b.playerdomain||this.ea;if(ma(a.origin)===ma(c))if(c=a.data,A(c)&&c.indexOf("cbqpush::")===0)a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.rb(a));else if(c=="cbdata?"){var c="&u="+O("u"),d="&t="+O("t"),e="&v="+O("v"),f="&r="+O("r"),b="domain="+encodeURIComponent(b[I])+"&uid="+encodeURIComponent(b.uid)+"&path="+encodeURIComponent(b[H])+"&title="+Wb(this)+"&referrer="+U(this)+"&internal="+(Pb(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.ea)+
c+d+e+f+"&utoken="+this.ma;a.source.postMessage(b,"*")}};n.rb=function(a){var b=a[0],a=a[1];if(b==="_demo"&&this.a._demo)this.a._demo=this.a._demo+"%2C"+a;else if(a!==this.a[b]&&(this.a[b]=a,this.X=0,this.ja>0&&!this.qa)){var c=this.ja,d=this;this.qa=Ma(function(){d.qa=j;d.ja===c&&d.Z()},1E3)}};function Bc(a){a=a.replace(/-{2,}/g,"-");a=Ua(a);a.pathname=N(a.pathname);return a}n.ec=function(a){Cc(this,a,"c")};n.fc=function(a){Cc(this,a,"r")};
function Cc(a,b,c){if(a.Va&&r()-a.ka>=a.La)a.terminate();else{var d=b.href||"",d=Bc(d);if(d.protocol.indexOf("http")===0){var e=d.hostname!==o.location.hostname,d=Va(d),f=ab(b,function(a){return a.id}),i=jc(b,f),k="";a.a.moduleAttribute&&(k=(k=Xa(b,a.a.moduleAttribute))?k.getAttribute(a.a.moduleAttribute):"",k=k.replace(/::/g,"-").substr(0,40));f?(i&&(i="/"+i),i="*[@id='"+f.id+"']"+i,f=jc(b)):f=i;i=p(i);f=p(f);b=Zb(b,g,h);c={left:b.x,top:b.y,path:a.a[H],href:d,ab:i,Ea:f,$a:"",Wa:c,Na:0,Rb:a.a[I],
Ma:k};a.Z(c);e||a.q.update("_chartbeat5",Dc(c),60,m,g,3,function(a){a=a.split("|");return a[2]+"|"+a[3]})}}}function Ac(a){return[a.left,a.top,a.ab,encodeURIComponent(a.$a),a.Wa,encodeURIComponent(a.href),a.Ea,a.Ma].join("::")}function Dc(a){var b=encodeURIComponent(a.$a),b=b.replace(/-/g,"%2D");b.length>512&&(b="");return[a.left,a.top,encodeURIComponent(a.path),encodeURIComponent(a.href),a.ab,b,a.Wa,a.Ea,encodeURIComponent(a.Rb),a.Ma].join("|")}
function zc(a){var b=a.q.k("_chartbeat5");if(!b)return j;var c=b.split("::"),b=c.length,d,e=j,f,i=Bc(o.location.href),k=Va(i);q(c,function(a,b){var c=a.split("|"),i=decodeURIComponent(c[3]);if(i){i=ya(k,i);if(i===0)return d=c,e=b,m;else if(i===j)return h;if(f===g||i<f)f=i,d=c,e=b}});if(e===j)return j;c.splice(e,1);a.q.create("_chartbeat5",c.join("::"),60);(a=d[5])?(a=a.replace(/%2D/g,"-"),a=decodeURIComponent(a)):a="";return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),href:decodeURIComponent(d[3]),
ab:d[4]||"",$a:"",Ea:d.length>7?d[7]:"",Wa:d.length>6?d[6]:"c",Na:b,Ma:d[9]?d[9]:""}}n.terminate=function(){hb(C,this.Hb);hb(C,this.Ib);Na(this.qa);this.qa=j;X.M.terminate.call(this)};function Ec(a,b){return function(c,d){if(!ob){a();var e=o._sf_async_config,f="",i=e[H],i=ma(i);/^\//.test(i)&&(f=x(o.location.hostname));e[yb]=Da()+"//"+f+i;if(A(c))e[H]=N(c),d&&(e[J]=d);else if(Ea(c)){var k=["authors","sections",J,H,yb];q(c,function(a,b){if(Fa(k,function(a){return a===b})!==-1||b.indexOf("_")===0)e[b]=b===H?N(a):a})}b()}}};if(!L.k("cb_optout")&&!o.pSUPERFLY){var Fc=new X,Z={};o.pSUPERFLY=Z;var Sc=o.pSUPERFLY_mab,$=o.pSUPERFLY_pub,Tc=[];Sc&&Tc.push(Sc);if($)Tc.push($),$.addEngagedAdFilter&&(Z.addEngagedAdFilter=$.addEngagedAdFilter),$.refreshAd&&(Z.refreshAd=$.refreshAd),$.registerGptSlot&&(Z.registerGptSlot=$.registerGptSlot),zb("_cba",function(a){a()});Z.virtualPage=Ec(function(){Fc.pa();q(Tc,function(a){a.evps()})},function(){Fc.Aa();q(Tc,function(a){a.svps()})});Z.activity=s(Fc.Eb,Fc);Fc.Da();uc.exec(document.referrer)&&
wc();var Uc=M.B(h);if(!Uc?0:Uc.getItem("_cb_ip")){var Vc=o.location;(!/^(.+[.])?chartbeat\.com$/.test(Vc.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(Vc.pathname))||fb(vc)}else z(o,"message",xc)};})();
