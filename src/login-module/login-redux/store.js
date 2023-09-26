import getSession from './selectors';
import { setUserSession } from './actions';
import { bindActionCreators } from 'redux';

let store = window.store;
console.log('store', store);
store = {
  ...store,
  ...bindActionCreators({ setUserSession }, store && store.dispatch),
};
store.getSession = () => getSession(store.getState().login);
export default store;
