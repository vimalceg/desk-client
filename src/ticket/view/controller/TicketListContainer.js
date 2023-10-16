import TicketList from "../component/TicketList";
import useTickets from "../../application/useTickets";

export default function TicketListContainer({ departmentId }) {
  let { tickets } = useTickets({ departmentId });
  return <TicketList tickets={tickets} />;
}
