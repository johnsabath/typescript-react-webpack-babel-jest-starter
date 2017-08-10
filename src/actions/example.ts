import { Action } from "./types";

export const createExampleAction = (flag: boolean): Action => ({
  type: "EXAMPLE_ACTION",
  flag
});
