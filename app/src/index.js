import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
import App from './App';
import './index.css';

// const store = createStore(
//   combinedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
