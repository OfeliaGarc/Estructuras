//Escribe aquí tu código
var precio = prompt("cuanto cuesta el traje?");
var quindes = .15;
var ochodes = .08;

var promog = (parseFloat(precio) * parseFloat(quindes))
var promomn = (parseFloat(precio) * parseFloat(ochodes))


if (precio >= 2500){
	alert("con el 15% de descuento" + (precio - promog))
}else {
	alert("con el 8% de descuento" + (precio - promomn))
}

