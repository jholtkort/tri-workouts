import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateWorkout from "./workoutApp/CreateWorkout";
import DeleteWorkout from "./workoutApp/DeleteWorkout";
import ReadWorkout from "./workoutApp/ReadWorkout";
import UpdateWorkout from "./workoutApp/UpdateWorkout";
import Navbar from "../components/workoutApp/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route exact path="/" component={ReadWorkout} />
        <Route exact path="/create" component={CreateWorkout} />
        <Route exact path="/update" component={UpdateWorkout} />
        <Route exact path="/delete" component={DeleteWorkout} />
      </div>
    </Router>
  );
}

export default App;
