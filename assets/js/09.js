// FOR

for(var i = 1; i <= 10; i++){
	document.write("<p>Instruction executée : <strong>" + i + "</strong></p>");
}

document.write("<hr>");

// WHILE

var j = 1;
while(j <= 10 ){
	j++;
	document.write("<p>Instruction : <strong>" + j + "</strong></p>");
}

document.write("<hr>");

// EXERCICE

var Prenoms = ['Hugo', 'Jean', 'Matthieu', 'Luc', 'Pierre', 'Marc', 'Paul', 'Jacques'];

// Soluce 1
for(var k = 0; k < 6; k++){
	document.write("<p>Monsieur : <strong>" + Prenoms[k] + "</strong></p>");
}

document.write("<hr>");

// Soluce 2
var NbElementDansMonTableau = Prenoms.length;
for(var k = 0; k < NbElementDansMonTableau; k++){
	document.write("<p>Monsieur : <strong>" + Prenoms[k] + "</strong></p>");
}

document.write("<hr>");

// Soluce 3
var k = 0;
while(k < NbElementDansMonTableau){
	k++;
	document.write("<p>Monsieur : <strong>" + Prenoms[k] + "</strong></p>");
}

// Soluce 4

Prenoms.forEach(affichePrenoms);

function affichePrenoms(valeur, index){
	console.log(valeur);
}