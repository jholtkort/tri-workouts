import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import WorkoutForm from "./WorkoutForm";
import workoutAPI from "../../api/workoutAPI";

class UpdateWorkout extends Component {
  state = {
    id: null,
    description: "",
    date: "",
    type: "",
    time: "",
    distance: "",
    distanceUnits: "",
    hour: "",
    minute: "",
    second: ""
  };

  componentDidMount = () => {
    this._isMounted = true;
    workoutAPI
      .get(`/workouts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          id: res.data.id,
          description: res.data.description,
          date: res.data.date,
          type: res.data.type,
          time: res.data.time,
          distance: res.data.distance,
          distanceUnits: res.data.distanceUnits,
          hour: res.data.hour,
          minute: res.data.minute,
          second: res.data.second
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
      id,
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

    await workoutAPI.put(`/workouts/${this.props.match.params.id}`, {
      id,
      description,
      date,
      type,
      time,
      distance,
      distanceUnits,
      hour,
      minute,
      second
    });

    this.props.history.push("/");
  };

  handleDeleteClick = async id => {
    await workoutAPI.delete(`/workouts/${id}`);

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
          id={this.state.id}
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
          handleDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}

export default UpdateWorkout;
