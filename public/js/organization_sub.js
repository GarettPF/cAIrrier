console.log("MVP")

db.collection("Contacts").add({
    Fname: "Jeraldy Cascayan",
    organizatoin: "Japan",
    email:"test@gmail.com",
    phone_n:"+18084857608"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});