export default function fetchCount() {
  return fetch('/api/counter.json')
  .then((res) => res.json());
}
