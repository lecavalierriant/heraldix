// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function accorderParticulier() {
	obtenir("select-particulier", "I").addEventListener(
		"change",
		function() {
			particulier = this.value;
			valeurs = particuliers[codes[particulier.split(" ")[0]]][particulier.slice(3)];
			indice = 0;
			for (nom of Object.keys(valeurs)) {
				if (Object.keys(valeurs)[indice] == "devise" || Object.keys(valeurs)[indice] == "cri") {
					obtenir(nom, "N")[0].value = valeurs[nom][1];
				} else {
					obtenir(nom, "N")[0].value = valeurs[nom][0] + " " + valeurs[nom][1];
				}
				indice++;
			}
		}
	);
}

function accorderProfil() {
	obtenir("select-profil", "I").addEventListener(
		"change",
		function() {
			profil = this.value;
			valeurs = profils[codes[profil.split(" ")[0]]][profil.slice(3)];
			indice = 0;
			for (nom of Object.keys(valeurs)) {
				if (Object.keys(valeurs)[indice] == "devise" || Object.keys(valeurs)[indice] == "cri") {
					obtenir(nom, "N")[0].value = valeurs[nom][1];
				} else {
					obtenir(nom, "N")[0].value = valeurs[nom][0] + " " + valeurs[nom][1];
				}
				indice++;
			}
		}
	);
}

function accorderManteau() {
	valeur = "";
	obtenir("select-manteau", "I").addEventListener(
		"change",
		function() {
			if (this.value == "") {
				obtenir("div-couronne-manteau", "I").style.display = "none";
				valeur = obtenir("couronne-manteau", "N")[0].value;
				obtenir("couronne-manteau", "N")[0].value = "";
			} else {
				obtenir("div-couronne-manteau", "I").style.display = "block";
				obtenir("couronne-manteau", "N")[0].value = valeur;

			}
		}
	);
}

function filtrer() {
	obtenir("select-catégorie", "I").addEventListener(
		"change",
		function() {
			obtenir("optgroup", "S").forEach(
				function(groupe) {
					if (groupe.label == "**") {
						obtenir("img-catégorie", "I").src = drapeaux["**"][0];
						return;
					} else if (obtenir("select-catégorie", "I").value == "") {
						groupe.style.display = "block";
						obtenir("img-catégorie", "I").src = drapeaux["**"][0];
						return;
					}
					if (obtenir("select-catégorie", "I").value == groupe.label) {
						groupe.style.display = "block";
						obtenir("img-catégorie", "I").src = drapeaux[groupe.label][0];
					} else {
						groupe.style.display = "none";
					}
				}
			);
		}
	);
}

function initialiser() {
	remplir();
	filtrer();
	accorderProfil();
	accorderParticulier();
	accorderManteau();
}

function remplir() {
	listes = [
		catégories, profils, particuliers, écus, couronnes, heaumes, portants, portants, colliers, manteaux, couronnes
	];
	noms = [
		"select-catégorie",
		"select-profil",
		"select-particulier",
		"écu",
		"couronne",
		"heaume",
		"portant-dextre",
		"portant-senestre",
		"collier",
		"manteau",
		"couronne-manteau",
	];
	obtenir("img-catégorie", "I").src = drapeaux["**"][0];
	indice = 0;
	for (liste of listes) {
		if (liste == catégories || liste == profils || liste == particuliers) {
			selectProfil = obtenir(noms[indice], "I");
		} else {selectProfil = obtenir(noms[indice], "N")[0];}
		option = document.createElement("option");
		if (liste == catégories) {option.textContent = "Tous";}
		else {option.textContent = "∅";}
		option.value = "";
		selectProfil.appendChild(option);
		for (codeCatégorie of Object.keys(liste)) {
			if (liste == catégories) {
				for (champ of Object.keys(catégories)) {
					option = document.createElement("option");
					option.textContent = champ;
					option.value = champ;
					selectProfil.appendChild(option);
				}
				break;
			} else {
				optgroup = document.createElement("optgroup");
				optgroup.label = codeCatégorie;
				for (champ of Object.keys(liste[codeCatégorie])) {
					option = document.createElement("option");
					option.textContent = champ;
					option.value = catégories[codeCatégorie] + " " + champ;
					optgroup.appendChild(option);
				}
				selectProfil.appendChild(optgroup);
			}
		}
		indice++;
	}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //