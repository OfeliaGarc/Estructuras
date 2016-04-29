//Escribe aquí tu código
var cantidad = prompt("cuantas personas son?");
var pp = 95;
var sp = 85;
var tp = 75;
var dosc = 200;
var tresc = 300;

	if (cantidad < dosc){
		cant = cantidad * pp
		alert("este es el total a pagar:" + cant)
	}else if (cantidad <= tresc){
		cant = cantidad * sp
		alert("este es el total a pagar" + cant)
	}else if (cantidad > tresc){
		cant = cantidad * tp 
		alert("este es el total a pagar" + cant)
	}