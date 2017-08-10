import * as History from "history";
import { RouteComponentProps } from "react-router";

function mockRouteProps(): RouteComponentProps<any> {
  return {
    match: {
      params: {},
      isExact: false,
      path: "",
      url: ""
    },
    location: {
      pathname: "",
      search: "",
      state: {},
      hash: "",
      key: ""
    },
    history: {
      length: 0,
      action: "REPLACE",
      location: {
        pathname: "",
        search: "",
        state: {},
        hash: "",
        key: ""
      },
      push: jest.fn(),
      replace: jest.fn(),
      go: jest.fn(),
      goBack: jest.fn(),
      goForward: jest.fn(),
      block: jest.fn(),
      listen: jest.fn(),
      createHref: jest.fn()
    }
  };
}

export default mockRouteProps;
