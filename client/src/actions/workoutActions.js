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

export const setWorkoutsLoading = () => {
  return {
    type: WORKOUTS_LOADING
  };
};
