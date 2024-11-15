const CONFIGECRAN = document.getElementById("config-ecran");
const ECRANJEU = document.getElementById("ecran-jeu");
const PLAYERACTUEL = document.getElementById("player-actuel");
const NOMBREALLUMETTES = document.getElementById("allumettes-count");
const ALLUMETTESCONTAINER = document.getElementById("allumettes-container");
const STARTGAMEBUTTON = document.getElementById("btnStart");
const REPLAYBUTTON = document.getElementById("btnReplay");
const RETIRERBUTTON = document.getElementById("btn-retirer");

let nombreTotalAllum = 50;
let playerActuel = 0;
let players = [];
//fonction pour démarrer le jeu
function startGame() {
  let nombreDeJoueurs = parseInt(
    document.getElementById("nombre-joueur").value
  );

  if (isNaN(nombreDeJoueurs) || nombreDeJoueurs > 8 || nombreDeJoueurs < 2) {
    alert("Error: entrez un nombre valide entre 2 et 8 pour pouvoir jouer!");
    return;
  }
  CONFIGECRAN.style.display = "none";
  ECRANJEU.style.display = "block";
  //initialiser les variables
  nombreTotalAllum = 50;
  playerActuel = 0;
  players = [];

  for (let newPlayer = 0; newPlayer < nombreDeJoueurs; newPlayer++) {
    players.push(newPlayer + 1);
  }
  miseAJourAffichage();
}
//fonction pour la mise a jour de l'affichage du jeu
function miseAJourAffichage() {
  PLAYERACTUEL.textContent = `Tour du Player ${players[playerActuel]}`;
  NOMBREALLUMETTES.textContent = `Il reste ${nombreTotalAllum} allumettes`;

  ALLUMETTESCONTAINER.innerHTML = "";
  for (let i = 0; i < nombreTotalAllum; i++) {
    const allumette = document.createElement("div");
    allumette.className = "allumette";
    ALLUMETTESCONTAINER.appendChild(allumette);
  }
}
//fonction pour gérer le retrait des allumettes
function compteursAllumettes() {
  let nombreARetirer = parseInt(
    document.getElementById("allumettes-retirees").value
  );

  if (isNaN(nombreARetirer) || nombreARetirer > 6 || nombreARetirer < 1) {
    alert("ERROR: choisissez un chiffre entre 1 et 6");
    return;
  }
  if (nombreARetirer > nombreTotalAllum) {
    alert(
      "Il ne reste que " +
        nombreTotalAllum +
        " allumettes! Choisissez un chiffre plus petit"
    );
    return;
  }
  nombreTotalAllum -= nombreARetirer;

  if (nombreTotalAllum > 0) {
    playerActuel = (playerActuel + 1) % players.length; //multijoueurs par rapport au nombre de joueurs entré au départ
    miseAJourAffichage();
  } else {
    alert("🎉Le joueur " + players[playerActuel] + " a gagné 🎉");
    Replay();
  }
}

function Replay() {
  CONFIGECRAN.style.display = "block";
  ECRANJEU.style.display = "none";
  nombreTotalAllum = 50;
  playerActuel = 0;
  players = [];
}
REPLAYBUTTON.addEventListener("click", Replay);
STARTGAMEBUTTON.addEventListener("click", startGame);
RETIRERBUTTON.addEventListener("click", compteursAllumettes);
