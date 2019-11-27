import { WorkoutActionTypes } from "./workout/actions";
import { AuthActionTypes } from "./auth/actions";

export type AppActions = WorkoutActionTypes | AuthActionTypes;
