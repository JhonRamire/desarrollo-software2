document.addEventListener("DOMContentLoaded", function () {
	// Seleccionar el boton y agrega un evento de click
	var miBoton = document.getElementById("miBoton");

	miBoton.addEventListener("click", function () {
		realizarFuncion();
	});

	function realizarFuncion() {
		alert("https://github.com/JhonRamire/desarrollo-software2/tree/jhon");
	}
})