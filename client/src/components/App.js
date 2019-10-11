import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import CreateWorkout from "./workoutApp/CreateWorkout";
import WorkoutList from "./workoutApp/WorkoutList";
import UpdateWorkout from "./workoutApp/UpdateWorkout";
import Navbar from "./workoutApp/Navbar";

const App = () => {
  return (
    <Router className="test">
      <Navbar />
      <div className="main-app">
        <Route exact path="/" component={WorkoutList} />
        <Route exact path="/create" component={CreateWorkout} />
        <Route exact path="/update/:id" component={UpdateWorkout} />
      </div>
    </Router>
  );
};

export default App;
