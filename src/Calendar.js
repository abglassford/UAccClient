import React, { Component } from 'react';
import './style/App.css';
import axios from 'axios';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventData : [],
      view: 'Calendar'
     }
    ajax('http://localhost:8888/api/events')
    .then((data) => {
      this.setState({eventData: data})
    })
    .catch((err) => {
      console.log(err);
    })
  }
  calendarView() {
    this.state.view === 'Calendar' ? this.setState({view: 'List'}) : this.setState({view: 'Calendar'})
  }

  render() {
    return (
      <div className="Events col-md-6 col-md-offset-3">
      <button className="btn btn-primary" onClick={this.calendarView.bind(this)}>{this.state.view}</button>
        <table className="table">
        <tbody>
          <tr>
            <th>Description</th>
            <th>Geolocation</th>
            <th>Time</th>
            <th>Capacity</th>
            <th>Attending</th>
          </tr>
          {this.state.eventData.map((event, i) => {
            return <tr key={i}>
            <td>{event.description}</td>
            <td>{event.location}</td>
            <td>{event.event_time}</td>
            <td>{event.capacity}</td>
            <td>{event.attending}</td>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Events;
