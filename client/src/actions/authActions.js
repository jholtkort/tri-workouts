import axios from "axios";

import { FETCH_USER, LOGOUT_USER } from "../actions/types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/auth/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logoutUser = () => async dispatch => {
  dispatch({ type: LOGOUT_USER });
};
