import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ExampleConnectedRouteComponent from "./components/ExampleConnectedRouteComponent";

export default (
  <BrowserRouter>
    <div>
      <Route path="/" exact={true} component={ExampleConnectedRouteComponent} />
      <Route path="/:message" component={ExampleConnectedRouteComponent} />
    </div>
  </BrowserRouter>
);
