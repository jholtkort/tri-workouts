import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      return (
        <Workout
          workout={workout}
          key={workout._id}
          onDeleteClick={this.onDeleteClick}
        />
      );
    });
  };

  renderContent = ({ loading, workouts }) => {
    switch (loading) {
      case false && !workouts.length:
        if (!workouts.length) {
          return (
            <h3>
              <Link to="/create">Hello, please add workouts</Link>
            </h3>
          );
        }

        return this.renderWorkouts();

      default:
        return "Loading...";
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          {this.renderContent(this.props.workout)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workout: state.workout
});

export default connect(mapStateToProps, { getWorkouts })(WorkoutList);
