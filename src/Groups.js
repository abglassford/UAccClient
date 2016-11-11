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
      <div className="Groups">
        <ul>
          {this.state.groupData.map((group, i) => {
            return <li key={i}>{group.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Groups;
