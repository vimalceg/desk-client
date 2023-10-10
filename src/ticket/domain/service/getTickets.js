import TicketOutputModel from "../model/outputModel/TicketOutputModel";
export default function getTickets(repo) {
  return () => {
    let ticketsEntity = repo.getTickets();
    let m = TicketOutputModel(ticketsEntity);
    console.log("m", m);
    return m;
  };
}
