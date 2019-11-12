import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import workoutReducer from "./workoutReducer";

export default combineReducers({
  auth: authReducer,
  workout: workoutReducer,
  form: formReducer
});
