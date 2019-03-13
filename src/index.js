import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import './reset.css'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './Reducers/rootReducer';

const store = createStore(combineReducers, composeWithDevTools(
  applyMiddleware(thunk)
));

ReactDOM.render(

    <App store={store}/>,

  document.getElementById('root'),
);

serviceWorker.unregister();
