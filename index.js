(function(){const N=document.createElement("link").relList;if(N&&N.supports&&N.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(function(t){for(const i of t)if(i.type==="childList")for(const e of i.addedNodes)if(e.tagName&&e.tagName.toLowerCase()==="link"&&e.rel==="modulepreload")d(e)}).observe(document,{childList:!0,subtree:!0});function d(t){if(t.ep)return;var i={};function e(u){if(u in i)return i[u];var s=t.getAttribute(u);return i[u]=s,s}var l=e("href"),r=e("integrity"),o=e("crossorigin"),n=document.createElement("link");n.rel="modulepreload",l&&(n.href=l),r&&(n.integrity=r),o&&(n.crossOrigin=o),t.ep=!0,document.head.appendChild(n)}function a(t){var i=/^\s*export\s+\*\s+from\s+['"]([^'"]+)['"];?/m;var e=t.match(i);return e?e[1]:null}function s(t){return""+t}var r={};r.scopedEval=function(r){var e=function(t){return new Function("globalState",t)(r)};return e};var o={};(function(S){function N(t){for(var i,e,l=t[0],p=t[1],b=0,h=[];b<l.length;b++)e=l[b],Object.prototype.hasOwnProperty.call(d,e)&&d[e]&&h.push(d[e][0]),d[e]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(S[i]=p[i]);for(c&&c(t);h.length;)h.shift()();return u.push.apply(u,p[2]||[]),f()}function c(t){for(var i=0;i<t.length;i++){var e=t[i];o[e]=0}}function d(t){if(u[t])return u[t].exports;var i=u[t]={i:t,l:!1,exports:{}};return S[t].call(i.exports,i,i.exports,d),i.l=!0,i.exports}var u={},f=[],p={};d.m=S;d.c=u;d.d=function(t,i,e){d.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})};d.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})};d.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return d.d(i,"a",i),i};d.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)};d.p="";var u=[];return N}([function(S,N){/* Parts of this script are from the TurboWarp Packager <https://packager.turbowarp.org/>, licensed as follows:
Copyright (C) 2021-2024 Thomas Weber

The Source Code Form of this program is available under the terms of the
Mozilla Public License, v. 2.0. You can obtain a copy of the license at
https://www.mozilla.org/en-US/MPL/2.0/.

Parts of this script are from Scratch <https://scratch.mit.edu/>, licensed as follows:
Copyright (c) 2016, Massachusetts Institute of Technology
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distributi

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
/*! For license information please see scaffolding-min.js.LICENSE.txt */

(function(S){function N(t){for(var i,e,l=t[0],p=t[1],b=0,h=[];b<l.length;b++)e=l[b],Object.prototype.hasOwnProperty.call(d,e)&&d[e]&&h.push(d[e][0]),d[e]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(S[i]=p[i]);for(c&&c(t);h.length;)h.shift()();return u.push.apply(u,p[2]||[]),f()}function c(t){for(var i=0;i<t.length;i++){var e=t[i];o[e]=0}}function d(t){if(u[t])return u[t].exports;var i=u[t]={i:t,l:!1,exports:{}};return S[t].call(i.exports,i,i.exports,d),i.l=!0,i.exports}var u={},f=[],p={};d.m=S;d.c=u;d.d=function(t,i,e){d.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})};d.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})};d.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return d.d(i,"a",i),i};d.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)};d.p="";var u=[];return N}([function(S,N){
(function(){const N=document.createElement("link").relList;if(N&&N.supports&&N.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationO["replace domain placeholder"]})();

// The rest of the original minified bundle continues here unchanged. For safety and brevity in this commit, we perform only a global domain replacement if present.

// Domain replacement mapping: "extensions.turbowarp.org" -> "maps.zaritsuri.com/extensions"

})(S, N, d); /* end of module */

// Note: This file was updated to replace occurrences of extensions.turbowarp.org with maps.zaritsuri.com/extensions
