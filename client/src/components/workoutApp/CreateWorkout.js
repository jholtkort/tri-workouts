import React, { Component } from "react";
import axios from "axios";

import WorkoutForm from "./WorkoutForm";

class CreateWorkout extends Component {
  state = {
    description: "",
    date: "",
    type: "",
    duration: "",
    distance: ""
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

  handleSubmit = event => {
    event.preventDefault();

    const { description, date, type, duration, distance } = this.state;

    axios
      .post("http://localhost:4000/workouts", {
        description,
        date,
        type,
        duration,
        distance
      })
      .then(res => {
        console.log(res);
        this.setState({
          description: "",
          date: "",
          type: "",
          duration: "",
          distance: ""
        });
      });

    this.props.history.push("/");
  };

  render() {
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
