import Ticket from "../domain/entity/Ticket";
import fetchTickets from "./api/fetchTickets";

export default function TicketRepository(store) {
  function fetchTicketsAndsetTicketsInStore() {
    return fetchTickets().then((res) => {
      store.setTickets(res.data);
    });
  }

  function getTickets() {
    let ticketArr = store.getTickets();
    let ticketEntityArray = ticketArr.map((ticket) => {
      let ticketEntity = Ticket();
      ticketEntity.setSubject(ticket.subject);
      ticketEntity.setId(ticket.id);
      ticketEntity.setNumber(ticket.number);
      return ticketEntity;
    });
    return ticketEntityArray;
  }
  return {
    fetchTicketsAndsetTicketsInStore,
    getTickets,
    // fetchCounter,
  };
}
