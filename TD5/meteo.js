let lblVille = document.getElementById("villeM");
lblVille.innerHTML = ("Météo : " + localStorage.getItem("nomVille"));

let lblTemp = document.getElementById("temp");
lblTemp.innerHTML = localStorage.getItem("temp");

let lblRes = document.getElementById("res");
lblRes.innerHTML = localStorage.getItem("ressenti");

let lblMin = document.getElementById("min");
lblMin.innerHTML = localStorage.getItem("temp_min");

let lblMax = document.getElementById("max");
lblMax.innerHTML = localStorage.getItem("temp_max");

let lblTemps = document.getElementById("temps");
lblTemps.innerHTML = localStorage.getItem("meteo");

let lblHum = document.getElementById("hum");
lblHum.innerHTML = localStorage.getItem("humi");


console.log(localStorage.getItem("nomVille"));
console.log(localStorage.getItem("temp"));
console.log(localStorage.getItem("ressenti"));
console.log(localStorage.getItem("temp_min"));
console.log(localStorage.getItem("temp_max"));
console.log(localStorage.getItem("meteo"));
console.log(localStorage.getItem("humi"));