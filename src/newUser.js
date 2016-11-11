import React, { Component } from 'react';
import './style/App.css';
import {ajax} from 'jquery';
import $ from 'jquery';

class newUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      bio: '',
     }
  }

  handleFirstChange(event) {
    this.setState({first_name: event.target.value})
  }
  handleLastChange(event) {
    this.setState({last_name: event.target.value})
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }
  handleBioChange(event) {
    this.setState({bio: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    var $formData = $('form').serializeArray()
    ajax({
      method: 'POST',
      url: 'https://young-badlands-52676.herokuapp.com/api/users',
      data: $formData
    }).done((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="newUser col-md-4 col-md-offset-4">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label >First Name</label>
          <input className="form-control" type="text" onChange={this.handleFirstChange.bind(this)} name="first_name"></input>
          <label >Last Name</label>
          <input className="form-control" type="text" onChange={this.handleLastChange.bind(this)} name="last_name"></input>
          <label >Email</label>
          <input className="form-control" type="email" onChange={this.handleEmailChange.bind(this)} name="email"></input>
          <label >Bio</label>
          <input className="form-control" type="text" onChange={this.handleBioChange.bind(this)} name="bio"></input>
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default newUser;
