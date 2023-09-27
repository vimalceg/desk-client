import Counter from '../domain/entity/Counter';
import fetchCount from './api/fetchCount';
export default function CounterRepository(store) {
  function handleIncrement(count) {
    return store.increment(count);
  }
  function handleDecrement(count) {
    return store.decrement(count);
  }
  function fetchCounter() {
    return fetchCount().then((res) => {
      store.setCount(res.counter);
    });
  }

  function getCounter() {
    let counterEntity = Counter();
    counterEntity.setCount(store.getCounter());
    return counterEntity;
  }
  return {
    handleIncrement,
    handleDecrement,
    getCounter,
    fetchCounter,
  };
}
