import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import './reset.css'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const persistedReducer = persistReducer (persistConfig, rootReducer)

let store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
)

const persistor = persistStore(store);

ReactDOM.render(

    <App store={store} persistor={persistor}/>,

  document.getElementById('root'),
);

serviceWorker.unregister();
