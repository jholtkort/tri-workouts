import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateWorkout from "./workoutApp/CreateWorkout";
import DeleteWorkout from "./workoutApp/DeleteWorkout";
import ReadWorkout from "./workoutApp/ReadWorkout";
import UpdateWorkout from "./workoutApp/UpdateWorkout";

function App() {
  return (
    <Router>
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
