import { DECREMENT } from '../constants';

export default function decrement(counter) {
  return { type: DECREMENT, data: counter };
}
