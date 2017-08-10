import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { createExampleAction } from "../actions/example";
import { Action } from "../actions/types";
import { State } from "../types/state";

type OwnProps = {};

type StateProps = {
  flag: boolean;
};

type ActionProps = {
  createExampleAction: (flag: boolean) => Action;
};

type RouteProps = {
  message?: string;
};

export class ExampleConnectedRouteComponent extends React.Component<
  StateProps & ActionProps & OwnProps & RouteComponentProps<RouteProps>
> {
  toggleFlag = () => this.props.createExampleAction(!this.props.flag);

  render() {
    return (
      <div>
        <h2>
          {this.props.match.params.message || "No message."}
        </h2>
        <p>
          {this.props.flag ? "flag is set" : "flag is not set"}
        </p>
        <button onClick={this.toggleFlag}>Toggle the flag</button>
      </div>
    );
  }
}

const mapStateToProps = (
  state: State,
  ownProps: OwnProps
): StateProps & OwnProps => ({
  flag: state.example.flag,
  ...ownProps
});

const mapDispatchToProps = (dispatch: Dispatch<State>): ActionProps =>
  bindActionCreators({ createExampleAction }, dispatch);

export default connect<StateProps, ActionProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(ExampleConnectedRouteComponent);
