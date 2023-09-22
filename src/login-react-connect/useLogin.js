import { useSelector, useStore } from 'react-redux';
import selectn from 'selectn';
import SessionService from '../login/SessionService';
import SessionRepository from '../login/SessionRepository';
import getSession from '../login-redux/selectors';
import { setUserSession } from '../login-redux/actions';

let store = window.store;
function getModuleStore(_id, actionObj = {}) {
  const moduleActions = {};
  Object.keys(actionObj).forEach((actionKey) => {
    moduleActions[actionKey] = (...args) =>
      store.dispatch({ ...actionObj[actionKey](...args), _id });
  });
  console.log('moduleActions', moduleActions);
  return {
    ...store,
    ...moduleActions,
    getModuleState: (_id) => selectn(_id, store.getState()),
  };
}

store = getModuleStore('login', { setUserSession });

store.getSession = () => getSession(store.getModuleState());
let sessionRepository = new SessionRepository(store);
let sessionService = new SessionService(sessionRepository);

export default function useLogin() {
  let session = useSelector((state) => {
    return sessionService.getSession();
  });
  console.dir(sessionService.createSession);
  return { session, action: sessionService };
}
