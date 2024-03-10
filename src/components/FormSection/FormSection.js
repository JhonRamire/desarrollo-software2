// FormSection.js
import React, { useState } from 'react';
import './FormSection.css'

function FormSection() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [nombreProducto, setNombreProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [foto, setFoto] = useState('');

    const mostrarGit = () => {
        alert("https://github.com/JhonRamire/desarrollo-software2/tree/jhon");
    }

    const mostrarDatos = () => {
        // Mostrar un mensaje con los datos
        alert("Nombre: " + nombre + "\nCorreo Electrónico: " + email);
    }

    const mostrarDatosP = () => {
        // Aquí puedes realizar cualquier procesamiento adicional necesario para el nombre del archivo de la foto

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

    return (
        <div>
            <h2>Funcionalidad JS</h2>
            <button id="miBoton" onClick={mostrarGit}>Click aquí para ver mi repositorio</button>
            <form id="miFormulario">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} />
                <br />

                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <br />

                <button type="button" onClick={mostrarDatos}>Enviar</button>
            </form>
            <form id="miFormularioProducto">
                <label htmlFor="nombreProducto">Nombre del producto:</label>
                <input type="text" id="nombreProducto" name="nombreProducto" required onChange={(e) => setNombreProducto(e.target.value)} />
                <br />

                <label htmlFor="price">Precio del producto:</label>
                <input type="number" id="precio" name="precio" onChange={(e) => setPrecio(e.target.value)} />
                <br />

                <label htmlFor="descripcion">Descripción del producto:</label>
                <textarea id="descripcion" name="descripcion" onChange={(e) => setDescripcion(e.target.value)}></textarea>
                <br />

                <label htmlFor="foto">Subir imagen del producto:</label>
                <input type="file" id="foto" name="foto" onChange={(e) => setFoto(e.target.value)} />
                <br />

                <button type="button" onClick={mostrarDatosP}>Enviar</button>
            </form>
        </div>
    );
}

export default FormSection;