import React from 'react';
import {
  handleIncrement,
  handleDecrement,
  handleOddIncrement,
} from '../actions';
function CounterContainer(props) {
  return <Counter count={props.count} />;
}

export default connect(
  (state) => {
    counter: getCounter(state);
  },
  {
    handleIncrement,
    handleDecrement,
    handleOddIncrement,
  }
);
