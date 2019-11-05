import _ from "lodash";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import WorkoutForm from "./WorkoutForm";
import {
  getWorkoutById,
  updateWorkout,
  deleteWorkout
} from "../../actions/workoutActions";

class UpdateWorkout extends Component {
  static propTypes = {
    getWorkoutById: PropTypes.func.isRequired,
    updateWorkout: PropTypes.func.isRequired,
    deleteWorkout: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getWorkoutById(this.props.match.params.id);
  }

  handleDeleteClick = () => {
    this.props.deleteWorkout(this.props.match.params.id);
  };

  onSubmit = formValues => {
    this.props.updateWorkout(this.props.match.params.id, formValues);
  };

  render() {
    if (this.props.workout._id === this.props.match.params.id) {
      return (
        <div>
          <WorkoutForm
            onSubmit={this.onSubmit}
            handleDeleteClick={this.handleDeleteClick}
            title="Update Workout"
            description={this.props.workout.description}
            date={this.props.workout.date}
            type={this.props.workout.type}
            distance={this.props.workout.distance}
            distanceUnits={this.props.workout.distanceUnits}
            hour={this.props.workout.hour}
            minute={this.props.workout.minute}
            second={this.props.workout.second}
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = state => {
  return { workout: state.workout.workouts };
};

export default connect(
  mapStateToProps,
  { getWorkoutById, updateWorkout, deleteWorkout }
)(UpdateWorkout);
