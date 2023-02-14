import webpush from 'web-push';

/*
request body:
{
    "seller_id":"123",
    "title": "Notification Title",
    "body": "Notification Body",
    "subscription":{
    "endpoint": "https://fcm.googleapis.com/fcm/send/abcdefghijkl",
    "keys": {
        "p256dh": "BINARY_KEY_ENCODED_IN_BASE64",
        "auth": "BINARY_KEY_ENCODED_IN_BASE64"
    }
    }
}
*/

export const notification_Post=async(req:any,res:any)=>{
    
    console.log("ll",req.body.seller_id)
    
    const subscription = req.body.subscription;
    console.log(subscription.endpoint)
    const payload = JSON.stringify({ title: 'Push Notification'+req.body });
    
    webpush.sendNotification(subscription, payload)
        .then(() => {
        res.status(200).json({ message: 'Notification sent' + req.body });
        })
        .catch((error: { message: any; }) => {
        res.status(500).json({ error: error.message });
        });
  
    
}