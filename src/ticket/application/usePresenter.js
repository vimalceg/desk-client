import { useSelector } from "react-redux";
import ticketViewModel from "./ticketsViewModel";

export default function useTicketPresenter(service) {
  let viewModel = useSelector(() => {
    let tickets = service.getTickets();
    return ticketViewModel({ tickets });
  });

  return {
    viewModel,

    //     NotifyService: {
    //       onSuccess: () => {
    //         counterUIRepository.setLoading(false);
    //         // setLoading(false);
    //       },
    //       onFailure: (error) => {
    //         counterUIRepository.setLoading(false);
    //         if (error) {
    //           counterUIRepository.setError(error);
    //         }

    //         // setLoading(false);
    //       },
    //     },
  };
}
