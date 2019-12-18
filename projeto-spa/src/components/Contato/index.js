import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Contato() {
    return (
        <div className="home" id="contato">
            <h1>Entre em contato</h1>
            <h2>Telefone: (99) 9 9999-9999</h2>
            <h3>Rua: Alguma Rua, 333</h3>

            <Link to="#home" smooth>Home</Link><br />
            <Link to="#sobre" smooth>Sobre</Link>
        </div>
    );
}

export default Contato;
