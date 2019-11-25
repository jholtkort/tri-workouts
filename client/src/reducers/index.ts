import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import workoutReducer from "./workoutReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  workout: workoutReducer,
  form: formReducer
});

export type RootState = ReturnType<typeof rootReducer>;
