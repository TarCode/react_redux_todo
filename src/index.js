import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import App from './components/App';

const logger = store => next => action => {
  console.log('action', action);
  const nextState = next(action);
  console.log('nextState', store.getState());
  return nextState;
}
const store = createStore(
  todoApp,
  applyMiddleware(logger)
);

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('main')
)
