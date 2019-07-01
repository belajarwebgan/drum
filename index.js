//Detect button press
var x=document.querySelectorAll(".drum");
for (var i=0;i<x.length;i++) {
    x[i].addEventListener("click",handleClick);
}
function handleClick() {
    playSound(this.innerHTML);
    buttonAnimate(this.innerHTML);
}
// play sound
function playSound(buttonName) {
    var sound;
    if (buttonName=="w") {
        sound = new Audio("sounds/crash.mp3");
    } else if (buttonName=="s") {
        sound = new Audio("sounds/kick-bass.mp3");
    } else if (buttonName=="a") {
        sound = new Audio("sounds/snare.mp3");
    } else if (buttonName=="d") {
        sound = new Audio("sounds/tom-1.mp3");
    } else if (buttonName=="j") {
        sound = new Audio("sounds/tom-2.mp3");
    } else if (buttonName=="k") {
        sound = new Audio("sounds/tom-3.mp3");
    } else if (buttonName=="l") {
        sound = new Audio("sounds/tom-4.mp3");
    } else {
        console.log(buttonName);
    }
    sound.play();
}
// Detect keyboard press
document.addEventListener("keydown",function(event) {
    playSound(event.key);
    buttonAnimate(event.key);
})
// Animate button
function buttonAnimate(key) {
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function() {activeButton.classList.remove("pressed");},100);
}