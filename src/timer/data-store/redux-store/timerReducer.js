export default function timerReducer(
  state = { hasStart: false, time: 0 },
  action,
) {
  let { type, data } = action;
  switch (type) {
    case "SET_TIMER":
      return { ...state, time: data };
    case "SET_TIMER_STATUS":
      return { ...state, hasStart: data };
  }
  return state;
}
