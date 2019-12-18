import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2> <br />
                <Link to="/sobre">Sobre</Link>
            </div>
        )
    }
}

export default Home;