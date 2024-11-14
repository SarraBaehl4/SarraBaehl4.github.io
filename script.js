let nombreTotalAllum = 50;
let playerActuel = 0;
let players = [];

function nbrParticipants() {
  let nombreDeJoueurs = parseInt(
    prompt("combien de joueur participera à cette partie?")
  );

  if (isNaN(nombreDeJoueurs) || nombreDeJoueurs > 8 || nombreDeJoueurs < 2) {
    alert("Error: entrez un nombre valide entre 2 et 8 pour pouvoir jouer!");
    nbrParticipants();
  } else {
    alert("Vous allez jouer à " + nombreDeJoueurs);
    for (let newPlayer = 0; newPlayer < nombreDeJoueurs; newPlayer++) {
      players.push(newPlayer + 1);
    }
  }
  compteursAllumettes();
  setTimeout(Replay(), 1000);
}
nbrParticipants();

function compteursAllumettes(nombreARetirer) {
  nombreARetirer = parseInt(prompt("Retirez entre 1 à 6 allumettes"));

  if (isNaN(nombreARetirer) || nombreARetirer > 6 || nombreARetirer < 1) {
    alert("ERROR: choisissez un chiffre entre 1 et 6");
    setTimeout(compteursAllumettes, 1000);
    return;
  }
  if (nombreARetirer > nombreTotalAllum) {
    alert(
      "Il ne reste que " +
        nombreTotalAllum +
        " allumettes! Choisissez un chiffre plus petit"
    );
    compteursAllumettes();
  }
  nombreTotalAllum -= nombreARetirer;
  if (nombreTotalAllum > 0) {
    alert("il reste" + nombreTotalAllum + "allumettes");

    //playerActuel=playerActuel===1 ? 2:1 //pour deux joueurs
    playerActuel = (playerActuel + 1) % players.length; //multijoueurs par rapport au nombre de joueurs entré au départ

    alert("c'est au tour du player " + players[playerActuel]);
    compteursAllumettes();
  } else {
    alert("🎉Le joueur " + players[playerActuel] + " a gagné 🎉");
  }
}

function Replay() {
  alert("click OK pour rejouer une nouvelle partie!");
  nbrParticipants();
}
