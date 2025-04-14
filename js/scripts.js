const h1 = document.getElementById("title");
const el = document.querySelector("#currenttime");
const h2 = document.querySelector("h2");
const username = prompt("What is your name traveler?");

if ("f22 are awsome" == prompt("What is secret message?") ) {
    h2.hidden = false;
} 



setInterval( setTime, 1000);

h1.textContent = "Hello," + username;

function setTime() {
    el.textContent = new Date().toLocaleTimeString();
}
    
