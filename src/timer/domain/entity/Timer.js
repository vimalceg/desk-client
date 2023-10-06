export default function Timer(timerObj) {
  let hasStart = timerObj.hasStart;
  let time = timerObj.time;
  function getTime() {
    return time;
  }
  function isStart() {
    return hasStart;
  }
  function setTime(timeLocal) {
    time = timeLocal;
  }

  return {
    getTime,
    setTime,
    isStart,
  };
}
