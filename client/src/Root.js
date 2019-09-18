import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "reducers";

export default ({ children, inititalState = {} }) => {
  const store = createStore(
    reducers,
    inititalState,
    applyMiddleware(reduxPromise)
  );

  return <Provider store={store}>{children}</Provider>;
};
