import setCounter from './setCounter';

export default function fetchCounter() {
  return (dispatch) => {
    return fetch('/api/counter.json')
      .then((res) => res.json())
      .then((res) => {
        dispatch(setCounter(res.counter));
      });
  };
}
