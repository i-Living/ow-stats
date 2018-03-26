import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Root from './app/components/root';

import './app/styles/index.css'
import './app/styles/bootstrap.min.css'
import reducer from './app/reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
