export default function getCounter(repo) {
  return function () {
    return repo.getCounter();
  };
}
