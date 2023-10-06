import TimerClient from "./Timer";
import Timer from "../domain/entity/Timer";
let timerClient = TimerClient();

export default function TimerRepository(dataStore) {
  function start(increment) {
    timerClient.start(() => {
      let timerObj = increment(getTimer());
      dataStore.setTimer({ time: timerObj.getTime() });
    });
  }
  function stop() {
    timerClient.stop();
  }
  function getTimer() {
    return Timer(dataStore.getState().timer);
  }
  return { start, stop, getTimer };
}
global.TimerRepository = TimerRepository;
