paises=["Estados Unidos", "Costa Rica", "Francia", "Colombia", "México", "Sudáfrica", "Honduras", "Japón", "Portugal", "Nicaragua"];
monedas=["Dolar", "Colón", "Euro", "Peso Colombiano", "Peso Mexicano", "Rand Sudafricano", "Lempira", "Yen", "Euro Portugues", "Cordaba"];
isos=["USD", "CRC", "EUR", "COP", "MXN", "ZAR","HNL", "JPY", "EUR", "NIO"];
imagenes=["imagenes/estados_unidos.png", "imagenes/costa_rica.png", "imagenes/francia.png", "imagenes/colombia.png", "imagenes/mexico.png", "imagenes/sudafrica.png", "imagenes/honduras.png", "imagenes/japon.png", "imagenes/portugal.png", "imagenes/nicaragua.png"];
valores1=[1,556.86,0.89,3334.45,19.92,15.25,24.11,105.40,0.89,32.97]; 	//Dolar a moneda
valores2=[1,0.0018,1.12,0.00030,0.050,0.066,0.041,0.0095,1.12,0.030]; 	//Moneda a dolar
banderas=[0,0,0,0,0,0,0,0,0,0];
window.onload=function(){
	f0=document.getElementById("fila0");
	f1=document.getElementById("fila1");
	f2=document.getElementById("fila2");
	f3=document.getElementById("fila3");
	f4=document.getElementById("fila4");
	f5=document.getElementById("fila5");

	colocarImagenes();
	colocarPaises();
	colocarMoneda();
	colocarISO();
	colocarEstrellas();
	colocarCajas();
}

function colocarImagenes() {
	for (i=0;i<10;i++) {
		celda0=f0.getElementsByTagName("th")[i];
		celda0.innerHTML="<img src=\""+imagenes[i]+"\">"
 	}
}

function colocarPaises() {
	for (i=0;i<10;i++) {
		celda0=f1.getElementsByTagName("th")[i];
		celda0.innerHTML=paises[i]
	}
}

function colocarMoneda() {
	for (i=0;i<10;i++) {
		celda0=f2.getElementsByTagName("th")[i];
		celda0.innerHTML=monedas[i]
	}
}

function colocarISO() {
	for (i=0;i<10;i++) {
		celda0=f3.getElementsByTagName("th")[i];
		celda0.innerHTML=isos[i]
	}
}

function colocarEstrellas(){
	for (i=0;i<10;i++) {
		celda0=f4.getElementsByTagName("th")[i];
		celda0.innerHTML="<img src=\"imagenes/estrella_vacia.png\" style=\"height: 50px; width: 50px\" id=\"estrella"+i+"\" onclick=\"changeImage("+i+")\">"
 	}
	
}

function colocarCajas(){
	for (i=0;i<10;i++) {
		celda0=f5.getElementsByTagName("th")[i];
		celda0.innerHTML="<input type=\"number\" min=\"1\" id=\"caja"+i+"\">"
	}
}

function valor(){
	bandera=0;
	datos=[];
	contador=0;
	for (i=0;i<10;i++) {
		f5=document.getElementById("caja"+i);
		if (f5.value != ""){
			contador++;
		}
	}

	for (i=0;i<10;i++) {
		f6=document.getElementById("caja"+i);
		if (f6.value != "" && contador == 1){
			bandera=1;
			datos[0]=i;
			datos[1]=f6.value;
			return datos;
		}
	}
	if (!bandera) {
		alert("Escriba la cantidad en una unica casilla");
	}
}

function calcular(){
	datos=valor();
	var1=datos[1]*valores2[datos[0]];
	for (i=0;i<10;i++) {
		if (i!=datos[0] && banderas[i]!=0) {
			var2=var1*valores1[i];
			f6=document.getElementById("caja"+i).value= var2;
		}
	}
	
}

function limpiar(){
	for (i=0;i<10;i++) {
		document.getElementById("caja"+i).value="";
	}
}

function changeImage(i){
	if (banderas[i]==0) {
		document.getElementById("estrella"+i).src = "imagenes/estrella_llena.png";
		banderas[i]=1;
	}else {
		document.getElementById("estrella"+i).src = "imagenes/estrella_vacia.png";
		banderas[i]=0;
	}
}

