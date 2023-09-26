export default function CounterRepository(store) {
  function handleIncrement(count) {
    return store.increment(count);
  }
  function handleDecrement(count) {
    return store.decrement(count);
  }
  function getCounter() {
    return store.getCounter();
  }
  return {
    handleIncrement,
    handleDecrement,
    getCounter,
  };
}
