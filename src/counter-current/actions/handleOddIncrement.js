import handleIncrement from './handleIncrement';
import getCounter from '../selectors/getCounter';
export default function handleOddIncrement() {
  return (dispatch, getState) => {
    let count = getCounter(getState());
    if (count % 2 === 1) {
      dispatch(handleIncrement());
    } else {
      console.log('count is even');
    }
  };
}
