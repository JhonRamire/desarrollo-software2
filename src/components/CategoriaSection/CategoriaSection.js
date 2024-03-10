// CategoriesSection.js
import React from 'react';
import './CategoriaSection.css'; //Importa el archivo CSS

function CategoriesSection() {
    return (
        <section class="categoria" id="cateogria">
            <h2>Seccion de categorias</h2>
            <div>
                <article>
                    <h2>Bolsos</h2>
                    <img src="./asset/imgCategoriaBolso.jpg" alt="Bolsos" />
                    <p>Descubre nuestra increíble colección de bolsos para todas las ocasiones.</p>
                </article>

                <article>
                    <h2>Maletas de Viaje</h2>
                    <img src="./asset/imgCategoriaMaleta.jpg" alt="Maletas de Viaje" />
                    <p>Explora nuestras resistentes maletas diseñadas para acompañarte en tus viajes.</p>
                </article>
            </div>

            <div>
                <article>
                    <h2>Accesorios</h2>
                    <img src="./asset/imgCategoriaAccesorios.jpg" alt="Accesorios" />
                    <p>Completa tu estilo con nuestros accesorios elegantes y funcionales.</p>
                </article>

                <article>
                    <h2>Aviones</h2>
                    <img src="./asset/imgCategoriaAvion.jpg" alt="Accesorios" />
                    <p>Completa tu estilo con nuestros aviones funcionales.</p>
                </article>
            </div>
        </section>
    );
}

export default CategoriesSection;
