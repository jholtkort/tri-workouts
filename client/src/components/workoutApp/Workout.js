import React from "react";
import { Link } from "react-router-dom";
import "./Workout.css";

const Workout = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/update/${props.workout.id}`} id="workout-title">
            {props.workout.description}
          </Link>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.workout.date} at {props.workout.time}
        </h6>
        <h6 className="card-text">
          <div className="workout-stats">
            <li className="pr-3 mr-3">{props.workout.type}</li>
            <li className="pr-3 mr-3">
              {props.workout.distance} {props.workout.distanceUnits}
            </li>
            <li className="mr-3">
              {props.workout.hour} hr {props.workout.minute} min{" "}
              {props.workout.second} sec
            </li>
          </div>
        </h6>

        {/* <button
          onClick={() => props.handleDeleteClick(props.workout.id)}
          className="btn btn-danger"
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default Workout;
