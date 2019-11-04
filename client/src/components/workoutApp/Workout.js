import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { deleteWorkout } from "../../actions/workoutActions";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

import "./Workout.css";

class Workout extends Component {
  onDeleteClick = id => {
    this.props.deleteWorkout(this.props.workout._id);
  };

  render() {
    return (
      <Card>
        <CardBody>
          <Button onClick={this.onDeleteClick}>Delete</Button>
          <CardTitle>
            <Link to={`/update/${this.props.workout._id}`} id="workout-title">
              {this.props.workout.description}
            </Link>
          </CardTitle>

          {/* <CardSubtitle className="mb-2 text-muted">
              {props.workout.date} at {props.workout.time}
            </CardSubtitle>
    
            <CardText className="workout-stats">
              <li className="pr-3 mr-3">{props.workout.type}</li>
              <li className="pr-3 mr-3">
                {props.workout.distance} {props.workout.distanceUnits}
              </li>
              <li className="mr-3">
                {props.workout.hour} hr {props.workout.minute} min{" "}
                {props.workout.second} sec
              </li>
            </CardText> */}
        </CardBody>
      </Card>
    );
  }
}

export default connect(
  null,
  { deleteWorkout }
)(Workout);
