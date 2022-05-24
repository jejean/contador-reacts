const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@18/umd/react.production.min.js",
    "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "https://unpkg.com/axios/dist/axios.min.js",
    "./style.css",
    "./js/Contador.js"
]

const CACHE_NAME ="v3_cache_contador_react";

//const self =this

self.addEventListener("install",(e)=> {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache =>{
            cache.addAll(CACHE_ELEMENTS).then(()=>{
               self.skipWaiting()
            }).catch(error => console.log(error));
        })
    );
});

self.addEventListener("activate",(e)=> {

    const cacheWhiteList =[CACHE_NAME];

    e.waitUntil(
      caches.keys().then((cachesNames) =>{
          return Promise.all(cachesNames.map(cacheName =>{
              return cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName)
          }))
      })
      .then(() =>  self.clients.claim())
    );
});

self.addEventListener("fetch",(e)=> {
 
 e.respondWith(
     caches.match(e.request).then((res)=>{
         if(res){
             return res;
         }
         return fetch(e.request);
     })
 )
 });