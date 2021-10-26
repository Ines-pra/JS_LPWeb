let error = "Une ereur est survenue";
let select1 = document.getElementById("region");
let select2 = document.getElementById("departement");
let select3 = document.getElementById("ville");
let nbH = document.getElementById("nbH");
let nbHT = document.getElementById("nbHT");
window.sessionStorage.clear();
window.localStorage.clear();

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
          opt.setAttribute("id",valueR[j].code);
          opt.value = nomR;
          opt.innerHTML = nomR;
          select2.appendChild(opt);
          
        }
    })
    .catch(function(error) {
      console.log(error);
    });
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
        //on stocke les codes postaux des villes dans le navigateur
        window.sessionStorage.removeItem("arr"+j);
        window.sessionStorage.removeItem("nomV"+j);
        //window.sessionStorage.clear();
        window.sessionStorage.setItem("arr"+j,valueV[j].codesPostaux);
        window.sessionStorage.setItem("nomV"+j,valueV[j].nom);
        window.sessionStorage.setItem("nbH"+j,valueV[j].population);
       // console.log(sessionStorage.getItem("arr"+j));
        
      }
  })
  .catch(function(error) {
    console.log(error);
  });
}) 


select3.addEventListener('change', (event) =>{
  //-- Affichage du nb d'hab dans la ville choisie --
  var index = select3.selectedIndex;
  var valueOpt =  select3.options[index].id;
  nbH.innerHTML= valueOpt;

  

  var tab = document.getElementById('tab');
  tab.innerHTML="";

  let compteur = 0;
  let compteurnbHT = 0;
  
  var tabCP = [];
  
  for(let k = 0;k<=sessionStorage.length/3;k++){

    if (sessionStorage.getItem("arr"+(index-1)) == sessionStorage.getItem("arr"+k)){
        compteur++;
        //--Creation et stockage des données dans un tableau --
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        td1.value=sessionStorage.getItem("nomV"+k);
        td1.innerHTML=sessionStorage.getItem("nomV"+k);
        td2.value=sessionStorage.getItem("arr"+k);
        td2.innerHTML=sessionStorage.getItem("arr"+k);
        td3.value=sessionStorage.getItem("nbH"+k);
        td3.innerHTML=sessionStorage.getItem("nbH"+k);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tab.appendChild(tr);
        //--Nombre total d'habitants--
        compteurnbHT += parseInt(sessionStorage.getItem("nbH"+k));
    }


/*    tabCP[k] = parseInt(sessionStorage.getItem("arr"+k));
  //  console.log(tabCP);

    var v1 = parseInt(sessionStorage.getItem("arr"+(index-1)));
    var v2 =  sessionStorage.getItem("arr"+k);

    var v3 = ((sessionStorage.getItem("arr"+(index-1)) == sessionStorage.getItem("arr"+k)));
   
    function filtrer(){
      if (sessionStorage.getItem("arr"+(index-1)) == sessionStorage.getItem("arr"+k)){
      console.log("Occurences trouvé");
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      td2.value=sessionStorage.getItem("arr"+k);
      td2.innerHTML=sessionStorage.getItem("arr"+k);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tab.appendChild(tr);
      //compteur++;
    }
    }
    var cp = tabCP.map(filtrer);
    console.log(cp);
   // var map1 = sessionStorage.getItem("arr"+k).map(x=>"arr"+k);
*/

  }
  nbHT.innerHTML = compteurnbHT;
  console.log("Occurences :" +compteur);
  
  //--On récupère le nom de la ville choisit
  window.localStorage.setItem("nomVille",select3.value);
})

btn.addEventListener('click', (event) =>{

  

  var ville = window.localStorage.getItem("nomVille");
  if (ville==null){
    console.log("auncune ville selectionnee");
  }
  else{
    
    var lien = "https://api.openweathermap.org/data/2.5/weather?q="+ville+"&APPID=a447d5c4772e52bf69f411a314b633ee";

    fetch(lien)
    .then(function(result) {
      if (result.ok){
        return result.json(); 
      }
    })
    .then(function(valueM){ 
       
      // console.log(window.localStorage.getItem("nomVille"));
      // console.log((valueM.main.temp-273.15).toFixed(2) + "°C");
      // console.log((valueM.main.feels_like-273.15).toFixed(2) + "°C");
      // console.log((valueM.main.temp_min-273.15).toFixed(2) + "°C");
      // console.log((valueM.main.temp_max-273.15).toFixed(2) + "°C");
      // console.log(valueM.weather[0].main);
      // console.log(valueM.main.humidity + "%");

      window.localStorage.setItem("temp", (valueM.main.temp-273.15).toFixed(2)+ "°C");
      window.localStorage.setItem("ressenti", (valueM.main.feels_like-273.15).toFixed(2) + "°C");
      window.localStorage.setItem("temp_min", (valueM.main.temp_min-273.15).toFixed(2) + "°C" );
      window.localStorage.setItem("temp_max", (valueM.main.temp_max-273.15).toFixed(2) + "°C" );
      window.localStorage.setItem("meteo", valueM.weather[0].main );
      window.localStorage.setItem("humi", valueM.main.humidity + "%" );

      document.location.href="meteo.html"; 
    })
  }
})
