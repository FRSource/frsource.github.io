!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(t,e,n,r,i){/* eslint-disable no-undef */var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof o[r]&&o[r],c=s.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(e,n){if(!c[e]){if(!t[e]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var i="function"==typeof o[r]&&o[r];if(!n&&i)return i(e,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(s)return s(e,!0);// Try the node require function if it exists.
if(a&&"string"==typeof e)return a(e);var h=Error("Cannot find module '"+e+"'");throw h.code="MODULE_NOT_FOUND",h}d.resolve=function(n){var r=t[e][1][n];return null!=r?r:n},d.cache={};var f=c[e]=new u.Module(e);t[e][0].call(f.exports,d,f,f.exports,this)}return c[e].exports;function d(t){var e=d.resolve(t);return!1===e?{}:u(e)}}u.isParcelRequire=!0,u.Module=function(t){this.id=t,this.bundle=u,this.exports={}},u.modules=t,u.cache=c,u.parent=s,u.register=function(e,n){t[e]=[function(t,e){e.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return o[r]}}),o[r]=u;for(var h=0;h<e.length;h++)u(e[h]);if(n){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var f=u(n);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd?define(function(){return f}):i&&(this[i]=f)}}({fPvCC:[function(t,e,n){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);var r=arguments[3],i=function(){if("undefined"!=typeof Map)return Map;/**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return /** @class */function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{/**
             * @returns {boolean}
             */get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),/**
         * @param {*} key
         * @returns {*}
         */e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},/**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},/**
         * @param {*} key
         * @returns {void}
         */e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},/**
         * @param {*} key
         * @returns {void}
         */e.prototype.has=function(e){return!!~t(this.__entries__,e)},/**
         * @returns {void}
         */e.prototype.clear=function(){this.__entries__.splice(0)},/**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,s=void 0!==r&&r.Math===Math?r:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),c="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(s):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},a=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,h=/** @class */function(){/**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */function t(){/**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */this.connected_=!1,/**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */this.mutationEventsAdded_=!1,/**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */this.mutationsObserver_=null,/**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */function(t,e){var n=!1,r=!1,i=0;/**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */function o(){n&&(n=!1,t()),r&&a()}/**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */function s(){c(o)}/**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */function a(){var t=Date.now();if(n){// Reject immediately following calls.
if(t-i<2)return;// Schedule new call to be in invoked when the pending one is resolved.
// This is important for "transitions" which never actually start
// immediately so there is a chance that we might miss one if change
// happens amids the pending invocation.
r=!0}else n=!0,r=!1,setTimeout(s,20);i=t}return a}(this.refresh.bind(this),0)}return(/**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},/**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},/**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */t.prototype.refresh=function(){// Continue running updates if changes have been detected as there might
// be future ones caused by CSS transitions.
this.updateObservers_()&&this.refresh()},/**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */t.prototype.updateObservers_=function(){// Collect observers that have active observations.
var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return(// Deliver notifications in a separate cycle in order to avoid any
// collisions between observers, e.g. when multiple instances of
// ResizeObserver are tracking the same element and the callback of one
// of them changes content dimensions of the observed target. Sometimes
// this may result in notifications being blocked for the rest of observers.
t.forEach(function(t){return t.broadcastActive()}),t.length>0)},/**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */t.prototype.connect_=function(){// Do nothing if running in a non-browser environment or if listeners
// have been already added.
o&&!this.connected_&&(// Subscription to the "Transitionend" event is used as a workaround for
// delayed transitions. This way it's possible to capture at least the
// final state of an element.
document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},/**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */t.prototype.disconnect_=function(){// Do nothing if running in a non-browser environment or if listeners
// have been already removed.
o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},/**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},/**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},/**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */t.instance_=null,t)}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){// Return the local global object if it's not possible extract one from
// provided element.
return t&&t.ownerDocument&&t.ownerDocument.defaultView||s},l=b(0,0,0,0);/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */function p(t){return parseFloat(t)||0}/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+p(t["border-"+n+"-width"])},0)}/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */var _=// Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
// interface.
"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */var m=/** @class */function(){/**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */function t(t){/**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */this.broadcastWidth=0,/**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */this.broadcastHeight=0,/**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */this.contentRect_=b(0,0,0,0),this.target=t}return(/**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */t.prototype.isActive=function(){var t=/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */function(t){if(!o)return l;if(_(t)){var e;return b(0,0,(e=t.getBBox()).width,e.height)}return(/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */function(t){// Client width & height properties can't be
// used exclusively as they provide rounded values.
var e=t.clientWidth,n=t.clientHeight;// By this condition we can catch all non-replaced inline, hidden and
// detached elements. Though elements with width & height properties less
// than 0.5 will be discarded as well.
//
// Without it we would need to implement separate methods for each of
// those cases and it's not possible to perform a precise and performance
// effective test for hidden elements. E.g. even jQuery's ':visible' filter
// gives wrong results for elements with width & height less than 0.5.
if(!e&&!n)return l;var r=d(t).getComputedStyle(t),i=/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=p(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=p(r.width),a=p(r.height);// Following steps can't be applied to the document's root element as its
// client[Width/Height] properties represent viewport area of the window.
// Besides, it's as well not necessary as the <html> itself neither has
// rendered scroll bars nor it can be clipped.
if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=v(r,"left","right")+o),Math.round(a+s)!==n&&(a-=v(r,"top","bottom")+s)),t!==d(t).document.documentElement){// In some browsers (only in Firefox, actually) CSS width & height
// include scroll bars size which can be removed at this step as scroll
// bars are the only difference between rounded dimensions + paddings
// and "client" properties, though that is not always true in Chrome.
var u=Math.round(c+o)-e,h=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(h)&&(a-=h)}return b(i.left,i.top,c,a)}(t))}(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},/**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t)}(),ResizeObserverEntry=/**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */function(t,e){var n,r,i,o,s,c=(n=e.x,r=e.y,i=e.width,o=e.height,// Rectangle's properties are not writable and non-enumerable.
f(s=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:r,width:i,height:o,top:r,right:n+i,bottom:o+r,left:n}),s);// According to the specification following properties are not writable
// and are also not enumerable in the native implementation.
//
// Property accessors are not being used as they'd require to define a
// private WeakMap storage which may cause memory leaks in browsers that
// don't support this type of collections.
f(this,{target:t,contentRect:c})},y=/** @class */function(){/**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */function t(t,e,n){if(/**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */this.activeObservations_=[],/**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */this.observations_=new i,"function"!=typeof t)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return(/**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */t.prototype.observe=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");// Do nothing if current environment doesn't have the Element interface.
if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;// Do nothing if element is already being observed.
e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),// Force the update of observations.
this.controller_.refresh())}},/**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */t.prototype.unobserve=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");// Do nothing if current environment doesn't have the Element interface.
if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;// Do nothing if element is not being observed.
e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},/**
     * Stops observing all elements.
     *
     * @returns {void}
     */t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},/**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},/**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */t.prototype.broadcastActive=function(){// Do nothing if observer doesn't have active observations.
if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new ResizeObserverEntry(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},/**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */t.prototype.clearActive=function(){this.activeObservations_.splice(0)},/**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */t.prototype.hasActive=function(){return this.activeObservations_.length>0},t)}(),g="undefined"!=typeof WeakMap?new WeakMap:new i,ResizeObserver=/**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */function ResizeObserver(t){if(!(this instanceof ResizeObserver))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var e=new y(t,h.getInstance(),this);g.set(this,e)};// Expose public methods of ResizeObserver.
["observe","unobserve","disconnect"].forEach(function(t){ResizeObserver.prototype[t]=function(){var e;return(e=g.get(this))[t].apply(e,arguments)}});var w=// Export existing implementation if available.
void 0!==s.ResizeObserver?s.ResizeObserver:ResizeObserver;n.default=w},{"@parcel/transformer-js/src/esmodule-helpers.js":"bUjUS"}]},[],null,"parcelRequire6566")//# sourceMappingURL=ResizeObserver.es.89d490b5.js.map
;
//# sourceMappingURL=ResizeObserver.es.89d490b5.js.map
