let fhSound = document.querySelector("#frenchClick");
fhSound.addEventListener('click', playfh);
function playfh() {
    let snd = new Audio("audio/frenchhorn.mp3");
    snd.play();
};

let trumpetSound = document.querySelector("#trumpetClick");
trumpetSound.addEventListener('click', playTrumpet);
function playTrumpet() {
    let snd = new Audio("audio/trumpet.mp3");
    snd.play();
};

let tromboneSound = document.querySelector("#tromboneClick");
tromboneSound.addEventListener('click', playTrombone);
function playTrombone() {
    let snd = new Audio("audio/trombone.mp3");
    snd.play();
};

let tubaSound = document.querySelector("#tubaClick");
tubaSound.addEventListener('click', playTuba);
function playTuba() {
    let snd = new Audio("audio/tuba.mp3");
    snd.play();
};
