let patientList = document.getElementById("patientList");

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


function addPatient(name) {
    return `
    <div class="animated fadeInLeft card darken-1">
        <div class="row" style="margin: 0.25rem">
            <h5 class="col-sm-8">${name}</h5>
        </div>
    </div>
    `;
}




db.collection("Contacts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        patientList.innerHTML += addPatient(doc.id);
    });
});