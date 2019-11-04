import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import Navbar from "./components/workoutApp/Navbar";
import WorkoutList from "./components/workoutApp/WorkoutList";
import CreateWorkout from "./components/workoutApp/CreateWorkout";
import UpdateWorkout from "./components/workoutApp/UpdateWorkout";
import createBrowserHistory from "./history";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory}>
        <Navbar />
        <div className="main-app">
          <Switch>
            <Route exact path="/" component={WorkoutList} />
            <Route path="/create" component={CreateWorkout} />
            <Route path="/update/:id" component={UpdateWorkout} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
