parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var d,h,p,q,s=false;function u(){return h||(h=v()),h}function v(){try{throw new Error}catch($){var e=(""+$.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(e)return j(e[0])}return"/"}function j(e){return(""+e).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}function w(){if(s)return;s=true;d={};h=null;p=u;d.getBundleURL=p;q=j;d.getBaseURL=q}var f,x,k,y,z,b,A=false;function B(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch($){if("MODULE_NOT_FOUND"===$.code)return new g(function($,t){l(r.slice(0,-1)).then(function(){return require(e)}).then($,t)});throw $}}function l(r){return Promise.all(r.map(D))}function C(r,e){k[r]=e}function D(r){var e;if(Array.isArray(r)&&(e=r[1],r=r[0]),b[r])return b[r];var $=(r.substring(r.lastIndexOf(".")+1,r.length)||r).toLowerCase(),t=k[$];return t?b[r]=t(x()+r).then(function(r){return r&&require.register(e,r),r}).catch(function(e){throw delete b[r],e}):void 0}function g(r){this.executor=r,this.promise=null}function m(){if(A)return;A=true;f={};x=(w(),d).getBundleURL;k={};y=l;(f=f=B).load=y;z=C;f.register=z;b={};g.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},g.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)}}var E={};E=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};(m(),f).register("js",E);matchMedia("(prefers-reduced-motion: reduce)").matches||(m(),f)([["logo.ctrl.c999472a.js","Gmxf"],"Gmxf"]).then(function(e){var n=document.querySelector(".icon-logomark"),r=document.querySelector(".icon-logotype--logo"),o=r.querySelector(".icon"),i=Array.from(n.querySelectorAll("path")),t=document.createElement("canvas");t.className="icon-logomark icon-logomark--canvas",n.parentElement.appendChild(t);var a={w:window.innerWidth-30,h:86},c={w:84,h:72};matchMedia("(min-width:920px)").matches&&(a={w:window.innerWidth/2-30,h:.45*window.innerHeight+40},c={w:window.innerHeight/2*1.666667,h:.45*window.innerHeight}),i.push(r,o),i.forEach(function(e){return e.style.display="none"}),new e.LogoCtrl(n,t,i,a,c).init()});return{"QCba":{}};});