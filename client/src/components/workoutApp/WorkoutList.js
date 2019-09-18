import React, { Component } from "react";
import axios from "axios";

class WorkoutList extends Component {
  state = { workouts: [] };

  componentDidMount() {
    axios.get("http://localhost:4000/workouts").then(res => {
      this.setState({ workouts: res.data });
    });
  }

  renderWorkouts() {
    console.log("renderWorkouts", this.state.workouts);

    return this.state.workouts.map(workout => {
      console.log(workout);

      return (
        <div key={workout.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{workout.description}</h5>
            <h6 className="card-title">{workout.date}</h6>
            <h6 className="card-subtitle">Type: {workout.type}</h6>
            <p className="card-text">Time: {workout.duration}</p>
            <p className="card-text">Distance: {workout.distance}</p>
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      );
    });
  }

  render() {
    if (!this.state.workouts.length) return <div>Loading...</div>;
    return <div>{this.renderWorkouts()}</div>;
  }
}

export default WorkoutList;
