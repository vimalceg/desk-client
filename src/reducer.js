import { combineReducers } from 'redux';

function ticket(state = {}, action) {
  return state;
}
function contact(state = {}, action) {
  return state;
}

export const staticReducers = {
  ticket,
  contact,
};
export default combineReducers(staticReducers);
