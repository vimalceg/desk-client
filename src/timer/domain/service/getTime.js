export default function getTime(repo) {
  return () => repo.getTimer().timer;
}
