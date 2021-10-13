import {Morpion} from "../morpion_modules.js";

let morpion;
let nbCoups;
let joueur;
let symbole;
let scores = [0, 0];

let taille;
let modeJeu;
let zoneMessage;

const btnReset = document.getElementById('btn_reset');
btnReset.addEventListener('click', recommence);

// * FAIT
function recommence() {
    zoneMessage = document.getElementById('messages');
    taille = Number.parseInt(document.getElementById('taille').value);
    modeJeu = document.getElementById('simple').checked ? 'simple' : 'complet';
    try {
        morpion = new Morpion(taille);
        const table = document.getElementById('table_morpion');
        for (let l = table.rows.length - 1; l >= 0; l--) {
            table.deleteRow(l);
        }

        for (let i = 0; i < taille; i++) {
            const ligne = table.insertRow(i);
            for (let j = 0; j < taille; j++) {
                const id = '' + ((i + 1) * 10 + (j + 1));
                const cell = ligne.insertCell(j);
             //   document.cell.addEventListener("click",clicBouton);
                cell.innerHTML = "<input type='button' class='case' id='" + id + "' onclick='clicBouton(this, " + i + ',' + j + ")'/>";
                cell.innerHTML = "<input type='button' class='case' id='" + id + "'/>";
                document.getElementById(id).value = '';
                console.log(cell);
              //                document.getElementById(id).addEventListener("click", clicBouton(document.getElementById(id),i,j));
        
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

        const victoire = morpion.aGagne(symbole, y, x);

        if (victoire) {
            zoneMessage.innerHTML = 'Le joueur ' + joueur + ' a gagné !';
            desactiveEcouteurs();
            symbole === 'x' ? scores[0]++ : scores[1]++;
            document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
        } else if (nbCoups === taille * taille) {
            zoneMessage.innerHTML = 'Match nul !';
            desactiveEcouteurs();
        } else {
        /*    if (symbole === 'x') {
                symbole = 'o';
                joueur = 2;
            } else {
                symbole = 'x';
                joueur = 1;
            }*/ 
            Morpion.tourJ(symbole,joueur);
            zoneMessage.innerHTML = 'Joueur ' + joueur + ', à toi de jouer !';
        }
    } else {
        zoneMessage.innerHTML = 'Case déjà occupée !!! ';
    }
}

function desactiveEcouteurs() {
    for (let i = 0; i < taille; i++) {
        for (let j = 0; j < taille; j++) {
            document.getElementById('' + ((i + 1) * 10 + (j + 1))).removeAttribute('onclick');
        }
    }
    document.getElementById('btn_reset').disabled = false;
}




// MODE SIMPLE
/*
    function aGagne3ParmiN(symbole, y, x) {
        const aTrouver = symbole.repeat(3);

        // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
        let ligne = '';
        morpion[y].forEach(element => (ligne += element));
        if (ligne.indexOf(aTrouver) >= 0) {
            return true;
        }

        // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
        let col = '';
        morpion.forEach(element => (col += element[x]));
        if (col.indexOf(aTrouver) >= 0) {
            return true;
        }

        // gagné diagonale
        if (x === y) {
            let diagonale = '';
            for (let lc = 0; lc < taille; lc++) {
                diagonale += morpion[lc][lc];
            }
            if (diagonale.indexOf(aTrouver) >= 0) {
                return true;
            }
        }

        // gagné diag inverse
        if (x === taille - (y + 1)) {
            let inverse = '';
            for (let lc = 0; lc < taille; lc++) {
                inverse += morpion[lc][taille - (lc + 1)];
            }
            if (inverse.indexOf(aTrouver) >= 0) {
                return true;
            }
        }

        return false;
    }
*/
document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];