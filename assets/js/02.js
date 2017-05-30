// déclarer un tableau numerique

var monTableau 	= [];
var myArray		= new Array;

myArray[0] = "Hugo";
myArray[1] = "Tantan";
myArray[2] = "Gégé";

console.log(myArray);
console.log(myArray[2], myArray[1], myArray[0]);
console.log(myArray[0], myArray[1], myArray[2]);

var NosPrenoms = ["Yimin", "Alex", "Cristian", "Tristan"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

var Details = {
	"prenom" 	: "Jean-Claude",
	"nom"		: "Duss",
	"age"		: "50"
}

console.log(Details);
console.log(typeof Details);

// tableau 2 dimensions

var listeDePrenoms	= ["Hugo", "Rodrigue", "Kristie"];
var listeDeNoms 	= ["LIEGEARD", "NOUEL", "SOUKAI"];

var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);

document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);
document.write(" ");

// EXERCICE
/*
var listeDePrenomsNoms	= ["Hugo LIEGEARD", "Rodrigue NOUEL", "Kristie SOUKAI", "Jean-Claude Duss"];
var listeDeTel 			= ["0612345678", "0685234587", "0632659887", "0614253687"];

var AnnuaireDesStagiaires = [listeDePrenomsNoms, listeDeTel];
console.log(AnnuaireDesStagiaires);

document.write(AnnuaireDesStagiaires[0][2]);
document.write(" ");
document.write(AnnuaireDesStagiaires[1][2]);
*/
var AnnuaireDesStagiaires = [
	{"prenom" : "Hugo", "nom" : "LIEGEARD", "tel" : "07 83 97 15 15"},
	{"prenom" : "Jean-Claude", "nom" : "Duss", "tel" : "07 01 02 03 04"},
	{"prenom" : "Zonette", "nom" : "Lakékette", "tel" : "07 05 06 07 08"}
];
console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].nom);
console.log(AnnuaireDesStagiaires[1]["prenom"]);

// Exemple 3D



// Ajouter un élément

var Couleurs = ["Rouge", "Jaune", "Vert"];

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

// NB: La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau

// récupérer et sortir le dernier élément
// la fonction pop() me permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur.
// Je peux accessoirement récupérer cette valeur dans une variable.

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

// la meme chose est possible avec le premier élément en utilisant la fonction shift()
// N.B: la fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.
