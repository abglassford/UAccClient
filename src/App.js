import React, { Component } from 'react';
import './style/App.css';
import Navbar from './Nav.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>{this.props.children}</div>
      </div>
  );
  }
}

export default App;
