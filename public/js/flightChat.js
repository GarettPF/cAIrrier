let chat_element = document.querySelector('#chatApplication');
let buttonSend = document.querySelector('#buttonSend');
let msgValue = document.querySelector('#msgValue');

let msgContainer = document.querySelector('#chatContainer');


const accountSid = 'AC49e102719065ef4f9434960a7ab24ddb';
const authToken = 'f3becea26411a3052e3f9394fb8b5428';
const client = require('twilio')(accountSid, authToken);





function generateTxtMSG(value) {
    return  `                                
    <div class="container darker">
    <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right">
    <p>${value}</p>
    <span class="time-left">11:05</span>
    </div>`
    
}

let chat_container = document.querySelector('#chatContainer');

console.log('dank memes');



buttonSend.addEventListener('click', ()=>  {
    console.log(msgValue.value);
    console.log(chat_container);
    msgContainer.innerHTML+= generateTxtMSG(msgValue.value);
    client.messages
      .create({body: msgValue.value, from: '+18084259665', to: '+18084857608'})
      .then(message => console.log(message.sid));

})