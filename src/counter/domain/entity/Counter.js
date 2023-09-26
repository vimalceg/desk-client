export default function Counter() {
  let counter = null;
  function getCount() {
    return counter;
  }
  function setCount(countLocal) {
    counter = countLocal;
  }
  return {
    getCount,
    setCount,
  };
}
