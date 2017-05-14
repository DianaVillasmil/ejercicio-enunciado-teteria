function Suscripcion(nombre, apellido, email, direccion, telefono, pack, newsletter) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.direccion = direccion;
	this.telefono = telefono;
	this.pack = pack;
	this.newsletter = newsletter;
}

var suscripciones = [];

function suscribir() {
	var nombre = document.getElementById("firstname").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var direccion = document.getElementById("address").value;
	var telefono = document.getElementById("phone").value;
	var pack = document.getElementById("pack").value;
	var newsletter = document.getElementById("newsletter").checked;
	

	var suscripcion = new Suscripcion(nombre, apellido, email, direccion, telefono, pack, newsletter);

	suscripciones.push(suscripcion);

	var clientes = document.getElementById("clientes");

	clientes.innerHTML = "";
	suscripciones.forEach(function(suscripcion) {
		clientes.innerHTML += "Nombre: " + suscripcion.nombre + "<br/>Apellido: " 
		+ suscripcion.apellido + "<br/>Email: " + suscripcion.email + "<br/>Dirección: " + suscripcion.direccion 
		+ "<br/>Teléfono: " + suscripcion.telefono + "<br/>Pack: " + suscripcion.pack
		+ "<br/>Newsletter: " + suscripcion.newsletter + "<br/><br/>";

	});

	return false;
}
 
