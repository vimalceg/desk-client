import React from 'react';
import './style.css';
import { createStore, applyMiddleware } from 'redux';
import reducer, { staticReducers } from './reducer';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import CounterContainer from './counter/view/container/CounterContainer';
import CounterContainerCurrent from './counter-current/containers/CounterContainer';
import thunk from 'redux-thunk';
console.log(thunk);
let store = createStore(reducer, applyMiddleware(thunk, logger));
window.store = store;

function CounterApp() {
  return <CounterContainer />;
}

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
      <div>existing</div>
      {/* <CounterContainerCurrent /> */}
    </Provider>
  );
}

// import * as a from '@zohodesk/redux-modules';
// import useLogin from './login-react-connect/useLogin';
// import Login from './Login';

// store = a.enhanceStoreWithAsyncReducers(store, staticReducers);
// window.store = store;
// store.dispatch({ type: 'test' });

// function App1() {
//   let { session: userSession, action } = useLogin(null);

//   return (
//     <div>
//       <div onClick={() => action.createSession({ test: 1 })}>test</div>
//       {userSession === null && <Login />}
//       {userSession != null && <div>Login</div>}
//     </div>
//   );
// }
