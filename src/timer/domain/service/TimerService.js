import start from "./start";
import stop from "./stop";
import getTimer from "./getTimer";

export default function CounterService(repo) {
  return {
    start: start(repo),
    stop: stop(repo),
    getTimer: getTimer(repo),
  };
}
