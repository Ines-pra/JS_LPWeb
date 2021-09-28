function saisie_chaine() {
    let chaine;
    do {
        chaine = window.prompt("Veuillez saisir une chaine en majuscule");
    } while(chaine !== chaine.toUpperCase());

    if(chaine === chaine.toUpperCase()) {
        window.alert("Votre chaine est bien en majuscule !");
    }
}
//saisie_chaine();

function alea_chaine(){     //pas reussi à utiliser la fonction '65 + Math.random()*(123-65)' demandée
    let chaine;
    let i=0;
    var tab=[];

    // fonction generant des caracteres aleatoirement tirés du site :
    // https://www.equinode.com/blog/article/generer-une-chaine-de-caracteres-aleatoire-avec-javascript#:~:text=%22strRandom%22%20est%20une%20fonction%20JavaScript,une%20cha%C3%AEne%20de%20caract%C3%A8re%20al%C3%A9atoire.&text=Par%20d%C3%A9faut%2C%20les%20caract%C3%A8res%20sont,permet%20d'inclure%20des%20majuscules
    function strRandom(o) {
        var a = 10,
            b = 'abcdefghijklmnopqrstuvwxyz',
            c = '',
            d = 0,
            e = ''+b;
        if (o) {
          if (o.startsWithLowerCase) {
            c = b[Math.floor(Math.random() * b.length)];
            d = 1;
          }
          if (o.length) {
            a = o.length;
          }
          if (o.includeUpperCase) {
            e += b.toUpperCase();
          }
          if (o.includeNumbers) {
            e += '1234567890';
          }
        }
        for (; d < a; d++) {
          c += e[Math.floor(Math.random() * e.length)];
        }
        return c;
    }

    do{
        chaine=strRandom({
        length:5,                //chaine d'une longueur de 5 caracteres
        includeUpperCase: true,  //chaine incluant des majuscules
          }); 
   //     chaine=(65 + Math.random()*(123-65));
        console.log(chaine);
        tab.push(chaine);  //incrémente le tableau pour stocker les chianes et pouvoir les retranscrire plus tard
        i++;   
    } while(chaine !== chaine.toUpperCase());
    console.log(i);
    alert("Les chaines générées sont :\n"+tab+"\nL'opération a été répétée "+i+" fois ");
}
//alea_chaine();


function alea_voy(){
    let voy = ['a','e','i','o','u'];
    let nb_alea = parseInt(Math.random()*100);  //génère un nb pour avoir une longueur de chaine aléatoire, avec un max de 100
    let i;
    let ch ="";
    console.log(nb_alea);
    for(i=1;i<=nb_alea;i++){
        const randomVoy = voy[Math.floor(Math.random() * voy.length)];  //pioche alétoirement une voyelle dans le tableau voy
        ch=ch.concat(randomVoy);  //rajoute la voyelle choisit à la suite de la chaine ch    
    }
    console.log("Chaine de voyelles aléatoires => "+ch);
}
//alea_voy();

function concat_nom() {
    let nom;
    let prenom = "";
    nom = window.prompt("Veuillez saisir votre nom");
    prenom = window.prompt("Veuillez saisir votre prénom");

    nom = nom.toUpperCase();
  //  window.alert(nom);

    function MajNom(nom){ 
    return nom.replace(/(\b\w)/g,function(T,L){return L.toUpperCase()})
    }
    window.alert(nom + ' ' +MajNom(prenom))
}
//concat_nom();


function cryptage() {
  let ch = window.prompt("Veuillez saisir une phrase :");

  crypt = ch  .replaceAll('a', '4').replaceAll('A', '4')
              .replaceAll('e', '3').replaceAll('E', '3')
              .replaceAll('g', '6').replaceAll('G', '6')
              .replaceAll('i', '1').replaceAll('I', '1')
              .replaceAll('o', '0').replaceAll('O', '0')
              .replaceAll('s', '5').replaceAll('S', '5')
              .replaceAll('z', '2').replaceAll('Z', '2');
  
  window.alert("Votre phrase cryptée donne : " + crypt);
}
// cryptage();


function JazzBundle() {
  let n = 30;

  for (i = 0 ; i <= n ; i++) {
      mod3 = (i % 3 === 0);
      mod5 = (i % 5 === 0);

      if (mod3 && mod5) { console.log("Jazz Bundle"); } 
      else if (mod3) { console.log("Jazz"); } 
      else if (mod5) { console.log("Bundle"); } 
      else { console.log(i); }
  }
}
// JazzBundle();