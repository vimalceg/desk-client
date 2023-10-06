import React from "react";

export default function Timer({ time, onStart, onStop }) {
  return (
    <div>
      {time}
      <button disabled={hasStart ? true : false} onClick={onStart}>
        Start
      </button>
      <button disabled={hasStart ? false : true} onClick={onStop}>
        Stop
      </button>
    </div>
  );
}
