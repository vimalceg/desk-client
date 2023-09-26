export default function CounterService(repo) {
  function handleIncrement(count) {
    repo.handleIncrement(count + 1);
  }
  function handleDecrement(count) {
    repo.handleDecrement(count - 1);
  }
  function handleOddIncrement(count) {
    if (count % 2 === 1) {
      repo.handleIncrement(count + 1);
    } else {
      console.log('count is even');
    }
  }

  function getCounter() {
    return repo.getCounter();
  }
  return {
    handleIncrement,
    handleDecrement,
    handleOddIncrement,
    getCounter,
  };
}
