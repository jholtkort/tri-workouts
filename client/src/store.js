import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

import rootReducer from "./reducers";

const middleWare = [thunk];

const initialState = {};

// const composeEnhancers = composeWithDevTools({
//   realtime: true,
//   name: "Tri Workouts",
//   hostname: "localhost",
//   port: 1024
// });

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(...middleWare))
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
