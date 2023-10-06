import start from "./start";
import stop from "./stop";
import getTime from "./getTime";

export default function CounterService(repo) {
  return {
    start: start(repo),
    stop: stop(repo),
    getTime: getTime(repo),
  };
}
