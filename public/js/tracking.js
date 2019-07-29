var signUpBtn_dom = document.querySelector("#download-button2");
var signUpBtn_top =document.querySelector("#topSignUP");
var signInBtn_top =document.querySelector('#logInUP');

signUpBtn_dom.addEventListener("click", ()=> {
    mixpanel.track("Sign Up MID");
})

signUpBtn_top.addEventListener("click", ()=> {
    mixpanel.track("Sign Up TOP");
})

signInBtn_top.addEventListener("click", ()=> {
    mixpanel.track("Log Ip TOP");
})

healthCare_learnmore.addEventListener("click", ()=> {
    mixpanel.track("Log Ip TOP");
})

console.log('YEET');