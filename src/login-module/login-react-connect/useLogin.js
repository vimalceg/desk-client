import { useSelector, useStore } from 'react-redux';
import SessionService from '../login/SessionService';
import SessionRepository from '../login/SessionRepository';
import store from '../login-redux/store';
let sessionRepository = new SessionRepository(store);
let sessionService = new SessionService(sessionRepository);

export default function useLogin() {
  let session = useSelector(() => {
    return sessionService.getSession();
  });
  return { session, action: sessionService };
}
