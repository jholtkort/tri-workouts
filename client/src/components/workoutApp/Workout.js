import React from "react";
import { Link } from "react-router-dom";

const Workout = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.workout.description}</h5>
        <h6 className="card-title">{props.workout.date}</h6>
        <h6 className="card-subtitle">Type: {props.workout.type}</h6>
        <p className="card-text">Time: {props.workout.duration}</p>
        <p className="card-text">Distance: {props.workout.distance}</p>
        <button className="btn btn-primary">
          <Link to={`/update/${props.workout.id}`} className="btn btn-primary">
            Update
          </Link>
        </button>
        <button
          onClick={() => props.handleDeleteClick(props.workout.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Workout;
