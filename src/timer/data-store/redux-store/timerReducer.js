export default function timerReducer(
  state = { isStart: true, time: 0 },
  action,
) {
  let { type, data } = action;
  switch (type) {
    case "SET_TIMER":
      return { ...state, time: data };
    case "START_TIMER":
      return { ...state, isStart: true };
    case "STOP_TIMER":
      return { ...state, isStart: false };
  }
  return state;
}
