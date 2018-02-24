import * as React from "react";

type Props = {
  message: string;
};

const StatelessFunction: React.SFC<Props> = props => (
  <div>
    <h2 className="stateless__message">{props.message}</h2>
  </div>
);

export default StatelessFunction;
