
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"46",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=43;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.type"
    },{
      "function":"__c",
      "vtp_value":"web"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.title"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"atl_uuid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"atljwt"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=",["escape",["macro",7],8,16],",c=b.split(\".\")[1],d=c.replace(\/-\/g,\"+\").replace(\/_\/g,\"\/\"),e=decodeURIComponent(atob(d).split(\"\").map(function(a){return\"%\"+(\"00\"+a.charCodeAt(0).toString(16)).slice(-2)}).join(\"\"));return JSON.parse(e)||{}}catch(a){return{}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",8],8,16],".uuid})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"silverid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",10],8,16],";a\u0026\u0026(a=atob(a),a=a.substring(0,a.length-1));return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.editorialMotivation.slug"
    },{
      "function":"__v",
      "convert_undefined_to":"1",
      "convert_true_to":"0",
      "convert_false_to":"1",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.isPython3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.isFreelance"
    },{
      "function":"__jsm",
      "convert_undefined_to":"undefined",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",14],8,16],";return a?\"freelance\":void 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.wordCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.channels"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",17],8,16],",c=\"\",a=0;a\u003Cb.length;a++)c+=b[a].slug,b.length!=a+1\u0026\u0026(c+=\",\");return c})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.primaryChannel.displayName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.editorialProject.displayName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",20],8,16],"||\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.authors"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],",b=\"\";if(1\u003E=a.length)b=a[0].displayName;else for(var c=0;c\u003Ca.length;c++)b+=a[c].displayName,a.length!=c+1\u0026\u0026(b+=\" and \");return b.toLowerCase()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],";return a=a.slice(-6)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.shareTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\",b=",["escape",["macro",8],8,16],";b.uuid\u0026\u0026(a+=\"account,\",b.premium_access||b.ad_free?a+=\"paymeter_access,premium_access\":b.paymeter_access\u0026\u0026(a+=\"paymeter_access\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],";return a=a[0].displayName.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],";return a=a[1].displayName})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.layout"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.categories"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",31],8,16],",a=\"\",b=0;b\u003Cc.length;b++){var d=c[b].slug.replace(\/-\/g,\" \");a+=d;c.length!=b+1\u0026\u0026(a+=\",\")}return a=\"\"==a?void 0:a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.__typename"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",33],8,16],";return a.toLowerCase().replace(\"article\",\"\").replace(\"azine\",\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.template"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"BCSessionID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"kxatlantic_user\";try{var b=window.localStorage}catch(c){b=null}a=b?b[a]||\"\":navigator.cookieEnabled?(a=document.cookie.match(a+\"\\x3d([^;]*)\"))\u0026\u0026unescape(a[1])||\"\":\"\";return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.watsonInfo.topCategory.full"
    },{
      "function":"__v",
      "convert_null_to":"undefined",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.watsonInfo.topCategory.one"
    },{
      "function":"__v",
      "convert_null_to":"undefined",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.watsonInfo.topCategory.two"
    },{
      "function":"__v",
      "convert_null_to":"undefined",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.watsonInfo.topCategory.three"
    },{
      "function":"__v",
      "convert_null_to":"undefined",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.watsonInfo.topCategory.four"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.watsonInfo.categories"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",43],8,16],",a=\"\",b=0;b\u003Cc.length;b++)a+=c[b],c.length!=b+1\u0026\u0026(a+=\";\");return a=\"\"==a?void 0:a})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",47],8,16],";return a.length.toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",47],8,16],";return a.split(\" \").length.toString()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.datePublished"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date(",["escape",["macro",50],8,16],");return a.toLocaleDateString(\"en-CA\",{timeZone:\"America\/New_York\"})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date(",["escape",["macro",50],8,16],");return a=a.toLocaleTimeString(\"en-GB\",{timeZone:\"America\/New_York\"}).slice(0,5)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date(",["escape",["macro",50],8,16],"),d=-a.getTimezoneOffset(),e=0\u003C=d?\"+\":\"-\",b=function(c){c=Math.floor(Math.abs(c));return(10\u003Ec?\"0\":\"\")+c};return a.getFullYear()+\"-\"+b(a.getUTCMonth()+1)+\"-\"+b(a.getUTCDate())+\"T\"+b(a.getUTCHours())+\":\"+b(a.getUTCMinutes())+\":\"+b(a.getUTCSeconds())+e+b(d\/60)+\":\"+b(d%60)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.dateModified"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date(",["escape",["macro",54],8,16],"),d=-a.getTimezoneOffset(),e=0\u003C=d?\"+\":\"-\",b=function(c){c=Math.floor(Math.abs(c));return(10\u003Ec?\"0\":\"\")+c};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+e+b(d\/60)+\":\"+b(d%60)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.canonicalUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new URL(",["escape",["macro",56],8,16],");return a.hostname||",["escape",["macro",46],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"is_gdpr"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 1===",["escape",["macro",59],8,16],"})();"]
    },{
      "function":"__c",
      "vtp_value":"2.0.0"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new URL(",["escape",["macro",62],8,16],");a=new URLSearchParams(a.search);return a=a.get(\"source\")})();"]
    },{
      "function":"__c",
      "vtp_value":"AWS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.grapeshot.segments"
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){window.Blueconic||(Blueconic={segments:[]});try{var a=-1!=Blueconic.segments.indexOf(\"Atlantic Active Reader\")?1:0;return a}catch(b){}})();"]
    },{
      "function":"__ctv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;a=-a.getTimezoneOffset();return a.toString()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.statusCode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 404===+",["escape",["macro",70],8,16],"?\"true\":\"false\"})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"atltestbucketv1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",30],8,16],";return a=\"standard\"===a?\"stacked\":\"full bleed\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"page.article.secondaryByline"
    },{
      "function":"__c",
      "vtp_value":"UA-20189-19"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",1]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","13","dimension",["macro",2]],["map","index","60","dimension",["macro",3]],["map","index","5","dimension",["macro",4]],["map","index","68","dimension",["macro",5]],["map","index","64","dimension",["macro",6]],["map","index","17","dimension",["macro",9]],["map","index","61","dimension",["macro",11]],["map","index","82","dimension",["macro",12]],["map","index","83","dimension",["macro",13]],["map","index","26","dimension",["macro",15]],["map","index","44","dimension",["macro",16]],["map","index","6","dimension",["macro",18]],["map","index","12","dimension",["macro",19]],["map","index","14","dimension",["macro",21]],["map","index","15","dimension",["macro",23]],["map","index","16","dimension",["macro",25]],["map","index","28","dimension",["macro",26]],["map","index","29","dimension",["macro",27]],["map","index","57","dimension",["macro",28]],["map","index","58","dimension",["macro",29]],["map","index","53","dimension",["macro",30]],["map","index","66","dimension",["macro",32]],["map","index","67","dimension",["macro",34]],["map","index","74","dimension",["macro",35]],["map","index","36","dimension",["macro",36]],["map","index","35","dimension",["macro",37]],["map","index","42","dimension",["macro",9]],["map","index","34","dimension",["macro",27]],["map","index","7","dimension",["macro",38]],["map","index","8","dimension",["macro",39]],["map","index","9","dimension",["macro",40]],["map","index","10","dimension",["macro",41]],["map","index","11","dimension",["macro",42]],["map","index","30","dimension",["macro",44]],["map","index","1","dimension",["macro",45]],["map","index","2","dimension",["macro",46]],["map","index","18","dimension",["macro",48]],["map","index","19","dimension",["macro",49]],["map","index","20","dimension",["macro",51]],["map","index","21","dimension",["macro",52]],["map","index","22","dimension",["macro",53]],["map","index","23","dimension",["macro",55]],["map","index","25","dimension",["macro",57]],["map","index","37","dimension",["macro",58]],["map","index","38","dimension",["macro",60]],["map","index","46","dimension",["macro",61]],["map","index","76","dimension",["macro",63]],["map","index","81","dimension",["macro",64]],["map","index","39","dimension",["macro",65]],["map","index","69","dimension",["macro",66]],["map","index","71","dimension",["macro",67]],["map","index","75","dimension",["macro",68]],["map","index","70","dimension",["macro",69]],["map","index","27","dimension",["macro",71]],["map","index","85","dimension",["macro",72]],["map","index","86","dimension",["macro",73]],["map","index","87","dimension",["macro",74]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",75],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",77],8,16],";a.parentElement;a=a.parentElement)if(a.dataset.category)return a.dataset.category})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",77],8,16],";!a.dataset.category;a=a.parentElement)if(a.dataset.action)return a.dataset.action})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b,a=",["escape",["macro",77],8,16],";!a.querySelector(\"* \\x3e [data-category]\");a=a.parentElement)if(!b\u0026\u0026a.href\u0026\u0026(b=a.href),a.dataset.label)return a.dataset.label;return b||\"Button click\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"performance.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"performance.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"performance.startTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"performance.value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"performance.label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[\"The Atlantic.Editorial.Title.",["escape",["macro",86],7],"\"];return a.join(\",\")})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"articleViews"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",89],8,16],".split(\",\");return a.length})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",77],8,16],";var b=a.closest(\"div[data-section-index]\");b=b.dataset.sectionIndex;var c=a.parentElement.classList.contains(\"c-recirculation-link\");c?(a=a.parentElement.id,a=a.charAt(a.length-1),a=parseInt(a)+1,b=\"click link - injected-link - \"+b+\" - article \"+a):b=\"click link - inline - \"+b;return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
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
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adProperties.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adProperties.audio"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"[]",
      "vtp_name":"blueconic_audiences"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"atl_ccpa"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"1\"===",["escape",["macro",101],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.shareDek"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.article.url"
    },{
      "function":"__e"
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",28,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",76],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":12
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",78],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":17
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":["template","https:\/\/data-cdn.theatlantic.com\/p.gif?id=",["escape",["macro",81],12],"\u0026name=",["escape",["macro",82],12],"\u0026startTime=",["escape",["macro",83],12],"\u0026value=",["escape",["macro",84],12],"\u0026label=",["escape",["macro",85],12]],
      "tag_id":36
    },{
      "function":"__csm",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_clientId":"6463921",
      "tag_id":54
    },{
      "function":"__qcm",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pcode":"p-b0K-eQJGBXxXE",
      "vtp_labels":["macro",87],
      "tag_id":58
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",90],
      "vtp_eventCategory":["macro",78],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":74
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"story page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"scroll",
      "vtp_eventLabel":"article completion",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":87
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"story page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"scroll",
      "vtp_eventLabel":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":90
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",78],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",93],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":118
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",90],
      "vtp_eventCategory":["macro",78],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":156
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",94],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",95],
      "vtp_eventLabel":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":183
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",90],
      "vtp_eventCategory":["macro",97],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",95],
      "vtp_eventLabel":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":200
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"the experiment - promo",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",98],
      "vtp_eventLabel":["macro",99],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":213
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-5839GV7","nickname","Consent Management Container"]],
      "vtp_boundaries":["list"],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","gaawc"],["map","typeId","awct"],["map","typeId","gaawe"],["map","typeId","gcs"],["map","typeId","gfpa"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","automl"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","ehl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","img"],["map","typeId","html"],["map","typeId","jsm"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"],["map","typeId","sandboxedScripts"]],
      "tag_id":263
    },{
      "function":"__cl",
      "tag_id":264
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[data-action=\"nudge:display\"]",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"31117857_73",
      "tag_id":265
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31117857_75",
      "tag_id":266
    },{
      "function":"__evl",
      "vtp_elementId":"article-end",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"2000",
      "vtp_uniqueTriggerId":"31117857_86",
      "tag_id":267
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"31117857_89",
      "vtp_enableTriggerStartOption":true,
      "tag_id":268
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31117857_117",
      "tag_id":269
    },{
      "function":"__cl",
      "tag_id":270
    },{
      "function":"__cl",
      "tag_id":271
    },{
      "function":"__evl",
      "vtp_elementId":"gate",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"31117857_157",
      "tag_id":272
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdn.blueconic.net\/theatlantic.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",30,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EPARSELY.beacon.trackPageView({url:",["escape",["macro",62],8,16],",js:1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",29,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.Atlantic=window.Atlantic||{};window.Atlantic.KruxDataLayer={path:",["escape",["macro",91],8,16],",domain:",["escape",["macro",46],8,16],",title:",["escape",["macro",86],8,16],",view:",["escape",["macro",2],8,16],",blueconic_segments:window.Blueconic?window.Blueconic.segments:null};Krux(\"ns:atlantic\",\"page:load\",function(a){console.log(\"Krux\",a)},{pageView:!0});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.Blueconic||(Blueconic={segments:[]});try{if(window.localStorage){var a=localStorage.getItem(\"bcDFPTargetingParams\");if(a){var b=JSON.parse(a);for(a=0;a\u003Cb.length;a++)window.Blueconic[b[a].key]=b[a].value;b=[];for(a=0;a\u003CBlueconic.segments.length;a++)\"DFP \"===Blueconic.segments[a].substring(0,4)\u0026\u0026b.push(Blueconic.segments[a]);window.localStorage.dfp_blueconic_targeting=b.slice(0,10).join(\",\");console.log(Blueconic.segments);window.Atlantic=window.Atlantic||{};window.Atlantic.KruxDataLayer=\nwindow.Atlantic.KruxDataLayer||{};window.Atlantic.KruxDataLayer.blueconic_segments=Blueconic.segments}}}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":177
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1407501962855831\");fbq(\"track\",\"PageView\");fbq(\"track\",\"ViewContent\",{blueconic_segments:",["escape",["macro",100],8,16],",content_ids:[",["escape",["macro",25],8,16],"]});\nfbq(\"dataProcessingOptions\",[\"LDU\"],0,0);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.fbAsyncInit=function(){FB.init({appId:\"100770816677686\",xfbml:!1,version:\"v2.7\"})};(function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src=\"\/\/connect.facebook.net\/en_US\/sdk.js\",d.parentNode.insertBefore(a,d))})(document,\"script\",\"facebook-jssdk\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1407501962855831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":262
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",11],8,16],"\u0026\u0026window.history\u0026\u0026history.replaceState\u0026\u0026history.replaceState({},\"\",window.location.href.replace(\"silverid\\x3d\",\"silverid-ref\\x3d\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);var k=document.createElement(\"script\");k.type=\"text\/javascript\";k.async=!0;k.src=(\"https:\"===location.protocol?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag\/qrixx06d0.js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(k,s);var krux_cmp={idt:\"device\",dt:\"kxcookie\",dc:!0,al:!0,tg:!",["escape",["macro",102],8,16],",cd:!0,sh:!",["escape",["macro",102],8,16],",re:!1};window.Krux(\"ns:atlantic\",\"consent:set\",krux_cmp);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.PARSELY=window.PARSELY||{autotrack:!1};\u003C\/script\u003E\n\n\u003Cscript id=\"parsely-cfg\" data-gtmsrc=\"\/\/cdn.parsely.com\/keys\/theatlantic.com\/p.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pageview"
    },{
      "function":"_css",
      "arg0":["macro",77],
      "arg1":"button, button *, a, a *"
    },{
      "function":"_css",
      "arg0":["macro",77],
      "arg1":"section p a *, section p\u003Ea"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"nudge interaction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"performanceMark"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)31117857_73($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"article"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)31117857_86($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",91],
      "arg1":"\/video\/iframe"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)31117857_89($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",77],
      "arg1":"p.c-recirculation-link a, p a"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)31117857_117($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"gateway interaction"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"(^$|((^|,)31117857_157($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Newsletter Signup"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Nudge Scroll"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Podcast House Promo Play\/Pause"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Consent Updated"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    }],
  "rules":[
    [["if",0],["add",0,3,4,24,25]],
    [["if",1,4],["unless",2,3],["add",1]],
    [["if",5],["add",2]],
    [["if",6,7],["add",5]],
    [["if",3,4],["add",5]],
    [["if",6,8,9],["add",6]],
    [["if",8,11,12],["unless",10],["add",7]],
    [["if",8,13,14,15],["add",8]],
    [["if",4,16],["add",9]],
    [["if",6,17],["add",9]],
    [["if",18],["add",10,13]],
    [["if",19],["add",11]],
    [["if",20],["add",12]],
    [["if",21],["add",13]],
    [["if",22],["add",13,23,26,27,14,15,16,17,19,20,21,22]],
    [["if",23],["add",18]]]
},
"runtime":[[50,"__qcm",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","createQueue"]],[52,"d",["c","_qevents"]],["d",[8,"qacct",[16,[15,"a"],"pcode"],"labels",[30,[16,[15,"a"],"labels"],""],"uid",[30,[16,[15,"a"],"uid"],""],"source","gtm"]],["b","https://secure.quantserve.com/quant.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__qcm":{"access_globals":{"keys":[{"key":"_qevents","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/secure.quantserve.com\/quant.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__qcm"]}

};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Mi=b.prototype},ma=this||self,pa=function(a){return a};var qa=function(a,b){this.g=a;this.o=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.s={};this.D=!1;this.L={}},ta=function(a,b){var c=[],d;for(d in a.s)if(a.s.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};sa.prototype.get=function(a){return this.s["dust."+a]};sa.prototype.set=function(a,b){this.D||(a="dust."+a,this.L.hasOwnProperty(a)||(this.s[a]=b))};
sa.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var va=function(a,b){b="dust."+b;a.D||a.L.hasOwnProperty(b)||delete a.s[b]};sa.prototype.Za=function(){this.D=!0};var p=function(a){this.o=new sa;this.g=[];this.s=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};k=p.prototype;k.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof p?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
k.set=function(a,b){if(!this.s)if("length"===a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else ra(a)?this.g[Number(a)]=b:this.o.set(a,b)};k.get=function(a){return"length"===a?this.length():ra(a)?this.g[Number(a)]:this.o.get(a)};k.length=function(){return this.g.length};k.Ya=function(){for(var a=ta(this.o,1),b=0;b<this.g.length;b++)a.push(b+"");return new p(a)};var wa=function(a,b){ra(b)?delete a.g[Number(b)]:va(a.o,b)};k=p.prototype;
k.pop=function(){return this.g.pop()};k.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};k.shift=function(){return this.g.shift()};k.splice=function(a,b,c){return new p(this.g.splice.apply(this.g,arguments))};k.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};k.has=function(a){return ra(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};k.Za=function(){this.s=!0;Object.freeze(this.g);this.o.Za()};var ya=function(){function a(f,g){if(b[f]){if(b[f].Qc+g>b[f].max)throw Error("Quota exceeded");b[f].Qc+=g}}var b={},c=void 0,d=void 0,e={$h:function(f){c=f},Kf:function(){c&&a(c,1)},bi:function(f){d=f},$a:function(f){d&&a(d,f)},oi:function(f,g){b[f]=b[f]||{Qc:0};b[f].max=g},Gh:function(f){return b[f]&&b[f].Qc||0},reset:function(){b={}},uh:a};e.onFnConsume=e.$h;e.consumeFn=e.Kf;e.onStorageConsume=e.bi;e.consumeStorage=e.$a;e.setMax=e.oi;e.getConsumed=e.Gh;e.reset=e.reset;e.consume=e.uh;return e};var za=function(a,b){this.s=a;this.M=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new sa;this.g=this.L=void 0};za.prototype.add=function(a,b){Aa(this,a,b,!1)};var Aa=function(a,b,c,d){if(!a.o.D)if(a.s.$a(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.L["dust."+b]=!0}else a.o.set(b,c)};
za.prototype.set=function(a,b){this.o.D||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.$a(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};za.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};za.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ba=function(a){var b=new za(a.s,a);a.L&&(b.L=a.L);b.M=a.M;b.g=a.g;return b};var Ca={},Da=function(a,b){Ca[a]=Ca[a]||[];Ca[a][b]=!0},Fa=function(a){for(var b=[],c=Ca[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ja=function(){},Ka=function(a){return"function"==typeof a},A=function(a){return"string"==typeof a},La=function(a){return"number"==typeof a&&!isNaN(a)},Ma=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Da("TAGGING",4):Da("TAGGING",5);return b},Na=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Oa=function(a,b){if(a&&Ma(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Pa=function(a,b){if(!La(a)||!La(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ra=function(a,b){for(var c=new Qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ta=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Wa=
function(a){return Math.round(Number(a))||0},Xa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ya=function(a){var b=[];if(Ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Za=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},$a=function(){return(new Date).getTime()},Qa=function(){this.prefix="gtm.";this.values={}};Qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Qa.prototype.get=function(a){return this.values[this.prefix+a]};
var ab=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},bb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},db=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},hb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},ib=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},jb=function(a,b){var c=F;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Na(b,d))return}return d},kb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},lb=/^\w{1,9}$/,nb=function(a){var b=[];Sa(a,function(c,d){lb.test(c)&&d&&b.push(c)});return b.join(",")};var ob=function(a,b){sa.call(this);this.M=a;this.ya=b};la(ob,sa);ob.prototype.toString=function(){return this.M};ob.prototype.Ya=function(){return new p(ta(this,1))};ob.prototype.g=function(a,b){a.s.Kf();return this.ya.apply(new pb(this,a),Array.prototype.slice.call(arguments,1))};ob.prototype.o=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var rb=function(a,b){for(var c,d=0;d<b.length&&!(c=qb(a,b[d]),c instanceof qa);d++);return c},qb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof ob))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.L;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},pb=function(a,b){this.o=a;this.g=b},G=function(a,b){var c=a.g;return Ma(b)?qb(c,b):b},H=function(a){return a.o.M};var tb=function(){sa.call(this)};la(tb,sa);tb.prototype.Ya=function(){return new p(ta(this,1))};var vb={control:function(a,b){return new qa(a,G(this,b))},fn:function(a,b,c){var d=this.g,e=G(this,b);if(!(e instanceof p))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.$a(a.length+f.length);return new ob(a,function(){return function(g){var h=Ba(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=G(this,l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new p(l));var r=rb(h,f);if(r instanceof qa)return"return"===r.g?r.o:r}}())},list:function(a){var b=this.g.s;b.$a(arguments.length);for(var c=new p,d=0;d<arguments.length;d++){var e=G(this,arguments[d]);"string"===typeof e&&b.$a(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new tb,d=0;d<arguments.length-1;d+=2){var e=G(this,arguments[d])+"",f=G(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.$a(g);c.set(e,f)}return c},undefined:function(){}};var wb=function(){this.s=ya();this.g=new za(this.s)},xb=function(a,b,c){var d=new ob(b,c);d.Za();a.g.set(b,d)};wb.prototype.Uc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};wb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.g,arguments[c]);return b};wb.prototype.D=function(a,b){var c=Ba(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=qb(c,arguments[e]);return d};var yb=function(a){if(a instanceof yb)return a;this.Da=a};yb.prototype.toString=function(){return String(this.Da)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ab=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Eb=function(a){if(null==a)return String(a);var b=Ab.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Gb=function(a){if(!a||"object"!=Eb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fb(a,"constructor")&&!Fb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fb(a,b)},J=function(a,b){var c=b||("array"==Eb(a)?[]:{}),d;for(d in a)if(Fb(a,d)){var e=a[d];"array"==Eb(e)?("array"!=Eb(c[d])&&(c[d]=[]),c[d]=J(e,c[d])):Gb(e)?(Gb(c[d])||(c[d]={}),c[d]=J(e,c[d])):c[d]=e}return c};var Ib=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=ta(h,1),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=Na(d,h);if(-1<l)return e[l];if(h instanceof p){var m=[];d.push(h);e.push(m);for(var n=h.Ya(),q=0;q<n.length();q++)m[n.get(q)]=g(h.get(n.get(q)));return m}if(h instanceof tb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof ob){var u=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Hb(t[v],b,!!c);var w=b?b.s:ya(),y=new za(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(t)))};d.push(h);e.push(u);f(h,u);return u}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Hb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Na(d,
h);if(-1<l)return e[l];if(Ma(h)||Ta(h)){var m=new p([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(Gb(h)){var q=new tb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new ob("",function(t){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Ib(G(this,v[w]),b,!!c);return g((0,this.g.M)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var u=typeof h;if(null===h||"string"===u||"number"===u||"boolean"===u)return h;};return g(a)};var Jb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Kb=function(a){if(void 0===a||Ma(a)||Gb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Lb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof p)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new p(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new p(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new p(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Jb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):wa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new p(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Jb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):wa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Nb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Ob=new qa("break"),Pb=new qa("continue"),Qb=function(a,b){return G(this,a)+G(this,b)},Sb=function(a,b){return G(this,a)&&G(this,b)},Tb=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(!(c instanceof p))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Na(Nb,b)){var d=Ib(c);return Hb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof p){if(a.has(b)){var e=a.get(b);if(e instanceof ob){var f=Jb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Na(Lb.supportedMethods,b)){var g=
Jb(c);g.unshift(this.g);return Lb[b].apply(a,g)}}if(a instanceof ob||a instanceof tb){if(a.has(b)){var h=a.get(b);if(h instanceof ob){var l=Jb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof ob?a.M:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Jb(c))}if(a instanceof yb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Ub=function(a,b){a=G(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=G(this,b);c.set(a,d);return d},Vb=function(a){var b=Ba(this.g),c=rb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Wb=function(){return Ob},Xb=function(a){for(var b=G(this,a),c=0;c<b.length;c++){var d=G(this,b[c]);if(d instanceof qa)return d}},Yb=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=G(this,arguments[c+1]);Aa(b,d,e,!0)}}},Zb=function(){return Pb},$b=function(a,b,c){var d=new p;b=G(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,G(this,f))},ac=function(a,b){return G(this,a)/G(this,b)},bc=function(a,b){a=G(this,a);b=G(this,b);var c=a instanceof yb,d=b instanceof yb;return c||d?c&&d?a.Da==b.Da:!1:a==b},cc=function(a){for(var b,c=0;c<arguments.length;c++)b=
G(this,arguments[c]);return b};function dc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=rb(f,d);if(g instanceof qa){if("break"===g.g)break;if("return"===g.g)return g}}}function ec(a,b,c){if("string"===typeof b)return dc(a,function(){return b.length},function(f){return f},c);if(b instanceof tb||b instanceof p||b instanceof ob){var d=b.Ya(),e=d.length();return dc(a,function(){return e},function(f){return d.get(f)},c)}}
var fc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return ec(function(e){d.set(a,e);return d},b,c)},ic=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return ec(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},jc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return ec(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},lc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return kc(function(e){d.set(a,e);return d},b,c)},mc=
function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return kc(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},nc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return kc(function(e){var f=Ba(d);f.add(a,e);return f},b,c)};
function kc(a,b,c){if("string"===typeof b)return dc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof p)return dc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var oc=function(a,b,c,d){function e(n,q){for(var r=0;r<f.length();r++){var u=f.get(r);q.add(u,n.get(u))}}var f=G(this,a);if(!(f instanceof p))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=G(this,d);var h=Ba(g);for(e(g,h);qb(h,b);){var l=rb(h,d);if(l instanceof qa){if("break"===l.g)break;if("return"===l.g)return l}var m=Ba(g);e(h,m);qb(m,c);h=m}},pc=function(a){a=G(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},qc=function(a,b){var c;a=G(this,a);b=G(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof tb||a instanceof p||a instanceof ob)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:ra(b)&&(c=a[b]);else if(a instanceof yb)return;return c},rc=function(a,b){return G(this,a)>G(this,
b)},sc=function(a,b){return G(this,a)>=G(this,b)},tc=function(a,b){a=G(this,a);b=G(this,b);a instanceof yb&&(a=a.Da);b instanceof yb&&(b=b.Da);return a===b},uc=function(a,b){return!tc.call(this,a,b)},vc=function(a,b,c){var d=[];G(this,a)?d=G(this,b):c&&(d=G(this,c));var e=rb(this.g,d);if(e instanceof qa)return e},wc=function(a,b){return G(this,a)<G(this,b)},xc=function(a,b){return G(this,a)<=G(this,b)},yc=function(a,b){return G(this,a)%G(this,b)},Ac=function(a,b){return G(this,a)*G(this,b)},Bc=function(a){return-G(this,
a)},Cc=function(a){return!G(this,a)},Dc=function(a,b){return!bc.call(this,a,b)},Ec=function(){return null},Fc=function(a,b){return G(this,a)||G(this,b)},Gc=function(a,b){var c=G(this,a);G(this,b);return c},Hc=function(a){return G(this,a)},Ic=function(a){return Array.prototype.slice.apply(arguments)},Jc=function(a){return new qa("return",G(this,a))},Kc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
ob||a instanceof p||a instanceof tb)&&a.set(b,c);return c},Nc=function(a,b){return G(this,a)-G(this,b)},Oc=function(a,b,c){a=G(this,a);var d=G(this,b),e=G(this,c);if(!Ma(d)||!Ma(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===G(this,d[h]))if(f=G(this,e[h]),f instanceof qa){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=G(this,e[e.length-1]),f instanceof qa&&("return"===f.g||"continue"===
f.g)))return f},Pc=function(a,b,c){return G(this,a)?G(this,b):G(this,c)},Qc=function(a){a=G(this,a);return a instanceof ob?"function":typeof a},Rc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Sc=function(a,b,c,d){var e=G(this,d);if(G(this,c)){var f=rb(this.g,e);if(f instanceof qa){if("break"===f.g)return;if("return"===f.g)return f}}for(;G(this,a);){var g=rb(this.g,e);if(g instanceof qa){if("break"===g.g)break;if("return"===g.g)return g}G(this,
b)}},Tc=function(a){return~Number(G(this,a))},Uc=function(a,b){return Number(G(this,a))<<Number(G(this,b))},Vc=function(a,b){return Number(G(this,a))>>Number(G(this,b))},Wc=function(a,b){return Number(G(this,a))>>>Number(G(this,b))},Xc=function(a,b){return Number(G(this,a))&Number(G(this,b))},Yc=function(a,b){return Number(G(this,a))^Number(G(this,b))},Zc=function(a,b){return Number(G(this,a))|Number(G(this,b))};var ad=function(){this.g=new wb;$c(this)};ad.prototype.Uc=function(a){return bd(this.g.o(a))};
var dd=function(a,b){return bd(cd.g.D(a,b))},$c=function(a){var b=function(d,e){var f=a.g,g=String(e);vb.hasOwnProperty(d)&&xb(f,g||d,vb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){xb(a.g,String(d),e)};c(0,Qb);c(1,Sb);c(2,Tb);c(3,Ub);c(53,Vb);c(4,Wb);c(5,Xb);c(52,Yb);c(6,Zb);c(9,Xb);c(50,$b);c(10,ac);c(12,bc);c(13,cc);c(47,fc);c(54,ic);c(55,jc);c(63,oc);c(64,lc);c(65,mc);c(66,nc);c(15,pc);c(16,qc);c(17,qc);c(18,rc);c(19,sc);c(20,tc);c(21,uc);c(22,vc);
c(23,wc);c(24,xc);c(25,yc);c(26,Ac);c(27,Bc);c(28,Cc);c(29,Dc);c(45,Ec);c(30,Fc);c(32,Gc);c(33,Gc);c(34,Hc);c(35,Hc);c(46,Ic);c(36,Jc);c(43,Kc);c(37,Nc);c(38,Oc);c(39,Pc);c(40,Qc);c(41,Rc);c(42,Sc);c(58,Tc);c(57,Uc);c(60,Vc);c(61,Wc);c(56,Xc);c(62,Yc);c(59,Zc)},fd=function(){var a=cd,b=ed();xb(a.g,"require",b)},gd=function(a,b){a.g.g.M=b};
function bd(a){if(a instanceof qa||a instanceof ob||a instanceof p||a instanceof tb||a instanceof yb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var hd=function(){var a=function(b){return{toString:function(){return b}}};return{mg:a("consent"),ld:a("consent_always_fire"),De:a("convert_case_to"),Ee:a("convert_false_to"),Fe:a("convert_null_to"),Ge:a("convert_true_to"),He:a("convert_undefined_to"),yi:a("debug_mode_metadata"),Xa:a("function"),ah:a("instance_name"),dh:a("live_only"),eh:a("malware_disabled"),fh:a("metadata"),Bi:a("original_activity_id"),Ci:a("original_vendor_template_id"),hh:a("once_per_event"),wf:a("once_per_load"),Ei:a("priority_override"),
Fi:a("respected_consent_types"),Bf:a("setup_tags"),Cf:a("tag_id"),Df:a("teardown_tags")}}();
var id=[],jd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},md=function(a){return jd[a]},nd=/[\x00\x22\x26\x27\x3c\x3e]/g;var rd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,sd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},td=function(a){return sd[a]};id[7]=function(a){return String(a).replace(rd,td)};
id[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(rd,td)+"'"}};var zd=/['()]/g,Ad=function(a){return"%"+a.charCodeAt(0).toString(16)};id[12]=function(a){var b=
encodeURIComponent(String(a));zd.lastIndex=0;return zd.test(b)?b.replace(zd,Ad):b};var Bd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Cd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Dd=function(a){return Cd[a]};id[16]=function(a){return a};var Fd;
var Gd=[],Hd=[],Id=[],Jd=[],Kd=[],Ld={},Md,Nd,Od,Pd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Qd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Ld[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Hf&&b.Hf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===hd.ld.toString()&&a[f]){}return void 0!==d?d(e):Fd(c,e,b)},Sd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Rd(a[e],b,c));return d},Rd=function(a,b,c){if(Ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Rd(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Gd[f];if(!g||b.de(g))return;c[f]=!0;try{var h=Sd(g,b,c);h.vtp_gtmEventId=b.id;d=Qd(h,b);Od&&(d=Od.vh(d,h))}catch(y){b.Xf&&b.Xf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Rd(a[l],b,c)]=Rd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Rd(a[n],b,c);Nd&&(m=m||q===Nd.Gc);d.push(q)}return Nd&&m?Nd.yh(d):d.join("");case "escape":d=Rd(a[1],b,c);if(Nd&&Ma(a[1])&&"macro"===a[1][0]&&Nd.Oh(a))return Nd.ei(d);d=
String(d);for(var r=2;r<a.length;r++)id[a[r]]&&(d=id[a[r]](d));return d;case "tag":var u=a[1];if(!Jd[u])throw Error("Unable to resolve tag reference "+u+".");return d={Qf:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Td(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Td=function(a,b,c){try{return Md(Sd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Xd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};la(Xd,Error);function Yd(a,b){if(Ma(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Yd(a[c],b[c])}};var Zd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};la(Zd,Error);var ae=function(){return function(a,b){a instanceof Zd||(a=new Zd(a,$d));b&&a.g.push(b);throw a;}};function $d(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)La(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var de=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}for(var c=[],d=[],e=be(a),f=0;f<Hd.length;f++){var g=Hd[f],h=ce(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var n=[],q=0;q<Jd.length;q++)c[q]&&!d[q]&&(n[q]=!0);return n},ce=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},be=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Td(Id[c],a));return b[c]}};var ee={vh:function(a,b){b[hd.De]&&"string"===typeof a&&(a=1==b[hd.De]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(hd.Fe)&&null===a&&(a=b[hd.Fe]);b.hasOwnProperty(hd.He)&&void 0===a&&(a=b[hd.He]);b.hasOwnProperty(hd.Ge)&&!0===a&&(a=b[hd.Ge]);b.hasOwnProperty(hd.Ee)&&!1===a&&(a=b[hd.Ee]);return a}};var fe=function(){this.g={}};function ge(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Xd(c,d,g);}}function he(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ge(e,b,d,g);ge(f,b,d,g)}}}};var le=function(a){var b=ie.I,c=this;this.o=new fe;this.g={};var d={},e=he(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Sa(a,function(f,g){var h={};Sa(g,function(l,m){var n=je(l,m);h[l]=n.assert;d[l]||(d[l]=n.P)});c.g[f]=function(l,m){var n=h[l];if(!n)throw ke(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},ne=function(a){return me.g[a]||
function(){}};function je(a,b){var c=Pd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=ke;try{return Qd(c)}catch(d){return{assert:function(e){throw new Xd(e,{},"Permission "+e+" is unknown.");},P:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function ke(a,b,c){return new Xd(a,b,c)};var oe=!1;var pe={};pe.xi=Xa('');pe.Bh=Xa('');var qe=oe,re=pe.Bh,se=pe.xi;
var Ge=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},He=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Ge(b,"/*")&&(b=b.slice(0,-2));Ge(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Ie=/^[a-z0-9-]+$/i,Je=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Le=function(a,b){var c;if(!(c=!Ke(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Ie.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Je.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),r;var u=l.hostname,t=q;if(0!==t.indexOf("*."))r=u.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=u.toLowerCase().indexOf(t.toLowerCase());r=-1===v?!1:u.length===t.length?
!0:u.length!==t.length+v?!1:"."===u[v-1]}if(r){var w=n.slice(n.indexOf("/"));h=He(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Ke=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Me=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ne={Fn:"function",DustMap:"Object",List:"Array"},K=function(a,b,c){for(var d=0;d<b.length;d++){var e=Me.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof ob?n="Fn":l instanceof p?n="List":l instanceof tb?n="DustMap":
l instanceof yb&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Ne[h]||h)+".");}}};function Oe(a){return""+a}
function Pe(a,b){var c=[];return c};var Qe=function(a,b){var c=new ob(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=G(this,d[e]);return b.apply(this,d)});c.Za();return c},Re=function(a,b){var c=new tb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ka(e)?c.set(d,Qe(a+"_"+d,e)):(La(e)||A(e)||"boolean"==typeof e)&&c.set(d,e)}c.Za();return c};var Se=function(a,b){K(H(this),["apiName:!string","message:?string"],arguments);var c={},d=new tb;return d=Re("AssertApiSubject",c)};var Te=function(a,b){K(H(this),["actual:?*","message:?string"],arguments);var c={},d=new tb;
return d=Re("AssertThatSubject",c)};function Ue(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Ib(arguments[d],c));return Hb(a.apply(null,b))}}var $e=function(){for(var a=Math,b=Ve,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ue(a[e].bind(a)))}return c};var af=function(a){var b;return b};var bf=function(a){var b;return b};var cf=function(a){K(H(this),["uri:!string"],arguments);return encodeURI(a)};var df=function(a){K(H(this),["uri:!string"],arguments);return encodeURIComponent(a)};var ef=function(a){K(H(this),["message:?string"],arguments);};var ff=function(a,b){K(H(this),["min:!number","max:!number"],arguments);return Pa(a,b)};var gf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.rh.apply(null,Array.prototype.slice.call(arguments,1))};var hf=function(){gf(this,"read_container_data");var a=new tb;a.set("containerId",'GTM-NTQTB9V');a.set("version",'46');a.set("environmentName",'');a.set("debugMode",qe);a.set("previewMode",se);a.set("environmentMode",re);a.Za();return a};var jf=function(){return(new Date).getTime()};var kf=function(a){if(null===a)return"null";if(a instanceof p)return"array";if(a instanceof ob)return"function";if(a instanceof yb){a=a.Da;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var lf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(qe||se)&&a.call(this,e.message)}}}return{parse:b(function(c){return Hb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Ib(c))})}};var mf=function(a){return Wa(Ib(a,this.g))};var nf=function(a){return Number(Ib(a,this.g))};var of=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var pf=function(a,b,c){var d=null,e=!1;return e?d:null};var Ve="floor ceil round max min abs pow sqrt".split(" ");var qf=function(){var a={};return{Hh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ri:function(b,c){a[b]=c},reset:function(){a={}}}},rf=function(a,b){K(H(this),["apiName:!string","mock:?*"],arguments);};var sf={};
sf.keys=function(a){return new p};
sf.values=function(a){return new p};
sf.entries=function(a){return new p};sf.freeze=function(a){return a};var uf=function(){this.g={};this.o={};};uf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
uf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ka(b)?Qe(a,b):Re(a,b)};
var wf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ka(c)?Qe(b,c):Re(b,c)};function vf(a,b){var c=void 0;return c};function xf(){var a={};return a};var L={Nb:"_ee",Lc:"_syn_or_mod",Gi:"_uei",Fd:"_eu",Di:"_pci",sd:"event_callback",zc:"event_timeout",fa:"gtag.config",Aa:"gtag.get",za:"purchase",kb:"refund",Ua:"begin_checkout",ib:"add_to_cart",jb:"remove_from_cart",wg:"view_cart",Le:"add_to_wishlist",Ka:"view_item",Ke:"view_promotion",Je:"select_promotion",od:"select_item",vc:"view_item_list",Ie:"add_payment_info",vg:"add_shipping_info",Ma:"value_key",La:"value_callback",oa:"allow_ad_personalization_signals",Ad:"restricted_data_processing",Eb:"allow_google_signals",
qa:"cookie_expires",Hb:"cookie_update",Kb:"session_duration",Dc:"session_engaged_time",Ca:"user_properties",Oa:"transport_url",S:"ads_data_redaction",Ed:"user_data",Ac:"first_party_collection",C:"ad_storage",H:"analytics_storage",md:"region",Ce:"wait_for_update"};
L.pf=[L.za,L.kb,L.Ua,L.ib,L.jb,L.wg,L.Le,L.Ka,L.Ke,L.Je,L.vc,L.od,L.Ie,L.vg];L.nf=[L.oa,L.Eb,L.Hb];L.qf=[L.qa,L.zc,L.Kb,L.Dc];var zf=function(a){Da("GTM",a)};var Af=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Bf=new Af(1936,!0),Cf=new Af(364295992),Df=new Af(1933);var Ef=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ff=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Gf,Hf=function(){if(void 0===Gf){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:pa,createScript:pa,createScriptURL:pa})}catch(c){ma.console&&ma.console.error(c.message)}Gf=a}else Gf=a}return Gf};var Jf=function(a,b){this.g=b===If?a:""};Jf.prototype.toString=function(){return this.g+""};var If={},Kf=function(a){var b=Hf(),c=b?b.createScriptURL(a):a;return new Jf(c,If)};var Lf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Mf;a:{var Nf=ma.navigator;if(Nf){var Of=Nf.userAgent;if(Of){Mf=Of;break a}}Mf=""}var Pf=function(a){return-1!=Mf.indexOf(a)};var Rf=function(a,b,c){this.g=c===Qf?a:""};Rf.prototype.toString=function(){return this.g.toString()};var Sf=function(a){return a instanceof Rf&&a.constructor===Rf?a.g:"type_error:SafeHtml"},Qf={},Tf=function(a){var b=Hf(),c=b?b.createHTML(a):a;return new Rf(c,null,Qf)},Uf=new Rf(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,Qf);var Vf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Sf(Uf);return!c.parentElement}),Wf=function(a,b){if(Vf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Sf(b)},Zf=function(a,b){a.src=b instanceof Jf&&b.constructor===Jf?b.g:"type_error:TrustedResourceUrl";var c;var d=a.ownerDocument&&
a.ownerDocument.defaultView;d&&d!=ma?c=Xf(d.document):(null===Yf&&(Yf=Xf(ma.document)),c=Yf);var e=c;e&&a.setAttribute("nonce",e)},Yf=null,$f=/^[\w+/_-]+[=]{0,2}$/,Xf=function(a){if(!a.querySelector)return"";var b=a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&$f.test(c))return c}return""};var F=window,N=document,ag=navigator,bg=N.currentScript&&N.currentScript.src,cg=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},dg=function(a){var b=N.getElementsByTagName("script")[0]||N.body||N.head;b.parentNode.insertBefore(a,b)},eg=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},fg={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},gg=function(a,b,c,d){var e=N.createElement("script");
d&&Sa(d,function(f,g){f=f.toLowerCase();fg.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;Zf(e,Kf(a));eg(e,b);c&&(e.onerror=c);dg(e);return e},hg=function(){if(bg){var a=bg.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ig=function(a,b){var c=N.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=N.body&&N.body.lastChild||N.body||N.head;d.parentNode.insertBefore(c,
d);eg(c,b);void 0!==a&&(c.src=a);return c},jg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},kg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},lg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},P=function(a){F.setTimeout(a,0)},mg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},ng=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},og=function(a){var b=N.createElement("div"),c=Tf("A<div>"+a+"</div>");Wf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},pg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
qg=function(a){ag.sendBeacon&&ag.sendBeacon(a)||jg(a)},rg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var sg=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.o=function(){a[Df.g]=!0}};sg.g=void 0;sg.o=function(){return sg.g?sg.g:sg.g=new sg};var tg=function(a){return sg.o().g(a.g,a.defaultValue)};var ug=[];function vg(){var a=cg("google_tag_data",{});a.ics||(a.ics={entries:{},set:wg,update:xg,addListener:yg,notifyListeners:Eg,active:!1,usedDefault:!1});return a.ics}
function wg(a,b,c,d,e,f){var g=vg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&A(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:n,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&F.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Fg(a),Eg(),Da("TAGGING",2))},f)}}}
function xg(a,b){var c=vg();c.active=!0;if(void 0!=b){var d=Gg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Gg(a);f.quiet?(f.quiet=!1,Fg(a)):g!==d&&Fg(a)}}function yg(a,b){ug.push({Jf:a,Dh:b})}function Fg(a){for(var b=0;b<ug.length;++b){var c=ug[b];Ma(c.Jf)&&-1!==c.Jf.indexOf(a)&&(c.Zf=!0)}}function Eg(a){for(var b=0;b<ug.length;++b){var c=ug[b];if(c.Zf){c.Zf=!1;try{c.Dh({If:a})}catch(d){}}}}
var Gg=function(a){var b=vg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Hg=function(a){return(vg().entries[a]||{}).initial},Ig=function(a){return!(vg().entries[a]||{}).quiet},Jg=function(){return tg(Df)?vg().active:!1},Kg=function(){return vg().usedDefault},Lg=function(a,b){vg().addListener(a,b)},Mg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Ig(b[e]))return!0;return!1}if(c()){var d=!1;Lg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Ng=
function(a,b){if(!1===Gg(b)){var c=!1;Lg([b],function(d){!c&&Gg(b)&&(a(d),c=!0)})}};function Og(a){for(var b=[],c=0;c<Pg.length;c++){var d=a(Pg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Pg=[L.C,L.H],Qg=function(a){var b=a[L.md];b&&zf(40);var c=a[L.Ce];c&&zf(41);for(var d=Ma(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==L.md&&f!==L.Ce)if(-1<Na(Pg,f)){var g=f,h=a[f],l=d[e];vg().set(g,h,l,"US","US-PA",c)}else{}},Rg=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Na(Pg,c)){var d=c,e=a[c];vg().update(d,e)}else{}vg().notifyListeners(b)},Sg=function(a){var b=Gg(a);return void 0!=b?b:!0},Tg=function(){return"G1"+Og(Gg)},Ug=function(a,b){Lg(a,b)},Vg=function(a,b){Mg(a,b)};var Xg=function(a){return Wg?N.querySelectorAll(a):null},Yg=function(a,b){if(!Wg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!N.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Zg=!1;if(N.querySelectorAll)try{var $g=N.querySelectorAll(":root");$g&&1==$g.length&&$g[0]==N.documentElement&&(Zg=!0)}catch(a){}var Wg=Zg;var ah=function(a){if(N.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var bh=function(){var a=N.body,b=N.documentElement||a&&a.parentElement,c,d;if(N.compatMode&&"BackCompat"!==N.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};zf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},ch=function(a){var b=bh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var dh=[],eh=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),fh=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<dh.length;f++)if(!dh[f])return dh[f]=d,f;return dh.push(d)-1},gh=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},n={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:$a()};P(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=ch(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},hh=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(eh){var e=!1;P(function(){e||
gh(a,b,c)()});return fh(function(f){e=!0;for(var g={zb:0};g.zb<f.length;g={zb:g.zb},g.zb++)P(function(h){return function(){return a(f[h.zb])}}(g))},b,c)}return F.setInterval(gh(a,b,c),1E3)},ih=function(a){eh?0<=a&&a<dh.length&&dh[a]&&(dh[a].disconnect(),dh[a]=void 0):F.clearInterval(a)};var jh=/:[0-9]+$/,kh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},nh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=lh(a.protocol)||lh(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||F.location.hostname).replace(jh,"").toLowerCase());return mh(a,b,c,d,e)},mh=function(a,b,c,d,e){var f,g=lh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=oh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(jh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Da("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Na(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=kh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},lh=function(a){return a?a.replace(":",
"").toLowerCase():""},oh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},ph=function(a){var b=N.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Da("TAGGING",1),c="/"+c);var d=b.hostname.replace(jh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},qh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=ph(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var rh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),sh=new RegExp(/support|noreply/i),th="SCRIPT STYLE IMG SVG PATH BR".split(" "),uh=["BR"];function vh(a){var b;if(a===N.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=vh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function wh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function xh(a){if(0==a.length)return null;var b;b=wh(a,function(c){return!sh.test(c.kd)});b=wh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=wh(b,function(c){return!ah(c.element)});return b[0]}
function yh(){var a;var b=[],c=N.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=th.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=uh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,n=[],q=0;q<m.length;q++){var r=m[q],u=r.textContent;r.value&&(u=r.value);if(u){var t=u.match(rh);if(t){var v=
t[0],w;if(F.location){var y=mh(F.location,"host",!0);w=0<=v.toLowerCase().indexOf(y)}else w=!1;w||n.push({element:r,kd:v})}}}var x=xh(n),z=[];if(x){var B=x.element;z.push({kd:x.kd,querySelector:vh(B),tagName:B.tagName,isVisible:!ah(B),type:1,Wf:!0})}return{elements:z,status:10<n.length?"3":l.status}}var ie={},Mh=null,Nh=Math.random();ie.I="GTM-NTQTB9V";ie.Kc="4s0";ie.Ai="";ie.og="ChEI8JDehAYQoeWjmYz8rs2wARIkAJKRToNfsolVus1vcbwMsJEY9/V5ICcuIkM873V8Wr7Yf2nuGgKDYg\x3d\x3d";var Oh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Ph={__paused:!0,__tg:!0},Qh;for(Qh in Oh)Oh.hasOwnProperty(Qh)&&(Ph[Qh]=!0);var Rh="www.googletagmanager.com/gtm.js";
var Sh=Rh,Th=Xa(""),Uh=null,Vh=null,Wh="//www.googletagmanager.com/a?id="+ie.I+"&cv=46",Xh={},Yh={},Zh=function(){var a=Mh.sequence||1;Mh.sequence=a+1;return a};ie.ng="";var $h={},ai=new Qa,bi={},ci={},fi={name:"dataLayer",set:function(a,b){J(kb(a,b),bi);di()},get:function(a){return ei(a,2)},reset:function(){ai=new Qa;bi={};di()}},ei=function(a,b){return 2!=b?ai.get(a):gi(a)},gi=function(a,b){var c=a.split(".");b=b||[];for(var d=bi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Na(b,d))return}return d},hi=function(a,b){ci.hasOwnProperty(a)||(ai.set(a,b),J(kb(a,b),bi),di())},ii=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=ei(c,1);if(Ma(d)||Gb(d))d=J(d);ci[c]=d}},di=function(a){Sa(ci,function(b,c){ai.set(b,c);J(kb(b,void 0),bi);J(kb(b,c),bi);a&&delete ci[b]})},ki=function(a,b,c){$h[a]=$h[a]||{};$h[a][b]=ji(b,c)},ji=function(a,b){var c,d=1!==(void 0===b?2:b)?gi(a):ai.get(a);"array"===Eb(d)||"object"===Eb(d)?c=J(d):c=d;return c},li=function(a,b){if($h[a])return $h[a][b]},mi=function(a,b){$h[a]&&delete $h[a][b]};var pi={},qi=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===pi[a]&&(pi[a]=Math.floor(Math.random()*b));return pi[a]};var ri=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function si(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function ti(a){return tg(Cf)?"null"!==a.origin:!0};var wi=function(a,b,c,d){return ui(d)?si(a,String(b||vi()),c):[]},zi=function(a,b,c,d,e){if(ui(e)){var f=xi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=yi(f,function(g){return g.Tc},b);if(1===f.length)return f[0].id;f=yi(f,function(g){return g.fc},c);return f[0]?f[0].id:void 0}}};function Ai(a,b,c,d){var e=vi(),f=window;ti(f)&&(f.document.cookie=a);var g=vi();return e!=g||void 0!=c&&0<=wi(b,g,!1,d).indexOf(c)}
var Ei=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!ui(c.Ia))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Bi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Yh);g=e(g,"samesite",
c.ki);c.mi&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=Ci(),q=void 0,r=!1,u=0;u<n.length;++u){var t="none"!==n[u]?n[u]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!Di(t,c.path)&&Ai(v,a,b,c.Ia))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Di(m,c.path)?1:Ai(g,a,b,c.Ia)?0:1},Fi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ei(a,b,c)};
function yi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function xi(a,b,c){for(var d=[],e=wi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Tc:1*l[0]||1,fc:1*l[1]||1}))}}return d}
var Bi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Gi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Hi=/(^|\.)doubleclick\.net$/i,Di=function(a,b){return Hi.test(window.document.location.hostname)||"/"===b&&Gi.test(a)},vi=function(){return ti(window)?window.document.cookie:""},Ci=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Hi.test(e)||Gi.test(e)||a.push("none");return a},ui=function(a){if(!tg(Df)||!a||!Jg())return!0;if(!Ig(a))return!1;var b=Gg(a);return null==b?!0:!!b};var Ii=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Ji=function(){return Pf("iPhone")&&!Pf("iPod")&&!Pf("iPad")};Pf("Opera");Pf("Trident")||Pf("MSIE");Pf("Edge");!Pf("Gecko")||-1!=Mf.toLowerCase().indexOf("webkit")&&!Pf("Edge")||Pf("Trident")||Pf("MSIE")||Pf("Edge");-1!=Mf.toLowerCase().indexOf("webkit")&&!Pf("Edge")&&Pf("Mobile");Pf("Macintosh");Pf("Windows");Pf("Linux")||Pf("CrOS");var Ki=ma.navigator||null;Ki&&(Ki.appVersion||"").indexOf("X11");Pf("Android");Ji();Pf("iPad");Pf("iPod");Ji()||Pf("iPad")||Pf("iPod");Mf.toLowerCase().indexOf("kaios");var Li=function(){var a=F;if(!a.crypto)return Math.random();try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Mi=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var Ni=function(a,b){for(var c=Math.round(2147483647*(b?Li():Math.random())),d=ti(F)?N.cookie:null,e=""+(a?"":ag.userAgent)+(d||"")+(N.referrer||""),f=e.length,g=F.history.length;0<g;)e+=g--^f++;return[c^ri(e)&2147483647,Math.round($a()/1E3)].join(".")},Qi=function(a,b,c,d,e){var f=Oi(b);return zi(a,f,Pi(c),d,e)},Ri=function(a,b,c,d){var e=""+Oi(c),f=Pi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Oi=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Pi=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Si(a,b,c){var d,e=Number(null!=a.wb?a.wb:void 0);0!==e&&(d=new Date((b||$a())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ti=["1"],Ui={},Yi=function(a){var b=Vi(a.prefix);if(!Ui[b]&&!Wi(b,a.path,a.domain)){var c=Ni();if(0===Xi(b,c,a)){var d=cg("google_tag_data",{});d._gcl_au?Da("GTM",57):d._gcl_au=c}Wi(b,a.path,a.domain)}};function Xi(a,b,c){var d=Ri(b,"1",c.domain,c.path),e=Si(c);e.Ia="ad_storage";return Fi(a,d,e)}function Wi(a,b,c){var d=Qi(a,b,c,Ti,"ad_storage");d&&(Ui[a]=d);return d}function Vi(a){return(a||"_gcl")+"_au"};var Zi=function(a){for(var b=[],c=N.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ye:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function $i(a,b){var c=Zi(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].ye]||(d[c[e].ye]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),la:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].ye].push(g)}}return d};function aj(){for(var a=bj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function cj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var bj,dj;
function ej(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=dj[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}bj=bj||cj();dj=dj||aj();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var fj;var jj=function(){var a=gj,b=hj,c=ij(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){kg(N,"mousedown",d);kg(N,"keyup",d);kg(N,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},kj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};ij().decorators.push(f)},lj=function(a,b,c){for(var d=ij().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==N.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&db(e,g.callback())}}return e},ij=function(){var a=cg("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var mj=/(.*?)\*(.*?)\*(.*)/,nj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,oj=/^(?:www\.|m\.|amp\.)+/,pj=/([^?#]+)(\?[^#]*)?(#.*)?/;function qj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var xj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);bj=bj||cj();dj=dj||aj();for(var l=[],m=0;m<h.length;m+=3){var n=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),u=n?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=r>>2,w=(r&3)<<4|u>>4,y=(u&15)<<2|t>>6,x=t&63;q||(x=64,n||(y=64));l.push(bj[v],bj[w],bj[y],bj[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",rj(z),
z].join("*")},rj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=fj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}fj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^fj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},zj=function(){return function(a){var b=ph(F.location.href),
c=b.search.replace("?",""),d=kh(c,"_gl",!1,!0)||"";a.query=yj(d)||{};var e=nh(b,"fragment").match(qj("_gl"));a.fragment=yj(e&&e[3]||"")||{}}},Aj=function(a){var b=zj(),c=ij();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(db(d,e.query),a&&db(d,e.fragment));return d},yj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=mj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=
0;n<b;++n)if(m===rj(h,n)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=ej(r[u+1]);return q}}}}catch(t){}};function Bj(a,b,c,d){function e(n){var q=n,r=qj(a).exec(q),u=q;if(r){var t=r[2],v=r[4];u=r[1];v&&(u=u+t+v)}n=u;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=pj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Cj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=lj(b,1,c),e=lj(b,2,c),f=lj(b,3,c);if(hb(d)){var g=xj(d);c?Dj("_gl",g,a):Ej("_gl",g,a,!1)}if(!c&&hb(e)){var h=xj(e);Ej("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Ej(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Dj(m,n,q);break a}}"string"==typeof q&&Bj(m,n,q,void 0)}}
function Ej(a,b,c,d){if(c.href){var e=Bj(a,b,c.href,void 0===d?!1:d);Lf.test(e)&&(c.href=e)}}
function Dj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=N.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Bj(a,b,c.action);Lf.test(m)&&(c.action=m)}}}
var gj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Cj(e,e.hostname)}}catch(g){}},hj=function(a){try{if(a.action){var b=nh(ph(a.action),"host");Cj(a,b)}}catch(c){}},Fj=function(a,b,c,d){jj();kj(a,b,"fragment"===c?2:1,!!d,!1)},Gj=function(a,b){jj();kj(a,[mh(F.location,"host",!0)],b,!0,!0)},Hj=function(){var a=N.location.hostname,b=nj.exec(N.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(oj,""),l=e.replace(oj,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},Ij=function(a,b){return!1===a?!1:a||b||Hj()};var Jj={};var Kj=/^\w+$/,Lj=/^[\w-]+$/,Mj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Nj=function(){if(!tg(Df)||!Jg())return!0;var a=Gg("ad_storage");return null==a?!0:!!a},Oj=function(a,b){Ig("ad_storage")?Nj()?a():Ng(a,"ad_storage"):b?Da("TAGGING",3):Mg(function(){Oj(a,!0)},["ad_storage"])},Qj=function(a){return Pj(a).map(function(b){return b.la})},Pj=function(a){var b=[];if(!ti(F)||!N.cookie)return b;var c=wi(a,N.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{qc:d.qc},e++){var f=Rj(c[e]);if(null!=f){var g=f,h=g.version;d.qc=g.la;var l=g.timestamp,m=g.labels,n=Oa(b,function(q){return function(r){return r.la===q.qc}}(d));n?(n.timestamp=Math.max(n.timestamp,l),n.labels=Sj(n.labels,m||[])):b.push({version:h,la:d.qc,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Tj(b)};function Sj(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Uj(a){return a&&"string"==typeof a&&a.match(Kj)?a:"_gcl"}
var Wj=function(){var a=ph(F.location.href),b=nh(a,"query",!1,void 0,"gclid"),c=nh(a,"query",!1,void 0,"gclsrc"),d=nh(a,"query",!1,void 0,"wbraid"),e=nh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||kh(f,"gclid",!1,void 0);c=c||kh(f,"gclsrc",!1,void 0);d=d||kh(f,"wbraid",!1,void 0)}return Vj(b,c,e,d)},Vj=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Lj.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(Lj))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Xj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Zj=function(a){var b=Wj();Oj(function(){Yj(b,a)})};
function Yj(a,b,c,d){function e(n,q){var r=ak(n,f);r&&(Fi(r,q,g),h=!0)}b=b||{};d=d||[];var f=Uj(b.prefix);c=c||$a();var g=Si(b,c,!0);g.Ia="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(n){var q=["GCL",l,n];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==Jj.enable_gbraid_cookie_write?0:Jj.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var ck=function(a,b){var c=Aj(!0);Oj(function(){for(var d=Uj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Mj[f]){var g=ak(f,d),h=c[g];if(h){var l=Math.min(bk(h),$a()),m;b:{var n=l,q=g;if(ti(F))for(var r=wi(q,N.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(bk(r[u])>n){m=!0;break b}m=!1}if(!m){var t=Si(b,l,!0);t.Ia="ad_storage";Fi(g,h,t)}}}}Yj(Vj(c.gclid,c.gclsrc),b)})},ak=function(a,b){var c=Mj[a];if(void 0!==c)return b+c},bk=function(a){return 0!==dk(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Rj(a){var b=dk(a.split("."));return 0===b.length?null:{version:b[0],la:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function dk(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Lj.test(a[2])?[]:a}
var ek=function(a,b,c,d,e){if(Ma(b)&&ti(F)){var f=Uj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=ak(a[l],f);if(m){var n=wi(m,N.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};Oj(function(){Fj(g,b,c,d)})}},Tj=function(a){return a.filter(function(b){return Lj.test(b.la)})},fk=function(a,b){if(ti(F)){for(var c=Uj(b.prefix),d={},e=0;e<a.length;e++)Mj[a[e]]&&(d[a[e]]=Mj[a[e]]);Oj(function(){Sa(d,function(f,g){var h=wi(c+g,N.cookie,void 0,"ad_storage");h.sort(function(u,
t){return bk(t)-bk(u)});if(h.length){var l=h[0],m=bk(l),n=0!==dk(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==dk(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];Yj(q,b,m,n)}})})}};function gk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var hk=function(a){function b(e,f,g){g&&(e[f]=g)}if(Jg()){var c=Wj();if(gk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Gj(function(){return d},3);Gj(function(){var e={};return e._up="1",e},1)}}};function ik(a,b){var c=Uj(b),d=ak(a,c);if(!d)return 0;for(var e=Pj(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function jk(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var kk=/^\d+\.fls\.doubleclick\.net$/;function lk(a,b){Ig(L.C)?Sg(L.C)?a():Ng(a,L.C):b?zf(42):Vg(function(){lk(a,!0)},[L.C])}function mk(a){var b=ph(F.location.href),c=nh(b,"host",!1);if(c&&c.match(kk)){var d=nh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function nk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=mk("gcl"+a);if(d)return d.split(".")}var e=Uj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Sg(L.C)&&c,g;g=Wj()[a]||[];if(0<g.length)return f?["0"]:g}var h=ak(a,e);return h?Qj(h):[]}function ok(a){var b=[];Sa(a,function(c,d){d=Tj(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].la);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var pk=function(a){var b=mk("gac");return b?!Sg(L.C)&&a?"0":decodeURIComponent(b):ok(Nj()?$i():{})},qk=function(a){var b=mk("gacgb");return b?!Sg(L.C)&&a?"0":decodeURIComponent(b):ok(Nj()?$i("_gac_gb",!0):{})},rk=function(a,b,c){var d=Wj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Xj(h,c)||e.push({la:f,Yd:h});!g||c&&"dc"!==c||e.push({la:g,Yd:"ds"});lk(function(){Yi(b);var l=Ui[Vi(b.prefix)],m=!1;if(l&&0<e.length)for(var n=Mh.joined_auid=Mh.joined_auid||{},q=0;q<e.length;q++){var r=e[q],u=r.la,t=r.Yd,v=(b.prefix||"_gcl")+"."+t+"."+u;if(!n[v]){var w="https://adservice.google.com/pagead/regclk";w="gb"===t?w+"?gbraid="+u+"&auid="+l:w+"?gclid="+u+"&auid="+l+"&gclsrc="+t;qg(w);m=n[v]=!0}}null==a&&(a=
m);if(a&&l){var y=Vi(b.prefix),x=Ui[y];x&&Xi(y,x,b)}})},sk=function(a){var b;if(mk("gclaw")||mk("gac")||0<(Wj().aw||[]).length)b=!1;else{var c;if(0<(Wj().gb||[]).length)c=!0;else{var d=Math.max(ik("aw",a),jk(Nj()?$i():{}));c=Math.max(ik("gb",a),jk(Nj()?$i("_gac_gb",!0):{}))>d}b=c}return b};var tk=/[A-Z]+/,uk=/\s/,vk=function(a){if(A(a)&&(a=Za(a),!uk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(tk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],F:d}}}}},xk=function(a){for(var b={},c=0;c<a.length;++c){var d=vk(a[c]);d&&(b[d.id]=d)}wk(b);var e=[];Sa(b,function(f,g){e.push(g)});return e};
function wk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.F[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var yk=function(){var a=!1;return a};var Ak=function(a,b,c,d){return(2===zk()||d||"http:"!=F.location.protocol?a:b)+c},zk=function(){var a=hg(),b;if(1===a)a:{var c=Sh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=N.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Ok=function(a){if(Sg(L.C))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=qh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=qh(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},Pk=function(){var a;if(!(a=Th)){var b;if(!0===F._gtmdgs)b=!0;else{var c=ag&&ag.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Wa("1");return qi(1,100)<d?qi(2,2):-1},Qk=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Rk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Sk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Tk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Uk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Vk=function(){var a=!1;return a},Xk=function(a){var b=ei("gtm.allowlist")||ei("gtm.whitelist");b&&zf(9);Vk()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&ib(Ya(b),Sk),d=ei("gtm.blocklist")||
ei("gtm.blacklist");d||(d=ei("tagTypeBlacklist"))&&zf(3);d?zf(8):d=[];Wk()&&(d=Ya(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Na(Ya(d),"google")&&zf(2);var e=d&&ib(Ya(d),Tk),f={};return function(g){var h=g&&g[hd.Xa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Yh[h]||[],m=a(h,l);if(b){var n;if(n=
m)a:{if(0>Na(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Na(c,l[q])){zf(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var r=!1;if(d){var u=0<=Na(e,h);if(u)r=u;else{var t=Ra(e,l||[]);t&&zf(10);r=t}}var v=!m||r;v||!(0<=Na(l,"sandboxedScripts"))||c&&-1!==Na(c,"sandboxedScripts")||(v=Ra(e,Uk));return f[h]=v}},Wk=function(){return Rk.test(F.location&&F.location.hostname)};var Yk={active:!0,isAllowed:function(){return!0}},Zk=function(a){var b=Mh.zones;return b?b.checkState(ie.I,a):Yk},$k=function(a){var b=Mh.zones;!b&&a&&(b=Mh.zones=a());return b};var al=function(){},bl=function(){};var cl=!1,dl=0,el=[];function fl(a){if(!cl){var b=N.createEventObject,c="complete"==N.readyState,d="interactive"==N.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){cl=!0;for(var e=0;e<el.length;e++)P(el[e])}el.push=function(){for(var f=0;f<arguments.length;f++)P(arguments[f]);return 0}}}function gl(){if(!cl&&140>dl){dl++;try{N.documentElement.doScroll("left"),fl()}catch(a){F.setTimeout(gl,50)}}}var hl=function(a){cl?a():el.push(a)};var jl=function(a,b){this.g=!1;this.D=[];this.L={tags:[]};this.M=!1;this.o=this.s=0;il(this,a,b)},kl=function(a,b,c,d){if(Ph.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Gb(d)&&(e=J(d,e));e.id=c;e.status="timeout";return a.L.tags.push(e)-1},ll=function(a,b,c,d){var e=a.L.tags[b];e&&(e.status=c,e.executionTime=d)},ml=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},il=function(a,b,c){Ka(b)&&a.Tb(b);c&&F.setTimeout(function(){return ml(a)},Number(c))};
jl.prototype.Tb=function(a){var b=this,c=bb(function(){return P(function(){a(ie.I,b.L)})});this.g?c():this.D.push(c)};var nl=function(a){a.s++;return bb(function(){a.o++;a.M&&a.o>=a.s&&ml(a)})};var ol=function(){function a(d){return!La(d)||0>d?0:d}if(!Mh._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=La(fi.get("gtm.start"))?fi.get("gtm.start"):0;Mh._li={cst:a(c-b),cbt:a(Vh-b)}}};var sl={},tl=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},ul=!1;
var vl=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||zf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}ol();return F[b]},wl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=tl();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},xl=function(a){if(!Jg())return;var b=tl();b(a+"require","linker");b(a+
"linker:passthrough",!0);};
var zl=function(a){},yl=function(){return F.GoogleAnalyticsObject||"ga"},Al=function(a,b){return function(){var c=tl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Fl=function(){return"&tc="+Jd.filter(function(a){return a}).length},Il=function(){2022<=Gl().length&&Hl()},Kl=function(){Jl||(Jl=F.setTimeout(Hl,500))},Hl=function(){Jl&&(F.clearTimeout(Jl),Jl=void 0);void 0===Ll||Ml[Ll]&&!Nl&&!Ol||(Pl[Ll]||Ql.Ph()||0>=Rl--?(zf(1),Pl[Ll]=!0):(Ql.gi(),jg(Gl()),Ml[Ll]=!0,Sl=Tl=Ul=Ol=Nl=""))},Gl=function(){var a=Ll;if(void 0===a)return"";var b=Fa("GTM"),c=Fa("TAGGING");return[Vl,Ml[a]?"":"&es=1",Wl[a],b?"&u="+b:"",c?"&ut="+c:"",Fl(),Nl,Ol,Ul?Ul:"",Tl,Sl,"&z=0"].join("")},
Yl=function(){Vl=Xl()},Xl=function(){return[Wh,"&v=3&t=t","&pid="+Pa(),"&rv="+ie.Kc].join("")},Zl="0.005000">Math.random(),Vl=Xl(),Ml={},Nl="",Ol="",Sl="",Tl="",Ul="",Ll=void 0,Wl={},Pl={},Jl=void 0,Ql=function(a,b){var c=0,d=0;return{Ph:function(){if(c<a)return!1;$a()-d>=b&&(c=0);return c>=a},gi:function(){$a()-d>=b&&(c=0);c++;d=$a()}}}(2,1E3),Rl=1E3,$l=function(a,b,c){if(Zl&&!Pl[a]&&b){a!==Ll&&(Hl(),Ll=a);var d,e=String(b[hd.Xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Nl=Nl?Nl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Ld[g]?"1":"2")+d;Sl=Sl?Sl+"."+h:"&ti="+h;Kl();Il()}},am=function(a,b,c){if(Zl&&!Pl[a]){a!==Ll&&(Hl(),Ll=a);var d=c+b;Ol=Ol?Ol+"."+d:"&epr="+d;Kl();Il()}},bm=function(a,b,c){};
var cm=function(){return!1},dm=function(){var a={};return function(b,c,d){}};function em(a,b,c,d){var e=Jd[a],f=fm(a,b,c,d);if(!f)return null;var g=Rd(e[hd.Bf],c,[]);if(g&&g.length){var h=g[0];f=em(h.index,{onSuccess:f,onFailure:1===h.Qf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function fm(a,b,c,d){function e(){if(f[hd.eh])h();else{var w=Sd(f,c,[]);var z=kl(c.Ra,String(f[hd.Xa]),Number(f[hd.Cf]),w[hd.fh]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=$a()-E;$l(c.id,Jd[a],"5");ll(c.Ra,z,"success",
D);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=$a()-E;$l(c.id,Jd[a],"6");ll(c.Ra,z,"failure",D);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;$l(c.id,f,"1");var C=function(){var D=$a()-E;$l(c.id,f,"7");ll(c.Ra,z,"exception",D);B||(B=!0,h())};var E=$a();try{Qd(w,c)}catch(D){C(D)}}}var f=Jd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.de(f))return null;var m=Rd(f[hd.Df],c,[]);if(m&&m.length){var n=m[0],q=em(n.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.Qf?l:q}if(f[hd.wf]||f[hd.hh]){var r=f[hd.wf]?Kd:
c.si,u=g,t=h;if(!r[a]){e=bb(e);var v=gm(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](u,t)}}return e}function gm(a,b,c){var d=[],e=[];b[a]=hm(d,e,c);return{onSuccess:function(){b[a]=im;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=jm;for(var f=0;f<e.length;f++)e[f]()}}}function hm(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function im(a){a()}function jm(a,b){b()};var mm=function(a,b){for(var c=[],d=0;d<Jd.length;d++)if(a[d]){var e=Jd[d];var f=nl(b.Ra);try{var g=em(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,n=e["function"];if(!n)throw"Error: No function name given for function call.";var q=Ld[n];l.call(h,{gg:m,$f:q?q.priorityOverride||0:0,Uc:g})}else km(d,b),f()}catch(t){f()}}var r=b.Ra;r.M=!0;r.o>=r.s&&ml(r);c.sort(lm);for(var u=0;u<c.length;u++)c[u].Uc();
return 0<c.length};function lm(a,b){var c,d=b.$f,e=a.$f;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.gg,h=b.gg;f=g>h?1:g<h?-1:0}return f}function km(a,b){if(!Zl)return;var c=function(d){var e=b.de(Jd[d])?"3":"4",f=Rd(Jd[d][hd.Bf],b,[]);f&&f.length&&c(f[0].index);$l(b.id,Jd[d],e);var g=Rd(Jd[d][hd.Df],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var nm=!1,tm=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(nm)return!1;nm=!0}var d=Zk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=Zk(Number.MAX_SAFE_INTEGER)}Zl&&!Pl[b]&&Ll!==b&&(Hl(),Ll=b,Sl=Nl="",Wl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Kl());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,de:Xk(d.isAllowed),si:[],Xf:function(){zf(6)},Hf:om(b),Ra:new jl(f,
g)};qm(b,h.Ra);var l=de(h);e&&(l=rm(l));var m=mm(l,h);"gtm.js"!==c&&"gtm.sync"!==c||zl(ie.I);switch(c){case "gtm.init":m&&zf(20)}return sm(l,m)};function om(a){return function(b){Zl&&(Kb(b)||bm(a,"input",b))}}
function qm(a,b){ki(a,"event",1);ki(a,"ecommerce",1);ki(a,"gtm");ki(a,"eventModel");}function pm(){var a={};a.event=ji("event",1);a.ecommerce=ji("ecommerce",1);a.gtm=ji("gtm");a.eventModel=ji("eventModel");return a}function rm(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Oh[String(Jd[c][hd.Xa])]&&(b[c]=!0);return b}
function sm(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Jd[c]&&!Ph[String(Jd[c][hd.Xa])])return!0;return!1}function um(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return ph(""+c+b).href}}function vm(a,b){return wm()?um(a,b):void 0}function wm(){var a=!1;return a};var xm=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},ym=function(a){var b=new xm;b.eventModel=a;return b},zm=function(a,b){a.targetConfig=b;return a},Am=function(a,b){a.containerConfig=b;return a},Bm=function(a,b){a.remoteConfig=b;return a},Cm=function(a,b){a.globalConfig=
b;return a},Dm=function(a,b){a.onSuccess=b;return a},Em=function(a,b){a.setContainerTypeLoaded=b;return a},Fm=function(a,b){a.getContainerTypeLoaded=b;return a},Gm=function(a,b){a.onFailure=b;return a};xm.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Hm=function(a){function b(e){Sa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Sa(c,function(e){d.push(e)});return d};var Im;if(3===ie.Kc.length)Im="g";else{var Jm="G";Im=Jm}
var Km={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Im,OPT:"o"},Lm=function(a){var b=ie.I.split("-"),c=b[0].toUpperCase(),d=Km[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===ie.Kc.length){var g="w";f="2"+g}else f="";return f+d+ie.Kc+e};var Mm=function(){};var Nm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Om=function(a,b){this.o=a;this.g=null;this.D={};this.M=0;this.L=void 0===b?500:b;this.s=null};la(Om,Mm);
var Qm=function(a){return"function"===typeof a.o.__tcfapi||null!=Pm(a)};
Om.prototype.addEventListener=function(a){var b={},c=Ff(function(){return a(b)}),d=0;-1!==this.L&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.L));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Nm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Rm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Om.prototype.removeEventListener=function(a){a&&a.listenerId&&Rm(this,"removeEventListener",null,a.listenerId)};
var Tm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Sm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||tg(Bf)&&"CH"===a.publisherCC)?!0:m&&Sm(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Sm(a.purpose.legitimateInterests,b)&&Sm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Sm=function(a,b){return!(!a||!a[b])},Rm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Pm(a)){Um(a);var f=++a.M;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Pm=function(a){if(a.g)return a.g;a.g=Mi(a.o,"__tcfapiLocator");return a.g},
Um=function(a){a.s||(a.s=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},Ii(a.o,a.s))};var Vm=!0;Vm=!1;var Wm={1:0,3:0,4:0,7:3,9:3,10:3};function Xm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Ym=Xm("",550),Zm=Xm("",500);function $m(){var a=Mh.tcf||{};return Mh.tcf=a}
var an=function(a,b){this.s=a;this.g=b;this.o=$a();},bn=function(a){},cn=function(a){},jn=function(){var a=$m(),b=new Om(F,Vm?3E3:-1),c=new an(b,a);if((dn()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||Qm(b))){a.active=!0;a.ic={};en();var d=null;Vm?d=F.setTimeout(function(){fn(a);gn(a);d=null},Zm):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)fn(a),gn(a),bn(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=hn(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Wm)if(Wm.hasOwnProperty(h))if("1"===h){var l,m=e,n=!0;n=void 0===n?!1:n;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Nm(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!n||"string"!==typeof m.tcString||!m.tcString.length?!0:Tm(m,"1",0):!1;g["1"]=l}else g[h]=Tm(e,h,Wm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.ic=f,gn(a),bn(c))}}),cn(c)}catch(e){d&&(clearTimeout(d),d=null),fn(a),gn(a)}}};function fn(a){a.type="e";a.tcString="tcunavailable";Vm&&(a.ic=hn())}function en(){var a={};Qg((a.ad_storage="denied",a.wait_for_update=Ym,a))}
var dn=function(){var a=!1;a=!0;return a};function hn(){var a={},b;for(b in Wm)Wm.hasOwnProperty(b)&&(a[b]=!0);return a}function gn(a){var b={};Rg((b.ad_storage=a.ic["1"]?"granted":"denied",b))}
var kn=function(){var a=$m();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},ln=function(){var a=$m();return a.active?a.tcString||"":""},mn=function(){var a=$m();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},nn=function(a){if(!Wm.hasOwnProperty(String(a)))return!0;var b=$m();return b.active&&b.ic?!!b.ic[String(a)]:!0};var on=!1;function pn(a){var b=String(F.location).split(/[?#]/)[0],c=ie.og||F._CONSENT_MODE_SALT;return a?c?String(ri(b+a+c)):"0":""}
function qn(a){function b(t){var v;Mh.reported_gclid||(Mh.reported_gclid={});v=Mh.reported_gclid;var w;w=on&&g&&(!Jg()||Sg(L.C))?l+"."+(f.prefix||"_gcl")+(t?"gcu":"gcs"):l+(t?"gcu":"gcs");if(!v[w]){v[w]=!0;var y=[],x={},z=function(U,V){V&&(y.push(U+"="+encodeURIComponent(V)),x[U]=!0)},B="https://www.google.com";if(Jg()){var C=Sg(L.C);z("gcs",Tg());t&&z("gcu","1");Kg()&&z("gcd","G1"+Og(Hg));
Mh.dedupe_gclid||(Mh.dedupe_gclid=""+Ni());z("rnd",Mh.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Sg(L.C)){var E=Qj("_gcl_aw");z("gclaw",E.join("."))}z("url",String(F.location).split(/[?#]/)[0]);z("dclid",rn(d,n));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
z("gdpr_consent",ln()),z("gdpr",mn());"1"===Aj(!1)._up&&z("gtm_up","1");z("gclid",rn(d,l));z("gclsrc",m);if(!(x.gclid||x.dclid||x.gclaw)&&(z("gbraid",rn(d,q)),!x.gbraid&&Jg()&&Sg(L.C))){var I=Qj("_gcl_gb");z("gclgb",I.join("."))}z("gtm",Lm(!e));on&&g&&Sg(L.C)&&(Yi(f||{}),z("auid",Ui[Vi(f.prefix)]||""));
a.Nf&&z("did",a.Nf);var Q=B+"/pagead/landing?"+y.join("&");qg(Q)}}var c=!!a.Rd,d=!!a.wa,e=a.W,f=void 0===a.Rc?{}:a.Rc,g=void 0===a.Yc?!0:a.Yc,h=Wj(),l=h.gclid||"",m=h.gclsrc,n=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),u=Jg();if(r||u)u?Vg(function(){b();Sg(L.C)||Ng(function(t){return b(!0,t.If)},L.C)},[L.C]):b()}function rn(a,b){var c=a&&!Sg(L.C);return b&&c?"0":b}var ho=function(){var a=!0;nn(7)&&nn(9)&&nn(10)||(a=!1);var b=!0;b=!1;b&&!co()&&(a=!1);return a},co=function(){var a=!0;nn(3)&&nn(4)||(a=!1);return a};var Eo=!1;function Fo(){var a=Mh;return a.gcq=a.gcq||new Go}
var Ho=function(a,b,c){Fo().register(a,b,c)},Io=function(a,b,c,d){Fo().push("event",[b,a],c,d)},Jo=function(a,b){Fo().push("config",[a],b)},Ko=function(a,b,c,d){Fo().push("get",[a,b],c,d)},Lo=function(a){return Fo().getRemoteConfig(a)},Mo={},No=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},Oo=function(a,b,c,d,e){this.type=a;this.s=b;this.W=c||"";this.g=d;this.o=e},Go=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
Po=function(a,b){var c=vk(b);return a.D[c.containerId]=a.D[c.containerId]||new No},Qo=function(a,b,c){if(b){var d=vk(b);if(d&&1===Po(a,b).status){Po(a,b).status=2;var e={};Zl&&(e.timeoutId=F.setTimeout(function(){zf(38);Kl()},3E3));a.push("require",[e],d.containerId);Mo[d.containerId]=$a();if(yk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=vm(c,g)||h;gg(l)}}}},Ro=function(a,b,c,d){if(d.W){var e=Po(a,d.W),f=e.o;if(f){var g=J(c),h=J(e.targetConfig[d.W]),l=J(e.containerConfig),m=J(e.remoteConfig),n=J(a.o),q=ei("gtm.uniqueEventId"),r=vk(d.W).prefix,u=Fm(Em(Gm(Dm(Cm(Bm(Am(zm(ym(g),h),l),m),n),function(){
am(q,r,"2");}),function(){am(q,r,"3");}),function(t,v){a.s[t]=v}),function(t){return a.s[t]});try{am(q,r,"1");f(d.W,b,d.s,u)}catch(t){am(q,r,"4");}}}};k=Go.prototype;
k.register=function(a,b,c){var d=Po(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){J(d.remoteConfig,c);d.remoteConfig=c}var e=vk(a),f=Mo[e.containerId];if(void 0!==f){var g=Mh[e.containerId].bootstrap,h=e.prefix.toUpperCase();Mh[e.containerId]._spx&&(h=h.toLowerCase());var l=ei("gtm.uniqueEventId"),m=h,n=$a()-g;if(Zl&&!Pl[l]){l!==Ll&&(Hl(),Ll=l);var q=m+"."+Math.floor(g-
f)+"."+Math.floor(n);Tl=Tl?Tl+","+q:"&cl="+q}delete Mo[e.containerId]}this.flush()}};k.push=function(a,b,c,d){var e=Math.floor($a()/1E3);Qo(this,c,b[0][L.Oa]||this.o[L.Oa]);Eo&&c&&Po(this,c).g&&(d=!1);this.g.push(new Oo(a,e,c,b,d));d||this.flush()};k.insert=function(a,b,c){var d=Math.floor($a()/1E3);0<this.g.length?this.g.splice(1,0,new Oo(a,d,c,b,!1)):this.g.push(new Oo(a,d,c,b,!1))};
k.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.o)Eo?!f.W||Po(this,f.W).g?(f.o=!1,this.g.push(f)):c.push(f):(f.o=!1,this.g.push(f));else switch(f.type){case "require":if(3!==Po(this,f.W).status&&!a){Eo&&this.g.push.apply(this.g,c);return}Zl&&F.clearTimeout(f.g[0].timeoutId);break;case "set":Sa(f.g[0],function(r,u){J(kb(r,u),b.o)});break;case "config":e.xa={};Sa(f.g[0],function(r){return function(u,t){J(kb(u,t),r.xa)}}(e));var g=!!e.xa[L.Fc];delete e.xa[L.Fc];
var h=Po(this,f.W),l=vk(f.W),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.W]={});h.g&&g||Ro(this,L.fa,e.xa,f);h.g=!0;delete e.xa[L.Nb];m?J(e.xa,h.containerConfig):J(e.xa,h.targetConfig[f.W]);Eo&&(d=!0);break;case "event":e.oc={};Sa(f.g[0],function(r){return function(u,t){J(kb(u,t),r.oc)}}(e));Ro(this,f.g[1],e.oc,f);break;case "get":var n={},q=(n[L.Ma]=f.g[0],n[L.La]=f.g[1],n);Ro(this,L.Aa,q,f)}this.g.shift();e={xa:e.xa,oc:e.oc}}Eo&&(this.g.push.apply(this.g,c),d&&this.flush())};
k.getRemoteConfig=function(a){return Po(this,a).remoteConfig};function So(a,b){var c=this;};function To(a,b,c){};function Uo(a,b,c,d){};function Vo(a){};var Wo=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":rg(a,"className"),"gtm.elementId":a["for"]||mg(a,"id")||"","gtm.elementTarget":a.formTarget||rg(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||rg(a,"href")||a.src||a.code||a.codebase||"";return d},Xo=function(a){Mh.hasOwnProperty("autoEventsSettings")||(Mh.autoEventsSettings={});var b=Mh.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},Yo=function(a,b,c){Xo(a)[b]=c},Zo=function(a,b,c,d){var e=Xo(a),f=ab(e,b,d);e[b]=c(f)},$o=function(a,b,c){var d=Xo(a);return ab(d,b,c)};var ap={},bp=[];
var ip=function(a,b){};

function lp(a,b){};var mp=/^\s*$/,np,op=!1;
function zp(a,b){}function Ap(a,b,c){};var Bp=!!F.MutationObserver,Cp=void 0,Dp=function(a){if(!Cp){var b=function(){var c=N.body;if(c)if(Bp)(new MutationObserver(function(){for(var e=0;e<Cp.length;e++)P(Cp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;kg(c,"DOMNodeInserted",function(){d||(d=!0,P(function(){d=!1;for(var e=0;e<Cp.length;e++)P(Cp[e])}))})}};Cp=[];N.body?b():P(b)}Cp.push(a)};var Fp=["www.youtube.com","www.youtube-nocookie.com"],Gp,Hp=!1,Ip=0;
function Sp(a,b){}function Tp(a,b){return!0};function Up(a,b,c){};function Vp(a,b){var c;return c};function Wp(a){};function Xp(a){};var Yp=!1,Zp=[];function $p(){if(!Yp){Yp=!0;for(var a=0;a<Zp.length;a++)P(Zp[a])}}var aq=function(a){Yp?P(a):Zp.push(a)};function bq(a){K(H(this),["listener:!Fn"],arguments);gf(this,"process_dom_events","window","load");aq(Ib(a))};function cq(a){var b;return b};function dq(a,b){var c;var d=!1;var e=Hb(c,this.g,d);void 0===e&&void 0!==c&&zf(45);return e};function eq(a){var b;return b};function fq(a,b){var c=null,d=!1;return Hb(c,this.g,d)};function gq(a){var b;K(H(this),["path:!string"],arguments);gf(this,"access_globals","readwrite",a);var c=a.split("."),d=jb(c,[F,N]),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ka(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};var g=!1;return Hb(b,this.g,g)};var hq=function(a){var b;return b};function iq(a,b){b=void 0===b?!0:b;var c;return c};function jq(a){var b=null;return b};function kq(a,b){var c;return c};function lq(a,b){var c;return c};function mq(a){var b="";return b};function nq(a,b){var c;return c};function oq(a){var b="";return b};function pq(){gf(this,"get_user_agent");return F.navigator.userAgent};function qq(a,b){};var rq={};function sq(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],gg(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)P(g[h]);g.push=function(l){P(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)P(g[h]);e[f]=null},b)):gg(a,c,d,b)}
function tq(a,b,c,d){K(H(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);gf(this,"inject_script",a);var e=this.g;sq(a,void 0,function(){b&&b.o(e)},function(){c&&c.o(e)},rq,d);}var uq=Object.freeze({dl:1,id:1}),vq={};
function wq(a,b,c,d){};function xq(a){var b=!0;return b};var yq=function(){return!1},zq={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Aq(){};function Bq(a,b){var c;return c};function Cq(a){var b=void 0;return b};function Dq(a,b){var c=!1;return c};function Eq(){var a="";return a};function Fq(){var a="";return a};function Gq(){};function Hq(a,b,c,d){d=void 0===d?!1:d;};function Iq(a,b,c){};function Jq(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Kq(a){K(H(this),["consentSettings:!DustMap"],arguments);for(var b=a.Ya(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==L.md&&gf(this,"access_consent",e,"write")}Qg(Ib(a))};function Lq(a,b,c){return!1};function Mq(a,b,c){}
;var Nq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Oq(a,b,c,d){var e=this;};function Pq(a,b,c){}
;var Qq={},Rq={};Qq.getItem=function(a){var b=null;return b};
Qq.setItem=function(a,b){};
Qq.removeItem=function(a){};Qq.clear=function(){};var Sq=function(a){var b;return b};function Tq(a){K(H(this),["consentSettings:!DustMap"],arguments);var b=Ib(a),c;for(c in b)b.hasOwnProperty(c)&&gf(this,"access_consent",c,"write");Rg(b)};var ed=function(){var a=new uf;yk()?(a.add("injectHiddenIframe",Ja),a.add("injectScript",Ja)):(a.add("injectHiddenIframe",qq),a.add("injectScript",tq));var b=Iq;a.add("Math",$e());a.add("TestHelper",xf());a.add("addEventCallback",Vo);a.add("aliasInWindow",Tp);a.add("assertApi",Se);a.add("assertThat",Te);a.add("callInWindow",
Vp);a.add("callLater",Wp);a.add("copyFromDataLayer",dq);a.add("copyFromWindow",eq);a.add("createArgumentsQueue",fq);a.add("createQueue",gq);a.add("decodeUri",af);a.add("decodeUriComponent",bf);a.add("encodeUri",cf);a.add("encodeUriComponent",df);a.add("fail",ef);a.add("fromBase64",hq,!("atob"in F));a.add("generateRandom",ff);a.add("getContainerVersion",hf);a.add("getCookieValues",iq);a.add("getQueryParameters",kq);a.add("getReferrerQueryParameters",lq);a.add("getReferrerUrl",mq);a.add("getTimestamp",
jf);a.add("getTimestampMillis",jf);a.add("getType",kf);a.add("getUrl",oq);a.add("localStorage",zq,!yq());a.add("logToConsole",Aq);a.add("makeInteger",mf);a.add("makeNumber",nf);a.add("makeString",of);a.add("makeTableMap",pf);a.add("mock",rf);a.add("parseUrl",Cq);a.add("queryPermission",Dq);a.add("readCharacterSet",Eq);a.add("readTitle",Fq);a.add("sendPixel",b);a.add("setCookie",Jq);a.add("setInWindow",Lq);a.add("sha256",Oq);a.add("templateStorage",Qq);a.add("toBase64",Sq,!("btoa"in F));a.add("JSON",
lf(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;c&&a.add("setDefaultConsentState",Kq);
yk()?wf(a,"internal.injectScript",
Ja):wf(a,"internal.injectScript",wq);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.o.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.Zb();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.o.hasOwnProperty(d)?
a.o[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var cd,me;
function Uq(){var a=data.runtime||[],b=data.runtime_lines;cd=new ad;Vq();Fd=function(e,f,g){Wq(f);var h=new tb;Sa(f,function(u,t){var v=Hb(t);void 0===v&&void 0!==t&&zf(44);h.set(u,v)});cd.g.g.L=ae();var l={rh:ne(e),eventId:void 0!==g?g.id:void 0,Tb:void 0!==g?function(u){return g.Ra.Tb(u)}:void 0,Zb:function(){return e},log:function(){}};if(cm()){var m=dm(),
n=void 0,q=void 0;l.na={Ub:{},ub:function(u,t,v){1===t&&(n=u);7===t&&(q=v);m(u,t,v)},he:qf()};l.log=function(u,t){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:u,source:q,message:v})}}}var r=dd(l,[e,h]);cd.g.g.L=void 0;r instanceof qa&&"return"===r.g&&(r=r.o);return Ib(r)};fd();for(var c=0;c<a.length;c++){var d=a[c];if(!Ma(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Yd(d,b[c]);cd.Uc(d)}}
function Wq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ka(b)&&(a.gtmOnSuccess=function(){P(b)});Ka(c)&&(a.gtmOnFailure=function(){P(c)})}function Vq(){var a=cd;Mh.SANDBOXED_JS_SEMAPHORE=Mh.SANDBOXED_JS_SEMAPHORE||0;gd(a,function(b,c,d){Mh.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Mh.SANDBOXED_JS_SEMAPHORE--}})}function Xq(a){void 0!==a&&Sa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Yh[e]=Yh[e]||[];Yh[e].push(b)}})};var Yq="HA GF G UA AW DC".split(" "),Zq=!1,$q={},ar=!1;function br(a,b){var c={event:a};b&&(c.eventModel=J(b),b[L.sd]&&(c.eventCallback=b[L.sd]),b[L.zc]&&(c.eventTimeout=b[L.zc]));return c}function cr(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Zh()});return a["gtm.uniqueEventId"]}
function dr(){return Zq}
var gr={config:function(a){var b,c;void 0===c&&(c=Zh());return b},consent:function(a){function b(){dr()&&J(a[2],{subcommand:a[1]})}if(3===a.length){zf(39);var c=Zh(),d=a[1];"default"===d?(b(),Qg(a[2])):"update"===d&&(b(),Rg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&A(b)){var c;if(2<a.length){if(!Gb(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=br(b,c),e=void 0;void 0===e&&Zh();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){ar=!0;dr();var b={event:"gtm.js","gtm.start":a[1].getTime()};return b}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=me.o;d.g[b]?d.g[b].push(c):
d.g[b]=[c]}},set:function(a){var b;2==a.length&&Gb(a[1])?b=J(a[1]):3==a.length&&A(a[1])&&(b={},Gb(a[2])||Ma(a[2])?b[a[1]]=J(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},hr={policy:!0};var ir=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},kr=function(a){var b=jr(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Br=function(a){if(Ar(a))return a;this.g=a};Br.prototype.Kh=function(){return this.g};var Ar=function(a){return!a||"object"!==Eb(a)||Gb(a)?!1:"getUntrustedUpdateValue"in a};Br.prototype.getUntrustedUpdateValue=Br.prototype.Kh;var Cr=[],Dr=!1,Er=!1,Fr=!1,Gr=function(a){return F["dataLayer"].push(a)},Hr=function(a){var b=Mh["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Ir(a){var b=a._clear;Sa(a,function(d,e){"_clear"!==d&&(b&&hi(d,void 0),hi(d,e))});Uh||(Uh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Zh(),a["gtm.uniqueEventId"]=c,hi("gtm.uniqueEventId",c));return tm(a)}function Jr(){var a=Cr[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ta(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Kr(){for(var a=!1;!Fr&&0<Cr.length;){var b=!1;if(b&&!Er&&Jr()){var c={};Cr.unshift((c.event=
"gtm.init",c));Er=!0}var d=!1;if(d&&!Dr&&Jr()){var e={};Cr.unshift((e.event="gtm.init_consent",e));Dr=!0}Fr=!0;delete bi.eventModel;di();var f=Cr.shift();if(null!=f){var g=Ar(f);
if(g){var h=f;f=Ar(h)?h.getUntrustedUpdateValue():void 0;ii()}try{if(Ka(f))try{f.call(fi)}catch(v){}else if(Ma(f)){var l=f;if(A(l[0])){var m=l[0].split("."),n=m.pop(),q=l.slice(1),r=ei(m.join("."),2);if(void 0!==r&&null!==r)try{r[n].apply(r,q)}catch(v){}}}else{if(Ta(f)){a:{var u=f;if(u.length&&A(u[0])){var t=gr[u[0]];if(t&&(!g||!hr[u[0]])){f=t(u);break a}}f=void 0}if(!f){Fr=!1;continue}}a=Ir(f)||a}}finally{g&&di(!0)}}Fr=!1}
return!a}function Lr(){var a=Kr();try{ir(F["dataLayer"],ie.I)}catch(b){}return a}
var Nr=function(){var a=cg("dataLayer",[]),b=cg("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};hl(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});aq(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Mh.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Br(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Cr.push.apply(Cr,e);if(300<
this.length)for(zf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Kr()&&h};var d=a.slice(0);Cr.push.apply(Cr,d);Mr()&&P(Lr)},Mr=function(){var a=!0;return a};var Or={};Or.Gc=new String("undefined");
var Pr=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Or.Gc?b:a[d]);return c.join("")}};Pr.prototype.toString=function(){return this.g("undefined")};Pr.prototype.valueOf=Pr.prototype.toString;Or.kh=Pr;Or.Ld={};Or.yh=function(a){return new Pr(a)};var Qr={};Or.hi=function(a,b){var c=Zh();Qr[c]=[a,b];return c};Or.Lf=function(a){var b=a?0:1;return function(c){var d=Qr[c];if(d&&"function"===typeof d[b])d[b]();Qr[c]=void 0}};Or.Oh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Or.ei=function(a){if(a===Or.Gc)return a;var b=Zh();Or.Ld[b]=a;return'google_tag_manager["'+ie.I+'"].macro('+b+")"};Or.Zh=function(a,b,c){a instanceof Or.kh&&(a=a.g(Or.hi(b,c)),b=Ja);return{Lh:a,onSuccess:b}};var Rr=["input","select","textarea"],Sr=["button","hidden","image","reset","submit"],Tr=function(a){var b=a.tagName.toLowerCase();return!Oa(Rr,function(c){return c===b})||"input"===b&&Oa(Sr,function(c){return c===a.type.toLowerCase()})?!1:!0},Ur=function(a){return a.form?a.form.tagName?a.form:N.getElementById(a.form):pg(a,["form"],100)},Vr=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Tr(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var fs=F.clearTimeout,gs=F.setTimeout,R=function(a,b,c){if(yk()){b&&P(b)}else return gg(a,b,c)},hs=function(){return new Date},is=function(){return F.location.href},js=function(a){return nh(ph(a),"fragment")},ks=function(a){return oh(ph(a))},ls=function(a,b){return ei(a,b||2)},ms=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Gr(a)):d=Gr(a);return d},ns=function(a,b){F[a]=b},T=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},os=function(a,b,c){return wi(a,b,void 0===c?!0:!!c)},ps=function(a,b,c){return 0===Fi(a,b,c)},qs=function(a,b){if(yk()){b&&P(b)}else ig(a,b)},rs=function(a){return!!$o(a,"init",!1)},ss=function(a){Yo(a,"init",!0)},ts=function(a){var b=Sh+"?id="+encodeURIComponent(a)+"&l=dataLayer";R(Ak("https://","http://",b))},us=function(a,b,c){Zl&&(Kb(a)||bm(c,b,a))};var vs=Or.Zh;function Ss(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Ts=new Qa;function Us(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Ts.get(e);f||(f=new RegExp(b,d),Ts.set(e,f));return f.test(a)}catch(g){return!1}}
function Vs(a,b){function c(g){var h=ph(g),l=nh(h,"protocol"),m=nh(h,"host",!0),n=nh(h,"port"),q=nh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Ws(a){return Xs(a)?1:0}
function Xs(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ma(c)){for(var d=0;d<c.length;d++){var e=J(a,{});J({arg1:c[d],any_of:void 0},e);if(Ws(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return Ss(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Na(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return Us(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Vs(b,c)}return!1};var Ys=encodeURI,X=encodeURIComponent,Zs=jg;var $s=function(a,b){if(!a)return!1;var c=nh(ph(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var at=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Ju(){return F.gaGlobal=F.gaGlobal||{}}var Ku=function(){var a=Ju();a.hid=a.hid||Pa();return a.hid},Lu=function(a,b){var c=Ju();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var vv=window,wv=document,xv=function(a){var b=vv._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===vv["ga-disable-"+a])return!0;try{var c=vv.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=si("AMP_TOKEN",String(wv.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return wv.getElementById("__gaOptOutExtension")?!0:!1};var yv={};function Av(a){delete a.eventModel[L.Nb];Cv(a.eventModel)}var Cv=function(a){Sa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[L.Ca]||{};Sa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Fv=function(a,b,c){Io(b,c,a)},Gv=function(a,b,c){Io(b,c,a,!0)},Nv=function(a,b){};
function Hv(a,b){}var Z={h:{}};Z.h.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.i="ctv";Z.__ctv.m=!0;Z.__ctv.priorityOverride=0})(function(){return"46"})}();
Z.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),C=0;C<B.length;C++){var E=Number(B[C]);if(isNaN(E))return[];n.test(B[C])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var B=bh(),C=B.height;x=Math.max(v.scrollLeft+B.width,x);z=Math.max(v.scrollTop+C,z);return{Td:x,Ud:z}}}function d(){u=T("self");
t=u.document;v=t.scrollingElement||t.body&&t.body.parentNode;y=c()}function e(x,z,B,C){var E=l(z),D={},I;for(I in E){D.fb=I;if(E.hasOwnProperty(D.fb)){var Q=Number(D.fb);x<Q||(ms({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[D.fb].join(",")}),Zo("sdl",z,function(U){return function(V){delete V[U.fb];return V}}(D),{}))}D={fb:D.fb}}}function f(){var x=y(),z=x.Td,B=x.Ud,C=z/v.scrollWidth*100,E=B/v.scrollHeight*100;e(z,"horiz.pix",
q.Ic,r.rf);e(C,"horiz.pct",q.Hc,r.rf);e(B,"vert.pix",q.Ic,r.Ef);e(E,"vert.pct",q.Hc,r.Ef);Yo("sdl","pending",!1)}function g(){var x=250,z=!1;t.scrollingElement&&t.documentElement&&u.addEventListener&&(x=50,z=!0);var B=0,C=!1,E=function(){C?B=gs(E,x):(B=0,f(),rs("sdl")&&!a()&&(lg(u,"scroll",D),lg(u,"resize",D),Yo("sdl","init",!1)));C=!1},D=function(){z&&y();B?C=!0:(B=gs(E,x),Yo("sdl","pending",!0))};return D}function h(x,z,B){if(z){var C=b(String(x));Zo("sdl",B,function(E){for(var D=0;D<C.length;D++){var I=
String(C[D]);E.hasOwnProperty(I)||(E[I]=[]);E[I].push(z)}return E},{})}}function l(x){return $o("sdl",x,{})}function m(x){P(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,D=x.vtp_verticalThresholdsPixels,I=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.Ic:h(B,z,"horiz.pix");break;case q.Hc:h(C,z,"horiz.pct")}switch(E){case q.Ic:h(D,z,"vert.pix");break;case q.Hc:h(I,
z,"vert.pct")}rs("sdl")?$o("sdl","pending")||(w||(d(),w=!0),P(function(){return f()})):(d(),w=!0,v&&(ss("sdl"),Yo("sdl","pending",!0),P(function(){f();if(a()){var Q=g();kg(u,"scroll",Q);kg(u,"resize",Q)}else Yo("sdl","init",!1)})))}var n=/^\s*$/,q={Hc:"PERCENT",Ic:"PIXELS"},r={Ef:"vertical",rf:"horizontal"},u,t,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.i="sdl";Z.__sdl.m=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):aq(function(){m(x)})})}();

Z.h.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.i="jsm";Z.__jsm.m=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);us(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.h.c=["google"],function(){(function(a){Z.__c=a;Z.__c.i="c";Z.__c.m=!0;Z.__c.priorityOverride=0})(function(a){us(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.i="e";Z.__e.m=!0;Z.__e.priorityOverride=0})(function(a){var b=String(li(a.vtp_gtmEventId,"event"));return b})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.i="f";Z.__f.m=!0;Z.__f.priorityOverride=0})(function(a){var b=ls("gtm.referrer",1)||N.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?nh(ph(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ks(String(b)):String(b)})}();
Z.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Wo(c,"gtm.click");ms(d)}}(function(b){Z.__cl=b;Z.__cl.i="cl";Z.__cl.m=!0;Z.__cl.priorityOverride=0})(function(b){if(!rs("cl")){var c=T("document");kg(c,"click",a,!0);ss("cl")}P(b.vtp_gtmOnSuccess)})}();
Z.h.j=["google"],function(){(function(a){Z.__j=a;Z.__j.i="j";Z.__j.m=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=T(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];us(c,"j",a.vtp_gtmEventId);return c})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.i="k";Z.__k.m=!0;Z.__k.priorityOverride=0})(function(a){return os(a.vtp_name,ls("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.i="access_globals";Z.__access_globals.m=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,r){if(!A(r))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Na(e,r))return}else if("write"===q){if(-1<Na(f,r))return}else if("readwrite"===q){if(-1<Na(f,r)&&-1<Na(e,r))return}else if("execute"===q){if(-1<Na(g,r))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
r+".");},P:a}})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.i="u";Z.__u.m=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:ls("gtm.url",1))||is();var d=b[a("vtp_component")];if(!d||"URL"==d)return ks(String(c));var e=ph(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ma(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var q=nh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=nh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.i="v";Z.__v.m=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=ls(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;us(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.ua=["google"],function(){function a(q){return Sg(q)}function b(q,r,u){var t=!1;if(Jg()&&!t&&!e[q]){var v=!Sg(L.H),w=function(){var y=tl(),x="gtm"+Zh(),z=m(r);z["&gtm"]=Lm(!0);var B={name:x};l(z,B,!0);var C=void 0,E=B._useUp;y(function(){var D=y.getByName(u);D&&(C=D.get("clientId"))});
y("create",q,B);v&&Sg(L.H)&&(v=!1,y(function(){var D=y.getByName(x);!D||D.get("clientId")===C&&E||(z["&gcs"]=Tg(),z["&gcu"]="1",D.set(z),D.send("pageview"))}));y(function(){y.remove(x)})};Ng(w,L.H);Ng(w,L.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,r,u){var t=0;if(q)for(var v in q)if(!h[v]&&
q.hasOwnProperty(v)&&(u&&f[v]||!u&&void 0===f[v])){var w=g[v]?Xa(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);r[v]=w;t++}return t},m=function(q){var r={};q.vtp_gaSettings&&J(at(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);J(at(q.vtp_fieldsToSet,"fieldName","value"),r);Sg(L.H)||(r.storage="none");Sg(L.C)||(r.allowAdFeatures=!1,r.storeGac=!1);ho()||(r.allowAdFeatures=!1);co()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(Xa(r.urlPassthrough)){r._useUp=!0;var u=!1;Jg()&&!u&&(r._cs=a)}return r},n=function(q){function r(xa,ba){void 0!==ba&&D("set",xa,ba)}var u={},t={},v={},
w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;J(at(y.vtp_contentGroup,"index","group"),t);J(at(y.vtp_dimension,"index","dimension"),v);J(at(y.vtp_metric,"index","metric"),w);var x=J(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;q=J(q,x)}J(at(q.vtp_contentGroup,"index","group"),t);J(at(q.vtp_dimension,"index","dimension"),v);J(at(q.vtp_metric,"index","metric"),w);var z=m(q),B=vl(q.vtp_functionName);if(Ka(B)){var C="",E="";q.vtp_setTrackerName&&
"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(E=q.vtp_trackerName,C=E+"."):(E="gtm"+Zh(),C=E+".");var D=function(xa){var ba=[].slice.call(arguments,0);ba[0]=C+ba[0];B.apply(window,ba)},I=function(xa,ba){return void 0===ba?ba:xa(ba)},Q=function(xa,ba){if(ba)for(var Bb in ba)ba.hasOwnProperty(Bb)&&D("set",xa+Bb,ba[Bb])},U=function(){},V={name:E};l(z,V,!0);var oa=q.vtp_trackingId||u.trackingId;B("create",oa,V);D("set","&gtm",Lm(!0));var W=!1;
Jg()&&!W&&(D("set","&gcs",Tg()),b(oa,q,E));z._x_19&&(null==bg&&delete z._x_19,z._x_20&&!d[E]&&(d[E]=!0,B(Al(E,String(z._x_20)))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(xa,ba){void 0!==q[ba]&&D("set",xa,q[ba])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",t);Q("dimension",v);Q("metric",w);var O={};l(z,O,!1)&&D("set",O);var Y;
q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var xa=z&&z.hitCallback;Ka(xa)&&xa();q.vtp_gtmOnSuccess()});var ca=function(xa,ba){return void 0===q[xa]?u[ba]:q[xa]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),U());var ua={hitType:"event",eventCategory:String(ca("vtp_eventCategory","category")),eventAction:String(ca("vtp_eventAction","action")),eventLabel:I(String,
ca("vtp_eventLabel","label")),eventValue:I(Wa,ca("vtp_eventValue","value"))};l(Y,ua,!1);D("send",ua);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(D("require","ec","ec.js"),U());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Mb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:Mb})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var mb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:mb})}Y?D("send","pageview",Y):D("send","pageview");Xa(z.urlPassthrough)&&xl(C)}if(!c){var zb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(zb="internal/"+zb);c=!0;var We=vm(z._x_19,"/analytics.js"),Ud=Ak("https:","http:","//www.google-analytics.com/"+zb,z&&!!z.forceSSL);R("analytics.js"===zb&&We?We:Ud,function(){var xa=
tl();xa&&xa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else P(q.vtp_gtmOnFailure)};(function(q){Z.__ua=q;Z.__ua.i="ua";Z.__ua.m=!0;Z.__ua.priorityOverride=0})(function(q){Vg(function(){n(q)},
[L.H,L.C])})}();


Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.i="inject_script";Z.__inject_script.m=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!A(f))throw d(e,{},"Script URL must be a string.");try{if(Le(ph(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},P:a}})}();


Z.h.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.i="cid";Z.__cid.m=!0;Z.__cid.priorityOverride=0})(function(){return ie.I})}();




Z.h.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.i="gas";Z.__gas.m=!0;Z.__gas.priorityOverride=0})(function(a){var b=J(a),c=b;c[hd.Xa]=null;c[hd.ah]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.h.fsl=[],function(){function a(){var e=T("document"),f=c(),g=HTMLFormElement.prototype.submit;kg(e,"click",function(h){var l=h.target;if(l&&(l=pg(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&mg(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=N.getElementById(l.form):m=pg(l,["form"],100);m&&f.store(m,l)}},!1);kg(e,"submit",function(h){var l=h.target;if(!l)return h.returnValue;var m=h.defaultPrevented||!1===h.returnValue,n=b(l)&&!m,q=f.get(l),r=!0;if(d(l,function(){if(r){var u;
q&&(u=e.createElement("input"),u.type="hidden",u.name=q.name,u.value=q.value,l.appendChild(u));g.call(l);u&&l.removeChild(u)}},m,n,q))r=!1;else return m||(h.preventDefault&&h.preventDefault(),h.returnValue=!1),!1;return h.returnValue},!1);HTMLFormElement.prototype.submit=function(){var h=this,l=b(h),m=!0;d(h,function(){m&&g.call(h)},!1,l)&&(g.call(h),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Oa(e,function(h){return h.form===
g})};return{store:function(g,h){var l=f(g);l?l.button=h:e.push({form:g,button:h})},get:function(g){var h=f(g);return h?h.button:null}}}function d(e,f,g,h,l){var m=$o("fsl",g?"nv.mwt":"mwt",0),n;n=g?$o("fsl","nv.ids",[]):$o("fsl","ids",[]);if(!n.length)return!0;var q=Wo(e,"gtm.formSubmit",n),r=e.action;r&&r.tagName&&(r=e.cloneNode(!1).action);q["gtm.elementUrl"]=r;l&&(q["gtm.formSubmitElement"]=l);if(h&&m){if(!ms(q,Hr(f),m))return!1}else ms(q,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.i=
"fsl";Z.__fsl.m=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,h=Number(e.vtp_waitForTagsTimeout);if(!h||0>=h)h=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(q){return Math.max(h,q)};Zo("fsl","mwt",m,0);g||Zo("fsl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Zo("fsl","ids",n,[]);g||Zo("fsl","nv.ids",n,[]);rs("fsl")||(a(),ss("fsl"));P(e.vtp_gtmOnSuccess)})}();





Z.h.zone=[],function(){function a(m){for(var n=m.vtp_boundaries||[],q=0;q<n.length;q++)if(!n[q])return!1;return!0}function b(m){var n=ie.I,q=n+":"+m.vtp_gtmTagId,r=ls("gtm.uniqueEventId")||0,u=$k(function(){return new g}),t=a(m),v=m.vtp_enableTypeRestrictions?m.vtp_whitelistedTypes.map(function(z){return z.typeId}):null;v=v&&ib(v,f);if(u.registerZone(q,r,t,v))for(var w=m.vtp_childContainers.map(function(z){return z.publicId}),y=0;y<w.length;y++){var x=String(w[y]);u.registerChild(x,n,q)&&(0!==x.indexOf("GTM-")?
(function(z,B){ms(arguments)}("js",new Date),l&&Mh.addTargetToGroup(x),Jo({},x)):ts(x))}}var c={active:!1,isAllowed:function(){return!1},Qh:function(){return!1}},d={active:!0,isAllowed:function(){return!0},Qh:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.g={};this.o={}};g.prototype.checkState=function(m,n){var q=this.g[m];if(!q)return d;var r=this.checkState(q.Yf,n);if(!r.active)return c;
for(var u=[],t=0;t<q.Be.length;t++){var v=this.o[q.Be[t]];v.bc(n)&&u.push(v)}return u.length?{active:!0,isAllowed:function(w,y){y=y||[];var x=r.isAllowed;if(!x(w,y))return!1;for(var z=0;z<u.length;++z)if(u[z].isAllowed(w,y))return!0;return!1}}:c};g.prototype.unregisterChild=function(m){delete this.g[m]};g.prototype.registerZone=function(m,n,q,r){var u=this.o[m];if(u)return u.s(n,q),!1;if(!q)return!1;this.o[m]=new h(n,r);return!0};g.prototype.registerChild=function(m,n,q){var r=this.g[m];if(!r&&Mh[m]||
r&&r.Yf!==n)return!1;if(r)return r.Be.push(q),!1;this.g[m]={Yf:n,Be:[q]};return!0};var h=function(m,n){this.g=[{eventId:m,bc:!0}];this.o=null;if(n){this.o={};for(var q=0;q<n.length;q++)this.o[n[q]]=!0}};h.prototype.s=function(m,n){var q=this.g[this.g.length-1];m<=q.eventId||q.bc!=n&&this.g.push({eventId:m,bc:n})};h.prototype.bc=function(m){if(!this.g||0==this.g.length)return!1;for(var n=this.g.length-1;0<=n;n--)if(this.g[n].eventId<=m)return this.g[n].bc;return!1};h.prototype.isAllowed=function(m,
n){n=n||[];if(!this.o||e[m]||this.o[m])return!0;for(var q=0;q<n.length;++q)if(this.o[n[q]])return!0;return!1};var l=!1;(function(m){Z.__zone=m;Z.__zone.i="zone";Z.__zone.m=!0;Z.__zone.priorityOverride=0})(function(m){b(m);P(m.vtp_gtmOnSuccess)})}();
Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=N.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,eg(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){P(g)}}}var c=function(d){if(N.body){var e=
d.vtp_gtmOnFailure,f=vs(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Lh,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(N.body,og(g),h,e)()}else gs(function(){c(d)},
200)};Z.__html=c;Z.__html.i="html";Z.__html.m=!0;Z.__html.priorityOverride=0}();




Z.h.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.i="img";Z.__img.m=!0;Z.__img.priorityOverride=0})(function(a){var b=og('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Zs(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.h.lcl=[],function(){function a(){var c=T("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Vf||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=pg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=$o("lcl",h?"nv.mwt":"mwt",0),m;m=h?$o("lcl","nv.ids",[]):$o("lcl","ids",[]);if(m.length){var n=Wo(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=!!Oa(String(rg(g,"rel")||"").split(" "),function(t){return"noreferrer"===t.toLowerCase()});
q&&zf(36);var r=T((rg(g,"target")||"_self").substring(1)),u=!0;if(ms(n,Hr(function(){var t;if(t=u&&r){var v;a:if(q){var w;try{w=new MouseEvent(f.type,{bubbles:!0})}catch(y){if(!c.createEvent){v=!1;break a}w=c.createEvent("MouseEvents");w.initEvent(f.type,!0,!0)}w.Vf=!0;f.target.dispatchEvent(w);v=!0}else v=!1;t=!v}t&&(r.location.href=rg(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else ms(n,function(){},l||2E3);return!0}}};kg(c,"click",e,!1);kg(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=rg(d,"href"),g=f.indexOf("#"),h=rg(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=ks(f),m=ks(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.i="lcl";Z.__lcl.m=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};Zo("lcl","mwt",h,0);e||Zo("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};Zo("lcl","ids",l,[]);e||Zo("lcl","nv.ids",l,[]);rs("lcl")||(a(),ss("lcl"));P(c.vtp_gtmOnSuccess)})}();
Z.h.evl=["google"],function(){function a(){var f=Number(ls("gtm.start"))||0;return hs().getTime()-f}function b(f,g,h,l){function m(){if(!ah(f.target)){g.has(d.Jc)||g.set(d.Jc,""+a());g.has(d.Gd)||g.set(d.Gd,""+a());var q=0;g.has(d.Mc)&&(q=Number(g.get(d.Mc)));q+=100;g.set(d.Mc,""+q);if(q>=h){var r=Wo(f.target,"gtm.elementVisibility",[g.g]),u=ch(f.target);r["gtm.visibleRatio"]=Math.round(1E3*u)/10;r["gtm.visibleTime"]=h;r["gtm.visibleFirstTime"]=Number(g.get(d.Gd));r["gtm.visibleLastTime"]=Number(g.get(d.Jc));
ms(r);l()}}}if(!g.has(d.Qb)&&(0==h&&m(),!g.has(d.rb))){var n=T("self").setInterval(m,100);g.set(d.Qb,n)}}function c(f){f.has(d.Qb)&&(T("self").clearInterval(Number(f.get(d.Qb))),f.o(d.Qb))}var d={Qb:"polling-id-",Gd:"first-on-screen-",Jc:"recent-on-screen-",Mc:"total-visible-time-",rb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){Z.__evl=f;Z.__evl.i="evl";Z.__evl.m=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Xg(m)}catch(D){zf(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var z=N.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var C=
new e(v[B],u);c(C)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&ih(w);0<v.length&&(w=hh(h,v,[r]))}}function h(y){var x=new e(y.target,u);y.intersectionRatio>=r?x.has(d.rb)||b(y,x,q,"ONCE"===t?function(){for(var z=0;z<v.length;z++){var B=new e(v[z],u);B.set(d.rb,"1");c(B)}ih(w);if(n&&Cp)for(var C=0;C<Cp.length;C++)Cp[C]===g&&Cp.splice(C,1)}:function(){x.set(d.rb,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===t&&x.has(d.rb)&&(x.o(d.rb),x.o(d.Mc)),x.o(d.Jc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,r=(Number(f.vtp_onScreenRatio)||50)/100,u=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;g();n&&Dp(g);P(f.vtp_gtmOnSuccess)})}();



Z.h.csm=["nonGoogleScripts"],function(){(function(a){Z.__csm=a;Z.__csm.i="csm";Z.__csm.m=!0;Z.__csm.priorityOverride=0})(function(a){var b=T("document");Zs(function(d){if(2048<d.length){var e=d.substring(0,2040).lastIndexOf("&");d=d.substring(0,e)+"&ns_cut="+X(d.substring(e+1));d=d.substring(0,2048)}return d}(function(d,e){var f=hs(),g=(e||"").split("&");e="";for(var h=0;h<g.length;h++)if(g[h]){var l=g[h].match(/([^=]*)=?(.*)/);e+="&"+X(l[1])+"="+X(l[2])}return Ak("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+
X(d)+"&ns__t="+f.valueOf()+"&ns_c="+(b.characterSet||b.Ki||"")+"&c8="+X(b.title||"")+e+"&c7="+X(b.URL)+"&c9="+X(b.referrer))}(a.vtp_clientId,function(){var d="",e=b.cookie;if(0<=e.indexOf("comScore"))for(var f=e.split(";"),g=0;g<f.length;g++){var h=f[g].indexOf("comScore");0<=h&&(d=unescape(f[g].substring(h+8)))}return d}())));var c=function(){var d=Ak("https://sb","http://b",".scorecardresearch.com/c2/"+X(a.vtp_clientId)+"/cs.js");R(d,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===b.readyState?
c():kg(T("self"),"load",c)})}();var Ov={};Ov.macro=function(a){if(Or.Ld.hasOwnProperty(a))return Or.Ld[a]},Ov.onHtmlSuccess=Or.Lf(!0),Ov.onHtmlFailure=Or.Lf(!1);Ov.dataLayer=fi;Ov.callback=function(a){Xh.hasOwnProperty(a)&&Ka(Xh[a])&&Xh[a]();delete Xh[a]};Ov.bootstrap=0;Ov._spx=!1;function Pv(){Mh[ie.I]=Ov;db(Yh,Z.h);Nd=Nd||Or;Od=ee}
function Qv(){sg.o().o();Mh=F.google_tag_manager=F.google_tag_manager||{};jn();Jj.enable_gbraid_cookie_write=!0;if(Mh[ie.I]){var a=Mh.zones;a&&a.unregisterChild(ie.I);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Gd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Jd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Id.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},r=0;r<n.length;r++)q[n[r][0]]=Array.prototype.slice.call(n[r],1);Hd.push(q)}Ld=Z;Md=Ws;var u=data.permissions||{},t=data.sandboxed_scripts,v=data.security_groups;Uq();me=new le(u);if(void 0!==
t)for(var w=["sandboxedScripts"],y=0;y<t.length;y++){var x=t[y].replace(/^_*/,"");Yh[x]=w}Xq(v);Pv();Nr();cl=!1;dl=0;if("interactive"==N.readyState&&!N.createEventObject||"complete"==N.readyState)fl();else{kg(N,"DOMContentLoaded",fl);kg(N,"readystatechange",fl);if(N.createEventObject&&N.documentElement.doScroll){var z=!0;try{z=!F.frameElement}catch(D){}z&&gl()}kg(F,"load",fl)}Yp=!1;"complete"===N.readyState?$p():kg(F,"load",$p);a:{if(!Zl)break a;F.setInterval(Yl,864E5);}
Vh=(new Date).getTime();}}
(function(a){if(!F["__TAGGY_INSTALLED"]){var b=!1;if(N.referrer){var c=ph(N.referrer);b="cct.google"===mh(c,"host")}if(!b){var d=wi("googTaggyReferrer");b=d.length&&d[0].length}b&&(F["__TAGGY_INSTALLED"]=!0,gg("https://cct.google/taggy/agent.js"))}var f=function(){var m=F["google.tagmanager.debugui2.queue"];m||(m=[],F["google.tagmanager.debugui2.queue"]=m,gg("https://www.googletagmanager.com/debug/bootstrap"));var n={messageType:"CONTAINER_STARTING",data:{scriptSource:bg,containerProduct:"GTM",debug:!1}};n.data.resume=function(){a()};ie.ng&&(n.data.initialPublish=!0);m.push(n)},g="x"===nh(F.location,"query",!1,void 0,"gtm_debug");if(!g&&N.referrer){var h=ph(N.referrer);g="tagassistant.google.com"===mh(h,"host")}if(!g){var l=wi("__TAG_ASSISTANT");g=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(g=!0);g&&bg?f():a()})(Qv);

})()
