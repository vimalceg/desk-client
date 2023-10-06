import start from "./start";
import stop from "./stop";
import getTimer from "./getTimer";
import increment from "./increment";
export default function CounterService(repo, counterService) {
  let incrementFn = increment(repo, counterService);
  return {
    start: start(repo, incrementFn),
    stop: stop(repo),
    getTimer: getTimer(repo),
    increment: incrementFn,
  };
}
