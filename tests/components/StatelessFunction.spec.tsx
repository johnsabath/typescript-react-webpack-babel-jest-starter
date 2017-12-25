import * as React from "react";
import * as renderer from "react-test-renderer";

import StatelessFunction from "components/StatelessFunction";

describe("<StatelessFunction />", () => {
  it("Matches snapshot", () => {
    const tree = renderer.create(<StatelessFunction message="Hello World" />);
  });
});
