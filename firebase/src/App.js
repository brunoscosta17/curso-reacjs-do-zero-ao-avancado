import React, { Component } from 'react';
import firebase from './fireConnection';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      nome: '',
      idade: '',
      nomeInput: '',
      idadeInput: '',
      lista: [],
      email: '',
      senha: '',
      user: null
    }

    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
    this.sair = this.sair.bind(this);
    this.auth = this.auth.bind(this);

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     firebase.database().ref('usuarios').child(user.uid).set({
    //       nome: this.state.nome
    //     }).then(() => {
    //       this.setState({
    //         nome: '',
    //         email: '',
    //         senha: ''
    //       });
    //     });
    //     alert('Usuario logado com sucesso! \n Email: ' + user.email);
    //   }
    // });

    // Buscar dados  do Banco de Dados
    // firebase.database().ref('usuarios').on('value', (snapshot) => {
    //   let state = this.state;
    //   state.lista = []; // Limpa a lista

    //   snapshot.forEach(childItem => {
    //     state.lista.push({
    //       key: childItem.key,
    //       nome: childItem.val().nome,
    //       idade: childItem.val().idade
    //     });
    //   });
    //   this.setState(state);
    // });

    /*
    // watcher
    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });
    */

    // Obter o token
    // firebase.database().ref('token').on('value', (snapshot) => {
    //   let state = this.state;
    //   state.token = snapshot.val();
    //   this.setState(state);
    // });

    // Criar registro com nome e idade fornecidos pelo usuário
    // firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
    //   let state = this.state;
    //   state.nome = snapshot.val().nome;
    //   state.idade = snapshot.val().idade;
    //   this.setState(state);
    // });
  }

  componentDidMount() {
    this.auth();
  }

  auth() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        });
      }
    });
  }

  cadastrar() {

    // Create
    // firebase.database().ref('token').set(this.state.tokenInput);

    // Update
    // firebase.database().ref('usuarios').child(2).child('cargo').set(this.state.tokenInput);

    // Delete
    // firebase.database().ref('usuarios').child(2).child('cargo').remove();

    // let usuarios = firebase.database().ref('usuarios');
    // let chave = usuarios.push().key;

    // usuarios.child(chave).set({
    //   nome: this.state.nomeInput,
    //   idade: this.state.idadeInput
    // });

    // this.setState({ nomeInput: '' });
    // this.setState({ idadeInput: '' });

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          alert('Email inválido!');
        }
        if (error.code === 'auth/weak-password') {
          alert('Senha fraca!');
        } else {
          alert('Código do erro:' + error.code);
        }
      });
  }

  logar(e) {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          alert('Senha incorreta!');
        } else {
          alert('Código do erro:' + error.code);
        }
      });

    e.preventDefault();
  }

  sair() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
    alert('Deslogado com sucesso!');
  }

  render() {
    // const { token, nome, idade } = this.state;
    // return (
    //   <div>
    //     <form onSubmit={this.cadastrar}>
    //       <input type="text" value={this.state.nomeInput} onChange={(e) => this.setState({ nomeInput: e.target.value })} /> <br />
    //       <input type="text" value={this.state.idadeInput} onChange={(e) => this.setState({ idadeInput: e.target.value })} /><br />
    //       <button type="submit">Cadastrar</button>
    //     </form>
    //     <h1>Token: {token}</h1>
    //     <h1>Nome: {nome}</h1>
    //     <h1>Idade: {idade}</h1>
    //   </div>

    return (
      <div>
        {this.state.user ?
          <div>
            <p>Dashboard</p>
            <p>Seja bem vindo {this.state.email}!</p>
            <button onClick={this.sair}>Sair</button>
          </div>
          :
          <div>
            <h1>Login</h1>

            <label htmlFor="email">E-mail:</label><br />
            <input type="text"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })} /><br />

            <label htmlFor="senha">Senha:</label><br />
            <input type="password"
              value={this.state.senha}
              onChange={(e) => this.setState({ senha: e.target.value })} /><br /><br />

            <button onClick={this.cadastrar}>Cadastrar</button>
            <button onClick={this.logar}>Logar</button> <br />

          </div>
        }

        <form onSubmit={this.logar}>
          <h1>Entrar</h1>
          <label htmlFor="email">E-mail:</label><br />
          <input type="text"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })} /><br />
          <label htmlFor="senha">Senha:</label><br />
          <input type="password"
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })} /><br /><br />
          <button type="submit">Entrar</button>
        </form>
        <br />
        <button onClick={this.sair}>Sair</button>

        {/* {this.state.lista.map((item) => {
          return (
            <div>
              <h3>Id: {item.key}</h3>
              <h1>Olá, {item.nome}</h1>
              <h2>Idade: {item.idade}</h2>
            </div>
          );
        })} */}
      </div>
    );
  }
}
