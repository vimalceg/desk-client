export default function fetchTickets() {
  return fetch("/api/v1/tickets.json").then((res) => res.json());
}
