// This import will be replaced with polyfill imports by babel-preset-env
import "babel-polyfill";

import * as React from "react";
import { render } from "react-dom";

import "assets/styles/main.scss";
import StatefulClassComponent from "components/StatefulClass";
import StatelessFunctionComponent from "components/StatelessFunction";

render(
  <div>
    <StatelessFunctionComponent message="Hello World" />
    <StatefulClassComponent />
  </div>,
  document.getElementById("app")
);
