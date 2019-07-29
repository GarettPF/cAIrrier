var submitBtn = document.querySelector('#submit');

submitBtn.addEventListener("click", ()=> {
    mixpanel.track("Register Button");
})
