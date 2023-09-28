import { hasLoading, getError } from "./selectors";
import { setLoading, setError } from "./actions";
import { bindActionCreators } from "redux";

export default (store) => ({
  ...store,
  ...bindActionCreators({ setLoading, setError }, store.dispatch),
  hasLoading: () => hasLoading(store.getState().uiState),
  getError: () => getError(store.getState().uiState),
});
