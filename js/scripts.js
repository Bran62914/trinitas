
function promptUser () {
//these are all const because we expect no changes to their value
const h1 = document.getElementById("title");
const h2 = document.querySelector("h2");
const el = document.querySelector("#currenttime");
const username = prompt("What name is your my child?");
//We are going to change this value at least once more
let timevalue;

//Can the use see our secret content
if ("gopackgo" == prompt("What is secret message?") ) {
    h2.hidden = false;
} 
let tries = 10;
let userAnswer = prompt("What is the secret message");

while ( userAnswer != "gopackgo" && tries > 0 ) {
    alert("HaHa you have the wrong answer. Try again! You only have " + tries + " attempts remaining");
    userAnswer = prompt("What is the secret message");
    tries = tries - 1;
}
//updates our clock every second
setInterval( setTime, 1000);
//greets the user by the name provided
h1.textContent = "Hello," + username;
//Setup tracking eyes!
const eyes = document.querySelectorAll(".eye");

document.addEventListener("mousemove", updateEyes);
function setTime() {
    timevalue = new Date().toLocaleTimeString();
    renderTime();
}
function renderTime() {
    el.textContent = timevalue;
}
    

 

function updateEyes (event) {
    for ( const eye of eyes ) {
        const pupil = eye.querySelector(".pupil");
        const shape = eye.getBoundingClientRect()
        const dx = event.clientX - (shape.left + shape.width / 2);
        const dy = event.clientY - (shape.top + shape.height / 2);
        const angle = Math.atan2(dy, dx);
        const x = Math.cos(angle) * 10;
        const y = Math.sin(angle) * 10;
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    }
}

}
// This is a funtion named "say" it has the argument "phrase"
function say (phrase) {
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.rate = 5;
    speechSynthesis.speak(utterance); 
}

const speakButton = document.querySelector("#sayPhrase");
const phraseInput = document.querySelector("#phrase");

speakButton.addEventListener("click",function () {
    say(phraseInput.value);
});

//Methods are funtions that belong to objects
