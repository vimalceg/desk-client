import { combineReducers } from 'redux';
import login from './login-redux/sessionReducer';

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
};
export default combineReducers(staticReducers);
