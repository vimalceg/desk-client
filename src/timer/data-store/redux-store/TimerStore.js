import { bindActionCreators } from "redux";

/* actions*/
function setTimer({ time }) {
  return { type: "SET_TIMER", data: time };
}
function startTimer({ time }) {
  return { type: "START_TIMER", data: time };
}
function stopTimer({ time }) {
  return { type: "STOP_TIMER", data: time };
}

/* reducer*/
function getTimerSelector(state) {
  return state.time;
}
function hasLoadingSelector(state) {
  return state.hasLoading;
}

export default (store) => ({
  ...store,
  ...bindActionCreators({ setTimer, startTimer, stopTimer }, store.dispatch),
  getTimer: () => getTimerSelector(store.getState()),
  hasLoading: () => hasLoadingSelector(store.getState()),
});
