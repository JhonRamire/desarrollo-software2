// Footer.js
import React from 'react';
import './Login.css';

function Login() {
    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form>
                <div>
                    <label>Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Login;