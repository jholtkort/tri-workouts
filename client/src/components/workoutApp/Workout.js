import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

import "./Workout.css";

const Workout = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <Link to={`/update/${props.workout._id}`} id="workout-title">
            {props.workout.description}
          </Link>
        </CardTitle>

        <CardSubtitle className="mb-2 text-muted">
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
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Workout;
