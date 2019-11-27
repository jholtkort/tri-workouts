import { Workout } from "./Workout";

export const GET_WORKOUTS = "GET_WORKOUTS";
export const CREATE_WORKOUT = "ADD_WORKOUT";
export const UPDATE_WORKOUT = "UPDATE_WORKOUT";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
export const WORKOUTS_LOADING = "WORKOUTS_LOADING";
export const GET_WORKOUT_BY_ID = "GET_WORKOUT_BY_ID";

interface GetWorkoutAction {
  type: typeof GET_WORKOUTS;
  payload: Workout[];
}

interface CreateWorkoutAction {
  type: typeof CREATE_WORKOUT;
  payload: Workout;
}

interface GetWorkoutByIdAction {
  type: typeof GET_WORKOUT_BY_ID;
  payload: Workout;
}

interface UpdateWorkoutAction {
  type: typeof UPDATE_WORKOUT;
  payload: Workout;
}

interface DeleteWorkoutAction {
  type: typeof DELETE_WORKOUT;
  payload: string;
}

interface SetWorkoutsLoadingAction {
  type: typeof WORKOUTS_LOADING;
}

export type WorkoutActionTypes =
  | GetWorkoutAction
  | CreateWorkoutAction
  | GetWorkoutByIdAction
  | UpdateWorkoutAction
  | DeleteWorkoutAction
  | SetWorkoutsLoadingAction;
