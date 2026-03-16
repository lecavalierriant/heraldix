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

function caractères() {
	hauts = [
		"À", "Á", "Â", "Ä",
		"Č",
		"Ď",
		"È", "É", "Ê", "Ë", "Ě",
		"Ì", "Í", "Î", "Ï",
		"Ñ",
		"Ò", "Ó", "Ô", "Ö",
		"Ř",
		"Š",
		"Ù", "Ú", "Û", "Ü",
		"Ỳ", "Ý", "Ŷ", "Ÿ",
		"Ž",
		"'", "˘", "´", "˙", "`", "ˇ", "^", "¯", "¨",
	];
	bas = ["Ç", "Q", ",", ";"];
	spéciaux = {
		"'": "apos",
		"˘": "breve",
		"·": "centerdot",
		":": "colon",
		",": "comma",
		"´": "DiacriticalAcute",
		"˙": "DiacriticalDot",
		"`": "DiacriticalGrave",
		"ˇ": "Hacek",
		"^": "Hat",
		".": "period",
		";": "semi",
		"/": "sol",
		"¯": "strns",
		"¨": "uml",
	}
	articles = {
		"Le": "du",
		"Les": "des",
	};
	basDroite = [
		"F",
		"P",
		"T",
		"V",
		"W",
		"Y",
		"7",
	];
	basGauche = [
		"T",
		"V",
		"W",
		"Y",
		"4",
	];
	hautDroite = [
		"A", "À", "Á", "Â", "Ä", "Æ",
		"L",
		"M",
	];
	hautGauche = [
		"A", "À", "Á", "Â", "Ä", "Æ",
		"J",
		"M",
	];
	for (titre of obtenir("h1, h2", "S")) {
		texte = titre.innerText.toUpperCase();
		titre.innerHTML = "<hr>";
		compte = 0;
		libreBasDroite = false;
		libreHautDroite = false;
		for (caractère of texte) {
			compte++;
			if (caractère == " ") {
				if (compte > 14) {
					titre.innerHTML += "<br>";
					compte = 0;
				} else {titre.innerHTML += " ";}
				continue;
			}
			estSpecial = spéciaux[caractère];
			classes = ["caractère"];
			if (hauts.includes(caractère)) classes.push("haut");
			else if (bas.includes(caractère)) classes.push("bas");
			if ((libreBasDroite && hautGauche.includes(caractère)) || (libreHautDroite && basGauche.includes(caractère))) {classes.push("décalage-gauche");}
			libreHautDroite = hautDroite.includes(caractère);
			libreBasDroite = basDroite.includes(caractère);
			titre.innerHTML += `<img src = caracteres/${estSpecial ? `speciaux/${estSpecial}` : `/${caractère}`}.png alt = ${estSpecial ? `&${estSpecial};` : caractère} class = "${classes.join(' ')}">`;
		}
		titre.innerHTML += "<hr>";
	}
}

window.addEventListener("load", caractères);
