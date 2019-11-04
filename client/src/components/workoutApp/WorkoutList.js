import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getWorkouts } from "../../actions/workoutActions";
import Workout from "./Workout";

class WorkoutList extends Component {
  static propTypes = {
    getWorkouts: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getWorkouts();
  }

  renderWorkouts = () => {
    return this.props.workout.workouts.map(workout => {
      return <Workout workout={workout} key={workout._id} />;
    });
  };

  render() {
    if (this.props.workout.loading) {
      return <Container className="mt-3">Loading...</Container>;
    }

    if (!this.props.workout.loading && !this.props.workout.workouts.length) {
      return (
        <Container className="mt-3">
          <h3>
            <Link to="/create">Hello, please add workouts</Link>
          </h3>
        </Container>
      );
    }
    return <Container className="mt-3">{this.renderWorkouts()}</Container>;
  }
}

const mapStateToProps = state => ({
  workout: state.workout
});

export default connect(
  mapStateToProps,
  { getWorkouts }
)(WorkoutList);
