let chat_element = document.querySelector('#chatApplication');
let buttonSend = document.querySelector('#buttonSend');
let msgValue = document.querySelector('#msgValue');
var request = require('request');
let msgContainer = document.querySelector('#chatContainer');


//var request = require('request');


function updateScroll(){
    chat_element.scrollTop = chat_element.scrollHeight;
}

function generateTxtMSG(value) {
    return  `                                
    <div class="container darker">
    <img src="../../images/test2.png" alt="Avatar" class="right">
    <p>${value}</p>
    <span class="time-left">11:05</span>
    </div>`
    
}
function generateAPI(msg) {
    return {
        url: 'https://api.twilio.com/2010-04-01/Accounts/AC49e102719065ef4f9434960a7ab24ddb/Messages.json',
        method: 'POST',
        auth: {
            'user': 'AC49e102719065ef4f9434960a7ab24ddb',
            'pass': 'f3becea26411a3052e3f9394fb8b5428'
        },
        form: {
            To: '+18084857608',
            From: '+18084259665',
            Body: msg
        }
    }
}

let chat_container = document.querySelector('#chatContainer');




buttonSend.addEventListener('click', ()=>  {
    console.log();
    msgContainer.innerHTML+= generateTxtMSG(msgValue.value);
    request(generateAPI(msgValue.value));

    updateScroll();

})