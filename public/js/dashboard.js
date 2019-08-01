let patientList = document.getElementById("memberList");

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
        <h5 class="Light" style="padding: 1rem">${name}</h5>
    `;
}




db.collection("Contacts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        patientList.innerHTML += addPatient(doc.data().full_name);
        console.log(doc.data().full_name);
    });
});