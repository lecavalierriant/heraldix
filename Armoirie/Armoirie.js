// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

URL = new URLSearchParams(window.location.search);

couronne = URL.get("couronne");
heaume = URL.get("heaume");
portantDextre = URL.get("portant-dextre");
écu = URL.get("écu");
portantSenestre = URL.get("portant-senestre");
collier = URL.get("collier");
manteau = URL.get("manteau");
couronneManteau = URL.get("couronne-manteau");
cri = URL.get("cri");
devise = URL.get("devise");

colonnes = 8;
lignes = 5;

images = {
	"Couronne": [couronnes, couronne, "img-couronne"],
	"Heaume": [heaumes, heaume, "img-heaume"],
	"Portant à dextre": [portants, portantDextre, "img-portant-dextre"],
	"Écu": [écus, écu, "img-écu"],
	"Portant à senestre": [portants, portantSenestre, "img-portant-senestre"],
	"Manteau": [manteaux, manteau, "img-manteau"],
	"Couronne du manteau": [couronnes, couronneManteau, "img-couronne-manteau"],
	"Collier": [colliers, collier, "img-collier"],
}

function afficher(nom) {
	if (nom == "couronne") {colonne = 0;} else
	if (nom == "heaume") {colonne = 1;} else
	if (nom == "portant-dextre") {colonne = 2;} else
	if (nom == "écu") {colonne = 3;} else
	if (nom == "portant-senestre") {colonne = 4;} else
	if (nom == "manteau") {colonne = 5;} else
	if (nom == "couronne-manteau") {colonne = 6;} else
	if (nom == "collier") {colonne = 7;}
	for (ligne = 0; ligne < lignes; ligne++) {
		obtenir("td", "S")[colonne + ligne * colonnes].style.display = "table-cell";
	}
}

function basculer(image) {
	if (image.startsWith("Portant")) {
		image = image.split(" ")[0] + " " + image.split(" ")[1] + " " + image.split(" ")[2];
	} else if (image.startsWith("Couronne du manteau")) {
		image = image.split(" ")[0] + " " + image.split(" ")[1] + " " + image.split(" ")[2];
	} else {
		image = image.split(" ")[0];
	}
	comptes[image] =
		(comptes[image] + 1) %
		images[image][0][codes[images[image][1].split(" ")[0]]][images[image][1].slice(3)].length
	;
	obtenir(images[image][2], "I").src =
		images[image][0][codes[images[image][1].split(" ")[0]]][images[image][1].slice(3)][comptes[image]]
	;
	obtenir("#table-paramètres tr td button", "S")[Object.keys(images).indexOf(image)].innerText =
		image +
		" (" +
		(comptes[image] + 1) +
		" / " +
		images[image][0][codes[images[image][1].split(" ")[0]]][images[image][1].slice(3)].length +
		")"
	;
}

function déplacer(image, sens) {
	if (sens == "↓" || sens == "↑") {
		if (obtenir(image, "I").style.marginTop) {
			obtenir(image, "I").style.marginTop =
				(parseInt(obtenir(image, "I").style.marginTop.split("px")[0]) + (sens == "↓" ? 10 : -10)) + "px"
			;
		} else {
			obtenir(image, "I").style.marginTop = "0px";
		}
		décalage = obtenir(image, "I").style.marginTop;
	} else {
		if (obtenir(image, "I").style.marginRight) {
			obtenir(image, "I").style.marginRight =
				(parseInt(obtenir(image, "I").style.marginRight.split("px")[0]) + (sens == "←" ? 10 : -10)) + "px"
			;
		} else {
			obtenir(image, "I").style.marginRight = "0px";
		}
		décalage = obtenir(image, "I").style.marginRight;
	}
	aaa = {
		"img-couronne": 0,
		"img-heaume": 1,
		"img-portant-dextre": 2,
		"img-écu": 3,
		"img-portant-senestre": 4,
		"img-manteau": 5,
		"img-couronne-manteau": 6,
		"img-collier": 7,
	}
	for (bbb of Object.keys(aaa)) {
		if (image == bbb) {
			if (sens == "↓" || sens == "↑") {
				obtenir("span-transformer", "C")[3 * colonnes + aaa[bbb]].innerText = décalage;
			} else {
				obtenir("span-transformer", "C")[2 * colonnes + aaa[bbb]].innerText = décalage;
			}
		}
	}
}

function générer() {
	éléments = Object.keys(images);
	comptes = {};
	for (élément of éléments) {comptes[élément] = 0;}
	if (couronne) {
		afficher("couronne");
		obtenir("img-couronne", "I").src =
			couronnes[codes[couronne.split(" ")[0]]][couronne.slice(3)][0]
		;
		if (!heaume) {
			obtenir("img-couronne", "I").width = 250;
			obtenir("img-couronne", "I").style.marginBottom = "-30px";
		}
	}
	if (heaume) {
		afficher("heaume");
		obtenir("img-heaume", "I").src =
			heaumes[codes[heaume.split(" ")[0]]][heaume.slice(3)][0]
		;
		obtenir("img-heaume", "I").height = 150;
		obtenir("img-heaume", "I").style.marginBottom = "-150px";
		if (couronne) {
			obtenir("img-couronne", "I").width = 80;
			obtenir("img-couronne", "I").style.marginBottom = "-50px";
		}
	}
	if (écu) {
		afficher("écu");
		obtenir("img-écu", "I").src = écus[codes[écu.split(" ")[0]]][écu.slice(3)][0];
		obtenir("img-écu", "I").width = 200;
		obtenir("img-écu", "I").style.marginTop = "0px";
		if (manteau || collier || heaume) {
			obtenir("img-écu", "I").style.marginTop = "100px";
		}
		icône = document.getElementById("favicon");
		if (icône) {
			icône.href = écus[codes[écu.split(" ")[0]]][écu.slice(3)][0];
		} else {
			icône = document.createElement("link");
			icône.id = "favicon";
			icône.rel = "icon";
			icône.href = écus[codes[écu.split(" ")[0]]][écu.slice(3)][0];
			document.head.appendChild(icône);
		}
	}
	if (portantDextre) {
		afficher("portant-dextre");
		obtenir("img-portant-dextre", "I").src =
			portants[codes[portantDextre.split(" ")[0]]][portantDextre.slice(3)][0]
		;
		obtenir("img-portant-dextre", "I").width = 300;
		obtenir("img-portant-dextre", "I").height = 350;
	}
	if (portantSenestre) {
		afficher("portant-senestre");
		obtenir("img-portant-senestre", "I").src =
			portants[codes[portantSenestre.split(" ")[0]]][portantSenestre.slice(3)][0]
		;
		obtenir("img-portant-senestre", "I").width = 300;
		obtenir("img-portant-senestre", "I").height = 350;
	}
	if (collier) {
		afficher("collier");
		obtenir("img-collier", "I").src = colliers[codes[collier.split(" ")[0]]][collier.slice(3)];
		obtenir("img-collier", "I").width = 300;
		obtenir("img-collier", "I").style.marginTop = "75px";
		obtenir("img-portant-dextre", "I").style.marginRight = "-140px";
		obtenir("img-portant-senestre", "I").style.marginLeft = "-140px";
	} else {
		if (portantDextre || portantSenestre) {
			obtenir("img-collier", "I").height = 0;
		} else {
			obtenir("img-collier", "I").height = 300;
		}
		obtenir("img-portant-dextre", "I").style.marginRight = "10px";
		obtenir("img-portant-senestre", "I").style.marginLeft = "10px";
	}
	if (manteau) {
		afficher("manteau");
		obtenir("img-manteau", "I").src = manteaux[codes[manteau.split(" ")[0]]][manteau.slice(3)][0];
		obtenir("img-manteau", "I").width = 700;
		obtenir("img-manteau", "I").style.marginTop = "170px";
		if (couronneManteau) {
			afficher("couronne-manteau");
			obtenir("img-couronne-manteau", "I").src =
				couronnes[codes[couronneManteau.split(" ")[0]]][couronneManteau.slice(3)][0]
			;
			obtenir("img-couronne-manteau", "I").width = 250;
			obtenir("img-couronne-manteau", "I").style.marginBottom = "-150px";
		}
	} else {
		obtenir("img-manteau", "I").width = 700;
		obtenir("div-couronne", "I").style.marginTop = "0";
	}
	if (cri) {obtenir("span-cri", "I").innerText = cri;}
	else {obtenir("div-cri", "I").style.display = "none";}
	if (devise) {obtenir("span-devise", "I").innerText = devise;}
	else {obtenir("div-devise", "I").style.display = "none";}
	titrer();
}

function initialiser() {
	remplir();
	générer();
}

function inverser(style) {
	if (style.transform == "scaleX(-1)") {style.transform = "";} else {style.transform = "scaleX(-1)";}
}

function paramètres() {
	if (obtenir("table-paramètres", "I").style.display == "block") {
		obtenir("table-paramètres", "I").style.display = "none";
		obtenir("button-paramètres", "I").innerText = "↓ Paramètres ↓";
	} else {
		obtenir("table-paramètres", "I").style.display = "block";
		obtenir("button-paramètres", "I").innerText = "↑ Masquer ↑";
	}
}

function redimensionner(image, sens) {
	if (sens == "←" || sens == "→") {
		obtenir(image, "I").width += (sens == "→" ? 10 : -10);
		taille = obtenir(image, "I").width;
		if (image == "img-couronne") {obtenir("span-transformer", "C")[0].innerHTML = taille;} else
		if (image == "img-heaume") {obtenir("span-transformer", "C")[1].innerHTML = taille;} else
		if (image == "img-portant-dextre") {obtenir("span-transformer", "C")[2].innerHTML = taille;} else
		if (image == "img-écu") {obtenir("span-transformer", "C")[3].innerHTML = taille;} else
		if (image == "img-portant-senestre") {obtenir("span-transformer", "C")[4].innerHTML = taille;} else
		if (image == "img-manteau") {obtenir("span-transformer", "C")[5].innerHTML = taille;} else
		if (image == "img-couronne-manteau") {obtenir("span-transformer", "C")[6].innerHTML = taille;} else
		if (image == "img-collier") {obtenir("span-transformer", "C")[7].innerHTML = taille;}
	} else {
		obtenir(image, "I").height += (sens == "↑" ? 10 : -10);
		taille = obtenir(image, "I").height;
		if (image == "img-couronne") {obtenir("span-transformer", "C")[colonnes + 0].innerHTML = taille;} else
		if (image == "img-heaume") {obtenir("span-transformer", "C")[colonnes + 1].innerHTML = taille;} else
		if (image == "img-portant-dextre") {obtenir("span-transformer", "C")[colonnes + 2].innerHTML = taille;} else
		if (image == "img-écu") {obtenir("span-transformer", "C")[colonnes + 3].innerHTML = taille;} else
		if (image == "img-portant-senestre") {obtenir("span-transformer", "C")[colonnes + 4].innerHTML = taille;} else
		if (image == "img-manteau") {obtenir("span-transformer", "C")[colonnes + 5].innerHTML = taille;} else
		if (image == "img-couronne-manteau") {obtenir("span-transformer", "C")[colonnes + 6].innerHTML = taille;} else
		if (image == "img-collier") {obtenir("span-transformer", "C")[colonnes + 7].innerHTML = taille;}
	}
}

function remplir() {
	tableParamètres = obtenir("table-paramètres", "I");
	span = "<span class = span-transformer>∅</span></td>";
	fonctions = ["\"redimensionner('", "\"déplacer('"];
	aaa = ["←", "→", "↓", "↑"];
	ligne = "";
	for (i = 0; i < colonnes; i++) {
		ligne += "<td>" + "<button onclick = " + "basculer(this.innerText)" + ">" + Object.keys(images)[i] + "</button>";
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
	ligne = "";
	for (i = 0; i < colonnes; i++) {
		ligne +=
			"<td>" + "<button onclick = " + fonctions[0] + images[Object.keys(images)[i]][2] + "', '" + aaa[0] + "')\">" + "-" + "</button>"
		;
		ligne += "↔";
		ligne += "<button onclick = " + fonctions[0] + images[Object.keys(images)[i]][2] + "', '" + aaa[1] + "')\">" + "+" + "</button>";
		ligne += span;
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
	ligne = "";
	for (i = 0; i < colonnes; i++) {
		ligne +=
			"<td>" + "<button onclick = " + fonctions[0] + images[Object.keys(images)[i]][2] + "', '" + aaa[2] + "')\">" + "-" + "</button>"
		;
		ligne += "↕";
		ligne += "<button onclick = " + fonctions[0] + images[Object.keys(images)[i]][2] + "', '" + aaa[3] + "')\">" + "+" + "</button>";
		ligne += span;
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
	ligne = "";
	for (i = 0; i < colonnes; i++) {
		ligne += "<td>" + "<button onclick = " + fonctions[1] + images[Object.keys(images)[i]][2] + "', '" + aaa[0] + "')\">" + "←" + "</button>";
		ligne += "<button onclick = " + fonctions[1] + images[Object.keys(images)[i]][2] + "', '" + aaa[1] + "')\">" + "→" + "</button>";
		ligne += span;
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
	ligne = "";
	for (i = 0; i < colonnes; i++) {
		ligne += "<td>" + "<button onclick = " + fonctions[1] + images[Object.keys(images)[i]][2] + "', '" + aaa[2] + "')\">" + "↓" + "</button>";
		ligne += "<button onclick = " + fonctions[1] + images[Object.keys(images)[i]][2] + "', '" + aaa[3] + "')\">" + "↑" + "</button>";
		ligne += span;
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
}

function sauvegarder() {
	window.print();
}

function titrer() {
	/*
	[ ] Le titre peut être X, (titre) de Y ---> BRANCHES
		de Maupeou(, comte) d'Ableiges
		Le Gonidec(, seigneur) de Traissan
	*/
	intérieur = "";
	if (couronne) {
		if (couronneManteau) {
			if (couronne == couronneManteau) {
				intérieur += concordance(couronne.slice(3), false);
			} else {
				intérieur += concordance(couronne.slice(3), false) + " & " + concordance(couronneManteau.slice(3), true);
			}
		} else {
			intérieur += concordance(couronne.slice(3), false);
		}
	}
	if (écu) {intérieur += concordance(écu.slice(3), false);}
	document.title = "Armoirie" + intérieur + " — Héraldix";
	obtenir("h1", "S")[0].innerHTML = "<hr>" + "ARMOIRIE" + intérieur + "<hr>";
	lettres();
}

function concordance(mot, article) {
	if (voyelles.includes(mot[0])) {
		return article ? mot : " d'" + mot; // H muets...
	} else {
		if (mot.split(" ")[0] == "Le") {
			return article ? mot.slice(3) : " du " + mot.slice(3);
		} else if (mot.split(" ")[0] == "Les") {
			return article ? mot.slice(4) : " des " + mot.slice(4);
		} else {
			return article ? mot : " de " + mot;
		}
	}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //