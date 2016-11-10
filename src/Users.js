import React, { Component } from 'react';
import './style/App.css';
import {ajax} from 'jquery';

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = { userData : [] }
    ajax('http://localhost:8888/api/users')
    .done((data) => {
      this.setState({userData: data})
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Users">
        <ul>
          {this.state.userData.map((user, i) => {
            return <li key={i}>{user.first_name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
