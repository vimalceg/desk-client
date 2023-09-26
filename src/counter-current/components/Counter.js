import React from 'react';

export default function Counter({
  count,
  onIncrement,
  onDecrement,
  onOddIncrement,
}) {
  return (
    <div>
      <button onClick={onDecrement}>-</button> {count}{' '}
      <button onClick={onIncrement}>+</button>{' '}
      <button onClick={onOddIncrement}>ODD +</button>
    </div>
  );
}
