import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Inicio from './Home/inicio'
import Categorias from './Jogo/categorias'
import Perguntas from './Jogo/perguntas'

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <Perguntas />
      </div>
    );
  }
}

export default App;
