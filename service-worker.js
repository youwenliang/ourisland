"use strict";var precacheConfig=[["/ourisland/index.html","931459bc24c5fa4562d0fe8a970e8fac"],["/ourisland/static/css/main.d0836b42.css","7802ea125169cc74ac69c20bfff8ee93"],["/ourisland/static/js/main.a27a759d.js","ed1acab7029f7c58a795e37f4f555a2a"],["/ourisland/static/media/cd-arrows.20db1fe7.svg","20db1fe75ff34302d552aacd9ddccc35"],["/ourisland/static/media/cover.18e1d4c4.svg","18e1d4c41a8ade99f24ea28b605163e6"],["/ourisland/static/media/hand.f92ac56d.svg","f92ac56d16bcd8e7b4b3916f4b20eedc"],["/ourisland/static/media/loading.4e239a30.gif","4e239a307e8d3121fff869f3314c4e02"],["/ourisland/static/media/phone.4a2221e7.svg","4a2221e7fdd13e7b9a20fbe94cd1b307"],["/ourisland/static/media/timemachine.571c0acb.svg","571c0acb42ffaf9a9c9049520e54816d"],["/ourisland/static/media/山水污染分層-01.3fc0203d.svg","3fc0203d5a7d5ac2aca61fe7ff3c9f3d"],["/ourisland/static/media/山水污染分層-02.d7ef0e43.svg","d7ef0e4367b5d320119de416f9b659f3"],["/ourisland/static/media/山水污染分層-03.045c329e.svg","045c329e4e684659306f8adcbead7954"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/ourisland/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});