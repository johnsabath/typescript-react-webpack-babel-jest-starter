import * as React from "react";
import { compose, createStore } from "redux";
import reducers from "./reducers";
import { State } from "./types/state";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore<State>(reducers, composeEnhancers());
