import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createWorkout } from "../../actions/workoutActions";
import WorkoutForm from "./WorkoutForm";

class CreateWorkout extends Component {
  static propTypes = {
    createWorkout: PropTypes.func.isRequired
  };

  onSubmit = formValues => {
    console.log(formValues);
    this.props.createWorkout(formValues);
  };

  render() {
    return (
      <div>
        <WorkoutForm
          onSubmit={this.onSubmit}
          title="Create Workout"
          description=""
          date={new Date()}
          type=""
          distance={1}
          distanceUnits=""
          hour={1}
          minute={0}
          second={0}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createWorkout }
)(CreateWorkout);
