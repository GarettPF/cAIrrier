let chat_element = document.querySelector('#chatApplication');
let buttonSend = document.querySelector('#buttonSend');
let msgValue = document.querySelector('#msgValue');

let msgContainer = document.querySelector('#chatContainer');




function generateTxtMSG(value) {
    return  `                                
    <div class="container darker">
    <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right">
    <p>${value}</p>
    <span class="time-left">11:05</span>
    </div>`
    
}

let chat_container = document.querySelector('#chatContainer');

console.log(msgValue);



buttonSend.addEventListener('click', ()=>  {
    console.log(msgValue.value);
    console.log(chat_container);


    msgContainer.innerHTML+= generateTxtMSG(msgValue.value);

})
console.log(chat_element);