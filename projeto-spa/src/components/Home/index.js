import React from 'react';

import Inicio from '../Inicio/index';
import Sobre from '../Sobre/index';
import Contato from '../Contato/index';

import '../../style.css';

function Home() {
    return (
        <div>
            <Inicio />
            <Sobre />
            <Contato />
        </div>
    );
}

export default Home;
