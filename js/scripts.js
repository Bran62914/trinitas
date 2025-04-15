//these are all const because we expect no changes to their value
const h1 = document.getElementById("title");
const h2 = document.querySelector("h2");
const el = document.querySelector("#currenttime");
const username = prompt("What is your name boy?");



//We are going to change this value at least once more
let timevalue;

//Can the use see our secret content
if ("gopackgo" == prompt("What is secret message?") ) {
    h2.hidden = false;
} 
let tries = 10;
let userAnswer = prompt("What is the secret message");

while ( userAnswer != "gopackgo" && tries > 0 ) {
    alert("your answer is invaild. Try again! You only have " + tries + " attempts remaining");
    userAnswer = prompt("What is the secret message");
    tries = tries - 1;
}


//updates our clock every second
setInterval( setTime, 1000);
//greets the user by the name provided
h1.textContent = "Hello," + username;

function setTime() {
    timevalue = new Date().toLocaleTimeString();
    renderTime();
}
function renderTime() {
    el.textContent = timevalue;
}
    
