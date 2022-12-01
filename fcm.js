


const FCM = require('fcm-node');

const serverKey = '<add_your_server_key_here>';
const fcm = new FCM(serverKey);

const token = '<add_your_device_token_here>';

const message = {
  to: token,
  //you can send only notification or only data (or include both)
  notification: {
    title: 'My Push Notification Test',
    body: 'OPEN Google',
    color: 'blue',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB'
  },
  data: {
    // Mobile app MUST be defined to read 'customURL' as URL to be opened in the browser
    customURL: "http://www.google.com",
    hyperlink: 'Google'
  },
};

fcm.send(message, function(error, response) {
  if (error) {
    console.log(`Oops!! ${error}`);
  } else {
    console.log(`Successfully sent with response: ${response}`);
  }
});
