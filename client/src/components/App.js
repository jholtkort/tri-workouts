import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateWorkout from "./workoutApp/CreateWorkout";
import WorkoutList from "./workoutApp/WorkoutList";
import UpdateWorkout from "./workoutApp/UpdateWorkout";
import Navbar from "../components/workoutApp/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Route exact path="/" component={WorkoutList} />
        <Route exact path="/create" component={CreateWorkout} />
        <Route exact path="/update/:id" component={UpdateWorkout} />
      </div>
    </Router>
  );
};

export default App;
