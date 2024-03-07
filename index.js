function mostrarDatos() {
	// Obtener los valores de los campos
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;

	// Mostrar un mensaje con los datos
	alert("Nombre: " + nombre + "\nCorreo Electrónico: " + email);
}

function mostrarDatosP() {
	// Obtener los valores de los campos
	var nombreProducto = document.getElementById("nombreProducto").value;
	var precio = document.getElementById("precio").value;
	var descripcion = document.getElementById("descripcion").value;
	var foto = document.getElementById("foto").value; // Aquí puedes realizar un procesamiento adicional para obtener el nombre del archivo

	// Mostrar un mensaje con la información del producto
	alert(
		"Nombre del producto: " +
		nombreProducto +
		"\nPrecio: $" +
		precio +
		"\nDescripción: " +
		descripcion +
		"\nFoto: " +
		foto
	);
}

document.addEventListener("DOMContentLoaded", function () {
	// Seleccionar el boton y agrega un evento de click
	var miBoton = document.getElementById("miBoton");

	miBoton.addEventListener("click", function () {
		realizarFuncion();
	});

	function realizarFuncion() {
		alert("https://github.com/JhonRamire/desarrollo-software2/tree/jhon");
	}
});
