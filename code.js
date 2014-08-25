function aleatorio(minimo,maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra,papel,tijera,spock,lagarto,usuario,maquina,boton,boton1,botton2,boton3,boton4;
var cadenas = new Array("Piedra","Papel","Tijeras","Spock","Lagarto");
function piedra(){
	usuario = 0;
	piedra = 0;
	papel = 1;
	tijera = 2;
	spock = 3;
	lagarto = 4;
	maquina = aleatorio(0,4);
	var imagen = document.getElementById("mostradaMaquina");
	var zero = document.getElementById("gerson");
	var info = document.getElementById("epg");
	if (usuario == piedra){
			document.getElementById("mostrada").src="img/piedra.png";
			document.getElementById("contenido").innerHTML=cadenas[usuario];
			document.getElementById("mostradaMaquina").src=imagen;
			document.getElementById("contenidoMaquina").innerHTML=cadenas[maquina];
		if(maquina == piedra){
			info.innerHTML="Empate";
			imagen.src="img/piedra.png";
			zero.src="img/empate.gif";
		}else if (maquina == papel){
			info.innerHTML="Perdiste :( ";
			zero.src="img/perdiste.gif";
			imagen.src="img/papel.png";
		}else if(maquina == tijera){
			info.innerHTML="GANASTES ;)";
			imagen.src="img/tijera.png";
			zero.src="img/ganaste.gif";
		}else if(maquina == spock){
			info.innerHTML="Perdiste :( ";
			imagen.src="img/spock.png";
			zero.src="img/perdiste.gif";
		}else if(maquina == lagarto) {
			info.innerHTML="GANASTES ;) ";
			imagen.src="img/lagarto.png";
			zero.src="img/ganaste.gif";
			
		}
	}
}

function papel(){
	u = 1;
	p = 0;
	pa = 1;
	t = 2;
	s = 3;
	l = 4;
	m = aleatorio(0,4);
	var imagen = document.getElementById("mostradaMaquina");
	var zero = document.getElementById("gerson");
	var info = document.getElementById("epg");
	if (u == pa){
			document.getElementById("mostrada").src="img/papel.png";
			document.getElementById("contenido").innerHTML=cadenas[u];
			document.getElementById("mostradaMaquina").src=imagen;
			document.getElementById("contenidoMaquina").innerHTML=cadenas[m];
		if(m == p){
			info.innerHTML="GANASTES ;) ";
			imagen.src="img/piedra.png";
			zero.src="img/ganaste.gif";
		}else if (m == pa){
			info.innerHTML="Empate";
			imagen.src="img/papel.png";
			zero.src="img/empate.gif";
		}else if(m == t){
			info.innerHTML="Perdiste :( ";
			imagen.src="img/tijera.png";
			zero.src="img/perdiste.gif";
		}else if(m == s){
			info.innerHTML="GANASTES ;)";
			imagen.src="img/spock.png";
			zero.src="img/ganaste.gif";
		}else if(m == l) {
			info.innerHTML="Perdiste :(";
			imagen.src="img/lagarto.png";
			zero.src="img/perdiste.gif";
		}
	}
}

function tijera(){
	us = 2;
	pi = 0;
	pap = 1;
	ti = 2;
	sp = 3;
	la = 4;
	ma = aleatorio(0,4);
	var imagen = document.getElementById("mostradaMaquina");
	var zero = document.getElementById("gerson");
	var info = document.getElementById("epg");
	if (us == ti){
			document.getElementById("mostrada").src="img/tijera.png";
			document.getElementById("contenido").innerHTML=cadenas[us];
			document.getElementById("mostradaMaquina").src=imagen;
			document.getElementById("contenidoMaquina").innerHTML=cadenas[ma];
		if(ma == pi){
			info.innerHTML="Perdiste :( ";
			imagen.src="img/piedra.png";
			zero.src="img/perdiste.gif";;
		}else if (ma == pap){
			info.innerHTML="GANASTES ;)";
			imagen.src="img/papel.png";
			zero.src="img/ganaste.gif";
		}else if(ma == ti){
			info.innerHTML="Empate";
			imagen.src="img/tijera.png";
			zero.src="img/empate.gif";
		}else if(ma == sp){
			info.innerHTML="Perdiste :( ";
			imagen.src="img/spock.png";
			zero.src="img/perdiste.gif";
		}else if(ma == la) {
			info.innerHTML="GANASTES ;) ";
			imagen.src="img/lagarto.png";
			zero.src="img/ganaste.gif";
		}
	}
}

function spock(){
	usu = 3;
	pie = 0;
	pape = 1;
	tij = 2;
	spo = 3;
	lag = 4;
	maq = aleatorio(0,4);
	var imagen = document.getElementById("mostradaMaquina");
	var zero = document.getElementById("gerson");
	var info = document.getElementById("epg");
	if (usu == spo){
			document.getElementById("mostrada").src="img/spock.png";
			document.getElementById("contenido").innerHTML=cadenas[usu];
			document.getElementById("mostradaMaquina").src=imagen;
			document.getElementById("contenidoMaquina").innerHTML=cadenas[maq];
		if(maq == pie){
			info.innerHTML="GANASTES ;) ";
			imagen.src="img/piedra.png";
			zero.src="img/ganaste.gif";
		}else if (maq == pape){
			info.innerHTML="Perdiste :( ";
			imagen.src="img/papel.png";
			zero.src="img/perdiste.gif";
		}else if(maq == tij){
			info.innerHTML="GANASTES ;)";
			imagen.src="img/tijera.png";
			zero.src="img/ganaste.gif";
		}else if(maq == spo){
			info.innerHTML="Empate";
			imagen.src="img/spock.png";
			zero.src="img/empate.gif";
		}else if(maq == lag) {
			info.innerHTML="Perdiste :( ";
			imagen.src="img/lagarto.png";
			zero.src="img/perdiste.gif";
		}
	}
}

function lagarto(){
	usua = 4;
	pied = 0;
	papell = 1;
	tije = 2;
	spoc = 3;
	laga = 4;
	maqu = aleatorio(0,4);
	var imagen = document.getElementById("mostradaMaquina");
	var zero = document.getElementById("gerson");
	var info = document.getElementById("epg");
	if (usua == laga){
			document.getElementById("mostrada").src="img/lagarto.png";
			document.getElementById("contenido").innerHTML=cadenas[usua];
			document.getElementById("mostradaMaquina").src=imagen;
			document.getElementById("contenidoMaquina").innerHTML=cadenas[maqu];
		if(maqu == pied){
			info.innerHTML="Perdiste :( ";
			imagen.src="img/piedra.png";
			zero.src="img/perdiste.gif";
		}else if (maqu == papell){
			info.innerHTML="GANASTES ;) ";
			imagen.src="img/papel.png";
			zero.src="img/ganaste.gif";
		}else if(maqu == tije){
			info.innerHTML="Perdiste :(";
			imagen.src="img/tijera.png";
			zero.src="img/perdiste.gif"
		}else if(maqu == spoc){
			info.innerHTML="GANASTES ;)";
			imagen.src="img/spock.png";
			zero.src="img/ganaste.gif";
		}else if(maqu == laga) {
			info.innerHTML="Empate";
			imagen.src="img/lagarto.png";
			zero.src="img/empate.gif";
		}
	}
}
function Combinado(){
	boton = document.getElementById("piedraa");
	boton.addEventListener("click", piedra);
	
	boton1 = document.getElementById("papell");
	boton1.addEventListener("click", papel);

	boton2 = document.getElementById("tijera");
	boton2.addEventListener("click", tijera);

	boton3 = document.getElementById("spock");
	boton3.addEventListener("click", spock);

	boton4 = document.getElementById("lagarto");
	boton4.addEventListener("click", lagarto);
}
