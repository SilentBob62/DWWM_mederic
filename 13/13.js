/**lire cookies */
readCookie("nom");
readCookie("prenom");

/**getElements */
inputNom=document.getElementById("nom");
inputPrenom=document.getElementById("prenom");
bouton=document.getElementsByTagName("button")[0];
phrase=document.getElementById("phrase");

/**evenements */
bouton.addEventListener("click",function(){
    createCookie("nom",inputNom.value,5);
    createCookie("prenom",inputPrenom.value,5);
    location.reload();    
});

    phrase.innerHTML="bienvenu "+inputNom.value+" "+inputPrenom.value;

/**fonctions */
function createCookie(name,value,days) {
    // permet de créer un cookie
	if (days) {
        // si le nombre de jour est renseigné, on le transforme en millieme de seconde
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "expires="+date.toGMTString();
	}
    else var expires = "";
    //le cookie doit contenir  clé=valeur;expires=temps;path=nomDomaine
	document.cookie = name+"="+value+"; " + expires+"; path=/";
}

function readCookie(name) {
    // on récupère tous les cookies du site en une fois, séparé par ; 
    // on range dans un tableau chaque cookie
    var listeCookies = document.cookie.split('; ');
	for(let i=0;i < listeCookies.length;i++) {
        // pour chaque cookie, on sépare en tableau la clé et la valeur
        var unCookie = listeCookies[i].split("=");
        // si la clé correspond au cookie cherché, on renvoi la valeur
		if (unCookie[0]==name) return unCookie[1];
	}
	return null;
}

function eraseCookie(name) {
    // pour supprimer un cookie, on le périme
	createCookie(name,"",-1);
}
