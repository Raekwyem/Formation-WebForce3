// les fonctions

// cette fonction ne retourne aucune valeur
function DitSalut(){
	alert("Salut !"); // instruction
}
// appel de la fonction "DitSalut" et déclenche ses instructions
// ne s'exécute pas si la fonction n'est pas appelée
DitSalut();

// déclarer une fonction qui prend une variable en paramètre

function Bonjour(Prenom, Nom){
	document.write("<p>Hello <strong> " + Prenom + " " + Nom + "</strong> !</p>");
}

Bonjour("Hugo", "LIEGEARD");

var Prenom 	= "Hugo";
var Nom		= "LIEGEARD";

Bonjour(Prenom, Nom);

// Exercice

function Add(Lapis, Need, Total){
	document.write("J'ai besoin de " + Lapis + " Lapis " + Need + " fois, donc " + Total + " Lapis");
}

var Lapis = 100;
var Need = 4;
var Total = Lapis * Need;

Add(Lapis, Need, Total);

// Correction

function addition(nb1, nb2){
	//let resultat = nb1 + nb2;
	//return resultat;
	return nb1 + nb2;
}

//var resultat = addition(10, 5);
//document.write("<p>" + resultat + "</p>");
document.write("<p>" + addition(10, 5) + "</p>")