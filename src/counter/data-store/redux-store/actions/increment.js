import { INCREMENT } from '../constants';

export default function increment(counter) {
  return { type: INCREMENT, data: counter };
}
