import { IS_LOADING } from '../constants';

export default function uiState(state = 0, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.data;
  }
  return state;
}
