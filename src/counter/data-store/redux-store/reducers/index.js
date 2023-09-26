import { INCREMENT, DECREMENT } from '../constants';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
    case DECREMENT:
      return action.data;
  }
  return state;
}
