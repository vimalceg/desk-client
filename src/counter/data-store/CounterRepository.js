import Counter from '../domain/entity/Counter';
export default function CounterRepository(store) {
  function handleIncrement(count) {
    return store.increment(count);
  }
  function handleDecrement(count) {
    return store.decrement(count);
  }
  function getCounter() {
    let counterEntity = Counter();
    counterEntity.setCount(store.getCounter());
    debugger;
    return counterEntity;
  }
  return {
    handleIncrement,
    handleDecrement,
    getCounter,
  };
}
