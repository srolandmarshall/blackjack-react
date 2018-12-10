import React, { Component } from 'react';
import './App.css';
import Table from './Table.js'
import Controls from './Controls.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Blackjack React</h1>
        <Controls />
        <Table />
      </div>
    );
  }
}

export default App;
