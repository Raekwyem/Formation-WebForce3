// fonction de raccourci (lesflemards.js)

function w(t){
	document.write(t);
}

function l(e){
	console.log(e);
}

// 1. Création de notre Tableau 3D en JS

var PremierTrimestre = [
	{
		"nom"		: "LIEGEARD",
		"prenom" 	: "Hugo",
		"moyenne" 	: 	{
							"francais" 	: 4,
							"math" 		: 8,
							"physique"	: 18
						}
	},
	{
		"nom"		: "MANAS",
		"prenom" 	: "Tanguy",
		"moyenne" 	: 	{
							"francais" 	: 6,
							"math" 		: 15,
							"physique"	: 9,
							"anglais"	: 15
						}
	},
	{
		"nom"		: "ARAUJO",
		"prenom" 	: "Thiago",
		"moyenne" 	: 	{
							"francais" 	: 10,
							"math" 		: 15,
							"physique"	: 16
						}
	},
];

// Je souhaite afficher la liste des étudiants
w("<ol>");
for(i = 0 ; i < PremierTrimestre.length ; i++){
	// On récupère l'objet "etudiant" de l'itération
	let Etudiant = PremierTrimestre[i];
	// Aperçu dans la console
	l(Etudiant);

	var NombreDeMatiere = 0, SommeDesNotes = 0;

	w("<li>");
		w(Etudiant.prenom + " " + PremierTrimestre[i].nom);
			// Afficher la moyenne de l'Etudiant aux différentes matières
			w("<ul>");
				for(let matiere in Etudiant.moyenne){
					
					NombreDeMatiere++;
					SommeDesNotes += Etudiant.moyenne[matiere];
					w("<li>" + matiere + " : " + Etudiant.moyenne[matiere] + "</li>");
				}; // fin boucle matiere
				let moyenneGenerale = Math.round(SommeDesNotes / NombreDeMatiere);
				w("<li>" + "<strong>Moyenne Générale:</strong> " + moyenneGenerale + "</li>");
			w("</ul>");
	w("</li>");
	w("<br>");
} // fin boucle Etudiant
w("</ol>");