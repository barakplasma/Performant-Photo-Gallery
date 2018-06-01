import React, { Component } from 'react';
import './App.css';
import { Gallery } from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to a Performant Photo Gallery</h1>
        </header>
        <main>
          <Gallery />
        </main>
      </div>
    );
  }
}

export default App;
