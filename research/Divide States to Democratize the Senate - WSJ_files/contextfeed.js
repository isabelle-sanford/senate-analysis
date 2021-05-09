var dianomiContextHost="www.dianomi.com";var dianomiContextAffiliate;var dianomiContextProductTypeId;var dianomiPageUrl;var loadTCFCalled=false;var tcfLoaded=false;var lazyElementsToLoad=false;function isExedra(){return document.location.hostname.indexOf("exedra.dianomi.com")!=-1;}
function dianomiLoadContext(context_id,context_element,data,tcData,can_serve_ads,can_cookie,can_programmatic){if(data["dianomi-tcf"]){console.log("contextfeed tcf debug enabled, context id",context_id," tcData",tcData," can_serve_ads",can_serve_ads," can_cookie",can_cookie," can_programmatic",can_programmatic);}
if((data["dianomi-tcf"]||data.partner_tcf_status=="2.0")&&!can_serve_ads){if(data["dianomi-tcf"]){console.log("context feed tcf debug, showing nothing due can_serve_ads for context id",context_id);}
return;}
if((data["dianomi-tcf"]||data.partner_tcf_status=="2.0")&&tcData===null){if(data["dianomi-tcf"]){console.log("context feed tcf debug, showing nothing due to no tcf object for context id",context_id);}
return;}
var seed=Date.now();function getDFPScript(){var bodyEl=document.getElementsByTagName("body")[0];var googleDFPScript=document.createElement("script");googleDFPScript.async=true;googleDFPScript.src="https://www.googletagservices.com/tag/js/gpt.js";document.head.appendChild(googleDFPScript);}
function is_when_valid(unit,property_name,value){if(unit.hasOwnProperty("when")&&unit["when"].hasOwnProperty(property_name)){var property=unit["when"][property_name];var found=false;for(var j=0;j<property.length;j++){if(property[j]===value){return true;}}
return false;}
return true;}
var viewportWidth;var setViewportWidth=function(){viewportWidth=window.innerWidth||document.documentElement.clientWidth;};var logWidth=function(){if(viewportWidth>640){console.log(viewportWidth);}else{console.log("Small viewport");}};setViewportWidth();window.addEventListener("resize",function(){setViewportWidth();},false);var dianomiContextFeed={dianomiDeclarations:function(args){var script=document.createElement("script");this.dianomi_context_wrapper=document.createElement("div");var width="650px";var height="auto";if(args.hasOwnProperty("width")){width=args.width;}
if(args.hasOwnProperty("height")){height=args.height;}
this.cf=data.partner_id+"."+data.cfid;if(data.name){this.cf=this.cf+"."+data.name;}
this.dianomi_context_wrapper.style.maxWidth=width;this.dianomi_context_wrapper.style.height=height;this.dianomi_context_wrapper.style.margin="0 auto";this.dianomi_context_wrapper.appendChild(script);var thisWrapper=this.dianomi_context_wrapper;setMobileDisplayType(thisWrapper,args,viewportWidth);window.addEventListener("resize",function(){var contextWrapper=thisWrapper;setMobileDisplayType(contextWrapper,args,viewportWidth);},false);context_element.appendChild(this.dianomi_context_wrapper);var dianomiHeader=document.createElement("div");dianomiHeader.style.borderBottom="1px solid #ccc";dianomiHeader.style.marginBottom="5px";dianomiHeader.style.position="relative";dianomiHeader.style.height="13px";dianomiHeader.innerHTML="<a href='https://"+
dianomiContextHost+
".dianomi.com/cms/whats-this/?utm.source="+
window.location.hostname+
"&utm_medium=smartad_sponsor_link' target='_blank'> <span style='font-size: 10px;color: #748683; position: absolute; width: 125px; right: 0; font-family: helvetica, arial, sans-serif;'>Context Feed by <img src='https://www.dianomi.com/img/dianomi-max-200x38.png' alt='dianomi' style='width: 45px;height: auto; display: inline;'><img src='https://www.dianomi.com/cgi-bin/pixeltrack.pl?cf="+
encodeURIComponent(this.cf)+
"'></span></a>";context_element.appendChild(this.dianomi_context_wrapper);var dianomiContextCss=document.createElement("link");dianomiContextCss.setAttribute("rel","stylesheet");dianomiContextCss.setAttribute("type","text/css");dianomiContextCss.setAttribute("href","https://"+
dianomiContextHost+
"/partner/dianomi/css/dianomi-context.css?v=1.1");document.body.appendChild(dianomiContextCss);if(data.header_html){var headerIframe=document.createElement("div");headerIframe.innerHTML=data.header_html;thisWrapper.appendChild(headerIframe);}
if(args.hasOwnProperty("iframebuster")){if(document.readyState=="loading"){document.addEventListener("DOMContentLoaded",iframebuster);}else{iframebuster();}}},video:function(args){var randomId=Math.floor(Math.random()*100000);var dianomiVideoId=`dianomi_video_${args["id"]}_${randomId}`;var env=dianomiContextHost.split(".")[0];var videoDebug=env==="dev";var queryParams=window.location.search.substring(1).split("&");for(var i=0;i<queryParams.length;i++){var values=queryParams[i].split("=");if(values[0]==="videoDebug"){videoDebug=parseInt(values[1])?true:false;break;}}
window[dianomiVideoId]={args,context_id,dianomiContextHost,data,tcData,can_serve_ads,can_cookie,can_programmatic,dvDiv,viewportWidth,dianomiContextAffiliate,dianomiContextProductTypeId,randomId,videoDebug,dianomiPageUrl};var dvDiv=document.createElement("div");dvDiv.id=`dianomi-video-container-${args["id"]}-${randomId}`;dvDiv.classList.add("dianomi_video");dianomiContextSetFloat(dvDiv,args,viewportWidth);dianomiContextSetWidth(dvDiv,args,viewportWidth,true);window.addEventListener("resize",function(){dianomiContextSetWidth(dvDiv,args,viewportWidth,true);dianomiContextSetFloat(dvDiv,args,viewportWidth);},false);this.dianomi_context_wrapper.appendChild(dvDiv);var dvScript=document.createElement("script");dvScript.src="https://"+dianomiContextHost+"/videofeed/dist/videofeed.js";dvScript.id="dianomi_video_script";dvScript.type="text/javascript";dvScript.setAttribute("dianomi-variable-name",dianomiVideoId);this.dianomi_context_wrapper.appendChild(dvScript);videoMPU();},smartad:function(args){if(args.hasOwnProperty("inline")){var url="https://"+
dianomiContextHost+
"/smartads.epl?id="+
args["id"]+
"&callback=callback"+
args["id"]+
"&return_as=callback%20function";var scriptEl=document.createElement("script");scriptEl.setAttribute("src",url);window["callback"+args["id"]]=function(json){var smartAdContent="SMART HTML :"+json;document.getElementById("test").innerHTML=smartAdContent;};var dianomiSmartadFrame=document.createElement("div");dianomiSmartadFrame.classList.add("dianomiContent");dianomiSmartadFrame.style.display="block";dianomiSmartadFrame.setAttribute("id","test");this.dianomi_context_wrapper.appendChild(dianomiSmartadFrame);document.body.appendChild(scriptEl);}else{var dianomiSmartadFrame=document.createElement("iframe");var url="https://"+
dianomiContextHost+
"/smartads.epl?id="+
args["id"]+
"&num_ads="+
args["num_ads"];if(args.hasOwnProperty("shuffle")&&args.shuffle==="0"){url+="&shuffle=0";}
if(args.hasOwnProperty("start")){url+="&start="+args["start"];}
if(args.hasOwnProperty("seed")){url+="&seed="+seed;}
if(this.cf){url+="&cf="+encodeURIComponent(this.cf);}
if(data.partner_tcf_status=="2.0"||data["dianomi-tcf"]){url+="&tcString="+
tcData.tcString+
"&can_serve_ads="+
can_serve_ads+
"&can_cookie="+
can_cookie+
"&can_programmatic="+
can_programmatic;}
if(data["partner_tcf_status"]){url+="&partner_tcf_status="+data.partner_tcf_status;}
if(typeof dianomiContextAffiliate!=="undefined"&&dianomiContextAffiliate!=null){url+="&affiliate="+dianomiContextAffiliate;}
if(typeof dianomiContextProductTypeId!=="undefined"&&dianomiContextProductTypeId!=null){url+="&productTypeId="+dianomiContextProductTypeId;}
if(typeof dianomiPageUrl!=="undefined"&&dianomiPageUrl!=null){url+="&url="+encodeURIComponent(dianomiPageUrl);}
dianomiSmartadFrame.id=args["id"];dianomiSmartadFrame.style.order=args["order"];dianomiSmartadFrame.setAttribute("title","dianomi SmartAd Content");var isLazyElement=false;if(args.hasOwnProperty("lazy")&&args.lazy==="1"){lazyElementsToLoad=true;isLazyElement=true;dianomiSmartadFrame.className="lazy dianomiLazy";dianomiSmartadFrame.setAttribute("data-src",url);}else{dianomiSmartadFrame.setAttribute("src",url);}
if(args.hasOwnProperty("scrolling")){dianomiSmartadFrame.style.scrolling=args.scrolling;}
dianomiSmartadFrame.style.minWidth=args["minWidth"];if(args.hasOwnProperty("margin")){dianomiSmartadFrame.style.margin=args["margin"];}
if(args.hasOwnProperty("maxWidth")){dianomiSmartadFrame.style.maxWidth=args["maxWidth"];}
dianomiContextSetWidth(dianomiSmartadFrame,args,viewportWidth);dianomiContextSetFloat(dianomiSmartadFrame,args,viewportWidth);dianomiContextSetHeight(dianomiSmartadFrame,args,viewportWidth);window.addEventListener("resize",function(){dianomiContextSetWidth(dianomiSmartadFrame,args,viewportWidth);dianomiContextSetFloat(dianomiSmartadFrame,args,viewportWidth);dianomiContextSetHeight(dianomiSmartadFrame,args,viewportWidth);},false);dianomiSmartadFrame.style.border="none";dianomiSmartadFrame.style.overflow="hidden";setDisplayType(dianomiSmartadFrame,args,viewportWidth);this.dianomi_context_wrapper.appendChild(dianomiSmartadFrame);isLazyElement&&setLazyLoadObserver(dianomiSmartadFrame);}},iframe:function(args){var dianomiContextIframe=document.createElement("iframe");dianomiContextIframe.setAttribute("data-src",args["src"]);dianomiContextIframe.setAttribute("src",args["src"]);dianomiContextIframe.setAttribute("title","dianomi iframe Content");dianomiContextSetHeight(dianomiContextIframe,args,viewportWidth);window.addEventListener("resize",function(){dianomiContextSetHeight(dianomiContextIframe,args,viewportWidth);},false);dianomiContextIframe.style.width=args["width"];dianomiContextIframe.style.scrolling=args["scrolling"];dianomiContextIframe.style.border=args["border"];this.dianomi_context_wrapper.appendChild(dianomiContextIframe);},recirc:function(args){var dianomiRecircFrame=document.createElement("iframe");var url="https://"+dianomiContextHost+"/recirculation.epl?id="+args["id"];dianomiRecircFrame.id=args["id"];if(args.hasOwnProperty("start")){url+="&start="+args.start;}
if(args.hasOwnProperty("seed")){url+="&seed="+seed;}
if(this.cf){url+="&cf="+encodeURIComponent(this.cf);}
var isLazyElement=false;if(args.hasOwnProperty("lazy")&&args.lazy==="1"){lazyElementsToLoad=true;isLazyElement=true;dianomiRecircFrame.className="lazy";dianomiRecircFrame.setAttribute("data-src",url);}else{dianomiRecircFrame.setAttribute("src",url);}
var recircWidth="100%";if(args.hasOwnProperty("width")){recircWidth=args.width;}
dianomiRecircFrame.style.width=recircWidth;dianomiRecircFrame.setAttribute("title","dianomi Recirculation Content");dianomiContextSetFloat(dianomiRecircFrame,args,viewportWidth);dianomiContextSetHeight(dianomiRecircFrame,args,viewportWidth);dianomiContextSetWidth(dianomiRecircFrame,args,viewportWidth);window.addEventListener("resize",function(){dianomiContextSetFloat(dianomiRecircFrame,args,viewportWidth);dianomiContextSetHeight(dianomiRecircFrame,args,viewportWidth);dianomiContextSetWidth(dianomiRecircFrame,args,viewportWidth);},false);dianomiRecircFrame.style.minWidth=args["minWidth"];dianomiRecircFrame.style.border="none";dianomiRecircFrame.style.overflow="hidden";setDisplayType(dianomiRecircFrame,args,viewportWidth);this.dianomi_context_wrapper.appendChild(dianomiRecircFrame);isLazyElement&&setLazyLoadObserver(dianomiRecircFrame);},googleTag:function(args){getDFPScript();var dianomiContextGPT=document.createElement("div");var googlePushScript=document.createElement("script");var googleDisplayScript=document.createElement("script");var lazyTag="";dianomiContextGPT.id=args["tagID"];dianomiContextGPT.style.padding=args["padding"];dianomiContextGPT.style.textAlign=args["align"];dianomiContextGPT.style.minWidth=args["minWidth"];dianomiContextSetWidth(dianomiContextGPT,args,viewportWidth);dianomiContextSetFloat(dianomiContextGPT,args,viewportWidth);dianomiContextGPT.className="googleAdFrame";googlePushScript.type="text/javascript";if(args.hasOwnProperty("lazy")&&args.lazy==="1"){lazyTag="googletag.pubads().enableLazyLoad({fetchMarginPercent: 100,renderMarginPercent: 80,mobileScaling: 1.5}); ";}
googlePushScript.text=" window.googletag = window.googletag || {cmd: []}; googletag.cmd.push(function() {googletag.defineSlot('"+
args["slot"]+
"', ["+
args["sizes"]+
"], '"+
args["tagID"]+
"').addService(googletag.pubads()); "+
lazyTag+
" googletag.enableServices(); });";googleDisplayScript.type="text/javascript";googleDisplayScript.text=" googletag.cmd.push(function() { googletag.display('"+
args["tagID"]+
"');});";document.head.appendChild(googlePushScript);this.dianomi_context_wrapper.appendChild(dianomiContextGPT);dianomiContextGPT.appendChild(googleDisplayScript);}};var args={};if(data.hasOwnProperty("args")){args=data.args;}
dianomiContextFeed.dianomiDeclarations(args);var host=window.location.hostname;var country_code=data.user.country_code;for(var i=0;i<data.units.length;i++){var unit=data.units[i];if(!is_when_valid(unit,"domain",host)){continue;}
if(!is_when_valid(unit,"country_code",country_code)){continue;}
dianomiContextFeed[unit.type](unit.args);}
lazyElementsToLoad&&lazyElementsListener();}
function dianomiContextSetHeight(frame,args,viewportWidth){var height;if(args.hasOwnProperty("mobileHeight")&&viewportWidth<480){height=args["mobileHeight"];}else if(args.hasOwnProperty("tabletHeight")&&viewportWidth<769&&viewportWidth>=480){height=args["tabletHeight"];}else if(args.hasOwnProperty("responsiveHeight")){window.addEventListener("message",function(e){if(typeof e.data==="string"&&e.origin==="https://"+dianomiContextHost&&/\d{2,5}$/.test(e.data)){var data=e.data.split("-");scroll_height=data[0];var iframe=document.getElementById(data[1]);iframe.style.height=scroll_height+"px";height=scroll_height+"px";console.log(e.data);}},false);}
if(height!==undefined||args.hasOwnProperty("responsiveHeight")){frame.style.height=height;}else{frame.style.height=args["height"];}}
function dianomiContextSetWidth(frame,args,viewportWidth,isVideo=false){if(args.hasOwnProperty("mobileWidthSM")&&viewportWidth<480){frame.style.width=args["mobileWidthSM"];}else if(args.hasOwnProperty("mobileWidth")&&viewportWidth<580){frame.style.width=args["mobileWidth"];}else if(args.hasOwnProperty("tabletWidth")&&viewportWidth<769&&viewportWidth>=580){frame.style.width=args["tabletWidth"];}else{frame.style.width=args["width"];}
if(isVideo){if(viewportWidth<480){frame.style.padding="0";frame.style.width=args["mobileWidthSM"];}else if(args.hasOwnProperty("mobileWidth")&&viewportWidth<580){frame.style.padding="0";frame.style.width=args["mobileWidth"];}else if(args.hasOwnProperty("tabletWidth")&&viewportWidth<769&&viewportWidth>=580){frame.style.padding="0";frame.style.width=args["tabletWidth"];}else if(args.hasOwnProperty("float")){frame.style.padding="0 15px 0 0";}}}
function dianomiContextSetFloat(frame,args,viewportWidth){if(args.hasOwnProperty("mobileFloat")){if(viewportWidth<480){frame.style.cssFloat=args["mobileFloat"];}else{frame.style.cssFloat=args["float"];}}else{frame.style.cssFloat=args["float"];}}
function setMobileDisplayType(frame,args,viewportWidth){if(args.hasOwnProperty("mobileDisplay")&&viewportWidth<480){frame.style.display=args["mobileDisplay"];}else{frame.style.display="block";}}
function setDisplayType(frame,args,viewportWidth){if(args.hasOwnProperty("display")){frame.style.display=args["display"];}else{frame.style.display="block";}}
function iframebuster(){var x=0;var intervalID=window.setInterval(function(){if(window.frameElement){window.parent.document.getElementById(parent.window.frames[window.name].name).style.width="100%";window.parent.document.getElementById(parent.window.frames[window.name].name).style.display="block";var bodyHeight=document.body.scrollHeight;console.log(bodyHeight);window.parent.document.getElementById(parent.window.frames[window.name].name).style.height=20+bodyHeight+"px";}
if(++x===10){window.clearInterval(intervalID);}},1000);}
function videoMPU(){var videoDiv=document.getElementsByClassName("dianomi_video");for(var i=0;i<videoDiv.length;i++){var unitWidth=window.getComputedStyle(videoDiv[i]).width;if(unitWidth=="300px"){videoDiv[i].classList.add("dianomi-mpu-video");}else if(unitWidth>"300px"&&unitWidth<"480px"){videoDiv[i].classList.add("dianomi-smaller-video");}}}
function getDianomiContextHost(){var contextFeeds=document.querySelectorAll(".dianomi_context");if(contextFeeds.length>0){el=contextFeeds[0];var sd=el.getAttribute("data-dianomi-context-hostname");if(sd){return sd;}}
return dianomiContextHost;}
function dianomiContextElement(el,tcData,can_serve_ads,can_cookie,can_programmatic){var done=el.getAttribute("data-dianomi-context-done");if(done&&done==="1"){return;}
var id=el.getAttribute("data-dianomi-context-id");var sd=el.getAttribute("data-dianomi-context-hostname");dianomiContextAffiliate=el.getAttribute("data-dianomi-context-affiliate");dianomiContextProductTypeId=el.getAttribute("data-dianomi-context-product-type-id");if(id===null){console.log("Couldn't find data-dianomi-context-id",el);return;}
if(sd){dianomiContextHost=sd;}
var xmlHttpRequest=new XMLHttpRequest();var test="";if(dianomiContextHost==="dev.dianomi.com"){const now=new Date();test="&test="+Date.now();}
var url="https://"+dianomiContextHost+"/cgi-bin/context.pl?id="+id+test;var pageLocation=getPageLocation();if(checkIsValidURL(pageLocation)){pageHost=pageLocation.split("/")[2];url+="&h="+pageHost+"&url="+encodeURIComponent(pageLocation);dianomiPageUrl=pageLocation;}
xmlHttpRequest.open("GET",url,true);xmlHttpRequest.withCredentials=true;xmlHttpRequest.onreadystatechange=function(){if(xmlHttpRequest.readyState!=4||xmlHttpRequest.status!=200)return;var data=JSON.parse(xmlHttpRequest.responseText);if(isExedra()){data.partner_tcf_status="0";}
dianomiLoadContextTCF(id,el,data);};el.setAttribute("data-dianomi-context-done","1");xmlHttpRequest.send();}
function dianomiLoadContextTCF(id,el,data){if(data.partner_tcf_status=="2.0"||data["dianomi-tcf"]){dianomiGetTCDataLater(function(tcData,can_serve_ads,can_cookie,can_programmatic){dianomiLoadContext(id,el,data,tcData,can_serve_ads,can_cookie,can_programmatic);});return;}
dianomiLoadContext(id,el,data,null,true,true);}
function checkIsValidURL(url){try{const decodedURL=decodeURIComponent(url);const newURL=new URL(decodedURL);return newURL.origin!=="null"?true:false;}catch(e){return false;}}
function getPageLocation(){var contextFeedData=document.querySelectorAll(".dianomi_context")[0].getAttribute("data-referrer-url");var pageLocation=window.location!=window.parent.location?document.referrer:document.location.href;return contextFeedData||pageLocation;}
function dianomiReloadContext(doneTCF=false){if(!(doneTCF===true)){loadTCF(function(){dianomiReloadContext(true);});return;}
var contextFeeds=document.querySelectorAll(".dianomi_context");for(var i=0;i<contextFeeds.length;i++){dianomiContextElement(contextFeeds[i]);}}
function dianomiContextReady(fn){if(document.attachEvent?document.readyState==="complete":document.readyState!=="loading"){loadTCF(function(){fn(true);});}else{document.addEventListener("DOMContentLoaded",function(){loadTCF(function(){fn(true);});});}}
dianomiContextReady(dianomiReloadContext);function dianomiHookScriptLoad(script,func){if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"){tcfLoaded=true;func();}};}else{script.onload=function(){tcfLoaded=true;func();};}}
function loadTCF(cb){if(loadTCFCalled){return;}
loadTCFCalled=true;var s=document.createElement("script");s.type="text/javascript";s.defer=true;s.src="https://"+getDianomiContextHost()+"/js/tcflib.js";dianomiHookScriptLoad(s,cb);document.head.appendChild(s);}
function lazyElementsListener(){var observer=createIntersectionObserver(()=>dianomiReloadContext(true),{threshold:1});var lazyElements=document.querySelectorAll(".dianomiLazy");for(let i=0;i<lazyElements.length;i++){observeElement(lazyElements[i],observer,false);observeElement(lazyElements[i],observer,true);}}
function setLazyLoadObserver(dianomiSmartadFrame){var options={threshold:0};var fn=(entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){setSrcAttribute(entry);observeElement(dianomiSmartadFrame,lazyLoadObserver,false);}});};var lazyLoadObserver=createIntersectionObserver(fn,options);observeElement(dianomiSmartadFrame,lazyLoadObserver,true);}
function setSrcAttribute(element){var dataSrc=element.target.getAttribute("data-src");element.target.src=dataSrc;}
function createIntersectionObserver(fn,options={threshold:0}){return new IntersectionObserver(fn,options);}
function observeElement(element,observer,toObserve){if(toObserve){observer.observe(element);}else{observer.unobserve(element);}}
function getObserverRootElement(element){if(element.tagName.toLowerCase()==="body"){return null;}
const lazyLoadBoundaryElements={marketwatch:"j-scrollViewport"};const keys=Object.keys(lazyLoadBoundaryElements);for(let i=0;i<keys.length;i++){if(element.className.includes(lazyLoadBoundaryElements[keys[i]])){return element;}}
return getObserverRootElement(element.parentElement);}