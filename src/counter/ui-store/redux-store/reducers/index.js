import { IS_LOADING, SET_ERROR } from "../constants";

export default function uiState(
  state = {
    isLoading: true,
    error: {},
  },
  action,
) {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.data };
    case SET_ERROR:
      return { ...state, error: action.data };
  }
  return state;
}
