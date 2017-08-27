let fluteSound = document.querySelector("#fluteClick");
fluteSound.addEventListener('click', playFlute);
function playFlute() {
    let snd = new Audio("audio/flute.mp3");
    snd.play();
};

let oboeSound = document.querySelector("#oboeClick");
oboeSound.addEventListener('click', playOboe);
function playOboe() {
    let snd = new Audio("audio/oboe.mp3");
    snd.play();
};

let clarinetSound = document.querySelector("#clarinetClick");
clarinetSound.addEventListener('click', playClarinet);
function playClarinet() {
    let snd = new Audio("audio/clarinet.mp3");
    snd.play();
};

let saxSound = document.querySelector("#saxClick");
saxSound.addEventListener('click', playSax);
function playSax() {
    let snd = new Audio("audio/sax.mp3");
    snd.play();
};

let bassoonSound = document.querySelector("#bassoonClick");
bassoonSound.addEventListener('click', playBassoon);
function playBassoon() {
    let snd = new Audio("audio/bassoon.mp3");
    snd.play();
};
