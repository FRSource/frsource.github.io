!function(e,t,r,n,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o.parcelRequirea1dd&&o.parcelRequirea1dd,s=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,r){if(!s[t]){if(!e[t]){var n="function"==typeof o.parcelRequirea1dd&&o.parcelRequirea1dd;if(!r&&n)return n(t,!0);if(a)return a(t,!0);if(c&&"string"==typeof t)return c(t);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}h.resolve=function(r){return e[t][1][r]||r},h.cache={};var u=s[t]=new l.Module(t);e[t][0].call(u.exports,h,u,u.exports,this)}return s[t].exports;function h(e){return l(h.resolve(e))}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=s,l.parent=a,l.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return o.parcelRequirea1dd}}),o.parcelRequirea1dd=l;for(var u=0;u<t.length;u++)l(t[u]);var h=l(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=h:"function"==typeof define&&define.amd&&define((function(){return h}))}({gAbQq:[function(e,t,r){e("./helpers/bundle-manifest").register(JSON.parse('{"l4a5R":"index.6d8d4ba8.js","dlpcF":"ResizeObserver.es.2ce0de47.js","gnmU7":"contactDialog.12590b0b.js","d1zNb":"contactDialog.2ea68ce0.css","lE8Bv":"serviceWorker.js","acw9c":"index.dc3190f9.css"}'))},{"./helpers/bundle-manifest":"3JTP7"}],"3JTP7":[function(e,t,r){"use strict";var n={};t.exports.register=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},t.exports.resolve=function(e){var t=n[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}},{}],"4aleK":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),i=(e("regenerator-runtime/runtime"),e("./index.scss"),e("domready")),o=n.interopDefault(i),a=e("./logo.ctrl");(async()=>{if(!window.ResizeObserver){const{default:t}=await e("2ecc676b19eb8bf5");window.ResizeObserver=t}if(!matchMedia("(prefers-reduced-motion: reduce)").matches){const e=document.body.querySelectorAll(".load-fadeinup");o.default((()=>setTimeout((()=>e.forEach(((e,t)=>setTimeout((()=>e.classList.add("in")),300*t)))),5500)));const t=document.querySelector(".icon-logomark"),r=t.parentElement,n=t.querySelector("use"),i=Array.from(t.querySelectorAll("path")),s=document.createElement("canvas");s.className="icon-logomark icon-logomark--canvas",r.appendChild(s),i.push(n),new a.LogoCtrl(t,s,i).init()}let t;document.body.querySelector(".btn--contact").addEventListener("click",(async function(){if(!t){this.disabled=!0;const r=await e("cbf953f3014a7a69").catch((()=>this.disabled=!1));if(!r)return;t=new r.ContactDialogCtrl,document.body.querySelector(".content").insertAdjacentElement("afterbegin",t.element),this.disabled=!1}t.isShown?t.show():t.hide()}));const r=[];document.body.querySelectorAll(".btn[data-theme]").forEach((e=>{const t=e.getAttribute("data-theme");r.push(t),e.addEventListener("click",(()=>{localStorage.setItem("FRS:theme",t),r.forEach((e=>document.body.classList.remove("t-"+e))),document.body.classList.add("t-"+t)}))})),"serviceWorker"in navigator&&navigator.serviceWorker.register(e("368c5e56e83aefa9")).catch((e=>console.log("Service worker registration failed: "+e)))})()},{"regenerator-runtime/runtime":"cH8Iq","./index.scss":"jUTZ8",domready:"2ihPj","./logo.ctrl":"bpajq","2ecc676b19eb8bf5":"h3tvY",cbf953f3014a7a69:"7Vb6P","368c5e56e83aefa9":"hT9KF","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],cH8Iq:[function(e,t,r){var n=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),a=new I(n||[]);return o._invoke=function(e,t,r){var n=h;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return _()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=R(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(e,t,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==r&&n.call(x,o)&&(b=x);var L=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(i,o,a,s){var c=u(e[i],e,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(h).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function R(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=u(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function O(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:t,done:!0}}return v.prototype=y,c(L,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(L),c(L,s,"Generator"),c(L,o,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;T(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}("object"==typeof t?t.exports:{});try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},{}],jUTZ8:[function(){},{}],"2ihPj":[function(e,t,r){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(e,r){void 0!==t?t.exports=r():"function"==typeof define&&"object"==typeof define.amd?define(r):this.domready=r()}(0,(function(){var e,t=[],r=document,n=r.documentElement.doScroll,i="DOMContentLoaded",o=(n?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);return o||r.addEventListener(i,e=function(){for(r.removeEventListener(i,e),o=1;e=t.shift();)e()}),function(e){o?setTimeout(e,0):t.push(e)}}))},{}],bpajq:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"LogoCtrl",(()=>i));class i{static randInt(e=0,t=1){return Math.random()*(t-e)+e}static randIntNormalDistributed(e=0,t=1){let r=0,n=0;for(;0===r;)r=Math.random();for(;0===n;)n=Math.random();const i=Math.abs(Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*n))+.1;return(i>3.8?1:i>1?i%1:i>.1&&i<.4?i+.5*Math.random():i<0?0:i)*(t-e)+e}static asyncTimeout(e){return new Promise((t=>setTimeout(t,e)))}constructor(e,t,r,n){this.logo=e,this.canvas=t,this.itemsToReveal=r,this.onFinish=n,this.lastVisibleItem=-1,this.resizeObserver=new window.ResizeObserver(this.onResize.bind(this)),this.ctx=this.canvas.getContext("2d"),this.resizeObserver.observe(e),this.resizeObserver.observe(t)}async onResize(){await this.refreshSvgImage(),this.imgSize=this.logo.querySelector("g").getBoundingClientRect(),this.canvasSize={width:this.canvas.offsetWidth,height:this.canvas.offsetHeight},this.canvas.width=this.canvasSize.width*i.dpi,this.canvas.height=this.canvasSize.height*i.dpi,this.ctx.scale(i.dpi,i.dpi)}async init(){await this.onResize(),this.glitchTimeouted(),setTimeout(this.progressReveal.bind(this),2500)}glitchImg(){const e=this.imgSize.width*i.dpi,t=this.imgSize.height*i.dpi,r=Math.max(this.canvas.clientHeight/this.logo.clientHeight,this.canvas.clientWidth/this.logo.clientWidth);Math.random()<.2?this.logo.style.visibility="hidden":(this.logo.style.visibility=null,this.logo.style.transform=Math.random()<.7?`translate(${i.randIntNormalDistributed(-10,10)}%, ${i.randIntNormalDistributed(-10,10)}%)`:"none");for(let n=0;n<i.randInt(1,13);++n){const n=i.randIntNormalDistributed(0,1),o=i.randIntNormalDistributed(0,1),a=i.randIntNormalDistributed(0,1),s=i.randIntNormalDistributed(0,1);this.ctx.drawImage(this.img,n*e,o*t,a*e*r,s*t*r,i.randIntNormalDistributed(0,this.canvasSize.width-this.imgSize.width),i.randIntNormalDistributed(0,this.canvasSize.height-this.imgSize.height),a*this.imgSize.width,s*this.imgSize.height)}}async glitchTimeouted(){this.logo.style.visibility=null,await Promise.all(new Array(Math.round(i.randInt(.5,3.4))).fill(0).map((async()=>{await i.asyncTimeout(i.randInt(550,2500)),this.glitchImg(),await i.asyncTimeout(i.randInt(50,i.maxGlitchTime))}))),this.ctx.clearRect(0,0,this.canvasSize.width,this.canvasSize.height),this.glitchTimeouted()}async progressReveal(){if(this.lastVisibleItem===this.itemsToReveal.length-1)return this.onFinish?.();this.itemsToReveal[++this.lastVisibleItem].style.visibility="visible",await this.refreshSvgImage(),setTimeout(this.progressReveal.bind(this),i.randInt(200,700))}async refreshSvgImage(){const e=new Image,t=await new Promise((t=>{e.onload=t.bind(void 0,e),this.canvasSize&&(this.logo.setAttribute("width",(this.canvasSize.width*i.dpi).toString()),this.logo.setAttribute("height",(this.canvasSize.height*i.dpi).toString()));const r=(new XMLSerializer).serializeToString(this.logo);e.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(r)}));return this.img=t}}i.maxGlitchTime=600,i.dpi=window.devicePixelRatio},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],JacNc:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach((function(r){"default"!==r&&"__esModule"!==r&&(r in t&&t[r]===e[r]||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}}))})),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],h3tvY:[function(e,t,r){t.exports=e("./helpers/browser/js-loader")(e("./helpers/bundle-url").getBundleURL("l4a5R")+e("./helpers/bundle-manifest").resolve("dlpcF")).then((()=>t.bundle.root("AHOwr")))},{"./helpers/browser/js-loader":"eLFUM","./helpers/bundle-url":"8YnfL","./helpers/bundle-manifest":"3JTP7"}],eLFUM:[function(e,t,r){"use strict";var n=e("../cacheLoader");t.exports=n((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("script");if([].concat(n).some((function(t){return t.src===e})))t();else{var i=document.createElement("script");i.async=!0,i.type="text/javascript",i.charset="utf-8",i.src=e,i.onerror=function(e){i.onerror=i.onload=null,i.remove(),r(e)},i.onload=function(){i.onerror=i.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(i)}}))}))},{"../cacheLoader":"5Ry56"}],"5Ry56":[function(e,t,r){"use strict";var n={},i={},o={};function a(e){switch(e){case"preload":return i;case"prefetch":return o;default:return n}}t.exports=function(e,t){return function(r){var n=a(t);return n[r]?n[r]:n[r]=e.apply(null,arguments).catch((function(e){throw delete n[r],e}))}}},{}],"8YnfL":[function(e,t,r){"use strict";var n={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r.getBundleURL=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),n[e]=t),t},r.getBaseURL=i,r.getOrigin=function(e){var t=(""+e).match(/(https?|file|ftp):\/\/[^/]+/);if(!t)throw new Error("Origin not found");return t[0]}},{}],"7Vb6P":[function(e,t,r){t.exports=Promise.all([e("./helpers/browser/html-loader")(e("./helpers/bundle-url").getBundleURL("l4a5R")+e("./helpers/bundle-manifest").resolve("gdDUr")),e("./helpers/browser/css-loader")(e("./helpers/bundle-url").getBundleURL("l4a5R")+e("./helpers/bundle-manifest").resolve("d1zNb")),e("./helpers/browser/js-loader")(e("./helpers/bundle-url").getBundleURL("l4a5R")+e("./helpers/bundle-manifest").resolve("gnmU7"))]).then((()=>t.bundle.root("2VBIv")))},{"./helpers/browser/html-loader":"r1oYK","./helpers/bundle-url":"8YnfL","./helpers/bundle-manifest":"3JTP7","./helpers/browser/css-loader":"e12S7","./helpers/browser/js-loader":"eLFUM"}],r1oYK:[function(e,t,r){"use strict";var n=e("../cacheLoader");t.exports=n((function(e){return fetch(e).then((function(e){return e.text()}))}))},{"../cacheLoader":"5Ry56"}],e12S7:[function(e,t,r){"use strict";var n=e("../cacheLoader");t.exports=n((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("link");if([].concat(n).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var i=document.createElement("link");i.rel="stylesheet",i.href=e,i.onerror=function(e){i.onerror=i.onload=null,i.remove(),r(e)},i.onload=function(){i.onerror=i.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(i)}}))}))},{"../cacheLoader":"5Ry56"}],hT9KF:[function(e,t,r){t.exports=e("./helpers/bundle-url").getBundleURL("l4a5R")+e("./helpers/bundle-manifest").resolve("lE8Bv")},{"./helpers/bundle-url":"8YnfL","./helpers/bundle-manifest":"3JTP7"}]},["gAbQq","4aleK"],"4aleK");
//# sourceMappingURL=index.6d8d4ba8.js.map
