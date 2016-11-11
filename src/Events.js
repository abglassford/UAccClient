import React, { Component } from 'react';
import './style/App.css';
import {ajax} from 'jquery';
import { Link } from 'react-router'


class Events extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eventData : [],
      view: 'Calendar'
     }
    ajax('https://young-badlands-52676.herokuapp.com/api/events')
    .done((data) => {
      this.setState({eventData: data})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  calendarView() {
    this.state.view === 'Calendar' ? this.setState({view: 'Events'}) : this.setState({view: 'Calendar'})
  }

  render() {
    return (
      <div className="Events col-md-6 col-md-offset-3">
      <Link to={this.state.view}><button className="btn btn-primary" onClick={this.calendarView.bind(this)}>{this.state.view}</button></Link>
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
