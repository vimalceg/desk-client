import Ticket from "../domain/entity/Ticket";

export default function TicketRepository(store) {
  //   function fetchCounter() {
  //     return fetchCount().then((res) => {
  //       store.setCount(res.counter);
  //     });
  //   }

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
    getTickets,
    // fetchCounter,
  };
}
