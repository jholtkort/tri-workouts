import { User } from "./User";

export const FETCH_USER = "FETCH_USER";
export const LOGOUT_USER = "LOGOUT_USER";

interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: User;
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type AuthActionTypes = FetchUserAction | LogoutUserAction;
