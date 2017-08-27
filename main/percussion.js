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

let cymSound = document.querySelector('#cymbalsClick');
cymSound.addEventListener('click', playCym);
function playCym(){
  let snd = new Audio("audio/cymbals.mp3");
  snd.play();
};

let snareSound = document.querySelector('#snareClick');
snareSound.addEventListener('click', playSnare);
function playSnare(){
  let snd = new Audio("audio/snare.mp3");
  snd.play();
};

let tamSound = document.querySelector('#tamClick');
tamSound.addEventListener('click', playTam);
function playTam(){
  let snd = new Audio("audio/tambourine.mp3");
  snd.play();
};

let triSound = document.querySelector('#triClick');
triSound.addEventListener('click', playTri);
function playTri(){
  let snd = new Audio("audio/triangle.mp3");
  snd.play();
};
