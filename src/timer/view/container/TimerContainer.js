import Timer from "../component/Timer";
import useTimer from "../../controller/useTimer";

export default function TimerContainer() {
  let { onStart, onStop } = useTimer();
  return <Timer time={0} onStart={onStart} onStop={onStop} />;
}
