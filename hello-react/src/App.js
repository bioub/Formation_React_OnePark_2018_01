import React, { Component } from 'react';
import './App.css';
import { Hello } from './Hello';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Hello name="Romain" />
      </div>
    );
  }
}

export default App;
