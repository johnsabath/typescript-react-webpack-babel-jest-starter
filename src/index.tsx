// This import will be replaced with polyfill imports by babel-preset-env
import "babel-polyfill";

import React from "react";
import { render } from "react-dom";

import StatefulClassComponent from "components/StatefulClass";
import StatelessFunctionComponent from "components/StatelessFunction/StatelessFunction";

render(
  <div>
    <StatelessFunctionComponent message="Hello World" />
    <StatefulClassComponent />
  </div>,
  document.getElementById("app")
);
