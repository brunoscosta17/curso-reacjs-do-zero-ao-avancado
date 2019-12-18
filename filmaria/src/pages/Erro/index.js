import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Erro extends Component {
    render() {
        return (
            <div className="container">
                <h1>Página não encontrada!</h1>
                <Link to="/">Filmaria</Link>
            </div>
        );
    }
}

export default Erro;
