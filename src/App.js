import React, { useState, useEffect } from 'react';
import './style.css';
import { createStore, applyMiddleware } from 'redux';
import reducer, { staticReducers } from './reducer';
import logger from 'redux-logger';
import Login from './Login';
import * as a from '@zohodesk/redux-modules';
import useLogin from './login-react-connect/useLogin';
import { Provider } from 'react-redux';

console.log(a);
let store = createStore(reducer, applyMiddleware(logger));
store = a.enhanceStoreWithAsyncReducers(store, staticReducers);
window.store = store;
store.dispatch({ type: 'test' });

function App1() {
  let { session: userSession, action } = useLogin(null);
  console.log('userSession', action);
  // useEffect(() => {
  //   urlChange(window.location, setUserSession);
  //   window.addEventListener('popstate', () =>
  //     urlChange(window.location, setUserSession)
  //   );
  // }, []);

  return (
    <div>
      <div onClick={() => action.createSession({ test: 1 })}>test</div>
      {userSession === null && <Login />}
      {userSession != null && <div>Login</div>}
    </div>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <App1 />
    </Provider>
  );
}
