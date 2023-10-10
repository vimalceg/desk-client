import createTicketStore from "../data-store/redux-store/store";
import TicketRepository from "../data-store/TicketRepository";
import TicketService from "../domain/service/TicketService";
import usePresenter from "../application/usePresenter";
import { useStore } from "react-redux";

export default function useTickets() {
  let store = useStore();
  let repo = TicketRepository(createTicketStore(store));
  let service = TicketService(repo);
  let { viewModel } = usePresenter(service);
  return { ...viewModel };
}
