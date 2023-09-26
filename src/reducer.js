import { combineReducers } from 'redux';
import login from './login-module/login-redux/sessionReducer';
import counter from './counter/data-store/redux-store/reducers';
import counterCurrent from './counter-current/reducers';
function ticket(state = {}, action) {
  return state;
}
function contact(state = {}, action) {
  return state;
}

export const staticReducers = {
  ticket,
  contact,
  login,
  counter,
  counterCurrent,
};
export default combineReducers(staticReducers);
