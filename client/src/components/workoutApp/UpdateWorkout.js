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

  handleDelete = () => {
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
            title="Update Workout"
            initialValues={_.pick(
              this.props.workout,
              "description",
              "date",
              "type",
              "time",
              "distance",
              "distanceUnits",
              "hour",
              "minute",
              "second"
            )}
            handleDelete={this.handleDelete}
            onSubmit={this.onSubmit}
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
