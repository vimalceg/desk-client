import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { createStore, applyMiddleware } from 'redux';
import reducer, { staticReducers } from './reducer';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import CounterContainer from './counter/view/container/CounterContainer';
import thunk from 'redux-thunk';
import TimerContainer from './timer/view/container/TimerContainer';
import TicketList from './page/ticketList';
import {
  enhanceStoreWithAsyncReducers,
  ReduxModuleProvider,
} from '@zohodesk/redux-modules';

let store = createStore(reducer, applyMiddleware(thunk, logger));
let newStore = enhanceStoreWithAsyncReducers(store, staticReducers);

function CounterApp() {
  return <CounterContainer />;
}
function Timer() {
  let [time, setTime] = useState(0);
  let ref = useRef();
  let [hasStart, setStart] = useState(false);
  function start() {
    setStart(true);
    let interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    ref.current = interval;
  }
  function stop() {
    setStart(false);
    clearInterval(ref.current);
    ref.current = null;
  }
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTime((time) => time + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <div>
      {time}
      <button disabled={hasStart ? true : false} onClick={start}>
        Start
      </button>
      <button disabled={hasStart ? false : true} onClick={stop}>
        Stop
      </button>
    </div>
  );
}

window.store = store;
store.subscribe(() => {
  store.getState();
});
export default function App() {
  return (
    <Provider store={newStore}>
      <div>test</div>
      <CounterApp />
      <TimerContainer />
      <TicketList />

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
