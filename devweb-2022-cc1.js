"use strict";


const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1; //genere un nombre entre 1 et le nombre choisi par le joueur
  maxGuesses = Math.ceil(Math.log($maxUsr.value)) + 1; //nombre maximum de tentative
  nbGuesses = 0; //tentative remis a 0
  $output.textContent = `le jeu commence choisi un nombre entre 1 et ${$maxUsr.value}`;
  $guessBtn.disabled = false; //ACTIVATION du boutton guess
}

$startBtn.addEventListener("click", launchGame);

function checkGuess() {
  const userGuess = parseInt($numUsr.value, 10);// recupere le nombre choisi par le joueur
  nbGuesses++; //ajout maximum de tentative

  if (userGuess === secretNumber) {
    $output.textContent = `bien jouer tu a trouve le ${secretNumber}`;//si nombre trouver fin du jeu
    $guessBtn.disabled = true;
  } else if (nbGuesses >= maxGuesses) {
    $output.textContent = `desoler tu a atteint le maximum de tentative (${maxGuesses}). le nombre etait ${secretNumber}.`;//si maximum de tentative atteint fin du jeu
    $guessBtn.disabled = true;
  } else if (userGuess > secretNumber) {
    $output.textContent = `trop haut il tes reste ${maxGuesses - nbGuesses} tentatives`;//si nombrechoisi > nbsecret max de tentative -1
  } else {
    $output.textContent = `trop bas il te reste ${maxGuesses - nbGuesses} tentatives`;//si nombrechoisi < nbsecret max de tentative -1
  }
}

$guessBtn.addEventListener("click", checkGuess); //VERIFICATION du nombre choisi

$numUsr.addEventListener("keypress", function (evt) {
  if (evt.key === "Entrer") {
    checkGuess(); //appel de la fonction checkguess
  }
});

function addCow(evt) {
  console.debug(evt.x, evt.y);
  "use strict";

    const $cow = document.createElement("img");
    $cow.src = "https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg"; 
    $cow.className = "cow"; // ajoute la classe "cow" pour le style
    $cow.style.left = `${evt.pageX}px`; // coordonnée x du clic
    $cow.style.top = `${evt.pageY}px`; // coordonnée y du clic
    
    const randomRotation = Math.random() * 360; //  rotation aléatoire de l'image
    $cow.style.transform = `rotate(${randomRotation}deg)`;
    
        // ajoute de l'image sur la page
    document.body.appendChild(cow);
    }
  
function toggleCow(_evt) {
    if (document.onmousedown === addCow) {
            document.onmousedown = null; // Désactive la fonction
   } else {
            document.onmousedown = addCow; // Active la fonction
       }
    }
    
    $cowBtn.addEventListener("click", toggleCow);


