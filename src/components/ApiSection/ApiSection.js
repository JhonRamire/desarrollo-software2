import React, { useEffect, useState } from 'react';

function ApiSection() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <section className="info" id="info">
            <h1>API - Rick and Morty Characters</h1>
            <p>
                1. Busque Apis publicas en google. (https://platzi.com/blog/12-api-gratis-para-desarrolladores-frontend/)<br />
                2. Elegi la de rick y morty y fui donde me redirecciono el link que proporsionaron en el articulo de platzi (https://rickandmortyapi.com/documentation)
                3. Luego baje hasta donde decia GET que es para obtener los datos que mandan y elegi el de character.
                4. El codigo de fetch lo saque leyendo el siguiente articulo (https://www.freecodecamp.org/espanol/news/consumiendo-una-api-rest-con-react-js/)
            </p>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </section>
    );
}

export default ApiSection;
