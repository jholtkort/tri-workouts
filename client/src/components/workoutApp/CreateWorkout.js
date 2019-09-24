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
    duration: "",
    distanceUnits: "",
    hour: "",
    minute: "",
    second: "",
    redirect: false
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  };

  handleTypeChange = e => {
    this.setState({ type: e.target.value });
  };

  handleTimeChange = e => {
    this.setState({ time: e.target.value });
  };

  handleDistanceChange = e => {
    this.setState({ distance: e.target.value });
  };

  handleDistanceUnitsChange = e => {
    this.setState({ distanceUnits: e.target.value });
  };

  handleHourChange = e => {
    this.setState({ hour: e.target.value });
  };

  handleMinuteChange = e => {
    this.setState({ minute: e.target.value });
  };

  handleSecondChange = e => {
    this.setState({ second: e.target.value });
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

    await axios
      .post("http://localhost:4000/workouts", {
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
          distanceUnits={this.state.distanceUnits}
          hour={this.state.hour}
          minute={this.state.minute}
          second={this.state.second}
          handleSubmit={this.handleSubmit}
          handleDescriptionChange={this.handleDescriptionChange}
          handleDateChange={this.handleDateChange}
          handleTypeChange={this.handleTypeChange}
          handleTimeChange={this.handleTimeChange}
          handleDistanceChange={this.handleDistanceChange}
          handleDistanceUnitsChange={this.handleDistanceUnitsChange}
          handleHourChange={this.handleHourChange}
          handleMinuteChange={this.handleMinuteChange}
          handleSecondChange={this.handleSecondChange}
        />
        ;
      </div>
    );
  }
}

export default CreateWorkout;
