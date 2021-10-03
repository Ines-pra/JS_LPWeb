//-- rajouter l'article 0
document.write("<h2> Article 0 - Interdiction </h2> <p <span style=\"color:#000000;\"> Il est interdit de doubler, sous peine de disqualification ! </p>");

//-- mettre tout les titres h2 en majuscules //var titres2 = document.getElementsByTagName('h2');

var titres = document.querySelectorAll('h2');
titres.innerHTML="";
for (let i=0;i<titres.length;i++){
    const newTitres = titres[i].style.textTransform="uppercase";
    titres.innerHTML += newTitres;
}

/*for (var i = 0, len = titres.length; i < len; i++){
  titres[i].style.textTransform = "uppercase";
}
document.write(titres.length);*/



