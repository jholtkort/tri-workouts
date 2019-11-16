import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import WorkoutList from "./workouts/WorkoutList";

const Dashboard = props => {
  console.log(props);
  return (
    <div>
      <h1 className="mb-3">Welcome, {props.auth.name}</h1>
      <WorkoutList />
      <div className="fixed-action-btn">
        <Link to="/workouts/create" className="btn-floating btn-large orange">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
