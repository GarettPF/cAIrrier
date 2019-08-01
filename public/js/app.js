'use strict';
var request = require('request');
let btn = document.querySelector('#btnSend');
let txtVal = document.querySelector('#txtValue');


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


function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

btn.addEventListener("click", () => {
    request(generateAPI(txtVal.value), callback);
        })


        