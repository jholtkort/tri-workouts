import axios from "axios";
import { Dispatch } from "redux";

import { Workout } from "../types/workout/Workout";
import {
  GET_WORKOUTS,
  CREATE_WORKOUT,
  GET_WORKOUT_BY_ID,
  UPDATE_WORKOUT,
  DELETE_WORKOUT,
  WORKOUTS_LOADING
} from "../types/workout/actions";
import { AppActions } from "../types";

import history from "../history";

export const getWorkouts = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch(setWorkoutsLoading());

  try {
    const res = await axios.get("/api/workouts");

    dispatch({
      type: GET_WORKOUTS,
      payload: res.data
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const createWorkout = (formValues: Workout) => async (
  dispatch: Dispatch<AppActions>
) => {
  try {
    const res = await axios.post("/api/workouts", formValues);

    dispatch({
      type: CREATE_WORKOUT,
      payload: res.data
    });

    history.push("/workouts");
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const getWorkoutById = (id: string) => async (
  dispatch: Dispatch<AppActions>
) => {
  try {
    const res = await axios.get(`/api/workouts/${id}`);

    dispatch({
      type: GET_WORKOUT_BY_ID,
      payload: res.data
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const updateWorkout = (id: string, formValues: Workout) => async (
  dispatch: Dispatch<AppActions>
) => {
  try {
    const res = await axios.put(`/api/workouts/${id}`, formValues);

    dispatch({ type: UPDATE_WORKOUT, payload: res.data });

    history.push("/workouts");
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const deleteWorkout = (id: string) => async (
  dispatch: Dispatch<AppActions>
) => {
  try {
    await axios.delete(`/api/workouts/${id}`);

    dispatch({ type: DELETE_WORKOUT, payload: id });
  } catch (err) {
    console.log("ERROR", err);
  }
};

export const setWorkoutsLoading = (): AppActions => {
  return {
    type: WORKOUTS_LOADING
  };
};
