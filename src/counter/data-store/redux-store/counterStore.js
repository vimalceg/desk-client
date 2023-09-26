import getCounterSelector from './selectors/getCounter';
import { increment, decrement } from './actions';
import { bindActionCreators } from 'redux';

export default (store) => ({
  ...store,
  ...bindActionCreators({ increment, decrement }, store.dispatch),
  getCounter: () => getCounterSelector(store.getState().counter),
});
