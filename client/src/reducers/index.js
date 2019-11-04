import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import workoutReducer from "./workoutReducer";

export default combineReducers({
  workout: workoutReducer,
  form: formReducer
});
