// $(document).ready(function() {
//     $('select').material_select();
//   });


var form = document.getElementById("form");
var confirm = document.getElementById("confirm");

var submit = document.getElementById("submit");

submit.addEventListener('click', ()=> {
    event.preventDefault();
    confirm.style.display = "block";
})