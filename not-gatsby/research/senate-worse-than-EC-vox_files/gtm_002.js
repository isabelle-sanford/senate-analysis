
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"311",
  
  "macros":[{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"GA CrossDomains",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",0],8,16],".hostname||\"\";if(!b||b==document.domain)return!1;for(var c=(",["escape",["macro",1],8,16],"||\"\").split(\",\"),a=0;a\u003Cc.length;a++)if(c[a]\u0026\u00260\u003C=b.indexOf(c[a]))return!1;return!0})();"]
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-social\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-link\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-viewport\")||void 0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"Network",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__v",
      "vtp_name":"Content ID",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Content Type",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Author",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"All Chorus Categories",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Publish Date",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Entry Groups",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Community",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector('[type\\x3d\"application\/ld+json\"]');a=JSON.parse(a.innerHTML);return a=a.articleSection})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Evergreen URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA Primary ID"
    },{
      "function":"__v",
      "vtp_name":"socialNetwork",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialTarget",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"embed\"===document.querySelector(\"body\").getAttribute(\"data-analytics-class\")})();"]
    },{
      "function":"__v",
      "convert_null_to":"true",
      "convert_undefined_to":"true",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"true",
      "vtp_name":"enable_url_cleaning"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){if(",["escape",["macro",29],8,16],"\u0026\u0026window.history.replaceState){(window.dataLayer||[]).push({unmodified_page_url:window.location.href});var a=window.location.search.replace(\/(_ga|utm_)[^\u0026]+\u0026?\/g,\"\").replace(\/\u0026$\/,\"\").replace(\/^\\?$\/,\"\");window.history.replaceState({},document.title,window.location.pathname+a+window.location.hash)}return null}})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",31],
      "vtp_defaultValue":["macro",31],
      "vtp_map":["list",["map","key","dynamic","value",["macro",32]]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"Hour of Publish",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Advertiser",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Campaign",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Pagination Tracking",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Program",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Topic",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Super Groups",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Additional Placements",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Demand Post",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"auth0_id"
    },{
      "function":"__v",
      "vtp_name":"Hour of Update",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Logged in Status",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.createElement(\"ins\");a.className=\"AdSense\";a.style.display=\"block\";a.style.position=\"absolute\";a.style.top=\"-1px\";a.style.height=\"1px\";document.body.appendChild(a);var b=!a.clientHeight;document.body.removeChild(a);return b})();"]
    },{
      "function":"__v",
      "vtp_name":"Last Time Updated",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Breakpoint",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Page Layout Version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Hermano Records"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"iFrame Tracking"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Hidden Groups"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Story Word Count"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ScrollSubscription"
    },{
      "function":"__c",
      "vtp_value":"no value set"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Paywall Logged In Status"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"itm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"itm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"itm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sailthru_hid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"commerceAffiliateDisclosure"
    },{
      "function":"__v",
      "vtp_name":"virtualPagePath",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Embed Host",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"virtualPageTitle",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-class\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"newsletter\"],a=",["escape",["macro",0],8,16],".className.split(\" \").filter(function(c){return b.includes(c)})[0];return a?a:",["escape",["macro",70],8,16],"||void 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventNonInt"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-campaign\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={newsletter:\"email\"}[",["escape",["macro",71],8,16],"];return a?a:",["escape",["macro",73],8,16],"||",["escape",["macro",15],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",0],8,16],";a\u0026\u0026a.getAttribute;){var b=a.getAttribute(\"data-analytics-placement\");if(b)return\":\"+b;a=a.parentNode}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";if(a=a.parentElement)return a.getAttribute(\"data-analytics-class\")||a.getAttribute(\"data-analytics-action\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",0],8,16],";a\u0026\u0026a.getAttribute;){var b=a.getAttribute(\"data-analytics-action\");if(b)return b;a=a.parentNode}return\"share\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",51],8,16],"||\"\";if(\"string\"===typeof a\u0026\u0026a.match(\/small\/)\u0026\u0026!a.match(\/medium\/))return!0;a=document.documentElement;return 600\u003E=(window.innerWidth||a\u0026\u0026a.clientWidth||document.body.clientWidth)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",78],8,16],"?\"mobile\":\"desktop\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",0],8,16],";a\u0026\u0026a.getAttribute;){var b=a.getAttribute(\"data-analytics-placement\");if(b)return b;a=a.parentNode}return\"main\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",b=a.getAttribute(\"data-analytics-link\"),c=b.replace(\/([^:]+).*\/,\"$1\"),d=function(a){var b=a.querySelectorAll(\"h1,h2,h3,h4,h5,h6\");return b.length?(b=[].slice.call(b).sort(function(a,b){return a.tagName.localeCompare(b.tagName)}),b[0].innerText):a.innerText};if(b!==c){for(b='[data-analytics-link\\x3d\"'+c+'\"]';(a=a.parentNode)\u0026\u0026a.querySelector;)if(c=a.querySelector(b))return d(c);return ",["escape",["macro",0],8,16],".getAttribute(\"href\")}return d(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA Secondary ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-label\")||",["escape",["macro",12],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"Hour of Day",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Day of Week",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!0!==window.adblockJsFile;if(void 0!==navigator.doNotTrack)var a=navigator.doNotTrack;else void 0!==window.doNotTrack?a=window.doNotTrack:void 0!==navigator.msDoNotTrack\u0026\u0026(a=navigator.msDoNotTrack);a=void 0!==a?\/1|yes|true\/.test(String(a).toLowerCase())?\"true\":\"false\":\"undefined\";return\"adblock-\"+b+\":dnt-\"+a})();"]
    },{
      "function":"__c",
      "vtp_value":"unison"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_stripWww":true,
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "vtp_decodeCookie":false,
      "vtp_name":"_chorus_ccpa_consent_donotsell"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"value\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video ID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video Content Type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Producer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video Publish Date"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Tags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Primary Brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Series"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Format"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Sub-format"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;a=a.getTime();return a-=",["escape",["macro",105],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__d",
      "vtp_elementSelector":"img.c-disclaimer-image.c-disclaimer-image--brand",
      "vtp_attributeName":"alt",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"G-1\";-1\u003C",["escape",["macro",89],8,16],".indexOf(\"eater.com\")?a=\"G-GMSWCRTSTY\":-1\u003C",["escape",["macro",89],8,16],".indexOf(\"polygon.com\")?a=\"G-3RRF1V8L1B\":-1\u003C",["escape",["macro",10],8,16],".indexOf(\"sbnation\")?a=\"G-2M5GYNY1YS\":-1\u003C",["escape",["macro",89],8,16],".indexOf(\"theverge.com\")?a=\"G-9GXHZT6RVE\":-1\u003C",["escape",["macro",89],8,16],".indexOf(\"vox.com\")\u0026\u0026(a=\"G-C3QZPB4GVE\");return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return Array.isArray(window.chorusSDK)})();"]
    },{
      "function":"__v",
      "vtp_name":"errorType",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"placement",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.title.replace(\/\\s*-\\s+TODO-UnisonDomain\\.com$\/,\"\")})();"]
    },{
      "function":"__c",
      "vtp_value":"2724"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"chartbeat_authors"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeat_domain"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeat_zone"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",0],8,16],",a=b.querySelectorAll(\"h1,h2,h3,h4,h5,h6\");return a.length?(a=Array.prototype.slice.call(a),a.sort(function(a,b){return a.tagName.localeCompare(b.tagName)}),a[0].innerText):b.innerText})();"]
    },{
      "function":"__e"
    },{
      "function":"__f",
      "vtp_component":"HOST",
      "vtp_stripWww":false
    },{
      "function":"__f",
      "vtp_component":"PATH"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"lazyLoadedAdsEnabled"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"CLASSES",
      "vtp_defaultValue":"more"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"root_domain"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",27],
      "vtp_map":["list",["map","key","http(s?):\\\/\\\/vox\\.com\\\/.*","value","8b24268154d89d965906f3fe03c3cb75"],["map","key","http(s?):\\\/\\\/recode\\.net\\\/.*","value","8b24268154d89d965906f3fe03c3cb75"],["map","key","http(s?):\\\/\\\/eater\\.com\\\/.*","value","5c37a1b74859cf02cde15f8fcc88c528"],["map","key","http(s?):\\\/\\\/polygon\\.com\\\/.*","value","03c21e5bc328c87104a10ce524cc0fb8"],["map","key","http(s?):\\\/\\\/sbnation\\.com\\\/.*","value","14a52ece7f8e8811ff7b59763fb65fe3"],["map","key","http(s?):\\\/\\\/bannersociety\\.com\\\/.*","value","14a52ece7f8e8811ff7b59763fb65fe3"],["map","key","http(s?):\\\/\\\/theverge\\.com\\\/.*","value","d588142387a65e9372652547c863cef3"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":5,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",74],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",15],":",["macro",71],["macro",75]],
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":81
    },{
      "function":"__ua",
      "priority":5,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"comment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",15],":comment:",["macro",91]],
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]],["map","index","2","dimension",["macro",15]],["map","index","3","dimension",["macro",48]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":111
    },{
      "function":"__ua",
      "priority":3,
      "vtp_trackingId":["macro",23],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]]],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":true,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_socialNetwork":["macro",24],
      "vtp_socialAction":["macro",25],
      "vtp_socialActionTarget":["macro",26],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":73
    },{
      "function":"__ua",
      "priority":3,
      "vtp_trackingId":["macro",23],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","27","dimension",["macro",40]],["map","index","2","dimension",["macro",15]],["map","index","33","dimension",["macro",68]]],
      "vtp_useDebugVersion":false,
      "vtp_autoLinkDomains":["macro",1],
      "vtp_enableLinkId":true,
      "vtp_decorateFormsAutoLink":true,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_useHashAutoLink":false,
      "vtp_enableEcommerce":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]],["map","fieldName","page","value",["macro",67]],["map","fieldName","title","value",["macro",69]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":78
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",77],":",["macro",15],":",["macro",79],":",["macro",80]],
      "vtp_eventLabel":["template",["macro",77],":",["macro",6],":",["macro",15],":",["macro",79],":",["macro",80]],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":84
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",79],":more"],
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":104
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"rss",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","click:rss:",["macro",4]],
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":106
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"feature:bottom:promotion",
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":121
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"poll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:poll:vote",
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":123
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"poll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:poll:return",
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","4","dimension",["macro",16]],["map","index","2","dimension",["macro",15]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":124
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"poll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:poll:view",
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":125
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:citybox",
      "vtp_eventLabel":["macro",4],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":148
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",93],
      "vtp_eventLabel":["macro",94],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",95],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","27","dimension",["macro",40]],["map","index","33","dimension",["macro",68]],["map","index","20","dimension",["macro",17]],["map","index","4","dimension",["macro",16]],["map","index","5","dimension",["macro",18]],["map","index","10","dimension",["macro",19]],["map","index","11","dimension",["macro",20]],["map","index","12","dimension",["macro",10]],["map","index","16","dimension",["macro",41]],["map","index","17","dimension",["macro",42]],["map","index","41","dimension",["macro",96]],["map","index","42","dimension",["macro",97]],["map","index","43","dimension",["macro",98]],["map","index","44","dimension",["macro",99]],["map","index","45","dimension",["macro",100]],["map","index","46","dimension",["macro",101]],["map","index","47","dimension",["macro",102]],["map","index","48","dimension",["macro",103]],["map","index","49","dimension",["macro",104]],["map","index","53","dimension",["macro",56]],["map","index","55","dimension",["macro",21]],["map","index","3","dimension",["macro",48]],["map","index","8","dimension",["macro",50]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":149
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",4],
      "vtp_enableLinkId":true,
      "vtp_timingCategory":"privacy",
      "vtp_timingVar":"Time to Click",
      "vtp_timingValue":["macro",106],
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "vtp_enableGA4Schema":false,
      "tag_id":174
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"breaking-news",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",9],
      "vtp_eventLabel":["macro",4],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","10","dimension",["macro",19]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":429
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",92],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",93],
      "vtp_eventLabel":["macro",94],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","5","dimension",["macro",18]],["map","index","10","dimension",["macro",19]],["map","index","11","dimension",["macro",20]],["map","index","12","dimension",["macro",10]],["map","index","20","dimension",["macro",17]],["map","index","24","dimension",["macro",95]],["map","index","55","dimension",["macro",21]],["map","index","8","dimension",["macro",50]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":433
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",93],
      "vtp_eventLabel":["macro",94],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","5","dimension",["macro",18]],["map","index","10","dimension",["macro",19]],["map","index","11","dimension",["macro",20]],["map","index","12","dimension",["macro",10]],["map","index","20","dimension",["macro",17]],["map","index","24","dimension",["macro",95]],["map","index","55","dimension",["macro",21]],["map","index","8","dimension",["macro",50]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":435
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"toaster",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:toaster",
      "vtp_eventLabel":["macro",4],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","10","dimension",["macro",19]],["map","index","20","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":463
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_eventCategory":"article-footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":true,
      "vtp_eventAction":["macro",9],
      "vtp_eventLabel":["macro",4],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","10","dimension",["macro",19]],["map","index","20","dimension",["macro",17]]],
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":465
    },{
      "function":"__ua",
      "priority":2,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":true,
      "vtp_eventAction":["template","link:",["macro",7],["macro",75]],
      "vtp_eventLabel":["macro",81],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":85
    },{
      "function":"__ua",
      "priority":2,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",72],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",8],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","click:",["macro",7],["macro",75]],
      "vtp_eventLabel":["macro",81],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","5","dimension",["macro",18]],["map","index","8","dimension",["macro",50]],["map","index","20","dimension",["macro",17]],["map","index","10","dimension",["macro",19]],["map","index","11","dimension",["macro",20]],["map","index","12","dimension",["macro",10]],["map","index","55","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":92
    },{
      "function":"__ua",
      "priority":2,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"product-card",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"view:product-card",
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":458
    },{
      "function":"__ua",
      "priority":1,
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",1],
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]],["map","fieldName","hitCallback","value",["macro",30]],["map","fieldName","campaignMedium","value","social"],["map","fieldName","campaignSource","value","facebook"],["map","fieldName","title","value",["macro",69]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",17]],["map","index","26","dimension",["macro",37]],["map","index","18","dimension",["macro",38]],["map","index","19","dimension",["macro",39]],["map","index","27","dimension",["macro",40]],["map","index","16","dimension",["macro",41]],["map","index","17","dimension",["macro",42]],["map","index","12","dimension",["macro",10]],["map","index","13","dimension",["macro",43]],["map","index","14","dimension",["macro",44]],["map","index","15","dimension",["macro",45]],["map","index","2","dimension",["macro",15]],["map","index","22","dimension",["macro",84]],["map","index","21","dimension",["macro",85]],["map","index","11","dimension",["macro",20]],["map","index","9","dimension",["macro",47]],["map","index","3","dimension",["macro",48]],["map","index","4","dimension",["macro",16]],["map","index","6","dimension",["macro",86]],["map","index","5","dimension",["macro",18]],["map","index","8","dimension",["macro",50]],["map","index","1","dimension",["macro",14]],["map","index","10","dimension",["macro",19]],["map","index","7","dimension",["macro",51]],["map","index","29","dimension",["macro",87]],["map","index","34","dimension",["macro",53]],["map","index","25","dimension",["macro",54]],["map","index","53","dimension",["macro",56]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":100
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"outbound",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",11],
      "vtp_eventLabel":["macro",12],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]],["map","index","5","dimension",["macro",18]],["map","index","10","dimension",["macro",19]],["map","index","11","dimension",["macro",20]],["map","index","12","dimension",["macro",10]],["map","index","55","dimension",["macro",21]],["map","index","22","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "tag_id":75
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"100",
      "tag_id":76
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",1],
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]],["map","fieldName","hitCallback","value",["macro",30]],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","campaignSource","value",["macro",33]],["map","fieldName","campaignMedium","value",["macro",34]],["map","fieldName","campaignName","value",["macro",35]],["map","fieldName","campaignContent","value",["macro",36]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",17]],["map","index","26","dimension",["macro",37]],["map","index","18","dimension",["macro",38]],["map","index","19","dimension",["macro",39]],["map","index","27","dimension",["macro",40]],["map","index","16","dimension",["macro",41]],["map","index","17","dimension",["macro",42]],["map","index","12","dimension",["macro",10]],["map","index","13","dimension",["macro",43]],["map","index","14","dimension",["macro",44]],["map","index","15","dimension",["macro",45]],["map","index","2","dimension",["macro",15]],["map","index","21","dimension",["macro",46]],["map","index","11","dimension",["macro",20]],["map","index","9","dimension",["macro",47]],["map","index","3","dimension",["macro",48]],["map","index","4","dimension",["macro",16]],["map","index","6","dimension",["macro",49]],["map","index","5","dimension",["macro",18]],["map","index","8","dimension",["macro",50]],["map","index","1","dimension",["macro",14]],["map","index","10","dimension",["macro",19]],["map","index","7","dimension",["macro",51]],["map","index","29","dimension",["macro",52]],["map","index","34","dimension",["macro",53]],["map","index","25","dimension",["macro",54]],["map","index","50","dimension",["macro",55]],["map","index","53","dimension",["macro",56]],["map","index","54","dimension",["macro",57]],["map","index","23","dimension",["macro",58]],["map","index","33","dimension",["macro",59]],["map","index","24","dimension",["macro",60]],["map","index","55","dimension",["macro",21]],["map","index","22","dimension",["macro",22]],["map","index","28","dimension",["macro",61]],["map","index","61","dimension",["macro",62]],["map","index","62","dimension",["macro",63]],["map","index","63","dimension",["macro",64]],["map","index","111","dimension",["macro",65]],["map","index","64","dimension",["macro",66]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",76],
      "vtp_eventLabel":["macro",11],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":83
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",1],
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",17]],["map","index","26","dimension",["macro",37]],["map","index","18","dimension",["macro",38]],["map","index","19","dimension",["macro",39]],["map","index","27","dimension",["macro",40]],["map","index","16","dimension",["macro",41]],["map","index","17","dimension",["macro",42]],["map","index","12","dimension",["macro",10]],["map","index","13","dimension",["macro",43]],["map","index","14","dimension",["macro",44]],["map","index","15","dimension",["macro",45]],["map","index","2","dimension",["macro",15]],["map","index","21","dimension",["macro",46]],["map","index","11","dimension",["macro",20]],["map","index","9","dimension",["macro",47]],["map","index","3","dimension",["macro",48]],["map","index","4","dimension",["macro",16]],["map","index","6","dimension",["macro",49]],["map","index","5","dimension",["macro",18]],["map","index","8","dimension",["macro",50]],["map","index","1","dimension",["macro",14]],["map","index","10","dimension",["macro",19]],["map","index","7","dimension",["macro",51]],["map","index","34","dimension",["macro",53]],["map","index","25","dimension",["macro",54]],["map","index","53","dimension",["macro",56]],["map","index","54","dimension",["macro",57]],["map","index","23","dimension",["macro",58]],["map","index","33","dimension",["macro",59]],["map","index","24","dimension",["macro",60]],["map","index","55","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":89
    },{
      "function":"__ua",
      "priority":0,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_eventCategory":["macro",73],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":true,
      "vtp_eventAction":["template","click:",["macro",73]],
      "vtp_eventLabel":["macro",83],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":99
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nz4et",
      "tag_id":108
    },{
      "function":"__gcs",
      "metadata":["map"],
      "setup_tags":["list",["tag",28,0]],
      "once_per_load":true,
      "vtp_siteId":"pryr5r37zzkmeutts55nszygji",
      "tag_id":118
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":130
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":138
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"commerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",9],
      "vtp_eventLabel":["macro",4],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]],["map","index","5","dimension",["macro",18]],["map","index","10","dimension",["macro",19]],["map","index","11","dimension",["macro",20]],["map","index","12","dimension",["macro",10]],["map","index","8","dimension",["macro",50]],["map","index","55","dimension",["macro",21]],["map","index","22","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":166
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"contributions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",9],
      "vtp_eventLabel":["macro",4],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",13]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",14]],["map","index","2","dimension",["macro",15]],["map","index","4","dimension",["macro",16]],["map","index","20","dimension",["macro",17]],["map","index","11","dimension",["macro",20]],["map","index","12","dimension",["macro",10]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":424
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ad-content",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:branded:top-logo",
      "vtp_eventLabel":["macro",109],
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":449
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":453
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":460
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"toaster",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:close-toaster",
      "vtp_eventLabel":["macro",27],
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":475
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":492
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",110],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "tag_id":506
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",7],
      "vtp_eventParameters":["list",["map","name","click_text","value",["macro",4]],["map","name","click_url","value",["macro",9]],["map","name","content_id","value",["macro",14]],["map","name","content_type","value",["macro",15]]],
      "vtp_measurementId":["macro",110],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":522
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":"scroll",
      "vtp_eventParameters":["list",["map","name","scroll_depth","value",["template",["macro",111],"% Scroll"]],["map","name","content_id","value",["macro",14]],["map","name","content_type","value",["macro",15]]],
      "vtp_measurementId":["macro",110],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":524
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventName":["macro",80],
      "vtp_eventParameters":["list",["map","name","link_placement","value",["template",["macro",74],["macro",75]]],["map","name","click_text","value",["macro",4]],["map","name","click_url","value",["macro",9]],["map","name","content_id","value",["macro",14]],["map","name","content_type","value",["macro",15]]],
      "vtp_measurementId":["macro",110],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":525
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-K3TK52L","nickname","Deseret zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",89],"deseret",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","ecl"],["map","typeId","ctv"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"]],
      "tag_id":526
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TWPZVJD","nickname","Schema zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",89],"vox|theverge|sbnation|eater|curbed|polygon",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","gaawc"],["map","typeId","awct"],["map","typeId","gaawe"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","html"]],
      "tag_id":527
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-PKS6VGF","nickname","REVOLT zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",89],"revolt\\.tv|revoltdev\\.chorus\\.build",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":528
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-M7SB6S3","nickname","Chicago Sun Times zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",89],"chicago\\.suntimes\\.com|straightdope\\.com",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"],["map","typeId","csm"],["map","typeId","cegg"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"]],
      "tag_id":529
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-KKV6CMW","nickname","DraftKings Nation zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",89],"dknation\\.draftkings\\.com",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","ecl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"]],
      "tag_id":530
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TQN787N","nickname","This Old House zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",89],"thisoldhouse\\.com|thisoldhousedev\\.chorus\\.build|thisoldhouse\\.chorus\\.build",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":531
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4DS4CG","nickname","Funny or Die zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",89],"funnyordie\\.com",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"]],
      "tag_id":532
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-T4ZS8JV","nickname","Chalkbeat zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",89],"chalkbeat\\.org",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","hl"],["map","typeId","ehl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","qpx"],["map","typeId","img"],["map","typeId","e"],["map","typeId","jsm"],["map","typeId","v"],["map","typeId","cl"],["map","typeId","lcl"],["map","typeId","gaawc"],["map","typeId","gaawe"],["map","typeId","gfct"],["map","typeId","automl"],["map","typeId","ga"]],
      "tag_id":533
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WCZVMSF","nickname","The Ringer zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",89],"theringer\\.com",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","gaawc"],["map","typeId","awct"],["map","typeId","gaawe"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","automl"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","ehl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"]],
      "tag_id":534
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-MTK32LD","nickname","The City zone"]],
      "vtp_boundaries":["list",["zb","_cn",["macro",89],"thecity.nyc",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","gaawc"],["map","typeId","awct"],["map","typeId","gaawe"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","automl"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","ehl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"]],
      "tag_id":535
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_127",
      "tag_id":536
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_130",
      "tag_id":537
    },{
      "function":"__cl",
      "tag_id":538
    },{
      "function":"__cl",
      "tag_id":539
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_327",
      "tag_id":540
    },{
      "function":"__cl",
      "tag_id":541
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_381",
      "tag_id":542
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_423",
      "tag_id":543
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_428",
      "tag_id":544
    },{
      "function":"__cl",
      "tag_id":545
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_452",
      "tag_id":546
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".c-product-card",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1434782_457",
      "tag_id":547
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_459",
      "tag_id":548
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_464",
      "tag_id":549
    },{
      "function":"__cl",
      "tag_id":550
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_486",
      "tag_id":551
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,90",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1434782_523",
      "vtp_enableTriggerStartOption":true,
      "tag_id":552
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"https:\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"594981607301768\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);window._fbq.push([\"track\",\"6026192431231\",{value:\"1.00\",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=594981607301768\u0026amp;ev=PixelInitialized\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _comscore=_comscore||[];_comscore.push({c1:\"2\",c2:\"7976662\"});(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.src=\"https:\/\/sb.scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/sb.scorecardresearch.com\/p?c1=2\u0026amp;c2=7976662\u0026amp;cv=2.0\u0026amp;cj=1\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdn0.vox-cdn.com\/packs\/chorus_sdk-789f86740edd88f79bfa.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var c=window[b]||[],d=window.Chorus_SDK||{},e=window[b]={push:function(a){\"function\"===typeof a\u0026\u0026a(d)}};c.forEach(function(a){e.push(a)})})(\"chorusSDK\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjqi\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjql\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjqm\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":114
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjqo\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":115
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};for(var d=0;d\u003Ca.methods.length;d++){var e=a.methods[d];a[e]=a.factory(e)}a.load=function(c){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+c+\"\/sambaTag.js\";c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-vox\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};for(var d=0;d\u003Ca.methods.length;d++){var e=a.methods[d];a[e]=a.factory(e)}a.load=function(c){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+c+\"\/sambaTag.js\";c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-polygon\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};for(var d=0;d\u003Ca.methods.length;d++){var e=a.methods[d];a[e]=a.factory(e)}a.load=function(c){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+c+\"\/sambaTag.js\";c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-sbNation\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};for(var d=0;d\u003Ca.methods.length;d++){var e=a.methods[d];a[e]=a.factory(e)}a.load=function(c){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+c+\"\/sambaTag.js\";c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-theRinger\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};for(var d=0;d\u003Ca.methods.length;d++){var e=a.methods[d];a[e]=a.factory(e)}a.load=function(c){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+c+\"\/sambaTag.js\";c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-voxSubSection\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Ch3 id=\"972430\"\u003E\u003Ca href=\"https:\/\/disneyplus.bn5x.net\/c\/482924\/972430\/9358\"\u003E\u003C\/a\u003E\u003C\/h3\u003E\n\n\u003Cimg height=\"0\" width=\"0\" src=\"https:\/\/imp.pxf.io\/i\/482924\/972430\/9358\" style=\"position:absolute;visibility:hidden;\" border=\"0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":483
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Ch3 id=\"972430\"\u003E\u003Ca href=\"https:\/\/disneyplus.bn5x.net\/c\/482924\/972430\/9358\"\u003E\u003C\/a\u003E\u003C\/h3\u003E\n\n\u003Cimg height=\"0\" width=\"0\" src=\"https:\/\/imp.pxf.io\/i\/482924\/972430\/9358\" style=\"position:absolute;visibility:hidden;\" border=\"0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":502
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.init({customerId:\"8b24268154d89d965906f3fe03c3cb75\",iscustom:!0,autoTrackPageview:!1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":509
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.track(\"pageview\",{url:\"",["escape",["macro",27],7],"\",onSuccess:function(){console.log(\"trackPageView success\")},onError:function(){console.log(\"trackPageView failure\")}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":512
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar atsScript=document.createElement(\"script\");atsScript.onload=function(){window.ats.start({placementID:13292,storageType:\"localStorage\",detectionType:\"scrapeAndUrl\",urlParameter:\"env\",cssSelectors:[\"input[type\\x3dtext]\",\"input[type\\x3demail]\"],logging:\"error\"})};atsScript.src=\"https:\/\/ats.rlcdn.com\/ats.js\";document.body.appendChild(atsScript);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":516
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.linkClick"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"Terms of Use"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_381($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"go\\.redirect|amzn|www\\.amazon\\.co|linksynergy|anrdoezrs|fave\\.co|humble\\.com|rover\\.com|sbnation\\.fanatics\\.com|breakingt\\.com|espn\\.zibu\\.net|bestbuy|fanatics|goto\\.walmart\\.com|fubo\\.tv|uncommongoods|walmart\\.com\/ip\/|tidd\\.ly|awin1\\.com|google\\.com\/shopping\/product|disneyplus\\.bn5x|go\\.web\\.plus\\.espn\\.com|adidas\\.njih\\.net\/rxA3Q|shop.links\\.co|api\\.narrativ|kqzyfj\\.com\/click|tkqlhce|prf\\.hn\/click|ubi\\.li|store\\.ubi|bookshop\\.org|shrsl\\.com|shareasale\\.com|go\\.skimresources",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_327($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"vox\\.memberful\\.com\\\/checkout|vox\\.memberful\\.com\\\/account",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"vox"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_423($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"social"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"apps.voxmedia.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"trackingPixel"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"virtualPageView"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",76],
      "arg1":"link:related"
    },{
      "function":"_eq",
      "arg0":["macro",82],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",68],
      "arg1":"facebook"
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"social-buttons__more"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"c-entry-update-bar__follow|rss"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_130($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"recode|eater|verge|polygon"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"chalkbeat\\.org",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"Post|Preview"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"la.curbed.com\/maps\/things-to-do-kids-los-angeles"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"recirc-module__link"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"css-vote-button"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"pds-return-poll"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"css-view-results"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"homepage"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"eater"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"theverge"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"city-boxes|city-title",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",93],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",93],
      "arg1":"expand:"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"analyticsEvent"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"GAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"auth-0"
    },{
      "function":"_cn",
      "arg0":["macro",93],
      "arg1":"auth-0"
    },{
      "function":"_cn",
      "arg0":["macro",94],
      "arg1":"auth-0"
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"piano"
    },{
      "function":"_cn",
      "arg0":["macro",93],
      "arg1":"piano"
    },{
      "function":"_cn",
      "arg0":["macro",94],
      "arg1":"piano"
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"paywall"
    },{
      "function":"_cn",
      "arg0":["macro",93],
      "arg1":"paywall"
    },{
      "function":"_cn",
      "arg0":["macro",94],
      "arg1":"paywall"
    },{
      "function":"_cn",
      "arg0":["macro",88],
      "arg1":"privacy-consent__button"
    },{
      "function":"_css",
      "arg0":["macro",107],
      "arg1":".c-breaking-news__content *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_428($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",108],
      "arg1":"c-disclaimer-image c-disclaimer-image--brand"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"Please consider making a contribution to Vox today|with a financial contribution from as little as \\$\\7|Chip in today|Contribute today from as little as",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_452($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_457($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"Comments$|Comment$"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_459($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"sbnation"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"p-button c-toaster__cta"
    },{
      "function":"_css",
      "arg0":["macro",107],
      "arg1":".c-article-footer *"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_464($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",107],
      "arg1":".c-toaster__close-wrapper *"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":":policy:"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"Russell Brandom"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"deseret\\.com|chalkbeat\\.com|chicago\\.suntimes\\.com|straightdope\\.com|funnyordie\\.com|themcelroy\\.family|revolt\\.tv|thecity\\.nyc|theringer\\.com|thisoldhouse\\.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_523($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"theverge|vox|polygon|curbed|eater|sbnation"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"embedPageView"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"chicago\\.suntimes\\.com"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"deseret",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"thisoldhouse",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"funnyordie\\.com"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"revolt\\.tv"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"eater"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"polygon"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"verge"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"recode"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"vox"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"www.vox.com\/$|vox--com.sbn.sb8.k8s.sbndev.net\/|vox--com.sbn.sb8.k8s.sbndev.net\/culture\/2019\/1\/6\/18171367\/golden-globes-2019-regina-king-acceptance-speech|www.vox.com\/2014\/12\/31\/7474935\/best-movies-2014",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"polygon"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"sbnation"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"theringer"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"www.vox.com\/culture",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"theverge.com\/2021\/2\/2\/22262159\/disney-plus-espn-ad-free-hulu-bundle-available-price|theverge.com\/2021\/2\/1\/22260921\/disney-plus-wakanda-show-ryan-coogler-black-panther-proximity-media-marvel|polygon.com\/disney-plus\/2021\/2\/1\/22255197\/disney-plus-new-movies-tv-watch-february-2021|polygon.com\/disney-plus\/2021\/2\/1\/22260907\/black-panther-wakanda-tv-series|disney-plus\/22351151\/disney-plus-new-movies-tv-watch-april-2021"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"disneyplus\\.bn5x"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"theverge.com\/2021\/2\/2\/22262159\/disney-plus-espn-ad-free-hulu-bundle-available-price|theverge.com\/2021\/2\/1\/22260921\/disney-plus-wakanda-show-ryan-coogler-black-panther-proximity-media-marvel|polygon.com\/disney-plus\/2021\/2\/1\/22255197\/disney-plus-new-movies-tv-watch-february-2021|polygon.com\/disney-plus\/2021\/2\/1\/22260907\/black-panther-wakanda-tv-series"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_486($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"disney-plus\/2021\/3\/1\/22291243\/disney-plus-new-movies-tv-watch-march-2021|\/2021\/3\/17\/22336075\/avengers-falcon-winter-soldier-backstory-origin-marvel-comics|\/22337849\/falcon-winter-soldier-episode-1-recap-explainer-marvel-mcu|disney-plus\/22351151\/disney-plus-new-movies-tv-watch-april-2021"
    },{
      "function":"_cn",
      "arg0":["macro",89],
      "arg1":"vox.com"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"vox|eater|polygon|recode|sbnation|verge",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1],["add",23]],
    [["if",1,2,3],["add",23]],
    [["if",15],["unless",12,13,14],["add",2]],
    [["if",16],["add",24,25,41,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70]],
    [["if",16,17],["unless",18,19],["add",26,28,72,73]],
    [["if",22],["unless",21],["add",3,73]],
    [["if",24],["unless",23],["add",0]],
    [["if",1,25],["add",27]],
    [["if",1],["unless",4],["add",4],["block",23]],
    [["if",1],["unless",5],["add",19,44],["block",23]],
    [["if",1],["unless",5,6],["add",20,42],["block",23,19,44]],
    [["if",1],["unless",27],["add",29]],
    [["if",16,17,28],["unless",18],["add",22],["block",73]],
    [["if",1,30],["add",5]],
    [["if",1,31,32],["add",6]],
    [["if",16],["unless",18,33],["add",30]],
    [["if",36,37],["add",1]],
    [["if",16,38],["add",31]],
    [["if",1,39],["add",7]],
    [["if",1,40],["add",8]],
    [["if",1,41],["add",9]],
    [["if",1,42],["add",10]],
    [["if",16,43,44],["add",32]],
    [["if",16,43,45],["add",33]],
    [["if",37,46],["add",11]],
    [["if",50],["unless",47,48,49],["add",12]],
    [["if",51],["add",12]],
    [["if",1,7,8],["add",34],["block",23]],
    [["if",37,61],["add",13]],
    [["if",1,9,10,11],["add",35],["block",23]],
    [["if",1,62,63],["add",14]],
    [["if",50,55,56,57],["add",15],["block",12]],
    [["if",50,58,59,60],["add",16],["block",12]],
    [["if",37,64],["add",36]],
    [["if",1,65,66],["add",37]],
    [["if",67,68],["add",21]],
    [["if",1,69,70],["add",38]],
    [["if",16,71],["add",38]],
    [["if",37,72],["add",17]],
    [["if",1,73,74],["add",18]],
    [["if",37,75],["add",39]],
    [["if",16,76,77],["add",40]],
    [["if",79,80],["add",43]],
    [["if",16,81],["add",59]],
    [["if",82],["add",71]],
    [["if",83],["add",72]],
    [["if",82,89],["add",74]],
    [["if",16,90],["unless",18],["add",75]],
    [["if",16,91],["unless",18],["add",76]],
    [["if",16,92],["unless",18],["add",77]],
    [["if",16,93],["unless",18],["add",78]],
    [["if",16,94,95],["add",79]],
    [["if",16,43,96],["add",80]],
    [["if",16,43,97],["add",81]],
    [["if",16,43,98],["add",82]],
    [["if",16,94,99],["add",83]],
    [["if",16,100],["add",84]],
    [["if",1,101,102,103],["add",84]],
    [["if",16,104],["add",85]],
    [["if",16,105],["add",86,87]],
    [["if",16,106],["add",88]],
    [["if",16,20],["block",26,28]],
    [["if",16,26],["block",28]],
    [["if",16,29],["block",22,72]],
    [["if",16],["unless",34],["block",30,32,33,72,75,76,77,78,79,80,81,82,83]],
    [["if",16,35],["block",30,72,73]],
    [["if",50,52,53,54],["block",12]],
    [["if",16,78],["block",41,42,43,44]],
    [["if",16,84],["block",72]],
    [["if",16,85],["block",72,73]],
    [["if",16,86],["block",72,73]],
    [["if",16,87],["block",72]],
    [["if",16,88],["block",73]]]
},
"runtime":[[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__twitter_website_tag"]}

};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;fa=ja.a;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=ea,ma=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Si=b.prototype},na=this||self,qa=function(a){return a};var ra=function(a,b){this.g=a;this.o=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ta=function(){this.s={};this.D=!1;this.L={}},ua=function(a,b){var c=[],d;for(d in a.s)if(a.s.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ta.prototype.get=function(a){return this.s["dust."+a]};ta.prototype.set=function(a,b){this.D||(a="dust."+a,this.L.hasOwnProperty(a)||(this.s[a]=b))};
ta.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var va=function(a,b){b="dust."+b;a.D||a.L.hasOwnProperty(b)||delete a.s[b]};ta.prototype.ab=function(){this.D=!0};var p=function(a){this.o=new ta;this.g=[];this.s=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};k=p.prototype;k.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof p?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
k.set=function(a,b){if(!this.s)if("length"===a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else sa(a)?this.g[Number(a)]=b:this.o.set(a,b)};k.get=function(a){return"length"===a?this.length():sa(a)?this.g[Number(a)]:this.o.get(a)};k.length=function(){return this.g.length};k.$a=function(){for(var a=ua(this.o,1),b=0;b<this.g.length;b++)a.push(b+"");return new p(a)};var wa=function(a,b){sa(b)?delete a.g[Number(b)]:va(a.o,b)};k=p.prototype;
k.pop=function(){return this.g.pop()};k.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};k.shift=function(){return this.g.shift()};k.splice=function(a,b,c){return new p(this.g.splice.apply(this.g,arguments))};k.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};k.has=function(a){return sa(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};k.ab=function(){this.s=!0;Object.freeze(this.g);this.o.ab()};var xa=function(){function a(f,g){if(b[f]){if(b[f].Sc+g>b[f].max)throw Error("Quota exceeded");b[f].Sc+=g}}var b={},c=void 0,d=void 0,e={di:function(f){c=f},Qf:function(){c&&a(c,1)},fi:function(f){d=f},cb:function(f){d&&a(d,f)},wi:function(f,g){b[f]=b[f]||{Sc:0};b[f].max=g},Kh:function(f){return b[f]&&b[f].Sc||0},reset:function(){b={}},yh:a};e.onFnConsume=e.di;e.consumeFn=e.Qf;e.onStorageConsume=e.fi;e.consumeStorage=e.cb;e.setMax=e.wi;e.getConsumed=e.Kh;e.reset=e.reset;e.consume=e.yh;return e};var za=function(a,b){this.s=a;this.M=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new ta;this.g=this.L=void 0};za.prototype.add=function(a,b){Aa(this,a,b,!1)};var Aa=function(a,b,c,d){if(!a.o.D)if(a.s.cb(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.L["dust."+b]=!0}else a.o.set(b,c)};
za.prototype.set=function(a,b){this.o.D||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.cb(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};za.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};za.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ba=function(a){var b=new za(a.s,a);a.L&&(b.L=a.L);b.M=a.M;b.g=a.g;return b};var Ca={},Da=function(a,b){Ca[a]=Ca[a]||[];Ca[a][b]=!0},Ea=function(a){for(var b=[],c=Ca[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ja=function(){},La=function(a){return"function"==typeof a},A=function(a){return"string"==typeof a},Ma=function(a){return"number"==typeof a&&!isNaN(a)},Na=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Da("TAGGING",4):Da("TAGGING",5);return b},Pa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Qa=function(a,b){if(a&&Na(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ra=function(a,b){if(!Ma(a)||!Ma(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ta=function(a,b){for(var c=new Sa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ua=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Va=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Xa=
function(a){return Math.round(Number(a))||0},Ya=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Za=function(a){var b=[];if(Na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},$a=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ab=function(){return(new Date).getTime()},Sa=function(){this.prefix="gtm.";this.values={}};Sa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Sa.prototype.get=function(a){return this.values[this.prefix+a]};
var bb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},db=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},hb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},ib=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},kb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},lb=function(a,b){var c=F;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Pa(b,d))return}return d},mb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ob=/^\w{1,9}$/,pb=function(a){var b=[];Ua(a,function(c,d){ob.test(c)&&d&&b.push(c)});return b.join(",")};var qb=function(a,b){ta.call(this);this.M=a;this.Ma=b};ma(qb,ta);qb.prototype.toString=function(){return this.M};qb.prototype.$a=function(){return new p(ua(this,1))};qb.prototype.g=function(a,b){a.s.Qf();return this.Ma.apply(new rb(this,a),Array.prototype.slice.call(arguments,1))};qb.prototype.o=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var ub=function(a,b){for(var c,d=0;d<b.length&&!(c=sb(a,b[d]),c instanceof ra);d++);return c},sb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof qb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.L;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},rb=function(a,b){this.o=a;this.g=b},G=function(a,b){var c=a.g;return Na(b)?sb(c,b):b},H=function(a){return a.o.M};var wb=function(){ta.call(this)};ma(wb,ta);wb.prototype.$a=function(){return new p(ua(this,1))};var xb={control:function(a,b){return new ra(a,G(this,b))},fn:function(a,b,c){var d=this.g,e=G(this,b);if(!(e instanceof p))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.cb(a.length+f.length);return new qb(a,function(){return function(g){var h=Ba(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=G(this,l[m]),l[m]instanceof ra)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new p(l));var r=ub(h,f);if(r instanceof ra)return"return"===r.g?r.o:r}}())},list:function(a){var b=this.g.s;b.cb(arguments.length);for(var c=new p,d=0;d<arguments.length;d++){var e=G(this,arguments[d]);"string"===typeof e&&b.cb(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new wb,d=0;d<arguments.length-1;d+=2){var e=G(this,arguments[d])+"",f=G(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.cb(g);c.set(e,f)}return c},undefined:function(){}};var yb=function(){this.s=xa();this.g=new za(this.s)},zb=function(a,b,c){var d=new qb(b,c);d.ab();a.g.set(b,d)};yb.prototype.Wc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};yb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=sb(this.g,arguments[c]);return b};yb.prototype.D=function(a,b){var c=Ba(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=sb(c,arguments[e]);return d};var Ab=function(a){if(a instanceof Ab)return a;this.Fa=a};Ab.prototype.toString=function(){return String(this.Fa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Bb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Cb=function(a){if(null==a)return String(a);var b=Bb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Db=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Eb=function(a){if(!a||"object"!=Cb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Db(a,"constructor")&&!Db(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Db(a,b)},J=function(a,b){var c=b||("array"==Cb(a)?[]:{}),d;for(d in a)if(Db(a,d)){var e=a[d];"array"==Cb(e)?("array"!=Cb(c[d])&&(c[d]=[]),c[d]=J(e,c[d])):Eb(e)?(Eb(c[d])||(c[d]={}),c[d]=J(e,c[d])):c[d]=e}return c};var Gb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=ua(h,1),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=Pa(d,h);if(-1<l)return e[l];if(h instanceof p){var m=[];d.push(h);e.push(m);for(var n=h.$a(),q=0;q<n.length();q++)m[n.get(q)]=g(h.get(n.get(q)));return m}if(h instanceof wb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof qb){var t=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Fb(u[v],b,!!c);var x=b?b.s:xa(),z=new za(x);
b&&(z.g=b.g);return g(h.g.apply(h,[z].concat(u)))};d.push(h);e.push(t);f(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Fb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Pa(d,
h);if(-1<l)return e[l];if(Na(h)||Va(h)){var m=new p([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(Eb(h)){var q=new wb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new qb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Gb(G(this,v[x]),b,!!c);return g((0,this.g.M)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h;};return g(a)};var Hb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Ib=function(a){if(void 0===a||Na(a)||Eb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Jb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof p)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new p(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new p(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new p(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Hb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):wa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new p(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Hb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):wa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Lb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Mb=new ra("break"),Nb=new ra("continue"),Ob=function(a,b){return G(this,a)+G(this,b)},Pb=function(a,b){return G(this,a)&&G(this,b)},Ub=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(!(c instanceof p))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Pa(Lb,b)){var d=Gb(c);return Fb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof p){if(a.has(b)){var e=a.get(b);if(e instanceof qb){var f=Hb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Pa(Jb.supportedMethods,b)){var g=
Hb(c);g.unshift(this.g);return Jb[b].apply(a,g)}}if(a instanceof qb||a instanceof wb){if(a.has(b)){var h=a.get(b);if(h instanceof qb){var l=Hb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof qb?a.M:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Hb(c))}if(a instanceof Ab&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Vb=function(a,b){a=G(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=G(this,b);c.set(a,d);return d},Wb=function(a){var b=Ba(this.g),c=ub(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},Xb=function(){return Mb},Yb=function(a){for(var b=G(this,a),c=0;c<b.length;c++){var d=G(this,b[c]);if(d instanceof ra)return d}},Zb=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=G(this,arguments[c+1]);Aa(b,d,e,!0)}}},$b=function(){return Nb},ac=function(a,b,c){var d=new p;b=G(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,G(this,f))},bc=function(a,b){return G(this,a)/G(this,b)},cc=function(a,b){a=G(this,a);b=G(this,b);var c=a instanceof Ab,d=b instanceof Ab;return c||d?c&&d?a.Fa==b.Fa:!1:a==b},ec=function(a){for(var b,c=0;c<arguments.length;c++)b=
G(this,arguments[c]);return b};function fc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=ub(f,d);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}}}function gc(a,b,c){if("string"===typeof b)return fc(a,function(){return b.length},function(f){return f},c);if(b instanceof wb||b instanceof p||b instanceof qb){var d=b.$a(),e=d.length();return fc(a,function(){return e},function(f){return d.get(f)},c)}}
var hc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return gc(function(e){d.set(a,e);return d},b,c)},ic=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return gc(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},jc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return gc(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},lc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return kc(function(e){d.set(a,e);return d},b,c)},mc=
function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return kc(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},nc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return kc(function(e){var f=Ba(d);f.add(a,e);return f},b,c)};
function kc(a,b,c){if("string"===typeof b)return fc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof p)return fc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var oc=function(a,b,c,d){function e(n,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,n.get(t))}}var f=G(this,a);if(!(f instanceof p))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=G(this,d);var h=Ba(g);for(e(g,h);sb(h,b);){var l=ub(h,d);if(l instanceof ra){if("break"===l.g)break;if("return"===l.g)return l}var m=Ba(g);e(h,m);sb(m,c);h=m}},pc=function(a){a=G(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},qc=function(a,b){var c;a=G(this,a);b=G(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof wb||a instanceof p||a instanceof qb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof Ab)return;return c},rc=function(a,b){return G(this,a)>G(this,
b)},sc=function(a,b){return G(this,a)>=G(this,b)},tc=function(a,b){a=G(this,a);b=G(this,b);a instanceof Ab&&(a=a.Fa);b instanceof Ab&&(b=b.Fa);return a===b},uc=function(a,b){return!tc.call(this,a,b)},vc=function(a,b,c){var d=[];G(this,a)?d=G(this,b):c&&(d=G(this,c));var e=ub(this.g,d);if(e instanceof ra)return e},wc=function(a,b){return G(this,a)<G(this,b)},xc=function(a,b){return G(this,a)<=G(this,b)},yc=function(a,b){return G(this,a)%G(this,b)},zc=function(a,b){return G(this,a)*G(this,b)},Ac=function(a){return-G(this,
a)},Bc=function(a){return!G(this,a)},Cc=function(a,b){return!cc.call(this,a,b)},Dc=function(){return null},Ec=function(a,b){return G(this,a)||G(this,b)},Fc=function(a,b){var c=G(this,a);G(this,b);return c},Gc=function(a){return G(this,a)},Hc=function(a){return Array.prototype.slice.apply(arguments)},Ic=function(a){return new ra("return",G(this,a))},Jc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
qb||a instanceof p||a instanceof wb)&&a.set(b,c);return c},Nc=function(a,b){return G(this,a)-G(this,b)},Oc=function(a,b,c){a=G(this,a);var d=G(this,b),e=G(this,c);if(!Na(d)||!Na(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===G(this,d[h]))if(f=G(this,e[h]),f instanceof ra){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=G(this,e[e.length-1]),f instanceof ra&&("return"===f.g||"continue"===
f.g)))return f},Pc=function(a,b,c){return G(this,a)?G(this,b):G(this,c)},Qc=function(a){a=G(this,a);return a instanceof qb?"function":typeof a},Rc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Sc=function(a,b,c,d){var e=G(this,d);if(G(this,c)){var f=ub(this.g,e);if(f instanceof ra){if("break"===f.g)return;if("return"===f.g)return f}}for(;G(this,a);){var g=ub(this.g,e);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}G(this,
b)}},Tc=function(a){return~Number(G(this,a))},Uc=function(a,b){return Number(G(this,a))<<Number(G(this,b))},Vc=function(a,b){return Number(G(this,a))>>Number(G(this,b))},Wc=function(a,b){return Number(G(this,a))>>>Number(G(this,b))},Xc=function(a,b){return Number(G(this,a))&Number(G(this,b))},Yc=function(a,b){return Number(G(this,a))^Number(G(this,b))},Zc=function(a,b){return Number(G(this,a))|Number(G(this,b))};var ad=function(){this.g=new yb;$c(this)};ad.prototype.Wc=function(a){return bd(this.g.o(a))};
var dd=function(a,b){return bd(cd.g.D(a,b))},$c=function(a){var b=function(d,e){var f=a.g,g=String(e);xb.hasOwnProperty(d)&&zb(f,g||d,xb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){zb(a.g,String(d),e)};c(0,Ob);c(1,Pb);c(2,Ub);c(3,Vb);c(53,Wb);c(4,Xb);c(5,Yb);c(52,Zb);c(6,$b);c(9,Yb);c(50,ac);c(10,bc);c(12,cc);c(13,ec);c(47,hc);c(54,ic);c(55,jc);c(63,oc);c(64,lc);c(65,mc);c(66,nc);c(15,pc);c(16,qc);c(17,qc);c(18,rc);c(19,sc);c(20,tc);c(21,uc);c(22,vc);
c(23,wc);c(24,xc);c(25,yc);c(26,zc);c(27,Ac);c(28,Bc);c(29,Cc);c(45,Dc);c(30,Ec);c(32,Fc);c(33,Fc);c(34,Gc);c(35,Gc);c(46,Hc);c(36,Ic);c(43,Jc);c(37,Nc);c(38,Oc);c(39,Pc);c(40,Qc);c(41,Rc);c(42,Sc);c(58,Tc);c(57,Uc);c(60,Vc);c(61,Wc);c(56,Xc);c(62,Yc);c(59,Zc)},fd=function(){var a=cd,b=ed();zb(a.g,"require",b)},gd=function(a,b){a.g.g.M=b};
function bd(a){if(a instanceof ra||a instanceof qb||a instanceof p||a instanceof wb||a instanceof Ab||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var hd=function(){var a=function(b){return{toString:function(){return b}}};return{sg:a("consent"),ld:a("consent_always_fire"),Ge:a("convert_case_to"),He:a("convert_false_to"),Ie:a("convert_null_to"),Je:a("convert_true_to"),Ke:a("convert_undefined_to"),Ei:a("debug_mode_metadata"),Za:a("function"),fh:a("instance_name"),hh:a("live_only"),ih:a("malware_disabled"),jh:a("metadata"),Hi:a("original_activity_id"),Ii:a("original_vendor_template_id"),lh:a("once_per_event"),Af:a("once_per_load"),Ki:a("priority_override"),
Li:a("respected_consent_types"),Hf:a("setup_tags"),If:a("tag_id"),Jf:a("teardown_tags")}}();
var id=[],jd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},kd=function(a){return jd[a]},rd=/[\x00\x22\x26\x27\x3c\x3e]/g;var vd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,wd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},xd=function(a){return wd[a]};id[7]=function(a){return String(a).replace(vd,xd)};
id[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(vd,xd)+"'"}};var Fd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Gd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Hd=function(a){return Gd[a]};id[16]=function(a){return a};var Jd;
var Kd=[],Ld=[],Md=[],Nd=[],Od=[],Pd={},Qd,Rd,Sd,Td=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ud=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Pd[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Of&&b.Of(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===hd.ld.toString()&&a[f]){}return void 0!==d?d(e):Jd(c,e,b)},Wd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Vd(a[e],b,c));return d},Vd=function(a,b,c){if(Na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Vd(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Kd[f];if(!g||b.he(g))return;c[f]=!0;try{var h=Wd(g,b,c);h.vtp_gtmEventId=b.id;d=Ud(h,b);Sd&&(d=Sd.zh(d,h))}catch(z){b.bg&&b.bg(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Vd(a[l],b,c)]=Vd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Vd(a[n],b,c);Rd&&(m=m||q===Rd.Ic);d.push(q)}return Rd&&m?Rd.Ch(d):d.join("");case "escape":d=Vd(a[1],b,c);if(Rd&&Na(a[1])&&"macro"===a[1][0]&&Rd.Sh(a))return Rd.ii(d);d=
String(d);for(var r=2;r<a.length;r++)id[a[r]]&&(d=id[a[r]](d));return d;case "tag":var t=a[1];if(!Nd[t])throw Error("Unable to resolve tag reference "+t+".");return d={Wf:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Xd(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Xd=function(a,b,c){try{return Qd(Wd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var ae=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};ma(ae,Error);function be(a,b){if(Na(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)be(a[c],b[c])}};var ce=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};ma(ce,Error);var ee=function(){return function(a,b){a instanceof ce||(a=new ce(a,de));b&&a.g.push(b);throw a;}};function de(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ma(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var he=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=fe(a),f=0;f<Ld.length;f++){var g=Ld[f],h=ge(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var n=[],q=0;q<Nd.length;q++)c[q]&&!d[q]&&(n[q]=!0);return n},ge=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},fe=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Xd(Md[c],a));return b[c]}};var ie={zh:function(a,b){b[hd.Ge]&&"string"===typeof a&&(a=1==b[hd.Ge]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(hd.Ie)&&null===a&&(a=b[hd.Ie]);b.hasOwnProperty(hd.Ke)&&void 0===a&&(a=b[hd.Ke]);b.hasOwnProperty(hd.Je)&&!0===a&&(a=b[hd.Je]);b.hasOwnProperty(hd.He)&&!1===a&&(a=b[hd.He]);return a}};var je=function(){this.g={}};function ke(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new ae(c,d,g);}}function le(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ke(e,b,d,g);ke(f,b,d,g)}}}};var pe=function(a){var b=me.I,c=this;this.o=new je;this.g={};var d={},e=le(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ua(a,function(f,g){var h={};Ua(g,function(l,m){var n=ne(l,m);h[l]=n.assert;d[l]||(d[l]=n.R)});c.g[f]=function(l,m){var n=h[l];if(!n)throw oe(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},re=function(a){return qe.g[a]||
function(){}};function ne(a,b){var c=Td(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=oe;try{return Ud(c)}catch(d){return{assert:function(e){throw new ae(e,{},"Permission "+e+" is unknown.");},R:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function oe(a,b,c){return new ae(a,b,c)};var se=!1;var te={};te.Di=Ya('');te.Fh=Ya('');var ue=se,ve=te.Fh,we=te.Di;
var Le=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Me=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Le(b,"/*")&&(b=b.slice(0,-2));Le(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Ne=/^[a-z0-9-]+$/i,Oe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Qe=function(a,b){var c;if(!(c=!Pe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Ne.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Oe.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),r;var t=l.hostname,u=q;if(0!==u.indexOf("*."))r=t.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=t.toLowerCase().indexOf(u.toLowerCase());r=-1===v?!1:t.length===u.length?
!0:t.length!==u.length+v?!1:"."===t[v-1]}if(r){var x=n.slice(n.indexOf("/"));h=Me(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Pe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Re=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Se={Fn:"function",DustMap:"Object",List:"Array"},K=function(a,b,c){for(var d=0;d<b.length;d++){var e=Re.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof qb?n="Fn":l instanceof p?n="List":l instanceof wb?n="DustMap":
l instanceof Ab&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Se[h]||h)+".");}}};function Te(a){return""+a}
function Ue(a,b){var c=[];return c};var Ve=function(a,b){var c=new qb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=G(this,d[e]);return b.apply(this,d)});c.ab();return c},We=function(a,b){var c=new wb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];La(e)?c.set(d,Ve(a+"_"+d,e)):(Ma(e)||A(e)||"boolean"==typeof e)&&c.set(d,e)}c.ab();return c};var Xe=function(a,b){K(H(this),["apiName:!string","message:?string"],arguments);var c={},d=new wb;return d=We("AssertApiSubject",c)};var Ye=function(a,b){K(H(this),["actual:?*","message:?string"],arguments);var c={},d=new wb;
return d=We("AssertThatSubject",c)};function Ze(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Gb(arguments[d],c));return Fb(a.apply(null,b))}}var af=function(){for(var a=Math,b=$e,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ze(a[e].bind(a)))}return c};var df=function(a){var b;return b};var ef=function(a){var b;return b};var ff=function(a){K(H(this),["uri:!string"],arguments);return encodeURI(a)};var gf=function(a){K(H(this),["uri:!string"],arguments);return encodeURIComponent(a)};var hf=function(a){K(H(this),["message:?string"],arguments);};var jf=function(a,b){K(H(this),["min:!number","max:!number"],arguments);return Ra(a,b)};var kf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.vh.apply(null,Array.prototype.slice.call(arguments,1))};var lf=function(){kf(this,"read_container_data");var a=new wb;a.set("containerId",'GTM-W8JKW6');a.set("version",'311');a.set("environmentName",'');a.set("debugMode",ue);a.set("previewMode",we);a.set("environmentMode",ve);a.ab();return a};var mf=function(){return(new Date).getTime()};var nf=function(a){if(null===a)return"null";if(a instanceof p)return"array";if(a instanceof qb)return"function";if(a instanceof Ab){a=a.Fa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var of=function(a){function b(c){return function(d){try{return c(d)}catch(e){(ue||we)&&a.call(this,e.message)}}}return{parse:b(function(c){return Fb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Gb(c))})}};var pf=function(a){return Xa(Gb(a,this.g))};var qf=function(a){return Number(Gb(a,this.g))};var rf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var sf=function(a,b,c){var d=null,e=!1;K(H(this),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new wb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof wb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var $e="floor ceil round max min abs pow sqrt".split(" ");var tf=function(){var a={};return{Lh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},xi:function(b,c){a[b]=c},reset:function(){a={}}}},uf=function(a,b){K(H(this),["apiName:!string","mock:?*"],arguments);};var vf={};
vf.keys=function(a){return new p};
vf.values=function(a){return new p};
vf.entries=function(a){return new p};vf.freeze=function(a){return a};var xf=function(){this.g={};this.o={};};xf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
xf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:La(b)?Ve(a,b):We(a,b)};
var zf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=La(c)?Ve(b,c):We(b,c)};function yf(a,b){var c=void 0;return c};function Af(){var a={};return a};var L={Qb:"_ee",Nc:"_syn_or_mod",Mi:"_uei",Fd:"_eu",Ji:"_pci",td:"event_callback",Bc:"event_timeout",ia:"gtag.config",Ba:"gtag.get",ra:"purchase",ob:"refund",Ua:"begin_checkout",mb:"add_to_cart",nb:"remove_from_cart",Cg:"view_cart",Oe:"add_to_wishlist",Aa:"view_item",Ne:"view_promotion",Me:"select_promotion",od:"select_item",xc:"view_item_list",Le:"add_payment_info",Bg:"add_shipping_info",Oa:"value_key",Na:"value_callback",sa:"allow_ad_personalization_signals",Ec:"restricted_data_processing",Jb:"allow_google_signals",
va:"cookie_expires",Kb:"cookie_update",Ob:"session_duration",Fc:"session_engaged_time",Ea:"user_properties",Da:"transport_url",S:"ads_data_redaction",Ed:"user_data",Lb:"first_party_collection",C:"ad_storage",F:"analytics_storage",md:"region",Fe:"wait_for_update",Wa:"conversion_linker",Va:"conversion_cookie_prefix",ka:"value",da:"currency",qf:"trip_type",Z:"items",hf:"passengers"};L.tf=[L.ra,L.ob,L.Ua,L.mb,L.nb,L.Cg,L.Oe,L.Aa,L.Ne,L.Me,L.xc,L.od,L.Le,L.Bg];
L.sf=[L.sa,L.Jb,L.Kb];L.uf=[L.va,L.Bc,L.Ob,L.Fc];var Cf=function(a){Da("GTM",a)};var Df=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Ef=new Df(1936,!0),Ff=new Df(1933);var Gf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Hf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var If,Jf=function(){if(void 0===If){var a=null,b=na.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){na.console&&na.console.error(c.message)}If=a}else If=a}return If};var Lf=function(a,b){this.g=b===Kf?a:""};Lf.prototype.toString=function(){return this.g+""};var Kf={},Mf=function(a){var b=Jf(),c=b?b.createScriptURL(a):a;return new Lf(c,Kf)};var Nf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Of;a:{var Pf=na.navigator;if(Pf){var Qf=Pf.userAgent;if(Qf){Of=Qf;break a}}Of=""}var Rf=function(a){return-1!=Of.indexOf(a)};var Tf=function(a,b,c){this.g=c===Sf?a:""};Tf.prototype.toString=function(){return this.g.toString()};var Uf=function(a){return a instanceof Tf&&a.constructor===Tf?a.g:"type_error:SafeHtml"},Sf={},Vf=function(a){var b=Jf(),c=b?b.createHTML(a):a;return new Tf(c,null,Sf)},Wf=new Tf(na.trustedTypes&&na.trustedTypes.emptyHTML||"",0,Sf);var Xf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Uf(Wf);return!c.parentElement}),Yf=function(a,b){if(Xf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Uf(b)},ag=function(a,b){a.src=b instanceof Lf&&b.constructor===Lf?b.g:"type_error:TrustedResourceUrl";var c;var d=a.ownerDocument&&
a.ownerDocument.defaultView;d&&d!=na?c=Zf(d.document):(null===$f&&($f=Zf(na.document)),c=$f);var e=c;e&&a.setAttribute("nonce",e)},$f=null,bg=/^[\w+/_-]+[=]{0,2}$/,Zf=function(a){if(!a.querySelector)return"";var b=a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&bg.test(c))return c}return""};var F=window,N=document,cg=navigator,dg=N.currentScript&&N.currentScript.src,eg=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},fg=function(a){var b=N.getElementsByTagName("script")[0]||N.body||N.head;b.parentNode.insertBefore(a,b)},gg=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},hg={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},ig=function(a,b,c,d){var e=N.createElement("script");
d&&Ua(d,function(f,g){f=f.toLowerCase();hg.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;ag(e,Mf(a));gg(e,b);c&&(e.onerror=c);fg(e);return e},jg=function(){if(dg){var a=dg.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},kg=function(a,b){var c=N.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=N.body&&N.body.lastChild||N.body||N.head;d.parentNode.insertBefore(c,
d);gg(c,b);void 0!==a&&(c.src=a);return c},lg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},mg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ng=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},Q=function(a){F.setTimeout(a,0)},og=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},pg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qg=function(a){var b=N.createElement("div"),c=Vf("A<div>"+a+"</div>");Yf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},rg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
sg=function(a){cg.sendBeacon&&cg.sendBeacon(a)||lg(a)},tg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ug=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.o=function(){a[Ff.g]=!0}};ug.g=void 0;ug.o=function(){return ug.g?ug.g:ug.g=new ug};var vg=function(a){return ug.o().g(a.g,a.defaultValue)};var wg=[];function xg(){var a=eg("google_tag_data",{});a.ics||(a.ics={entries:{},set:yg,update:zg,addListener:Ag,notifyListeners:Bg,active:!1,usedDefault:!1});return a.ics}
function yg(a,b,c,d,e,f){var g=xg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&A(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:n,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&F.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Cg(a),Bg(),Da("TAGGING",2))},f)}}}
function zg(a,b){var c=xg();c.active=!0;if(void 0!=b){var d=Dg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Dg(a);f.quiet?(f.quiet=!1,Cg(a)):g!==d&&Cg(a)}}function Ag(a,b){wg.push({Ud:a,Hh:b})}function Cg(a){for(var b=0;b<wg.length;++b){var c=wg[b];Na(c.Ud)&&-1!==c.Ud.indexOf(a)&&(c.dg=!0)}}function Bg(a){for(var b=0;b<wg.length;++b){var c=wg[b];if(c.dg){c.dg=!1;try{c.Hh({Pf:a})}catch(d){}}}}
var Dg=function(a){var b=xg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Eg=function(a){return(xg().entries[a]||{}).initial},Lg=function(a){return!(xg().entries[a]||{}).quiet},Mg=function(){return vg(Ff)?xg().active:!1},Ng=function(){return xg().usedDefault},Og=function(a,b){xg().addListener(a,b)},Pg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Lg(b[e]))return!0;return!1}if(c()){var d=!1;Og(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Qg=
function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Dg(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=A(b)?[b]:b,e={};c().length!==d.length&&Og(d,function(f){var g=c();0<g.length&&(f.Ud=g,a(f))})};function Rg(a){for(var b=[],c=0;c<Sg.length;c++){var d=a(Sg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Sg=[L.C,L.F],Tg=function(a){var b=a[L.md];b&&Cf(40);var c=a[L.Fe];c&&Cf(41);for(var d=Na(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==L.md&&f!==L.Fe)if(-1<Pa(Sg,f)){var g=f,h=a[f],l=d[e];xg().set(g,h,l,"US","US-PA",c)}else{}},Ug=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Pa(Sg,c)){var d=c,e=a[c];xg().update(d,e)}else{}xg().notifyListeners(b)},Vg=function(a){var b=Dg(a);return void 0!=b?b:!0},Wg=function(){return"G1"+Rg(Dg)},Xg=function(a,b){Og(a,b)},Yg=function(a,b){Qg(a,b)},Zg=function(a,b){Pg(a,b)};var ah=function(a){return $g?N.querySelectorAll(a):null},bh=function(a,b){if(!$g)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!N.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ch=!1;if(N.querySelectorAll)try{var dh=N.querySelectorAll(":root");dh&&1==dh.length&&dh[0]==N.documentElement&&(ch=!0)}catch(a){}var $g=ch;var eh=function(a){if(N.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var fh=function(){var a=N.body,b=N.documentElement||a&&a.parentElement,c,d;if(N.compatMode&&"BackCompat"!==N.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Cf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},gh=function(a){var b=fh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var hh=[],ih=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),jh=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<hh.length;f++)if(!hh[f])return hh[f]=d,f;return hh.push(d)-1},kh=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},n={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:ab()};Q(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=gh(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},lh=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(ih){var e=!1;Q(function(){e||
kh(a,b,c)()});return jh(function(f){e=!0;for(var g={Fb:0};g.Fb<f.length;g={Fb:g.Fb},g.Fb++)Q(function(h){return function(){return a(f[h.Fb])}}(g))},b,c)}return F.setInterval(kh(a,b,c),1E3)},mh=function(a){ih?0<=a&&a<hh.length&&hh[a]&&(hh[a].disconnect(),hh[a]=void 0):F.clearInterval(a)};var nh=/:[0-9]+$/,oh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},rh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ph(a.protocol)||ph(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||F.location.hostname).replace(nh,"").toLowerCase());return qh(a,b,c,d,e)},qh=function(a,b,c,d,e){var f,g=ph(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=sh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(nh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Da("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Pa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=oh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ph=function(a){return a?a.replace(":",
"").toLowerCase():""},sh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},th=function(a){var b=N.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Da("TAGGING",1),c="/"+c);var d=b.hostname.replace(nh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},uh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=th(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var vh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),wh=new RegExp(/@(gmail|googlemail)\./i),xh=new RegExp(/support|noreply/i),yh="SCRIPT STYLE IMG SVG PATH BR".split(" "),zh=["BR"];function Ah(a){var b;if(a===N.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=Ah(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function Bh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function Ch(a){if(0==a.length)return null;var b;b=Bh(a,function(c){return!xh.test(c.Eb)});b=Bh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=Bh(b,function(c){return!eh(c.element)});return b[0]}
var Dh=function(){var a;var b=[],c=N.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=yh.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=zh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,n=[],q=0;q<m.length;q++){var r=m[q],t=r.textContent;r.value&&(t=r.value);if(t){var u=t.match(vh);if(u){var v=
u[0],x;if(F.location){var z=qh(F.location,"host",!0);x=0<=v.toLowerCase().indexOf(z)}else x=!1;x||n.push({element:r,Eb:v})}}}var w=Ch(n),y=[];if(w){var B=w.element,C={Eb:w.Eb,tagName:B.tagName,type:1};C.querySelector=Ah(B);C.isVisible=!eh(B);y.push(C)}return{elements:y,status:10<n.length?"3":l.status}},Eh=function(a){return a.tagName+":"+a.isVisible+":"+a.Eb.length+":"+wh.test(a.Eb)};var me={},Sh=null,Th=Math.random();me.I="GTM-W8JKW6";me.Mc="5c1";me.Gi="";me.vg="ChEI8OL9hAYQprfqp+vKwJeCARIjAHdyifNGeNRNFk2XwnxWBB7j7QJrdnCX+U6M0tyrapD0q+AaAkuj";var Uh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Vh={__paused:!0,__tg:!0},Wh;for(Wh in Uh)Uh.hasOwnProperty(Wh)&&(Vh[Wh]=!0);var Xh="www.googletagmanager.com/gtm.js";
var Yh=Xh,Zh=Ya(""),$h=null,ai=null,bi="//www.googletagmanager.com/a?id="+me.I+"&cv=311",ci={},di={},ei=function(){var a=Sh.sequence||1;Sh.sequence=a+1;return a};me.ug="";var fi={},gi=new Sa,hi={},ii={},li={name:"dataLayer",set:function(a,b){J(mb(a,b),hi);ji()},get:function(a){return ki(a,2)},reset:function(){gi=new Sa;hi={};ji()}},ki=function(a,b){return 2!=b?gi.get(a):mi(a)},mi=function(a,b){var c=a.split(".");b=b||[];for(var d=hi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Pa(b,d))return}return d},ni=function(a,b){ii.hasOwnProperty(a)||(gi.set(a,b),J(mb(a,b),hi),ji())},oi=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=ki(c,1);if(Na(d)||Eb(d))d=J(d);ii[c]=d}},ji=function(a){Ua(ii,function(b,c){gi.set(b,c);J(mb(b,void 0),hi);J(mb(b,c),hi);a&&delete ii[b]})},qi=function(a,b,c){fi[a]=fi[a]||{};fi[a][b]=pi(b,c)},pi=function(a,b){var c,d=1!==(void 0===b?2:b)?mi(a):gi.get(a);"array"===Cb(d)||"object"===Cb(d)?c=J(d):c=d;return c},ri=function(a,b){if(fi[a])return fi[a][b]},si=function(a,b){fi[a]&&delete fi[a][b]};var vi={},wi=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===vi[a]&&(vi[a]=Math.floor(Math.random()*b));return vi[a]};var xi=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function yi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function zi(a){return"null"!==a.origin};var Ci=function(a,b,c,d){return Ai(d)?yi(a,String(b||Bi()),c):[]},Fi=function(a,b,c,d,e){if(Ai(e)){var f=Di(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Ei(f,function(g){return g.Vc},b);if(1===f.length)return f[0].id;f=Ei(f,function(g){return g.hc},c);return f[0]?f[0].id:void 0}}};function Gi(a,b,c,d){var e=Bi(),f=window;zi(f)&&(f.document.cookie=a);var g=Bi();return e!=g||void 0!=c&&0<=Ci(b,g,!1,d).indexOf(c)}
var Ki=function(a,b,c,d){function e(x,z,w){if(null==w)return delete h[z],x;h[z]=w;return x+"; "+z+"="+w}function f(x,z){if(null==z)return delete h[z],x;h[z]=!0;return x+"; "+z}if(!Ai(c.Ka))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Hi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.bi);g=e(g,"samesite",
c.ri);c.ui&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=Ii(),q=void 0,r=!1,t=0;t<n.length;++t){var u="none"!==n[t]?n[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){q=x;continue}r=!0;if(!Ji(u,c.path)&&Gi(v,a,b,c.Ka))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Ji(m,c.path)?1:Gi(g,a,b,c.Ka)?0:1},Li=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ki(a,b,c)};
function Ei(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Di(a,b,c){for(var d=[],e=Ci(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Vc:1*l[0]||1,hc:1*l[1]||1}))}}return d}
var Hi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Mi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ni=/(^|\.)doubleclick\.net$/i,Ji=function(a,b){return Ni.test(window.document.location.hostname)||"/"===b&&Mi.test(a)},Bi=function(){return zi(window)?window.document.cookie:""},Ii=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Ni.test(e)||Mi.test(e)||a.push("none");return a},Ai=function(a){if(!vg(Ff)||!a||!Mg())return!0;if(!Lg(a))return!1;var b=Dg(a);return null==b?!0:!!b};var Oi=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Pi=function(){return Rf("iPhone")&&!Rf("iPod")&&!Rf("iPad")};Rf("Opera");Rf("Trident")||Rf("MSIE");Rf("Edge");!Rf("Gecko")||-1!=Of.toLowerCase().indexOf("webkit")&&!Rf("Edge")||Rf("Trident")||Rf("MSIE")||Rf("Edge");-1!=Of.toLowerCase().indexOf("webkit")&&!Rf("Edge")&&Rf("Mobile");Rf("Macintosh");Rf("Windows");Rf("Linux")||Rf("CrOS");var Qi=na.navigator||null;Qi&&(Qi.appVersion||"").indexOf("X11");Rf("Android");Pi();Rf("iPad");Rf("iPod");Pi()||Rf("iPad")||Rf("iPod");Of.toLowerCase().indexOf("kaios");var Ri=function(){var a=F;if(!a.crypto)return Math.random();try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Si=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var Ti=function(a,b){for(var c=""+(a?"":cg.userAgent)+((zi(F)?N.cookie:null)||"")+(N.referrer||""),d=c.length,e=F.history.length;0<e;)c+=e--^d++;return[Math.round(2147483647*(b?Ri():Math.random()))^xi(c)&2147483647,Math.round(ab()/1E3)].join(".")},Wi=function(a,b,c,d,e){var f=Ui(b);return Fi(a,f,Vi(c),d,e)},Xi=function(a,b,c,d){var e=""+Ui(c),f=Vi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Ui=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Vi=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Yi(a,b,c){var d,e=Number(null!=a.Bb?a.Bb:void 0);0!==e&&(d=new Date((b||ab())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Zi=["1"],$i={},dj=function(a){var b=aj(a.prefix);if(!$i[b]&&!bj(b,a.path,a.domain)){var c=Ti();if(0===cj(b,c,a)){var d=eg("google_tag_data",{});d._gcl_au?Da("GTM",57):d._gcl_au=c}bj(b,a.path,a.domain)}};function cj(a,b,c){var d=Xi(b,"1",c.domain,c.path),e=Yi(c);e.Ka="ad_storage";return Li(a,d,e)}function bj(a,b,c){var d=Wi(a,b,c,Zi,"ad_storage");d&&($i[a]=d);return d}function aj(a){return(a||"_gcl")+"_au"};var ej=function(a){for(var b=[],c=N.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Be:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function fj(a,b){var c=ej(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Be]||(d[c[e].Be]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),na:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Be].push(g)}}return d};function gj(){for(var a=hj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function ij(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var hj,jj;
function kj(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=jj[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}hj=hj||ij();jj=jj||gj();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var lj;var pj=function(){var a=mj,b=nj,c=oj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){mg(N,"mousedown",d);mg(N,"keyup",d);mg(N,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},qj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};oj().decorators.push(f)},rj=function(a,b,c){for(var d=oj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==N.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&hb(e,g.callback())}}return e},oj=function(){var a=eg("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var sj=/(.*?)\*(.*?)\*(.*)/,tj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,uj=/^(?:www\.|m\.|amp\.)+/,vj=/([^?#]+)(\?[^#]*)?(#.*)?/;function wj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var yj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);hj=hj||ij();jj=jj||gj();for(var l=[],m=0;m<h.length;m+=3){var n=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),t=n?h.charCodeAt(m+1):0,u=q?h.charCodeAt(m+2):0,v=r>>2,x=(r&3)<<4|t>>4,z=(t&15)<<2|u>>6,w=u&63;q||(w=64,n||(z=64));l.push(hj[v],hj[x],hj[z],hj[w])}g=l.join("");f.call(e,g)}}var y=b.join("*");return["1",xj(y),
y].join("*")},xj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=lj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}lj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^lj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ej=function(){return function(a){var b=th(F.location.href),
c=b.search.replace("?",""),d=oh(c,"_gl",!1,!0)||"";a.query=Dj(d)||{};var e=rh(b,"fragment").match(wj("_gl"));a.fragment=Dj(e&&e[3]||"")||{}}},Fj=function(a){var b=Ej(),c=oj();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(hb(d,e.query),a&&hb(d,e.fragment));return d},Dj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=sj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=
0;n<b;++n)if(m===xj(h,n)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],t=0;t<r.length;t+=2)q[r[t]]=kj(r[t+1]);return q}}}}catch(u){}};function Gj(a,b,c,d){function e(n){var q=n,r=wj(a).exec(q),t=q;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}n=t;var x=n.charAt(n.length-1);n&&"&"!==x&&(n+="&");return n+m}d=void 0===d?!1:d;var f=vj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Hj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=rj(b,1,c),e=rj(b,2,c),f=rj(b,3,c);if(ib(d)){var g=yj(d);c?Ij("_gl",g,a):Jj("_gl",g,a,!1)}if(!c&&ib(e)){var h=yj(e);Jj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Jj(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Ij(m,n,q);break a}}"string"==typeof q&&Gj(m,n,q,void 0)}}
function Jj(a,b,c,d){if(c.href){var e=Gj(a,b,c.href,void 0===d?!1:d);Nf.test(e)&&(c.href=e)}}
function Ij(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=N.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Gj(a,b,c.action);Nf.test(m)&&(c.action=m)}}}
var mj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Hj(e,e.hostname)}}catch(g){}},nj=function(a){try{if(a.action){var b=rh(th(a.action),"host");Hj(a,b)}}catch(c){}},Kj=function(a,b,c,d){pj();qj(a,b,"fragment"===c?2:1,!!d,!1)},Lj=function(a,b){pj();qj(a,[qh(F.location,"host",!0)],b,!0,!0)},Mj=function(){var a=N.location.hostname,b=tj.exec(N.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(uj,""),l=e.replace(uj,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},Nj=function(a,b){return!1===a?!1:a||b||Mj()};var Oj={};var Pj=/^\w+$/,Qj=/^[\w-]+$/,Rj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Sj=function(){if(!vg(Ff)||!Mg())return!0;var a=Dg("ad_storage");return null==a?!0:!!a},Tj=function(a,b){Lg("ad_storage")?Sj()?a():Qg(a,"ad_storage"):b?Da("TAGGING",3):Pg(function(){Tj(a,!0)},["ad_storage"])},Vj=function(a){return Uj(a).map(function(b){return b.na})},Uj=function(a){var b=[];if(!zi(F)||!N.cookie)return b;var c=Ci(a,N.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{sc:d.sc},e++){var f=Wj(c[e]);if(null!=f){var g=f,h=g.version;d.sc=g.na;var l=g.timestamp,m=g.labels,n=Qa(b,function(q){return function(r){return r.na===q.sc}}(d));n?(n.timestamp=Math.max(n.timestamp,l),n.labels=Xj(n.labels,m||[])):b.push({version:h,na:d.sc,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Yj(b)};function Xj(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Zj(a){return a&&"string"==typeof a&&a.match(Pj)?a:"_gcl"}
var bk=function(){var a=th(F.location.href),b=rh(a,"query",!1,void 0,"gclid"),c=rh(a,"query",!1,void 0,"gclsrc"),d=rh(a,"query",!1,void 0,"wbraid"),e=rh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||oh(f,"gclid",!1,void 0);c=c||oh(f,"gclsrc",!1,void 0);d=d||oh(f,"wbraid",!1,void 0)}return ak(b,c,e,d)},ak=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Qj.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(Qj))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},ck=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},ek=function(a){var b=bk();Tj(function(){dk(b,a)})};
function dk(a,b,c,d){function e(n,q){var r=fk(n,f);r&&(Li(r,q,g),h=!0)}b=b||{};d=d||[];var f=Zj(b.prefix);c=c||ab();var g=Yi(b,c,!0);g.Ka="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(n){var q=["GCL",l,n];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==Oj.enable_gbraid_cookie_write?0:Oj.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var hk=function(a,b){var c=Fj(!0);Tj(function(){for(var d=Zj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Rj[f]){var g=fk(f,d),h=c[g];if(h){var l=Math.min(gk(h),ab()),m;b:{var n=l;if(zi(F))for(var q=Ci(g,N.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(gk(q[r])>n){m=!0;break b}m=!1}if(!m){var t=Yi(b,l,!0);t.Ka="ad_storage";Li(g,h,t)}}}}dk(ak(c.gclid,c.gclsrc),b)})},fk=function(a,b){var c=Rj[a];if(void 0!==c)return b+c},gk=function(a){return 0!==ik(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Wj(a){var b=ik(a.split("."));return 0===b.length?null:{version:b[0],na:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function ik(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Qj.test(a[2])?[]:a}
var jk=function(a,b,c,d,e){if(Na(b)&&zi(F)){var f=Zj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=fk(a[l],f);if(m){var n=Ci(m,N.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};Tj(function(){Kj(g,b,c,d)})}},Yj=function(a){return a.filter(function(b){return Qj.test(b.na)})},kk=function(a,b){if(zi(F)){for(var c=Zj(b.prefix),d={},e=0;e<a.length;e++)Rj[a[e]]&&(d[a[e]]=Rj[a[e]]);Tj(function(){Ua(d,function(f,g){var h=Ci(c+g,N.cookie,void 0,"ad_storage");h.sort(function(t,
u){return gk(u)-gk(t)});if(h.length){var l=h[0],m=gk(l),n=0!==ik(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==ik(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];dk(q,b,m,n)}})})}};function lk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var mk=function(a){function b(e,f,g){g&&(e[f]=g)}if(Mg()){var c=bk();if(lk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Lj(function(){return d},3);Lj(function(){var e={};return e._up="1",e},1)}}};function nk(a,b){var c=Zj(b),d=fk(a,c);if(!d)return 0;for(var e=Uj(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function ok(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var pk=/^\d+\.fls\.doubleclick\.net$/;function qk(a,b){Lg(L.C)?Vg(L.C)?a():Qg(a,L.C):b?Cf(42):Zg(function(){qk(a,!0)},[L.C])}function rk(a){var b=th(F.location.href),c=rh(b,"host",!1);if(c&&c.match(pk)){var d=rh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function sk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=rk("gcl"+a);if(d)return d.split(".")}var e=Zj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Vg(L.C)&&c,g;g=bk()[a]||[];if(0<g.length)return f?["0"]:g}var h=fk(a,e);return h?Vj(h):[]}function tk(a){var b=[];Ua(a,function(c,d){d=Yj(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].na);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var uk=function(a){var b=rk("gac");return b?!Vg(L.C)&&a?"0":decodeURIComponent(b):tk(Sj()?fj():{})},vk=function(a){var b=rk("gacgb");return b?!Vg(L.C)&&a?"0":decodeURIComponent(b):tk(Sj()?fj("_gac_gb",!0):{})},wk=function(a,b,c){var d=bk(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!ck(h,c)||e.push({na:f,ae:h});!g||c&&"dc"!==c||e.push({na:g,ae:"ds"});qk(function(){dj(b);var l=$i[aj(b.prefix)],m=!1;if(l&&0<e.length)for(var n=Sh.joined_auid=Sh.joined_auid||{},q=0;q<e.length;q++){var r=e[q],t=r.na,u=r.ae,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!n[v]){var x="https://adservice.google.com/pagead/regclk";x="gb"===u?x+"?gbraid="+t+"&auid="+l:x+"?gclid="+t+"&auid="+l+"&gclsrc="+u;sg(x);m=n[v]=!0}}null==a&&(a=
m);if(a&&l){var z=aj(b.prefix),w=$i[z];w&&cj(z,w,b)}})},xk=function(a){var b;if(rk("gclaw")||rk("gac")||0<(bk().aw||[]).length)b=!1;else{var c;if(0<(bk().gb||[]).length)c=!0;else{var d=Math.max(nk("aw",a),ok(Sj()?fj():{}));c=Math.max(nk("gb",a),ok(Sj()?fj("_gac_gb",!0):{}))>d}b=c}return b};var yk=/[A-Z]+/,zk=/\s/,Ak=function(a){if(A(a)&&(a=$a(a),!zk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(yk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Ck=function(a){for(var b={},c=0;c<a.length;++c){var d=Ak(a[c]);d&&(b[d.id]=d)}Bk(b);var e=[];Ua(b,function(f,g){e.push(g)});return e};
function Bk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Dk=function(){var a=!1;return a};var Fk=function(a,b,c,d){return(2===Ek()||d||"http:"!=F.location.protocol?a:b)+c},Ek=function(){var a=jg(),b;if(1===a)a:{var c=Yh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=N.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Tk=function(a){if(Vg(L.C))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=uh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=uh(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},Uk=function(){var a;if(!(a=Zh)){var b;if(!0===F._gtmdgs)b=!0;else{var c=cg&&cg.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Xa("1");return wi(1,100)<d?wi(2,2):-1},Vk=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Wk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Xk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Yk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Zk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var $k=function(){var a=!1;return a},bl=function(a){var b=ki("gtm.allowlist")||ki("gtm.whitelist");b&&Cf(9);$k()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&kb(Za(b),Xk),d=ki("gtm.blocklist")||
ki("gtm.blacklist");d||(d=ki("tagTypeBlacklist"))&&Cf(3);d?Cf(8):d=[];al()&&(d=Za(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Pa(Za(d),"google")&&Cf(2);var e=d&&kb(Za(d),Yk),f={};return function(g){var h=g&&g[hd.Za];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=di[h]||[],m=a(h,l);if(b){var n;if(n=
m)a:{if(0>Pa(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Pa(c,l[q])){Cf(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var r=!1;if(d){var t=0<=Pa(e,h);if(t)r=t;else{var u=Ta(e,l||[]);u&&Cf(10);r=u}}var v=!m||r;v||!(0<=Pa(l,"sandboxedScripts"))||c&&-1!==Pa(c,"sandboxedScripts")||(v=Ta(e,Zk));return f[h]=v}},al=function(){return Wk.test(F.location&&F.location.hostname)};var cl={active:!0,isAllowed:function(){return!0}},dl=function(a){var b=Sh.zones;return b?b.checkState(me.I,a):cl},el=function(a){var b=Sh.zones;!b&&a&&(b=Sh.zones=a());return b};var fl=function(){},gl=function(){};var hl=!1,il=0,jl=[];function kl(a){if(!hl){var b=N.createEventObject,c="complete"==N.readyState,d="interactive"==N.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){hl=!0;for(var e=0;e<jl.length;e++)Q(jl[e])}jl.push=function(){for(var f=0;f<arguments.length;f++)Q(arguments[f]);return 0}}}function ll(){if(!hl&&140>il){il++;try{N.documentElement.doScroll("left"),kl()}catch(a){F.setTimeout(ll,50)}}}var ml=function(a){hl?a():jl.push(a)};var ol=function(a,b){this.g=!1;this.D=[];this.L={tags:[]};this.M=!1;this.o=this.s=0;nl(this,a,b)},pl=function(a,b,c,d){if(Vh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Eb(d)&&(e=J(d,e));e.id=c;e.status="timeout";return a.L.tags.push(e)-1},ql=function(a,b,c,d){var e=a.L.tags[b];e&&(e.status=c,e.executionTime=d)},rl=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},nl=function(a,b,c){La(b)&&a.Ub(b);c&&F.setTimeout(function(){return rl(a)},Number(c))};
ol.prototype.Ub=function(a){var b=this,c=db(function(){return Q(function(){a(me.I,b.L)})});this.g?c():this.D.push(c)};var sl=function(a){a.s++;return db(function(){a.o++;a.M&&a.o>=a.s&&rl(a)})};var tl=function(){function a(d){return!Ma(d)||0>d?0:d}if(!Sh._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=Ma(li.get("gtm.start"))?li.get("gtm.start"):0;Sh._li={cst:a(c-b),cbt:a(ai-b)}}};var xl={},yl=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},zl=!1;
var Al=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||Cf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}tl();return F[b]},Bl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=yl();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Cl=function(a){if(!Mg())return;var b=yl();b(a+"require","linker");b(a+
"linker:passthrough",!0);};
var El=function(a){},Dl=function(){return F.GoogleAnalyticsObject||"ga"},Fl=function(a,b){return function(){var c=yl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Kl=function(){return"&tc="+Nd.filter(function(a){return a}).length},Nl=function(){2022<=Ll().length&&Ml()},Pl=function(){Ol||(Ol=F.setTimeout(Ml,500))},Ml=function(){Ol&&(F.clearTimeout(Ol),Ol=void 0);void 0===Ql||Rl[Ql]&&!Sl&&!Tl||(Ul[Ql]||Vl.Th()||0>=Wl--?(Cf(1),Ul[Ql]=!0):(Vl.li(),lg(Ll()),Rl[Ql]=!0,Xl=Yl=Zl=Tl=Sl=""))},Ll=function(){var a=Ql;if(void 0===a)return"";var b=Ea("GTM"),c=Ea("TAGGING");return[$l,Rl[a]?"":"&es=1",am[a],b?"&u="+b:"",c?"&ut="+c:"",Kl(),Sl,Tl,Zl?Zl:"",Yl,Xl,"&z=0"].join("")},
cm=function(){$l=bm()},bm=function(){return[bi,"&v=3&t=t","&pid="+Ra(),"&rv="+me.Mc].join("")},dm="0.005000">Math.random(),$l=bm(),Rl={},Sl="",Tl="",Xl="",Yl="",Zl="",Ql=void 0,am={},Ul={},Ol=void 0,Vl=function(a,b){var c=0,d=0;return{Th:function(){if(c<a)return!1;ab()-d>=b&&(c=0);return c>=a},li:function(){ab()-d>=b&&(c=0);c++;d=ab()}}}(2,1E3),Wl=1E3,em=function(a,b,c){if(dm&&!Ul[a]&&b){a!==Ql&&(Ml(),Ql=a);var d,e=String(b[hd.Za]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Sl=Sl?Sl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Pd[g]?"1":"2")+d;Xl=Xl?Xl+"."+h:"&ti="+h;Pl();Nl()}},fm=function(a,b,c){if(dm&&!Ul[a]){a!==Ql&&(Ml(),Ql=a);var d=c+b;Tl=Tl?Tl+"."+d:"&epr="+d;Pl();Nl()}},gm=function(a,b,c){};
var hm=function(){return!1},im=function(){var a={};return function(b,c,d){}};function jm(a,b,c,d){var e=Nd[a],f=km(a,b,c,d);if(!f)return null;var g=Vd(e[hd.Hf],c,[]);if(g&&g.length){var h=g[0];f=jm(h.index,{onSuccess:f,onFailure:1===h.Wf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function km(a,b,c,d){function e(){if(f[hd.ih])h();else{var x=Wd(f,c,[]);var y=pl(c.Ra,String(f[hd.Za]),Number(f[hd.If]),x[hd.jh]),B=!1;x.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=ab()-E;em(c.id,Nd[a],"5");ql(c.Ra,y,"success",
D);g()}};x.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=ab()-E;em(c.id,Nd[a],"6");ql(c.Ra,y,"failure",D);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;em(c.id,f,"1");var C=function(){var D=ab()-E;em(c.id,f,"7");ql(c.Ra,y,"exception",D);B||(B=!0,h())};var E=ab();try{Ud(x,c)}catch(D){C(D)}}}var f=Nd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.he(f))return null;var m=Vd(f[hd.Jf],c,[]);if(m&&m.length){var n=m[0],q=jm(n.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.Wf?l:q}if(f[hd.Af]||f[hd.lh]){var r=f[hd.Af]?Od:
c.yi,t=g,u=h;if(!r[a]){e=db(e);var v=lm(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](t,u)}}return e}function lm(a,b,c){var d=[],e=[];b[a]=mm(d,e,c);return{onSuccess:function(){b[a]=nm;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=om;for(var f=0;f<e.length;f++)e[f]()}}}function mm(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function nm(a){a()}function om(a,b){b()};var rm=function(a,b){for(var c=[],d=0;d<Nd.length;d++)if(a[d]){var e=Nd[d];var f=sl(b.Ra);try{var g=jm(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,n=e["function"];if(!n)throw"Error: No function name given for function call.";var q=Pd[n];l.call(h,{mg:m,eg:q?q.priorityOverride||0:0,Wc:g})}else pm(d,b),f()}catch(u){f()}}var r=b.Ra;r.M=!0;r.o>=r.s&&rl(r);c.sort(qm);for(var t=0;t<c.length;t++)c[t].Wc();
return 0<c.length};function qm(a,b){var c,d=b.eg,e=a.eg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.mg,h=b.mg;f=g>h?1:g<h?-1:0}return f}function pm(a,b){if(!dm)return;var c=function(d){var e=b.he(Nd[d])?"3":"4",f=Vd(Nd[d][hd.Hf],b,[]);f&&f.length&&c(f[0].index);em(b.id,Nd[d],e);var g=Vd(Nd[d][hd.Jf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var sm=!1,ym=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(sm)return!1;sm=!0}var d=dl(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=dl(Number.MAX_SAFE_INTEGER)}dm&&!Ul[b]&&Ql!==b&&(Ml(),Ql=b,Xl=Sl="",am[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Pl());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,he:bl(d.isAllowed),yi:[],bg:function(){Cf(6)},Of:tm(b),Ra:new ol(f,
g)};vm(b,h.Ra);var l=he(h);e&&(l=wm(l));var m=rm(l,h);"gtm.js"!==c&&"gtm.sync"!==c||El(me.I);switch(c){case "gtm.init":m&&Cf(20)}return xm(l,m)};function tm(a){return function(b){dm&&(Ib(b)||gm(a,"input",b))}}
function vm(a,b){qi(a,"event",1);qi(a,"ecommerce",1);qi(a,"gtm");qi(a,"eventModel");}function um(){var a={};a.event=pi("event",1);a.ecommerce=pi("ecommerce",1);a.gtm=pi("gtm");a.eventModel=pi("eventModel");return a}function wm(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Uh[String(Nd[c][hd.Za])]&&(b[c]=!0);return b}
function xm(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Nd[c]&&!Vh[String(Nd[c][hd.Za])])return!0;return!1}function zm(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return th(""+c+b).href}}function Am(a,b){return Bm()?zm(a,b):void 0}function Bm(){var a=!1;return a};var Cm=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},Dm=function(a){var b=new Cm;b.eventModel=a;return b},Em=function(a,b){a.targetConfig=b;return a},Fm=function(a,b){a.containerConfig=b;return a},Gm=function(a,b){a.remoteConfig=b;return a},Hm=function(a,
b){a.globalConfig=b;return a},Im=function(a,b){a.onSuccess=b;return a},Jm=function(a,b){a.setContainerTypeLoaded=b;return a},Km=function(a,b){a.getContainerTypeLoaded=b;return a},Lm=function(a,b){a.onFailure=b;return a};
Cm.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Mm=function(a){function b(e){Ua(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ua(c,function(e){d.push(e)});return d};var Nm;if(3===me.Mc.length)Nm="g";else{var Om="G";Nm=Om}
var Pm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Nm,OPT:"o"},Qm=function(a){var b=me.I.split("-"),c=b[0].toUpperCase(),d=Pm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===me.Mc.length){var g="w";f="2"+g}else f="";return f+d+me.Mc+e};var Rm=function(){};var Sm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Tm=function(a,b){this.o=a;this.g=null;this.D={};this.M=0;this.L=void 0===b?500:b;this.s=null};ma(Tm,Rm);
var Vm=function(a){return"function"===typeof a.o.__tcfapi||null!=Um(a)};
Tm.prototype.addEventListener=function(a){var b={},c=Hf(function(){return a(b)}),d=0;-1!==this.L&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.L));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Sm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Wm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Tm.prototype.removeEventListener=function(a){a&&a.listenerId&&Wm(this,"removeEventListener",null,a.listenerId)};
var Ym=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Xm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||vg(Ef)&&"CH"===a.publisherCC)?!0:m&&Xm(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Xm(a.purpose.legitimateInterests,b)&&Xm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Xm=function(a,b){return!(!a||!a[b])},Wm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Um(a)){Zm(a);var f=++a.M;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Um=function(a){if(a.g)return a.g;a.g=Si(a.o,"__tcfapiLocator");return a.g},
Zm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},Oi(a.o,a.s))};var $m=!0;$m=!1;var an={1:0,3:0,4:0,7:3,9:3,10:3};function bn(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var cn=bn("",550),dn=bn("",500);function en(){var a=Sh.tcf||{};return Sh.tcf=a}
var fn=function(a,b){this.s=a;this.g=b;this.o=ab();},gn=function(a){},hn=function(a){},on=function(){var a=en(),b=new Tm(F,$m?3E3:-1),c=new fn(b,a);if((jn()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||Vm(b))){a.active=!0;a.jc={};kn();var d=null;$m?d=F.setTimeout(function(){ln(a);mn(a);d=null},dn):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)ln(a),mn(a),gn(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=nn(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in an)if(an.hasOwnProperty(h))if("1"===h){var l,m=e,n=!0;n=void 0===n?!1:n;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Sm(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!n||"string"!==typeof m.tcString||!m.tcString.length?!0:Ym(m,"1",0):!1;g["1"]=l}else g[h]=Ym(e,h,an[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.jc=f,mn(a),gn(c))}}),hn(c)}catch(e){d&&(clearTimeout(d),d=null),ln(a),mn(a)}}};function ln(a){a.type="e";a.tcString="tcunavailable";$m&&(a.jc=nn())}function kn(){var a={},b=(a.ad_storage="denied",a.wait_for_update=cn,a);Tg(b)}
var jn=function(){var a=!1;a=!0;return a};function nn(){var a={},b;for(b in an)an.hasOwnProperty(b)&&(a[b]=!0);return a}function mn(a){var b={},c=(b.ad_storage=a.jc["1"]?"granted":"denied",b);pn();Ug(c,0)}
var qn=function(){var a=en();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},pn=function(){var a=en();return a.active?a.tcString||"":""},rn=function(){var a=en();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},sn=function(a){if(!an.hasOwnProperty(String(a)))return!0;var b=en();return b.active&&b.jc?!!b.jc[String(a)]:!0};var tn=!1;function un(a){var b=String(F.location).split(/[?#]/)[0],c=me.vg||F._CONSENT_MODE_SALT;return a?c?String(xi(b+a+c)):"0":""}
function vn(a){function b(u){var v;Sh.reported_gclid||(Sh.reported_gclid={});v=Sh.reported_gclid;var x;x=tn&&g&&(!Mg()||Vg(L.C))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[x]){v[x]=!0;var z=[],w={},y=function(S,X){X&&(z.push(S+"="+encodeURIComponent(X)),w[S]=!0)},B="https://www.google.com";if(Mg()){var C=Vg(L.C);y("gcs",Wg());u&&y("gcu","1");Ng()&&y("gcd","G1"+Rg(Eg));
Sh.dedupe_gclid||(Sh.dedupe_gclid=""+Ti());y("rnd",Sh.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Vg(L.C)){var E=Vj("_gcl_aw");y("gclaw",E.join("."))}y("url",String(F.location).split(/[?#]/)[0]);y("dclid",wn(d,n));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
y("gdpr_consent",pn()),y("gdpr",rn());"1"===Fj(!1)._up&&y("gtm_up","1");y("gclid",wn(d,l));y("gclsrc",m);if(!(w.gclid||w.dclid||w.gclaw)&&(y("gbraid",wn(d,q)),!w.gbraid&&Mg()&&Vg(L.C))){var I=Vj("_gcl_gb");y("gclgb",I.join("."))}y("gtm",Qm(!e));tn&&g&&Vg(L.C)&&(dj(f||{}),y("auid",$i[aj(f.prefix)]||""));
a.Tf&&y("did",a.Tf);var O=B+"/pagead/landing?"+z.join("&");sg(O)}}var c=!!a.Td,d=!!a.ya,e=a.W,f=void 0===a.Tc?{}:a.Tc,g=void 0===a.$c?!0:a.$c,h=bk(),l=h.gclid||"",m=h.gclsrc,n=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),t=Mg();if(r||t)t?Zg(function(){b();Vg(L.C)||Yg(function(u){return b(!0,u.Pf)},L.C)},[L.C]):b()}function wn(a,b){var c=a&&!Vg(L.C);return b&&c?"0":b}var jo=function(){var a=!0;sn(7)&&sn(9)&&sn(10)||(a=!1);var b=!0;b=!1;b&&!io()&&(a=!1);return a},io=function(){var a=!0;sn(3)&&sn(4)||(a=!1);return a};var Jo=!1;function Ko(){var a=Sh;return a.gcq=a.gcq||new Lo}
var Mo=function(a,b,c){Ko().register(a,b,c)},No=function(a,b,c,d){Ko().push("event",[b,a],c,d)},Oo=function(a,b){Ko().push("config",[a],b)},Po=function(a,b,c,d){Ko().push("get",[a,b],c,d)},Qo=function(a){return Ko().getRemoteConfig(a)},Ro={},So=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},To=function(a,b,c,d,e){this.type=a;this.s=b;this.W=c||"";this.g=d;this.o=e},Lo=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1};this.enableDeferrableCommandAfterConfig=
Jo},Uo=function(a,b){var c=Ak(b);return a.D[c.containerId]=a.D[c.containerId]||new So},Vo=function(a,b,c){if(b){var d=Ak(b);if(d&&1===Uo(a,b).status){Uo(a,b).status=2;var e={};dm&&(e.timeoutId=F.setTimeout(function(){Cf(38);Pl()},3E3));a.push("require",[e],d.containerId);Ro[d.containerId]=ab();if(Dk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Am(c,g)||h;ig(l)}}}},Wo=function(a,b,c,d){if(d.W){var e=Uo(a,d.W),f=e.o;if(f){var g=J(c),h=J(e.targetConfig[d.W]),l=J(e.containerConfig),m=J(e.remoteConfig),n=J(a.o),q=ki("gtm.uniqueEventId"),r=Ak(d.W).prefix,t=Km(Jm(Lm(Im(Hm(Gm(Fm(Em(Dm(g),h),l),m),n),function(){
fm(q,r,"2");}),function(){fm(q,r,"3");}),function(u,v){a.s[u]=v}),function(u){return a.s[u]});try{fm(q,r,"1");f(d.W,b,d.s,t)}catch(u){fm(q,r,"4");}}}};k=Lo.prototype;
k.register=function(a,b,c){var d=Uo(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){J(d.remoteConfig,c);d.remoteConfig=c}var e=Ak(a),f=Ro[e.containerId];if(void 0!==f){var g=Sh[e.containerId].bootstrap,h=e.prefix.toUpperCase();Sh[e.containerId]._spx&&(h=h.toLowerCase());var l=ki("gtm.uniqueEventId"),m=h,n=ab()-g;if(dm&&!Ul[l]){l!==Ql&&(Ml(),Ql=l);var q=m+"."+Math.floor(g-
f)+"."+Math.floor(n);Yl=Yl?Yl+","+q:"&cl="+q}delete Ro[e.containerId]}this.flush()}};k.push=function(a,b,c,d){var e=Math.floor(ab()/1E3);Vo(this,c,b[0][L.Da]||this.o[L.Da]);Jo&&c&&Uo(this,c).g&&(d=!1);this.g.push(new To(a,e,c,b,d));d||this.flush()};k.insert=function(a,b,c){var d=Math.floor(ab()/1E3);0<this.g.length?this.g.splice(1,0,new To(a,d,c,b,!1)):this.g.push(new To(a,d,c,b,!1))};
k.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.o)Jo?!f.W||Uo(this,f.W).g?(f.o=!1,this.g.push(f)):c.push(f):(f.o=!1,this.g.push(f));else switch(f.type){case "require":if(3!==Uo(this,f.W).status&&!a){Jo&&this.g.push.apply(this.g,c);return}dm&&F.clearTimeout(f.g[0].timeoutId);break;case "set":Ua(f.g[0],function(r,t){J(mb(r,t),b.o)});break;case "config":e.za={};Ua(f.g[0],function(r){return function(t,u){J(mb(t,u),r.za)}}(e));var g=!!e.za[L.Hc];delete e.za[L.Hc];
var h=Uo(this,f.W),l=Ak(f.W),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.W]={});h.g&&g||Wo(this,L.ia,e.za,f);h.g=!0;delete e.za[L.Qb];m?J(e.za,h.containerConfig):J(e.za,h.targetConfig[f.W]);Jo&&(d=!0);break;case "event":e.qc={};Ua(f.g[0],function(r){return function(t,u){J(mb(t,u),r.qc)}}(e));Wo(this,f.g[1],e.qc,f);break;case "get":var n={},q=(n[L.Oa]=f.g[0],n[L.Na]=f.g[1],n);Wo(this,L.Ba,q,f)}this.g.shift();e={za:e.za,qc:e.qc}}Jo&&(this.g.push.apply(this.g,c),d&&this.flush())};
k.getRemoteConfig=function(a){return Uo(this,a).remoteConfig};function Xo(a,b){var c=this;};function Yo(a,b,c){};function Zo(a,b,c,d){};function $o(a){};var ap=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":tg(a,"className"),"gtm.elementId":a["for"]||og(a,"id")||"","gtm.elementTarget":a.formTarget||tg(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||tg(a,"href")||a.src||a.code||a.codebase||"";return d},bp=function(a){Sh.hasOwnProperty("autoEventsSettings")||(Sh.autoEventsSettings={});var b=Sh.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},cp=function(a,b,c){bp(a)[b]=c},dp=function(a,b,c,d){var e=bp(a),f=bb(e,b,d);e[b]=c(f)},ep=function(a,b,c){var d=bp(a);return bb(d,b,c)};var fp={},gp=[];
var np=function(a,b){};

function qp(a,b){};var rp=/^\s*$/,sp,tp=!1;
function Ep(a,b){}function Fp(a,b,c){};var Gp=!!F.MutationObserver,Hp=void 0,Ip=function(a){if(!Hp){var b=function(){var c=N.body;if(c)if(Gp)(new MutationObserver(function(){for(var e=0;e<Hp.length;e++)Q(Hp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;mg(c,"DOMNodeInserted",function(){d||(d=!0,Q(function(){d=!1;for(var e=0;e<Hp.length;e++)Q(Hp[e])}))})}};Hp=[];N.body?b():Q(b)}Hp.push(a)};var Kp=["www.youtube.com","www.youtube-nocookie.com"],Lp,Mp=!1,Np=0;
function Xp(a,b){}function Yp(a,b){return!0};function Zp(a,b,c){};function $p(a,b){var c;K(H(this),["path:!string"],[a]);kf(this,"access_globals","execute",a);for(var d=a.split("."),e=F,f=e[d[0]],g=1;f&&g<d.length;g++)if(e=f,f=f[d[g]],e===F||e===N)return;if("function"!==Cb(f))return;var h=!1;for(var l=[],m=1;m<arguments.length;m++)l.push(Gb(arguments[m],this.g,h));var n=(0,this.g.M)(f,e,l);
c=Fb(n,this.g);void 0===c&&void 0!==n&&Cf(45);return c};function aq(a){};function bq(a){};var cq=!1,dq=[];function eq(){if(!cq){cq=!0;for(var a=0;a<dq.length;a++)Q(dq[a])}}var fq=function(a){cq?Q(a):dq.push(a)};function gq(a){K(H(this),["listener:!Fn"],arguments);kf(this,"process_dom_events","window","load");fq(Gb(a))};function hq(a){var b;return b};function iq(a,b){var c;var d=!1;var e=Fb(c,this.g,d);void 0===e&&void 0!==c&&Cf(45);return e};function jq(a){var b;K(H(this),["path:!string"],arguments);kf(this,"access_globals","read",a);var c=a.split("."),d=lb(c,[F,N]);if(!d)return;var e=d[c[c.length-1]],f=!1;b=Fb(e,this.g,f);void 0===b&&void 0!==e&&Cf(45);return b};function kq(a,b){var c=null,d=!1;K(H(this),["functionPath:!string","arrayPath:!string"],arguments);kf(this,"access_globals","readwrite",a);kf(this,"access_globals","readwrite",b);var e=[F,N],f=a.split("."),g=lb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!La(l))return null;
if(l)return Fb(l,this.g,d);var m;l=function(){if(!La(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var n=b.split("."),q=lb(n,e),r=n[n.length-1];if(void 0===q)throw Error("Path "+n+" does not exist.");m=q[r];void 0===m&&(m=[],q[r]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};return Fb(c,this.g,d)};function lq(a){var b;var g=!1;return Fb(b,this.g,g)};var mq=function(a){var b;return b};function nq(a,b){b=void 0===b?!0:b;var c;return c};function oq(a){var b=null;return b};function pq(a,b){var c;return c};function qq(a,b){var c;return c};function rq(a){var b="";return b};function sq(a,b){var c;return c};function tq(a){var b="";return b};function uq(){kf(this,"get_user_agent");return F.navigator.userAgent};function vq(a,b){};var wq={};function xq(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],ig(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)Q(g[h]);g.push=function(l){Q(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)Q(g[h]);e[f]=null},b)):ig(a,c,d,b)}
function yq(a,b,c,d){K(H(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);kf(this,"inject_script",a);var e=this.g;xq(a,void 0,function(){b&&b.o(e)},function(){c&&c.o(e)},wq,d);}var zq=Object.freeze({dl:1,id:1}),Aq={};
function Bq(a,b,c,d){};function Cq(a){var b=!0;return b};var Dq=function(){return!1},Eq={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Fq(){};function Gq(a,b){var c;return c};function Hq(a){var b=void 0;return b};function Iq(a,b){var c=!1;return c};function Jq(){var a="";return a};function Kq(){var a="";return a};function Lq(){};function Mq(a,b,c,d){d=void 0===d?!1:d;};function Nq(a,b,c){};function Oq(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Pq(a){K(H(this),["consentSettings:!DustMap"],arguments);for(var b=a.$a(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==L.md&&kf(this,"access_consent",e,"write")}Tg(Gb(a))};function Qq(a,b,c){K(H(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);kf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=lb(e,[F,N]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Gb(b,this.g,d),!0;return!1};function Rq(a,b,c){}
;var Sq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Tq(a,b,c,d){var e=this;};function Uq(a,b,c){}
;var Vq={},Wq={};Vq.getItem=function(a){var b=null;return b};
Vq.setItem=function(a,b){};
Vq.removeItem=function(a){};Vq.clear=function(){};var Xq=function(a){var b;return b};function Yq(a){K(H(this),["consentSettings:!DustMap"],arguments);var b=Gb(a),c;for(c in b)b.hasOwnProperty(c)&&kf(this,"access_consent",c,"write");Ug(b)};var ed=function(){var a=new xf;Dk()?(a.add("injectHiddenIframe",Ja),a.add("injectScript",Ja)):(a.add("injectHiddenIframe",vq),a.add("injectScript",yq));var b=Nq;a.add("Math",af());a.add("TestHelper",Af());a.add("addEventCallback",$o);a.add("aliasInWindow",Yp);a.add("assertApi",Xe);a.add("assertThat",Ye);a.add("callInWindow",
$p);a.add("callLater",aq);a.add("copyFromDataLayer",iq);a.add("copyFromWindow",jq);a.add("createArgumentsQueue",kq);a.add("createQueue",lq);a.add("decodeUri",df);a.add("decodeUriComponent",ef);a.add("encodeUri",ff);a.add("encodeUriComponent",gf);a.add("fail",hf);a.add("fromBase64",mq,!("atob"in F));a.add("generateRandom",jf);a.add("getContainerVersion",lf);a.add("getCookieValues",nq);a.add("getQueryParameters",pq);a.add("getReferrerQueryParameters",qq);a.add("getReferrerUrl",rq);a.add("getTimestamp",
mf);a.add("getTimestampMillis",mf);a.add("getType",nf);a.add("getUrl",tq);a.add("localStorage",Eq,!Dq());a.add("logToConsole",Fq);a.add("makeInteger",pf);a.add("makeNumber",qf);a.add("makeString",rf);a.add("makeTableMap",sf);a.add("mock",uf);a.add("parseUrl",Hq);a.add("queryPermission",Iq);a.add("readCharacterSet",Jq);a.add("readTitle",Kq);a.add("sendPixel",b);a.add("setCookie",Oq);a.add("setInWindow",Qq);a.add("sha256",Tq);a.add("templateStorage",Vq);a.add("toBase64",Xq,!("btoa"in F));a.add("JSON",
of(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;c&&a.add("setDefaultConsentState",Pq);
Dk()?zf(a,"internal.injectScript",
Ja):zf(a,"internal.injectScript",Bq);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.o.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.$b();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.o.hasOwnProperty(d)?
a.o[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var cd,qe;
function Zq(){var a=data.runtime||[],b=data.runtime_lines;cd=new ad;$q();Jd=function(e,f,g){ar(f);var h=new wb;Ua(f,function(t,u){var v=Fb(u);void 0===v&&void 0!==u&&Cf(44);h.set(t,v)});cd.g.g.L=ee();var l={vh:re(e),eventId:void 0!==g?g.id:void 0,Ub:void 0!==g?function(t){return g.Ra.Ub(t)}:void 0,$b:function(){return e},log:function(){}};if(hm()){var m=im(),
n=void 0,q=void 0;l.qa={Vb:{},zb:function(t,u,v){1===u&&(n=t);7===u&&(q=v);m(t,u,v)},ke:tf()};l.log=function(t,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:t,source:q,message:v})}}}var r=dd(l,[e,h]);cd.g.g.L=void 0;r instanceof ra&&"return"===r.g&&(r=r.o);return Gb(r)};fd();for(var c=0;c<a.length;c++){var d=a[c];if(!Na(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&be(d,b[c]);cd.Wc(d)}}
function ar(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;La(b)&&(a.gtmOnSuccess=function(){Q(b)});La(c)&&(a.gtmOnFailure=function(){Q(c)})}function $q(){var a=cd;Sh.SANDBOXED_JS_SEMAPHORE=Sh.SANDBOXED_JS_SEMAPHORE||0;gd(a,function(b,c,d){Sh.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Sh.SANDBOXED_JS_SEMAPHORE--}})}function br(a){void 0!==a&&Ua(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");di[e]=di[e]||[];di[e].push(b)}})};var cr="HA GF G UA AW DC".split(" "),dr=!1,er={},fr=!1;function gr(a,b){var c={event:a};b&&(c.eventModel=J(b),b[L.td]&&(c.eventCallback=b[L.td]),b[L.Bc]&&(c.eventTimeout=b[L.Bc]));return c}function hr(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:ei()});return a["gtm.uniqueEventId"]}
function ir(){return dr}
var lr={config:function(a){var b,c;void 0===c&&(c=ei());return b},consent:function(a){function b(){ir()&&J(a[2],{subcommand:a[1]})}if(3===a.length){Cf(39);var c=ei(),d=a[1];"default"===d?(b(),Tg(a[2])):"update"===d&&(b(),Ug(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&A(b)){var c;if(2<a.length){if(!Eb(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=gr(b,c),e=void 0;void 0===e&&ei();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){fr=!0;ir();var b={event:"gtm.js","gtm.start":a[1].getTime()};return b}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=qe.o;d.g[b]?d.g[b].push(c):
d.g[b]=[c]}},set:function(a){var b;2==a.length&&Eb(a[1])?b=J(a[1]):3==a.length&&A(a[1])&&(b={},Eb(a[2])||Na(a[2])?b[a[1]]=J(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},mr={policy:!0};var nr=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},pr=function(a){var b=or(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Gr=function(a){if(Fr(a))return a;this.g=a};Gr.prototype.Oh=function(){return this.g};var Fr=function(a){return!a||"object"!==Cb(a)||Eb(a)?!1:"getUntrustedUpdateValue"in a};Gr.prototype.getUntrustedUpdateValue=Gr.prototype.Oh;var Hr=[],Ir=!1,Jr=!1,Kr=!1,Lr=function(a){return F["dataLayer"].push(a)},Mr=function(a){var b=Sh["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Nr(a){var b=a._clear;Ua(a,function(d,e){"_clear"!==d&&(b&&ni(d,void 0),ni(d,e))});$h||($h=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=ei(),a["gtm.uniqueEventId"]=c,ni("gtm.uniqueEventId",c));return ym(a)}function Or(){var a=Hr[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Va(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Pr(){for(var a=!1;!Kr&&0<Hr.length;){var b=!1;if(b&&!Jr&&Or()){var c={};Hr.unshift((c.event=
"gtm.init",c));Jr=!0}var d=!1;if(d&&!Ir&&Or()){var e={};Hr.unshift((e.event="gtm.init_consent",e));Ir=!0}Kr=!0;delete hi.eventModel;ji();var f=Hr.shift();if(null!=f){var g=Fr(f);
if(g){var h=f;f=Fr(h)?h.getUntrustedUpdateValue():void 0;oi()}try{if(La(f))try{f.call(li)}catch(v){}else if(Na(f)){var l=f;if(A(l[0])){var m=l[0].split("."),n=m.pop(),q=l.slice(1),r=ki(m.join("."),2);if(void 0!==r&&null!==r)try{r[n].apply(r,q)}catch(v){}}}else{if(Va(f)){a:{var t=f;if(t.length&&A(t[0])){var u=lr[t[0]];if(u&&(!g||!mr[t[0]])){f=u(t);break a}}f=void 0}if(!f){Kr=!1;continue}}a=Nr(f)||a}}finally{g&&ji(!0)}}Kr=!1}
return!a}function Qr(){var a=Pr();try{nr(F["dataLayer"],me.I)}catch(b){}return a}
var Sr=function(){var a=eg("dataLayer",[]),b=eg("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ml(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});fq(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Sh.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Gr(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Hr.push.apply(Hr,e);if(300<
this.length)for(Cf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Pr()&&h};var d=a.slice(0);Hr.push.apply(Hr,d);Rr()&&Q(Qr)},Rr=function(){var a=!0;return a};var Tr={};Tr.Ic=new String("undefined");
var Ur=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Tr.Ic?b:a[d]);return c.join("")}};Ur.prototype.toString=function(){return this.g("undefined")};Ur.prototype.valueOf=Ur.prototype.toString;Tr.oh=Ur;Tr.Nd={};Tr.Ch=function(a){return new Ur(a)};var Vr={};Tr.mi=function(a,b){var c=ei();Vr[c]=[a,b];return c};Tr.Rf=function(a){var b=a?0:1;return function(c){var d=Vr[c];if(d&&"function"===typeof d[b])d[b]();Vr[c]=void 0}};Tr.Sh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Tr.ii=function(a){if(a===Tr.Ic)return a;var b=ei();Tr.Nd[b]=a;return'google_tag_manager["'+me.I+'"].macro('+b+")"};Tr.ci=function(a,b,c){a instanceof Tr.oh&&(a=a.g(Tr.mi(b,c)),b=Ja);return{Ph:a,onSuccess:b}};var Wr=["input","select","textarea"],Xr=["button","hidden","image","reset","submit"],Yr=function(a){var b=a.tagName.toLowerCase();return!Qa(Wr,function(c){return c===b})||"input"===b&&Qa(Xr,function(c){return c===a.type.toLowerCase()})?!1:!0},Zr=function(a){return a.form?a.form.tagName?a.form:N.getElementById(a.form):rg(a,["form"],100)},$r=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Yr(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var ks=F.clearTimeout,ls=F.setTimeout,R=function(a,b,c){if(Dk()){b&&Q(b)}else return ig(a,b,c)},ms=function(){return new Date},ns=function(){return F.location.href},os=function(a){return rh(th(a),"fragment")},ps=function(a){return sh(th(a))},qs=function(a,b){return ki(a,b||2)},rs=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Lr(a)):d=Lr(a);return d},ss=function(a,b){F[a]=b},T=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},ts=function(a,b,c){return Ci(a,b,void 0===c?!0:!!c)},us=function(a,b,c){return 0===Li(a,b,c)},vs=function(a,b){if(Dk()){b&&Q(b)}else kg(a,b)},ws=function(a){return!!ep(a,"init",!1)},xs=function(a){cp(a,"init",!0)},ys=function(a){var b=Yh+"?id="+encodeURIComponent(a)+"&l=dataLayer";R(Fk("https://","http://",b))},zs=function(a,b,c){dm&&(Ib(a)||gm(c,b,a))};var As=Tr.ci;function Xs(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Ys=new Sa;function Zs(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Ys.get(e);f||(f=new RegExp(b,d),Ys.set(e,f));return f.test(a)}catch(g){return!1}}
function $s(a,b){function c(g){var h=th(g),l=rh(h,"protocol"),m=rh(h,"host",!0),n=rh(h,"port"),q=rh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function at(a){return bt(a)?1:0}
function bt(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Na(c)){for(var d=0;d<c.length;d++){var e=J(a,{});J({arg1:c[d],any_of:void 0},e);if(at(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return Xs(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Pa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return Zs(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return $s(b,c)}return!1};var ct=encodeURI,V=encodeURIComponent,dt=lg;var et=function(a,b){if(!a)return!1;var c=rh(th(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var ft=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Nu(){return F.gaGlobal=F.gaGlobal||{}}var Ou=function(){var a=Nu();a.hid=a.hid||Ra();return a.hid},Pu=function(a,b){var c=Nu();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var lv=function(){if(La(F.__uspapi)){var a="";try{F.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Fv=window,Gv=document,Hv=function(a){var b=Fv._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Fv["ga-disable-"+a])return!0;try{var c=Fv.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=yi("AMP_TOKEN",String(Gv.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Gv.getElementById("__gaOptOutExtension")?!0:!1};var Iv={};function Lv(a){delete a.eventModel[L.Qb];Nv(a.eventModel)}var Nv=function(a){Ua(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[L.Ea]||{};Ua(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Qv=function(a,b,c){No(b,c,a)},Rv=function(a,b,c){No(b,c,a,!0)},Yv=function(a,b){};
function Sv(a,b){}var W={h:{}};
W.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){W.__gaawc=b;W.__gaawc.i="gaawc";W.__gaawc.m=!0;W.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=ft(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(L.Ea)||b.vtp_userProperties){var e=d[L.Ea]||{};J(ft(b.vtp_userProperties,"name","value"),e);d[L.Ea]=e}b.vtp_enableSendToServerContainer&&b.vtp_transportUrl&&(d[L.Da]=b.vtp_transportUrl,
d[L.Lb]=!0);a(d,L.sf,function(f){return Ya(f)});a(d,L.uf,function(f){return Number(f)});d.send_page_view=b.vtp_sendPageView;Oo(d,c);Q(b.vtp_gtmOnSuccess)})}();
W.h.gaawe=["google"],function(){function a(d,e,f){for(var g=0;g<e.length;g++)d.hasOwnProperty(e[g])&&(d[e[g]]=f(d[e[g]]))}function b(d,e,f){var g={id:"transaction_id",revenue:"value",list:"item_list_name"},h={click:L.od,detail:L.Aa,add:L.mb,remove:L.nb,checkout:L.Ua,checkout_option:"checkout_option",purchase:L.ra,refund:L.ob},l={},m=function(t,u){l[t]=l[t]||u},n=function(t,u,v){v=void 0===v?!1:v;c.push(6);if(t){l.items=l.items||[];for(var x={},z=0;z<t.length;x={ib:x.ib},z++)x.ib={},Ua(t[z],function(y){return function(B,
C){v&&"id"===B?y.ib.promotion_id=C:v&&"name"===B?y.ib.promotion_name=C:y.ib[B]=C}}(x)),l.items.push(x.ib)}if(u)for(var w in u)g.hasOwnProperty(w)?m(g[w],u[w]):m(w,u[w])},q;if("dataLayer"===d.vtp_getEcommerceDataFrom){q=q||ri(d.vtp_gtmEventId,"eventModel");if(!q){q=q||ri(d.vtp_gtmEventId,"ecommerce")}}else q=d.vtp_ecommerceMacroData;if(Eb(q)){c.push(5);for(var r in q)q.hasOwnProperty(r)&&("currencyCode"===r?m("currency",q.currencyCode):"impressions"===r&&e===L.xc?n(q.impressions,null):"promoClick"===r&&e===L.Me?n(q.promoClick.promotions,q.promoClick.actionField,!0):"promoView"===r&&e===L.Ne?n(q.promoView.promotions,q.promoView.actionField,!0):h.hasOwnProperty(r)?e===
h[r]&&n(q[r].products,q[r].actionField):l[r]=q[r]);J(l,f)}}var c=[];(function(d){W.__gaawe=d;W.__gaawe.i="gaawe";W.__gaawe.m=!0;W.__gaawe.priorityOverride=0})(function(d){var e=String(d.vtp_measurementIdOverride||d.vtp_measurementId),f=String(d.vtp_eventName);if("_"===f.charAt(0))Q(d.vtp_gtmOnFailure);else{var g={};c=[];d.vtp_sendEcommerceData&&(0<=L.tf.indexOf(f)||"checkout_option"===f)&&b(d,f,g);var h=ft(d.vtp_eventParameters,"name","value"),l;for(l in h)h.hasOwnProperty(l)&&(g[l]=h[l]);if(g.hasOwnProperty(L.Ea)||
d.vtp_userProperties){var m=g[L.Ea]||{};J(ft(d.vtp_userProperties,"name","value"),m);g[L.Ea]=m}Nv(g);0<c.length&&(g[L.Fd]=c);a(g,L.sf,function(n){return Ya(n)});a(g,L.uf,function(n){return Number(n)});No(f,g,e);Q(d.vtp_gtmOnSuccess)}})}();
W.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var y=[],B=w.split(","),C=0;C<B.length;C++){var E=Number(B[C]);if(isNaN(E))return[];n.test(B[C])||y.push(E)}return y}function c(){var w=0,y=0;return function(){var B=fh(),C=B.height;w=Math.max(v.scrollLeft+B.width,w);y=Math.max(v.scrollTop+C,y);return{Wd:w,Xd:y}}}function d(){t=T("self");
u=t.document;v=u.scrollingElement||u.body&&u.body.parentNode;z=c()}function e(w,y,B,C){var E=l(y),D={},I;for(I in E){D.kb=I;if(E.hasOwnProperty(D.kb)){var O=Number(D.kb);w<O||(rs({event:"gtm.scrollDepth","gtm.scrollThreshold":O,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[D.kb].join(",")}),dp("sdl",y,function(S){return function(X){delete X[S.kb];return X}}(D),{}))}D={kb:D.kb}}}function f(){var w=z(),y=w.Wd,B=w.Xd,C=y/v.scrollWidth*100,E=B/v.scrollHeight*100;e(y,"horiz.pix",
q.Kc,r.vf);e(C,"horiz.pct",q.Jc,r.vf);e(B,"vert.pix",q.Kc,r.Kf);e(E,"vert.pct",q.Jc,r.Kf);cp("sdl","pending",!1)}function g(){var w=250,y=!1;u.scrollingElement&&u.documentElement&&t.addEventListener&&(w=50,y=!0);var B=0,C=!1,E=function(){C?B=ls(E,w):(B=0,f(),ws("sdl")&&!a()&&(ng(t,"scroll",D),ng(t,"resize",D),cp("sdl","init",!1)));C=!1},D=function(){y&&z();B?C=!0:(B=ls(E,w),cp("sdl","pending",!0))};return D}function h(w,y,B){if(y){var C=b(String(w));dp("sdl",B,function(E){for(var D=0;D<C.length;D++){var I=
String(C[D]);E.hasOwnProperty(I)||(E[I]=[]);E[I].push(y)}return E},{})}}function l(w){return ep("sdl",w,{})}function m(w){Q(w.vtp_gtmOnSuccess);var y=w.vtp_uniqueTriggerId,B=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,E=w.vtp_verticalThresholdUnits,D=w.vtp_verticalThresholdsPixels,I=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case q.Kc:h(B,y,"horiz.pix");break;case q.Jc:h(C,y,"horiz.pct")}switch(E){case q.Kc:h(D,y,"vert.pix");break;case q.Jc:h(I,
y,"vert.pct")}ws("sdl")?ep("sdl","pending")||(x||(d(),x=!0),Q(function(){return f()})):(d(),x=!0,v&&(xs("sdl"),cp("sdl","pending",!0),Q(function(){f();if(a()){var O=g();mg(t,"scroll",O);mg(t,"resize",O)}else cp("sdl","init",!1)})))}var n=/^\s*$/,q={Jc:"PERCENT",Kc:"PIXELS"},r={Kf:"vertical",vf:"horizontal"},t,u,v,x=!1,z;(function(w){W.__sdl=w;W.__sdl.i="sdl";W.__sdl.m=!0;W.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?m(w):fq(function(){m(w)})})}();

W.h.jsm=["customScripts"],function(){(function(a){W.__jsm=a;W.__jsm.i="jsm";W.__jsm.m=!0;W.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);zs(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
W.h.c=["google"],function(){(function(a){W.__c=a;W.__c.i="c";W.__c.m=!0;W.__c.priorityOverride=0})(function(a){zs(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
W.h.d=["google"],function(){(function(a){W.__d=a;W.__d.i="d";W.__d.m=!0;W.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType)try{var e=ah(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}catch(f){b=null}else b=N.getElementById(a.vtp_elementId);b&&(d?c=og(b,d):c=pg(b));return $a(String(b&&c))})}();
W.h.e=["google"],function(){(function(a){W.__e=a;W.__e.i="e";W.__e.m=!0;W.__e.priorityOverride=0})(function(a){var b=String(ri(a.vtp_gtmEventId,"event"));return b})}();
W.h.f=["google"],function(){(function(a){W.__f=a;W.__f.i="f";W.__f.m=!0;W.__f.priorityOverride=0})(function(a){var b=qs("gtm.referrer",1)||N.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?rh(th(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ps(String(b)):String(b)})}();
W.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ap(c,"gtm.click");rs(d)}}(function(b){W.__cl=b;W.__cl.i="cl";W.__cl.m=!0;W.__cl.priorityOverride=0})(function(b){if(!ws("cl")){var c=T("document");mg(c,"click",a,!0);xs("cl")}Q(b.vtp_gtmOnSuccess)})}();
W.h.j=["google"],function(){(function(a){W.__j=a;W.__j.i="j";W.__j.m=!0;W.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=T(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];zs(c,"j",a.vtp_gtmEventId);return c})}();W.h.k=["google"],function(){(function(a){W.__k=a;W.__k.i="k";W.__k.m=!0;W.__k.priorityOverride=0})(function(a){return ts(a.vtp_name,qs("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

W.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){W.__access_globals=b;W.__access_globals.i="access_globals";W.__access_globals.m=!0;W.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,r){if(!A(r))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Pa(e,r))return}else if("write"===q){if(-1<Pa(f,r))return}else if("readwrite"===q){if(-1<Pa(f,r)&&-1<Pa(e,r))return}else if("execute"===q){if(-1<Pa(g,r))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
r+".");},R:a}})}();
W.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){W.__u=b;W.__u.i="u";W.__u.m=!0;W.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:qs("gtm.url",1))||ns();var d=b[a("vtp_component")];if(!d||"URL"==d)return ps(String(c));var e=th(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Na(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var q=rh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=rh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
W.h.v=["google"],function(){(function(a){W.__v=a;W.__v.i="v";W.__v.m=!0;W.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=qs(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;zs(d,"v",a.vtp_gtmEventId);return d})}();
W.h.ua=["google"],function(){function a(q){return Vg(q)}function b(q,r,t){var u=!1;if(Mg()&&!u&&!e[q]){var v=!Vg(L.F),x=function(){var z=yl(),w="gtm"+ei(),y=m(r);y["&gtm"]=Qm(!0);var B={name:w};l(y,B,!0);var C=void 0,E=B._useUp;z(function(){var D=z.getByName(t);D&&(C=D.get("clientId"))});
z("create",q,B);v&&Vg(L.F)&&(v=!1,z(function(){var D=z.getByName(w);!D||D.get("clientId")===C&&E||(y["&gcs"]=Wg(),y["&gcu"]="1",D.set(y),D.send("pageview"))}));z(function(){z.remove(w)})};Qg(x,L.F);Qg(x,L.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,r,t){var u=0;if(q)for(var v in q)if(!h[v]&&
q.hasOwnProperty(v)&&(t&&f[v]||!t&&void 0===f[v])){var x=g[v]?Ya(q[v]):q[v];"anonymizeIp"!=v||x||(x=void 0);r[v]=x;u++}return u},m=function(q){var r={};q.vtp_gaSettings&&J(ft(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);J(ft(q.vtp_fieldsToSet,"fieldName","value"),r);Vg(L.F)||(r.storage="none");Vg(L.C)||(r.allowAdFeatures=!1,r.storeGac=!1);jo()||(r.allowAdFeatures=!1);io()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(Ya(r.urlPassthrough)){r._useUp=!0;var t=!1;Mg()&&!t&&(r._cs=a)}return r},n=function(q){function r(ya,ba){void 0!==ba&&D("set",ya,ba)}var t={},u={},v={},
x={};if(q.vtp_gaSettings){var z=q.vtp_gaSettings;J(ft(z.vtp_contentGroup,"index","group"),u);J(ft(z.vtp_dimension,"index","dimension"),v);J(ft(z.vtp_metric,"index","metric"),x);var w=J(z);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=void 0;q=J(q,w)}J(ft(q.vtp_contentGroup,"index","group"),u);J(ft(q.vtp_dimension,"index","dimension"),v);J(ft(q.vtp_metric,"index","metric"),x);var y=m(q),B=Al(q.vtp_functionName);if(La(B)){var C="",E="";q.vtp_setTrackerName&&
"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(E=q.vtp_trackerName,C=E+"."):(E="gtm"+ei(),C=E+".");var D=function(ya){var ba=[].slice.call(arguments,0);ba[0]=C+ba[0];B.apply(window,ba)},I=function(ya,ba){return void 0===ba?ba:ya(ba)},O=function(ya,ba){if(ba)for(var jb in ba)ba.hasOwnProperty(jb)&&D("set",ya+jb,ba[jb])},S=function(){},X={name:E};l(y,X,!0);var la=q.vtp_trackingId||t.trackingId;B("create",la,X);D("set","&gtm",Qm(!0));var U=!1;Mg()&&!U&&(D("set","&gcs",Wg()),b(la,q,E));y._x_19&&(null==dg&&delete y._x_19,y._x_20&&!d[E]&&(d[E]=!0,B(Fl(E,String(y._x_20)))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(ya,ba){void 0!==q[ba]&&D("set",ya,q[ba])})("nonInteraction",
"vtp_nonInteraction");O("contentGroup",u);O("dimension",v);O("metric",x);var P={};l(y,P,!1)&&D("set",P);var Y;q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var ya=y&&y.hitCallback;La(ya)&&ya();q.vtp_gtmOnSuccess()});var ha=function(ya,ba){return void 0===q[ya]?t[ba]:q[ya]};if("TRACK_EVENT"==
q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),S());var pa={hitType:"event",eventCategory:String(ha("vtp_eventCategory","category")),eventAction:String(ha("vtp_eventAction","action")),eventLabel:I(String,ha("vtp_eventLabel","label")),eventValue:I(Xa,ha("vtp_eventValue","value"))};l(Y,pa,!1);D("send",pa);}else if("TRACK_SOCIAL"==q.vtp_trackType){
var Fa={hitType:"social",socialNetwork:String(q.vtp_socialNetwork),socialAction:String(q.vtp_socialAction),socialTarget:String(q.vtp_socialActionTarget)};l(Y,Fa,!1);D("send",Fa);}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){
var nb={hitType:"timing",timingCategory:String(ha("vtp_timingCategory","category")),timingVar:String(ha("vtp_timingVar","name")),timingValue:Xa(ha("vtp_timingValue","value")),timingLabel:I(String,ha("vtp_timingLabel","label"))};l(Y,nb,!1);D("send",nb);}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(D("require","ec","ec.js"),S());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var dc="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");D("require","displayfeatures",void 0,{cookieName:dc})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Kb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:Kb})}Y?D("send","pageview",Y):D("send","pageview");q.vtp_autoLinkDomains&&Bl(C,q.vtp_autoLinkDomains,!!q.vtp_useHashAutoLink,!!q.vtp_decorateFormsAutoLink);
Ya(y.urlPassthrough)&&Cl(C)}if(!c){var tb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(tb="internal/"+tb);c=!0;var Yd=Am(y._x_19,"/analytics.js"),Fg=Fk("https:","http:","//www.google-analytics.com/"+tb,y&&!!y.forceSSL);R("analytics.js"===tb&&Yd?Yd:Fg,function(){var ya=yl();ya&&ya.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else Q(q.vtp_gtmOnFailure)};
(function(q){W.__ua=q;W.__ua.i="ua";W.__ua.m=!0;W.__ua.priorityOverride=0})(function(q){Zg(function(){n(q)},[L.F,L.C])})}();


W.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){W.__inject_script=b;W.__inject_script.i="inject_script";W.__inject_script.m=!0;W.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!A(f))throw d(e,{},"Script URL must be a string.");try{if(Qe(th(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},R:a}})}();






W.h.aev=["google"],function(){function a(t,u,v){var x=t||ri(u,"gtm");if(x)return x[v]}function b(t,u,v,x,z){z||(z="element");var w=u+"."+v,y;if(n.hasOwnProperty(w))y=n[w];else{var B=a(t,u,z);if(B&&(y=x(B),n[w]=y,q.push(w),35<q.length)){var C=q.shift();delete n[C]}}return y}function c(t,u,v,x){var z=a(t,u,r[v]);return void 0!==z?z:x}function d(t,u){if(!t)return!1;var v=e(ns());Na(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],z=0;z<u.length;z++){var w=u[z];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(B){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(t))return!1}else{var y=w;if(0!=y.length){if(0<=e(t).indexOf(y))return!1;x.push(e(y))}}}return!et(t,x)}function e(t){m.test(t)||(t="http://"+t);return rh(th(t),"HOST",!0)}function f(t,u,v,x){switch(t){case "SUBMIT_TEXT":return b(u,v,"FORM."+t,g,"formSubmitElement")||x;case "LENGTH":var z=b(u,v,"FORM."+t,h);return void 0===z?x:z;case "INTERACTED_FIELD_ID":return l(u,v,"id",x);case "INTERACTED_FIELD_NAME":return l(u,
v,"name",x);case "INTERACTED_FIELD_TYPE":return l(u,v,"type",x);case "INTERACTED_FIELD_POSITION":var w=a(u,v,"interactedFormFieldPosition");return void 0===w?x:w;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,v,"interactSequenceNumber");return void 0===y?x:y;default:return x}}function g(t){switch(t.tagName.toLowerCase()){case "input":return og(t,"value");case "button":return pg(t);default:return null}}function h(t){if("form"===t.tagName.toLowerCase()&&t.elements){for(var u=0,v=0;v<t.elements.length;v++)Yr(t.elements[v])&&
u++;return u}}function l(t,u,v,x){var z=a(t,u,"interactedFormField");return z&&og(z,v)||x}var m=/^https?:\/\//i,n={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(t){W.__aev=t;W.__aev.i="aev";W.__aev.m=!0;W.__aev.priorityOverride=
0})(function(t){var u=t.vtp_gtmEventId,v=t.vtp_defaultValue,x=t.vtp_varType,z;switch(x){case "TAG_NAME":var w=a(z,u,"element");return w&&w.tagName||v;case "TEXT":return b(z,u,x,pg)||v;case "URL":var y;a:{var B=String(a(z,u,"elementUrl")||v||""),C=th(B),E=String(t.vtp_component||"URL");switch(E){case "URL":y=B;break a;case "IS_OUTBOUND":y=
d(B,t.vtp_affiliatedDomains);break a;default:y=rh(C,E,t.vtp_stripWww,t.vtp_defaultPages,t.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===t.vtp_attribute)D=c(z,u,x,v);else{var I=t.vtp_attribute,O=a(z,u,"element");D=O&&og(O,I)||v||""}return D;case "MD":var S=t.vtp_mdValue,X=b(z,u,"MD",gs);return S&&X?js(X,S)||v:X||v;case "FORM":return f(String(t.vtp_component||"SUBMIT_TEXT"),z,u,v);default:var la=c(z,u,x,v);zs(la,"aev",t.vtp_gtmEventId);return la}})}();

W.h.gcs=["google"],function(){(function(a){W.__gcs=a;W.__gcs.i="gcs";W.__gcs.m=!0;W.__gcs.priorityOverride=0})(function(a){try{var b=a.vtp_siteId;if(!T("_gtmgcs")){F._gtmgcs={};var c=Fk("https:","http:","//survey.g.doubleclick.net/async_survey?site="+V(b));R(c)}a.vtp_gtmOnSuccess()}catch(d){Q(a.vtp_gtmOnFailure)}})}();
W.h.fsl=[],function(){function a(){var e=T("document"),f=c(),g=HTMLFormElement.prototype.submit;mg(e,"click",function(h){var l=h.target;if(l&&(l=rg(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&og(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=N.getElementById(l.form):m=rg(l,["form"],100);m&&f.store(m,l)}},!1);mg(e,"submit",function(h){var l=h.target;if(!l)return h.returnValue;var m=h.defaultPrevented||!1===h.returnValue,n=b(l)&&!m,q=f.get(l),r=!0;if(d(l,function(){if(r){var t;
q&&(t=e.createElement("input"),t.type="hidden",t.name=q.name,t.value=q.value,l.appendChild(t));g.call(l);t&&l.removeChild(t)}},m,n,q))r=!1;else return m||(h.preventDefault&&h.preventDefault(),h.returnValue=!1),!1;return h.returnValue},!1);HTMLFormElement.prototype.submit=function(){var h=this,l=b(h),m=!0;d(h,function(){m&&g.call(h)},!1,l)&&(g.call(h),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Qa(e,function(h){return h.form===
g})};return{store:function(g,h){var l=f(g);l?l.button=h:e.push({form:g,button:h})},get:function(g){var h=f(g);return h?h.button:null}}}function d(e,f,g,h,l){var m=ep("fsl",g?"nv.mwt":"mwt",0),n;n=g?ep("fsl","nv.ids",[]):ep("fsl","ids",[]);if(!n.length)return!0;var q=ap(e,"gtm.formSubmit",n),r=e.action;r&&r.tagName&&(r=e.cloneNode(!1).action);q["gtm.elementUrl"]=r;l&&(q["gtm.formSubmitElement"]=l);if(h&&m){if(!rs(q,Mr(f),m))return!1}else rs(q,function(){},m||2E3);return!0}(function(e){W.__fsl=e;W.__fsl.i=
"fsl";W.__fsl.m=!0;W.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,h=Number(e.vtp_waitForTagsTimeout);if(!h||0>=h)h=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(q){return Math.max(h,q)};dp("fsl","mwt",m,0);g||dp("fsl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};dp("fsl","ids",n,[]);g||dp("fsl","nv.ids",n,[]);ws("fsl")||(a(),xs("fsl"));Q(e.vtp_gtmOnSuccess)})}();W.h.smm=["google"],function(){(function(a){W.__smm=a;W.__smm.i="smm";W.__smm.m=!0;W.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=ft(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;zs(d,"smm",a.vtp_gtmEventId);return d})}();



W.h.paused=[],function(){(function(a){W.__paused=a;W.__paused.i="paused";W.__paused.m=!0;W.__paused.priorityOverride=0})(function(a){Q(a.vtp_gtmOnFailure)})}();

W.h.zone=[],function(){function a(m){for(var n=m.vtp_boundaries||[],q=0;q<n.length;q++)if(!n[q])return!1;return!0}function b(m){var n=me.I,q=n+":"+m.vtp_gtmTagId,r=qs("gtm.uniqueEventId")||0,t=el(function(){return new g}),u=a(m),v=m.vtp_enableTypeRestrictions?m.vtp_whitelistedTypes.map(function(y){return y.typeId}):null;v=v&&kb(v,f);if(t.registerZone(q,r,u,v))for(var x=m.vtp_childContainers.map(function(y){return y.publicId}),z=0;z<x.length;z++){var w=String(x[z]);t.registerChild(w,n,q)&&(0!==w.indexOf("GTM-")?
(function(y,B){rs(arguments)}("js",new Date),l&&Sh.addTargetToGroup(w),Oo({},w)):ys(w))}}var c={active:!1,isAllowed:function(){return!1},Uh:function(){return!1}},d={active:!0,isAllowed:function(){return!0},Uh:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.g={};this.o={}};g.prototype.checkState=function(m,n){var q=this.g[m];if(!q)return d;var r=this.checkState(q.cg,n);if(!r.active)return c;
for(var t=[],u=0;u<q.Ee.length;u++){var v=this.o[q.Ee[u]];v.cc(n)&&t.push(v)}return t.length?{active:!0,isAllowed:function(x,z){z=z||[];var w=r.isAllowed;if(!w(x,z))return!1;for(var y=0;y<t.length;++y)if(t[y].isAllowed(x,z))return!0;return!1}}:c};g.prototype.unregisterChild=function(m){delete this.g[m]};g.prototype.registerZone=function(m,n,q,r){var t=this.o[m];if(t)return t.s(n,q),!1;if(!q)return!1;this.o[m]=new h(n,r);return!0};g.prototype.registerChild=function(m,n,q){var r=this.g[m];if(!r&&Sh[m]||
r&&r.cg!==n)return!1;if(r)return r.Ee.push(q),!1;this.g[m]={cg:n,Ee:[q]};return!0};var h=function(m,n){this.g=[{eventId:m,cc:!0}];this.o=null;if(n){this.o={};for(var q=0;q<n.length;q++)this.o[n[q]]=!0}};h.prototype.s=function(m,n){var q=this.g[this.g.length-1];m<=q.eventId||q.cc!=n&&this.g.push({eventId:m,cc:n})};h.prototype.cc=function(m){if(!this.g||0==this.g.length)return!1;for(var n=this.g.length-1;0<=n;n--)if(this.g[n].eventId<=m)return this.g[n].cc;return!1};h.prototype.isAllowed=function(m,
n){n=n||[];if(!this.o||e[m]||this.o[m])return!0;for(var q=0;q<n.length;++q)if(this.o[n[q]])return!0;return!1};var l=!1;(function(m){W.__zone=m;W.__zone.i="zone";W.__zone.m=!0;W.__zone.priorityOverride=0})(function(m){b(m);Q(m.vtp_gtmOnSuccess)})}();
W.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=N.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,gg(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){Q(g)}}}var c=function(d){if(N.body){var e=
d.vtp_gtmOnFailure,f=As(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Ph,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(N.body,qg(g),h,e)()}else ls(function(){c(d)},
200)};W.__html=c;W.__html.i="html";W.__html.m=!0;W.__html.priorityOverride=0}();






W.h.lcl=[],function(){function a(){var c=T("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.ag||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=rg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=ep("lcl",h?"nv.mwt":"mwt",0),m;m=h?ep("lcl","nv.ids",[]):ep("lcl","ids",[]);if(m.length){var n=ap(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=!!Qa(String(tg(g,"rel")||"").split(" "),function(u){return"noreferrer"===u.toLowerCase()});
q&&Cf(36);var r=T((tg(g,"target")||"_self").substring(1)),t=!0;if(rs(n,Mr(function(){var u;if(u=t&&r){var v;a:if(q){var x;try{x=new MouseEvent(f.type,{bubbles:!0})}catch(z){if(!c.createEvent){v=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.ag=!0;f.target.dispatchEvent(x);v=!0}else v=!1;u=!v}u&&(r.location.href=tg(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else rs(n,function(){},l||2E3);return!0}}};mg(c,"click",e,!1);mg(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=tg(d,"href"),g=f.indexOf("#"),h=tg(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=ps(f),m=ps(e.location);return l!==m}return!0}(function(c){W.__lcl=c;W.__lcl.i="lcl";W.__lcl.m=!0;W.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};dp("lcl","mwt",h,0);e||dp("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};dp("lcl","ids",l,[]);e||dp("lcl","nv.ids",l,[]);ws("lcl")||(a(),xs("lcl"));Q(c.vtp_gtmOnSuccess)})}();
W.h.evl=["google"],function(){function a(){var f=Number(qs("gtm.start"))||0;return ms().getTime()-f}function b(f,g,h,l){function m(){if(!eh(f.target)){g.has(d.Lc)||g.set(d.Lc,""+a());g.has(d.Hd)||g.set(d.Hd,""+a());var q=0;g.has(d.Oc)&&(q=Number(g.get(d.Oc)));q+=100;g.set(d.Oc,""+q);if(q>=h){var r=ap(f.target,"gtm.elementVisibility",[g.g]),t=gh(f.target);r["gtm.visibleRatio"]=Math.round(1E3*t)/10;r["gtm.visibleTime"]=h;r["gtm.visibleFirstTime"]=Number(g.get(d.Hd));r["gtm.visibleLastTime"]=Number(g.get(d.Lc));
rs(r);l()}}}if(!g.has(d.Rb)&&(0==h&&m(),!g.has(d.wb))){var n=T("self").setInterval(m,100);g.set(d.Rb,n)}}function c(f){f.has(d.Rb)&&(T("self").clearInterval(Number(f.get(d.Rb))),f.o(d.Rb))}var d={Rb:"polling-id-",Hd:"first-on-screen-",Lc:"recent-on-screen-",Oc:"total-visible-time-",wb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){W.__evl=f;W.__evl.i="evl";W.__evl.m=!0;W.__evl.priorityOverride=0})(function(f){function g(){var z=!1,w=null;if("CSS"===l){try{w=ah(m)}catch(D){Cf(46)}z=!!w&&v.length!=w.length}else if("ID"===l){var y=N.getElementById(m);y&&(w=[y],z=1!=v.length||v[0]!==y)}w||(w=[],z=0<v.length);if(z){for(var B=0;B<v.length;B++){var C=
new e(v[B],t);c(C)}v=[];for(var E=0;E<w.length;E++)v.push(w[E]);0<=x&&mh(x);0<v.length&&(x=lh(h,v,[r]))}}function h(z){var w=new e(z.target,t);z.intersectionRatio>=r?w.has(d.wb)||b(z,w,q,"ONCE"===u?function(){for(var y=0;y<v.length;y++){var B=new e(v[y],t);B.set(d.wb,"1");c(B)}mh(x);if(n&&Hp)for(var C=0;C<Hp.length;C++)Hp[C]===g&&Hp.splice(C,1)}:function(){w.set(d.wb,"1");c(w)}):(c(w),"MANY_PER_ELEMENT"===u&&w.has(d.wb)&&(w.o(d.wb),w.o(d.Oc)),w.o(d.Lc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,r=(Number(f.vtp_onScreenRatio)||50)/100,t=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],x=-1;g();n&&Ip(g);Q(f.vtp_gtmOnSuccess)})}();


var Zv={};Zv.macro=function(a){if(Tr.Nd.hasOwnProperty(a))return Tr.Nd[a]},Zv.onHtmlSuccess=Tr.Rf(!0),Zv.onHtmlFailure=Tr.Rf(!1);Zv.dataLayer=li;Zv.callback=function(a){ci.hasOwnProperty(a)&&La(ci[a])&&ci[a]();delete ci[a]};Zv.bootstrap=0;Zv._spx=!1;function $v(){Sh[me.I]=Zv;hb(di,W.h);Rd=Rd||Tr;Sd=ie}
function aw(){ug.o().o();Sh=F.google_tag_manager=F.google_tag_manager||{};on();Oj.enable_gbraid_cookie_write=!0;if(Sh[me.I]){var a=Sh.zones;a&&a.unregisterChild(me.I);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Nd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Md.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},r=0;r<n.length;r++)q[n[r][0]]=Array.prototype.slice.call(n[r],1);Ld.push(q)}Pd=W;Qd=at;var t=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Zq();qe=new pe(t);if(void 0!==
u)for(var x=["sandboxedScripts"],z=0;z<u.length;z++){var w=u[z].replace(/^_*/,"");di[w]=x}br(v);$v();Sr();hl=!1;il=0;if("interactive"==N.readyState&&!N.createEventObject||"complete"==N.readyState)kl();else{mg(N,"DOMContentLoaded",kl);mg(N,"readystatechange",kl);if(N.createEventObject&&N.documentElement.doScroll){var y=!0;try{y=!F.frameElement}catch(D){}y&&ll()}mg(F,"load",kl)}cq=!1;"complete"===N.readyState?eq():mg(F,"load",eq);a:{if(!dm)break a;F.setInterval(cm,864E5);}
ai=(new Date).getTime();}}
(function(a){if(!F["__TAGGY_INSTALLED"]){var b=!1;if(N.referrer){var c=th(N.referrer);b="cct.google"===qh(c,"host")}if(!b){var d=Ci("googTaggyReferrer");b=d.length&&d[0].length}b&&(F["__TAGGY_INSTALLED"]=!0,ig("https://cct.google/taggy/agent.js"))}var f=function(){var m=F["google.tagmanager.debugui2.queue"];m||(m=[],F["google.tagmanager.debugui2.queue"]=m,ig("https://www.googletagmanager.com/debug/bootstrap"));var n={messageType:"CONTAINER_STARTING",data:{scriptSource:dg,containerProduct:"GTM",debug:!1}};n.data.resume=function(){a()};me.ug&&(n.data.initialPublish=!0);m.push(n)},g="x"===rh(F.location,"query",!1,void 0,"gtm_debug");if(!g&&N.referrer){var h=th(N.referrer);g="tagassistant.google.com"===qh(h,"host")}if(!g){var l=Ci("__TAG_ASSISTANT");g=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(g=!0);g&&dg?f():a()})(aw);

})()
