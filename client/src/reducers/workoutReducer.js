import _ from "lodash";

import {
  GET_WORKOUTS,
  GET_WORKOUT_BY_ID,
  CREATE_WORKOUT,
  UPDATE_WORKOUT,
  DELETE_WORKOUT,
  WORKOUTS_LOADING
} from "../actions/types";

const initialState = {
  workouts: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKOUTS:
      return {
        ...state,
        workouts: action.payload,
        loading: false
      };
    case WORKOUTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case CREATE_WORKOUT:
      return {
        ...state,
        workouts: [...state.workouts, action.payload]
      };
    case GET_WORKOUT_BY_ID:
      return {
        ...state,
        workouts: action.payload
      };
    case UPDATE_WORKOUT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter(
          workout => workout._id !== action.payload
        )
      };
    default:
      return state;
  }
};
