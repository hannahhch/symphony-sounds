let bdSound = document.querySelector("#bdClick");
bdSound.addEventListener('click', playBD);
function playBD() {
    let snd = new Audio("audio/bassdrum.mp3");
    snd.play();
    console.log(bdSound)
};

let djembeSound = document.querySelector("#djembeClick");
djembeSound.addEventListener('click', playDjembe);
function playDjembe() {
    let snd = new Audio("audio/djembe.mp3");
    snd.play();
};
