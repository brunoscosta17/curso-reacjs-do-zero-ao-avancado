import React, { Component } from 'react';

import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nutri: []
    }
  }

  componentDidMount() {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        let state = this.state;
        state.nutri = json;
        this.setState(state);
        console.log(json);
      })
  }

  render() {
    return (
      <div className="container">
        <header>
          <strong>React Nutri</strong>
        </header>
        {this.state.nutri.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="title">{item.titulo}</strong>
              <img src={item.capa} alt={item.subtitulo} className="capa" />
              <p className="subtitle">{item.subtitulo}</p>
              <a href="#" className="button">Acessar</a>
            </article>
          );
        })}
      </div>
    );
  }
}


export default App;
