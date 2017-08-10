import { shallow } from "enzyme";
import * as React from "react";
import { ExampleConnectedRouteComponent } from "../../components/ExampleConnectedRouteComponent";
import mockRouteProps from "./utils/mockRouteProps";

describe("ExampleConnectedRouteComponent", () => {
  it("matches snapshot", () => {
    const routeProps = mockRouteProps();

    const tree = shallow(
      <ExampleConnectedRouteComponent
        flag={true}
        createExampleAction={jest.fn()}
        {...routeProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it("Clicking button calls createExampleAction", () => {
    const mockCreateExampleAction = jest.fn();
    const routeProps = mockRouteProps();
    const component = shallow(
      <ExampleConnectedRouteComponent
        flag={false}
        createExampleAction={mockCreateExampleAction}
        {...routeProps}
      />
    );

    expect(mockCreateExampleAction).not.toHaveBeenCalled();
    component.find("button").simulate("click");
    expect(mockCreateExampleAction).toHaveBeenCalled();
  });
});
