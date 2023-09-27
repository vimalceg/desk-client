import { SET_COUNT } from '../constants';

export default function setCount(counter) {
  return { type: SET_COUNT, data: counter };
}
