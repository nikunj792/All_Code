self.addEventListener('install',function(events){
    console.log('[Service Worker] Installation', events)
});

self.addEventListener('activate',function(events){
    console.log('[Service Worker] Activation', events);
    return self.clients.claim();
});

self.addEventListener('fetch',function(events){
    console.log('[Fetch Event] Non Life Cycle Event', events);
    events.respondWith(fetch(events.request))
});