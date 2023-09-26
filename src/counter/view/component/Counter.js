import React from 'react';

export default function Counter({
  count,
  textColor,
  onIncrement,
  onDecrement,
  onOddIncrement,
}) {
  return (
    <div style={{ color: textColor }}>
      <button onClick={onDecrement}>-</button> {count}{' '}
      <button onClick={onIncrement}>+</button>{' '}
      <button onClick={onOddIncrement}>ODD +</button>
    </div>
  );
}
