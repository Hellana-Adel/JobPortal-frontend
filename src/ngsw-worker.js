self.addEventListener('activate', (event) => {
    
  event.waitUntil(
    self.skipWaiting().then(() => {
      return self.clients.claim().then(() => {
        return self.clients.matchAll({ type: 'window' }).then((clients) => {
          clients.forEach((client) => {
            console.log('Sending NEW_VERSION message to client:', client);
            client.postMessage({ type: 'NEW_VERSION' });  // Send message to client
          });
        });
      });
    })
  );
});
