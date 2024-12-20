// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

tableaux = {
	"Profils": ["table-profils", profils, [6, 4]],
	"Couronnes": ["table-couronnes", couronnes, 4],
	"Heaumes": ["table-heaumes", heaumes, 2],
	"Particuliers": ["table-particuliers", particuliers, 10],
	"Écus": ["table-écus", écus, 10],
	"Portants": ["table-portants", portants, 3],
	"Manteaux": ["table-manteaux", manteaux, 4],
	"Colliers": ["table-colliers", colliers, 2],
	"Bâtons": ["table-bâtons", bâtons, 2],
	"Devises": ["table-devises", /*devises,*/ 1],
	"Cris": ["table-cris", /*cri,*/ 1],
};

function afficher(titre) {
	complets = {
		"rofils": "Profils",
		"ouronnes": "Couronnes",
		"eaumes": "Heaumes",
		"articuliers": "Particuliers",
		"cus": "Écus",
		"ortants": "Portants",
		"anteaux": "Manteaux",
		"olliers": "Colliers",
		"âtons": "Bâtons",
	};
	titre = complets[titre.innerText];
	if (obtenir(tableaux[titre][0], "I").style.display == "table") {
		obtenir(tableaux[titre][0], "I").style.display = "none";
	} else {
		obtenir(tableaux[titre][0], "I").style.display = "table";
	}
}

function initialiser() {
	remplirProfils();
	remplir();
	remplirParticuliers();
}

function remplir() {
	k = 0;
	for (tableau of Object.keys(tableaux)) {
		if (tableau == "Profils" || tableau == "Particuliers") {
			// 
		} else {
			for (catégorie of Object.keys(tableaux[tableau][1])) {
				obtenir(tableaux[tableau][0], "I").insertRow().insertCell(0).outerHTML =
					"<th colspan = " + (tableaux[tableau][2] + 1) + ">" + catégorie + "</th>"
				;
				for (profil of Object.keys(tableaux[tableau][1][catégorie])) {
					ligne = "";
					for (i = 0; i < tableaux[tableau][1][catégorie][profil].length; i++) {
						ligne +=
							"<td>" +
								"<a href = \"" + tableaux[tableau][1][catégorie][profil][i] + "\">" +
									"<img src = \"" +
									tableaux[tableau][1][catégorie][profil][i] +
									"\" class = img-icône>" +
								"</a>" +
							"</td>"
						;
					}
					for (j = tableaux[tableau][1][catégorie][profil].length; j < tableaux[tableau][2]; j++) {
						ligne += "<td class = td-vide></td>";
					}
					obtenir(tableaux[tableau][0], "I").insertRow().insertCell(0).outerHTML =
						"<td>" + profil + "</td>" + ligne
					;
				}
			}
			k++;
		}
	}
}

function remplirParticuliers() {
	tableau = "Particuliers";
	listeOrdre = [
		"Écu",
		"Couronne",
		"Heaume",
		"Portant à dextre",
		"Portant à senestre",
		"Collier",
		"Manteau",
		"Couronne du manteau",
		"Devise",
		"Cri",
	];
	obtenir("table-particuliers", "I").insertRow().insertCell(0).outerHTML =
		"<td></td>" +
		"<th>Écu</th>" +
		"<th>Couronne</th>" +
		"<th>Heaume</th>" +
		"<th>Portant à dextre</th>" +
		"<th>Portant à senestre</th>" +
		"<th>Collier</th>" +
		"<th>Manteau</th>" +
		"<th>Couronne du manteau</th>" +
		"<th>Devise</th>" +
		"<th>Cri</th>"
	;
	for (catégorie of Object.keys(tableaux[tableau][1])) {
		obtenir(tableaux[tableau][0], "I").insertRow().insertCell(0).outerHTML =
			"<th colspan = " + (tableaux[tableau][2] + 1) + ">" + catégorie + "</th>"
		;
		for (particulier of Object.keys(tableaux[tableau][1][catégorie])) {
			ligne = "<td>" + particulier + "</td>";
			for (liste of Object.keys(particuliers[catégorie][particulier])) {
				ligne += "<td>" + particuliers[catégorie][particulier][liste] + "</td>";
			}
			obtenir(tableaux[tableau][0], "I").insertRow().insertCell(0).outerHTML = ligne;
		}
	}
}

function remplirProfils() {
	tableau = "Profils";
	obtenir("table-profils", "I").insertRow().insertCell(0).outerHTML =
		"<td></td>" +
		"<th colspan = " + tableaux[tableau][2][0] + ">Couronnes</th>" +
		"<th colspan = " + tableaux[tableau][2][1] + ">Heaumes</th>"
	;
	for (catégorie of Object.keys(profils)) {
		obtenir("table-profils", "I").insertRow().insertCell(0).outerHTML =
			"<th colspan = " + (tableaux[tableau][2][0] + tableaux[tableau][2][1] + 1) + ">" + catégorie + "</th>"
		;
		for (profil of Object.keys(profils[catégorie])) {
			cellules = "";
			if (Object.keys(couronnes).includes(catégorie)) {
				if (Object.keys(couronnes[catégorie]).includes(profil)) {
					for (i = 0; i < couronnes[catégorie][profil].length; i++) {
						cellules +=
							"<td>" +
								"<a href = \"" + couronnes[catégorie][profil][i] + "\">" +
									"<img src = \"" + couronnes[catégorie][profil][i] + "\" class = img-icône>" +
								"</a>" +
							"</td>"
						;
					}
					for (j = couronnes[catégorie][profil].length; j < tableaux[tableau][2][0]; j++) {
						cellules += "<td class = td-vide></td>";
					}
					delete couronnes[catégorie][profil];
				} else {
					cellules += "<td colspan = " + tableaux[tableau][2][0] + " class = td-vide></td>";
				}
			} else {
				cellules += "<td colspan = " + tableaux[tableau][2][0] + " class = td-vide></td>";
			}
			if (Object.keys(heaumes).includes(catégorie)) {
				if (Object.keys(heaumes[catégorie]).includes(profil)) {
					for (i = 0; i < heaumes[catégorie][profil].length; i++) {
						cellules +=
							"<td>" +
								"<a href = " + heaumes[catégorie][profil][i] + ">" +
									"<img src = \"" + heaumes[catégorie][profil][i] + "\" class = img-icône>" +
								"</a>" +
							"</td>"
						;
					}
					for (j = heaumes[catégorie][profil].length; j < tableaux[tableau][2][1]; j++) {
						cellules += "<td class = td-vide></td>";
					}
					delete heaumes[catégorie][profil];
				} else {
					cellules += "<td colspan = " + tableaux[tableau][2][0] + " class = td-vide></td>";
				}
			} else {
				cellules += "<td colspan = " + tableaux[tableau][2][1] + " class = td-vide></td>";
			}
			obtenir("table-profils", "I").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + cellules
			;
		}
	}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //