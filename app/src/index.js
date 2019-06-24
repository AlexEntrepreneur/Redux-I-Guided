import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from ' redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

// Step-5: Smash our reducers into one reducer!
// Import our reducers
import { mentalHealthReducer, physicalHealthReducer } from './reducers/reducers';
// Smash them!
const combinedReducer = combineReducers({
  mentalHealth: mentalHealthReducer,
  physicalHealth: physicalHealthReducer
});

// Step-6: Create our Redux store
// Import createStore
// Create our store
const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Step-7: Connect Redux to React App
// Import Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
