!function(e,t,r,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i.parcelRequirea1dd&&i.parcelRequirea1dd,s=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,r){if(!s[t]){if(!e[t]){var n="function"==typeof i.parcelRequirea1dd&&i.parcelRequirea1dd;if(!r&&n)return n(t,!0);if(a)return a(t,!0);if(c&&"string"==typeof t)return c(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}h.resolve=function(r){return e[t][1][r]||r},h.cache={};var u=s[t]=new l.Module(t);e[t][0].call(u.exports,h,u,u.exports,this)}return s[t].exports;function h(e){return l(h.resolve(e))}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=s,l.parent=a,l.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return i.parcelRequirea1dd}}),i.parcelRequirea1dd=l;for(var u=0;u<t.length;u++)l(t[u]);var h=l(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=h:"function"==typeof define&&define.amd&&define((function(){return h}))}({fsaNV:[function(e,t,r){e("./helpers/bundle-manifest").register(JSON.parse('{"7uSCo":"index.70481410.js","9bs9o":"ResizeObserver.es.30c3b14c.js","1UMtp":"contactDialog.76a7941c.js","hlFLu":"contactDialog.26593260.css","c6oIJ":"serviceWorker.js","k7Svr":"index.2c36aee7.css"}'))},{"./helpers/bundle-manifest":"bbPBH"}],bbPBH:[function(e,t,r){"use strict";var n={};t.exports.register=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},t.exports.resolve=function(e){var t=n[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}},{}],"1qe3a":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=(e("regenerator-runtime/runtime"),e("./index.scss"),e("domready")),i=n.interopDefault(o),a=e("./logo.ctrl");(async()=>{if(!window.ResizeObserver){const{default:t}=await e("2ecc676b19eb8bf5");window.ResizeObserver=t}if(!matchMedia("(prefers-reduced-motion: reduce)").matches){const e=document.body.querySelectorAll(".load-fadeinup");i.default((()=>setTimeout((()=>e.forEach(((e,t)=>setTimeout((()=>e.classList.add("in")),300*t)))),5500)));const t=document.querySelector(".icon-logomark"),r=t.parentElement,n=t.querySelector("use"),o=Array.from(t.querySelectorAll("path")),s=document.createElement("canvas");s.className="icon-logomark icon-logomark--canvas",r.appendChild(s),o.push(n),new a.LogoCtrl(t,s,o).init()}let t;document.body.querySelector(".btn--contact").addEventListener("click",(async function(){if(!t){this.disabled=!0;const r=await e("cbf953f3014a7a69").catch((()=>this.disabled=!1));if(!r)return;t=new r.ContactDialogCtrl,document.body.querySelector(".content").insertAdjacentElement("afterbegin",t.element),this.disabled=!1}t.isShown?t.show():t.hide()}));const r=[];document.body.querySelectorAll(".btn[data-theme]").forEach((e=>{const t=e.getAttribute("data-theme");r.push(t),e.addEventListener("click",(()=>{localStorage.setItem("FRS:theme",t),r.forEach((e=>document.body.classList.remove("t-"+e))),document.body.classList.add("t-"+t)}))})),"serviceWorker"in navigator&&navigator.serviceWorker.register(e("368c5e56e83aefa9")).catch((e=>console.log("Service worker registration failed: "+e)))})()},{"regenerator-runtime/runtime":"fkSby","./index.scss":"jWlEr",domready:"2OJFp","./logo.ctrl":"2mHQY","2ecc676b19eb8bf5":"47NDT",cbf953f3014a7a69:"6As3V","368c5e56e83aefa9":"jLH4F","@parcel/transformer-js/src/esmodule-helpers.js":"6oPxh"}],fkSby:[function(e,t,r){var n=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new I(n||[]);return i._invoke=function(e,t,r){var n=h;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return z()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(e,t,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(T([])));x&&x!==r&&n.call(x,i)&&(b=x);var S=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(o,i,a,s){var c=u(e[o],e,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(h).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function T(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:z}}function z(){return{value:t,done:!0}}return v.prototype=y,c(S,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},E(L.prototype),c(L.prototype,a,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(S),c(S,s,"Generator"),c(S,i,(function(){return this})),c(S,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}("object"==typeof t?t.exports:{});try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},{}],jWlEr:[function(){},{}],"2OJFp":[function(e,t,r){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(e,r){void 0!==t?t.exports=r():"function"==typeof define&&"object"==typeof define.amd?define(r):this.domready=r()}(0,(function(){var e,t=[],r=document,n=r.documentElement.doScroll,o="DOMContentLoaded",i=(n?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);return i||r.addEventListener(o,e=function(){for(r.removeEventListener(o,e),i=1;e=t.shift();)e()}),function(e){i?setTimeout(e,0):t.push(e)}}))},{}],"2mHQY":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"LogoCtrl",(()=>o));class o{static randInt(e=0,t=1){return Math.random()*(t-e)+e}static randIntNormalDistributed(e=0,t=1){let r=0,n=0;for(;0===r;)r=Math.random();for(;0===n;)n=Math.random();const o=Math.abs(Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*n))+.1;return(o>3.8?1:o>1?o%1:o>.1&&o<.4?o+.5*Math.random():o<0?0:o)*(t-e)+e}static asyncTimeout(e){return new Promise((t=>setTimeout(t,e)))}constructor(e,t,r,n){this.logo=e,this.canvas=t,this.itemsToReveal=r,this.onFinish=n,this.lastVisibleItem=-1,this.resizeObserver=new window.ResizeObserver(this.onResize.bind(this)),this.ctx=this.canvas.getContext("2d"),this.resizeObserver.observe(e),this.resizeObserver.observe(t)}async onResize(){await this.refreshSvgImage(),this.imgSize=this.logo.querySelector("g").getBoundingClientRect(),this.canvasSize={width:this.canvas.offsetWidth,height:this.canvas.offsetHeight},this.canvas.width=this.canvasSize.width*o.dpi,this.canvas.height=this.canvasSize.height*o.dpi,this.ctx.scale(o.dpi,o.dpi)}async init(){await this.onResize(),this.glitchTimeouted(),setTimeout(this.progressReveal.bind(this),2500)}glitchImg(){const e=this.imgSize.width*o.dpi,t=this.imgSize.height*o.dpi,r=Math.max(this.canvas.clientHeight/this.logo.clientHeight,this.canvas.clientWidth/this.logo.clientWidth);Math.random()<.2?this.logo.style.visibility="hidden":(this.logo.style.visibility=null,this.logo.style.transform=Math.random()<.7?`translate(${o.randIntNormalDistributed(-10,10)}%, ${o.randIntNormalDistributed(-10,10)}%)`:"none");for(let n=0;n<o.randInt(1,13);++n){const n=o.randIntNormalDistributed(0,1),i=o.randIntNormalDistributed(0,1),a=o.randIntNormalDistributed(0,1),s=o.randIntNormalDistributed(0,1);this.ctx.drawImage(this.img,n*e,i*t,a*e*r,s*t*r,o.randIntNormalDistributed(0,this.canvasSize.width-this.imgSize.width),o.randIntNormalDistributed(0,this.canvasSize.height-this.imgSize.height),a*this.imgSize.width,s*this.imgSize.height)}}async glitchTimeouted(){this.logo.style.visibility=null,await Promise.all(new Array(Math.round(o.randInt(.5,3.4))).fill(0).map((async()=>{await o.asyncTimeout(o.randInt(550,2500)),this.glitchImg(),await o.asyncTimeout(o.randInt(50,o.maxGlitchTime))}))),this.ctx.clearRect(0,0,this.canvasSize.width,this.canvasSize.height),this.glitchTimeouted()}async progressReveal(){if(this.lastVisibleItem===this.itemsToReveal.length-1)return this.onFinish?.();this.itemsToReveal[++this.lastVisibleItem].style.visibility="visible",await this.refreshSvgImage(),setTimeout(this.progressReveal.bind(this),o.randInt(200,700))}async refreshSvgImage(){const e=new Image,t=await new Promise((t=>{e.onload=t.bind(void 0,e),this.canvasSize&&(this.logo.setAttribute("width",(this.canvasSize.width*o.dpi).toString()),this.logo.setAttribute("height",(this.canvasSize.height*o.dpi).toString()));const r=(new XMLSerializer).serializeToString(this.logo);e.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(r)}));return this.img=t}}o.maxGlitchTime=600,o.dpi=window.devicePixelRatio},{"@parcel/transformer-js/src/esmodule-helpers.js":"6oPxh"}],"6oPxh":[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach((function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})})),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"47NDT":[function(e,t,r){t.exports=e("./helpers/browser/js-loader")(e("./helpers/bundle-url").getBundleURL("7uSCo")+e("./helpers/bundle-manifest").resolve("9bs9o")).then((()=>t.bundle.root("fPgBA")))},{"./helpers/browser/js-loader":"63XH1","./helpers/bundle-url":"7zeEW","./helpers/bundle-manifest":"bbPBH"}],"63XH1":[function(e,t,r){"use strict";var n=e("../cacheLoader");t.exports=n((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("script");if([].concat(n).some((function(t){return t.src===e})))t();else{var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.charset="utf-8",o.src=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),r(e)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))},{"../cacheLoader":"dvCw4"}],dvCw4:[function(e,t,r){"use strict";var n={},o={},i={};function a(e){switch(e){case"preload":return o;case"prefetch":return i;default:return n}}t.exports=function(e,t){return function(r){var n=a(t);return n[r]?n[r]:n[r]=e.apply(null,arguments).catch((function(e){throw delete n[r],e}))}}},{}],"7zeEW":[function(e,t,r){"use strict";var n={};function o(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r.getBundleURL=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),n[e]=t),t},r.getBaseURL=o,r.getOrigin=function(e){var t=(""+e).match(/(https?|file|ftp):\/\/[^/]+/);if(!t)throw new Error("Origin not found");return t[0]}},{}],"6As3V":[function(e,t,r){t.exports=Promise.all([e("./helpers/browser/html-loader")(e("./helpers/bundle-url").getBundleURL("7uSCo")+e("./helpers/bundle-manifest").resolve("2NyTm")),e("./helpers/browser/css-loader")(e("./helpers/bundle-url").getBundleURL("7uSCo")+e("./helpers/bundle-manifest").resolve("hlFLu")),e("./helpers/browser/js-loader")(e("./helpers/bundle-url").getBundleURL("7uSCo")+e("./helpers/bundle-manifest").resolve("1UMtp"))]).then((()=>t.bundle.root("96OEZ")))},{"./helpers/browser/html-loader":"bHARo","./helpers/bundle-url":"7zeEW","./helpers/bundle-manifest":"bbPBH","./helpers/browser/css-loader":"iBjCb","./helpers/browser/js-loader":"63XH1"}],bHARo:[function(e,t,r){"use strict";var n=e("../cacheLoader");t.exports=n((function(e){return fetch(e).then((function(e){return e.text()}))}))},{"../cacheLoader":"dvCw4"}],iBjCb:[function(e,t,r){"use strict";var n=e("../cacheLoader");t.exports=n((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("link");if([].concat(n).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),r(e)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))},{"../cacheLoader":"dvCw4"}],jLH4F:[function(e,t,r){t.exports=e("./helpers/bundle-url").getBundleURL("7uSCo")+e("./helpers/bundle-manifest").resolve("c6oIJ")},{"./helpers/bundle-url":"7zeEW","./helpers/bundle-manifest":"bbPBH"}]},["fsaNV","1qe3a"],"1qe3a");
//# sourceMappingURL=index.70481410.js.map
