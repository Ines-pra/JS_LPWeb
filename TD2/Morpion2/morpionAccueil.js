function validJoueurs(){
    //self.location.href='morpion2.html'
    
    j1 = document.getElementById("joueur1");
    sessionStorage.setItem("joueur1",j1)
    j2 = document.getElementById("joueur2");
    sessionStorage.setItem("joueur2",j2)
    document.location.href="http://127.0.0.1:5500/Morpion2/morpion2.html";
}