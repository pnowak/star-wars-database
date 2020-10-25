import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app/App';
import { configureStore } from './app/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>, 
  document.getElementById('root')
);