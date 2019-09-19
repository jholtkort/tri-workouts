import React, { Component } from "react";
import axios from "axios";

import Workout from "./Workout";

class WorkoutList extends Component {
  state = { workouts: [] };

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/workouts")
      .then(res => {
        this.setState({ workouts: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  // componentDidUpdate = () => {
  //   axios
  //     .get("http://localhost:4000/workouts")
  //     .then(res => {
  //       this.setState({ workouts: res.data });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };

  renderWorkouts = () => {
    return this.state.workouts.map(workout => {
      return <Workout workout={workout} key={workout.id} />;
    });
  };

  render() {
    if (!this.state.workouts.length) return <div>Loading...</div>;
    return <div>{this.renderWorkouts()}</div>;
  }
}

export default WorkoutList;
