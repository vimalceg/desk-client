import getCounterSelector from './selectors/getCounter';
import { increment, decrement, setCount } from './actions';
import { bindActionCreators } from 'redux';

export default (store) => ({
  ...store,
  ...bindActionCreators({ increment, decrement, setCount }, store.dispatch),
  getCounter: () => getCounterSelector(store.getState().counter),
});
