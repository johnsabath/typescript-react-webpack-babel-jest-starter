import "babel-polyfill";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import routes from "./routes";
import store from "./store";

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById("app")
);
