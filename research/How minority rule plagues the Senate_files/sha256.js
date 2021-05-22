/*! 20210520-3-RELEASE 2021-05-20 */

!function(t){try{var h="input is invalid type",i="undefined"!=typeof ArrayBuffer,s="0123456789abcdef".split(""),r=[-2147483648,8388608,32768,128],e=[24,16,8,0],a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n=["hex","array","digest","arrayBuffer"],o=[];Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),i&&!ArrayBuffer.isView&&(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var f=function(t){return function(h){return new u(!0).update(h)[t]()}},y=function(){var t=f("hex");t.create=function(){return new u},t.update=function(h){return t.create().update(h)};for(var h=0;h<n.length;++h){var i=n[h];t[i]=f(i)}return t};function u(t){t?(o[0]=o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0,this.blocks=o):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}u.prototype.update=function(t){if(!this.finalized){var s,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(h);if(null===t)throw new Error(h);if(i&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||i&&ArrayBuffer.isView(t)))throw new Error(h);s=!0}for(var a,n=0,o,f=t.length,y=this.blocks;n<f;){if(this.hashed&&(this.hashed=!1,y[0]=this.block,y[16]=y[1]=y[2]=y[3]=y[4]=y[5]=y[6]=y[7]=y[8]=y[9]=y[10]=y[11]=y[12]=y[13]=y[14]=y[15]=0),s)for(o=this.start;n<f&&o<64;++n)y[o>>2]|=t[n]<<e[3&o++];else for(o=this.start;n<f&&o<64;++n)(a=t.charCodeAt(n))<128?y[o>>2]|=a<<e[3&o++]:a<2048?(y[o>>2]|=(192|a>>6)<<e[3&o++],y[o>>2]|=(128|63&a)<<e[3&o++]):a<55296||a>=57344?(y[o>>2]|=(224|a>>12)<<e[3&o++],y[o>>2]|=(128|a>>6&63)<<e[3&o++],y[o>>2]|=(128|63&a)<<e[3&o++]):(a=65536+((1023&a)<<10|1023&t.charCodeAt(++n)),y[o>>2]|=(240|a>>18)<<e[3&o++],y[o>>2]|=(128|a>>12&63)<<e[3&o++],y[o>>2]|=(128|a>>6&63)<<e[3&o++],y[o>>2]|=(128|63&a)<<e[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=y[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},u.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,h=this.lastByteIndex;t[16]=this.block,t[h>>2]|=r[3&h],this.block=t[16],h>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},u.prototype.hash=function(){var t=this.h0,h=this.h1,i=this.h2,s=this.h3,r=this.h4,e=this.h5,n=this.h6,o=this.h7,f=this.blocks,y,u,c,p,l,b,d,w,A,B,v;for(y=16;y<64;++y)u=((l=f[y-15])>>>7|l<<25)^(l>>>18|l<<14)^l>>>3,c=((l=f[y-2])>>>17|l<<15)^(l>>>19|l<<13)^l>>>10,f[y]=f[y-16]+u+f[y-7]+c<<0;for(v=h&i,y=0;y<64;y+=4)this.first?(w=704751109,o=(l=f[0]-210244248)-1521486534<<0,s=l+143694565<<0,this.first=!1):(u=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),p=(w=t&h)^t&i^v,o=s+(l=o+(c=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+(d=r&e^~r&n)+a[y]+f[y])<<0,s=l+(b=u+p)<<0),u=(s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10),p=(A=s&t)^s&h^w,n=i+(l=n+(c=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+(d=o&r^~o&e)+a[y+1]+f[y+1])<<0,u=((i=l+(b=u+p)<<0)>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10),p=(B=i&s)^i&t^A,e=h+(l=e+(c=(n>>>6|n<<26)^(n>>>11|n<<21)^(n>>>25|n<<7))+(d=n&o^~n&r)+a[y+2]+f[y+2])<<0,u=((h=l+(b=u+p)<<0)>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),p=(v=h&i)^h&s^B,r=t+(l=r+(c=(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7))+(d=e&n^~e&o)+a[y+3]+f[y+3])<<0,t=l+(b=u+p)<<0;this.h0=this.h0+t<<0,this.h1=this.h1+h<<0,this.h2=this.h2+i<<0,this.h3=this.h3+s<<0,this.h4=this.h4+r<<0,this.h5=this.h5+e<<0,this.h6=this.h6+n<<0,this.h7=this.h7+o<<0},u.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,i=this.h2,r=this.h3,e=this.h4,a=this.h5,n=this.h6,o=this.h7,f=s[t>>28&15]+s[t>>24&15]+s[t>>20&15]+s[t>>16&15]+s[t>>12&15]+s[t>>8&15]+s[t>>4&15]+s[15&t]+s[h>>28&15]+s[h>>24&15]+s[h>>20&15]+s[h>>16&15]+s[h>>12&15]+s[h>>8&15]+s[h>>4&15]+s[15&h]+s[i>>28&15]+s[i>>24&15]+s[i>>20&15]+s[i>>16&15]+s[i>>12&15]+s[i>>8&15]+s[i>>4&15]+s[15&i]+s[r>>28&15]+s[r>>24&15]+s[r>>20&15]+s[r>>16&15]+s[r>>12&15]+s[r>>8&15]+s[r>>4&15]+s[15&r]+s[e>>28&15]+s[e>>24&15]+s[e>>20&15]+s[e>>16&15]+s[e>>12&15]+s[e>>8&15]+s[e>>4&15]+s[15&e]+s[a>>28&15]+s[a>>24&15]+s[a>>20&15]+s[a>>16&15]+s[a>>12&15]+s[a>>8&15]+s[a>>4&15]+s[15&a]+s[n>>28&15]+s[n>>24&15]+s[n>>20&15]+s[n>>16&15]+s[n>>12&15]+s[n>>8&15]+s[n>>4&15]+s[15&n];return f+=s[o>>28&15]+s[o>>24&15]+s[o>>20&15]+s[o>>16&15]+s[o>>12&15]+s[o>>8&15]+s[o>>4&15]+s[15&o]},u.prototype.toString=u.prototype.hex,u.prototype.digest=function(){this.finalize();var t=this.h0,h=this.h1,i=this.h2,s=this.h3,r=this.h4,e=this.h5,a=this.h6,n=this.h7,o=[t>>24&255,t>>16&255,t>>8&255,255&t,h>>24&255,h>>16&255,h>>8&255,255&h,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s,r>>24&255,r>>16&255,r>>8&255,255&r,e>>24&255,e>>16&255,e>>8&255,255&e,a>>24&255,a>>16&255,a>>8&255,255&a];return o.push(n>>24&255,n>>16&255,n>>8&255,255&n),o},u.prototype.array=u.prototype.digest,u.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(32),h=new DataView(t);return h.setUint32(0,this.h0),h.setUint32(4,this.h1),h.setUint32(8,this.h2),h.setUint32(12,this.h3),h.setUint32(16,this.h4),h.setUint32(20,this.h5),h.setUint32(24,this.h6),h.setUint32(28,this.h7),t},t._tfa=t._tfa||{},t._tfa.sha256=t._tfa.sha256||y(),t.TRC=t.TRC||{},t.TRC.sha256=t._tfa.sha256}catch(t){}}(window);