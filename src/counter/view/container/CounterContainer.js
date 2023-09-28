import React from "react";
import Counter from "../component/Counter";
import useCounter from "../../controller/useCounter";

/* hooks way */
export default function CounterContainer() {
  let {
    isLoading,
    counter,
    error,
    textColor,
    handleDecrement,
    handleIncrement,
    handleOddIncrement,
  } = useCounter();
  console.log("component", error);
  if (isLoading) {
    return <div>Counter Loading</div>;
  } else if (error.errorMessage) {
    return <div>{error.errorMessage}</div>;
  }
  return (
    <Counter
      textColor={textColor}
      count={counter}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onOddIncrement={handleOddIncrement}
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
