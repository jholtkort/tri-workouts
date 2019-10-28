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

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
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
          handleChange={this.handleChange}
          handleDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}

export default UpdateWorkout;
