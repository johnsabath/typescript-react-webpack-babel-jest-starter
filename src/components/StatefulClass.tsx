import React from "react";

type State = {
  count: number;
};

export default class StatefulClass extends React.Component<{}, State> {
  state: State = {
    count: 0
  };

  incrementCounter = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <div>
        <p id="counter">Counter Value: {this.state.count}</p>
        <button id="increment-btn" onClick={this.incrementCounter}>
          Increment
        </button>
      </div>
    );
  }
}
