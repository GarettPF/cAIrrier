var returnToSender = document.querySelector('#submit');


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
    console.log('please work man');
    db.collection("Contacts").add({
            first: "Jeraldy",
            last: "Cascayan",
            organization: "healthcare startup",
            email: "email"
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
})