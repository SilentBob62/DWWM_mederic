maCouleur=readCookie("couleur");
changeCouleurFond(maCouleur);

boutonRouge=document.getElementsByTagName("button")[0];
boutonVert=document.getElementsByTagName("button")[1];
boutonBleu=document.getElementsByTagName("button")[2];
inputRouge=document.getElementsByTagName("input")[0];
inputVert=document.getElementsByTagName("input")[1];
inputBleu=document.getElementsByTagName("input")[2];


boutonRouge.addEventListener("click",function(){changeCouleurFond("rouge")});
boutonVert.addEventListener("click", function(){changeCouleurFond("vert")});
boutonBleu.addEventListener("click", function(){changeCouleurFond("bleu")});



function changeCouleurFond(maCouleur){
   
    if (maCouleur=="rouge"){
        nouvClass = "rouge";
        createCookie("couleur","rouge",5);
    }
    else if(maCouleur=="vert"){
        nouvClass = "vert";
        createCookie("couleur","vert",5);
    }
    else{
    nouvClass = "bleu";
    createCookie("couleur","bleu",5);
    }
    monBody=document.getElementsByTagName("body")[0];
    monBody.setAttribute("class",nouvClass);    
}


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
