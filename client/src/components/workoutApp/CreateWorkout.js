import React, { Component } from "react";
import axios from "axios";

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
    console.log(this.state.type);
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
  };

  render() {
    return (
      <div className="mx-5 mt-5">
        <h1>Create Workout</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={this.state.date}
              onChange={this.handleDateChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select
              value={this.state.type}
              onChange={this.handleTypeChange}
              id="type"
              className="form-control"
            >
              <option value="">Select</option>
              <option value="Swim">Swim</option>
              <option value="Bike">Bike</option>
              <option value="Run">Run</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration:</label>
            <input
              type="time"
              className="form-control"
              id="duration"
              value={this.state.duration}
              onChange={this.handleDurationChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="distance">Distance:</label>
            <input
              type="text"
              className="form-control"
              id="distance"
              value={this.state.distance}
              onChange={this.handleDistanceChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateWorkout;
