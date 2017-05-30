/*
Réaliser une fonction permettant à un internaute de:
- saisir son Prénom dans un Prompt
- retourner à l'Utilisateur : Bonjour [PRENOM], quel âge as-tu?
- saisir son Age
- retourner à l'Utilisateur : Tu es donc né en [ANNEE DE NAISSANCE]
- afficher ensuite un récapitulatif dans la page: Bonjour [PRENOM], tu as [AGE] !
 */

function welcome(){
	var year = new Date();
	
	let name = prompt("What's your name?", "<Write your name>");
	console.log(name);
	console.log(typeof name);

	let age = parseInt(prompt("Hello " + name +", how old are you?", "<Enter your age>"));
	console.log(age);
	console.log(typeof age);

	alert("You were born in " + (year.getFullYear() - age));
	document.write("Hello " + name + ", you are " + age + " years old!");
}
welcome();