const drums = document.querySelectorAll(".drum");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/crash.mp3");
var snare = new Audio("sounds/crash.mp3");
var tom1 = new Audio("sounds/crash.mp3");
var tom2 = new Audio("sounds/crash.mp3");
var tom3 = new Audio("sounds/crash.mp3");
var tom4 = new Audio("sounds/crash.mp3");

var drumsound = {
    "w": "crash",
    "a": "kick",
    "s": "snare",
    "d": "tom1,"
};

drums.forEach(drum => {
    drum.addEventListener("click", function () {
        console.log(this.textContent);
    });
});

