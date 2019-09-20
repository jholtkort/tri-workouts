import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import WorkoutForm from "./WorkoutForm";

class CreateWorkout extends Component {
  state = {
    description: "",
    date: "",
    type: "",
    duration: "",
    distance: "",
    redirect: false
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };

  handleTypeChange = event => {
    this.setState({ type: event.target.value });
  };

  handleDurationChange = event => {
    this.setState({ duration: event.target.value });
  };

  handleDistanceChange = event => {
    this.setState({ distance: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { description, date, type, duration, distance } = this.state;

    await axios
      .post("http://localhost:4000/workouts", {
        description,
        date,
        type,
        duration,
        distance
      })
      .then(() => {
        this.setState({ redirect: true });
      });

    this.props.history.push("/");
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
          duration={this.state.duration}
          distance={this.state.distance}
          handleSubmit={this.handleSubmit}
          handleDescriptionChange={this.handleDescriptionChange}
          handleDateChange={this.handleDateChange}
          handleTypeChange={this.handleTypeChange}
          handleDurationChange={this.handleDurationChange}
          handleDistanceChange={this.handleDistanceChange}
        />
        ;
      </div>
    );
  }
}

export default CreateWorkout;
