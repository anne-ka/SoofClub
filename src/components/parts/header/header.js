import React, { Component } from 'react';
import Navbar from "./components/general/Navbar/Navbar";
import logo from "./components/general/logo/logo";
import './header.css';

class header extends Component {
  render() {
    return (
      <div className="header">
        <logo />
        <Navbar />



      </div>
    );
  }
}

export default header;
