export class Morpion {

    static MIN_GRILLE = 3;
    static MAX_GRILLE = 8;

    #taille;
    #grille;

    constructor(taille) {
        this.taille = taille;
    }

    get grille(){
        return this.#grille;
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



    aGagne(symbole, y, x) {
        let nbSymboles;

        // gagné en ligne ?
        const ligne = y;
        nbSymboles = 0;
        for (let col = 0; col < this.#taille; col++) {
            if (this.#grille[ligne][col] === symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === this.#taille) {
            return true;
        }

        // gagné en colonne ?
        const col = x;
        nbSymboles = 0;
        for (let ligne = 0; ligne < this.#taille; ligne++) {
            if (this.#grille[ligne][col] === symbole) {
                nbSymboles++;
            }
        }
        if (nbSymboles === this.#taille) {
            return true;
        }

        // gagné en diagonale ?
        if (x === y) {
            nbSymboles = 0;
            for (let lc = 0; lc < this.#taille; lc++) {
                if (this.#grille[lc][lc] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.#taille) {
                return true;
            }
        }

        // gagné en diagonale inverse ?
        if (x === this.#taille - (y + 1)) {
            nbSymboles = 0;
            for (let ligne = 0; ligne < this.#taille; ligne++) {
                if (this.#grille[ligne][this.#taille - (ligne + 1)] === symbole) {
                    nbSymboles++;
                }
            }
            if (nbSymboles === this.#taille) {
                return true;
            }
        }

        return false;
    }
}

//-- Mode Simple

export class MorpionSimple extends Morpion{
     
    constructor(taille) {
        super(taille);
    }

    
    aGagne(symbole, y, x) {
        const aTrouver = symbole.repeat(3);
        
        // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
        let ligne = '';
        this.grille[y].forEach(element => (ligne += element));
        if (ligne.indexOf(aTrouver) >= 0) {
            return true;
        }

        // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
        let col = '';
        this.grille.forEach(element => (col += element[x]));
        if (col.indexOf(aTrouver) >= 0) {
            return true;
        }

        // gagné diagonale
        
        if (x === y) {
            let diagonale = '';
            for (let lc = 0; lc < taille.value; lc++) {
                diagonale += this.grille[lc][lc];
            }
            if (diagonale.indexOf(aTrouver) >= 0) {
                return true;
            }
        }

        // gagné diag inverse
        if (x === taille.value - (y + 1)) {
            let inverse = '';
            for (let lc = 0; lc < taille.value; lc++) {
                inverse += this.grille[lc][taille.value - (lc + 1)];
            }
            if (inverse.indexOf(aTrouver) >= 0) {
                return true;
            }
        }

        return false;
    }
    

  
    
}