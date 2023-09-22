import React, { useState, useEffect } from 'react';
import './style.css';
import { createStore, applyMiddleware } from 'redux';
import reducer, { staticReducers } from './reducer';
import logger from 'redux-logger';
import Login from './Login';
import { enhanceStoreWithAsyncReducers } from '@zohodesk/redux-modules';

let store = createStore(reducer, applyMiddleware(logger));
store = enhanceStoreWithAsyncReducers(store, staticReducers);

store.dispatch({ type: 'test' });

// function urlChange(location, setUserSession) {
//   if (location.pathname === '/redirect') {
//     setUserSession(parseHash(location.hash));
//     history.pushState({}, '', '/');
//   }
// }
export default function App() {
  let [userSession, setUserSession] = useState(null);

  // useEffect(() => {
  //   urlChange(window.location, setUserSession);
  //   window.addEventListener('popstate', () =>
  //     urlChange(window.location, setUserSession)
  //   );
  // }, []);

  return (
    <div>
      test
      {userSession === null && <Login />}
      {userSession != null && <div>Login</div>}
    </div>
  );
}
