import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import WorkoutForm from "./WorkoutForm";
import workoutAPI from "../../api/workoutAPI";

class CreateWorkout extends Component {
  state = {
    description: "",
    date: "",
    type: "",
    time: "",
    distance: "",
    distanceUnits: "",
    hour: "",
    minute: "",
    second: "",
    redirect: false
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const {
      description,
      date,
      type,
      time,
      distance,
      distanceUnits,
      hour,
      minute,
      second
    } = this.state;

    console.log(
      description,
      date,
      type,
      time,
      distance,
      distanceUnits,
      hour,
      minute,
      second
    );

    await workoutAPI
      .post("/workouts", {
        description,
        date,
        type,
        time,
        distance,
        distanceUnits,
        hour,
        minute,
        second
      })
      .then(() => {
        this.setState({ redirect: true });
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <WorkoutForm
          title="Create Workout"
          description={this.state.description}
          date={this.state.date}
          type={this.state.type}
          time={this.state.time}
          distance={this.state.distance}
          distanceUnits={this.state.distanceUnits}
          hour={this.state.hour}
          minute={this.state.minute}
          second={this.state.second}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CreateWorkout;
