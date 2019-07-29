var returnToSender = document.querySelector('#submit');
var first_name = document.querySelector('#first_name');
var last_name = document.querySelector('#last_name')
var emails = document.querySelector('#email')
var organization = document.querySelector('#organization')
var form = document.getElementById("form");
var confirm = document.getElementById("confirm");

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

returnToSender.addEventListener("click", () => {
    event.preventDefault();
    confirm.style.display = "block";
    db.collection("Contacts").add({
            first: first_name.value,
            last: last_name.value,
            organization: organization.value,
            email: emails.value
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

})


