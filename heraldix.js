codes = {
	"**": "**",
	"RF": "Royaume de France",
	"EF": "Empire français",
	"VF": "Villes françaises",
	"RE": "Royaume d'Espagne",
	"RU": "Royaume-Uni",
	"ER": "Saint-Empire romain germanique",
	"EV": "État du Vatican",
	"RP": "Royaume du Portugal",
	"GL": "Grand-Duché de Luxembourg",
	"RS": "Royaume de Suède",
	"RJ": "Royaume de Jérusalem",
}

catégories = {
	"**": "**",
	"Royaume de France": "RF",
	"Empire français": "EF",
	"Villes françaises": "VF",
	"Royaume d'Espagne": "RE",
	"Royaume-Uni": "RU",
	"Saint-Empire romain germanique": "ER",
	"État du Vatican": "EV",
	"Royaume du Portugal": "RP",
	"Grand-Duché de Luxembourg": "GL",
	"Royaume de Suède": "RS",
	"Royaume de Jérusalem": "RJ",
}

function obtenir(identifiant, type) {
	if (type == "I") {return document.getElementById(identifiant);}
	else if (type == "C") {return document.getElementsByClassName(identifiant);}
	else if (type == "S") {return document.querySelectorAll(identifiant);}
	else if (type == "N") {return document.getElementsByName(identifiant);}
}

window.addEventListener("load", caractères);
