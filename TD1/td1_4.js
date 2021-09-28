function add(){
    let tab = [1,2,3,4,5];
    let longueurTab = tab.length;
    let compteur = 0;

    for (let i=0; i<longueurTab;i++){
        compteur += tab[i];
    }
    console.log(compteur);
}
//add();


function intPair(){
    let tab = [1,2,3,4,5,6,7,8,9,10];
//  let tab = [1,3,5,7,9];
//  let tab = [1,2,3,5,7];
    let longueurTab = tab.length;
    let compteur = 0;

    for (let i=0; i<longueurTab;i++){
        if (tab[i]%2==0) compteur++;
    }
    if (compteur==0) console.log("Il n'y a pas de nombre pair dans le tableau");
    else if (compteur==1) console.log("Il y a un nombre pair dans le tableau");
    else console.log("Il y a " + compteur + " nombres pairs dans ce tableau")
}
//intPair();

function fusion(){   //la fonction n'ajoute pas le dernier élément d'un des tableau dans le tableau final...
    let tab1 = [1,3,5,7,9,11,13,15];
    let tab2 = [2,4,6,8,10,12,14,16];
    let i = 0;
    let j = 0;
    let k = 0;
    let tabTrie = []; //tableau final

    let taille = ((tab1.length)+(tab2.length)-1);

  //  while ((tab1[i]!==tab1[tab1.length]) && (tab2[j]!==tab2[tab2.length])){  //les deux while fonctionne
  /*  while (tabTrie.length !== taille){
        if (tab1[i]<=tab2[j]) {
            tabTrie[k] = tab1[i];
            i++;
            k++;
        }
        else if (tab1[i]>=tab2[j]) {
            tabTrie[k] = tab2[j];
            j++;
            k++;
        }
   }*/

   while (tabTrie.length !== taille){
    if (tab1[i]<=tab2[j]) {
        tabTrie.push(tab1[i]);  // la fonction push permet d'avoir un itérateur en moins
        i++;
    }
    else if (tab1[i]>=tab2[j]) {
        tabTrie.push(tab2[j]);
        j++;
    }
}

    console.log(tabTrie);
}
//fusion();


function dichotomie() {
    let tab = [1,2,3,4,5,6,7,8,9,10];
    let d = 1; //debut de la table
    let f = tab.length;  //le dernier id d'element de la table correspond à la taille de la table
    let milieu;
    let nbRecherche = 4;  //la valeur que l'on souhaite retrouvé dans la table
    let trouve = false;
        
//  function dicho(nbRecherche){
    while ((nbRecherche != tab[milieu]) && d <= f){
        milieu = Math.round((d + f) / 2);
        if (nbRecherche == tab[milieu]) { 
            console.log("Le nombre " + nbRecherche + " se trouve en position " + milieu); 
            trouve = true;
            } 
        else if (tab[milieu] < nbRecherche) Math.round(d = milieu + 1); 
        else f = Math.round(milieu - 1);       
        } 
    if (trouve !== true) console.log("Le nombre " + nbRecherche + " n'est pas répertoriée dans le tableau"); 

// } dicho(70);
//dicho(40);
//dicho(4);
}
//dichotomie();


function param(){

}
//param();


function occurences(){
    let ch="En septembre , s'il tonne , la vendange est bonne . Le dicton du 15 septembre : En septembre si trois jours il tonne , c'est un nouveau bail pour l'automne .";
    let tab = new Object();

    tabCh = ch.split(' ');  

    console.log(ch);
    console.log(tabCh);

    for (let i=0; i<tabCh.length;i++){
        tab[tabCh[i]] = (tab[tabCh[i]] || 0) + 1;
        
    }
    console.log(tab);
}
//occurences();