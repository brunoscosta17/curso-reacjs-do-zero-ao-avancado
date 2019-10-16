// 5 Aprendendo mais - Fortune Cookie

import React, { Component } from 'react';

import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textPhrase: '',
      randomNumber: '',
      randomN: '',
      phraseLength: '',
      randomNTot: ''
    }

    this.randomPhrase = this.randomPhrase.bind(this);

    this.phrases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'];
  }

  randomPhrase() {
    let state = this.state;

    let randomN = Math.random();
    let randomNTot = randomN * this.phrases.length;
    let randomNumber = Math.floor(randomN * this.phrases.length);
    let phraseLength = this.phrases.length;

    state.randomNumber = randomNumber;
    state.randomN = randomN;
    state.phraseLength = phraseLength;
    state.randomNTot = randomNTot;

    state.textPhrase = `"${this.phrases[randomNumber]}"`;
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <h4>`Phrase Length: {this.state.phraseLength}`</h4>
        <img src={require('./assets/biscoito.png')} className="img" alt="Click me"></img>
        <Button name="Open Cookie" clickBtn={this.randomPhrase} />
        <h3 className="textPhrase">{this.state.textPhrase}</h3>
        <h4>`Random number: {this.state.randomNumber}`</h4>
        <h4>`Random: {this.state.randomN}`</h4>
        <h4>{this.state.randomN} x {this.state.phraseLength} = {this.state.randomNTot}</h4>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clickBtn}>{this.props.name}</button>
      </div>
    )
  }
}

export default App;