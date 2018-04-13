import React from "react";
import renderer from "react-test-renderer";

import StatelessFunction from "components/StatelessFunction/StatelessFunction";

describe("<StatelessFunction />", () => {
  it("Matches snapshot", () => {
    const tree = renderer.create(<StatelessFunction message="Hello World" />);
    expect(tree).toMatchSnapshot();
  });
});
