//string sounds
let violinSound = document.querySelector("#violinClick");
violinSound.addEventListener('click', playViolin);
function playViolin() {
    let snd = new Audio("audio/violin.mp3");
    snd.play();
};

let violaSound = document.querySelector("#violaClick");
violaSound.addEventListener('click', playViola);
function playViola() {
    let snd = new Audio("audio/viola.mp3");
    snd.play();
};


let celloSound = document.querySelector("#celloClick");
celloSound.addEventListener('click', playCello);
function playCello() {
    let snd = new Audio("audio/cello.mp3");
    snd.play();
};

let bassSound = document.querySelector("#bassClick");
bassSound.addEventListener('click', playBass);
function playBass() {
    let snd = new Audio("audio/bass.mp3");
    snd.play();
};
