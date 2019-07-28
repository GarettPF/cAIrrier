var signUpBtn_dom = document.querySelector("#download-button2");

signUpBtn_dom.addEventListener("click", ()=> {
    mixpanel.track("Sign Up");
})