export class Morpion {

    static MIN_GRILLE = 3;
    static MAX_GRILLE = 8;

    #taille;
    #grille;

    constructor(taille) {
        this.taille = taille;
    }

    set taille(taille) {
        if (Number.isNaN(taille) || taille < Morpion.MIN_GRILLE || taille > Morpion.MAX_GRILLE) {
            throw new Error("La taille est invalide !");
        } else {
            console.log("Taille:", taille);

            this.#taille = taille;
            this.#grille = [];
            for (let i = 0; i < taille; i++) {
                this.#grille[i] = new Array(taille);
                for (let j = 0; j < taille; j++) {
                    this.#grille[i][j] = ' ';
                }
            }
        }
    }


    tourJ(symbole,joueur){
        if (symbole === 'x') {
            symbole = 'o';
            joueur = 2;
        } else {
            symbole = 'x';
            joueur = 1;
        }
    }


    aGagne(symbole, y, x) {
        let nbSymboles;

        // gagné en ligne ?
        const ligne = y;
        nbSymboles = 0;
        for (let col = 0; col < this.taille; col++) {
            if (this.grille[ligne][col] === symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === this.taille) {
            return true;
        }

        // gagné en colonne ?
        const col = x;
        nbSymboles = 0;
        for (let ligne = 0; ligne < this.taille; ligne++) {
            if (this.grille[ligne][col] === symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === this.taille) {
            return true;
        }

        // gagné en diagonale ?
        if (x === y) {
            nbSymboles = 0;
            for (let lc = 0; lc < this.taille; lc++) {
                if (this.grille[lc][lc] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.taille) {
                return true;
            }
        }

        // gagné en diagonale inverse ?
        if (x === this.taille - (y + 1)) {
            nbSymboles = 0;
            for (let ligne = 0; ligne < this.taille; ligne++) {
                if (this.grille[ligne][this.taille - (ligne + 1)] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.taille) {
                return true;
            }
        }

        return false;
    }

}