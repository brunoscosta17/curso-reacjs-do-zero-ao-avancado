import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './index.css';
import Home from './components/Home/home';
import Header from './components/Header/header';

class App extends Component {

  state = {
    firebaseInitialized: false
  }

  componentDidMount() {

  }

  render() {
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    ) : (
        <h1>Carregando...</h1>
      );
  }
}

export default App;

