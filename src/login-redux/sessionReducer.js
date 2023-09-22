import { SET_USER_SESSION } from './constants';
import { createEmptySession } from './login/SessionService';

export default function sessionReducer(state = createEmptySession(), action) {
  let { data, type } = action;
  if (type == SET_USER_SESSION) {
    return data;
  }
  return state;
}
