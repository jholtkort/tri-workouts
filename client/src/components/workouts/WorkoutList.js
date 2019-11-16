import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

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
        <Row key={workout._id}>
          <Col xs="12" md={{ size: 6, offset: 4 }}>
            <Workout workout={workout} onDeleteClick={this.onDeleteClick} />
          </Col>
        </Row>
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
    return <div>{this.renderContent(this.props.workout)}</div>;
  }
}

const mapStateToProps = state => ({
  workout: state.workout
});

export default connect(mapStateToProps, { getWorkouts })(WorkoutList);
