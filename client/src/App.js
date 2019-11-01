import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/workoutApp/Navbar";
import WorkoutList from "./components/workoutApp/WorkoutList";
import CreateWorkout from "./components/workoutApp/CreateWorkout";
import UpdateWorkout from "./components/workoutApp/UpdateWorkout";

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
