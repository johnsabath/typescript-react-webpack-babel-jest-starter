import * as React from "react";

import styles from "./StatelessFunction.scss";

type Props = {
  message: string;
};

const StatelessFunction: React.SFC<Props> = props => (
  <div>
    <h2 className={styles.message}>{props.message}</h2>
  </div>
);

export default StatelessFunction;
