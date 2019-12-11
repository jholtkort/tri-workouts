import { FETCH_USER, LOGOUT_USER } from "../actions/types";

export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  _id: string;
  googleId: number;
  name: string;
}

const initialState = {
  isAuthenticated: false,
  loading: true,
  _id: null,
  googleId: null,
  name: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      if (action.payload) {
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          _id: action.payload._id,
          googleId: action.payload.googleId,
          name: action.payload.name
        };
      } else {
        return {
          ...state,
          loading: false
        };
      }

    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        _id: null,
        googleId: null,
        name: null
      };
    default:
      return state;
  }
};
// export default (state = null, action) => {
//   switch (action.type) {
//     case FETCH_USER:
//       return action.payload || false;
//     default:
//       return state;
//   }
// };
