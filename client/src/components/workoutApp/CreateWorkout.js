import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import WorkoutForm from "./WorkoutForm";

class CreateWorkout extends Component {
  state = {
    description: "",
    date: "",
    type: "",
    time: "",
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

  handleTimeChange = event => {
    this.setState({ time: event.target.value });
  };

  handleDistanceChange = event => {
    this.setState({ distance: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { description, date, type, time, distance } = this.state;

    await axios
      .post("http://localhost:4000/workouts", {
        description,
        date,
        type,
        time,
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
          time={this.state.time}
          distance={this.state.distance}
          handleSubmit={this.handleSubmit}
          handleDescriptionChange={this.handleDescriptionChange}
          handleDateChange={this.handleDateChange}
          handleTypeChange={this.handleTypeChange}
          handleTimeChange={this.handleTimeChange}
          handleDistanceChange={this.handleDistanceChange}
        />
        ;
      </div>
    );
  }
}

export default CreateWorkout;
