import React, { Component } from 'react';
import './style/App.css';

class Home extends Component {
  render () {
    return (
      <div className="splash jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Welcome to Unity Accelerator</h1>
          <p className="lead">This is a simple test site that uses PHP for the backend and JS/ReactJS for the frontend</p>
        </div>
      </div>
    );
  }
}

export default Home;
