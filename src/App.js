import React, { Component } from 'react';
import Navbar from "./components/parts/header/Navbar/Navbar.js";
import logo from "./components/parts/header/logo/logo.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header />
          <logo />
          <Navbar />
      </div>
    );
  }
}

export default App;
