import React from "react";
import { Link } from "react-router-dom";
import WorkoutList from "./workouts/WorkoutList";

const Dashboard = () => {
  return (
    <div>
      <WorkoutList />
      <div className="fixed-action-btn">
        <Link to="/create" className="btn-floating btn-large orange">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
