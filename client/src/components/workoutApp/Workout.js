import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";

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
  onDeleteClick = () => {
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
          <CardSubtitle className="mb-2 text-muted">
            <Moment format="MM/DD/YYYY">{this.props.workout.date}</Moment>
          </CardSubtitle>

          <CardText className="workout-stats">
            <li className="pr-3 mr-3">{this.props.workout.type}</li>
            <li className="pr-3 mr-3">
              {this.props.workout.distance} {this.props.workout.distanceUnits}
            </li>
            <li className="mr-3">
              {this.props.workout.hour} hr {this.props.workout.minute} min{" "}
              {this.props.workout.second} sec
            </li>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default connect(
  null,
  { deleteWorkout }
)(Workout);
