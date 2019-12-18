import React from 'react';

import { Container, Head, Title, BemVindo } from './styles.js';

function App() {
  return (
    <Container>
      <Head>
        <Title>Projeto Styled</Title>
      </Head>
      <BemVindo color="0000FF" size={55}>
        Bem-Vindo
      </BemVindo>
    </Container>
  );
}

export default App;

/*
<div className="container">
      <header className="header">
        <a className="titulo">Projeto Styled</a>
      </header>
      <h1>Bem vindo ao sistema</h1>
    </div>
*/
