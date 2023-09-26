import * as CONST from '../constants';

export default function counter(state = 0, action) {
  switch (action.type) {
    case CONST.INCREMENT:
      return state + 1;
    case CONST.DECREMENT:
      return state - 1;
    case CONST.SET_COUNTER:
      return action.data;
  }
  return state;
}
