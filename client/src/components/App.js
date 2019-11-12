import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./workoutApp/Header";
import WorkoutList from "./workoutApp/WorkoutList";
import WorkoutCreate from "./workoutApp/WorkoutCreate";
import WorkoutUpdate from "./workoutApp/WorkoutUpdate";
import createBrowserHistory from "../history";

const App = () => {
  return (
    <Router history={createBrowserHistory}>
      <Header />
      <div className="main-app my-5">
        <Switch>
          <Route exact path="/" component={WorkoutList} />
          <Route path="/create" component={WorkoutCreate} />
          <Route path="/update/:id" component={WorkoutUpdate} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
