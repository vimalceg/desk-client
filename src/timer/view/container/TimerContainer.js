import React from 'react';
import Timer from '../component/Timer';
import useTimer from '../../controller/useTimer';

export default function TimerContainer() {
  let { onStart, onStop, time, hasStart } = useTimer();
  return (
    <Timer time={time} onStart={onStart} onStop={onStop} hasStart={hasStart} />
  );
}
