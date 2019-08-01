var returnToSender = document.querySelector('#submit');
var full_name = document.querySelector('#full_name');
var emails = document.querySelector('#email')
var organization = document.querySelector('#organization')
var form = document.getElementById("form");
var confirm = document.getElementById("confirm");
var displayForm = document.querySelector("#form");
var ThankYouForm = document.querySelector("#ThankYouForm")


ThankYouForm.style.display="none"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPNrhmG6_miSeUeDPzmWgXALDkXml1jog",
    authDomain: "cairrier.firebaseapp.com",
    databaseURL: "https://cairrier.firebaseio.com",
    projectId: "cairrier",
    storageBucket: "cairrier.appspot.com",
    messagingSenderId: "74921308478",
    appId: "1:74921308478:web:1324887fe9df32b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

returnToSender.addEventListener("click", (e) => {
    e.preventDefault();
    if (full_name.value != '' &&
        emails.value != '' &&
        organization.value != '') {
            displayForm.style.display = "none";
            ThankYouForm.style.display="block";
            // console.log('Oof');
            db.collection("Contacts").add({
                    full_name: full_name.value,
                    email: emails.value,
                    organization: organization.value,
                })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    displayForm.style.display = "none";
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
    } 

})


