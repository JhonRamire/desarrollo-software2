// Footer.js
import React from 'react';

function Footer() {
    return (
        <footer>
            <div>
                <h3>Contacto</h3>
                <p>Correo electrónico: info@tudominio.com</p>
                <p>Teléfono: +123 456 7890</p>
            </div>

            <div>
                <h3>Síguenos</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
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
                <p>Dirección: Calle Principal, Ciudad, País</p>
            </div>
        </footer>
    );
}

export default Footer;
