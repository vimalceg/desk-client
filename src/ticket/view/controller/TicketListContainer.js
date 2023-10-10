import TicketList from "../component/TicketList";
import useTickets from "../../application/useTickets";

export default function TicketListContainer() {
  let { tickets } = useTickets();
  return <TicketList tickets={tickets} />;
}
