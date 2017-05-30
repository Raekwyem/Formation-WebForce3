// Exercice
/*
function verif(){
	let age = parseInt(prompt("Hello! How old are you?", "<Enter your age>"));
	console.log(age);
	console.log(typeof age);
	
	if(age < 18){
		alert("You are underage, go fuck yourself!");
		window.location.href = "http://www.google.com"; 
	} else{
		alert("Welcome to the Dark side of The Force!");
	}	
}
verif();
*/

// Exercice - soluce variante
/*
var MajoriteLegaleFR = 18;

function verifierAge(){
	return parseInt(prompt("Hello! How old are you?", "<Enter your age>"));
}
if(verifierAge() >= MajoriteLegaleFR){
	alert("Bienvenu");
} else{
	alert("Oula!");
	document.location.href = "http://lmgtfy.com/?q=baton";

}
*/

// "==" égal à
// "===" strictement égal à
// "!=" différent de
// "!==" strictement différent de
// "||" ==> OR   "&&" ==> AND

// l'opérateur "!" : qui signie le CONTRAIRE de, ou encore NOT
var siMonUtilisateurEstApprouve = true;
if(!siMonUtilisateurEstApprouve){ // si l'utilisateur n'est pas approuvé

}


// EXERCICE
// 
function login(){
	var email, mdp;

	email = "wf3@hl-media.fr";
	mdp ="wf3";
	
	let emailInput = prompt("Enter your email : ", "<Enter your email>");

	if(emailInput !== email){
		alert("Wrong email bro!");
	} 	else{
			alert("Go on!");
			
			let mdpInput = prompt("Enter your password : ", "<Enter your password>");
			if(mdpInput !== mdp){
				alert("wrong password");
				} else	{
					alert("good job");
					}
			}

	
	/*if((emailInput !== email) && (mdpInput !== mdp)){
		return false;
	} else{
		return true
	}*/

}
login();