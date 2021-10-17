import {Morpion} from "../morpion_modules.js";
import {MorpionSimple} from "../morpion_modules.js";

let morpion;
let nbCoups;
let joueur;
let symbole;
let scores = [0, 0];

let taille;
let modeDeJeu;
let zoneMessage;
let victoire;

const btnReset = document.getElementById('btn_reset');
btnReset.addEventListener('click', recommence);

// * FAIT
function recommence() {
    zoneMessage = document.getElementById('messages');
    taille = Number.parseInt(document.getElementById('taille').value);
    modeDeJeu = document.getElementById('simple').checked ? 'simple' : 'complet';

    try {
        
        if (modeDeJeu == 'simple'){
        morpion = new MorpionSimple(taille);
        }else {
            morpion = new Morpion(taille);
        }

        const table = document.getElementById('table_morpion');
        for (let l = table.rows.length - 1; l >= 0; l--) {
            table.deleteRow(l);
        }

        for (let i = 0; i < taille; i++) {
            const ligne = table.insertRow(i);
            for (let j = 0; j < taille; j++) {
                const id = '' + ((i + 1) * 10 + (j + 1));
                const cell = ligne.insertCell(j);
                cell.innerHTML = "<input type='button' class='case' id='" + id + "' />";

                document.getElementById(id).value = '';
                document.getElementById(id).addEventListener("click",()=> clicBouton(document.getElementById(id),i,j));
            }
        }
        nbCoups = 0;
        joueur = 1;
        symbole = 'x';
        zoneMessage.innerHTML = 'Joueur 1, à toi !';
        document.getElementById('btn_reset').disabled = true;
    } catch(e){
        console.log(e);
        zoneMessage.innerHTML = 'Taille invalide !';
    }
}
     


function clicBouton(uneCase, y, x) {
    if (morpion.grille[y][x] === ' ') {
        morpion.grille[y][x] = symbole;
        console.log(morpion.grille);
        uneCase.value = symbole;
        uneCase.classList.add('joueur' + joueur);
        nbCoups++;

        victoire = morpion.aGagne(symbole, y, x);
        
        if (victoire) {
            console.log("Victoire");

            zoneMessage.innerHTML = 'Le joueur ' + joueur + ' a gagné !';
            desactiveEcouteurs();
            symbole === 'x' ? scores[0]++ : scores[1]++;
            document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
        } else if (nbCoups === taille * taille) {
            zoneMessage.innerHTML = 'Match nul !';
            desactiveEcouteurs();
        } else {
            if (symbole === 'x') {
                symbole = 'o';
                joueur = 2;
            } else {
                symbole = 'x';
                joueur = 1;
            } 
            zoneMessage.innerHTML = 'Joueur ' + joueur + ', à toi de jouer !';
        }
    } else {
        zoneMessage.innerHTML = 'Case déjà occupée !!! ';
    }
}

function desactiveEcouteurs() {

    var btn_grille = document.getElementsByClassName('case');
    console.log(btn_grille);
    for (let i=0;i<btn_grille.length;i++){
        btn_grille[i].disabled=true;
    }
    document.getElementById('btn_reset').disabled = false;

}

document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];