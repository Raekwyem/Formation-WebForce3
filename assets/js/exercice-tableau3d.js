var PremierTrimestre = [
	
	{
		"eleve" 	: 	"Hugo LIEGEARD",
		"bulletin"	: 	{
						"matiere1" 	: "francais",
						"note1" 	: 10,
						"matiere2"	: "maths",
						"note2"		: 14,
						"matiere3"	: "physique",
						"note3"		: 8,
						},
		"moyenne"	: 	"Moyenne Générale"

	},

	{
		"eleve"		: "Karim IHADADENE",
		"bulletin"	: 	{
						"matiere1" 	: "francais",
						"note1" 	: 6,
						"matiere2"	: "maths",
						"note2"		: 12,
						"matiere3"	: "physique",
						"note3"		: 12,
						},
		"moyenne"	: 	"Moyenne Générale"
	},

	{
		"eleve" 	: "Rudy HERICOURT",
		"bulletin"	: 	{
						"matiere1" 	: "francais",
						"note1" 	: 11,
						"matiere2"	: "maths",
						"note2"		: 9,
						"matiere3"	: "physique",
						"note3"		: 8,
						},
		"moyenne"	: 	"Moyenne Générale"
	},

	{
		"eleve" 	: "Jean ROBERT",
		"bulletin"	: 	{
						"matiere1" 	: "francais",
						"note1" 	: 16,
						"matiere2"	: "maths",
						"note2"		: 10,
						"matiere3"	: "physique",
						"note3"		: 11,
						},
		"moyenne"	: 	"Moyenne Générale"
	},

	{
		"eleve" 	: "Jeanne MICHELLE",
		"bulletin"	: 	{
						"matiere1" 	: "francais",
						"matiere2"	: "maths",
						"matiere3"	: "physique",
						},
		"notes"		: 	{
						"note1"		: 18,
						"note2"		: 7,
						"note3"		: 5,
						"moyenne"	: "Moyenne Générale",
						}
	}
];

//PremierTrimestre[4].notes = parseFloat(PremierTrimestre[4].notes);
console.log(PremierTrimestre[4].notes);
console.log(typeof PremierTrimestre[4].notes);

var moyenneGenerale1 = ( PremierTrimestre[0].bulletin.note1 + PremierTrimestre[0].bulletin.note2 + PremierTrimestre[0].bulletin.note3)/3;
var moyenneGenerale2 = ( PremierTrimestre[1].bulletin.note1 + PremierTrimestre[1].bulletin.note2 + PremierTrimestre[1].bulletin.note3)/3;
var moyenneGenerale3 = ( PremierTrimestre[2].bulletin.note1 + PremierTrimestre[2].bulletin.note2 + PremierTrimestre[2].bulletin.note3)/3;
var moyenneGenerale4 = ( PremierTrimestre[3].bulletin.note1 + PremierTrimestre[3].bulletin.note2 + PremierTrimestre[3].bulletin.note3)/3;
var moyenneGenerale5 = ( PremierTrimestre[4].notes.note1 + PremierTrimestre[4].notes.note2 + PremierTrimestre[4].notes.note3) / PremierTrimestre[4].notes.length;

document.write(
"<ol>"
	+ "<li>" + PremierTrimestre[0].eleve + 
			"<ul>" 

				+ "<li>" + PremierTrimestre[0].bulletin.matiere1 + " : " + PremierTrimestre[0].bulletin.note1 + "</li>" 
				+ "<li>" + PremierTrimestre[0].bulletin.matiere2 + " : " + PremierTrimestre[0].bulletin.note2 + "</li>" 
				+ "<li>" + PremierTrimestre[0].bulletin.matiere3 + " : " + PremierTrimestre[0].bulletin.note3 + "</li>" 
				+ "<li>" + "<b>" + PremierTrimestre[0].moyenne + "</b>" + " : " + moyenneGenerale1 + "</li>" 
				+
			"</ul>"
	+ "</li>"
	+ "<br>"
	+ "<li>" + PremierTrimestre[1].eleve + 
			"<ul>" 

				+ "<li>" + PremierTrimestre[1].bulletin.matiere1 + " : " + PremierTrimestre[1].bulletin.note1 + "</li>" 
				+ "<li>" + PremierTrimestre[1].bulletin.matiere2 + " : " + PremierTrimestre[1].bulletin.note2 + "</li>" 
				+ "<li>" + PremierTrimestre[1].bulletin.matiere3 + " : " + PremierTrimestre[1].bulletin.note3 + "</li>" 
				+ "<li>" + "<b>" + PremierTrimestre[1].moyenne + "</b>" + " : " + moyenneGenerale2 + "</li>" 
				+
			"</ul>"
	+ "</li>"
	+ "<br>"
	+ "<li>" + PremierTrimestre[2].eleve + 
			"<ul>" 

				+ "<li>" + PremierTrimestre[2].bulletin.matiere1 + " : " + PremierTrimestre[2].bulletin.note1 + "</li>" 
				+ "<li>" + PremierTrimestre[2].bulletin.matiere2 + " : " + PremierTrimestre[2].bulletin.note2 + "</li>" 
				+ "<li>" + PremierTrimestre[2].bulletin.matiere3 + " : " + PremierTrimestre[2].bulletin.note3 + "</li>" 
				+ "<li>" + "<b>" + PremierTrimestre[2].moyenne + "</b>" + " : " + moyenneGenerale3 + "</li>" 
				+
			"</ul>"
	+ "</li>"
	+ "<br>"
	+ "<li>" + PremierTrimestre[3].eleve + 
			"<ul>" 

				+ "<li>" + PremierTrimestre[3].bulletin.matiere1 + " : " + PremierTrimestre[3].bulletin.note1 + "</li>" 
				+ "<li>" + PremierTrimestre[3].bulletin.matiere2 + " : " + PremierTrimestre[3].bulletin.note2 + "</li>" 
				+ "<li>" + PremierTrimestre[3].bulletin.matiere3 + " : " + PremierTrimestre[3].bulletin.note3 + "</li>" 
				+ "<li>" + "<b>" + PremierTrimestre[3].moyenne + "</b>" + " : " + moyenneGenerale4 + "</li>" 
				+
			"</ul>"
	+ "</li>"
	+ "<br>"
	+ "<li>" + PremierTrimestre[4].eleve + 
			"<ul>" 

				+ "<li>" + PremierTrimestre[4].bulletin.matiere1 + " : " + PremierTrimestre[4].notes.note1 + "</li>" 
				+ "<li>" + PremierTrimestre[4].bulletin.matiere2 + " : " + PremierTrimestre[4].notes.note2 + "</li>" 
				+ "<li>" + PremierTrimestre[4].bulletin.matiere3 + " : " + PremierTrimestre[4].notes.note3 + "</li>" 
				+ "<li>" + "<b>" + PremierTrimestre[4].notes.moyenne + "</b>" + " : " + moyenneGenerale5 + "</li>" 
				+
			"</ul>"
	+ "</li>"
	+
"</ol>");
document.write(" ");
