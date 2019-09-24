import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import WorkoutForm from "./WorkoutForm";

class UpdateWorkout extends Component {
  state = {
    id: null,
    description: "",
    date: "",
    type: "",
    time: "",
    distance: "",
    distanceUnits: "",
    duration: ""
  };

  componentDidMount = () => {
    this._isMounted = true;
    axios
      .get(`http://localhost:4000/workouts/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);

        this.setState({
          id: res.data.id,
          description: res.data.description,
          date: res.data.date,
          type: res.data.type,
          time: res.data.time,
          distance: res.data.distance,
          distanceUnits: res.data.distanceUnits,
          duration: res.data.duration
        });
      })
      .catch(error => {
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

  handleTimeChange = e => {
    this.setState({ time: e.target.value });
  };

  handleDistanceChange = e => {
    this.setState({ distance: e.target.value });
  };

  handleDistanceUnitsChange = e => {
    this.setState({ distanceUnits: e.target.value });
  };

  handleDurationChange = e => {
    this.setState({ duration: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const {
      id,
      description,
      date,
      type,
      time,
      distance,
      distanceUnits,
      duration
    } = this.state;

    await axios.put(
      `http://localhost:4000/workouts/${this.props.match.params.id}`,
      {
        id,
        description,
        date,
        type,
        time,
        distance,
        distanceUnits,
        duration
      }
    );

    this.props.history.push("/");
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <WorkoutForm
          title="Update Workout"
          description={this.state.description}
          date={this.state.date}
          type={this.state.type}
          time={this.state.time}
          distance={this.state.distance}
          distanceUnits={this.state.distanceUnits}
          duration={this.state.duration}
          handleSubmit={this.handleSubmit}
          handleDescriptionChange={this.handleDescriptionChange}
          handleDateChange={this.handleDateChange}
          handleTypeChange={this.handleTypeChange}
          handleTimeChange={this.handleTimeChange}
          handleDurationChange={this.handleDurationChange}
          handleDistanceChange={this.handleDistanceChange}
          handleDistanceUnitsChange={this.handleDistanceUnitsChange}
        />
      </div>
    );
  }
}

export default UpdateWorkout;
