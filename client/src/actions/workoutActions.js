import {
  GET_WORKOUTS,
  CREATE_WORKOUT,
  GET_WORKOUT_BY_ID,
  UPDATE_WORKOUT,
  DELETE_WORKOUT,
  WORKOUTS_LOADING
} from "./types";
import history from "../history";

import workoutAPI from "../api/workoutAPI";

export const getWorkouts = () => async dispatch => {
  dispatch(setWorkoutsLoading());

  try {
    const res = await workoutAPI.get("/api/workouts");

    dispatch({
      type: GET_WORKOUTS,
      payload: res.data
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const createWorkout = formValues => async dispatch => {
  try {
    const res = await workoutAPI.post("/api/workouts", formValues);

    dispatch({
      type: CREATE_WORKOUT,
      payload: res.data
    });

    history.push("/");
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const getWorkoutById = id => async dispatch => {
  try {
    const res = await workoutAPI.get(`/api/workouts/${id}`);

    dispatch({
      type: GET_WORKOUT_BY_ID,
      payload: res.data
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const updateWorkout = (id, formValues) => async dispatch => {
  try {
    const res = await workoutAPI.put(`/api/workouts/${id}`, formValues);

    dispatch({ type: UPDATE_WORKOUT, payload: res.data });

    history.push("/");
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const deleteWorkout = id => async dispatch => {
  try {
    await workoutAPI.delete(`/api/workouts/${id}`);

    dispatch({ type: DELETE_WORKOUT, payload: id });
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const setWorkoutsLoading = () => {
  return {
    type: WORKOUTS_LOADING
  };
};
