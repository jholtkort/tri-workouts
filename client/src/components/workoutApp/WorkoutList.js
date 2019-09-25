import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Workout from "./Workout";

class WorkoutList extends Component {
  state = { workouts: [], loaded: false };

  componentDidMount = async () => {
    await axios
      .get("http://localhost:4000/workouts")
      .then(res => {
        this.setState({ workouts: res.data, loaded: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleDeleteClick = async id => {
    await axios.delete(`http://localhost:4000/workouts/${id}`);

    await axios
      .get("http://localhost:4000/workouts")
      .then(res => {
        this.setState({ workouts: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  renderWorkouts = () => {
    return this.state.workouts.map(workout => {
      return (
        <Workout
          workout={workout}
          key={workout.id}
          handleDeleteClick={this.handleDeleteClick}
        />
      );
    });
  };

  render() {
    if (!this.state.workouts.length && !this.state.loaded) {
      return <div className="container mt-3">Loading...</div>;
    }

    if (!this.state.workouts.length && this.state.loaded) {
      return (
        <div className="container mt-3">
          <h3>
            <Link to="/create">Hello, please add workouts</Link>
          </h3>
        </div>
      );
    }

    return <div className="container mt-3">{this.renderWorkouts()}</div>;
  }
}

export default WorkoutList;
