import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import WorkoutForm from "./WorkoutForm";
import { getWorkoutById, updateWorkout } from "../../actions";

class UpdateWorkout extends Component {
  static propTypes = {
    getWorkoutById: PropTypes.func.isRequired,
    updateWorkout: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getWorkoutById(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateWorkout(this.props.match.params.id, formValues);
  };

  render() {
    if (this.props.workout._id === this.props.match.params.id) {
      return (
        <div>
          <WorkoutForm onSubmit={this.onSubmit} title="Update Workout" />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = state => {
  return { workout: state.workout.workout };
};

export default connect(mapStateToProps, { getWorkoutById, updateWorkout })(
  UpdateWorkout
);
