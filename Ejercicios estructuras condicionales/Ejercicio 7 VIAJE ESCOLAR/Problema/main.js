//Escribe aquí tu código
var alumnos = prompt("¿cuántos alúmnos son?");
var cien = 100;
var cin = 50;
var tre = 30;

var secin = 65;
var set = 70;
var novc = 95;


if (alumnos >= cien) {
	costo = alumnos * secin
	alert(alumnos + "El precio total es:" + costo)
}else if ((alumnos < cien) && (alumnos >= cin)) {
	costo = alumnos * set
	alert(alumnos + "El precio total es:" + costo)
}else if ((alumnos < cin) && (alumnos >= tre)) {
	costo = alumnos * novc
	alert(alumnos + "El precio total es:" + costo)
}else {
	alert("El precio por el servicio del autobús es: $4000")
}