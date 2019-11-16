import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import WorkoutList from "./workouts/WorkoutList";

class Dashboard extends Component {
  renderGreeting() {
    switch (this.props.auth.isAuthenticated) {
      case true:
        return <h1 className="ml-3 mb-3">Welcome, {this.props.auth.name}</h1>;
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        {this.renderGreeting()}
        <WorkoutList />
        <div className="fixed-action-btn">
          <Link to="/workouts/create" className="btn-floating btn-large orange">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
