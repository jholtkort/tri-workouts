import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

import Workout from "./Workout";
import workoutAPI from "../../api/workoutAPI";

class WorkoutList extends Component {
  state = { workouts: [], loaded: false };

  componentDidMount = async () => {
    await workoutAPI
      // .get("/workouts?_sort=date&_order=desc")
      .get("/workouts")
      .then(res => {
        this.setState({ workouts: res.data, loaded: true });
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
          key={workout._id}
          handleDeleteClick={this.handleDeleteClick}
        />
      );
    });
  };

  render() {
    if (!this.state.workouts.length && !this.state.loaded) {
      return <Container className="mt-3">Loading...</Container>;
    }

    if (!this.state.workouts.length && this.state.loaded) {
      return (
        <Container className="mt-3">
          <h3>
            <Link to="/create">Hello, please add workouts</Link>
          </h3>
        </Container>
      );
    }

    return <Container className="mt-3">{this.renderWorkouts()}</Container>;
  }
}

export default WorkoutList;
