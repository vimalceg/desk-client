export default function start(repo, increment) {
  return () => repo.start(increment);
}
