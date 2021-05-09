let dianomiTCFRegistered=false;let dianomiHasTCF=false;const DIANOMI_VENDOR_ID=885;function dianomiRegisterTCF(callback){if(dianomiTCFRegistered){callback(dianomiHasTCF);}
if(!dianomiTCFRegistered){var count=0;var id=setInterval(function(){dianomiHasTCF=dianomiTCF();if(dianomiHasTCF){dianomiTCFRegistered=true;clearInterval(id);callback(true);}
count++;if(count>20){clearInterval(id);callback(false);}},5);}}
function getVendorListVersion(callback){__tcfapi("ping",2,(pingReturn)=>{if(!pingReturn){callback(null);return;}
callback(pingReturn.gvlVersion);});}
function dianomiTCF(){let tcf_is_function=typeof __tcfapi=="function";if(tcf_is_function){return true;}
let frame=window;let cmpFrame;const cmpCallbacks={};while(frame){try{if(frame.frames["__tcfapiLocator"]){cmpFrame=frame;break;}}catch(ignore){}
if(frame===window.top){break;}
frame=frame.parent;}
window.__tcfapi=function(cmd,version,callback,arg){if(!cmpFrame){callback({msg:"CMP not found"},false);}else{const callId=cmd+"-"+Math.random()+"";const msg={__tcfapiCall:{command:cmd,parameter:arg,version:version,callId:callId,},};cmpCallbacks[callId]=callback;cmpFrame.postMessage(msg,"*");}};function postMessageHandler(event){let json={};try{json=typeof event.data==="string"?JSON.parse(event.data):event.data;}catch(ignore){}
const payload=json.__tcfapiReturn;if(payload){if(typeof cmpCallbacks[payload.callId]==="function"){cmpCallbacks[payload.callId](payload.returnValue,payload.success);if(!payload.callId.startsWith("addEventListener")){cmpCallbacks[payload.callId]=null;}}}}
window.addEventListener("message",postMessageHandler,false);return!!cmpFrame;}
function dianomHandleTCFData(tcData,callback){getVendorListVersion(function(vendorListVersion){dianomiRegisterTCF(function(hasTCF){if(tcData===null){callback(null,true,true);return;}
let can_serve_ads=false;let can_cookie=false;let can_programmatic=false;if(tcData.gdprApplies){const consents=tcData.purpose.consents;const legitimateInterests=tcData.purpose.legitimateInterests;let dianomiLegitimateInterest=tcData.vendor.legitimateInterests[DIANOMI_VENDOR_ID];const vendorConsent=tcData.vendor.consents[DIANOMI_VENDOR_ID];if(vendorListVersion!==null&&vendorListVersion<69){dianomiLegitimateInterest=1;vendorConsent=0;}
for(const purposeId in tcData.publisher.restrictions){for(const vendorId in tcData.publisher.restrictions[purposeId]){if(vendorId!=DIANOMI_VENDOR_ID){continue;}
var val=tcData.publisher.restrictions[purposeId][vendorId];if(val==0){legitimateInterests[purposeId]=0;consents[purposeId]=0;}else if(val==2){consents[purposeId]=0;}else if(val==1){legitimateInterests[purposeId]=0;}}}
can_serve_ads=legitimateInterests[2]&&legitimateInterests[7]&&legitimateInterests[10]&&dianomiLegitimateInterest;can_cookie=can_serve_ads&&consents[1]&&consents[3]&&consents[4]&&consents[8]&&consents[9]&&vendorConsent;can_programmatic=can_prog(tcData);}else{can_serve_ads=true;can_cookie=true;can_programmatic=true;}
callback(tcData,can_serve_ads,can_cookie,can_programmatic,vendorListVersion);});});}
function can_prog(tcdata){const vendors=[129,686,128,DIANOMI_VENDOR_ID];for(const vendor in vendors){if(!tcdata.vendor.consents[vendors[vendor]]){return false;}}
const consents=tcdata.purpose.consents;for(var i=1;i<=10;i++){if(!consents[i]){return false;}}
return true;}
function dianomiGetTCDataNow(callback){dianomiRegisterTCF(function(hasTCF){if(!hasTCF){return;}
__tcfapi("getTCData",2,(tcData,success)=>{if(success){dianomHandleTCFData(tcData,callback);}},[DIANOMI_VENDOR_ID]);});}
function dianomiGetTCDataLater(callback){dianomiRegisterTCF(function(hasTCF){if(!hasTCF){return;}
if(dianomiHasTCF){__tcfapi("addEventListener",2,(tcData,success)=>{if(success&&tcData.eventStatus!="cmpuishown"){dianomHandleTCFData(tcData,callback);}});}else{dianomHandleTCFData(null,callback);}});}