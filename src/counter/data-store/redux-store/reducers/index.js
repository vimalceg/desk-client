import { INCREMENT, DECREMENT, SET_COUNT } from '../constants';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
    case DECREMENT:
    case SET_COUNT:
      return action.data;
  }
  return state;
}

