import axios from "axios";
import { Dispatch } from "redux";

import { FETCH_USER, LOGOUT_USER } from "../types/auth/actions";
import { AppActions } from "../types";

export const fetchUser = () => async (dispatch: Dispatch<AppActions>) => {
  const res = await axios.get("/auth/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logoutUser = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch({ type: LOGOUT_USER });
};
