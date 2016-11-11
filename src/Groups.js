import React, { Component } from 'react';
import './style/App.css';
import {ajax} from 'jquery';

class Groups extends Component {
  constructor(props) {
    super(props)
    this.state = { groupData : [] }
    ajax('https://young-badlands-52676.herokuapp.com/api/groups')
    .done((data) => {
      this.setState({groupData: data})
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="Groups col-md-6 col-md-offset-3">
      <div className="row">
        <button className="pull-right">Create New</button>
      </div>
      <br/>
        <ul>
          {this.state.groupData.map((group, i) => {
            return <li key={i}><div className="splash jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-3">{group.name}</h1>
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default Groups;
