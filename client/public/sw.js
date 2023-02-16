
this.addEventListener ('push', async function (event) {
    // const message = await event.data.json()
    // let {title, description, image} = message;
const options = {
  body: "titlellll",
  tag: 'descriptionkkkkk',
  image:"https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177752-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDYyM3xpbWFnZS9qcGVnfGltYWdlcy9oMGQvaDc0Lzk4OTA0ODY1MTc3OTAuanBnfGZiNzc0ODMzZjdmMGNjMGE3MmEwMGVlNDgzNTYxYzlkZThjOGNmYzIwYzI1NDFmZmY0MDMyYmQ0ZjNlMjkyN2U"
};
registration.showNotification("titlezzzz", options)

    console.log ("{message}");
  });
  self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click received.');
  
    event.notification.close();
  
    event.waitUntil(
      clients.openWindow('https://developers.google.com/web')
    );
  });