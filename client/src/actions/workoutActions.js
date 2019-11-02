import {
  GET_WORKOUTS,
  ADD_WORKOUT,
  EDIT_WORKOUT,
  DELETE_WORKOUT,
  WORKOUTS_LOADING
} from "./types";

import workoutAPI from "../api/workoutAPI";

export const getWorkouts = () => dispatch => {
  dispatch(setWorkoutsLoading());

  workoutAPI
    .get("/api/workouts")
    .then(res =>
      dispatch({
        type: GET_WORKOUTS,
        payload: res.data
      })
    )
    .catch(err => console.log("ERROR", err));
};

export const addWorkout = workout => dispatch => {
  workoutAPI
    .post("/api/workouts", workout)
    .then(res =>
      // console.log(res)
      dispatch({
        type: ADD_WORKOUT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));

  // await workoutAPI
  //   .post("api/workouts", {
  //     description,
  //     date,
  //     type,
  //     time,
  //     distance,
  //     distanceUnits,
  //     hour,
  //     minute,
  //     second
  //   })
  //   .then(() => {
  //     this.setState({ redirect: true });
  //   })
  //   .catch(err => console.log("ERROR", err));
};

export const setWorkoutsLoading = () => {
  return {
    type: WORKOUTS_LOADING
  };
};
