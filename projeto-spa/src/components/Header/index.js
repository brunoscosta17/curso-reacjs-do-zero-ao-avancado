import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <header id="home">
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link to="#home" smooth>Home</Link></li>
                        <li><Link to="#sobre" smooth>Sobre</Link></li>
                        <li><Link to="#contato" smooth>Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
