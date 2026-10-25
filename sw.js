/* Wǒ Lǎoshī offline shell. Only this app's same-origin core files are cached.
   Translation requests and speech services are intentionally never cached. */
'use strict';
const VERSION='dc594238c094';
const PREFIX='wo-laoshi-shell-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+VERSION;
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./THIRD-PARTY-NOTICES.txt','./ARPHICPL.TXT'].map(p=>new URL(p,self.registration.scope).href);
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(CORE);await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('fetch',event=>{const request=event.request,url=new URL(request.url);if(request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 if(request.mode==='navigate'){event.respondWith((async()=>{const cache=await caches.open(CACHE),controller=new AbortController(),timer=setTimeout(()=>controller.abort(),3500);try{const response=await fetch(request,{signal:controller.signal});if(response.ok&&response.headers.get('content-type')?.includes('text/html'))await cache.put(new URL('./index.html',self.registration.scope).href,response.clone());return response;}catch(e){return await cache.match(new URL('./index.html',self.registration.scope).href)||new Response('Offline study shell is not cached yet. Reconnect and open the app once.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});}finally{clearTimeout(timer);}})());return;}
 const canonical=url.origin+url.pathname;if(CORE.includes(canonical)){event.respondWith((async()=>{const cache=await caches.open(CACHE);return await cache.match(canonical)||fetch(request);})());}
});
