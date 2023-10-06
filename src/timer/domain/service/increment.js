export default function increment(timer) {
  //mutate?
  timer.setTime(timer.getTime() + 1);
  return timer;
}
