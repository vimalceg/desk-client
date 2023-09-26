import { SET_USER_SESSION } from './constants';

export function setUserSession(session) {
  return {
    type: SET_USER_SESSION,
    data: session,
  };
}
