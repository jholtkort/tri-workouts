import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./workoutApp/Navbar";
import WorkoutList from "./workoutApp/WorkoutList";
import CreateWorkout from "./workoutApp/CreateWorkout";
import UpdateWorkout from "./workoutApp/UpdateWorkout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-app">
        <Switch>
          <Route exact path="/" component={WorkoutList} />
          <Route path="/create" component={CreateWorkout} />
          <Route path="/update/:id" component={UpdateWorkout} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
