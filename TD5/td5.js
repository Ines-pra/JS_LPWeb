let error = "Une ereur est survenue";
let select1 = document.getElementById("region");
let select2 = document.getElementById("departement");
let select3 = document.getElementById("ville");
let nbH = document.getElementById("nbH");

//-- REGION --
fetch('https://geo.api.gouv.fr/regions')
.then(function(res) {
  if (res.ok){
      return res.json(); 
  }
  })
.then(function(value){    
    console.log(value);    
    l = value.length;
    //on vide la liste des departements
    var length = select2.options.length;
    for (i = length-1; i >= 1; i--) {
      select2.options[i] = null;
    }  
    //on vide la liste des villes
    var length1 = select3.options.length;
    for (i = length1-1; i >= 1; i--) {
      select3.options[i] = null;
    }
    //on incrémente la liste des régions
    
    for (let i = 0; i<=l ; i++){
        var nomR = value[i].nom; 
        var opt = document.createElement('option');
        opt.setAttribute("name","optR");
        opt.setAttribute("id",value[i].code);
        opt.value = nomR;
        opt.innerHTML = nomR;
        select1.appendChild(opt);
        
   }
})
.catch(function(error) {
  console.log(error);
});

//-- DEPARTEMENT --
select1.addEventListener('change', (event) => {
    var index = select1.selectedIndex;
    var value =  select1.options[index].id;
    var lien = "https://geo.api.gouv.fr/regions/"+value+"/departements";
    fetch(lien)
    .then(function(result) {
        if (result.ok){
          return result.json(); 
        }
    })
    .then(function(valueR){ 
        //on vide la liste des departements
        var length = select2.options.length;
        for (i = length-1; i >= 1; i--) {
          select2.options[i] = null;
        }  
        //on vide la liste des villes
        var length1 = select3.options.length;
        for (i = length1-1; i >= 1; i--) {
          select3.options[i] = null;
        }    
        //on incrémente la liste des departements
        for (let j = 0; j<=valueR.length ; j++){
          var nomR = valueR[j].nom; 
          var opt = document.createElement('option');
          //opt.setAttribute("name","optD");
          opt.setAttribute("id",valueR[j].code);
          opt.value = nomR;
          opt.innerHTML = nomR;
          select2.appendChild(opt);
        }
    })
  })

//-- VILLE --
select2.addEventListener('change', (event) => {
  var index = select2.selectedIndex;
  var value =  select2.options[index].id;
  var lien = "https://geo.api.gouv.fr/departements/"+value+"/communes";
  fetch(lien)
  .then(function(result) {
      if (result.ok){
        return result.json(); 
      }
  })
  .then(function(valueV){ 
      //on vide la liste des villes
      var length = select3.options.length;
      for (i = length-1; i >= 1; i--) {
        select3.options[i] = null;
      }   
      //on incrémente la liste des villes
      for (let j = 0; j<=valueV.length ; j++){
        var nomR = valueV[j].nom; 
        var opt = document.createElement('option');
        opt.setAttribute("id",valueV[j].population);
        opt.value = nomR;
        opt.innerHTML = nomR;
        select3.appendChild(opt);
        
      }
  })
}) 

//-- Affichage du nb d'hab dans la ville choisie --
select3.addEventListener('change', (event) =>{
  var index = select3.selectedIndex;
  var valueOpt =  select3.options[index].id;
  console.log(valueOpt);
  nbH.innerHTML= valueOpt;
})
