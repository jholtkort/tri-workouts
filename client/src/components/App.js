import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "../actions/index";

import "./App.css";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import WorkoutCreate from "./workouts/WorkoutCreate";
import WorkoutUpdate from "./workouts/WorkoutUpdate";
import NotFound from "./NotFound";
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
            <PrivateRoute exact path="/workouts" component={Dashboard} />
            <PrivateRoute exact path="/create" component={WorkoutCreate} />
            <PrivateRoute exact path="/update/:id" component={WorkoutUpdate} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, { fetchUser })(App);
