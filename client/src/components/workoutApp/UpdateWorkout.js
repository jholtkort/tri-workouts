import React, { Component } from "react";
import axios from "axios";

import WorkoutForm from "./WorkoutForm";

class UpdateWorkout extends Component {
  state = {
    id: null,
    description: "",
    date: "",
    type: "",
    duration: "",
    distance: ""
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:4000/workouts/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);

        this.setState({
          id: res.data.id,
          description: res.data.description,
          date: res.data.date,
          type: res.data.type,
          duration: res.data.duration,
          distance: res.data.distance
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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

  handleDurationChange = e => {
    this.setState({ duration: e.target.value });
  };

  handleDistanceChange = e => {
    this.setState({ distance: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { id, description, date, type, duration, distance } = this.state;

    axios
      .put(`http://localhost:4000/workouts/${this.props.match.params.id}`, {
        id,
        description,
        date,
        type,
        duration,
        distance
      })
      .then(res => {
        console.log(res);
      });

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <WorkoutForm
          title="Update Workout"
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

export default UpdateWorkout;
