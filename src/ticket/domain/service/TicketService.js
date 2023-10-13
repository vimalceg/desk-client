import getTickets from "./getTickets";
import fetchTicketsAndsetTicketsInStore from "./fetchTickets";

export default function TicketService(repo) {
  return {
    fetchTicketsAndsetTicketsInStore: fetchTicketsAndsetTicketsInStore(repo),
    getTickets: getTickets(repo),
  };
}
