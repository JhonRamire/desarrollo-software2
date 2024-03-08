// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; //Importa el archivo CSS

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/info">Información</Link></li>
                <li><Link to="/categoria">Categoría</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/api">API</Link></li>
                <li><Link to="/form">Formulario</Link></li>
                <li><Link to="/login">Iniciar sesión</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
