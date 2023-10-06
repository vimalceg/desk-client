export default function stop(repo) {
  return () => repo.stop();
}
