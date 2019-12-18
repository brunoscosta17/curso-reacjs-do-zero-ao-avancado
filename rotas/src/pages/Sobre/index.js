import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sobre extends Component {
    render() {
        return (
            <div>
                <h2>Sobre</h2>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Sobre;