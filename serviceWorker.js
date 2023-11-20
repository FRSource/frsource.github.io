!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,n,r,o){/* eslint-disable no-undef */var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c="function"==typeof i[r]&&i[r],s=c.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,n){if(!s[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var o="function"==typeof i[r]&&i[r];if(!n&&o)return o(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(c)return c(t,!0);// Try the node require function if it exists.
if(a&&"string"==typeof t)return a(t);var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}d.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},d.cache={};var u=s[t]=new f.Module(t);e[t][0].call(u.exports,d,u,u.exports,this)}return s[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=s,f.parent=c,f.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(f,"root",{get:function(){return i[r]}}),i[r]=f;for(var l=0;l<t.length;l++)f(t[l]);if(n){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var u=f(n);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd?define(function(){return u}):o&&(this[o]=u)}}({kHO9w:[function(e,t,n){(0,e("@parcel/service-worker")._register)(["/index.html","/favicon.6262c1fb.svg","/index.d3a34931.js","/ResizeObserver.es.a1403957.js","/contactDialog.20798dc9.js","/tpl.7f3037e4.html","/contactDialog.c43a6985.css","/index.436676f7.css"],"ac93aed1")},{"@parcel/service-worker":"6A5Mq"}],"6A5Mq":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"manifest",()=>o),r.export(n,"version",()=>i),// Called by the runtime.
r.export(n,"_register",()=>c);let o=[],i="";function c(e,t){o=e,i=t}},{"@parcel/transformer-js/src/esmodule-helpers.js":"j3tjD"}],j3tjD:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}],bdURY:[function(e,t,n){/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="WebWorker" />
var r=e("@parcel/service-worker");// pages that are controlled by this service worker
let o=["/","/index.html"],i="frsource-cache-"+r.version,c=self;(0,r.manifest).unshift("https://www.frsource.org/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js","https://fonts.googleapis.com/css2?family=Inconsolata&display=swap","https://fonts.gstatic.com/s/inconsolata/v20/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32kXWdycuJDA.woff","/site.webmanifest","/browserconfig.xml","/favicon.ico","/favicon-32x32.png","/robots.txt","/humans.txt"),// Listen for the install event, which fires when the service worker is being installed
c.addEventListener("install",e=>{// wait with finishing of the installation until initial caching of statically provided file paths is done
e.waitUntil(caches.open(i).then(e=>e.addAll(r.manifest)))}),// Activate is when the service worker actually takes over from the previous
// version, which is a good time to clean up old caches
c.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e// Remove any cache entry that not matches the current cache name
    .filter(e=>e!==i).map(e=>caches.delete(e)))))}),c.addEventListener("fetch",function(e){e.respondWith((async()=>{if(!e.clientId)return fetch(e.request);let t=await c.clients.get(e.clientId);if(!t)return fetch(e.request);// don't intercept calls coming outside of your scope
let n=new URL(t.url);if(!o.includes(n.pathname))return fetch(e.request);let r=await caches.match(e.request).catch(()=>void 0);if(r)return r;let s=await fetch(e.request).catch(()=>void 0);if(!s)return console.log("Failed to fetch:",e),new Response;try{let t=await caches.open(i);// We have to clone the response as response streams can only be read once
// This way we can put one copy in the cache and return the other to the browser
t.put(e.request,s.clone())}catch(t){console.log("Failed to store response in cache",e,t)}return s})())})},{"@parcel/service-worker":"6A5Mq"}]},["kHO9w","bdURY"],"bdURY","parcelRequire6566")//# sourceMappingURL=serviceWorker.js.map
;
//# sourceMappingURL=serviceWorker.js.map
