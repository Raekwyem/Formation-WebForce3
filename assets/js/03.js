 var debutDePhrase		= 	"Aujourd'hui ";
 var dateDuJour			= 	new Date();
 var suiteDePhrase 		= 	", sont présents : ";
 var nombreDeStagiaires = 	19;
 var finDePhrase 		=	" stagiaires.<br>";

 document.write(debutDePhrase + dateDuJour.getDate() + "/" + (dateDuJour.getMonth() + 1) + "/" + dateDuJour.getFullYear() + suiteDePhrase + nombreDeStagiaires + finDePhrase);

var phrase1 = "Je m'appelle ";
var phrase2 = "Zonette et j'ai ";
var age = 16;
var phrase3 = " ans !";

document.write(phrase1 + phrase2 + age + phrase3);