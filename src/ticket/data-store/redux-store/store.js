import { setTickets } from "./action";
import { bindActionCreators } from "redux";
import { getTickets } from "./selector";

export default (store) => ({
  ...store,
  ...bindActionCreators({ setTickets }, store.dispatch),
  getTickets: () => getTickets(store.getState().tickets),
});
