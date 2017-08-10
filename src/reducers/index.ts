import { combineReducers } from "redux";
import example from "../reducers/example";
import { State } from "../types/state";

export default combineReducers<State>({
  example
});
