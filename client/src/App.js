import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cats from './components/Cats/Cats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Cats
          </h1>
          <Cats />
        </header>
      </div>
    );
  }
}

export default App;
