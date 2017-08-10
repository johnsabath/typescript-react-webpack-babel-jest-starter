import { Reducer } from "redux";
import { Action } from "../actions/types";
import { ExampleState } from "../types/state";

const initialState: ExampleState = {
  flag: false
};

const reducer = (
  state: ExampleState = initialState,
  action: Action
): ExampleState => {
  switch (action.type) {
    case "EXAMPLE_ACTION":
      return {
        flag: action.flag
      };

    case "ANOTHER_ACTION":
      return {
        flag: false
      };
  }

  return state;
};

export default reducer;
