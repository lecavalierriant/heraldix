// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

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

voyelles = [
	"A", "À", "Á", "Â", "Ä",
	"Æ",
	"E", "È", "É", "Ê", "Ë",
	"I", "Ì", "Í", "Î", "Ï",
	"O", "Ò", "Ó", "Ô", "Ö",
	"Œ",
	"U", "Ù", "Ú", "Û", "Ü",
	"Y", "Ỳ", "Ý", "Ŷ", "Ÿ",
];

articles = {
	"Le": "du",
	"Les": "des",
};

function obtenir(identifiant, type) {
	if (type == "I") {
		return document.getElementById(identifiant);
	} else if (type == "C") {
		return document.getElementsByClassName(identifiant);
	} else if (type == "N") {
		return document.getElementsByName(identifiant);
	} else if (type == "S") {
		return document.querySelectorAll(identifiant);
	} else if (type == "N") {
		return document.getElementsByName(identifiant);
	}
}

function caractères() {
	for (titre of obtenir("h1", "S")) {
		texte = titre.innerText;
		titre.innerHTML = "<hr>";
		compte = 0;
		for (caractère of texte.toUpperCase()) {
			compte++;
			if (caractère == " ") {
				if (compte > 14) {
					titre.innerHTML += "<br>";
					compte = 0;
				} else {
					titre.innerHTML += " ";
				}
			} else if (caractère == "'") {
				titre.innerHTML +=
					"<img src = caracteres/apos.png alt = '\'' class = img-caractère-h1>"
				;
			} else {
				titre.innerHTML +=
					"<img src = caracteres/" + caractère + ".png alt = " + caractère + " class = img-caractère-h1>"
				;
			}
		}
		titre.innerHTML += "<hr>";
	}
}

window.addEventListener("load", caractères);

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //
