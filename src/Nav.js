import React, { Component } from 'react';
import './style/App.css';
import { Link } from 'react-router'

class Nav extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/Home' className="navbar-brand logo">
              <img className="Site-logo" alt="Brand" src="http://www.saviourofthenations.org/wp-content/uploads/2015/05/2000px-Triquetra-Vesica.svg_.png" />
            </Link>
            <Link className="navbar-brand title" to='/Home'>Unity Accelerator</Link>
          </div>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='Users'>Users</Link></li>
              <li><Link to='Events'>Events</Link></li>
              <li><Link to='Login'>Log In</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  );
  }
}

export default Nav;
