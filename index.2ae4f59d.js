!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,r,n,o){/* eslint-disable no-undef */var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[n]&&i[n],c=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(t,r){if(!c[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var o="function"==typeof i[n]&&i[n];if(!r&&o)return o(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(a)return a(t,!0);// Try the node require function if it exists.
if(l&&"string"==typeof t)return l(t);var u=Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}d.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},d.cache={};var f=c[t]=new s.Module(t);e[t][0].call(f.exports,d,f,f.exports,this)}return c[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:s(t)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=c,s.parent=a,s.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(s,"root",{get:function(){return i[n]}}),i[n]=s;for(var u=0;u<t.length;u++)s(t[u]);if(r){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var f=s(r);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd?define(function(){return f}):o&&(this[o]=f)}}({"2nfzK":[function(e,t,r){e("e552f2d61c9d1b68").register(JSON.parse('{"9ltx4":"index.2ae4f59d.js","ivnvI":"ResizeObserver.es.e3abc4cb.js","iGomz":"contactDialog.31cb0a93.js","6kmWC":"tpl.7f3037e4.html","dTynU":"contactDialog.c43a6985.css","g8wR7":"serviceWorker.js","A3RkZ":"index.436676f7.css"}'))},{e552f2d61c9d1b68:"gcGNu"}],gcGNu:[function(e,t,r){var n={};t.exports.register=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},t.exports.resolve=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}},{}],"8RSWf":[function(e,t,r){/// <reference lib="dom" />
var n=e("@parcel/transformer-js/src/esmodule-helpers.js");e("regenerator-runtime/runtime"),e("./index.scss");var o=e("domready"),i=n.interopDefault(o),a=e("./logo.ctrl");(async()=>{let t;if(!window.ResizeObserver){let{default:t}=await e("3142584a642ccf32");window.ResizeObserver=t}if(!matchMedia("(prefers-reduced-motion: reduce)").matches){let e=document.body.querySelectorAll(".load-fadeinup");(0,i.default)(()=>setTimeout(()=>e.forEach((e,t)=>setTimeout(()=>e.classList.add("in"),300*t)),3500));let t=document.querySelector(".icon-logomark");(0,a.startLogoAnimation)(t)}document.body.querySelector(".btn--contact").addEventListener("click",async function(){if(!t){this.disabled=!0;let r=await e("8c7be74716b631e6").catch(()=>this.disabled=!1);if(!r)return;t=new r.ContactDialogCtrl,await r.ContactDialogCtrl.templateLoader,document.body.querySelector(".content").insertAdjacentElement("afterbegin",t.element),this.disabled=!1}t.isShown()?t.hide():t.show()});let r=[];document.body.querySelectorAll(".btn[data-theme]").forEach(e=>{let t=e.getAttribute("data-theme");r.push(t),e.addEventListener("click",()=>{localStorage.setItem("FRS:theme",t),r.forEach(e=>document.body.classList.remove("t-"+e)),document.body.classList.add("t-"+t)})}),"serviceWorker"in navigator&&navigator.serviceWorker.register(e("aa35a12cc35072eb")).catch(e=>console.log("Service worker registration failed: "+e))})()},{"regenerator-runtime/runtime":"gMHOq","./index.scss":"49xYu",domready:"5O9Qp","./logo.ctrl":"f6Rj7","3142584a642ccf32":"5bQtG","8c7be74716b631e6":"f0u04",aa35a12cc35072eb:"7A1IH","@parcel/transformer-js/src/esmodule-helpers.js":"bUjUS"}],gMHOq:[function(e,t,r){/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,r,n,i){var a,c,l=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(l,"_invoke",{value:(a=new k(i||[]),c=d,function(r,o){if(c===h)throw Error("Generator is already running");if(c===p){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var l=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),m);var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,m):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,m)}(i,a);if(l){if(l===m)continue;return l}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===d)throw c=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var s=f(e,n,a);if("normal"===s.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?p:"suspendedYield",s.arg===m)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=s.arg)}})}),l)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",h="executing",p="completed",m={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function v(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};s(b,a,function(){return this});var w=Object.getPrototypeOf,E=w&&w(w(_([])));E&&E!==r&&n.call(E,a)&&// of the polyfill.
(b=E);var x=v.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function j(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,c){var l=f(e[o],e,i);if("throw"===l.type)c(l.arg);else{var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):t.resolve(u).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
s.value=e,a(s)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,c)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return y.prototype=v,o(x,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},j(L.prototype),s(L.prototype,c,function(){return this}),e.AsyncIterator=L,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
j(x),s(x,l,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
s(x,a,function(){return this}),s(x,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=_,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:_(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),m}},e}(t.exports);try{regeneratorRuntime=n}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},{}],"49xYu":[function(){},{}],"5O9Qp":[function(e,t,r){var n,o,i,a,c,l;/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */t.exports=(o=[],a=(i=document).documentElement.doScroll,c="DOMContentLoaded",(l=(a?/^loaded|^c/:/^loaded|^i|^c/).test(i.readyState))||i.addEventListener(c,n=function(){for(i.removeEventListener(c,n),l=1;n=o.shift();)n()}),function(e){l?setTimeout(e,0):o.push(e)})},{}],f6Rj7:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"startLogoAnimation",()=>c);var o=e("powerglitch");let i=(e=0,t=1)=>Math.random()*(t-e)+e,a=e=>{let t=Array.from(e.querySelectorAll("path"));return t.push(e.querySelector("use")),t},c=e=>{let t=-1,r=[a(e)];r[0].forEach(e=>e.style.visibility="hidden");let n=document.createElement("div");n.style.width="100%",n.style.height="100%",e.parentElement.appendChild(n),n.appendChild(e);let c=async()=>{let e;t===r[0].length-1?e=i(1e3,6e3):(++t,r.forEach(e=>e[t].style.visibility="visible"),e=i(300,700)),l(),setTimeout(c.bind(void 0),e)},l=()=>{(0,o.PowerGlitch).glitch(n,{timing:{duration:i(300,2e3),iterations:1}})};setTimeout(c.bind(void 0),2500),l(),r=Array.from(n.parentElement.querySelectorAll("svg[role=img]")).map(e=>a(e)),n.parentElement.style.width=n.parentElement.parentElement.style.width="100%",n.parentElement.style.height=n.parentElement.parentElement.style.height="100%",n.parentElement.style.gridTemplate="50% 50% / 50% 50%"}},{powerglitch:"ziK3M","@parcel/transformer-js/src/esmodule-helpers.js":"bUjUS"}],ziK3M:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.PowerGlitch=r.mergeOptions=void 0;/**
 * Get best-looking default options for most elements for a given playMode.
 */let n=(e="always")=>({playMode:e,createContainers:!0,hideOverflow:!1,timing:"always"===e?{duration:2e3,iterations:1/0}:{duration:250,iterations:1},glitchTimeSpan:"always"===e?{start:.5,end:.7}:{start:0,end:1},shake:{velocity:15,amplitudeX:.2,amplitudeY:.2},slice:"click"===e?{count:15,velocity:20,minHeight:.02,maxHeight:.15,hueRotate:!0}:{count:6,velocity:15,minHeight:.02,maxHeight:.15,hueRotate:!0},pulse:!1}),o=(e,t)=>{if(!e.glitchTimeSpan)return 1;let r=e.glitchTimeSpan.start,n=e.glitchTimeSpan.end;if(t<r||t>n)return 0;let o=r+(n-r)/2;return t<o?(t-r)/(o-r):(n-t)/(n-o)},i=(e,t)=>(Math.random()-.5)*2*o(e,t),a=({minHeight:e,maxHeight:t,minWidth:r,maxWidth:n})=>{let o=Math.floor(Math.random()*((t-e)*100+1))+100*e,i=Math.floor(Math.random()*((n-r)*100+1))+100*r,a=Math.floor(Math.random()*(100-o)),c=Math.floor(Math.random()*(100-i)),l=`${c+i}% ${a}%`,s=`${c+i}% ${a+o}%`,u=`${c}% ${a+o}%`,f=`${c}% ${a}%`;return`polygon(${l},${s},${u},${f})`},c=e=>{let t=Math.floor(e.slice.velocity*e.timing.duration/1e3)+1,r=[];for(let n=0;n<t;++n){if(0===o(e,n/t)){r.push({opacity:"0",transform:"none",clipPath:"unset"});continue}let c=30*i(e,n/t),l={opacity:"1",transform:`translate3d(${c}%,0,0)`,clipPath:a({minHeight:e.slice.minHeight,maxHeight:e.slice.maxHeight,minWidth:1,maxWidth:1})};e.slice.hueRotate&&(l.filter=`hue-rotate(${Math.floor(360*i(e,n/t))}deg)`),r.push(l)}return{steps:r,timing:Object.assign({easing:`steps(${t},jump-start)`},e.timing)}},l=e=>e.pulse?{steps:[{transform:"scale(1)",opacity:"1"},{transform:`scale(${e.pulse.scale})`,opacity:"0"}],timing:Object.assign(Object.assign({},e.timing),{delay:(e.glitchTimeSpan?e.glitchTimeSpan.start:0)*e.timing.duration,easing:"ease-in-out"})}:null,s=e=>{if(!e.shake)return{steps:[],timing:{}};let t=Math.floor(e.shake.velocity*e.timing.duration/1e3)+1,r=[];for(let n=0;n<t;++n){let o=i(e,n/t)*e.shake.amplitudeX*100,a=i(e,n/t)*e.shake.amplitudeY*100;r.push({transform:`translate3d(${o}%,${a}%,0)`})}return{steps:r,timing:Object.assign({easing:`steps(${t},jump-start)`},e.timing)}},u=e=>[s(e),l(e),...Array.from({length:e.slice.count}).map(()=>c(e))].filter(e=>null!==e);r.mergeOptions=(...e)=>{// eslint-disable-next-line @typescript-eslint/no-explicit-any
let t=e=>e&&"object"==typeof e;return e.reduce((e,n)=>(Object.keys(n).forEach(o=>{t(e[o])&&t(n[o])?e[o]=(0,r.mergeOptions)(e[o],n[o]):void 0!==n[o]&&(e[o]=n[o])}),e),{})};/**
 * Prepare the DOM to set up the glitch effect.
 * @remarks
 * Depending on the element state:
 *  - Whether it was glitched before or not,
 *  - Whether current element display attributes
 *  - Whether options.createContainers is true/false
 * The top-level container and layer containers might be different objects and might need to be created.
 * @param element
 * @param options
 * @returns
 */let f=(e,t)=>{var r,n;// If not creating the containers
if(!t.createContainers)return{container:e,layersContainer:e,glitched:e.firstElementChild};// If first glitch
if(!e.dataset.glitched){// Setup the layer container using grid to stack elements
let t=document.createElement("div"),n=document.createElement("div");return getComputedStyle(e).getPropertyValue("display").match(/^inline/)&&(n.style.display="inline-block"),// Add the layers container to the global container
n.appendChild(t),null===// Replace element with the new container
(r=e.parentElement)||void 0===r||r.insertBefore(n,e),t.prepend(e),{container:n,layersContainer:t,glitched:e}}// Not first glitch, with createContainers=true
let o=e.parentElement,i=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement;// Remove all glitch layers but keep the first one (which is the original element)
for(;o.children.length>1;)o.removeChild(o.children[1]);return(// Cancel the animation on the first layer
o.firstElementChild.getAnimations().forEach(e=>e.cancel()),{container:i,layersContainer:o,glitched:e})},d=(e,t,r)=>{let{glitched:n,container:o,layersContainer:i}=f(e,r);// Force grid display on the layer container
i.style.display="grid",r.hideOverflow&&(o.style.overflow="hidden"),r.html&&(n.innerHTML=r.html),// Stack original element too (it is used as the base shaking layer)
n.style.gridArea="1/1/-1/-1";// Base layer
let a=n.cloneNode(!0);// Stack this layer
a.style.gridArea="1/1/-1/-1",a.style.userSelect="none",a.style.pointerEvents="none",a.style.opacity="0";for(let e=0;e<t.length-1;++e){let e=a.cloneNode(!0);i.appendChild(e)}// Glitch control functions
let c=()=>{t.forEach((e,t)=>{i.children[t].animate(e.steps,e.timing)})},l=()=>{t.forEach((e,t)=>{i.children[t].getAnimations().forEach(e=>{e.cancel()})})};switch(// Depending on the selected play mode, orchestrate when to start/stop the glitch
o.onmouseenter=null,o.onmouseleave=null,o.onclick=null,r.playMode){case"always":c();break;case"hover":o.onmouseenter=c,o.onmouseleave=l;break;case"click":o.onclick=()=>{l(),c()}}return(// Mark the glitched element as glitched for next round
e.dataset.glitched="1",{container:o,startGlitch:c,stopGlitch:l})};r.PowerGlitch={glitch:(e=".powerglitch",t={})=>{// Fix options with defaults
let o=(0,r.mergeOptions)(n(t.playMode),t),i=[];"string"==typeof e?i=Array.from(document.querySelectorAll(e)):e instanceof NodeList?i=Array.from(e):Array.isArray(e)?i=e:e instanceof HTMLElement&&(i=[e]);// Generate all animation layers
let a=u(o),c=i.map(e=>d(e,a,o));// Return list of containers and glitch control functions
return{containers:c.map(e=>e.container),startGlitch:()=>c.forEach(e=>e.startGlitch()),stopGlitch:()=>c.forEach(e=>e.stopGlitch())}},generateLayers:u,getDefaultOptions:n}},{}],bUjUS:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"5bQtG":[function(e,t,r){t.exports=e("22e17968706a6a30")(e("609106a1d1c6b9f8").getBundleURL("9ltx4")+e("473e8e0e512c2388").resolve("ivnvI")).then(()=>t.bundle.root("fPvCC"))},{"22e17968706a6a30":"Q88ei","609106a1d1c6b9f8":"2Dkqa","473e8e0e512c2388":"gcGNu"}],Q88ei:[function(e,t,r){var n=e("daf99c5e17bba2e7");t.exports=n(function(e){return new Promise(function(t,r){if([].concat(document.getElementsByTagName("script")).some(function(t){return t.src===e})){t();return}var n=document.createElement("link");n.href=e,n.rel="preload",n.as="script",document.head.appendChild(n);var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.src=e,o.onerror=function(t){var n=TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));o.onerror=o.onload=null,o.remove(),r(n)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)})})},{daf99c5e17bba2e7:"ePlQu"}],ePlQu:[function(e,t,r){var n={},o={},i={};t.exports=function(e,t){return function(r){var a=function(e){switch(e){case"preload":return o;case"prefetch":return i;default:return n}}(t);return a[r]?a[r]:a[r]=e.apply(null,arguments).catch(function(e){throw delete a[r],e})}}},{}],"2Dkqa":[function(e,t,r){var n={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r.getBundleURL=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return o(e[2])}return"/"}(),n[e]=t),t},r.getBaseURL=o,r.getOrigin=// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function(e){var t=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!t)throw Error("Origin not found");return t[0]}},{}],f0u04:[function(e,t,r){t.exports=Promise.all([e("4994be9b643fc581")(e("29222a9db0b052e8").getBundleURL("9ltx4")+e("74cbe52e7bcd8960").resolve("dTynU")),e("dcb613d5606c9570")(e("29222a9db0b052e8").getBundleURL("9ltx4")+e("74cbe52e7bcd8960").resolve("iGomz"))]).then(()=>t.bundle.root("asAuK"))},{"4994be9b643fc581":"2C3Hw","29222a9db0b052e8":"2Dkqa","74cbe52e7bcd8960":"gcGNu",dcb613d5606c9570:"Q88ei"}],"2C3Hw":[function(e,t,r){var n=e("d5adc449f004578d");t.exports=n(function(e){return new Promise(function(t,r){if([].concat(document.getElementsByTagName("link")).some(function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})){t();return}var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onerror=function(e){n.onerror=n.onload=null,n.remove(),r(e)},n.onload=function(){n.onerror=n.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(n)})})},{d5adc449f004578d:"ePlQu"}],"7A1IH":[function(e,t,r){t.exports=e("d7824f065d5267f5").getBundleURL("9ltx4")+e("76f7c9589fb75253").resolve("g8wR7")},{d7824f065d5267f5:"2Dkqa","76f7c9589fb75253":"gcGNu"}]},["2nfzK","8RSWf"],"8RSWf","parcelRequire6566")//# sourceMappingURL=index.2ae4f59d.js.map
;
//# sourceMappingURL=index.2ae4f59d.js.map
