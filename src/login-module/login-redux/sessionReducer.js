import { SET_USER_SESSION } from './constants';

export default function sessionReducer(state = null, action) {
  let { data, type } = action;
  if (type == SET_USER_SESSION) {
    return data;
  }
  return state;
}
