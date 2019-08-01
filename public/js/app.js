// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC49e102719065ef4f9434960a7ab24ddb';
const authToken = 'f3becea26411a3052e3f9394fb8b5428';
const client = require('twilio')(accountSid, authToken);
console.log("test");

//this is a test in node.js instead of python.
client.messages
      .create({body: 'Hi there!', from: '+18084259665', to: '+18084857608'})
      .then(message => console.log(message.sid));

