export default function increment(repo, counterService) {
  //mutate?
  return () => {
    console.log(counterService.getCounter());
    let timer = repo.getTimer();
    timer.setTime(timer.getTime() + counterService.getCounter() || 1);
    return timer;
  };
}
