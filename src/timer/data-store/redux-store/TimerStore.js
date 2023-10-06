import { bindActionCreators } from "redux";

/* actions*/
function setTimer({ time }) {
  return { type: "SET_TIMER", data: time };
}
function setTimerStatus(status) {
  return { type: "SET_TIMER_STATUS", data: status };
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
  ...bindActionCreators({ setTimer, setTimerStatus }, store.dispatch),
  getTimer: () => getTimerSelector(store.getState()),
  hasLoading: () => hasLoadingSelector(store.getState()),
});
