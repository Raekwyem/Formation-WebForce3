//alert("WOW! T'es trop fort!");
//alert("Trop fort!"); commentaire sur une ligne
/*
	Commentaire sur plusieurs lignes
	raccourci : ctrl + / ou ctrl+shift

 */

// String
var Prenom;

Prenom = "Hugo";

console.log(Prenom);

console.log(typeof Prenom);

// Number

var Age = 40;

console.log(Age);

console.log(typeof Age);

// mot-clé "let" sous ECMA 6

let Km = 12;

console.log(Km);

console.log(typeof Km);

if(Km == 12){
	Age++;
	console.log(Age);
}
	else{
		Age--;
		console.log(Age);
		}

// FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// BOOLEANS (VRAI/FAUX)

var unBooleen = false;
console.log(unBooleen);
console.log(typeof unBooleen);

// const (Constante)

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// convert number to string 24 ==> "24"
// la fonction parseInt() pour retourner un entier à partir de ma chaine de caractère

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

// la fonction parseFloat() permet de retourner un Float sur la base d'un String

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// conversion d'un nombre en String avec toString()

var unNombreEnString = 10;
var maChaineDeCaractere = unNombreEnString.toString();
console.log(unNombreEnString);
console.log(typeof unNombreEnString);
console.log(typeof maChaineDeCaractere);