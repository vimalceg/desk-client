export default function Timer() {
  let timerId = null;
  function start(cb) {
    timerId = setInterval(() => {
      cb();
    }, 1000);
  }
  function stop() {
    clearInterval(timerId);
  }
  return {
    start,
    stop,
  };
}
