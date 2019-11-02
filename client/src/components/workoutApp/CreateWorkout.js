import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addWorkout } from "../../actions/workoutActions";

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

  static propTypes = {
    addWorkout: PropTypes.func.isRequired
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

    const newWorkout = {
      description,
      date,
      type,
      time,
      distance,
      distanceUnits,
      hour,
      minute,
      second
    };

    this.props.addWorkout(newWorkout);

    // await workoutAPI
    //   .post("api/workouts", {
    //     description,
    //     date,
    //     type,
    //     time,
    //     distance,
    //     distanceUnits,
    //     hour,
    //     minute,
    //     second
    //   })
    //   .then(() => {
    //     this.setState({ redirect: true });
    //   })
    //   .catch(err => console.log("ERROR", err));
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

// const mapStateToProps = state => ({
//   workout: state.workout
// })

export default connect(
  // mapStateToProps,
  null,
  { addWorkout }
)(CreateWorkout);
