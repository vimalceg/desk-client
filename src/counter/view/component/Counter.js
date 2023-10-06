import React from "react";

export default function Counter({
  count,
  textColor,
  onIncrement,
  onDecrement,
  onOddIncrement,
  buttonDisabled,
}) {
  return (
    <div style={{ color: textColor }}>
      <button disabled={buttonDisabled} onClick={onDecrement}>
        -
      </button>{" "}
      {count}{" "}
      <button disabled={buttonDisabled} onClick={onIncrement}>
        +
      </button>{" "}
      <button disabled={buttonDisabled} onClick={onOddIncrement}>
        ODD +
      </button>
    </div>
  );
}
