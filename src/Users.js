import React, { Component } from 'react';
import './style/App.css';
import {ajax} from 'jquery';
import {Link} from 'react-router';

class Users extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = { userData : [] }
    ajax('https://young-badlands-52676.herokuapp.com/api/users')
    .done((data) => {
      this.setState({userData: data})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleDelete(id) {
    ajax({
      method: 'DELETE',
      url: 'https://young-badlands-52676.herokuapp.com/api/users/' + id,
      contentType: 'application/json'
    }).done((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="Users col-md-10 col-md-offset-1">
      <div className="row">
          <div className="pull-right">
            <Link to="newUser"><button>Create New</button></Link>
          </div>
      </div>
      <br/>
        <ul>
          {this.state.userData.map((user, i) => {
            return <li key={i} className="col-md-4">
            <div className='user-info'>
              <h2>{user.first_name} {user.last_name}</h2>
              <p><strong>Email: </strong>{user.email}</p>
              <p><strong>Bio: </strong>{user.bio}</p>
              <button>Update</button>
              <button onClick={() => this.handleDelete(user.id)}>Delete</button>
            </div>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
