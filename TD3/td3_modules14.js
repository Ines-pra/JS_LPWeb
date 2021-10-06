import {getSum41 as functionGetSum41} from "./array_utils.js";
import {getNumberOfEven42 as functionNumberOfEven42} from "./array_utils.js";
import {getMaxEven45 as functionGetMax45} from "./array_utils.js";
import {binarySearch44 as functionBinarySearch44} from "./array_utils.js";

let tab = [10,13,22,45,50,66,78];
let elt = 22;
function mod(){
    console.log("Fonction 1 : " + functionGetSum41(tab));
    console.log("Fonction 2 : " + functionNumberOfEven42(tab));
    console.log("Fonction 5 : " + functionGetMax45(...tab)); 
    console.log("Fonction 5 : " + functionBinarySearch44(tab,elt));
}
//mod();


var btnPlus = document.getElementById("ajout");
var btnResult = document.getElementById("resultat");

let i=2;

btnPlus.addEventListener("click", function()
    {       
        let container = document.getElementById("elt1");
        let p = document.createElement("p");
        let label = document.createElement("input");
        label.setAttribute("type","number");
        label.setAttribute("name","inputNombre");
        container.appendChild(p).innerHTML;
        container.appendChild(label).innerHTML;
        p.after("Element "+i+" : ");
        label.after();
        i++;
    });
         

    btnResult.addEventListener("click", function()
    {
        let tabInput=[];
        var recupInput = document.getElementsByName('inputNombre');
        var recupInputRech = document.getElementById('inputRech').value;
        if (recupInputRech==''){
            window.alert("Saisissez un élément à rechercher");
        }
        else{
            if(recupInput.length > 0) {
                for(let j=0; j<recupInput.length;j++){
                    tabInput.push(parseInt(recupInput[j].value)); 
                }
            }else console.log("tableau vide");   
            console.log(tabInput); 

            let somme = functionGetSum41(tabInput)
            document.getElementById("somme").innerHTML = somme;
            let pair = functionNumberOfEven42(tabInput);
            document.getElementById("pair").innerHTML = pair;
            let grandpair = functionGetMax45(...tabInput);
            document.getElementById("grandpair").innerHTML = grandpair;
            let position = functionBinarySearch44(tabInput,parseInt(recupInputRech));
            document.getElementById("position").innerHTML = position;
        }

    });






            