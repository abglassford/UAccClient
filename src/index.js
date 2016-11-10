import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import Users from './Users';
import Events from './Events';
import Home from './Home';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="Home" component={Home}></Route>
      <Route path="Users" component={Users}></Route>
      <Route path="Events" component={Events}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
