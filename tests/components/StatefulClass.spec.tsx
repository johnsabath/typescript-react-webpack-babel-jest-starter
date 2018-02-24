import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import StatefulClass from "components/StatefulClass";

describe("<StatefulClass />", () => {
  it("Matches snapshot", () => {
    const tree = renderer.create(<StatefulClass />);
    expect(tree).toMatchSnapshot();
  });

  it("Clicking the button increments the counter", () => {
    const wrapper = shallow(<StatefulClass />);

    expect(wrapper.find("#counter").html()).toContain("0");
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter").html()).toContain("1");
  });
});
