export default function fetchTickets({ departmentId }) {
  return fetch(`/api/v1/tickets_${departmentId}.json`).then((res) =>
    res.json(),
  );
}
