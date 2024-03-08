// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div>
                <h3>Contacto</h3>
                <p>Correo electrónico: heisenberg@tudominio.com</p>
                <p>Teléfono: +1 (505) 123-4567</p>
            </div>

            <div>
                <h3>Síguenos</h3>
                <p>Facebook: Walter White</p>
                <p>Twitter: @Heisenberg</p>
                <p>Instagram: @WWChemist</p>
            </div>

            <div>
                <h3>Enlaces Rápidos</h3>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Categorías</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Accesorios</a></li>
                </ul>
            </div>

            <div>
                <h3>Ubicación</h3>
                <p>Dirección: 308 Negra Arroyo Lane, Albuquerque, Nuevo México</p>
            </div>
        </footer>
    );
}

export default Footer;
