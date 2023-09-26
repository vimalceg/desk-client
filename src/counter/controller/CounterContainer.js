import React from 'react';
import Counter from '../view/Counter';
import useCounter from './useCounter';

/* hooks way */
export default function CounterContainer1() {
  let { counter, handleDecrement, handleIncrement, handleOddIncrement } =
    useCounter();
  return (
    <Counter
      count={counter}
      onIncrement={() => handleIncrement(counter)}
      onDecrement={() => handleDecrement(counter)}
      onOddIncrement={() => handleOddIncrement(counter)}
    />
  );
}

/* wrapper way*/
// function CounterContainer(props) {
//   let { counter, handleDecrement, handleIncrement } = props;
//   return (
//     <Counter
//       count={counter}
//       onIncrement={handleIncrement}
//       onDecrement={handleDecrement}
//     />
//   );
// }
// export default connect(
//   (state) => {
//     return {
//       counter: state.counter || 0,
//     };
//   },
//   { handleIncrement: increment, handleDecrement: decrement }
// )(CounterContainer);
