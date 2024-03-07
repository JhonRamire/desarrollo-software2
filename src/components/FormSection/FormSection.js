// FormSection.js
import React from 'react';

function FormSection() {
    return (
        <div>
            <h2>Funcionalidadjs</h2>
            <button id="miBoton">click aqui para ver mi repositorio</button>
            <form id="miFormulario">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
                <br />

                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" />
                <br />

                <button type="button" onclick="mostrarDatos()">Enviar</button>
            </form>
            <form id="miFormularioProducto">
                <label for="nombreProducto">Nombre del producto:</label>
                <input type="text" id="nombreProducto" name="nombreProducto" required />
                <br />

                <label for="price">Precio del producto:</label>
                <input type="number" id="precio" name="precio" />
                <br />

                <label for="descripcion">Descripción del producto:</label>
                <textarea id="descripcion" name="descripcion"></textarea>
                <br />

                <label for="foto">Subir imagen del producto:</label>
                <input type="file" id="foto" name="foto" />
                <br />

                <button type="button" onclick="mostrarDatosP()">Enviar</button>
            </form>
        </div>
    );
}

export default FormSection;

// function mostrarDatos() {
// 	// Obtener los valores de los campos
// 	var nombre = document.getElementById("nombre").value;
// 	var email = document.getElementById("email").value;

// 	// Mostrar un mensaje con los datos
// 	alert("Nombre: " + nombre + "\nCorreo Electrónico: " + email);
// }

// function mostrarDatosP() {
// 	// Obtener los valores de los campos
// 	var nombreProducto = document.getElementById("nombreProducto").value;
// 	var precio = document.getElementById("precio").value;
// 	var descripcion = document.getElementById("descripcion").value;
// 	var foto = document.getElementById("foto").value; // Aquí puedes realizar un procesamiento adicional para obtener el nombre del archivo

// 	// Mostrar un mensaje con la información del producto
// 	alert(
// 		"Nombre del producto: " +
// 		nombreProducto +
// 		"\nPrecio: $" +
// 		precio +
// 		"\nDescripción: " +
// 		descripcion +
// 		"\nFoto: " +
// 		foto
// 	);
// }

// document.addEventListener("DOMContentLoaded", function () {
// 	// Seleccionar el boton y agrega un evento de click
// 	var miBoton = document.getElementById("miBoton");

// 	miBoton.addEventListener("click", function () {
// 		realizarFuncion();
// 	});

// 	function realizarFuncion() {
// 		alert("https://github.com/JhonRamire/desarrollo-software2/tree/jhon");
// 	}
// });