import React, { useState, useEffect } from 'react';
import './style.css';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

let store = createStore(reducer, applyMiddleware(logger));
store.dispatch({ type: 'test' });

function Hello({ name, i18n_hello }) {
  return (
    <div>
      {i18n_hello},{name}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <a href="https://accounts.zoho.com/oauth/v2/auth?client_id=1000.HIKS114XIP3VGARP42QVMVVQYQGI2E&response_type=token&scope=AaaServer.profile.Read&redirect_uri=https://stackblitz-starters-kkw19h.stackblitz.io/redirect">
        {' '}
        Login
      </a>
    </div>
  );
}
