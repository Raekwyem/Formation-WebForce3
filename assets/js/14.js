// Les évènements vont me permettre de déclencher une fonction, c-à-d une série d'instructions suite à une action de mon utilisateur.
// 
// OBJECTIF : être en mesure de capturer ces évènements afin d'exécuter une fonction.
// 
// MOUSE
// - click : clic sur un élément
// - mouseenter : la souris passe au dessus de la zone qu'occupe un élément
// - mouseleave : la souris sort de cette zone
// 
// KEYBOARD
// - keydown : une touche du clavier est enfoncée
// - keyup : une touche a été relâchée
// 
// WINDOW
// - scroll : défilement de la fenêtre
// - resize : redimensionnement de la fenêtre
// 
// FORM
// - change : pour les éléments <input>, <select>, <textarea> 
// - submit : à l'envoi (soumission) d'un formulaire
// 
// DOCUMENT
// - DOMContentLoaded : executé lorsque le document HTML est complètement chargé, sans attendre le CSS et les images
// 
// 
// LES ECOUTEURS D'EVENEMENTS
// 
// Pour attacher un évènement à un élément, ou autrement dit, pour déclarer un écouteur d'évènement qui se chargera de lancer une action, c-à-d une fonction pour un évènement donné, je vais utiliser la syntaxe suivante:
// 

var p = document.getElementById("MonParagraphe");
console.log(p);

// Je souhaite que mon paragraphe soit rouge au clic de la souris
// 
// 1 - je définis une fonction chargée d'exécuter cette action
function changeColorToRed(){
	p.style.color = "red";
}
// 2 - je déclare un écouteur qui se chargera d'appeler la fonction au déclenchement de l'évènement
p.addEventListener("click", changeColorToRed);

// EXERCICE
// à l'aide de js, créez un champ "input" type text avec un ID unique.
// Affichez ensuite dans une alerte, la saisie de l'utilisateur.




var input = document.createElement("input");
document.body.appendChild(input);
input.id = "write"
input.setAttribute("type", "text");
input.setAttribute("placeholder", "tapez du texte");
/*
document.getElementById("write").addEventListener("keydown", function() {
	if (event.keyCode == 13){
    var message = document.getElementById("write").value;
    alert( message );}

}, false);
*/
input.addEventListener("change", voirSaisie);
function voirSaisie(){
	alert(input.value);
}