// MANIPULATION DES CONTENUS	

function l(e){
	console.log(e);
}

// je souhaite récupérer mon lien

var google = document.getElementById("google");
l(google);

// je souhaite accéder aux informations de ce lien, ex:

// A - le lien avec lequel point la balise
l("Le lien vers lequel pointe la balise :");
l(google.href);
// B - L'ID de la balise
l("ID de la balise :");
l(google.id);
// C - La Classe de la balise
l("Classe de la balise :");
l(google.className);
// D - Le Texte de la balise  
l("Texte de la balise :");
l(google.textContent);

// je souhaite modifier le contenu de mon lien
// comme une variable classique, je vais simplement venir affecter une nouvelle valeur
google.textContent = "Mon lien vers Google !";

// ajouter un élément dans ma page

// 2 méthodes:
// 1 - la fonction document.createElement() va permettre de générer un nouvel élément dans le DOM; que je pourrais par la suite modifier avec les méthodes que nous venons de voir
// PS: ce nouvel élément est placé en mémoire
// 
// définition de mon élément
var span = document.createElement("span");
// si je souhaite lui donner un ID
span.id = "MonSpan";
// si je souhaite lui attribuer du contenu
span.textContent = "Mon beau texte en JS";

// 2- la fonciton appendChild() va me permettre de rajouter un enfant à un élément du DOM
google.appendChild(span);

/*
EXERCICE

en partant du travail déjà réalisé sur la page,
crééez directement dans la page une balise <h1></h1> ayant comme contenu : "Titre de mon article"

Dans cette balise, vous créerez un lien vers une url de votre choix.

BONUS: ce lien sera de couleur Rouge et non souligné.
 */

var h1 = document.createElement("h1");
var a = document.createElement("a");

a.textContent = "Titre de mon Article";
a.href = "http://wwww.amazon.fr";

h1.appendChild(a);
document.body.appendChild(h1);

a.style.color = "red";
a.style.textDecoration = "none";
