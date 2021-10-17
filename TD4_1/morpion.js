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

let j1;
let j2;
let div1;
let div2;

const btnReset = document.getElementById('btn_reset');
const btnValidJ = document.getElementById("btn_validJ");
btnValidJ.addEventListener('click', ajoutJ);
div1 = document.getElementById("DIV1");
div2 = document.getElementById("DIV2");
div2.style.display = "none";

function ajoutJ(){
    j1 = document.getElementById("j1").value;
    j2 = document.getElementById("j2").value;
    console.log(j1,j2);
    
    document.getElementById('score').innerHTML = (j1 + ' : ' + scores[0] + ' - ' + j2 + '  : ' + scores[1]);

    if (j1 !== '' && j2!==''){
        btnReset.addEventListener('click', recommence);
        div2.style.display = "block";
        div1.style.display = "none";
    }
    else{
        window.alert("Veuillez saisir un nom pour tous les joueurs")
    }
}


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
        joueur = j1;
        symbole = 'x';
        zoneMessage.innerHTML = (j1 + ', à toi !');
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

            zoneMessage.innerHTML = (joueur + ' a gagné !');
            desactiveEcouteurs();
            symbole === 'x' ? scores[0]++ : scores[1]++;
            document.getElementById('score').innerHTML = (j1 + ' : ' + scores[0] + ' - ' + j2 +'  : ' + scores[1]);
        } else if (nbCoups === taille * taille) {
            zoneMessage.innerHTML = 'Match nul !';
            desactiveEcouteurs();
        } else {
            if (symbole === 'x') {
                symbole = 'o';
                joueur = j2;
            } else {
                symbole = 'x';
                joueur = j1;
            } 
            zoneMessage.innerHTML = (joueur + ', à toi de jouer !');
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
