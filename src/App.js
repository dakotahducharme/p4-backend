import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Authorize from './Authorize.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Authorize />
        <Footer />
      </div>
    );
  }
}

export default App;
