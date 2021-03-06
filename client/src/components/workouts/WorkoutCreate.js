import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createWorkout } from "../../actions/workoutActions";
import WorkoutForm from "./WorkoutForm";

class WorkoutCreate extends Component {
  static propTypes = {
    createWorkout: PropTypes.func.isRequired
  };

  onSubmit = formValues => {
    this.props.createWorkout(formValues);
  };

  render() {
    return (
      <div>
        <WorkoutForm onSubmit={this.onSubmit} title="Create Workout" />
      </div>
    );
  }
}

export default connect(null, { createWorkout })(WorkoutCreate);
