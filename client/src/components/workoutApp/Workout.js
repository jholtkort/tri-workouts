import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Workout extends Component {
  handleDeleteClick = props => {
    axios
      .delete(`http://localhost:4000/workouts/${this.props.workout.id}`)
      .then(res => {
        console.log(res);

        this.setState({ state: this.state });
      });
  };

  render() {
    console.log(this.props.workout);
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.workout.description}</h5>
          <h6 className="card-title">{this.props.workout.date}</h6>
          <h6 className="card-subtitle">Type: {this.props.workout.type}</h6>
          <p className="card-text">Time: {this.props.workout.duration}</p>
          <p className="card-text">Distance: {this.props.workout.distance}</p>
          <button
            onClick={() => this.handleUpdateClick(this.props.id)}
            className="btn btn-primary"
          >
            <Link to={`/update/${this.props.workout.id}`}>Update</Link>
          </button>
          <button
            onClick={() => this.handleDeleteClick(this.props.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Workout;
