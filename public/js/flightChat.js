let chat_element = document.querySelector('#chatApplication');
let buttonSend = document.querySelector('#buttonSend');
let msgValue = document.querySelector('#msgValue');
var request = require('request');
let msgContainer = document.querySelector('#chatContainer');
let actionPlan = document.querySelector('#actionPlanBtn');



//var request = require('request');


function updateScroll() {
    chat_element.scrollTop = chat_element.scrollHeight;
}

function generateTxtMSG(value) {
    return `                                
    <div class="container darker">
    <img src="../../images/test2.png" alt="Avatar" class="right">
    <p>${value}</p>
    <span class="time-left">11:05</span>
    </div>`

}


function generateOtherTxtMsg(value) {
    return `<div class="container">
    <img src="../../images/test.png" alt="Avatar">
    <p>${value}</p>
    <span class="time-right">11:00</span>
</div>
`

}



//this will auto send messages on platforms.


//integrating 

/*



*/


var apiLink = 'https://api.twilio.com/2010-04-01/Accounts/AC49e102719065ef4f9434960a7ab24ddb/Messages.json'

function waitForPing() {

    console.log('test');
    //auto calls JSON every 5 seconds. or everytime you click? ma
    setTimeout(function () {


        request({
            url: apiLink,
            method: 'GET',
            auth: {


                //USER & PASS IS VUNERABLE. SECURE IT.
                //create new identity. +2 step verificaiton. got hacked by canada fraud. sad, sad day.

                'user': 'new verification',
                'pass': 'update '
            },
            json: true
        }, function (error, response, body) {
            //generateOtherTxtMsg(body.messages[0])
            console.log(body.messages[0].body)
            var temp = [ ];
            temp.push(body.messages[0].body)
            console.log(temp)

            if (body.messages[0].body === temp[temp.length-1]) {
                console.log('same message');
            } else {
                msgContainer.innerHTML += generateOtherTxtMsg(body.messages[0].body);
            }
        });

        ;
    }, 5000);
    //millisends
}









function generateAPI(msg) {
    return {
        url: 'https://api.twilio.com/2010-04-01/Accounts/AC49e102719065ef4f9434960a7ab24ddb/Messages.json',
        method: 'POST',
        auth: {
            'user': 'sorry',
            'pass': 'but 2 step verification needed'
        },
        form: {
            To: '+###',
            From: '+###',
            Body: msg
        }
    }
}

let chat_container = document.querySelector('#chatContainer');




buttonSend.addEventListener('click', () => {
    console.log('test');
    msgContainer.innerHTML += generateTxtMSG(msgValue.value);
    //request(generateAPI(msgValue.value));
    //waitForPing()
    request(generateAPI(msgValue.value));


    msgValue.value = '';

})


//flightchase Version 0.01A.


function setTimerPing() {
    //cron job

    console.log('this will execute for every 5 seconds')
    waitForPing(); //pings to API, see if there's new update happening

    setTimeout(setTimerPing, 5000);
}


//suggested features

//Action Plan Check Prediction TxT

//generateActionPlan()


function generateActionPlan() {
    return null;
}

function setActionPlan(value) {
    console.log('debrief'); 
    //generateActionPrediction();\
    let tempValue = 
    `
    diagnostic string precheck
    Step 1. 
    Step 2.
    Step 3.
    `


    msgContainer.innerHTML += tempValue;

}

actionPlan.addEventListener('click', ()=> {
    setActionPlan();
})

setTimerPing();