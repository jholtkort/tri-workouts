import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "../actions/index";

import "./App.css";
import Header from "./Header";
import Landing from "./Landing";
import WorkoutList from "./workouts/WorkoutList";
import WorkoutCreate from "./workouts/WorkoutCreate";
import WorkoutUpdate from "./workouts/WorkoutUpdate";
import createBrowserHistory from "../history";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router history={createBrowserHistory}>
        <Header />
        <div className="main-app my-5">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/workouts" component={WorkoutList} />
            <Route path="/create" component={WorkoutCreate} />
            <Route path="/update/:id" component={WorkoutUpdate} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
