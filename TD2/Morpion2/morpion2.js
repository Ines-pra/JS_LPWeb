var div3 = document.getElementById("Jeu"); //-- grille du morpion en 3x3
var div8 = document.getElementById("Jeu2"); //-- grille du morpion en 8x8
var button3x3 = document.getElementById("btn3"); //-- bouton pour afficher la grille en 3x3
var button8x8 = document.getElementById("btn8"); //-- bouton pour afficher la grille en 8x8
var statueJ = document.getElementById("Div");
let j1; //-- joueur 1
let j2; //-- joueur 2


function joueurs(){
    j1 = window.prompt("Saisir le nom du premier joueur : ");
    document.getElementById("j1").innerHTML = j1;
    j2 = window.prompt("Saisir le nom du second joueur : ");
    document.getElementById("j2").innerHTML = j2;

   //j1 = sessionStorage.getItem("joueur1");
   //j2 = sessionStorage.getItem("joueur2");
  }
joueurs();

function maFonction3() {
    if ((div3.style.display === "none")) {
      div3.style.display = "block";
      statueJ.style.display  = "block";
    } else {
      div3.style.display = "none";
      statueJ.style.display = "none";
    }
effaBtn();
main();
}

function maFonction8() {
  if ((div8.style.display === "none")) {
    div8.style.display = "block";
    statueJ.style.display  = "block";
  } else {
    div8.style.display = "none";
    statueJ.style.display = "none";
  }
 effaBtn();
 main2();
}

function effaBtn(){
    if ((button3x3.style.display === "none")||(button8x8.style.display === "none")) {
        button3x3.style.display = "block";
        button8x8.style.display = "block";
    } 
    else {
        button3x3.style.display = "none";
        button8x8.style.display = "none";
    } 
}

function estValide(button) {
     return button.innerHTML.length == 0;
}

function setSymbol(btn, symbole) {
     btn.innerHTML = symbole;
}

function matchNul(pions) {
     for (var i = 0, len = pions.length; i < len; i++)
     {
         if (pions[i].innerHTML.length == 0)
              return false;
     }

     return true;
}

var Afficheur = function(element) {
     var affichage = element;
     function setText(message){
         affichage.innerHTML = message;
     }
     return {sendMessage : setText};
}

function rejouer(){
    location.reload();

   /* if (div3.style.display === "block"){
        div3.style.display = "none";
        button3x3.style.display="inline-block";
        button8x8.style.display="inline-block";
        var pions = document.querySelectorAll("#Jeu button");
        for (var i = 0, len = pions.length; i < len; i++)
        {
            pions[i].value="";
        }
        }
    else if (div8.style.display === "block"){
       // div8.style.display === "none";
    }*/
}
function main()
{
     var pions = document.querySelectorAll("#Jeu button");
     var joueurs = ['O', 'X'];
     var nomJoueurs = [j1, j2];
     var nbGagne = [0,0];
     var tour = 0;
     var jeuEstFini = false;
     var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
     afficheur.sendMessage("Le jeu peut commencer ! <br />" + nomJoueurs[tour] + " c'est votre tour.");
     
     
     for (var i = 0, len = pions.length; i < len; i++)
     {
         pions[i].addEventListener("click", function()
         {
              if (jeuEstFini)
                  return;
              if (!estValide(this))  {
                  afficheur.sendMessage("Cette case est déjà occupée ! <br />" + nomJoueurs[tour] + " c'est toujours à vous !");
              }
              else{
                  setSymbol(this, joueurs[tour]);
                  jeuEstFini = rechercherVainqueur(pions, joueurs, tour);
                  if(jeuEstFini) {
                      afficheur.sendMessage(nomJoueurs[tour] + " a gagné ! <br /> <button id=\"rejouer\" onClick=\"rejouer()\">Rejouer</button>");
                      nbGagne[tour]++; 
                      document.getElementById("nbG").innerHTML = nbGagne;
                      return;
                  }
                  if (matchNul(pions)) {
                      afficheur.sendMessage("Match Nul ! <br/> <button id=\"rejouer\" onClick=\"rejouer()\">Rejouer</button>");
                      return;
                  }
                  tour++;
                  tour = tour % 2;
                  afficheur.sendMessage(nomJoueurs[tour] + " c'est à vous !");
              }
         });
     }
}

function main2() {
     var pions = document.querySelectorAll("#Jeu2 button");
     var joueurs = ['O', 'X'];
     var nomJoueurs = [j1, j2];
     var tour = 0;
     var jeuEstFini = false;
     var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
     afficheur.sendMessage("Le jeu peut commencer ! <br />" + nomJoueurs[tour] + " c'est votre tour.");
     
     for (var i = 0, len = pions.length; i < len; i++)
     {
         pions[i].addEventListener("click", function()
         {
              if (jeuEstFini)
                  return;
              if (!estValide(this))  {
                  afficheur.sendMessage("Cette case est déjà occupée ! <br />" + nomJoueurs[tour] + " c'est toujours à vous !");
              }
              else{
                  setSymbol(this, joueurs[tour]);
                  jeuEstFini = rechercherVainqueur2(pions, joueurs, tour);
                  if(jeuEstFini) {
                    afficheur.sendMessage(nomJoueurs[tour] + " a gagné ! <br/> <button id=\"rejouer\" onClick=\"rejouer()\">Rejouer</button>");
                    return;
                  }
                  if (matchNul(pions)) {
                      afficheur.sendMessage("Match Nul ! <br/> <button id=\"rejouer\" onClick=\"rejouer()\">Rejouer</button>");
                      return;
                  }
                  tour++;
                  tour = tour % 2;
                  afficheur.sendMessage(nomJoueurs[tour] + " c'est à vous !");
              }
         });
     }
}

function rechercherVainqueur(pions, joueurs, tour){
    if ((pions[0].innerHTML == joueurs[tour] && pions[1].innerHTML == joueurs[tour] && pions[2].innerHTML == joueurs[tour])
    || (pions[3].innerHTML == joueurs[tour] &&  pions[4].innerHTML == joueurs[tour] &&  pions[5].innerHTML == joueurs[tour])
    || (pions[6].innerHTML == joueurs[tour] &&  pions[7].innerHTML == joueurs[tour] &&  pions[8].innerHTML == joueurs[tour])
    || (pions[0].innerHTML == joueurs[tour] &&  pions[3].innerHTML == joueurs[tour] &&  pions[6].innerHTML == joueurs[tour])
    || (pions[1].innerHTML == joueurs[tour] &&  pions[4].innerHTML == joueurs[tour] &&  pions[7].innerHTML == joueurs[tour])
    || (pions[2].innerHTML == joueurs[tour] &&  pions[5].innerHTML == joueurs[tour] &&  pions[8].innerHTML == joueurs[tour])
    || (pions[0].innerHTML == joueurs[tour] &&  pions[4].innerHTML == joueurs[tour] &&  pions[8].innerHTML == joueurs[tour])
    || (pions[2].innerHTML == joueurs[tour] &&  pions[4].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour]))
      {
        return true;
      }
}

function rechercherVainqueur2(pions, joueurs, tour){
    //-- lignes gagnantes
    if ((pions[0].innerHTML == joueurs[tour] && pions[1].innerHTML == joueurs[tour] && pions[2].innerHTML == joueurs[tour] && pions[3].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[5].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour] && pions[7].innerHTML == joueurs[tour])
    || (pions[8].innerHTML == joueurs[tour] && pions[9].innerHTML == joueurs[tour] && pions[10].innerHTML == joueurs[tour] && pions[11].innerHTML == joueurs[tour] && pions[12].innerHTML == joueurs[tour] && pions[13].innerHTML == joueurs[tour] && pions[14].innerHTML == joueurs[tour] && pions[15].innerHTML == joueurs[tour])
    || (pions[16].innerHTML == joueurs[tour] && pions[17].innerHTML == joueurs[tour] && pions[18].innerHTML == joueurs[tour] && pions[19].innerHTML == joueurs[tour] && pions[20].innerHTML == joueurs[tour] && pions[21].innerHTML == joueurs[tour] && pions[22].innerHTML == joueurs[tour] && pions[23].innerHTML == joueurs[tour])
    || (pions[24].innerHTML == joueurs[tour] && pions[25].innerHTML == joueurs[tour] && pions[26].innerHTML == joueurs[tour] && pions[27].innerHTML == joueurs[tour] && pions[28].innerHTML == joueurs[tour] && pions[29].innerHTML == joueurs[tour] && pions[30].innerHTML == joueurs[tour] && pions[31].innerHTML == joueurs[tour])
    || (pions[32].innerHTML == joueurs[tour] && pions[33].innerHTML == joueurs[tour] && pions[34].innerHTML == joueurs[tour] && pions[35].innerHTML == joueurs[tour] && pions[36].innerHTML == joueurs[tour] && pions[37].innerHTML == joueurs[tour] && pions[38].innerHTML == joueurs[tour] && pions[39].innerHTML == joueurs[tour])
    || (pions[40].innerHTML == joueurs[tour] && pions[41].innerHTML == joueurs[tour] && pions[42].innerHTML == joueurs[tour] && pions[43].innerHTML == joueurs[tour] && pions[44].innerHTML == joueurs[tour] && pions[45].innerHTML == joueurs[tour] && pions[46].innerHTML == joueurs[tour] && pions[47].innerHTML == joueurs[tour])
    || (pions[48].innerHTML == joueurs[tour] && pions[49].innerHTML == joueurs[tour] && pions[50].innerHTML == joueurs[tour] && pions[51].innerHTML == joueurs[tour] && pions[52].innerHTML == joueurs[tour] && pions[53].innerHTML == joueurs[tour] && pions[54].innerHTML == joueurs[tour] && pions[55].innerHTML == joueurs[tour])
    || (pions[56].innerHTML == joueurs[tour] && pions[57].innerHTML == joueurs[tour] && pions[58].innerHTML == joueurs[tour] && pions[59].innerHTML == joueurs[tour] && pions[60].innerHTML == joueurs[tour] && pions[61].innerHTML == joueurs[tour] && pions[62].innerHTML == joueurs[tour] && pions[63].innerHTML == joueurs[tour])
    //-- colonnes gagnantes
    || (pions[1].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour] && pions[16].innerHTML == joueurs[tour] && pions[24].innerHTML == joueurs[tour] && pions[32].innerHTML == joueurs[tour] && pions[40].innerHTML == joueurs[tour] && pions[48].innerHTML == joueurs[tour] && pions[56].innerHTML == joueurs[tour])
    || (pions[1].innerHTML == joueurs[tour] && pions[9].innerHTML == joueurs[tour] && pions[17].innerHTML == joueurs[tour] && pions[25].innerHTML == joueurs[tour] && pions[33].innerHTML == joueurs[tour] && pions[41].innerHTML == joueurs[tour] && pions[49].innerHTML == joueurs[tour] && pions[57].innerHTML == joueurs[tour])
    || (pions[2].innerHTML == joueurs[tour] && pions[10].innerHTML == joueurs[tour] && pions[18].innerHTML == joueurs[tour] && pions[26].innerHTML == joueurs[tour] && pions[34].innerHTML == joueurs[tour] && pions[42].innerHTML == joueurs[tour] && pions[50].innerHTML == joueurs[tour] && pions[58].innerHTML == joueurs[tour])
    || (pions[3].innerHTML == joueurs[tour] && pions[11].innerHTML == joueurs[tour] && pions[19].innerHTML == joueurs[tour] && pions[27].innerHTML == joueurs[tour] && pions[35].innerHTML == joueurs[tour] && pions[43].innerHTML == joueurs[tour] && pions[51].innerHTML == joueurs[tour] && pions[59].innerHTML == joueurs[tour])
    || (pions[4].innerHTML == joueurs[tour] && pions[12].innerHTML == joueurs[tour] && pions[20].innerHTML == joueurs[tour] && pions[28].innerHTML == joueurs[tour] && pions[36].innerHTML == joueurs[tour] && pions[44].innerHTML == joueurs[tour] && pions[52].innerHTML == joueurs[tour] && pions[60].innerHTML == joueurs[tour])
    || (pions[5].innerHTML == joueurs[tour] && pions[13].innerHTML == joueurs[tour] && pions[21].innerHTML == joueurs[tour] && pions[29].innerHTML == joueurs[tour] && pions[37].innerHTML == joueurs[tour] && pions[45].innerHTML == joueurs[tour] && pions[53].innerHTML == joueurs[tour] && pions[61].innerHTML == joueurs[tour])
    || (pions[6].innerHTML == joueurs[tour] && pions[14].innerHTML == joueurs[tour] && pions[22].innerHTML == joueurs[tour] && pions[30].innerHTML == joueurs[tour] && pions[38].innerHTML == joueurs[tour] && pions[46].innerHTML == joueurs[tour] && pions[54].innerHTML == joueurs[tour] && pions[62].innerHTML == joueurs[tour])
    || (pions[7].innerHTML == joueurs[tour] && pions[15].innerHTML == joueurs[tour] && pions[23].innerHTML == joueurs[tour] && pions[31].innerHTML == joueurs[tour] && pions[39].innerHTML == joueurs[tour] && pions[47].innerHTML == joueurs[tour] && pions[55].innerHTML == joueurs[tour] && pions[63].innerHTML == joueurs[tour])
    //-- diagonales gagnantes
    || (pions[0].innerHTML == joueurs[tour] && pions[9].innerHTML == joueurs[tour] && pions[18].innerHTML == joueurs[tour] && pions[27].innerHTML == joueurs[tour] && pions[36].innerHTML == joueurs[tour] && pions[45].innerHTML == joueurs[tour] && pions[54].innerHTML == joueurs[tour] && pions[63].innerHTML == joueurs[tour])
    || (pions[7].innerHTML == joueurs[tour] && pions[14].innerHTML == joueurs[tour] && pions[21].innerHTML == joueurs[tour] && pions[28].innerHTML == joueurs[tour] && pions[35].innerHTML == joueurs[tour] && pions[42].innerHTML == joueurs[tour] && pions[49].innerHTML == joueurs[tour] && pions[56].innerHTML == joueurs[tour])
    )
    {
      return true;
    }
   }