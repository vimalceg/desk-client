import { combineReducers } from 'redux';
import counter from './counter';
import uiState from './uiState';

export default combineReducers({
  uiState,
  counter,
});
