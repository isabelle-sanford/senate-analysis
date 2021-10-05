
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"217",
  
  "macros":[{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"platformType"
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wapo_login_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var l=152,h=[{name:\"EMAIL\",regex:\/([a-zA-Z0-9_\\.-]+)@([\\da-zA-Z\\.-]+)\\.([a-zA-Z\\.]{2,6})\/gi}],k=\"_ga_originalSendHitTask\";return function(a){window[k]=window[k]||a.get(\"sendHitTask\");\"number\"===typeof l\u0026\u0026a.set(\"dimension\"+l,a.get(\"hitType\"));a.set(\"sendHitTask\",function(b){var n=b,m=window[k],p=!0;try{if(\"undefined\"!==typeof h\u0026\u0026h.length){for(var c=b.get(\"hitPayload\").split(\"\\x26\"),d=0;d\u003Cc.length;d++){var e=c[d].split(\"\\x3d\");try{var f=decodeURIComponent(decodeURIComponent(e[1]))}catch(g){f=\ndecodeURIComponent(e[1])}h.forEach(function(g){f=f.replace(g.regex,\"[REDACTED \"+g.name+\"]\")});e[1]=encodeURIComponent(f);c[d]=e.join(\"\\x3d\")}b.set(\"hitPayload\",c.join(\"\\x26\"),!0)}p\u0026\u0026m(b)}catch(g){m(n)}})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var a=document.createElement(\"img\");a.src=\"https:\/\/www.washingtonpost.com\/wp-stat\/ga.png\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location;if((a=a.search.substring(1)+a.hash.substring(2))\u0026\u0026-1\u003Ca.indexOf(\"account_linking_token\")){if(-1\u003Ca.indexOf(\"article_url\")){a=a.split(\"\\x26\");for(var b=0;b\u003Ca.length;b++){var c=a[b].split(\"\\x3d\");if(\"article_url\"===c[0])return decodeURIComponent(c[1])}}return null}return document.referrer})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription_pricing"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription_default_product"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optExpActive"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageName"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"section"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"subsection"
    },{
      "function":"__remm",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",12],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^$","value","(not set)"]]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"contentType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"contentSource"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"authorName"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"authorType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"authorId"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"newsroomDesk"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"newsroomSubdesk"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"cmsName"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"cmsId"
    },{
      "function":"__v",
      "convert_case_to":2,
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"arcId"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"meterType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"seoKeywords"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"clavisTopics"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=1E3\u003C",["escape",["macro",26],8,16],".length?",["escape",["macro",26],8,16],".substring(0,1E3):",["escape",["macro",26],8,16],";return a})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"contentTags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"inlineElements"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"publishDate"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"wapoCookies"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"wapoCookies"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"propensityScoreHitAcq"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"propensityScoreSessionAcq"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"loginTypeHit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"loginTypeHit"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"userAgentHit"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"userAgentSession"
    },{
      "function":"__k",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_decodeCookie":false,
      "vtp_name":"_gaexp"
    },{
      "function":"__k",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_decodeCookie":false,
      "vtp_name":"_gaexp"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wapo_login_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wapo_actmgmt"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wapo_actmgmt"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_crtid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_crtid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_usp"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"subscriberUploadTag"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"undefined",
      "vtp_name":"domainValue"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],";return null!=window.sessionStorage.getItem(\"ISPdomain\")?window.sessionStorage.getItem(\"ISPdomain\"):null==window.sessionStorage.getItem(\"ISPdomain\")\u0026\u0026\"undefined\"!=a?(window.sessionStorage.setItem(\"ISPdomain\",a),a):\"undefined\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"undefined",
      "vtp_name":"nameValue"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",50],8,16],";return null!=window.sessionStorage.getItem(\"ISPName\")?window.sessionStorage.getItem(\"ISPName\"):null==window.sessionStorage.getItem(\"ISPName\")\u0026\u0026\"undefined\"!=a?(window.sessionStorage.setItem(\"ISPName\",a),a):\"undefined\"})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageViewType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"itid"
    },{
      "function":"__remm",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",53],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",53],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*live-ticker).*","value","$1"]]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"previousPage"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"meterReason"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"meterCount"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"meterWeight"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"iptcTopicsArray"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"auxiliaries"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"clavisKeywords"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"language"
    },{
      "function":"__v",
      "convert_null_to":"website",
      "convert_undefined_to":"website",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"website",
      "vtp_name":"property"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"platformType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"contentTopics"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"privateModeFrontEnd"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageDimension"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"commercialNode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location;if((a=a.search.substring(1)+a.hash.substring(2))\u0026\u0026-1\u003Ca.indexOf(\"account_linking_token\")){if(-1\u003Ca.indexOf(\"article_url\")){a=a.split(\"\\x26\");for(var b=0;b\u003Ca.length;b++){var c=a[b].split(\"\\x3d\");if(\"article_url\"===c[0])return decodeURIComponent(c[1]).split(\"\/\")[2]}}return null}return document.referrer.split(\"\/\")[2]||\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"adBlockFlag"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"postRecommendsDisplayAttr"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"impressionDimension"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventDimension"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"sampleThreshold"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"nonIdleTimeElapsed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"renderingElements"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"searchedKeyword"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"commentingPlatform"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"j_ucid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"galleryName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"galleryNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"errorDescription"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"socialShareButtom"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"emailEnrollMethod"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"emailEnrollLocation"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"emailEnrollInitiative"
    },{
      "function":"__u",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avName"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avProducer"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avSystem"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avHost"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avSection"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avSource"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avPlayer"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avLength"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avArcID"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avContributors"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avProducerID"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avHostID"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avContributorID"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avTags"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avPromoType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avDesk"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avPublishDate"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avKeywords"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"adAttribute"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avEnrollSource"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"avPlayerType"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"avSecondarySections"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_javascript":["template","(function(){if(window){if(!window.j_tid)if(window.btoa){var a=window.btoa(Date.now());var b=\/=\/gi;window.j_tid=a.replace(b,\"\")}else window.j_tid=\"\"+Date.now();return window.j_tid}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"promoCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"acqEntranceType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"selectedProduct"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"termSelected"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"paymentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"geoMarket"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"offerPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"acqTemplate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"acqEntrancePage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_ak_subs"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",125],
      "vtp_name":"subscription_product_page_test"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"offerRateSequenceID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"offerCurrencyCode"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",43],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"(not set)",
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key",".*v:(.*)priceFlag:(.)(.*)","value","$2"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",43],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":false,
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key",".*v:(.*)duration:(\\d+)(.*)","value","$2"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",43],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"(not set)",
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key",".*v:(.*)productID:(\\w+)(.*)","value","$2"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",43],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"(not set)",
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key",".*v:(.*)source:(\\w+)(.*)","value","$2"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"signInProfileEnvironment"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",43],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"(not set)",
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key",".*v:(.*)subscriptionID:(\\d+)(.*)","value","$2"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",43],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"(not set)",
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key",".*v:(.*)startDate:(.{10})(.*)","value","$2"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"subscription_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"subscription_experience"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_ak_v_m"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",138],
      "vtp_name":"subscription_meter_test"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_ak_v_pw"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",140],
      "vtp_name":"subscription_paywall_test"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"arcIdAcq"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_ak_offer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",143],
      "vtp_name":"subscription_checkout_page_test"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_ak_pw_m"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",145],
      "vtp_name":"subscription_prepaywall_test"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_devicetype"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wp_country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription_default_term"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription_funnel_start_page"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"emailListName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"emailSendId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"account_experience"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"gamLineItemID"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"gamCreativeID"
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avTestGroup"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avLiveProgress"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"avHeaderBidding"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"account_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"account_method"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"account_initiative"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",3]],["map","fieldName","customTask","value",["macro",4]],["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieUpdate","value","false"],["map","fieldName","hitCallback","value",["macro",5]],["map","fieldName","referrer","value",["macro",6]]],
      "vtp_useHashAutoLink":false,
      "vtp_metric":["list",["map","index","4","metric",["macro",7]],["map","index","5","metric",["macro",8]],["map","index","6","metric",["macro",9]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",10]],["map","index","2","dimension",["macro",11]],["map","index","3","dimension",["macro",13]],["map","index","4","dimension",["macro",14]],["map","index","5","dimension",["macro",15]],["map","index","6","dimension",["macro",16]],["map","index","7","dimension",["macro",17]],["map","index","8","dimension",["macro",18]],["map","index","9","dimension",["macro",19]],["map","index","10","dimension",["macro",20]],["map","index","11","dimension",["macro",21]],["map","index","12","dimension",["macro",22]],["map","index","13","dimension",["macro",23]],["map","index","14","dimension",["macro",24]],["map","index","15","dimension",["macro",25]],["map","index","16","dimension",["macro",27]],["map","index","17","dimension",["macro",28]],["map","index","18","dimension",["macro",29]],["map","index","19","dimension",["macro",30]],["map","index","20","dimension",["macro",31]],["map","index","21","dimension",["macro",32]],["map","index","22","dimension",["macro",33]],["map","index","23","dimension",["macro",34]],["map","index","24","dimension",["macro",35]],["map","index","25","dimension",["macro",36]],["map","index","26","dimension",["macro",37]],["map","index","27","dimension",["macro",38]],["map","index","28","dimension",["macro",39]],["map","index","29","dimension",["macro",40]],["map","index","30","dimension",["macro",3]],["map","index","31","dimension",["macro",41]],["map","index","32","dimension",["macro",42]],["map","index","33","dimension",["macro",43]],["map","index","34","dimension",["macro",44]],["map","index","35","dimension",["macro",45]],["map","index","36","dimension",["macro",46]],["map","index","37","dimension",["macro",47]],["map","index","38","dimension",["macro",49]],["map","index","39","dimension",["macro",51]],["map","index","40","dimension",["macro",52]],["map","index","41","dimension",["macro",0]],["map","index","42","dimension",["macro",54]],["map","index","43","dimension",["macro",55]],["map","index","44","dimension",["macro",56]],["map","index","45","dimension",["macro",57]],["map","index","46","dimension",["macro",58]],["map","index","47","dimension",["macro",59]],["map","index","48","dimension",["macro",60]],["map","index","49","dimension",["macro",61]],["map","index","50","dimension",["macro",62]],["map","index","51","dimension",["macro",63]],["map","index","52","dimension",["macro",64]],["map","index","53","dimension",["macro",65]],["map","index","54","dimension",["macro",66]],["map","index","55","dimension",["macro",67]],["map","index","56","dimension",["macro",68]],["map","index","57","dimension",["macro",69]],["map","index","58","dimension",["macro",6]],["map","index","59","dimension",["macro",70]],["map","index","60","dimension",["macro",71]],["map","index","61","dimension",["macro",72]],["map","index","62","dimension",["macro",73]],["map","index","63","dimension",["macro",74]],["map","index","64","dimension",["macro",75]],["map","index","65","dimension",["macro",76]],["map","index","66","dimension",["macro",77]],["map","index","67","dimension",["macro",78]],["map","index","68","dimension",["macro",79]],["map","index","69","dimension",["macro",80]],["map","index","70","dimension",["macro",81]],["map","index","71","dimension",["macro",82]],["map","index","72","dimension",["macro",83]],["map","index","73","dimension",["macro",84]],["map","index","74","dimension",["macro",85]],["map","index","75","dimension",["macro",86]],["map","index","76","dimension",["macro",87]],["map","index","77","dimension",["macro",88]],["map","index","78","dimension",["macro",89]],["map","index","79","dimension",["macro",90]],["map","index","80","dimension",["macro",91]],["map","index","81","dimension",["macro",92]],["map","index","82","dimension",["macro",93]],["map","index","83","dimension",["macro",94]],["map","index","84","dimension",["macro",95]],["map","index","85","dimension",["macro",96]],["map","index","86","dimension",["macro",97]],["map","index","87","dimension",["macro",98]],["map","index","88","dimension",["macro",99]],["map","index","89","dimension",["macro",100]],["map","index","90","dimension",["macro",101]],["map","index","91","dimension",["macro",102]],["map","index","92","dimension",["macro",103]],["map","index","93","dimension",["macro",104]],["map","index","94","dimension",["macro",105]],["map","index","95","dimension",["macro",106]],["map","index","96","dimension",["macro",107]],["map","index","97","dimension",["macro",108]],["map","index","98","dimension",["macro",109]],["map","index","99","dimension",["macro",110]],["map","index","100","dimension",["macro",111]],["map","index","101","dimension",["macro",112]],["map","index","102","dimension",["macro",113]],["map","index","103","dimension",["macro",114]],["map","index","104","dimension",["macro",115]],["map","index","105","dimension",["macro",116]],["map","index","106","dimension",["macro",117]],["map","index","107","dimension",["macro",118]],["map","index","108","dimension",["macro",119]],["map","index","109","dimension",["macro",120]],["map","index","110","dimension",["macro",121]],["map","index","111","dimension",["macro",122]],["map","index","112","dimension",["macro",123]],["map","index","113","dimension",["macro",124]],["map","index","114","dimension",["macro",126]],["map","index","115","dimension",["macro",127]],["map","index","116","dimension",["macro",128]],["map","index","117","dimension",["macro",129]],["map","index","118","dimension",["macro",130]],["map","index","119","dimension",["macro",131]],["map","index","120","dimension",["macro",132]],["map","index","121","dimension",["macro",133]],["map","index","122","dimension",["macro",134]],["map","index","123","dimension",["macro",135]],["map","index","124","dimension",["macro",136]],["map","index","125","dimension",["macro",137]],["map","index","126","dimension",["macro",139]],["map","index","127","dimension",["macro",141]],["map","index","128","dimension",["macro",142]],["map","index","129","dimension",["macro",144]],["map","index","130","dimension",["macro",146]],["map","index","131","dimension",["macro",147]],["map","index","132","dimension",["macro",148]],["map","index","133","dimension",["macro",149]],["map","index","134","dimension",["macro",150]],["map","index","135","dimension",["macro",151]],["map","index","136","dimension",["macro",152]],["map","index","137","dimension",["macro",153]],["map","index","138","dimension",["macro",154]],["map","index","139","dimension",["macro",155]],["map","index","140","dimension",["macro",156]],["map","index","141","dimension",["macro",157]],["map","index","142","dimension",["macro",158]],["map","index","143","dimension",["macro",159]],["map","index","144","dimension",["macro",160]],["map","index","145","dimension",["macro",161]],["map","index","146","dimension",["macro",162]],["map","index","147","dimension",["macro",7]],["map","index","148","dimension",["macro",8]],["map","index","149","dimension",["macro",9]],["map","index","150","dimension",["macro",163]],["map","index","151","dimension",["macro",164]],["map","index","152","dimension",["macro",165]],["map","index","153","dimension",["macro",166]],["map","index","154","dimension",["macro",167]],["map","index","155","dimension",["macro",168]],["map","index","156","dimension",["macro",169]],["map","index","157","dimension",["macro",170]],["map","index","158","dimension",["macro",171]],["map","index","159","dimension",["macro",172]],["map","index","160","dimension",["macro",173]],["map","index","161","dimension",["macro",174]],["map","index","162","dimension",["macro",175]],["map","index","163","dimension",["macro",176]],["map","index","164","dimension",["macro",177]],["map","index","165","dimension",["macro",178]],["map","index","166","dimension",["macro",179]],["map","index","167","dimension",["macro",180]],["map","index","168","dimension",["macro",181]],["map","index","169","dimension",["macro",182]],["map","index","170","dimension",["macro",183]],["map","index","171","dimension",["macro",184]],["map","index","172","dimension",["macro",185]],["map","index","173","dimension",["macro",186]],["map","index","174","dimension",["macro",187]],["map","index","175","dimension",["macro",188]],["map","index","176","dimension",["macro",189]],["map","index","177","dimension",["macro",190]],["map","index","178","dimension",["macro",191]],["map","index","179","dimension",["macro",192]],["map","index","180","dimension",["macro",193]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-133956668-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/wp_gdpr=(1$|1\\|0|1;)\/.test(document.cookie)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",198],
      "vtp_defaultValue":"True",
      "vtp_map":["list",["map","key","video-pause","value","False"],["map","key","video-unpause","value","False"],["map","key","video-unmute","value","False"],["map","key","video-mute","value","False"],["map","key","video-30-second","value","False"],["map","key","ad-video-pause","value","False"],["map","key","ad-video-unpause","value","False"],["map","key","CLS","value","False"],["map","key","FID","value","False"],["map","key","LCP","value","False"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/wapo_actmgmt=(\\b|.*\\|)(EU_NOADS:1)([^;]*);\/.test(document.cookie)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.wp_pb\u0026\u0026!0===window.wp_pb.isAdmin||!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/wp_gdpr=1\/.test(document.cookie)})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__j",
      "vtp_name":"window.wp_pb.pageName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/wapo_actmgmt=(\\b|.*\\|)(NOADS:1)([^;]*);\/.test(document.cookie)})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return parent.location})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/wp_usp=1YYY\/.test(document.cookie)})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ia_referrer",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ia_surface",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ia_news_tab_content_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",77],8,16],"\/1E3})();"]
    },{
      "function":"__r"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/wapo_actmgmt=(\\b|.*\\|)(isub:1)([^;]*);\/.test(document.cookie)})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_customUrlSource":["macro",210],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.firstChild.className"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pubbleEvent.event_type"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",225],
      "vtp_defaultValue":"False",
      "vtp_map":["list",["map","key","app-load","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pubbleEvent.conversation_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"webVitalsMeasurement.deltaRounded"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"webVitalsMeasurement.name"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"19624"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",204],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"https:\/\/static.chartbeat.com\/js\/chartbeat.js",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*tref=fbinstant.*$","value","https:\/\/static2.chartbeat.com\/js\/chartbeat_fiadev.js"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",204],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"true",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*tref=fbinstant.*$","value","false"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!!document.cookie.match(\/wapo_secure_login_id=([^;]*)\/m),a=document.cookie.match(\/wapo_actmgmt=\"[^\"]*\"\/m);return(a=a\u0026\u0026-1\u003Ca[0].indexOf(\"isub:1\"))?\"paid\":b?\"lgdin\":\"anon\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeatSections"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeatSubsections"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeatContentType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",235],8,16],",d=",["escape",["macro",236],8,16],",e=c.concat(\" - \",d),a=",["escape",["macro",237],8,16],",f=\"article;gallery;video;graphic;discussion;quiz;knowledge quiz;personality quiz;kindle;topic;interactive graphics\".split(\";\"),b=[];c\u0026\u0026b.push(c);d\u0026\u0026d!==c\u0026\u0026\"(not set)\"!==d\u0026\u0026b.push(e);a\u0026\u0026(\"blog\"===a\u0026\u0026(a=\"article\"),-1\u003Cf.indexOf(a)\u0026\u0026b.push(a));b.push(\"spectrum\");return b.join(\",\")||\"no category\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeatAuthors"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"instapageId"
    },{
      "function":"__f",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_component":"URL"
    },{
      "function":"__f",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_stripWww":false,
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"j_tid"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"s_vi"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"wapo_login_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"anon\";",["escape",["macro",248],8,16],"?a=",["escape",["macro",248],8,16],":",["escape",["macro",247],8,16],"\u0026\u0026(a=",["escape",["macro",247],8,16],");return a})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"wapo_display"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"unknown\";",["escape",["macro",250],8,16],"\u0026\u0026(a=",["escape",["macro",250],8,16],".split(\"|\")[0]);return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"___UNUSED___"
    },{
      "function":"__f"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return parent.document.referrer})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=Math.floor(100*Math.random())+1,e=function(a){if(window.Storage)return window.localStorage.getItem(a);var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2===a.length)return a.pop().split(\";\").shift()},g=function(a,b,f){if(window.Storage)window.localStorage.setItem(a,b);else{var c=new Date;c.setDate(c.getDate()+f);document.cookie=a+\"\\x3d\"+b+\";expires\\x3d\"+c.toUTCString()}};if(null!=e(\"randNumber\"))return e(\"randNumber\");g(\"randNumber\",d,1);return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",16],8,16],";return a\u0026\u0026a.split(\";\").join(\",\")||\"no author\"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",270],8,16],",c=",["escape",["macro",204],8,16],",b=",["escape",["macro",2],8,16],";a=a.replace(\/.*\/,\"\");return-1\u003E=c.indexOf(\"search\\x3dabc\")\u0026\u00260==a.length?b:c=0\u003Ca.length?b+\"?\"+a:b})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":100000,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"https:\/\/ipmeta.io\/plugin.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar data=provideGtmPlugin({gtmEventKey:\"ipmeta_loaded\",apiKey:\"6aabf4e7dd64d588b58833008c66dde0b9fe943ba2ddebe77d64be8633003b05\"});window.dataLayer=window.dataLayer||[];window.dataLayer.push(data);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":301
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",194],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":4
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":6
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":7
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":9
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",197],
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":12
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":13
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":14
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":15
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":16
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":17
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":18
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-scroll-threshold",
      "vtp_eventLabel":["template",["macro",206]," ",["macro",207]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":19
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-timer-5-seconds",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":20
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-timer",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":24
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":25
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":27
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":31
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-exit-link-click",
      "vtp_eventLabel":["macro",210],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":33
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":43
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1037959834",
      "vtp_conversionLabel":"_MK5CO-sxrYBEJqF-O4D",
      "vtp_url":["macro",214],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":44
    },{
      "function":"__awct",
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1037959834",
      "vtp_conversionLabel":"K1fqCNSSiAgQmoX47gM",
      "vtp_url":["macro",214],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":45
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":46
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":56
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":58
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "vtp_event_type":"ViewContent",
      "vtp_twitter_pixel_id":"o1zqj",
      "tag_id":66
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "vtp_event_type":"Purchase",
      "vtp_twitter_pixel_id":"nzej6",
      "tag_id":67
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_fieldsToSet":["list",["map","name","user_id","value",["macro",3]],["map","name","page_name","value",["macro",10]],["map","name","section","value",["macro",11]],["map","name","subsection","value",["macro",12]],["map","name","content_type","value",["macro",14]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-WRCN68Y2LD",
      "vtp_enableUserProperties":true,
      "tag_id":272
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","campaignSource","value",["macro",215]],["map","fieldName","campaignMedium","value",["macro",216]],["map","fieldName","campaignContent","value",["macro",217]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",194],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":284
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":289
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"Engaged Time",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric",["macro",218]]],
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",2],
      "vtp_eventLabel":["macro",218],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":319
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"non-c0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"wn_br000",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8375053",
      "vtp_ordinalStandard":["macro",219],
      "vtp_url":["macro",214],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":354
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "vtp_event_type":"ViewContent",
      "vtp_twitter_pixel_id":"o4nqg",
      "tag_id":361
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"non-c0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"wn_br002",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8375053",
      "vtp_ordinalStandard":["macro",219],
      "vtp_url":["macro",214],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":365
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-click",
      "vtp_eventLabel":["macro",222],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":384
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":388
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":391
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",196],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",198],
      "vtp_eventLabel":["macro",199],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":398
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"social-share",
      "vtp_eventLabel":["macro",224],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":409
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",226],
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",75],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["macro",225],
      "vtp_eventLabel":["macro",227],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":413
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"retar0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"case_00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9905425",
      "vtp_ordinalStandard":["macro",219],
      "vtp_url":["macro",214],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":434
    },{
      "function":"__cvt_11017726_440",
      "metadata":["map","transport","beacon"],
      "once_per_event":true,
      "tag_id":447
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",228],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"web_vitals_gtm",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":["template",["macro",229],"_gtm"],
      "vtp_eventLabel":["macro",228],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":452
    },{
      "function":"__cvt_11017726_459",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_playerDomain":"www.washingtonpost.com",
      "vtp_uid":["macro",231],
      "vtp_chartbeatUrl":["macro",232],
      "vtp_useCanonical":true,
      "vtp_domain":"www.washingtonpost.com",
      "vtp_autoDetect":["macro",233],
      "vtp_useCanonicalDomain":true,
      "vtp_headlineTesting":true,
      "vtp_userType":["macro",234],
      "vtp_sections":"fusion,homepage",
      "vtp_authors":"no author",
      "tag_id":464
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"non-c0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"longr0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9360108",
      "vtp_ordinalStandard":["macro",219],
      "vtp_url":["macro",214],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":480
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-scroll-threshold",
      "vtp_eventLabel":"more-top-stories",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":486
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-scroll-threshold",
      "vtp_eventLabel":"politics",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":489
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-scroll-threshold",
      "vtp_eventLabel":"diversions wrapper",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":490
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-scroll-threshold",
      "vtp_eventLabel":"local",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":491
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-scroll-threshold",
      "vtp_eventLabel":"lifestyle-chain",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":492
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-scroll-threshold",
      "vtp_eventLabel":"opinions",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":497
    },{
      "function":"__cvt_11017726_459",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_playerDomain":"www.washingtonpost.com",
      "vtp_uid":["macro",231],
      "vtp_chartbeatUrl":["macro",232],
      "vtp_useCanonical":true,
      "vtp_domain":"www.washingtonpost.com",
      "vtp_autoDetect":["macro",233],
      "vtp_useCanonicalDomain":true,
      "vtp_headlineTesting":false,
      "vtp_userType":["macro",234],
      "vtp_sections":["macro",238],
      "vtp_authors":["macro",239],
      "tag_id":500
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"recirculation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"recirculation-click",
      "vtp_eventLabel":"luf_key-updates",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":506
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",194],
      "vtp_dimension":["list",["map","index","40","dimension","brandstudio-test"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":515
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"social-share",
      "vtp_eventLabel":"social-share-print",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":522
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"onpage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",194],
      "vtp_eventAction":"onpage-content-complete",
      "vtp_eventLabel":["macro",14],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":529
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,90,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"11017726_51",
      "vtp_enableTriggerStartOption":true,
      "tag_id":530
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"5000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"11017726_52",
      "tag_id":531
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11017726_75",
      "tag_id":532
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11017726_81",
      "tag_id":533
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11017726_242",
      "tag_id":534
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,90,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"11017726_246",
      "vtp_enableTriggerStartOption":true,
      "tag_id":535
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PIXELS",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_verticalThresholdsPixels":"1500,3000,4500,6000,7500,9000,10500,12000",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"11017726_250",
      "vtp_enableTriggerStartOption":true,
      "tag_id":536
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,90",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"11017726_287",
      "vtp_enableTriggerStartOption":true,
      "tag_id":537
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11017726_383",
      "tag_id":538
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11017726_408",
      "tag_id":539
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div[data-gtm-module=\"hp-more-top-stories\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"15",
      "vtp_uniqueTriggerId":"11017726_485",
      "tag_id":540
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div[data-gtm-module=\"politics\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"15",
      "vtp_uniqueTriggerId":"11017726_488",
      "tag_id":541
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div[data-gtm-module=\"local\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"15",
      "vtp_uniqueTriggerId":"11017726_493",
      "tag_id":542
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div[data-gtm-module=\"lifestyle-chain\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"15",
      "vtp_uniqueTriggerId":"11017726_494",
      "tag_id":543
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div[data-gtm-module=\"diversions wrapper\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"15",
      "vtp_uniqueTriggerId":"11017726_495",
      "tag_id":544
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div[data-link-group=\"opinions\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"15",
      "vtp_uniqueTriggerId":"11017726_496",
      "tag_id":545
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11017726_505",
      "tag_id":546
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11017726_523",
      "tag_id":547
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div[data-qa=\"recirc\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"5",
      "vtp_uniqueTriggerId":"11017726_528",
      "tag_id":548
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E__reach_config={pid:\"4fb12d58a782f34021000006\",title:\"window.TWP \\x26\\x26 window.TWP.Data \\x26\\x26 window.TWP.Data.Tracking \\x26\\x26 window.TWP.Data.Tracking.headline\",url:window.wp_pb\u0026\u0026window.wp_pb.canonical_url||window.location.href.split(\"?\")[0],date:window.wp_meta_data\u0026\u0026window.wp_meta_data.meta_date,tags:[window.wp_meta_data\u0026\u0026window.wp_meta_data.tags\u0026\u0026window.wp_meta_data.tags[0]\u0026\u0026window.wp_meta_data.tags[0].title],domain:\"washingtonpost.com\",ignore_errors:!1};\n(function(){var a=document.createElement(\"script\");a.async=!0;a.type=\"text\/javascript\";a.src=document.location.protocol+\"\/\/d8rk54i4mohrb.cloudfront.net\/js\/reach.js\";(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function e(a,c){var b=d();b\u0026\u0026(b=b.replace(\/[H|h]idden\/,\"\")+\"visibilitychange\",document.addEventListener(b,function(){var b;(b=(b=d())?document[b]:!1)?c():a()}))}function d(){var a=[\"webkit\",\"moz\",\"ms\",\"o\"];if(\"hidden\"in document)return\"hidden\";for(var c=0;c\u003Ca.length;c++)if(a[c]+\"Hidden\"in document)return a[c]+\"Hidden\";return null}var a=window.TWP||{};a.Features=a.Features||{};a.Features.BrandConnect=a.Features.BrandConnect||{};a.Features.BrandConnect.TrackingInterval={intervalHandle:null,\nintervalLength:10,intervalCount:1,maxCount:25,trackInterval:function(b){switch(b){case \"start\":b=setInterval(function(){a.Features.BrandConnect.TrackingInterval.intervalCount\u003C=a.Features.BrandConnect.TrackingInterval.maxCount?(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:\"brandstudio_ga_timer\"}),++a.Features.BrandConnect.TrackingInterval.intervalCount):(clearInterval(a.Features.BrandConnect.TrackingInterval.intervalHandle),a.Features.BrandConnect.TrackingInterval.intervalHandle=\nnull,a.Features.BrandConnect.TrackingInterval.intervalCount=1)},1E3*a.Features.BrandConnect.TrackingInterval.intervalLength);a.Features.BrandConnect.TrackingInterval.intervalHandle=b;break;case \"stop\":clearInterval(a.Features.BrandConnect.TrackingInterval.intervalHandle),a.Features.BrandConnect.TrackingInterval.intervalHandle=null,a.Features.BrandConnect.TrackingInterval.intervalCount=1}},init:function(){a.Features.BrandConnect.TrackingInterval.trackInterval(\"start\");e(function(){a.Features.BrandConnect.TrackingInterval.trackInterval(\"start\")},\nfunction(){a.Features.BrandConnect.TrackingInterval.trackInterval(\"stop\")})}};a.Features.BrandConnect.TrackingInterval.init()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=944810\u0026amp;conversionId=903249\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.liQ=window.liQ||[];window.liQ.push({event:\"conversion\",name:\"subscription\",email:\"[USER_EMAIL]\",conversionId:\"[CONVERSION_ID]\",amount:\"[PURCHASE_AMOUNT]\",currency:\"[CURRENCY_TYPE]\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":53
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"set\",\"autoConfig\",!1,\"1063176057035408\");fbq(\"init\",\"1063176057035408\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"1063176057035408\");\nfbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1063176057035408\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"set\",\"autoConfig\",!1,\"1063176057035408\");fbq(\"init\",\"1063176057035408\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1063176057035408\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\nvar surface=\"function\"===typeof getQueryParameters\u0026\u0026getQueryParameters(\"surface\").value||\"mweb\",meterCount=\"function\"===typeof getQueryParameters\u0026\u0026getQueryParameters(\"mtrct\").value||0;fbq(\"set\",\"autoConfig\",!1,\"1063176057035408\");fbq(\"init\",\"1063176057035408\");fbq(\"trackCustom\",\"ViewPaywall\",{surface:surface,meter_count:meterCount});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1063176057035408\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\nvar value=\"function\"===typeof getQueryParameters\u0026\u0026getQueryParameters(\"value\").value||0,offerCode=\"function\"===typeof getQueryParameters\u0026\u0026getQueryParameters(\"offer_code\").value||\"o8\",currency=\"function\"===typeof getQueryParameters\u0026\u0026getQueryParameters(\"currency\").value||\"USD\",productName=decodeURIComponent(\"function\"===typeof getQueryParameters\u0026\u0026getQueryParameters(\"product_name\").value||\"default\");fbq(\"init\",\"1063176057035408\");\nfbq(\"track\",\"Subscribe\",{value:value,offer_code:offerCode,product_name:productName,currency:currency});fbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1063176057035408\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-obct type=\"text\/gtmscript\"\u003E!function(a,b){var d=\"007bd631d9ae4fd8e71af833f5f04f0ac8\";if(a.obApi)b=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)?a:[a]},a.obApi.marketerId=b(a.obApi.marketerId).concat(b(d));else{var c=a.obApi=function(){c.dispatch?c.dispatch.apply(c,arguments):c.queue.push(arguments)};c.version=\"1.1\";c.loaded=!0;c.marketerId=d;c.queue=[];a=b.createElement(\"script\");a.async=!0;a.src=\"\/\/amplify.outbrain.com\/cp\/obtp.js\";a.type=\"text\/javascript\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,\nb)}}(window,document);obApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"924216b2-c109-4f90-9040-1271067298e1\",{user_email:\"__INSERT_USER_EMAIL__\"});snaptr(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var surface=getQueryParameters(\"surface\").value||\"mweb\",meterCount=getQueryParameters(\"mtrct\").value||0;fbq(\"init\",\"1063176057035408\");\nfbq(\"trackCustom\",\"ViewPaywall\",{surface:surface,meter_count:meterCount});window.console.log(\"View Paywall Event\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1063176057035408\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/evnt\/?adv=ahd6jzm\u0026amp;ct=0:sansziq\u0026amp;fmt=3\"\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":64
    },{
      "function":"__html",
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/conv\/?adv=ahd6jzm\u0026amp;ct=0:d575xmm\u0026amp;fmt=3\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){for(var e=window.dataLayer||[],b=document.cookie.split(\";\"),d=[],a=0;a\u003Cb.length;a++)if(b[a]\u0026\u0026(-1\u003Cb[a].indexOf(\"wp_ak_\")||-1\u003Cb[a].indexOf(\"wp_gdpr\")||-1\u003Cb[a].indexOf(\"wp_proactive-signin\"))){var c=b[a].split(\"\\x3d\");2===c.length\u0026\u0026d.push((c[0]+\":\"+c[1]).trim())}e.push({wapoCookies:d.join(\";\")})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar imageList={copythis_only_use_names_with_underscores:{pageUrl:\"url path excluding domain\",imgUrl:\"image pixel\"},wpbs:{pageUrl:\"rolex-partnership-content\/climate-solutions\/listen-for-the-trees\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNEza-pi7\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},amazon_hunters:{pageUrl:\"brand-studio\/amazon-hunters\/nazis-for-hire\/\",imgUrl:\"https:\/\/pixel.mtrcs.samba.tv\/v2\/vtr\/rufus\/hunters11042019\/wpdfp\/impression?c\\x3d%%CACHEBUSTER%%\\x26sa_ord\\x3d%ebuy!\\x26sa_li\\x3d%eaid!\\x26sa_cr\\x3d%ecid!\\x26sa_pl\\x3dplid\\x26sa_siteid\\x3d%%SITE%%\"},\nmastercard_a_roadmap:{pageUrl:\"brand-studio\/mastercard\/a-roadmap-for-growing-good-jobs\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dM_aZmH9v\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},geico_tax_trends:{pageUrl:\"brand-studio\/geico\/tax-trends-for-2020\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNRJWxZPt\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},subaru_the_road_to_creativity:{pageUrl:\"brand-studio\/subaru\/the-road-to-creativity\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNRJXYdCn\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},subaru_eco_artist:{pageUrl:\"brand-studio\/subaru\/eco-artist-heads-home\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNRJXYdCn\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},microsoft_article1:{pageUrl:\"brand-studio\/wp\/2020\/03\/11\/feature\/the-risks-from-within\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNVhm5UM8\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\nmicrosoft_article2:{pageUrl:\"brand-studio\/microsoft\/preparing-for-insider-risk\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNVhm5UM8\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},purina_supplied:{pageUrl:\"brand-studio\/wp\/2020\/04\/24\/10-tips-for-keeping-dogs-and-cats-happy-indoors\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNYqCRZuw\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},normalpeople:{pageUrl:\"brand-studio\/hulu\/normal-people\/the-truth-about-young-love\/\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNYqEifQW\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},lockheedmartin:{pageUrl:\"brand-studio\/wp\/2020\/04\/30\/feature\/the-pilots-view\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNYp67TuT\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},deloitte_release4:{pageUrl:\"brand-studio\/deloitte\/the-future-of-work-in-manufacturing\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNYqFzq9O\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\ndellnurture:{pageUrl:\"brand-studio\/wp\/2019\/12\/09\/the-power-of-a-hybrid-cloud-strategy\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNYqGgNMV\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},att:{pageUrl:\"brand-studio\/wp\/2020\/05\/21\/feature\/why-covid-19-may-forever-change-how-the-washington-post-operates\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNe1sodkO\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},berkeleysprings:{pageUrl:\"brand-studio\/wp\/2020\/06\/01\/summer-at-the-springs\/\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNe1ubtyS\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},casedesign:{pageUrl:\"brand-studio\/case-design-seeing-is-believing\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNRnTv29l\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},bostonscientific:{pageUrl:\"brand-studio\/wp\/2020\/06\/01\/the-link-between-sexual-health-and-physical-wellness\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNe1wNkcs\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\nworcestercounty:{pageUrl:\"brand-studio\/wp\/2020\/06\/10\/less-time-is-more\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNe1xQjPZ\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},qualcommrelease1:{pageUrl:\"brand-studio\/wp\/2020\/06\/12\/feature\/5g-master-class\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNe1yHsQ7\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},trp:{pageUrl:\"brand-studio\/wp\/2020\/06\/03\/feature\/take-this-7-step-financial-wellness-check-in\/\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNe1y1QV6\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},arlington:{pageUrl:\"brand-studio\/wp\/2020\/06\/17\/finding-fresh-air-in-arlington-va\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNe1zo2L2\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},arlington2:{pageUrl:\"brand-studio\/wp\/2020\/06\/17\/finding-fresh-air-in-arlington-va\/\",imgUrl:\"https:\/\/tag.yieldoptimizer.com\/ps\/analytics?pxid\\x3d71954\\x26\"},\nqualcommrelease2:{pageUrl:\"brand-studio\/qualcomm\/exploring-the-human-benefits\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNe1yHsQ7\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},pfizer:{pageUrl:\"brand-studio\/wp\/2020\/06\/23\/in-cancer-care-age-is-more-than-just-a-number\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNgli-6Ho\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},keybank:{pageUrl:\"brand-studio\/wp\/2019\/11\/04\/feature\/the-green-power-revolution-is-here\/\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNglkhTuZ\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},nationalinstrument:{pageUrl:\"brand-studio\/wp\/2020\/06\/30\/feature\/engineering-hope\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNglj15Dy\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},govofjapan:{pageUrl:\"brand-studio\/wp\/2020\/07\/01\/feature\/innovating-a-more-inclusive-workforce\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNgllDzNi\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\nsafeway:{pageUrl:\"brandstudio\/a-revolution-in-the-meat-aisle\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNgllhHc-\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},penfed:{pageUrl:\"brand-studio\/wp\/2020\/07\/02\/feature\/the-basics-behind-credit-unions\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNglmEM5F\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},thompson:{pageUrl:\"brand-studio\/wp\/2020\/08\/26\/what-local-contractors-bring-to-a-home-renovation-project\",\nimgUrl:'\\x3cimg height\\x3d\"1\" width\\x3d\"1\" style\\x3d\"border-style:none;\" alt\\x3d\"\" src\\x3d\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv\\x3dmj55tqe\\x26ct\\x3d0:9nx3cim\\x26fmt\\x3d3\"\/\\x3e'},purinaplp1:{pageUrl:\"brand-studio\/wp\/2020\/08\/07\/the-urgent-need-for-pet-friendly-domestic-violence-shelters\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ-kRrm\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},optum3:{pageUrl:\"brand-studio\/wp\/2020\/08\/31\/delivering-cohesive-care-with-data\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ0tShy\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},optum1:{pageUrl:\"brand-studio\/wp\/2020\/07\/13\/feature\/changing-us-health-care-for-good\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ0tShy\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},optum2:{pageUrl:\"brand-studio\/wp\/2020\/08\/13\/feature\/why-every-aspect-of-your-life-impacts-how-healthy-you-are\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ0tShy\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\nrolex4:{pageUrl:\"rolex-partnership-content\/climate-solutions\/saving-the-giant-of-the-amazon\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNEza-pi7\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},nationalinstrument2:{pageUrl:\"brandstudio\/ni\/the-calling-of-an-engineer\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNglj15Dy\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},nationalinstrument3:{pageUrl:\"brandstudio\/ni\/the-path-to-innovation\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNglj15Dy\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},nationalinstrument4:{pageUrl:\"brandstudio\/ni\/hope-for-the-next-generation\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNglj15Dy\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},leidos:{pageUrl:\"brand-studio\/wp\/2020\/08\/19\/feature\/the-best-they-can-be\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ3ctH0\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\nannapolis:{pageUrl:\"brand-studio\/wp\/2020\/08\/26\/experience-annapolis-md-without-the-crowds\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ595fY\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},thompsoncreek:{pageUrl:\"brand-studio\/wp\/2020\/08\/26\/what-local-contractors-bring-to-a-home-renovation-project\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ606dd\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},windownation:{pageUrl:\"brand-studio\/wp\/2020\/09\/01\/a-more-valuable-home-inside-and-out\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ7t15e\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},nar:{pageUrl:\"brandstudio\/nar\/the-new-kids-in-town\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ8h6WM\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},ibm0:{pageUrl:\"brand-studio\/wp\/2020\/09\/08\/return-to-the-workplace-ready-set-wait-plan-and-evaluate\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ9bn4m\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\npurinacares1:{pageUrl:\"brandstudio\/purina\/chasing-the-promise-of-zero-waste-living\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ_Bzs5\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},landolakes:{pageUrl:\"brand-studio\/wp\/2020\/09\/14\/how-the-widespread-availability-of-high-speed-internet-could-help-feed-the-planet\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpaADR1X\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},aarp:{pageUrl:\"brand-studio\/wp\/2020\/09\/14\/feature\/working-for-good\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpaA50_U\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},brambelton:{pageUrl:\"brand-studio\/wp\/2020\/09\/14\/all-ages-welcome\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpaB7JiJ\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},frederick:{pageUrl:\"brand-studio\/wp\/2020\/09\/16\/the-scenic-route\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpaC1BlN\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\nmaxar:{pageUrl:\"brand-studio\/wp\/2020\/09\/16\/feature\/solving-our-earthly-problems-with-images-from-space\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpaDvccc\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},geico2:{pageUrl:\"brandstudio\/geico\/getting-back-to-the-grind\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNRJWxZPt\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},api:{pageUrl:\"brand-studio\/wp\/2020\/09\/28\/why-pipelines-and-production-are-pathways-to-progress\/\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNriGv4qm\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},optum5:{pageUrl:\"brandstudio\/optum\/a-choreographer-with-a-chronic-condition\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ0tShy\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},pmi:{pageUrl:\"brand-studio\/wp\/2020\/09\/28\/uniting-through-science\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNriIZU4F\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\nusafacts:{pageUrl:\"brand-studio\/wp\/2020\/09\/29\/forging-new-opportunities-through-facts\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNriJnhkx\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},clevelandclinicpodcastseries:{pageUrl:\"podcasts\/caring-for-tomorrow\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNriKxNar\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},clevelandclinicpodcasttrailer:{pageUrl:\"brand-studio\/podcasts\/series\/caring-for-tomorrow\/caring-for-tomorrow-trailer\",\nimgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNriKxNar\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},clevelandclinicpodcastep1:{pageUrl:\"brand-studio\/podcasts\/series\/caring-for-tomorrow\/how-the-health-care-system-responded-to-covid19\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNriKxNar\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},purinaplp2:{pageUrl:\"brandstudio\/purina\/a-place-to-heal-together\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNpZ-kRrm\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"},\nnovartis:{pageUrl:\"brandstudio\/novartis\/the-case-for-screening-every-newborn\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dNriOKZj4\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"}},property;\nfor(property in imageList){var imgEntry=imageList[property];if(!imgEntry.pageUrl||!imgEntry.imgUrl)break;var imgUrl=imgEntry.imgUrl,matcher=new RegExp(imgEntry.pageUrl);if(window.location.href.match(matcher))try{-1===imgUrl.indexOf(\"\\x3cimg\")\u0026\u0026(imgUrl='\\x3cimg src\\x3d\"'+imgUrl+'\" width\\x3d0 height\\x3d0\\x3e'),$(\"body\").append(imgUrl)}catch(a){}};\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/trc.taboola.com\/1295709\/log\/3\/unip?en=Subscription\" width=\"0\" height=\"0\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":277
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.onload=function(){var b=JSON.parse(document.querySelectorAll('script[type\\x3d\"application\/ld+json\"]')[0].text);b=b.isPartOf.name;var a=document.createElement(\"script\");a.async=!0;a.type=\"text\/javascript\";a.src=document.location.protocol+\"\/\/z.moatads.com\/wapocontent639hrNK66\/moatcontent.js#zMoatAdvertiser\\x3d\"+moatAdv+\"\\x26zMoatCampaign\\x3d\"+b+\"\\x26zMoatHub\\x3d\";(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(a)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":308
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window.dataLayer||[],b=Math.floor(100*Math.random())+1;a.push({sampleThreshold:b})})();\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":316
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var e=(new Date).getTime(),a=0,k=0,c=!0,h=!1,l=function(){k=(new Date).getTime();a+=k-e;c=!0},f=function(b){c\u0026\u0026(c=!1,e=(new Date).getTime(),h=!1);window.clearTimeout(m);m=window.setTimeout(l,5E3)},d=function(b,n){window.addEventListener?window.addEventListener(b,n):window.attachEvent\u0026\u0026window.attachEvent(\"on\"+b,n)},g=function(b){c||(a+=(new Date).getTime()-e);!h\u0026\u00260\u003Ca\u0026\u002636E5\u003Ea\u0026\u0026window.dataLayer.push({event:\"nonIdle\",nonIdleTimeElapsed:a});c\u0026\u0026(h=!0);b\u0026\u0026\"beforeunload\"===b.type\u0026\u0026window.removeEventListener(\"beforeunload\",\ng);a=0;e=(new Date).getTime();window.setTimeout(g,15E3)};d(\"mousedown\",f);d(\"keydown\",f);d(\"scroll\",f);d(\"mousemove\",f);d(\"beforeunload\",g);var m=window.setTimeout(l,5E3);window.setTimeout(g,15E3)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _comscore=window._comscore||[],payload={c1:2,c2:3005617},v=document.cookie.match(\"(^|;) ?wp_usp\\x3d([^;]*)(;|$)\")||[];v\u0026\u0026v[2]\u0026\u0026\"1YYY\"===v[2]\u0026\u0026(payload.cs_ucfr=0);_comscore.push(payload);(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\")+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":320
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/storage.googleapis.com\/instapage-assets\/conversion-external.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar instapageIframe=document.createElement(\"iframe\");instapageIframe.setAttribute(\"class\",\"instapage-noscrap\");instapageIframe.setAttribute(\"src\",\"\/\/d3mwhxgzltpnyp.cloudfront.net\/local-storage\/index.html\");instapageIframe.setAttribute(\"name\",\"instapage-local-storage\");instapageIframe.setAttribute(\"height\",\"0px\");instapageIframe.setAttribute(\"width\",\"0px\");instapageIframe.setAttribute(\"style\",\"display: block;\");instapageIframe.onload=function(){InstapageExternalConversion(",["escape",["macro",243],8,16],")}();\ndocument.body.appendChild(instapageIframe);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":374
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/trc.taboola.com\/1295709\/log\/3\/unip?en=Paywall\" width=\"0\" height=\"0\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":436
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar imageList={copythis_only_use_names_with_underscores:{pageUrl:\"url path excluding domain\",imgUrl:\"image pixel\"},cnhs:{pageUrl:\"brandstudio\/cnh\/breaking-the-mold-of-pediatric-health\/\",imgUrl:\"\\x3cimg src\\x3d'https:\/\/beacon.krxd.net\/event.gif?event_id\\x3dOBRVRfBJ\\x26event_type\\x3ddefault' width\\x3d0 height\\x3d0 \/\\x3e\"}},property;\nfor(property in imageList){var imgEntry=imageList[property];if(!imgEntry.pageUrl||!imgEntry.imgUrl)break;var imgUrl=imgEntry.imgUrl,matcher=new RegExp(imgEntry.pageUrl);if(window.location.href.match(matcher))try{-1===imgUrl.indexOf(\"\\x3cimg\")\u0026\u0026(imgUrl='\\x3cimg src\\x3d\"'+imgUrl+'\" width\\x3d0 height\\x3d0\\x3e'),$(\"body\").append(imgUrl)}catch(a){}};\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":513
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-TB6VDCH",
      "vtp_gaSettings":["macro",194],
      "tag_id":11
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"fbia"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"fusionPageView"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"classicPageView"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\/context\/",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"instapagePageView"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",195],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^acquisition"
    },{
      "function":"_eq",
      "arg0":["macro",196],
      "arg1":"acquisition-web-vital"
    },{
      "function":"_eq",
      "arg0":["macro",200],
      "arg1":"True"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^video"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^ad"
    },{
      "function":"_eq",
      "arg0":["macro",200],
      "arg1":"False"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"^[1-3]{1}$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^(video|ad)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^audio"
    },{
      "function":"_re",
      "arg0":["macro",198],
      "arg1":"^onpage-scroll-start$"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^site"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^profile"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^embed"
    },{
      "function":"_cn",
      "arg0":["macro",201],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",202],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",203],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",204],
      "arg1":"brandstudio|brand-connect|brand-studio|rolex-partnership-content",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_51($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",204],
      "arg1":"samuel-little-serial-killer|\/2021\/covid-hunger-crisis\/|libya-civil-war-russia-turkey-fighter-planes|kabul-architecture-war-us-afghanistan|amazon-apple-facebook-google-acquisition",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_287($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_52($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"brandstudio_ga_timer"
    },{
      "function":"_cn",
      "arg0":["macro",208],
      "arg1":"video-leaf-page"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"scroll_thirdparty"
    },{
      "function":"_eq",
      "arg0":["macro",201],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",202],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",203],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",204],
      "arg1":"brandstudio|brand-studio|brand-connect|rolex-partnership-content",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",209],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"brandstudio|brand-studio|brand-connect|rolex-partnership-content"
    },{
      "function":"_re",
      "arg0":["macro",210],
      "arg1":"www\\.washingtonpost\\.com|thelily\\.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_75($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",210],
      "arg1":"washingtonpost.com\/subscribe\/signin\/\\?case=ereplica|washingtonpost.com\/pb\/ebooks|search\\.proquest\\.com\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_81($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"\/advertising\/MagazineFront\/Travel_Spring2020|\/advertising\/PrivateSchools\/Spring2020|\/advertising\/MagazineFront\/CherryBlossoms2020"
    },{
      "function":"_re",
      "arg0":["macro",210],
      "arg1":"washingtonpost|thelily",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_242($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^onpage"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"pay-with"
    },{
      "function":"_cn",
      "arg0":["macro",212],
      "arg1":"pay-with"
    },{
      "function":"_cn",
      "arg0":["macro",213],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"acq_marketing"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"acq_marketing_confirmation"
    },{
      "function":"_cn",
      "arg0":["macro",212],
      "arg1":"offers"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"offers"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"\/paywall\/offers"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"pay-with-amazon"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"pay-with-cc"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"pay-with-paypal"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"return-from-paypal"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"print-payment"
    },{
      "function":"_cn",
      "arg0":["macro",212],
      "arg1":"\/checkout"
    },{
      "function":"_cn",
      "arg0":["macro",212],
      "arg1":"get-softwall"
    },{
      "function":"_re",
      "arg0":["macro",212],
      "arg1":"(paywall\/get-)|(\/acq)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",212],
      "arg1":"print-payment"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^email"
    },{
      "function":"_cn",
      "arg0":["macro",212],
      "arg1":"ia_title"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"classicPageView|fusionPageView"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"^[1-3]{1}$"
    },{
      "function":"_re",
      "arg0":["macro",199],
      "arg1":"click|roll|autoplay-homepage",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"powa-impression"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"nonIdle"
    },{
      "function":"_cn",
      "arg0":["macro",204],
      "arg1":"\/brand-studio\/wp\/2020\/09\/01\/a-more-valuable-home-inside-and-out\/"
    },{
      "function":"_cn",
      "arg0":["macro",212],
      "arg1":"\/paywall"
    },{
      "function":"_cn",
      "arg0":["macro",220],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"acq_marketing_paywall"
    },{
      "function":"_cn",
      "arg0":["macro",204],
      "arg1":"brand-studio\/wp\/2020\/10\/05\/why-better-windows-are-the-key-to-going-green\/"
    },{
      "function":"_cn",
      "arg0":["macro",221],
      "arg1":"post-columnists-2020-favorites"
    },{
      "function":"_cn",
      "arg0":["macro",210],
      "arg1":"#"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_383($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^continuum"
    },{
      "function":"_re",
      "arg0":["macro",198],
      "arg1":"cls|fid|lcp",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"live-video-threshold"
    },{
      "function":"_eq",
      "arg0":["macro",223],
      "arg1":"share-btn"
    },{
      "function":"_cn",
      "arg0":["macro",204],
      "arg1":"brand-studio"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_408($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"pubble_live_qa|pubble_live_blog"
    },{
      "function":"_cn",
      "arg0":["macro",204],
      "arg1":"\/brand-studio\/case-design-seeing-is-believing\/"
    },{
      "function":"_re",
      "arg0":["macro",64],
      "arg1":"pagebuilder|custom|medley|profile",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"coreWebVitals"
    },{
      "function":"_re",
      "arg0":["macro",230],
      "arg1":"fusion-sandbox.washingtonpost.com|sandbox.washpost.arcpublishing.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",221],
      "arg1":"^\/(\\?.*)?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",230],
      "arg1":"www.washingtonpost.com"
    },{
      "function":"_cn",
      "arg0":["macro",204],
      "arg1":"\/brand-studio\/wp\/2021\/03\/02\/feature\/in-it-for-the-long-haul\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_485($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_488($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_495($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_493($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_494($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_496($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"chartbeatReady"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"live-all"
    },{
      "function":"_css",
      "arg0":["macro",240],
      "arg1":"li[data-qa=\"key-updates-item\"] a"
    },{
      "function":"_cn",
      "arg0":["macro",210],
      "arg1":"washingtonpost.com"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_505($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\/brandstudio\/|rolex-partnership-content",
      "ignore_case":true
    },{
      "function":"_ew",
      "arg0":["macro",241],
      "arg1":"#print"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_523($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"centered-layout"
    },{
      "function":"_re",
      "arg0":["macro",205],
      "arg1":"(^$|((^|,)11017726_528($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"\/acqlite"
    },{
      "function":"_cn",
      "arg0":["macro",212],
      "arg1":"fbpixeltester"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"^1$"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"custom"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"enhanced-template"
    },{
      "function":"_cn",
      "arg0":["macro",242],
      "arg1":"games.washingtonpost.com"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"medley"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"isEUUSer - false"
    },{
      "function":"_re",
      "arg0":["macro",243],
      "arg1":"^[0-9]*$"
    }],
  "rules":[
    [["if",1],["unless",0],["add",1,34,101]],
    [["if",2],["unless",0],["add",1,34]],
    [["if",3,4],["add",1]],
    [["if",5],["add",1,101]],
    [["if",6],["add",2,3,4,5,6,63,68,69,70]],
    [["if",7,8],["add",7]],
    [["if",8,9],["add",7]],
    [["if",10,11],["add",8]],
    [["if",10,12],["add",8]],
    [["if",13,14,15],["add",8]],
    [["if",16],["add",9]],
    [["if",10,18],["unless",17],["add",10]],
    [["if",19],["add",11]],
    [["if",20],["add",12]],
    [["if",6,21,22,23],["add",13]],
    [["if",24,25,26],["add",14]],
    [["if",25,27,28],["add",14]],
    [["if",24,29,30],["add",15]],
    [["if",31],["add",16]],
    [["if",21,22,33],["unless",32],["add",17,19,20,21]],
    [["if",6,34,35,36,37,38],["add",18,22,82,96,98,104]],
    [["if",39,41,42],["unless",40],["add",23]],
    [["if",41,43,44],["add",23]],
    [["if",41,45,47],["unless",46],["add",23]],
    [["if",48],["add",24]],
    [["if",23,49,50,51,52],["add",25,29]],
    [["if",23,51,53],["add",25,27,32,84,85,89,90,91,94,97]],
    [["if",23,51,52,54,55],["add",25,31,87]],
    [["if",23,51,52,56],["add",25]],
    [["if",23,51,52,57],["add",25]],
    [["if",23,51,52,58],["add",25]],
    [["if",23,51,52,59],["add",25]],
    [["if",23,51,52,60],["add",25]],
    [["if",23,51,52,61],["add",25]],
    [["if",23,51,52,62],["add",25,31,87]],
    [["if",23,51,52,64],["unless",63],["add",26,28,93]],
    [["if",23,51,52,61,65],["add",30]],
    [["if",66],["add",33]],
    [["if",0,67,68],["add",34,35]],
    [["if",69,70,71],["add",36]],
    [["if",72],["add",37]],
    [["if",4,73],["add",38]],
    [["if",7,51,52,74,75],["add",39,88,103]],
    [["if",7,51,75,76],["add",39,88,103]],
    [["if",4,77],["add",40]],
    [["if",41,78,79,80],["add",41]],
    [["if",81],["add",42]],
    [["if",13,14,18,82],["add",43]],
    [["if",83],["add",44]],
    [["if",41,84,85,86],["add",45]],
    [["if",87],["add",46]],
    [["if",4,88],["add",47]],
    [["if",4],["add",48,95,0,99,65,66,67,71,72,73,74,75,76,77,78,79,80,81]],
    [["if",14,89,90],["add",49]],
    [["if",4,91],["add",50]],
    [["if",4,92,93],["add",50]],
    [["if",4,94],["add",51]],
    [["if",95,96],["add",52]],
    [["if",95,97],["add",53]],
    [["if",95,98],["add",54]],
    [["if",95,99],["add",55]],
    [["if",95,100],["add",56]],
    [["if",95,101],["add",57]],
    [["if",102],["add",58]],
    [["if",41,103,104,105,106],["add",59]],
    [["if",4,107],["add",60]],
    [["if",41,108,109],["add",61]],
    [["if",95,110,111],["add",62]],
    [["if",4,24],["add",64]],
    [["if",6,37],["add",83]],
    [["if",23,51,52,112],["add",86]],
    [["if",23,51,52,113],["add",92]],
    [["if",114,115],["add",100]],
    [["if",2,116,117],["add",101]],
    [["if",2,118],["add",101]],
    [["if",2,119],["add",101]],
    [["if",23,51,53,121],["add",102]],
    [["if",36,120],["block",101]]]
},
"runtime":[[50,"__cvt_11017726_440",[46,"a"],[52,"b",["require","copyFromWindow"]],[52,"c",["require","createQueue"]],[52,"d",["require","injectScript"]],[52,"e",["require","logToConsole"]],[52,"f",["require","Math"]],[52,"g",["c","dataLayer"]],[52,"h",[51,"",[7,"k"],["e",[15,"k"]],[2,[15,"a"],"gtmOnFailure",[7]]]],[52,"i",[51,"",[7,"k"],["g",[8,"event","coreWebVitals","webVitalsMeasurement",[8,"name",[17,[15,"k"],"name"],"id",[17,[15,"k"],"id"],"value",[17,[15,"k"],"value"],"delta",[17,[15,"k"],"delta"],"valueRounded",[2,[15,"f"],"round",[7,[39,[20,[17,[15,"k"],"name"],"CLS"],[26,[17,[15,"k"],"value"],1000],[17,[15,"k"],"value"]]]],"deltaRounded",[2,[15,"f"],"round",[7,[39,[20,[17,[15,"k"],"name"],"CLS"],[26,[17,[15,"k"],"delta"],1000],[17,[15,"k"],"delta"]]]]]]]]],[52,"j",[51,"",[7],[52,"k",["b","webVitals"]],[22,[28,[15,"k"]],[46,[36,["h","[GTM / Core Web Vitals]: window.webVitals failed to load."]]]],[2,[15,"k"],"getFID",[7,[15,"i"]]],[2,[15,"k"],"getCLS",[7,[15,"i"]]],[2,[15,"k"],"getLCP",[7,[15,"i"]]],[2,[15,"a"],"gtmOnSuccess",[7]]]],["d","https://unpkg.com/web-vitals",[15,"j"],[17,[15,"a"],"gtmOnFailure"],"web-vitals"]],[50,"__cvt_11017726_459",[46,"a"],[52,"b",["require","copyFromWindow"]],[52,"c",["require","createQueue"]],[52,"d",["require","injectScript"]],[52,"e",["require","setInWindow"]],[52,"f",["c","_cbq"]],[52,"g",[30,["b","_sf_async_config"],[8]]],[52,"h",[51,"",[7],[36,[17,[15,"a"],"authors"]]]],[52,"i",[51,"",[7],[36,[17,[15,"a"],"autoDetect"]]]],[52,"j",[51,"",[7],[36,[17,[15,"a"],"sections"]]]],[52,"k",[51,"",[7],[36,[17,[15,"a"],"title"]]]],[52,"l",[51,"",[7],[36,[17,[15,"a"],"chartbeatUrl"]]]],[43,[15,"g"],"uid",[17,[15,"a"],"uid"]],[43,[15,"g"],"domain",[17,[15,"a"],"domain"]],[43,[15,"g"],"playerdomain",[17,[15,"a"],"playerDomain"]],[43,[15,"g"],"flickerControl",false],[43,[15,"g"],"useCanonical",[17,[15,"a"],"useCanonical"]],[43,[15,"g"],"useCanonicalDomain",[17,[15,"a"],"useCanonicalDomain"]],[43,[15,"g"],"sections",["j"]],[43,[15,"g"],"authors",["h"]],[43,[15,"g"],"title",["k"]],[43,[15,"g"],"autoDetect",["i"]],["e","_sf_async_config",[15,"g"],true],["f",[7,"_acct",[17,[15,"a"],"userType"]]],[52,"m",[51,"",[7],["d",["l"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"chartbeat"]]],[22,[17,[15,"a"],"headlineTesting"],[46,["d","https://static.chartbeat.com/js/chartbeat_mab.js",[15,"m"],[17,[15,"a"],"gtmOnFailure"],"chartbeat_mab"]],[46,["m"]]]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__cvt_11017726_440":{"logging":{"environments":"debug"},"access_globals":{"keys":[{"key":"webVitals","read":true,"write":false,"execute":false},{"key":"dataLayer","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/unpkg.com\/web-vitals"]}},"__cvt_11017726_459":{"access_globals":{"keys":[{"key":"_cbq","read":true,"write":true,"execute":false},{"key":"_sf_async_config","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.chartbeat.com\/js\/chartbeat*"]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}
,"sandboxed_scripts":["__cvt_11017726_440","__cvt_11017726_459"]
,"security_groups":{
"nonGoogleScripts":["__twitter_website_tag"]}

};
(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self,D=function(n,v){var w=n.split("."),q=C;w[0]in q||"undefined"==typeof q.execScript||q.execScript("var "+w[0]);for(var t;w.length&&(t=w.shift());)w.length||void 0===v?q=q[t]&&q[t]!==Object.prototype[t]?q[t]:q[t]={}:q[t]=v};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var E,F=function(){};
(function(){function n(h,m){h=h||"";m=m||{};for(var y in v)v.hasOwnProperty(y)&&(m.N&&(m["fix_"+y]=!0),m.G=m.G||m["fix_"+y]);var z={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},e={comment:function(){var a=h.indexOf("--\x3e");if(0<=a)return{content:h.substr(4,a),length:a+3}},endTag:function(){var a=h.match(q);if(a)return{tagName:a[1],length:a[0].length}},atomicTag:function(){var a=e.startTag();if(a){var b=h.slice(a.length);
if(b.match(new RegExp("</\\s*"+a.tagName+"\\s*>","i"))){var c=b.match(new RegExp("([\\s\\S]*?)</\\s*"+a.tagName+"\\s*>","i"));if(c)return{tagName:a.tagName,g:a.g,content:c[1],length:c[0].length+a.length}}}},startTag:function(){var a=h.match(w);if(a){var b={};a[2].replace(t,function(c,d,k,g,r){var u=k||g||r||B.test(d)&&d||null,l=document.createElement("div");l.innerHTML=u;b[d]=l.textContent||l.innerText||u});return{tagName:a[1],g:b,s:!!a[3],length:a[0].length}}},chars:function(){var a=h.indexOf("<");
return{length:0<=a?a:h.length}}},f=function(){for(var a in z)if(z[a].test(h)){var b=e[a]();return b?(b.type=b.type||a,b.text=h.substr(0,b.length),h=h.slice(b.length),b):null}};m.G&&function(){var a=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,b=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,c=[];c.H=function(){return this[this.length-1]};c.v=function(l){var p=this.H();return p&&p.tagName&&p.tagName.toUpperCase()===l.toUpperCase()};c.V=function(l){for(var p=
0,x;x=this[p];p++)if(x.tagName===l)return!0;return!1};var d=function(l){l&&"startTag"===l.type&&(l.s=a.test(l.tagName)||l.s);return l},k=f,g=function(){h="</"+c.pop().tagName+">"+h},r={startTag:function(l){var p=l.tagName;"TR"===p.toUpperCase()&&c.v("TABLE")?(h="<TBODY>"+h,u()):m.oa&&b.test(p)&&c.V(p)?c.v(p)?g():(h="</"+l.tagName+">"+h,u()):l.s||c.push(l)},endTag:function(l){c.H()?m.W&&!c.v(l.tagName)?g():c.pop():m.W&&(k(),u())}},u=function(){var l=h,p=d(k());h=l;if(p&&r[p.type])r[p.type](p)};f=function(){u();
return d(k())}}();return{append:function(a){h+=a},ea:f,sa:function(a){for(var b;(b=f())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var a=h;h="";return a},ta:function(){return h},stack:[]}}var v=function(){var h={},m=this.document.createElement("div");m.innerHTML="<P><I></P></I>";h.va="<P><I></P></I>"!==m.innerHTML;m.innerHTML="<P><i><P></P></i></P>";h.ua=2===m.childNodes.length;return h}(),w=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
q=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,t=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,B=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;n.supports=v;for(var A in v);E=n})();
(function(){function n(){}function v(e){return void 0!==e&&null!==e}function w(e,f,a){var b,c=e&&e.length||0;for(b=0;b<c;b++)f.call(a,e[b],b)}function q(e,f,a){for(var b in e)e.hasOwnProperty(b)&&f.call(a,b,e[b])}function t(e,f){q(f,function(a,b){e[a]=b});return e}function B(e,f){e=e||{};q(f,function(a,b){v(e[a])||(e[a]=b)});return e}function A(e){try{return y.call(e)}catch(a){var f=[];w(e,function(b){f.push(b)});return f}}var h={J:n,K:n,L:n,M:n,O:n,P:function(e){return e},done:n,error:function(e){throw e;
},fa:!1},m=this;if(!m.postscribe){var y=Array.prototype.slice,z=function(){function e(a,b,c){var d="data-ps-"+b;if(2===arguments.length){var k=a.getAttribute(d);return v(k)?String(k):k}v(c)&&""!==c?a.setAttribute(d,c):a.removeAttribute(d)}function f(a,b){var c=a.ownerDocument;t(this,{root:a,options:b,l:c.defaultView||c.parentWindow,i:c,o:E("",{N:!0}),u:[a],B:"",C:c.createElement(a.nodeName),j:[],h:[]});e(this.C,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.h,arguments);for(var a;!this.m&&
this.h.length;)a=this.h.shift(),"function"===typeof a?this.U(a):this.D(a)};f.prototype.U=function(a){var b={type:"function",value:a.name||a.toString()};this.A(b);a.call(this.l,this.i);this.I(b)};f.prototype.D=function(a){this.o.append(a);for(var b,c=[],d,k;(b=this.o.ea())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(k=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.ka(c);d&&this.X(b);k&&this.Y(b)};f.prototype.ka=function(a){var b=this.R(a);
b.F&&(b.Z=this.B+b.F,this.B+=b.da,this.C.innerHTML=b.Z,this.ia())};f.prototype.R=function(a){var b=this.u.length,c=[],d=[],k=[];w(a,function(g){c.push(g.text);if(g.g){if(!/^noscript$/i.test(g.tagName)){var r=b++;d.push(g.text.replace(/(\/?>)/," data-ps-id="+r+" $1"));"ps-script"!==g.g.id&&"ps-style"!==g.g.id&&k.push("atomicTag"===g.type?"":"<"+g.tagName+" data-ps-proxyof="+r+(g.s?" />":">"))}}else d.push(g.text),k.push("endTag"===g.type?g.text:"")});return{wa:a,raw:c.join(""),F:d.join(""),da:k.join("")}};
f.prototype.ia=function(){for(var a,b=[this.C];v(a=b.shift());){var c=1===a.nodeType;if(!c||!e(a,"proxyof")){c&&(this.u[e(a,"id")]=a,e(a,"id",null));var d=a.parentNode&&e(a.parentNode,"proxyof");d&&this.u[d].appendChild(a)}b.unshift.apply(b,A(a.childNodes))}};f.prototype.X=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.src=a.g.src||a.g.ma;a.src&&this.j.length?this.m=a:this.A(a);var c=this;this.ja(a,function(){c.I(a)})};f.prototype.Y=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.type=
a.g.type||a.g.TYPE||"text/css";this.la(a);b&&this.write()};f.prototype.la=function(a){var b=this.T(a);this.aa(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.i.createTextNode(a.content)))};f.prototype.T=function(a){var b=this.i.createElement(a.tagName);b.setAttribute("type",a.type);q(a.g,function(c,d){b.setAttribute(c,d)});return b};f.prototype.aa=function(a){this.D('<span id="ps-style"/>');var b=this.i.getElementById("ps-style");b.parentNode.replaceChild(a,
b)};f.prototype.A=function(a){a.ba=this.h;this.h=[];this.j.unshift(a)};f.prototype.I=function(a){a!==this.j[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.j.shift(),this.write.apply(this,a.ba),!this.j.length&&this.m&&(this.A(this.m),this.m=null))};f.prototype.ja=function(a,b){var c=this.S(a),d=this.ha(c),k=this.options.J;a.src&&(c.src=a.src,this.ga(c,d?k:function(){b();k()}));try{this.$(c),a.src&&!d||b()}catch(g){this.options.error(g),b()}};f.prototype.S=function(a){var b=
this.i.createElement(a.tagName);q(a.g,function(c,d){b.setAttribute(c,d)});a.content&&(b.text=a.content);return b};f.prototype.$=function(a){this.D('<span id="ps-script"/>');var b=this.i.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.ga=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;t(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var k={message:"remote script failed "+
a.src};c();d(k);b()}})};f.prototype.ha=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.fa&&a.src&&a.hasAttribute("async"))};return f}();m.postscribe=function(){function e(){var d=b.shift(),k;d&&(k=d[d.length-1],k.K(),d.stream=f.apply(null,d),k.L())}function f(d,k,g){function r(x){x=g.P(x);c.write(x);g.M(x)}c=new z(d,g);c.id=a++;c.name=g.name||c.id;var u=d.ownerDocument,l={close:u.close,open:u.open,write:u.write,writeln:u.writeln};t(u,{close:n,open:n,write:function(){return r(A(arguments).join(""))},
writeln:function(){return r(A(arguments).join("")+"\n")}});var p=c.l.onerror||n;c.l.onerror=function(x,G,H){g.error({qa:x+" - "+G+":"+H});p.apply(c.l,arguments)};c.write(k,function(){t(u,l);c.l.onerror=p;g.done();c=null;e()});return c}var a=0,b=[],c=null;return t(function(d,k,g){"function"===typeof g&&(g={done:g});g=B(g,h);d=/^#/.test(d)?m.document.getElementById(d.substr(1)):d.pa?d[0]:d;var r=[d,k,g];d.ca={cancel:function(){r.stream?r.stream.abort():r[1]=n}};g.O(r);b.push(r);c||e();return d.ca},
{streams:{},ra:b,na:z})}();F=m.postscribe}})();D("google_tag_manager_external.postscribe.installPostscribe",function(){var n=window.google_tag_manager;n&&(n.postscribe||(n.postscribe=window.postscribe||F))});D("google_tag_manager_external.postscribe.getPostscribe",function(){return window.google_tag_manager.postscribe});}).call(this);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.yi=b.prototype},na=this||self,sa=function(a){if(a&&a!=na)return oa(a.document);null===ra&&(ra=oa(na.document));return ra},ta=/^[\w+/_-]+[=]{0,2}$/,ra=null,oa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ta.test(c))return c}return""},ua=function(a){return a};var xa=function(a,b){this.g=a;this.o=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.D={};this.s=!1;this.K={}};Aa.prototype.get=function(a){return this.D["dust."+a]};Aa.prototype.set=function(a,b){this.s||(a="dust."+a,this.K.hasOwnProperty(a)||(this.D[a]=b))};Aa.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};
var Ba=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b},Ca=function(a,b){b="dust."+b;a.s||a.K.hasOwnProperty(b)||delete a.D[b]};var Da=function(a){this.o=new Aa;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};aa=Da.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof Da?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else za(a)?this.g[Number(a)]=b:this.o.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.g[Number(a)]:this.o.get(a)};aa.length=function(){return this.g.length};aa.Jb=function(){for(var a=Ba(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new Da(a)};var Ea=function(a,b){za(b)?delete a.g[Number(b)]:Ca(a.o,b)};aa=Da.prototype;aa.pop=function(){return this.g.pop()};
aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new Da(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};aa.has=function(a){return za(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ga=function(){function a(f,g){if(b[f]){if(b[f].Hc+g>b[f].max)throw Error("Quota exceeded");b[f].Hc+=g}}var b={},c=void 0,d=void 0,e={Ph:function(f){c=f},Af:function(){c&&a(c,1)},Rh:function(f){d=f},Ua:function(f){d&&a(d,f)},bi:function(f,g){b[f]=b[f]||{Hc:0};b[f].max=g},vh:function(f){return b[f]&&b[f].Hc||0},reset:function(){b={}},jh:a};e.onFnConsume=e.Ph;e.consumeFn=e.Af;e.onStorageConsume=e.Rh;e.consumeStorage=e.Ua;e.setMax=e.bi;e.getConsumed=e.vh;e.reset=e.reset;e.consume=e.jh;return e};var Ia=function(a,b){this.s=a;this.L=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new Aa;this.g=this.K=void 0};Ia.prototype.add=function(a,b){Ja(this,a,b,!1)};var Ja=function(a,b,c,d){if(!a.o.s)if(a.s.Ua(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.K["dust."+b]=!0}else a.o.set(b,c)};
Ia.prototype.set=function(a,b){this.o.s||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Ua(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ia.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Ia.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ka=function(a){var b=new Ia(a.s,a);a.K&&(b.K=a.K);b.L=a.L;b.g=a.g;return b};var La={},Na=function(a,b){La[a]=La[a]||[];La[a][b]=!0},Oa=function(a){for(var b=[],c=La[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Pa=function(){},Qa=function(a){return"function"==typeof a},k=function(a){return"string"==typeof a},Ra=function(a){return"number"==typeof a&&!isNaN(a)},Sa=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Na("TAGGING",4):Na("TAGGING",5);return b},Ta=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ua=function(a,b){if(a&&Sa(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Wa=function(a,b){if(!Ra(a)||!Ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ya=function(a,b){for(var c=new Xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},$a=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},ab=
function(a){return Math.round(Number(a))||0},bb=function(a){return"false"==String(a).toLowerCase()?!1:!!a},gb=function(a){var b=[];if(Sa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},hb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ib=function(){return(new Date).getTime()},Xa=function(){this.prefix="gtm.";this.values={}};Xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Xa.prototype.get=function(a){return this.values[this.prefix+a]};
var jb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},kb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},lb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},ob=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},rb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},sb=function(a,b){var c=n;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Ta(b,d))return}return d},ub=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},wb=/^\w{1,9}$/,xb=function(a){var b=[];Za(a,function(c,d){wb.test(c)&&d&&b.push(c)});return b.join(",")};var yb=function(a,b){Aa.call(this);this.L=a;this.sa=b};ma(yb,Aa);yb.prototype.toString=function(){return this.L};yb.prototype.Jb=function(){return new Da(Ba(this))};yb.prototype.g=function(a,b){a.s.Af();return this.sa.apply(new zb(this,a),Array.prototype.slice.call(arguments,1))};yb.prototype.o=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var Bb=function(a,b){for(var c,d=0;d<b.length&&!(c=Ab(a,b[d]),c instanceof xa);d++);return c},Ab=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof yb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.K;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},zb=function(a,b){this.o=a;this.g=b},A=function(a,b){var c=a.g;return Sa(b)?Ab(c,b):b},F=function(a){return a.o.L};var Db=function(){Aa.call(this)};ma(Db,Aa);Db.prototype.Jb=function(){return new Da(Ba(this))};var Gb={control:function(a,b){return new xa(a,A(this,b))},fn:function(a,b,c){var d=this.g,e=A(this,b);if(!(e instanceof Da))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Ua(a.length+f.length);return new yb(a,function(){return function(g){var h=Ka(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=A(this,l[m]),l[m]instanceof xa)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new Da(l));var r=Bb(h,f);if(r instanceof xa)return"return"===r.g?r.o:r}}())},list:function(a){var b=this.g.s;b.Ua(arguments.length);for(var c=new Da,d=0;d<arguments.length;d++){var e=A(this,arguments[d]);"string"===typeof e&&b.Ua(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new Db,d=0;d<arguments.length-1;d+=2){var e=A(this,arguments[d])+"",f=A(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ua(g);c.set(e,f)}return c},undefined:function(){}};var Hb=function(){this.s=Ga();this.g=new Ia(this.s)},Ib=function(a,b,c){var d=new yb(b,c);d.s=!0;a.g.set(b,d)};Hb.prototype.Lc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};Hb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=Ab(this.g,arguments[c]);return b};Hb.prototype.D=function(a,b){var c=Ka(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=Ab(c,arguments[e]);return d};var Jb=function(a){if(a instanceof Jb)return a;this.za=a};Jb.prototype.toString=function(){return String(this.za)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Kb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Lb=function(a){if(null==a)return String(a);var b=Kb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Mb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Nb=function(a){if(!a||"object"!=Lb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Mb(a,"constructor")&&!Mb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Mb(a,b)},G=function(a,b){var c=b||("array"==Lb(a)?[]:{}),d;for(d in a)if(Mb(a,d)){var e=a[d];"array"==Lb(e)?("array"!=Lb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Nb(e)?(Nb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Qb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Ta(d,h);if(-1<l)return e[l];if(h instanceof Da){var m=[];d.push(h);e.push(m);for(var p=h.Jb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof Db){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof yb){var u=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Pb(t[v],b,!!c);var w=b?b.s:Ga(),z=new Ia(w);
b&&(z.g=b.g);return g(h.g.apply(h,[z].concat(t)))};d.push(h);e.push(u);f(h,u);return u}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Pb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Ta(d,
h);if(-1<l)return e[l];if(Sa(h)||$a(h)){var m=new Da([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Nb(h)){var q=new Db;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new yb("",function(t){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Qb(A(this,v[w]),b,!!c);return g((0,this.g.L)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var u=typeof h;if(null===h||"string"===u||"number"===u||"boolean"===u)return h;};return g(a)};var Rb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Sb=function(a){if(void 0===a||Sa(a)||Nb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof Da)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new Da(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new Da(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new Da(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Rb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ea(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new Da(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Rb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ea(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Wb=new xa("break"),Xb=new xa("continue"),Yb=function(a,b){return A(this,a)+A(this,b)},Zb=function(a,b){return A(this,a)&&A(this,b)},$b=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);if(!(c instanceof Da))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Ta(Vb,b)){var d=Qb(c);return Pb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof Da){if(a.has(b)){var e=a.get(b);if(e instanceof yb){var f=Rb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ta(Ub.supportedMethods,b)){var g=
Rb(c);g.unshift(this.g);return Ub[b].apply(a,g)}}if(a instanceof yb||a instanceof Db){if(a.has(b)){var h=a.get(b);if(h instanceof yb){var l=Rb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof yb?a.L:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Rb(c))}if(a instanceof Jb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},ac=function(a,b){a=A(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=A(this,b);c.set(a,d);return d},bc=function(a){var b=Ka(this.g),c=Bb(b,Array.prototype.slice.apply(arguments));if(c instanceof xa)return c},cc=function(){return Wb},dc=function(a){for(var b=A(this,a),c=0;c<b.length;c++){var d=A(this,b[c]);if(d instanceof xa)return d}},ec=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=A(this,arguments[c+1]);Ja(b,d,e,!0)}}},fc=function(){return Xb},ic=function(a,b,c){var d=new Da;b=A(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,A(this,f))},jc=function(a,b){return A(this,a)/A(this,b)},kc=function(a,b){a=A(this,a);b=A(this,b);var c=a instanceof Jb,d=b instanceof Jb;return c||d?c&&d?a.za==b.za:!1:a==b},lc=function(a){for(var b,c=0;c<arguments.length;c++)b=
A(this,arguments[c]);return b};function mc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=Bb(f,d);if(g instanceof xa){if("break"===g.g)break;if("return"===g.g)return g}}}function nc(a,b,c){if("string"===typeof b)return mc(a,function(){return b.length},function(f){return f},c);if(b instanceof Db||b instanceof Da||b instanceof yb){var d=b.Jb(),e=d.length();return mc(a,function(){return e},function(f){return d.get(f)},c)}}
var oc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return nc(function(e){d.set(a,e);return d},b,c)},pc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return nc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},qc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return nc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)},sc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return rc(function(e){d.set(a,e);return d},b,c)},tc=
function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return rc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},uc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);var d=this.g;return rc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)};
function rc(a,b,c){if("string"===typeof b)return mc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof Da)return mc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var vc=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var u=f.get(r);q.add(u,p.get(u))}}var f=A(this,a);if(!(f instanceof Da))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=A(this,d);var h=Ka(g);for(e(g,h);Ab(h,b);){var l=Bb(h,d);if(l instanceof xa){if("break"===l.g)break;if("return"===l.g)return l}var m=Ka(g);e(h,m);Ab(m,c);h=m}},wc=function(a){a=A(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},xc=function(a,b){var c;a=A(this,a);b=A(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof Db||a instanceof Da||a instanceof yb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof Jb)return;return c},yc=function(a,b){return A(this,a)>A(this,
b)},zc=function(a,b){return A(this,a)>=A(this,b)},Ac=function(a,b){a=A(this,a);b=A(this,b);a instanceof Jb&&(a=a.za);b instanceof Jb&&(b=b.za);return a===b},Dc=function(a,b){return!Ac.call(this,a,b)},Ec=function(a,b,c){var d=[];A(this,a)?d=A(this,b):c&&(d=A(this,c));var e=Bb(this.g,d);if(e instanceof xa)return e},Fc=function(a,b){return A(this,a)<A(this,b)},Gc=function(a,b){return A(this,a)<=A(this,b)},Hc=function(a,b){return A(this,a)%A(this,b)},Ic=function(a,b){return A(this,a)*A(this,b)},Jc=function(a){return-A(this,
a)},Kc=function(a){return!A(this,a)},Lc=function(a,b){return!kc.call(this,a,b)},Pc=function(){return null},Qc=function(a,b){return A(this,a)||A(this,b)},Rc=function(a,b){var c=A(this,a);A(this,b);return c},Sc=function(a){return A(this,a)},Tc=function(a){return Array.prototype.slice.apply(arguments)},Uc=function(a){return new xa("return",A(this,a))},Vc=function(a,b,c){a=A(this,a);b=A(this,b);c=A(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
yb||a instanceof Da||a instanceof Db)&&a.set(b,c);return c},Wc=function(a,b){return A(this,a)-A(this,b)},Xc=function(a,b,c){a=A(this,a);var d=A(this,b),e=A(this,c);if(!Sa(d)||!Sa(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===A(this,d[h]))if(f=A(this,e[h]),f instanceof xa){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=A(this,e[e.length-1]),f instanceof xa&&("return"===f.g||"continue"===
f.g)))return f},Yc=function(a,b,c){return A(this,a)?A(this,b):A(this,c)},Zc=function(a){a=A(this,a);return a instanceof yb?"function":typeof a},$c=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},ad=function(a,b,c,d){var e=A(this,d);if(A(this,c)){var f=Bb(this.g,e);if(f instanceof xa){if("break"===f.g)return;if("return"===f.g)return f}}for(;A(this,a);){var g=Bb(this.g,e);if(g instanceof xa){if("break"===g.g)break;if("return"===g.g)return g}A(this,
b)}},bd=function(a){return~Number(A(this,a))},cd=function(a,b){return Number(A(this,a))<<Number(A(this,b))},dd=function(a,b){return Number(A(this,a))>>Number(A(this,b))},ed=function(a,b){return Number(A(this,a))>>>Number(A(this,b))},fd=function(a,b){return Number(A(this,a))&Number(A(this,b))},gd=function(a,b){return Number(A(this,a))^Number(A(this,b))},hd=function(a,b){return Number(A(this,a))|Number(A(this,b))};var jd=function(){this.g=new Hb;id(this)};jd.prototype.Lc=function(a){return kd(this.g.o(a))};
var md=function(a,b){return kd(ld.g.D(a,b))},id=function(a){var b=function(d,e){var f=a.g,g=String(e);Gb.hasOwnProperty(d)&&Ib(f,g||d,Gb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Ib(a.g,String(d),e)};c(0,Yb);c(1,Zb);c(2,$b);c(3,ac);c(53,bc);c(4,cc);c(5,dc);c(52,ec);c(6,fc);c(9,dc);c(50,ic);c(10,jc);c(12,kc);c(13,lc);c(47,oc);c(54,pc);c(55,qc);c(63,vc);c(64,sc);c(65,tc);c(66,uc);c(15,wc);c(16,xc);c(17,xc);c(18,yc);c(19,zc);c(20,Ac);c(21,Dc);c(22,Ec);
c(23,Fc);c(24,Gc);c(25,Hc);c(26,Ic);c(27,Jc);c(28,Kc);c(29,Lc);c(45,Pc);c(30,Qc);c(32,Rc);c(33,Rc);c(34,Sc);c(35,Sc);c(46,Tc);c(36,Uc);c(43,Vc);c(37,Wc);c(38,Xc);c(39,Yc);c(40,Zc);c(41,$c);c(42,ad);c(58,bd);c(57,cd);c(60,dd);c(61,ed);c(56,fd);c(62,gd);c(59,hd)},rd=function(){var a=ld,b=qd();Ib(a.g,"require",b)},sd=function(a,b){a.g.g.L=b};
function kd(a){if(a instanceof xa||a instanceof yb||a instanceof Da||a instanceof Db||a instanceof Jb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var td=function(){var a=function(b){return{toString:function(){return b}}};return{bg:a("consent"),ad:a("consent_always_fire"),te:a("convert_case_to"),ue:a("convert_false_to"),ve:a("convert_null_to"),we:a("convert_true_to"),xe:a("convert_undefined_to"),ii:a("debug_mode_metadata"),Ta:a("function"),Qg:a("instance_name"),Sg:a("live_only"),Tg:a("malware_disabled"),Ug:a("metadata"),li:a("original_activity_id"),mi:a("original_vendor_template_id"),Wg:a("once_per_event"),kf:a("once_per_load"),oi:a("priority_override"),
rf:a("setup_tags"),sf:a("tag_id"),tf:a("teardown_tags")}}();
var ud=[],vd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},wd=function(a){return vd[a]},xd=/[\x00\x22\x26\x27\x3c\x3e]/g;var Bd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Cd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Dd=function(a){return Cd[a]};
ud[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Bd,Dd)+"'"}};var Ld=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Md={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nd=function(a){return Md[a]};ud[16]=function(a){return a};var Pd;
var Qd=[],Rd=[],Sd=[],Td=[],Ud=[],Vd={},Wd,Xd,Yd,Zd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},$d=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Vd[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.xf&&b.xf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===td.ad.toString()&&a[f]){}return void 0!==d?d(e):Pd(c,e,b)},be=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ae(a[e],b,c));return d},ae=function(a,b,c){if(Sa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ae(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Qd[f];if(!g||b.Ud(g))return;c[f]=!0;try{var h=be(g,b,c);h.vtp_gtmEventId=b.id;d=$d(h,b);Yd&&(d=Yd.kh(d,h))}catch(z){b.Mf&&b.Mf(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[ae(a[l],b,c)]=ae(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=ae(a[p],b,c);Xd&&(m=m||q===Xd.zc);d.push(q)}return Xd&&m?Xd.nh(d):d.join("");case "escape":d=ae(a[1],b,c);if(Xd&&Sa(a[1])&&"macro"===a[1][0]&&Xd.Dh(a))return Xd.Uh(d);d=
String(d);for(var r=2;r<a.length;r++)ud[a[r]]&&(d=ud[a[r]](d));return d;case "tag":var u=a[1];if(!Td[u])throw Error("Unable to resolve tag reference "+u+".");return d={Ef:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=ce(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ce=function(a,b,c){try{return Wd(be(a,b,c))}catch(d){JSON.stringify(a)}return 2};var de=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};ma(de,Error);function ee(a,b){if(Sa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ee(a[c],b[c])}};var fe=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};ma(fe,Error);var he=function(){return function(a,b){a instanceof fe||(a=new fe(a,ge));b&&a.g.push(b);throw a;}};function ge(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ra(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var ie=null,le=function(a){function b(q){for(var r=0;r<q.length;r++)d[q[r]]=!0}var c=[],d=[];ie=je(a);for(var e=0;e<Rd.length;e++){var f=Rd[e],g=ke(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<Td.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},ke=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ie(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=ie(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},je=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ce(Sd[c],a));return b[c]}};var me={kh:function(a,b){b[td.te]&&"string"===typeof a&&(a=1==b[td.te]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(td.ve)&&null===a&&(a=b[td.ve]);b.hasOwnProperty(td.xe)&&void 0===a&&(a=b[td.xe]);b.hasOwnProperty(td.we)&&!0===a&&(a=b[td.we]);b.hasOwnProperty(td.ue)&&!1===a&&(a=b[td.ue]);return a}};var ne=function(){this.g={}};function oe(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new de(c,d,g);}}function pe(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));oe(e,b,d,g);oe(f,b,d,g)}}}};var te=function(a){var b=qe.F,c=this;this.o=new ne;this.g={};var d={},e=pe(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Za(a,function(f,g){var h={};Za(g,function(l,m){var p=re(l,m);h[l]=p.assert;d[l]||(d[l]=p.O)});c.g[f]=function(l,m){var p=h[l];if(!p)throw se(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},ve=function(a){return ue.g[a]||
function(){}};function re(a,b){var c=Zd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=se;try{return $d(c)}catch(d){return{assert:function(e){throw new de(e,{},"Permission "+e+" is unknown.");},O:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function se(a,b,c){return new de(a,b,c)};var we=!1;var xe={};xe.hi=bb('');xe.qh=bb('');var ye=we,ze=xe.qh,Ae=xe.hi;
var Oe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Pe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Oe(b,"/*")&&(b=b.slice(0,-2));Oe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Qe=/^[a-z0-9-]+$/i,Re=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Ue=function(a,b){var c;if(!(c=!Se(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Qe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Re.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var u=l.hostname,t=q;if(0!==t.indexOf("*."))r=u.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=u.toLowerCase().indexOf(t.toLowerCase());r=-1===v?!1:u.length===t.length?
!0:u.length!==t.length+v?!1:"."===u[v-1]}if(r){var w=p.slice(p.indexOf("/"));h=Pe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Se=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Ve=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,We={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ve.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof yb?p="Fn":l instanceof Da?p="List":l instanceof Db?p="DustMap":
l instanceof Jb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(We[h]||h)+".");}}};function Xe(a){return""+a}
function Ye(a,b){var c=[];return c};var Ze=function(a,b){var c=new yb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=A(this,d[e]);return b.apply(this,d)});c.s=!0;return c},$e=function(a,b){var c=new Db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Qa(e)?c.set(d,Ze(a+"_"+d,e)):(Ra(e)||k(e)||"boolean"==typeof e)&&c.set(d,e)}c.s=!0;return c};var af=function(a,b){H(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new Db;return d=$e("AssertApiSubject",c)};var bf=function(a,b){H(F(this),["actual:?*","message:?string"],arguments);var c={},d=new Db;
return d=$e("AssertThatSubject",c)};function cf(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Qb(arguments[d],c));return Pb(a.apply(null,b))}}var ef=function(){for(var a=Math,b=df,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=cf(a[e].bind(a)))}return c};var ff=function(a){var b;return b};var gf=function(a){var b;return b};var hf=function(a){H(F(this),["uri:!string"],arguments);return encodeURI(a)};var jf=function(a){H(F(this),["uri:!string"],arguments);return encodeURIComponent(a)};var kf=function(a){H(F(this),["message:?string"],arguments);};var lf=function(a,b){H(F(this),["min:!number","max:!number"],arguments);return Wa(a,b)};var mf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.gh.apply(null,Array.prototype.slice.call(arguments,1))};var nf=function(){mf(this,"read_container_data");var a=new Db;a.set("containerId",'GTM-WHNNX8B');a.set("version",'217');a.set("environmentName",'');a.set("debugMode",ye);a.set("previewMode",Ae);a.set("environmentMode",ze);a.s=!0;return a};var of=function(){return(new Date).getTime()};var pf=function(a){if(null===a)return"null";if(a instanceof Da)return"array";if(a instanceof yb)return"function";if(a instanceof Jb){a=a.za;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var qf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(ye||Ae)&&a.call(this,e.message)}}}return{parse:b(function(c){return Pb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Qb(c))})}};var rf=function(a){return ab(Qb(a,this.g))};var sf=function(a){return Number(Qb(a,this.g))};var tf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var uf=function(a,b,c){var d=null,e=!1;H(F(this),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new Db;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof Db&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var df="floor ceil round max min abs pow sqrt".split(" ");var vf=function(){var a={};return{wh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ci:function(b,c){a[b]=c},reset:function(){a={}}}},wf=function(a,b){H(F(this),["apiName:!string","mock:?*"],arguments);};var xf=function(){this.g={};this.o={};};xf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
xf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Qa(b)?Ze(a,b):$e(a,b)};
var zf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Qa(c)?Ze(b,c):$e(b,c)};function yf(a,b){var c=void 0;return c};function Af(){var a={};return a};var J={Gb:"_ee",Dd:"_syn",ri:"_uei",wd:"_eu",ni:"_pci",jd:"event_callback",qc:"event_timeout",aa:"gtag.config",wa:"gtag.get",va:"purchase",cb:"refund",Qa:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",kg:"view_cart",Be:"add_to_wishlist",Ga:"view_item",Ae:"view_promotion",ze:"select_promotion",dd:"select_item",mc:"view_item_list",ye:"add_payment_info",jg:"add_shipping_info",Ia:"value_key",Ha:"value_callback",ja:"allow_ad_personalization_signals",rd:"restricted_data_processing",wb:"allow_google_signals",
ka:"cookie_expires",zb:"cookie_update",Db:"session_duration",wc:"session_engaged_time",ya:"user_properties",Ka:"transport_url",R:"ads_data_redaction",vd:"user_data",sc:"first_party_collection",C:"ad_storage",I:"analytics_storage",bd:"region",se:"wait_for_update"};
J.af=[J.va,J.cb,J.Qa,J.$a,J.ab,J.kg,J.Be,J.Ga,J.Ae,J.ze,J.mc,J.dd,J.ye,J.jg];J.$e=[J.ja,J.wb,J.zb];J.bf=[J.ka,J.qc,J.Db,J.wc];var Cf=function(a){Na("GTM",a)};var Df=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ef=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ff,Gf=function(){if(void 0===Ff){var a=null,b=na.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ua,createScript:ua,createScriptURL:ua})}catch(c){na.console&&na.console.error(c.message)}Ff=a}else Ff=a}return Ff};var If=function(a,b){this.g=b===Hf?a:""};If.prototype.toString=function(){return this.g+""};var Hf={},Jf=function(a){var b=Gf(),c=b?b.createScriptURL(a):a;return new If(c,Hf)};var Kf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Lf;a:{var Mf=na.navigator;if(Mf){var Nf=Mf.userAgent;if(Nf){Lf=Nf;break a}}Lf=""}var Of=function(a){return-1!=Lf.indexOf(a)};var Qf=function(a,b,c){this.g=c===Pf?a:""};Qf.prototype.toString=function(){return this.g.toString()};var Rf=function(a){return a instanceof Qf&&a.constructor===Qf?a.g:"type_error:SafeHtml"},Pf={},Sf=function(a){var b=Gf(),c=b?b.createHTML(a):a;return new Qf(c,null,Pf)},Tf=new Qf(na.trustedTypes&&na.trustedTypes.emptyHTML||"",0,Pf);var Uf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Rf(Tf);return!c.parentElement}),Vf=function(a,b){if(Uf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Rf(b)},Wf=function(a,b){a.src=b instanceof If&&b.constructor===If?b.g:"type_error:TrustedResourceUrl";var c=sa(a.ownerDocument&&a.ownerDocument.defaultView);
c&&a.setAttribute("nonce",c)};var n=window,K=document,Xf=navigator,Yf=K.currentScript&&K.currentScript.src,Zf=function(a,b){var c=n[a];n[a]=void 0===c?b:c;return n[a]},$f=function(a){var b=K.getElementsByTagName("script")[0]||K.body||K.head;b.parentNode.insertBefore(a,b)},ag=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},bg={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},cg=function(a,b,c,d){var e=K.createElement("script");
d&&Za(d,function(g,h){g=g.toLowerCase();bg.hasOwnProperty(g)||e.setAttribute(g,h)});e.type="text/javascript";e.async=!0;Wf(e,Jf(a));ag(e,b);c&&(e.onerror=c);var f=sa();f&&e.setAttribute("nonce",f);$f(e);return e},dg=function(){if(Yf){var a=Yf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},eg=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||K.body||
K.head;d.parentNode.insertBefore(c,d);ag(c,b);void 0!==a&&(c.src=a);return c},fg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},M=function(a){n.setTimeout(a,0)},ig=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kg=function(a){var b=K.createElement("div"),c=Sf("A<div>"+a+"</div>");Vf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},lg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},mg=function(a){Xf.sendBeacon&&Xf.sendBeacon(a)||fg(a)},ng=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var og=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var pg=new og(1936,!0),qg=new og(1937),rg=new og(1933);var sg=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.o=function(){a[rg.g]=!0}};sg.g=void 0;sg.o=function(){return sg.g?sg.g:sg.g=new sg};var tg=function(a){return sg.o().g(a.g,a.defaultValue)};var ug=[];function yg(){var a=Zf("google_tag_data",{});a.ics||(a.ics={entries:{},set:zg,update:Ag,addListener:Bg,notifyListeners:Cg,active:!1,usedDefault:!1});return a.ics}
function zg(a,b,c,d,e,f){var g=yg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&n.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Dg(a),Cg(),Na("TAGGING",2))},f)}}}
function Ag(a,b){var c=yg();c.active=!0;if(void 0!=b){var d=Eg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Eg(a);f.quiet?(f.quiet=!1,Dg(a)):g!==d&&Dg(a)}}function Bg(a,b){ug.push({zf:a,sh:b})}function Dg(a){for(var b=0;b<ug.length;++b){var c=ug[b];Sa(c.zf)&&-1!==c.zf.indexOf(a)&&(c.Of=!0)}}function Cg(a){for(var b=0;b<ug.length;++b){var c=ug[b];if(c.Of){c.Of=!1;try{c.sh({yf:a})}catch(d){}}}}
var Eg=function(a){var b=yg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Fg=function(a){return(yg().entries[a]||{}).initial},Gg=function(a){return!(yg().entries[a]||{}).quiet},Hg=function(){return tg(rg)?yg().active:!1},Ig=function(){return yg().usedDefault},Jg=function(a,b){yg().addListener(a,b)},Kg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Gg(b[e]))return!0;return!1}if(c()){var d=!1;Jg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Lg=
function(a,b){if(!1===Eg(b)){var c=!1;Jg([b],function(d){!c&&Eg(b)&&(a(d),c=!0)})}};function Mg(a){for(var b=[],c=0;c<Ng.length;c++){var d=a(Ng[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Ng=[J.C,J.I],Og=function(a){var b=a[J.bd];b&&Cf(40);var c=a[J.se];c&&Cf(41);for(var d=Sa(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==J.bd&&f!==J.se)if(-1<Ta(Ng,f)){var g=f,h=a[f],l=d[e];yg().set(g,h,l,"US","US-PA",c)}else{}},Pg=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Ta(Ng,c)){var d=c,e=a[c];yg().update(d,e)}else{}yg().notifyListeners(b)},Qg=function(a){var b=Eg(a);return void 0!=b?b:!0},Rg=function(){return"G1"+Mg(Eg)},Sg=function(a,b){Jg(a,b)},Tg=function(a,b){Kg(a,b)};var Vg=function(a){return Ug?K.querySelectorAll(a):null},Wg=function(a,b){if(!Ug)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Xg=!1;if(K.querySelectorAll)try{var Yg=K.querySelectorAll(":root");Yg&&1==Yg.length&&Yg[0]==K.documentElement&&(Xg=!0)}catch(a){}var Ug=Xg;var Zg=function(a){if(K.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!n.getComputedStyle)return!0;var c=n.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=n.getComputedStyle(d,
null))}return!1};
var $g=function(){var a=K.body,b=K.documentElement||a&&a.parentElement,c,d;if(K.compatMode&&"BackCompat"!==K.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Cf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},ah=function(a){var b=$g(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var bh=[],ch=!(!n.IntersectionObserver||!n.IntersectionObserverEntry),dh=function(a,b,c){for(var d=new n.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<bh.length;f++)if(!bh[f])return bh[f]=d,f;return bh.push(d)-1},eh=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:ib()};M(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=ah(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},fh=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(ch){var e=!1;M(function(){e||
eh(a,b,c)()});return dh(function(f){e=!0;for(var g={rb:0};g.rb<f.length;g={rb:g.rb},g.rb++)M(function(h){return function(){return a(f[h.rb])}}(g))},b,c)}return n.setInterval(eh(a,b,c),1E3)},gh=function(a){ch?0<=a&&a<bh.length&&bh[a]&&(bh[a].disconnect(),bh[a]=void 0):n.clearInterval(a)};var hh=/:[0-9]+$/,ih=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},lh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=jh(a.protocol)||jh(n.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
n.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||n.location.hostname).replace(hh,"").toLowerCase());return kh(a,b,c,d,e)},kh=function(a,b,c,d,e){var f,g=jh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=mh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(hh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Na("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ta(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=ih(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},jh=function(a){return a?a.replace(":",
"").toLowerCase():""},mh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},nh=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Na("TAGGING",1),c="/"+c);var d=b.hostname.replace(hh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},oh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=nh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var ph=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),qh=new RegExp(/support|noreply/i),rh=["SCRIPT","IMG","SVG","PATH","BR"],sh=["BR"];function th(a){var b;if(a===K.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=th(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function uh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function vh(a){if(0==a.length)return null;var b;b=uh(a,function(c){return!qh.test(c.$c)});b=uh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=uh(b,function(c){return!Zg(c.element)});return b[0]}
function wh(){var a;var b=[],c=K.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=rh.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=sh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,p=[],q=0;q<m.length;q++){var r=m[q],u=r.textContent;r.value&&(u=r.value);if(u){var t=u.match(ph);if(t){var v=
t[0],w;if(n.location){var z=kh(n.location,"host",!0);w=0<=v.toLowerCase().indexOf(z)}else w=!1;w||p.push({element:r,$c:v})}}}var x=vh(p),y=[];if(x){var B=x.element;y.push({$c:x.$c,querySelector:th(B),tagName:B.tagName,isVisible:!Zg(B),type:1,Lf:!0})}return{elements:y,status:10<p.length?"3":l.status}}var qe={},N=null,Kh=Math.random();qe.F="GTM-WHNNX8B";qe.Dc="472";qe.ki="";qe.dg="ChEI8I7qgwYQ17SW3rfu/fejARIkAFHcOXVOQEYRhqo5YaVPdSgPaiwH7qiuEVc7yigmM3YDkLxyGgJc+A\x3d\x3d";var Lh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Mh={__paused:!0,__tg:!0},Nh;for(Nh in Lh)Lh.hasOwnProperty(Nh)&&(Mh[Nh]=!0);var Oh="www.googletagmanager.com/gtm.js";
var Ph=Oh,Qh=bb(""),Rh=null,Sh=null,Th="//www.googletagmanager.com/a?id="+qe.F+"&cv=217",Uh={},Vh={},Wh=function(){var a=N.sequence||1;N.sequence=a+1;return a};qe.cg="";var Xh={},Yh=new Xa,Zh={},$h={},ci={name:"dataLayer",set:function(a,b){G(ub(a,b),Zh);ai()},get:function(a){return bi(a,2)},reset:function(){Yh=new Xa;Zh={};ai()}},bi=function(a,b){return 2!=b?Yh.get(a):di(a)},di=function(a,b){var c=a.split(".");b=b||[];for(var d=Zh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ta(b,d))return}return d},ei=function(a,b){$h.hasOwnProperty(a)||(Yh.set(a,b),G(ub(a,b),Zh),ai())},fi=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=bi(c,1);if(Sa(d)||Nb(d))d=G(d);$h[c]=d}},ai=function(a){Za($h,function(b,c){Yh.set(b,c);G(ub(b,void 0),Zh);G(ub(b,c),Zh);a&&delete $h[b]})},hi=function(a,b,c){Xh[a]=Xh[a]||{};Xh[a][b]=gi(b,c)},gi=function(a,b){var c,d=1!==(void 0===b?2:b)?di(a):Yh.get(a);"array"===Lb(d)||"object"===Lb(d)?c=G(d):c=d;return c},ii=function(a,b){if(Xh[a])return Xh[a][b]},ji=function(a,b){Xh[a]&&delete Xh[a][b]};var mi={},ni=function(a,b){if(n._gtmexpgrp&&n._gtmexpgrp.hasOwnProperty(a))return n._gtmexpgrp[a];void 0===mi[a]&&(mi[a]=Math.floor(Math.random()*b));return mi[a]};var oi=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function pi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var qi=function(a){qi[" "](a);return a};qi[" "]=function(){};function ri(a){if(!tg(qg))return!0;try{return qi(a.cookie),!0}catch(b){return!1}};var ui=function(a,b,c,d){return si(d)?pi(a,String(b||ti()),c):[]},xi=function(a,b,c,d,e){if(si(e)){var f=vi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=wi(f,function(g){return g.Kc},b);if(1===f.length)return f[0].id;f=wi(f,function(g){return g.Yb},c);return f[0]?f[0].id:void 0}}};function yi(a,b,c,d){var e=ti(),f=document;ri(f)&&(f.cookie=a);var g=ti();return e!=g||void 0!=c&&0<=ui(b,g,!1,d).indexOf(c)}
var Ci=function(a,b,c,d){function e(w,z,x){if(null==x)return delete h[z],w;h[z]=x;return w+"; "+z+"="+x}function f(w,z){if(null==z)return delete h[z],w;h[z]=!0;return w+"; "+z}if(!si(c.Ea))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=zi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Nh);g=e(g,"samesite",
c.Yh);c.$h&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=Ai(),q=void 0,r=!1,u=0;u<p.length;++u){var t="none"!==p[u]?p[u]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!Bi(t,c.path)&&yi(v,a,b,c.Ea))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Bi(m,c.path)?1:yi(g,a,b,c.Ea)?0:1},Di=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ci(a,b,c)};
function wi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function vi(a,b,c){for(var d=[],e=ui(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Kc:1*l[0]||1,Yb:1*l[1]||1}))}}return d}
var zi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ei=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Fi=/(^|\.)doubleclick\.net$/i,Bi=function(a,b){return Fi.test(document.location.hostname)||"/"===b&&Ei.test(a)},ti=function(){return ri(document)?document.cookie:""},Ai=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;
Fi.test(e)||Ei.test(e)||a.push("none");return a},si=function(a){if(!tg(rg)||!a||!Hg())return!0;if(!Gg(a))return!1;var b=Eg(a);return null==b?!0:!!b};var Gi=function(){for(var a=Math.round(2147483647*Math.random()),b=ri(K)?K.cookie:null,c=""+Xf.userAgent+(b||"")+(K.referrer||""),d=c.length,e=n.history.length;0<e;)c+=e--^d++;return[a^oi(c)&2147483647,Math.round(ib()/1E3)].join(".")},Ji=function(a,b,c,d,e){var f=Hi(b);return xi(a,f,Ii(c),d,e)},Ki=function(a,b,c,d){var e=""+Hi(c),f=Ii(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Hi=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ii=function(a){if(!a||"/"===
a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Li(a,b,c){var d,e=Number(null!=a.ob?a.ob:void 0);0!==e&&(d=new Date((b||ib())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Mi=["1"],Ni={},Qi=function(a){var b=Oi(a.prefix),c=Ni[b];c&&Pi(b,c,a)},Si=function(a){var b=Oi(a.prefix);if(!Ni[b]&&!Ri(b,a.path,a.domain)){var c=Gi();if(0===Pi(b,c,a)){var d=Zf("google_tag_data",{});d._gcl_au?Na("GTM",57):d._gcl_au=c}Ri(b,a.path,a.domain)}};function Pi(a,b,c){var d=Ki(b,"1",c.domain,c.path),e=Li(c);e.Ea="ad_storage";return Di(a,d,e)}function Ri(a,b,c){var d=Ji(a,b,c,Mi,"ad_storage");d&&(Ni[a]=d);return d}function Oi(a){return(a||"_gcl")+"_au"};var Ti=function(a){for(var b=[],c=K.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ne:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function Ui(a,b){var c=Ti(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].ne]||(d[c[e].ne]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),oa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].ne].push(g)}}return d};function Vi(){for(var a=Wi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Xi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Wi,Yi;
function Zi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Yi[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Wi=Wi||Xi();Yi=Yi||Vi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var $i;var dj=function(){var a=aj,b=bj,c=cj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){gg(K,"mousedown",d);gg(K,"keyup",d);gg(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ej=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};cj().decorators.push(f)},fj=function(a,b,c){for(var d=cj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==K.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&lb(e,g.callback())}}return e},cj=function(){var a=Zf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var gj=/(.*?)\*(.*?)\*(.*)/,hj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ij=/^(?:www\.|m\.|amp\.)+/,jj=/([^?#]+)(\?[^#]*)?(#.*)?/;function kj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var qj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Wi=Wi||Xi();Yi=Yi||Vi();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),u=p?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=r>>2,w=(r&3)<<4|u>>4,z=(u&15)<<2|t>>6,x=t&63;q||(x=64,p||(z=64));l.push(Wi[v],Wi[w],Wi[z],Wi[x])}g=l.join("");f.call(e,g)}}var y=b.join("*");return["1",pj(y),
y].join("*")},pj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=$i)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}$i=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^$i[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},sj=function(){return function(a){var b=nh(n.location.href),
c=b.search.replace("?",""),d=ih(c,"_gl",!1,!0)||"";a.query=rj(d)||{};var e=lh(b,"fragment").match(kj("_gl"));a.fragment=rj(e&&e[3]||"")||{}}},tj=function(a){var b=sj(),c=cj();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(lb(d,e.query),a&&lb(d,e.fragment));return d},rj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=gj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===pj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=Zi(r[u+1]);return q}}}}catch(t){}};function uj(a,b,c,d){function e(p){var q=p,r=kj(a).exec(q),u=q;if(r){var t=r[2],v=r[4];u=r[1];v&&(u=u+t+v)}p=u;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=jj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function vj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=fj(b,1,c),e=fj(b,2,c),f=fj(b,3,c);if(ob(d)){var g=qj(d);c?wj("_gl",g,a):xj("_gl",g,a,!1)}if(!c&&ob(e)){var h=qj(e);xj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){xj(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){wj(m,p,q);break a}}"string"==typeof q&&uj(m,p,q,void 0)}}
function xj(a,b,c,d){if(c.href){var e=uj(a,b,c.href,void 0===d?!1:d);Kf.test(e)&&(c.href=e)}}
function wj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=uj(a,b,c.action);Kf.test(m)&&(c.action=m)}}}
var aj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||vj(e,e.hostname)}}catch(g){}},bj=function(a){try{if(a.action){var b=lh(nh(a.action),"host");vj(a,b)}}catch(c){}},yj=function(a,b,c,d){dj();ej(a,b,"fragment"===c?2:1,!!d,!1)},zj=function(a,b){dj();ej(a,[kh(n.location,"host",!0)],b,!0,!0)},Aj=function(){var a=K.location.hostname,b=hj.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(ij,""),l=e.replace(ij,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},Bj=function(a,b){return!1===a?!1:a||b||Aj()};var Cj={};var Dj=/^\w+$/,Ej=/^[\w-]+$/,Fj=/^~?[\w-]+$/,Gj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Hj=function(){if(!tg(rg)||!Hg())return!0;var a=Eg("ad_storage");return null==a?!0:!!a},Ij=function(a,b){Gg("ad_storage")?Hj()?a():Lg(a,"ad_storage"):b?Na("TAGGING",3):Kg(function(){Ij(a,!0)},["ad_storage"])},Kj=function(a){return Jj(a).map(function(b){return b.oa})},Jj=function(a){var b=[];if(!ri(K)||!K.cookie)return b;var c=ui(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=
{},e=0;e<c.length;d={ic:d.ic},e++){var f=Lj(c[e]);if(null!=f){var g=f,h=g.version;d.ic=g.oa;var l=g.timestamp,m=g.labels,p=Ua(b,function(q){return function(r){return r.oa===q.ic}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=Mj(p.labels,m||[])):b.push({version:h,oa:d.ic,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Nj(b)};
function Mj(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}function Oj(a){return a&&"string"==typeof a&&a.match(Dj)?a:"_gcl"}
var Qj=function(){var a=nh(n.location.href),b=lh(a,"query",!1,void 0,"gclid"),c=lh(a,"query",!1,void 0,"gclsrc"),d=lh(a,"query",!1,void 0,"wbraid"),e=lh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||ih(f,"gclid",!1,void 0);c=c||ih(f,"gclsrc",!1,void 0);d=d||ih(f,"wbraid",!1,void 0)}return Pj(b,c,e,d)},Pj=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Ej.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(Ej))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Rj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Tj=function(a){var b=Qj();Ij(function(){Sj(b,a)})};
function Sj(a,b,c,d){function e(p,q){var r=Uj(p,f);r&&(Di(r,q,g),h=!0)}b=b||{};d=d||[];var f=Oj(b.prefix);c=c||ib();var g=Li(b,c,!0);g.Ea="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&(!0===b.zi?e("aw",m("~"+a.aw[0])):e("aw",m(a.aw[0])));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==Cj.enable_gbraid_cookie_write?0:Cj.enable_gbraid_cookie_write)&&!h&&
a.gb&&e("gb",m(a.gb[0]))}
var Wj=function(a,b){var c=tj(!0);Ij(function(){for(var d=Oj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Gj[f]){var g=Uj(f,d),h=c[g];if(h){var l=Math.min(Vj(h),ib()),m;b:{var p=l,q=g;if(ri(K))for(var r=ui(q,K.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(Vj(r[u])>p){m=!0;break b}m=!1}if(!m){var t=Li(b,l,!0);t.Ea="ad_storage";Di(g,h,t)}}}}Sj(Pj(c.gclid,c.gclsrc),b)})},Uj=function(a,b){var c=Gj[a];if(void 0!==c)return b+c},Vj=function(a){return 0!==Xj(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Lj(a){var b=Xj(a.split("."));return 0===b.length?null:{version:b[0],oa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Xj(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Fj.test(a[2])?[]:a}
var Yj=function(a,b,c,d,e){if(Sa(b)&&ri(K)){var f=Oj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Uj(a[l],f);if(m){var p=ui(m,K.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};Ij(function(){yj(g,b,c,d)})}},Nj=function(a){return a.filter(function(b){return Fj.test(b.oa)})},Zj=function(a,b){if(ri(K)){for(var c=Oj(b.prefix),d={},e=0;e<a.length;e++)Gj[a[e]]&&(d[a[e]]=Gj[a[e]]);Ij(function(){Za(d,function(f,g){var h=ui(c+g,K.cookie,void 0,"ad_storage");h.sort(function(u,
t){return Vj(t)-Vj(u)});if(h.length){var l=h[0],m=Vj(l),p=0!==Xj(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==Xj(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];Sj(q,b,m,p)}})})}};function ak(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var bk=function(a){function b(e,f,g){g&&(e[f]=g)}if(Hg()){var c=Qj();if(ak(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);zj(function(){return d},3);zj(function(){var e={};return e._up="1",e},1)}}};function ck(a,b){var c=Oj(b),d=Uj(a,c);if(!d)return 0;for(var e=Jj(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function dk(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var ek=/^\d+\.fls\.doubleclick\.net$/,fk=!1;fk=!0;function gk(a,b){Gg(J.C)?Qg(J.C)?a():Lg(a,J.C):b?Cf(42):Tg(function(){gk(a,!0)},[J.C])}function hk(a){var b=nh(n.location.href),c=lh(b,"host",!1);if(c&&c.match(ek)){var d=lh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}function ik(a){return Qj()[a]||[]}
function jk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=hk("gcl"+a);if(d)return d.split(".")}var e=Oj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Qg(J.C)&&c,g=ik(a);if(0<g.length)return f?["0"]:g}var h=Uj(a,e);return h?Kj(h):[]}function kk(a){var b=[];Za(a,function(c,d){d=Nj(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].oa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var lk=function(a){var b=hk("gac");return b?!Qg(J.C)&&a?"0":decodeURIComponent(b):kk(Hj()?Ui():{})},mk=function(a){var b=hk("gacgb");return b?!Qg(J.C)&&a?"0":decodeURIComponent(b):kk(Hj()?Ui("_gac_gb",!0):{})},ok=function(a,b){if(fk)nk(a,b,"dc");else{var c=ik("dc");gk(function(){Si(b);var d=Ni[Oi(b.prefix)],e=!1;if(d&&0<c.length){var f=N.joined_au=N.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;mg(l);e=f[g]=!0}}null==
a&&(a=e);a&&d&&Qi(b)})}},nk=function(a,b,c){var d=Qj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Rj(h,c)||e.push({oa:f,Hf:h});!g||c&&"dc"!==c||e.push({oa:g,Hf:"ds"});gk(function(){Si(b);var l=Ni[Oi(b.prefix)],m=!1;if(l&&0<e.length)for(var p=N.joined_auid=N.joined_auid||{},q=0;q<e.length;q++){var r=e[q],u=r.oa,t=r.Hf,v=(b.prefix||"_gcl")+"."+t+"."+u;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+u+"&auid="+l+"&gclsrc="+t;mg(w);m=p[v]=!0}}null==a&&(a=
m);a&&l&&Qi(b)})},pk=function(a){var b;if(hk("gclaw")||hk("gac")||0<ik("aw").length)b=!1;else{var c;if(0<ik("gb").length)c=!0;else{var d=Math.max(ck("aw",a),dk(Hj()?Ui():{}));c=Math.max(ck("gb",a),dk(Hj()?Ui("_gac_gb",!0):{}))>d}b=c}return b};var qk=/[A-Z]+/,rk=/\s/,sk=function(a){if(k(a)&&(a=hb(a),!rk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(qk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},uk=function(a){for(var b={},c=0;c<a.length;++c){var d=sk(a[c]);d&&(b[d.id]=d)}tk(b);var e=[];Za(b,function(f,g){e.push(g)});return e};
function tk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var vk=function(){var a=!1;return a};var xk=function(a,b,c,d){return(2===wk()||d||"http:"!=n.location.protocol?a:b)+c},wk=function(){var a=dg(),b;if(1===a)a:{var c=Ph;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Lk=function(a){return Qg(J.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=oh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},Mk=function(){var a;if(!(a=Qh)){var b;if(!0===n._gtmdgs)b=!0;else{var c=Xf&&Xf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=ab("1");return ni(1,100)<d?ni(2,2):-1},Nk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Ok=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Pk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Qk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Rk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sk=function(){var a=!1;return a},Uk=function(a){var b=bi("gtm.allowlist")||bi("gtm.whitelist");b&&Cf(9);Sk()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&rb(gb(b),Pk),d=bi("gtm.blocklist")||
bi("gtm.blacklist");d||(d=bi("tagTypeBlacklist"))&&Cf(3);d?Cf(8):d=[];Tk()&&(d=gb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ta(gb(d),"google")&&Cf(2);var e=d&&rb(gb(d),Qk),f={};return function(g){var h=g&&g[td.Ta];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Vh[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Ta(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Ta(c,l[q])){Cf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var u=0<=Ta(e,h);if(u)r=u;else{var t=Ya(e,l||[]);t&&Cf(10);r=t}}var v=!m||r;v||!(0<=Ta(l,"sandboxedScripts"))||c&&-1!==Ta(c,"sandboxedScripts")||(v=Ya(e,Rk));return f[h]=v}},Tk=function(){return Ok.test(n.location&&n.location.hostname)};var Vk={active:!0,isAllowed:function(){return!0}},Wk=function(a){var b=N.zones;return b?b.checkState(qe.F,a):Vk},Xk=function(a){var b=N.zones;!b&&a&&(b=N.zones=a());return b};var Yk=function(){},Zk=function(){};var $k=!1,al=0,bl=[];function cl(a){if(!$k){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){$k=!0;for(var e=0;e<bl.length;e++)M(bl[e])}bl.push=function(){for(var f=0;f<arguments.length;f++)M(arguments[f]);return 0}}}function dl(){if(!$k&&140>al){al++;try{K.documentElement.doScroll("left"),cl()}catch(a){n.setTimeout(dl,50)}}}var el=function(a){$k?a():bl.push(a)};var gl=function(a,b){this.g=!1;this.D=[];this.K={tags:[]};this.L=!1;this.o=this.s=0;fl(this,a,b)},hl=function(a,b,c,d){if(Mh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Nb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.K.tags.push(e)-1},il=function(a,b,c,d){var e=a.K.tags[b];e&&(e.status=c,e.executionTime=d)},jl=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},fl=function(a,b,c){Qa(b)&&a.Nb(b);c&&n.setTimeout(function(){return jl(a)},Number(c))};
gl.prototype.Nb=function(a){var b=this,c=kb(function(){return M(function(){a(qe.F,b.K)})});this.g?c():this.D.push(c)};var kl=function(a){a.s++;return kb(function(){a.o++;a.L&&a.o>=a.s&&jl(a)})};var ll=function(){function a(d){return!Ra(d)||0>d?0:d}if(!N._li&&n.performance&&n.performance.timing){var b=n.performance.timing.navigationStart,c=Ra(ci.get("gtm.start"))?ci.get("gtm.start"):0;N._li={cst:a(c-b),cbt:a(Sh-b)}}};var pl={},ql=function(){return n.GoogleAnalyticsObject&&n[n.GoogleAnalyticsObject]},rl=!1;
var sl=function(a){n.GoogleAnalyticsObject||(n.GoogleAnalyticsObject=a||"ga");var b=n.GoogleAnalyticsObject;if(n[b])n.hasOwnProperty(b)||Cf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);n[b]=c}ll();return n[b]},tl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ql();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},ul=function(a){if(!Hg())return;var b=ql();b(a+"require","linker");b(a+
"linker:passthrough",!0);};
var wl=function(a){},vl=function(){return n.GoogleAnalyticsObject||"ga"},xl=function(a,b){return function(){var c=ql(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Cl=function(){return"&tc="+Td.filter(function(a){return a}).length},Fl=function(){2022<=Dl().length&&El()},Hl=function(){Gl||(Gl=n.setTimeout(El,500))},El=function(){Gl&&(n.clearTimeout(Gl),Gl=void 0);void 0===Il||Jl[Il]&&!Kl&&!Ll||(Ml[Il]||Nl.Eh()||0>=Ol--?(Cf(1),Ml[Il]=!0):(Nl.Wh(),fg(Dl()),Jl[Il]=!0,Pl=Ql=Rl=Ll=Kl=""))},Dl=function(){var a=Il;if(void 0===a)return"";var b=Oa("GTM"),c=Oa("TAGGING");return[Sl,Jl[a]?"":"&es=1",Tl[a],b?"&u="+b:"",c?"&ut="+c:"",Cl(),Kl,Ll,Rl?Rl:"",Ql,Pl,"&z=0"].join("")},
Vl=function(){Sl=Ul()},Ul=function(){return[Th,"&v=3&t=t","&pid="+Wa(),"&rv="+qe.Dc].join("")},Wl="0.005000">Math.random(),Sl=Ul(),Jl={},Kl="",Ll="",Pl="",Ql="",Rl="",Il=void 0,Tl={},Ml={},Gl=void 0,Nl=function(a,b){var c=0,d=0;return{Eh:function(){if(c<a)return!1;ib()-d>=b&&(c=0);return c>=a},Wh:function(){ib()-d>=b&&(c=0);c++;d=ib()}}}(2,1E3),Ol=1E3,Xl=function(a,b,c){if(Wl&&!Ml[a]&&b){a!==Il&&(El(),Il=a);var d,e=String(b[td.Ta]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Kl=Kl?Kl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Vd[g]?"1":"2")+d;Pl=Pl?Pl+"."+h:"&ti="+h;Hl();Fl()}},Yl=function(a,b,c){if(Wl&&!Ml[a]){a!==Il&&(El(),Il=a);var d=c+b;Ll=Ll?Ll+"."+d:"&epr="+d;Hl();Fl()}},Zl=function(a,b,c){};
var $l=function(){return!1},am=function(){var a={};return function(b,c,d){}};function bm(a,b,c,d){var e=Td[a],f=cm(a,b,c,d);if(!f)return null;var g=ae(e[td.rf],c,[]);if(g&&g.length){var h=g[0];f=bm(h.index,{onSuccess:f,onFailure:1===h.Ef?b.terminate:f,terminate:b.terminate},c,d)}return f}
function cm(a,b,c,d){function e(){if(f[td.Tg])h();else{var w=be(f,c,[]);var y=hl(c.Na,String(f[td.Ta]),Number(f[td.sf]),w[td.Ug]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=ib()-E;Xl(c.id,Td[a],"5");il(c.Na,y,"success",
D);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=ib()-E;Xl(c.id,Td[a],"6");il(c.Na,y,"failure",D);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Xl(c.id,f,"1");var C=function(){var D=ib()-E;Xl(c.id,f,"7");il(c.Na,y,"exception",D);B||(B=!0,h())};var E=ib();try{$d(w,c)}catch(D){C(D)}}}var f=Td[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Ud(f))return null;var m=ae(f[td.tf],c,[]);if(m&&m.length){var p=m[0],q=bm(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.Ef?l:q}if(f[td.kf]||f[td.Wg]){var r=f[td.kf]?Ud:
c.di,u=g,t=h;if(!r[a]){e=kb(e);var v=dm(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](u,t)}}return e}function dm(a,b,c){var d=[],e=[];b[a]=em(d,e,c);return{onSuccess:function(){b[a]=fm;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=gm;for(var f=0;f<e.length;f++)e[f]()}}}function em(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function fm(a){a()}function gm(a,b){b()};var jm=function(a,b){for(var c=[],d=0;d<Td.length;d++)if(a[d]){var e=Td[d];var f=kl(b.Na);try{var g=bm(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Vd[p];l.call(h,{Wf:m,Pf:q?q.priorityOverride||0:0,Lc:g})}else hm(d,b),f()}catch(t){f()}}var r=b.Na;r.L=!0;r.o>=r.s&&jl(r);c.sort(im);for(var u=0;u<c.length;u++)c[u].Lc();
return 0<c.length};function im(a,b){var c,d=b.Pf,e=a.Pf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Wf,h=b.Wf;f=g>h?1:g<h?-1:0}return f}function hm(a,b){if(!Wl)return;var c=function(d){var e=b.Ud(Td[d])?"3":"4",f=ae(Td[d][td.rf],b,[]);f&&f.length&&c(f[0].index);Xl(b.id,Td[d],e);var g=ae(Td[d][td.tf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var km=!1,qm=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(km)return!1;km=!0}var d=Wk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=Wk(Number.MAX_SAFE_INTEGER)}Wl&&!Ml[b]&&Il!==b&&(El(),Il=b,Pl=Kl="",Tl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Hl());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Ud:Uk(d.isAllowed),di:[],Mf:function(){Cf(6)},xf:lm(b),Na:new gl(f,
g)};nm(b,h.Na);var l=le(h);e&&(l=om(l));var m=jm(l,h);"gtm.js"!==c&&"gtm.sync"!==c||wl(qe.F);switch(c){case "gtm.init":m&&Cf(20)}return pm(l,m)};function lm(a){return function(b){Wl&&(Sb(b)||Zl(a,"input",b))}}
function nm(a,b){hi(a,"event",1);hi(a,"ecommerce",1);hi(a,"gtm");hi(a,"eventModel");}function mm(){var a={};a.event=gi("event",1);a.ecommerce=gi("ecommerce",1);a.gtm=gi("gtm");a.eventModel=gi("eventModel");return a}function om(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Lh[String(Td[c][td.Ta])]&&(b[c]=!0);return b}
function pm(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Td[c]&&!Mh[String(Td[c][td.Ta])])return!0;return!1}function rm(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return nh(""+c+b).href}}function sm(a,b){return tm()?rm(a,b):void 0}function tm(){var a=!1;return a};var um=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},vm=function(a){var b=new um;b.eventModel=a;return b},wm=function(a,b){a.targetConfig=b;return a},xm=function(a,b){a.containerConfig=b;return a},ym=function(a,b){a.remoteConfig=b;return a},zm=function(a,b){a.globalConfig=
b;return a},Am=function(a,b){a.onSuccess=b;return a},Bm=function(a,b){a.setContainerTypeLoaded=b;return a},Cm=function(a,b){a.getContainerTypeLoaded=b;return a},Dm=function(a,b){a.onFailure=b;return a};um.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Em=function(a){function b(e){Za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Za(c,function(e){d.push(e)});return d};var Fm;if(3===qe.Dc.length)Fm="g";else{var Gm="G";Fm=Gm}
var Hm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Fm,OPT:"o"},Im=function(a){var b=qe.F.split("-"),c=b[0].toUpperCase(),d=Hm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===qe.Dc.length){var g="w";f="2"+g}else f="";return f+d+qe.Dc+e};var Jm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Km=function(){return Of("iPhone")&&!Of("iPod")&&!Of("iPad")};Of("Opera");Of("Trident")||Of("MSIE");Of("Edge");!Of("Gecko")||-1!=Lf.toLowerCase().indexOf("webkit")&&!Of("Edge")||Of("Trident")||Of("MSIE")||Of("Edge");-1!=Lf.toLowerCase().indexOf("webkit")&&!Of("Edge")&&Of("Mobile");Of("Macintosh");Of("Windows");Of("Linux")||Of("CrOS");var Lm=na.navigator||null;Lm&&(Lm.appVersion||"").indexOf("X11");Of("Android");Km();Of("iPad");Of("iPod");Km()||Of("iPad")||Of("iPod");Lf.toLowerCase().indexOf("kaios");var Mm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var Nm=function(){};var Om=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Pm=function(a,b){this.o=a;this.g=null;this.D={};this.L=0;this.K=void 0===b?500:b;this.s=null};ma(Pm,Nm);
var Rm=function(a){return"function"===typeof a.o.__tcfapi||null!=Qm(a)};
Pm.prototype.addEventListener=function(a){var b={},c=Ef(function(){return a(b)}),d=0;-1!==this.K&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.K));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Om(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Sm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Pm.prototype.removeEventListener=function(a){a&&a.listenerId&&Sm(this,"removeEventListener",null,a.listenerId)};
var Um=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Tm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||tg(pg)&&"CH"===a.publisherCC)?!0:m&&Tm(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Tm(a.purpose.legitimateInterests,b)&&Tm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Tm=function(a,b){return!(!a||!a[b])},Sm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Qm(a)){Vm(a);var f=++a.L;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Qm=function(a){if(a.g)return a.g;a.g=Mm(a.o,"__tcfapiLocator");return a.g},
Vm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},Jm(a.o,a.s))};var Wm=!0;Wm=!1;var Xm={1:0,3:0,4:0,7:3,9:3,10:3};function Ym(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Zm=Ym("",550),$m=Ym("",500);function an(){var a=N.tcf||{};return N.tcf=a}
var bn=function(a,b){this.s=a;this.g=b;this.o=ib();},cn=function(a){},dn=function(a){},kn=function(){var a=an(),b=new Pm(n,Wm?3E3:-1),c=new bn(b,a);if((en()?!0===n.gtag_enable_tcf_support:!1!==n.gtag_enable_tcf_support)&&!a.active&&("function"===typeof n.__tcfapi||Rm(b))){a.active=!0;a.$b={};fn();var d=null;Wm?d=n.setTimeout(function(){gn(a);hn(a);d=null},$m):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)gn(a),hn(a),cn(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=jn(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Xm)if(Xm.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Om(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:Um(m,"1",0):!1;g["1"]=l}else g[h]=Um(e,h,Xm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.$b=f,hn(a),cn(c))}}),dn(c)}catch(e){d&&(clearTimeout(d),d=null),gn(a),hn(a)}}};function gn(a){a.type="e";a.tcString="tcunavailable";Wm&&(a.$b=jn())}function fn(){var a={};Og((a.ad_storage="denied",a.wait_for_update=Zm,a))}
var en=function(){var a=!1;a=!0;return a};function jn(){var a={},b;for(b in Xm)Xm.hasOwnProperty(b)&&(a[b]=!0);return a}function hn(a){var b={};Pg((b.ad_storage=a.$b["1"]?"granted":"denied",b))}
var ln=function(){var a=an();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},mn=function(){var a=an();return a.active?a.tcString||"":""},nn=function(){var a=an();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},on=function(a){if(!Xm.hasOwnProperty(String(a)))return!0;var b=an();return b.active&&b.$b?!!b.$b[String(a)]:!0};var pn=!1;function qn(a){var b=String(n.location).split(/[?#]/)[0],c=qe.dg||n._CONSENT_MODE_SALT;return a?c?String(oi(b+a+c)):"0":""}
function rn(a){function b(t){var v;N.reported_gclid||(N.reported_gclid={});v=N.reported_gclid;var w;w=pn&&g&&(!Hg()||Qg(J.C))?l+"."+(f.prefix||"_gcl")+(t?"gcu":"gcs"):l+(t?"gcu":"gcs");if(!v[w]){v[w]=!0;var z=[],x={},y=function(Q,U){U&&(z.push(Q+"="+encodeURIComponent(U)),x[Q]=!0)},B="https://www.google.com";if(Hg()){var C=Qg(J.C);y("gcs",Rg());t&&y("gcu","1");Ig()&&y("gcd","G1"+Mg(Fg));N.dedupe_gclid||
(N.dedupe_gclid=""+Gi());y("rnd",N.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Qg(J.C)){var E=Kj("_gcl_aw");y("gclaw",E.join("."))}y("url",String(n.location).split(/[?#]/)[0]);y("dclid",sn(d,p));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
y("gdpr_consent",mn()),y("gdpr",nn());"1"===tj(!1)._up&&y("gtm_up","1");y("gclid",sn(d,l));y("gclsrc",m);if(!(x.gclid||x.dclid||x.gclaw)&&(y("gbraid",sn(d,q)),!x.gbraid&&Hg()&&Qg(J.C))){var I=Kj("_gcl_gb");y("gclgb",I.join("."))}y("gtm",Im(!e));pn&&g&&Qg(J.C)&&(Si(f||{}),y("auid",Ni[Oi(f.prefix)]||""));
a.Df&&y("did",a.Df);var P=B+"/pagead/landing?"+z.join("&");mg(P)}}var c=!!a.Id,d=!!a.qa,e=a.U,f=void 0===a.Ic?{}:a.Ic,g=void 0===a.Pc?!0:a.Pc,h=Qj(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),u=Hg();if(r||u)u?Tg(function(){b();Qg(J.C)||Lg(function(t){return b(!0,t.yf)},J.C)},[J.C]):b()}function sn(a,b){var c=a&&!Qg(J.C);return b&&c?"0":b}
var Dn=function(a){return!(void 0===a||null===a||0===(a+"").length)},En=function(a,b){var c;if(2===b.da)return a("ord",Wa(1E11,1E13)),!0;if(3===b.da)return a("ord","1"),a("num",Wa(1E11,1E13)),!0;if(4===b.da)return Dn(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.da)c="1";else if(6===b.da)c=b.he;else return!1;Dn(c)&&a("qty",c);Dn(b.Jc)&&a("cost",b.Jc);Dn(b.transactionId)&&a("ord",b.transactionId);return!0},Hn=function(a,b,c){function d(D,I,P){r.hasOwnProperty(D)||(I=String(I),q.push(";"+D+"="+(P?
I:Fn(I))))}function e(D,I){I&&d(D,I)}var f=a.Nd,g=a.ke,h=a.protocol,l=a.Rd;h+=g?"//"+f+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var m=";",p=!1;p=!0;Qg(J.C)||l||!a.qa&&!p||(h="https://ade.googlesyndication.com/ddm/activity",m="/",g=!1);var q=[m,"src="+Fn(f),";type="+Fn(a.Qd),";cat="+Fn(a.Mb)],r=a.oh||{};Za(r,function(D,I){q.push(";"+Fn(D)+"="+Fn(I+""))});
if(En(d,a)){Dn(a.Zc)&&d("u",a.Zc);Dn(a.Yc)&&d("tran",a.Yc);d("gtm",Im());Hg()&&!l&&(d("gcs",Rg()),c&&d("gcu","1"));e("gdpr_consent",mn()),e("gdpr",nn());"1"===tj(!1)._up&&d("gtm_up","1");!1===a.dh&&d("npa","1");if(a.Jd){var u=void 0===a.qa?!0:!!a.qa,t=jk("dc",a.Oa,u),v=!1;t&&t.length&&(d("gcldc",t.join(".")),v=!0);if(Gn&&!v&&pk(a.Oa)){var w=jk("gb",a.Oa,u);w&&w.length&&d("gclgb",w.join("."));var z=mk(u);z&&d("gacgb",
z)}else{var x=jk("aw",a.Oa,u);x&&x.length&&d("gclaw",x.join("."));var y=lk(u);y&&d("gac",y)}Si({prefix:a.Oa,ob:a.mh,domain:a.lh,flags:a.ui});var B=Ni[Oi(a.Oa)];B&&d("auiddc",B)}Dn(a.be)&&d("prd",a.be,!0);Za(a.pe,function(D,I){d(D,I)});q.push(b||"");if(Dn(a.Qc)){var C=a.Qc||"";Qg(J.C)||l||!a.qa||(C=oh(C));d("~oref",C)}var E=h+q.join("")+"?";g?eg(E,a.onSuccess):fg(E,a.onSuccess,a.onFailure)}else M(a.onFailure)},Gn=!1;
Gn=!0;var Fn=encodeURIComponent,In=function(a,b){!Hg()||a.Rd?Hn(a,b):Tg(function(){Hn(a,b);Qg(J.C)||Lg(function(){Hn(a,b,!0)},J.C)},[J.C])};var go=function(){var a=!0;on(7)&&on(9)&&on(10)||(a=!1);var b=!0;b=!1;b&&!fo()&&(a=!1);return a},fo=function(){var a=!0;on(3)&&on(4)||(a=!1);return a};var Co=!1;function Do(){var a=N;return a.gcq=a.gcq||new Eo}
var Fo=function(a,b,c){Do().register(a,b,c)},Go=function(a,b,c,d){Do().push("event",[b,a],c,d)},Ho=function(a,b){Do().push("config",[a],b)},Io=function(a,b,c,d){Do().push("get",[a,b],c,d)},Jo=function(a){return Do().getRemoteConfig(a)},Ko={},Lo=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},Mo=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},Eo=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
No=function(a,b){var c=sk(b);return a.D[c.containerId]=a.D[c.containerId]||new Lo},Oo=function(a,b,c){if(b){var d=sk(b);if(d&&1===No(a,b).status){No(a,b).status=2;var e={};Wl&&(e.timeoutId=n.setTimeout(function(){Cf(38);Hl()},3E3));a.push("require",[e],d.containerId);Ko[d.containerId]=ib();if(vk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=n.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=sm(c,g)||h;cg(l)}}}},Po=function(a,b,c,d){if(d.U){var e=No(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),p=G(a.o),q=bi("gtm.uniqueEventId"),r=sk(d.U).prefix,u=Cm(Bm(Dm(Am(zm(ym(xm(wm(vm(g),h),l),m),p),function(){
Yl(q,r,"2");}),function(){Yl(q,r,"3");}),function(t,v){a.s[t]=v}),function(t){return a.s[t]});try{Yl(q,r,"1");f(d.U,b,d.s,u)}catch(t){Yl(q,r,"4");}}}};aa=Eo.prototype;
aa.register=function(a,b,c){var d=No(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=sk(a),f=Ko[e.containerId];if(void 0!==f){var g=N[e.containerId].bootstrap,h=e.prefix.toUpperCase();N[e.containerId]._spx&&(h=h.toLowerCase());var l=bi("gtm.uniqueEventId"),m=h,p=ib()-g;if(Wl&&!Ml[l]){l!==Il&&(El(),Il=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(p);Ql=Ql?Ql+","+q:"&cl="+q}delete Ko[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(ib()/1E3);Oo(this,c,b[0][J.Ka]||this.o[J.Ka]);Co&&c&&No(this,c).g&&(d=!1);this.g.push(new Mo(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(ib()/1E3);0<this.g.length?this.g.splice(1,0,new Mo(a,d,c,b,!1)):this.g.push(new Mo(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.o)Co?!f.U||No(this,f.U).g?(f.o=!1,this.g.push(f)):c.push(f):(f.o=!1,this.g.push(f));else switch(f.type){case "require":if(3!==No(this,f.U).status&&!a){Co&&this.g.push.apply(this.g,c);return}Wl&&n.clearTimeout(f.g[0].timeoutId);break;case "set":Za(f.g[0],function(r,u){G(ub(r,u),b.o)});break;case "config":e.ra={};Za(f.g[0],function(r){return function(u,t){G(ub(u,t),r.ra)}}(e));var g=!!e.ra[J.yc];delete e.ra[J.yc];
var h=No(this,f.U),l=sk(f.U),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.U]={});h.g&&g||Po(this,J.aa,e.ra,f);h.g=!0;delete e.ra[J.Gb];m?G(e.ra,h.containerConfig):G(e.ra,h.targetConfig[f.U]);Co&&(d=!0);break;case "event":e.hc={};Za(f.g[0],function(r){return function(u,t){G(ub(u,t),r.hc)}}(e));Po(this,f.g[1],e.hc,f);break;case "get":var p={},q=(p[J.Ia]=f.g[0],p[J.Ha]=f.g[1],p);Po(this,J.wa,q,f)}this.g.shift();e={ra:e.ra,hc:e.hc}}Co&&(this.g.push.apply(this.g,c),d&&this.flush())};
aa.getRemoteConfig=function(a){return No(this,a).remoteConfig};function Qo(a,b){var c=this;};function Ro(a,b,c){};function So(a,b,c,d){};function To(a){};var Uo=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":ng(a,"className"),"gtm.elementId":a["for"]||ig(a,"id")||"","gtm.elementTarget":a.formTarget||ng(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||ng(a,"href")||a.src||a.code||a.codebase||"";return d},Vo=function(a){N.hasOwnProperty("autoEventsSettings")||(N.autoEventsSettings={});var b=N.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});
return b[a]},Wo=function(a,b,c){Vo(a)[b]=c},Xo=function(a,b,c,d){var e=Vo(a),f=jb(e,b,d);e[b]=c(f)},Yo=function(a,b,c){var d=Vo(a);return jb(d,b,c)};var Zo={},$o=[];
var gp=function(a,b){};

function jp(a,b){};var kp=/^\s*$/,lp,mp=!1;
function xp(a,b){}function yp(a,b,c){};var zp=!!n.MutationObserver,Ap=void 0,Bp=function(a){if(!Ap){var b=function(){var c=K.body;if(c)if(zp)(new MutationObserver(function(){for(var e=0;e<Ap.length;e++)M(Ap[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gg(c,"DOMNodeInserted",function(){d||(d=!0,M(function(){d=!1;for(var e=0;e<Ap.length;e++)M(Ap[e])}))})}};Ap=[];K.body?b():M(b)}Ap.push(a)};var Dp=["www.youtube.com","www.youtube-nocookie.com"],Ep,Fp=!1,Gp=0;
function Qp(a,b){}function Rp(a,b){return!0};function Sp(a,b,c){};function Tp(a,b){var c;H(F(this),["path:!string"],[a]);mf(this,"access_globals","execute",a);var d=a.split("."),e=sb(d,[n,K]);if(!e)return;var f=e[d.pop()];if("function"!==Lb(f))return;var g=!1;for(var h=[],l=1;l<arguments.length;l++)h.push(Qb(arguments[l],this.g,g));var m=(0,this.g.L)(f,e,h);c=Pb(m,this.g);void 0===c&&void 0!==
m&&Cf(45);return c};function Up(a){};function Vp(a){};var Wp=!1,Xp=[];function Yp(){if(!Wp){Wp=!0;for(var a=0;a<Xp.length;a++)M(Xp[a])}}var Zp=function(a){Wp?M(a):Xp.push(a)};function $p(a){H(F(this),["listener:!Fn"],arguments);mf(this,"process_dom_events","window","load");Zp(Qb(a))};function aq(a){var b;return b};function bq(a,b){var c;var d=!1;var e=Pb(c,this.g,d);void 0===e&&void 0!==c&&Cf(45);return e};function cq(a){var b;H(F(this),["path:!string"],arguments);mf(this,"access_globals","read",a);var c=a.split("."),d=sb(c,[n,K]);if(!d)return;var e=d[c[c.length-1]],f=!1;b=Pb(e,this.g,f);void 0===b&&void 0!==e&&Cf(45);return b};function dq(a,b){var c=null,d=!1;H(F(this),["functionPath:!string","arrayPath:!string"],arguments);mf(this,"access_globals","readwrite",a);mf(this,"access_globals","readwrite",b);var e=[n,K],f=a.split("."),g=sb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Qa(l))return null;
if(l)return Pb(l,this.g,d);var m;l=function(){if(!Qa(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),q=sb(p,e),r=p[p.length-1];if(void 0===q)throw Error("Path "+p+" does not exist.");m=q[r];void 0===m&&(m=[],q[r]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};return Pb(c,this.g,d)};function eq(a){var b;H(F(this),["path:!string"],arguments);mf(this,"access_globals","readwrite",a);var c=a.split("."),d=sb(c,[n,K]),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Qa(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};var g=!1;return Pb(b,this.g,g)};var fq=function(a){var b;return b};function gq(a,b){b=void 0===b?!0:b;var c;return c};function hq(a){var b=null;return b};function iq(a,b){var c;return c};function jq(a,b){var c;return c};function kq(a){var b="";return b};function lq(a,b){var c;return c};function mq(a){var b="";return b};function nq(){mf(this,"get_user_agent");return n.navigator.userAgent};function oq(a,b){};var pq={};function qq(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],cg(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)M(g[h]);g.push=function(l){M(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)M(g[h]);e[f]=null},b)):cg(a,c,d,b)}
function rq(a,b,c,d){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);mf(this,"inject_script",a);var e=this.g;qq(a,void 0,function(){b&&b.o(e)},function(){c&&c.o(e)},pq,d);}var sq=Object.freeze({dl:1,id:1}),tq={};
function uq(a,b,c,d){};function vq(a){var b=!0;return b};var wq=function(){return!1},xq={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function yq(){try{mf(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Qb(a[b],this.g);console.log.apply(console,a);};function zq(a,b){var c;return c};function Aq(a){var b=void 0;return b};function Bq(a,b){var c=!1;return c};function Cq(){var a="";return a};function Dq(){var a="";return a};function Eq(){};function Fq(a,b,c,d){d=void 0===d?!1:d;};function Gq(a,b,c){};function Hq(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Iq(a){H(F(this),["consentSettings:!DustMap"],arguments);for(var b=a.Jb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==J.bd&&mf(this,"access_consent",e,"write")}Og(Qb(a))};function Jq(a,b,c){H(F(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);mf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=sb(e,[n,K]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Qb(b,this.g,d),!0;return!1};function Kq(a,b,c){}
;var Lq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Mq(a,b,c,d){var e=this;};function Nq(a,b,c){}
;var Oq={},Pq={};Oq.getItem=function(a){var b=null;return b};
Oq.setItem=function(a,b){};
Oq.removeItem=function(a){};Oq.clear=function(){};var Qq=function(a){var b;return b};function Rq(a){H(F(this),["consentSettings:!DustMap"],arguments);var b=Qb(a),c;for(c in b)b.hasOwnProperty(c)&&mf(this,"access_consent",c,"write");Pg(b)};var qd=function(){var a=new xf;vk()?(a.add("injectHiddenIframe",Pa),a.add("injectScript",Pa)):(a.add("injectHiddenIframe",oq),a.add("injectScript",rq));var b=Gq;a.add("Math",ef());a.add("TestHelper",Af());a.add("addEventCallback",To);a.add("aliasInWindow",Rp);a.add("assertApi",af);a.add("assertThat",bf);a.add("callInWindow",
Tp);a.add("callLater",Up);a.add("copyFromDataLayer",bq);a.add("copyFromWindow",cq);a.add("createArgumentsQueue",dq);a.add("createQueue",eq);a.add("decodeUri",ff);a.add("decodeUriComponent",gf);a.add("encodeUri",hf);a.add("encodeUriComponent",jf);a.add("fail",kf);a.add("fromBase64",fq,!("atob"in n));a.add("generateRandom",lf);a.add("getContainerVersion",nf);a.add("getCookieValues",gq);a.add("getQueryParameters",iq);a.add("getReferrerQueryParameters",jq);a.add("getReferrerUrl",kq);a.add("getTimestamp",
of);a.add("getTimestampMillis",of);a.add("getType",pf);a.add("getUrl",mq);a.add("localStorage",xq,!wq());a.add("logToConsole",yq);a.add("makeInteger",rf);a.add("makeNumber",sf);a.add("makeString",tf);a.add("makeTableMap",uf);a.add("mock",wf);a.add("parseUrl",Aq);a.add("queryPermission",Bq);a.add("readCharacterSet",Cq);a.add("readTitle",Dq);a.add("sendPixel",b);a.add("setCookie",Hq);a.add("setInWindow",Jq);a.add("sha256",Mq);a.add("templateStorage",Oq);a.add("toBase64",Qq,!("btoa"in n));a.add("JSON",
qf(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;c&&a.add("setDefaultConsentState",Iq);
vk()?zf(a,"internal.injectScript",Pa):zf(a,"internal.injectScript",uq);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;
if(f=a.o.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.Tb();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.o.hasOwnProperty(d)?a.o[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var ld,ue;
function Sq(){var a=data.runtime||[],b=data.runtime_lines;ld=new jd;Tq();Pd=function(e,f,g){Uq(f);var h=new Db;Za(f,function(u,t){var v=Pb(t);void 0===v&&void 0!==t&&Cf(44);h.set(u,v)});ld.g.g.K=he();var l={gh:ve(e),eventId:void 0!==g?g.id:void 0,Nb:void 0!==g?function(u){return g.Na.Nb(u)}:void 0,Tb:function(){return e},log:function(){}};if($l()){var m=am(),
p=void 0,q=void 0;l.ia={Ob:{},mb:function(u,t,v){1===t&&(p=u);7===t&&(q=v);m(u,t,v)},Xd:vf()};l.log=function(u,t){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:u,source:q,message:v})}}}var r=md(l,[e,h]);ld.g.g.K=void 0;r instanceof xa&&"return"===r.g&&(r=r.o);return Qb(r)};rd();for(var c=0;c<a.length;c++){var d=a[c];if(!Sa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ee(d,b[c]);ld.Lc(d)}}
function Uq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Qa(b)&&(a.gtmOnSuccess=function(){M(b)});Qa(c)&&(a.gtmOnFailure=function(){M(c)})}function Tq(){var a=ld;N.SANDBOXED_JS_SEMAPHORE=N.SANDBOXED_JS_SEMAPHORE||0;sd(a,function(b,c,d){N.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{N.SANDBOXED_JS_SEMAPHORE--}})}function Vq(a){void 0!==a&&Za(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Vh[e]=Vh[e]||[];Vh[e].push(b)}})};var Wq="HA GF G UA AW DC".split(" "),Xq=!1,Yq={},Zq=!1;function $q(a,b){var c={event:a};b&&(c.eventModel=G(b),b[J.jd]&&(c.eventCallback=b[J.jd]),b[J.qc]&&(c.eventTimeout=b[J.qc]));return c}function ar(){return Xq}
var dr={config:function(a){var b;return b},consent:function(a){function b(){ar()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){Cf(39);var c=Wh(),d=a[1];"default"===d?(b(),Og(a[2])):"update"===d&&(b(),Pg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&k(b)){var c;if(2<a.length){if(!Nb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=$q(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return Zq=!0,ar(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=ue.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Nb(a[1])?b=G(a[1]):3==a.length&&k(a[1])&&(b={},Nb(a[2])||Sa(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},er={policy:!0};var fr=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},hr=function(a){var b=gr(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var yr=function(a){if(xr(a))return a;this.g=a};yr.prototype.zh=function(){return this.g};var xr=function(a){return!a||"object"!==Lb(a)||Nb(a)?!1:"getUntrustedUpdateValue"in a};yr.prototype.getUntrustedUpdateValue=yr.prototype.zh;var zr=[],Ar=!1,Br=!1,Cr=!1,Dr=function(a){return n["dataLayer"].push(a)},Er=function(a){var b=N["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Fr(a){var b=a._clear;Za(a,function(d,e){"_clear"!==d&&(b&&ei(d,void 0),ei(d,e))});Rh||(Rh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Wh(),a["gtm.uniqueEventId"]=c,ei("gtm.uniqueEventId",c));return qm(a)}function Gr(){var a=zr[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if($a(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Hr(){for(var a=!1;!Cr&&0<zr.length;){var b=!1;if(b&&!Br&&Gr()){var c={};zr.unshift((c.event=
"gtm.init",c));Br=!0}var d=!1;if(d&&!Ar&&Gr()){var e={};zr.unshift((e.event="gtm.init_consent",e));Ar=!0}Cr=!0;delete Zh.eventModel;ai();var f=zr.shift();if(null!=f){var g=xr(f);
if(g){var h=f;f=xr(h)?h.getUntrustedUpdateValue():void 0;fi()}try{if(Qa(f))try{f.call(ci)}catch(v){}else if(Sa(f)){var l=f;if(k(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=bi(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if($a(f)){a:{var u=f;if(u.length&&k(u[0])){var t=dr[u[0]];if(t&&(!g||!er[u[0]])){f=t(u);break a}}f=void 0}if(!f){Cr=!1;continue}}a=Fr(f)||a}}finally{g&&ai(!0)}}Cr=!1}
return!a}function Ir(){var a=Hr();try{fr(n["dataLayer"],qe.F)}catch(b){}return a}
var Kr=function(){var a=Zf("dataLayer",[]),b=Zf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};el(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Zp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<N.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new yr(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);zr.push.apply(zr,e);if(300<
this.length)for(Cf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Hr()&&h};var d=a.slice(0);zr.push.apply(zr,d);Jr()&&M(Ir)},Jr=function(){var a=!0;return a};var Lr={};Lr.zc=new String("undefined");
var Mr=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Lr.zc?b:a[d]);return c.join("")}};Mr.prototype.toString=function(){return this.g("undefined")};Mr.prototype.valueOf=Mr.prototype.toString;Lr.Zg=Mr;Lr.Bd={};Lr.nh=function(a){return new Mr(a)};var Nr={};Lr.Xh=function(a,b){var c=Wh();Nr[c]=[a,b];return c};Lr.Bf=function(a){var b=a?0:1;return function(c){var d=Nr[c];if(d&&"function"===typeof d[b])d[b]();Nr[c]=void 0}};Lr.Dh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Lr.Uh=function(a){if(a===Lr.zc)return a;var b=Wh();Lr.Bd[b]=a;return'google_tag_manager["'+qe.F+'"].macro('+b+")"};Lr.Oh=function(a,b,c){a instanceof Lr.Zg&&(a=a.g(Lr.Xh(b,c)),b=Pa);return{Ah:a,onSuccess:b}};var Or=["input","select","textarea"],Pr=["button","hidden","image","reset","submit"],Qr=function(a){var b=a.tagName.toLowerCase();return!Ua(Or,function(c){return c===b})||"input"===b&&Ua(Pr,function(c){return c===a.type.toLowerCase()})?!1:!0},Rr=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):lg(a,["form"],100)},Sr=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Qr(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var cs=n.clearTimeout,ds=n.setTimeout,O=function(a,b,c){if(vk()){b&&M(b)}else return cg(a,b,c)},es=function(){return new Date},fs=function(){return n.location.href},gs=function(a){return lh(nh(a),"fragment")},hs=function(a){return mh(nh(a))},is=function(a,b){return bi(a,b||2)},js=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Dr(a)):d=Dr(a);return d},ks=function(a,b){n[a]=b},R=function(a,b,c){b&&
(void 0===n[a]||c&&!n[a])&&(n[a]=b);return n[a]},ls=function(a,b,c){return ui(a,b,void 0===c?!0:!!c)},ms=function(a,b,c){return 0===Di(a,b,c)},ns=function(a,b){if(vk()){b&&M(b)}else eg(a,b)},os=function(a){return!!Yo(a,"init",!1)},ps=function(a){Wo(a,"init",!0)},qs=function(a){var b=Ph+"?id="+encodeURIComponent(a)+"&l=dataLayer";O(xk("https://","http://",b))},rs=function(a,b,c){Wl&&(Sb(a)||Zl(c,b,a))};
var ss=Lr.Oh;function Ps(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Qs=new Xa;function Rs(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Qs.get(e);f||(f=new RegExp(b,d),Qs.set(e,f));return f.test(a)}catch(g){return!1}}
function Ss(a,b){function c(g){var h=nh(g),l=lh(h,"protocol"),m=lh(h,"host",!0),p=lh(h,"port"),q=lh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Ts(a){return Us(a)?1:0}
function Us(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Sa(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(Ts(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return Ps(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ta(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return Rs(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ss(b,c)}return!1};var Vs=encodeURI,W=encodeURIComponent,Ws=fg;var Xs=function(a,b){if(!a)return!1;var c=lh(nh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Ys=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Du(){return n.gaGlobal=n.gaGlobal||{}}var Eu=function(){var a=Du();a.hid=a.hid||Wa();return a.hid},Fu=function(a,b){var c=Du();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var pv=window,qv=document,rv=function(a){var b=pv._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===pv["ga-disable-"+a])return!0;try{var c=pv.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=pi("AMP_TOKEN",String(qv.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return qv.getElementById("__gaOptOutExtension")?!0:!1};var sv={};function uv(a){delete a.eventModel[J.Gb];wv(a.eventModel)}var wv=function(a){Za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ya]||{};Za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var zv=function(a,b,c){Go(b,c,a)},Av=function(a,b,c){Go(b,c,a,!0)},Gv=function(a,b){};
function Bv(a,b){}var Y={h:{}};
Y.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Y.__gaawc=b;Y.__gaawc.i="gaawc";Y.__gaawc.m=!0;Y.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=Ys(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(J.ya)||b.vtp_userProperties){var e=d[J.ya]||{};G(Ys(b.vtp_userProperties,"name","value"),e);d[J.ya]=e}a(d,J.$e,function(f){return bb(f)});a(d,J.bf,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;Ho(d,c);M(b.vtp_gtmOnSuccess)})}();
Y.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var y=[],B=x.split(","),C=0;C<B.length;C++){var E=Number(B[C]);if(isNaN(E))return[];p.test(B[C])||y.push(E)}return y}function c(){var x=0,y=0;return function(){var B=$g(),C=B.height;x=Math.max(v.scrollLeft+B.width,x);y=Math.max(v.scrollTop+C,y);return{Kd:x,Ld:y}}}function d(){u=R("self");
t=u.document;v=t.scrollingElement||t.body&&t.body.parentNode;z=c()}function e(x,y,B,C){var E=l(y),D={},I;for(I in E){D.Ya=I;if(E.hasOwnProperty(D.Ya)){var P=Number(D.Ya);x<P||(js({event:"gtm.scrollDepth","gtm.scrollThreshold":P,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[D.Ya].join(",")}),Xo("sdl",y,function(Q){return function(U){delete U[Q.Ya];return U}}(D),{}))}D={Ya:D.Ya}}}function f(){var x=z(),y=x.Kd,B=x.Ld,C=y/v.scrollWidth*100,E=B/v.scrollHeight*100;e(y,"horiz.pix",
q.Bc,r.cf);e(C,"horiz.pct",q.Ac,r.cf);e(B,"vert.pix",q.Bc,r.uf);e(E,"vert.pct",q.Ac,r.uf);Wo("sdl","pending",!1)}function g(){var x=250,y=!1;t.scrollingElement&&t.documentElement&&u.addEventListener&&(x=50,y=!0);var B=0,C=!1,E=function(){C?B=ds(E,x):(B=0,f(),os("sdl")&&!a()&&(hg(u,"scroll",D),hg(u,"resize",D),Wo("sdl","init",!1)));C=!1},D=function(){y&&z();B?C=!0:(B=ds(E,x),Wo("sdl","pending",!0))};return D}function h(x,y,B){if(y){var C=b(String(x));Xo("sdl",B,function(E){for(var D=0;D<C.length;D++){var I=
String(C[D]);E.hasOwnProperty(I)||(E[I]=[]);E[I].push(y)}return E},{})}}function l(x){return Yo("sdl",x,{})}function m(x){M(x.vtp_gtmOnSuccess);var y=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,D=x.vtp_verticalThresholdsPixels,I=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.Bc:h(B,y,"horiz.pix");break;case q.Ac:h(C,y,"horiz.pct")}switch(E){case q.Bc:h(D,y,"vert.pix");break;case q.Ac:h(I,
y,"vert.pct")}os("sdl")?Yo("sdl","pending")||(w||(d(),w=!0),M(function(){return f()})):(d(),w=!0,v&&(ps("sdl"),Wo("sdl","pending",!0),M(function(){f();if(a()){var P=g();gg(u,"scroll",P);gg(u,"resize",P)}else Wo("sdl","init",!1)})))}var p=/^\s*$/,q={Ac:"PERCENT",Bc:"PIXELS"},r={uf:"vertical",cf:"horizontal"},u,t,v,w=!1,z;(function(x){Y.__sdl=x;Y.__sdl.i="sdl";Y.__sdl.m=!0;Y.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Zp(function(){m(x)})})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.i="jsm";Y.__jsm.m=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=R("google_tag_manager");var d=c&&c.e&&c.e(b);rs(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.h.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;In(b,c)}(function(b){Y.__flc=b;Y.__flc.i="flc";Y.__flc.m=!0;Y.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Ys(b.vtp_customVariable||[],"key","value")||{},e={Mb:b.vtp_activityTag,Jd:c,Oa:b.vtp_conversionCookiePrefix||void 0,Jc:void 0,da:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Nd:b.vtp_advertiserId,Qd:b.vtp_groupTag,onFailure:b.vtp_gtmOnFailure,onSuccess:b.vtp_gtmOnSuccess,
Qc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",he:void 0,ke:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Yc:b.vtp_transactionVariable,transactionId:void 0,Zc:b.vtp_userVariable,pe:d},f=!1;var g=!(Qg(J.C)||f)&&void 0!=is(J.R)&&!1!==is(J.R);e.qa=g;if(b.vtp_enableAttribution){var h=b.vtp_attributionFields||[];if(h.length){O("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(e,R("google_attr").build([Ys(h,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.h.c=["google"],function(){(function(a){Y.__c=a;Y.__c.i="c";Y.__c.m=!0;Y.__c.priorityOverride=0})(function(a){rs(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.i="e";Y.__e.m=!0;Y.__e.priorityOverride=0})(function(a){var b=String(ii(a.vtp_gtmEventId,"event"));return b})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.i="f";Y.__f.m=!0;Y.__f.priorityOverride=0})(function(a){var b=is("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?lh(nh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):hs(String(b)):String(b)})}();
Y.h.j=["google"],function(){(function(a){Y.__j=a;Y.__j.i="j";Y.__j.m=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=R(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];rs(c,"j",a.vtp_gtmEventId);return c})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.i="k";Y.__k.m=!0;Y.__k.priorityOverride=0})(function(a){return ls(a.vtp_name,is("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.i="access_globals";Y.__access_globals.m=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!k(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Ta(e,r))return}else if("write"===q){if(-1<Ta(f,r))return}else if("readwrite"===q){if(-1<Ta(f,r)&&-1<Ta(e,r))return}else if("execute"===q){if(-1<Ta(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},O:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.i="r";Y.__r.m=!0;Y.__r.priorityOverride=0})(function(a){return Wa(a.vtp_min,a.vtp_max)})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.i="u";Y.__u.m=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:is("gtm.url",1))||fs();var d=b[a("vtp_component")];if(!d||"URL"==d)return hs(String(c));var e=nh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Sa(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=lh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=lh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.i="v";Y.__v.m=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=is(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;rs(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.tl=["google"],function(){function a(b){return function(){if(b.Wd&&b.Yd>=b.Wd)b.Td&&R("self").clearInterval(b.Td);else{b.Yd++;var c=es().getTime();js({event:b.P,"gtm.timerId":b.Td,"gtm.timerEventNumber":b.Yd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Wd,"gtm.timerStartTime":b.Vf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Vf,"gtm.triggers":b.gi})}}}(function(b){Y.__tl=b;Y.__tl.i="tl";Y.__tl.m=!0;Y.__tl.priorityOverride=0})(function(b){M(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{P:b.vtp_eventName,Yd:0,interval:Number(b.vtp_interval),Wd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),gi:String(b.vtp_uniqueTriggerId||"0"),Vf:es().getTime()};c.Td=R("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.h.ua=["google"],function(){function a(q){return Qg(q)}function b(q,r,u){var t=!1;if(Hg()&&!t&&!e[q]){var v=!1,w=function(){var z=ql(),x="gtm"+Wh(),y=m(r),B={name:x};l(y,B,!0);var C=void 0,E=B._useUp;
z("create",q,B);z(function(){z.remove(x)})};Lg(w,J.I);Lg(w,J.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,r,u){var t=0;if(q)for(var v in q)if(!h[v]&&
q.hasOwnProperty(v)&&(u&&f[v]||!u&&void 0===f[v])){var w=g[v]?bb(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);r[v]=w;t++}return t},m=function(q){var r={};q.vtp_gaSettings&&G(Ys(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);G(Ys(q.vtp_fieldsToSet,"fieldName","value"),r);Qg(J.I)||(r.storage="none");Qg(J.C)||(r.allowAdFeatures=!1,r.storeGac=!1);go()||(r.allowAdFeatures=!1);fo()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(bb(r.urlPassthrough)){r._useUp=!0;var u=!1;Hg()&&!u&&(r._cs=a)}return r},p=function(q){function r(pa,ba){void 0!==ba&&D("set",pa,ba)}var u={},t={},v={},
w={};if(q.vtp_gaSettings){var z=q.vtp_gaSettings;G(Ys(z.vtp_contentGroup,"index","group"),t);G(Ys(z.vtp_dimension,"index","dimension"),v);G(Ys(z.vtp_metric,"index","metric"),w);var x=G(z);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;q=G(q,x)}G(Ys(q.vtp_contentGroup,"index","group"),t);G(Ys(q.vtp_dimension,"index","dimension"),v);G(Ys(q.vtp_metric,"index","metric"),w);var y=m(q),B=sl(q.vtp_functionName);if(Qa(B)){var C="",E="";q.vtp_setTrackerName&&
"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(E=q.vtp_trackerName,C=E+"."):(E="gtm"+Wh(),C=E+".");var D=function(pa){var ba=[].slice.call(arguments,0);ba[0]=C+ba[0];B.apply(window,ba)},I=function(pa,ba){return void 0===ba?ba:pa(ba)},P=function(pa,ba){if(ba)for(var Eb in ba)ba.hasOwnProperty(Eb)&&D("set",pa+Eb,ba[Eb])},Q=function(){},U={name:E};l(y,U,!0);var qa=q.vtp_trackingId||u.trackingId;B("create",qa,U);D("set","&gtm",Im(!0));var V=!1;
Hg()&&!V&&(D("set","&gcs",Rg()),b(qa,q,E));y._x_19&&(null==Yf&&delete y._x_19,y._x_20&&!d[E]&&(d[E]=!0,B(xl(E,String(y._x_20)))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(pa,ba){void 0!==q[ba]&&D("set",pa,q[ba])})("nonInteraction","vtp_nonInteraction");P("contentGroup",t);P("dimension",v);P("metric",w);var L={};l(y,L,!1)&&D("set",L);var X;
q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var pa=y&&y.hitCallback;Qa(pa)&&pa();q.vtp_gtmOnSuccess()});var Z=function(pa,ba){return void 0===q[pa]?u[ba]:q[pa]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());var wa={hitType:"event",eventCategory:String(Z("vtp_eventCategory","category")),eventAction:String(Z("vtp_eventAction","action")),eventLabel:I(String,
Z("vtp_eventLabel","label")),eventValue:I(ab,Z("vtp_eventValue","value"))};l(X,wa,!1);D("send",wa);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(D("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Va="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:Va})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var mb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:mb})}X?D("send","pageview",X):D("send","pageview");bb(y.urlPassthrough)&&ul(C)}if(!c){var tb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(tb="internal/"+tb);c=!0;var Ob=sm(y._x_19,"/analytics.js"),nb=xk("https:","http:","//www.google-analytics.com/"+tb,y&&!!y.forceSSL);O("analytics.js"===tb&&Ob?Ob:nb,function(){var pa=
ql();pa&&pa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else M(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.i="ua";Y.__ua.m=!0;Y.__ua.priorityOverride=0})(function(q){Tg(function(){p(q)},
[J.I,J.C])})}();


Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.i="inject_script";Y.__inject_script.m=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Script URL must be a string.");try{if(Ue(nh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},O:a}})}();


Y.h.opt=["google"],function(){var a;(function(b){Y.__opt=b;Y.__opt.i="opt";Y.__opt.m=!0;Y.__opt.priorityOverride=0})(function(b){var c={};if(b.vtp_gaSettings){var d=b.vtp_gaSettings;G(Ys(d.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;d.vtp_fieldsToSet=void 0;var e=G(d);b=G(b,e)||{}}G(Ys(b.vtp_fieldsToSet,"fieldName","value"),c);var f=sl(b.vtp_functionName);if(Qa(f)){f.r=!0;var g="",h="";b.vtp_setTrackerName&&
"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(h=b.vtp_trackerName,g=h+"."):(h="gtm"+Wh(),g=h+".");var l={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},m={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,
javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},p=function(w,z,x){var y=0,B;for(B in w)if(w.hasOwnProperty(B)&&(x&&l[B]||!x&&void 0===l[B])){var C=m[B]?bb(w[B]):w[B];"anonymizeIp"!==B||C||(C=void 0);z[B]=C;y++}return y},q={name:h};p(c,q,!0);var r={"&gtm":Im(!0)};p(c,r,!1);var u=encodeURI(xk("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));f("create",b.vtp_trackingId,q);f(g+
"set",r);f(g+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});f(b.vtp_gtmOnSuccess);f(g+"require","render");a||(a=!0,O(u,function(){return ql().loaded||b.vtp_gtmOnFailure()},b.vtp_gtmOnFailure));var t=R("dataLayer"),v=t&&t.hide;v&&(v.end||!0===v["GTM-WHNNX8B"])&&(v[b.vtp_optimizeContainerId]=!0)}else M(b.vtp_gtmOnFailure)})}();
Y.h.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.i="cid";Y.__cid.m=!0;Y.__cid.priorityOverride=0})(function(){return qe.F})}();

Y.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"],b=!1;(function(c){Y.__gclidw=c;Y.__gclidw.i="gclidw";Y.__gclidw.m=!0;Y.__gclidw.priorityOverride=100})(function(c){M(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||Aj())&&Wj(a,l));Tj(l);Zj(["aw","dc"],l);b?nk(h,l):ok(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Yj(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=is(J.R);rn({Id:!1,qa:void 0!=
q&&!1!==q,Ic:l,Pc:!0});c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&bk(["aw","dc","gb"])});}();


Y.h.aev=["google"],function(){function a(u,t,v){var w=u||ii(t,"gtm");if(w)return w[v]}function b(u,t,v,w,z){z||(z="element");var x=t+"."+v,y;if(p.hasOwnProperty(x))y=p[x];else{var B=a(u,t,z);if(B&&(y=w(B),p[x]=y,q.push(x),35<q.length)){var C=q.shift();delete p[C]}}return y}function c(u,t,v,w){var z=a(u,t,r[v]);return void 0!==z?z:w}function d(u,t){if(!u)return!1;var v=e(fs());Sa(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],z=0;z<t.length;z++){var x=t[z];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(B){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(u))return!1}else{var y=x;if(0!=y.length){if(0<=e(u).indexOf(y))return!1;w.push(e(y))}}}return!Xs(u,w)}function e(u){m.test(u)||(u="http://"+u);return lh(nh(u),"HOST",!0)}function f(u,t,v,w){switch(u){case "SUBMIT_TEXT":return b(t,v,"FORM."+u,g,"formSubmitElement")||w;case "LENGTH":var z=b(t,v,"FORM."+u,h);return void 0===z?w:z;case "INTERACTED_FIELD_ID":return l(t,v,"id",w);case "INTERACTED_FIELD_NAME":return l(t,
v,"name",w);case "INTERACTED_FIELD_TYPE":return l(t,v,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(t,v,"interactedFormFieldPosition");return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(t,v,"interactSequenceNumber");return void 0===y?w:y;default:return w}}function g(u){switch(u.tagName.toLowerCase()){case "input":return ig(u,"value");case "button":return jg(u);default:return null}}function h(u){if("form"===u.tagName.toLowerCase()&&u.elements){for(var t=0,v=0;v<u.elements.length;v++)Qr(u.elements[v])&&
t++;return t}}function l(u,t,v,w){var z=a(u,t,"interactedFormField");return z&&ig(z,v)||w}var m=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(u){Y.__aev=u;Y.__aev.i="aev";Y.__aev.m=!0;Y.__aev.priorityOverride=
0})(function(u){var t=u.vtp_gtmEventId,v=u.vtp_defaultValue,w=u.vtp_varType,z;switch(w){case "TAG_NAME":var x=a(z,t,"element");return x&&x.tagName||v;case "TEXT":return b(z,t,w,jg)||v;case "URL":var y;a:{var B=String(a(z,t,"elementUrl")||v||""),C=nh(B),E=String(u.vtp_component||"URL");switch(E){case "URL":y=B;break a;case "IS_OUTBOUND":y=
d(B,u.vtp_affiliatedDomains);break a;default:y=lh(C,E,u.vtp_stripWww,u.vtp_defaultPages,u.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===u.vtp_attribute)D=c(z,t,w,v);else{var I=u.vtp_attribute,P=a(z,t,"element");D=P&&ig(P,I)||v||""}return D;case "MD":var Q=u.vtp_mdValue,U=b(z,t,"MD",Zr);return Q&&U?bs(U,Q)||v:U||v;case "FORM":return f(String(u.vtp_component||"SUBMIT_TEXT"),z,t,v);default:var qa=c(z,t,w,v);rs(qa,"aev",u.vtp_gtmEventId);return qa}})}();

Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.i="gas";Y.__gas.m=!0;Y.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[td.Ta]=null;c[td.Qg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=R("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Y.__awct=g;Y.__awct.i="awct";Y.__awct.m=!0;Y.__awct.priorityOverride=
0})(function(g){function h(C,E,D){return"DATA_LAYER"===C?is(D):g[E]}function l(){v("gdpr_consent",mn()),v("gdpr",nn());}function m(){var C=[];return C}function p(C){var E=!0,D=[];if(C){D=m();}E&&b.push(r)}function q(){Ig()&&v("gcd","G1"+Mg(Fg));}ll();var r={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,
google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:Im()};r.google_gtm_experiments={capi:!0};g.vtp_rdp&&(r.google_restricted_data_processing=!0);void 0!=is(J.R)&&!1!==is(J.R)&&(r.google_gtm_url_processor=function(C){return C=Lk(C)});var u=function(C){return function(E,D,I){var P=h(C,D,I);P&&(r[E]=P)}},
t=u("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(t=u(g.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),r.google_conversion_items&&
r.google_conversion_items.map&&(r.google_conversion_items=r.google_conversion_items.map(function(C){return{value:C.price,quantity:C.quantity,item_id:C.id}})));var v=function(C,E){void 0!==E&&((r.google_additional_conversion_params=r.google_additional_conversion_params||{})[C]=E)},w=function(C){return function(E,D,I,P){var Q=h(C,D,I);P(Q)&&v(E,Q)}};var z=is("developer_id"),x=xb(Nb(z)?z:{});x&&v("did",x);
(function(){if(!g.vtp_enableShippingData)return;v("delopc",g.vtp_deliveryPostalCode);v("oedeld",g.vtp_estimatedDeliveryDate);v("delc",g.vtp_deliveryCountry);v("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var C=h(g.vtp_productReportingDataSource,"vtp_items","items");v("iedeld",Nk(C))}})();g.vtp_transportUrl&&(r.google_transport_url=g.vtp_transportUrl);var y=sm(g.vtp_transportUrl,"/pagead/conversion_async.js");
y||(y=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(t=w(g.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(C){return void 0!=C&&""!==C}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(C){return void 0!=C&&""!==C}));var B=!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker;
B?(g.vtp_conversionCookiePrefix&&(r.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),r.google_read_gcl_cookie_opt_out=!1):r.google_read_gcl_cookie_opt_out=!0;"1"===tj(!1)._up&&v("gtm_up","1");l();(function(){var C=!1;!Hg()||C?p(!0):Tg(function(){l();var E=Qg(J.C),D=void 0!=is(J.R)&&!1!==is(J.R),I=!1;
I=!0;g.vtp_transportUrl||E||!D&&!I||(r.google_transport_url="https://pagead2.googlesyndication.com/");v("gcs",Rg());q();p(E);E||Lg(function(){r=G(r);l();!g.vtp_transportUrl&&r.google_transport_url&&delete r.google_transport_url;v("gcs",Rg());q();v("gcu","1");p(!0)},J.C)},[J.C])})();a||(a=!0,O(y,f(),e(y)))})}();
Y.h.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.i="remm";Y.__remm.m=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}rs(f,"remm",a.vtp_gtmEventId);return f})}();
Y.h.logging=["google"],function(){function a(){return{}}(function(b){Y.__logging=b;Y.__logging.i="logging";Y.__logging.m=!0;Y.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){var f;if(f="all"!==c&&!0){var g=!1;f=!g}if(f)throw d(e,{},"Logging is not enabled in all environments");},O:a}})}();Y.h.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.i="smm";Y.__smm.m=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Ys(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;rs(d,"smm",a.vtp_gtmEventId);return d})}();



Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.i="paused";Y.__paused.m=!0;Y.__paused.priorityOverride=0})(function(a){M(a.vtp_gtmOnFailure)})}();

Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,ag(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){M(g)}}}var b=function(d,e,f){el(function(){var g=google_tag_manager_external.postscribe.getPostscribe(),h={done:e},l=K.createElement("div");l.style.display="none";l.style.visibility="hidden";K.body.appendChild(l);try{g(l,d,h)}catch(m){M(f)}})};var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=ss(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Ah,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(K.body,kg(g),h,e)()}else ds(function(){c(d)},
200)};Y.__html=c;Y.__html.i="html";Y.__html.m=!0;Y.__html.priorityOverride=0}();






Y.h.lcl=[],function(){function a(){var c=R("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Kf||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=lg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=Yo("lcl",h?"nv.mwt":"mwt",0),m;m=h?Yo("lcl","nv.ids",[]):Yo("lcl","ids",[]);if(m.length){var p=Uo(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=!!Ua(String(ng(g,"rel")||"").split(" "),function(t){return"noreferrer"===t.toLowerCase()});
q&&Cf(36);var r=R((ng(g,"target")||"_self").substring(1)),u=!0;if(js(p,Er(function(){var t;if(t=u&&r){var v;a:if(q){var w;try{w=new MouseEvent(f.type,{bubbles:!0})}catch(z){if(!c.createEvent){v=!1;break a}w=c.createEvent("MouseEvents");w.initEvent(f.type,!0,!0)}w.Kf=!0;f.target.dispatchEvent(w);v=!0}else v=!1;t=!v}t&&(r.location.href=ng(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else js(p,function(){},l||2E3);return!0}}};gg(c,"click",e,!1);gg(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=ng(d,"href"),g=f.indexOf("#"),h=ng(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=hs(f),m=hs(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.i="lcl";Y.__lcl.m=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};Xo("lcl","mwt",h,0);e||Xo("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};Xo("lcl","ids",l,[]);e||Xo("lcl","nv.ids",l,[]);os("lcl")||(a(),ps("lcl"));M(c.vtp_gtmOnSuccess)})}();
Y.h.evl=["google"],function(){function a(){var f=Number(is("gtm.start"))||0;return es().getTime()-f}function b(f,g,h,l){function m(){if(!Zg(f.target)){g.has(d.Cc)||g.set(d.Cc,""+a());g.has(d.xd)||g.set(d.xd,""+a());var q=0;g.has(d.Ec)&&(q=Number(g.get(d.Ec)));q+=100;g.set(d.Ec,""+q);if(q>=h){var r=Uo(f.target,"gtm.elementVisibility",[g.g]),u=ah(f.target);r["gtm.visibleRatio"]=Math.round(1E3*u)/10;r["gtm.visibleTime"]=h;r["gtm.visibleFirstTime"]=Number(g.get(d.xd));r["gtm.visibleLastTime"]=Number(g.get(d.Cc));
js(r);l()}}}if(!g.has(d.Kb)&&(0==h&&m(),!g.has(d.kb))){var p=R("self").setInterval(m,100);g.set(d.Kb,p)}}function c(f){f.has(d.Kb)&&(R("self").clearInterval(Number(f.get(d.Kb))),f.o(d.Kb))}var d={Kb:"polling-id-",xd:"first-on-screen-",Cc:"recent-on-screen-",Ec:"total-visible-time-",kb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){Y.__evl=f;Y.__evl.i="evl";Y.__evl.m=!0;Y.__evl.priorityOverride=0})(function(f){function g(){var z=!1,x=null;if("CSS"===l){try{x=Vg(m)}catch(D){Cf(46)}z=!!x&&v.length!=x.length}else if("ID"===l){var y=K.getElementById(m);y&&(x=[y],z=1!=v.length||v[0]!==y)}x||(x=[],z=0<v.length);if(z){for(var B=0;B<v.length;B++){var C=
new e(v[B],u);c(C)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&gh(w);0<v.length&&(w=fh(h,v,[r]))}}function h(z){var x=new e(z.target,u);z.intersectionRatio>=r?x.has(d.kb)||b(z,x,q,"ONCE"===t?function(){for(var y=0;y<v.length;y++){var B=new e(v[y],u);B.set(d.kb,"1");c(B)}gh(w);if(p&&Ap)for(var C=0;C<Ap.length;C++)Ap[C]===g&&Ap.splice(C,1)}:function(){x.set(d.kb,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===t&&x.has(d.kb)&&(x.o(d.kb),x.o(d.Ec)),x.o(d.Cc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,r=(Number(f.vtp_onScreenRatio)||50)/100,u=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;g();p&&Bp(g);M(f.vtp_gtmOnSuccess)})}();


var Hv={};Hv.macro=function(a){if(Lr.Bd.hasOwnProperty(a))return Lr.Bd[a]},Hv.onHtmlSuccess=Lr.Bf(!0),Hv.onHtmlFailure=Lr.Bf(!1);Hv.dataLayer=ci;Hv.callback=function(a){Uh.hasOwnProperty(a)&&Qa(Uh[a])&&Uh[a]();delete Uh[a]};Hv.bootstrap=0;Hv._spx=!1;function Iv(){N[qe.F]=Hv;lb(Vh,Y.h);Xd=Xd||Lr;Yd=me}
function Jv(){sg.o().o();N=n.google_tag_manager=n.google_tag_manager||{};kn();Cj.enable_gbraid_cookie_write=!0;if(N[qe.F]){var a=N.zones;a&&a.unregisterChild(qe.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Qd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Td.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Sd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},r=0;r<p.length;r++)q[p[r][0]]=Array.prototype.slice.call(p[r],1);Rd.push(q)}Vd=Y;Wd=Ts;var u=data.permissions||{},t=data.sandboxed_scripts,v=data.security_groups;Sq();ue=new te(u);if(void 0!==
t)for(var w=["sandboxedScripts"],z=0;z<t.length;z++){var x=t[z].replace(/^_*/,"");Vh[x]=w}Vq(v);Iv();Kr();$k=!1;al=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)cl();else{gg(K,"DOMContentLoaded",cl);gg(K,"readystatechange",cl);if(K.createEventObject&&K.documentElement.doScroll){var y=!0;try{y=!n.frameElement}catch(D){}y&&dl()}gg(n,"load",cl)}Wp=!1;"complete"===K.readyState?Yp():gg(n,"load",Yp);a:{if(!Wl)break a;n.setInterval(Vl,864E5);}
google_tag_manager_external.postscribe.installPostscribe();
Sh=(new Date).getTime();}}
(function(a){if(!n["__TAGGY_INSTALLED"]){var b=!1;if(K.referrer){var c=nh(K.referrer);b="cct.google"===kh(c,"host")}if(!b){var d=ui("googTaggyReferrer");b=d.length&&d[0].length}b&&(n["__TAGGY_INSTALLED"]=!0,cg("https://cct.google/taggy/agent.js"))}var f=function(){var q=n["google.tagmanager.debugui2.queue"];q||(q=[],n["google.tagmanager.debugui2.queue"]=q,cg("https://www.googletagmanager.com/debug/bootstrap"));return q},g="x"===lh(n.location,"query",!1,void 0,"gtm_debug");if(!g&&K.referrer){var h=nh(K.referrer);g="tagassistant.google.com"===kh(h,"host")}if(!g){var l=ui("__TAG_ASSISTANT");g=l.length&&l[0].length}n.__TAG_ASSISTANT_API&&(g=!0);if(g&&Yf){var m=f(),p={messageType:"CONTAINER_STARTING",
data:{scriptSource:Yf,resume:function(){a()},containerProduct:"GTM"}};qe.cg&&(p.data.initialPublish=!0);m.push(p)}else a()})(Jv);

})()
