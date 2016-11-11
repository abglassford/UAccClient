import React, { Component } from 'react';
import './style/App.css';
import {ajax} from 'jquery';

class Events extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eventData : [],
     }
    ajax('https://young-badlands-52676.herokuapp.com/api/events')
    .done((data) => {
      this.setState({eventData: data})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="Events col-md-8 col-md-offset-2">
      <div className="row">
          <div className="pull-right">
            <button>Create New</button>
          </div>
      </div>
      <br/>
        <table className="table">
        <tbody className="table-body">
          <tr>
            <th>Description</th>
            <th>Geolocation</th>
            <th>Time</th>
            <th>Capacity</th>
            <th>Attending</th>
          </tr>
          {this.state.eventData.map((event, i) => {
            return <tr key={i} className="event-info">
            <td><div className="desc"><p>{event.description}</p></div></td>
            <td><div className="loc"><p>{event.location}</p></div></td>
            <td><div className="time"><p>{event.event_time}</p></div></td>
            <td><div className="cap"><p>{event.capacity}</p></div></td>
            <td><div className="att"><p>{event.attending}</p></div></td>
            <button>Update</button>
            <button>Delete</button>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Events;
