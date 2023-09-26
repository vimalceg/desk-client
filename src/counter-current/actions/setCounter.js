import * as CONST from '../constants';

export default function setCounter(count) {
  return { type: CONST.SET_COUNTER, data: count };
}
