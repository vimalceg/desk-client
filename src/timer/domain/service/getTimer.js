export default function getTimer(repo) {
  return () => {
    let timer = repo.getTimer();
    return {
      time: timer.getTime(),
      hasStart: timer.isStart(),
    };
  };
}
