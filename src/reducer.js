import { combineReducers } from "redux";
import login from "./login-module/login-redux/sessionReducer";
import counter from "./counter/data-store/redux-store/reducers";
import uiState from "./counter/ui-store/redux-store/reducers";
import timer from "./timer/data-store/redux-store/timerReducer";
import tickets from "./ticket/data-store/redux-store/reducer";

// import counterCurrent from './counter-current/reducers';
// function ticket(state = {}, action) {
//   return state;
// }
function contact(state = {}, action) {
  return state;
}

export const staticReducers = {
  // ticket,
  contact,
  login,
  counter,
  uiState,
  timer,
  tickets,
  // counterCurrent,
};
export default combineReducers(staticReducers);
