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
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';
import rootSaga from './Sagas/rootSaga'
import searchMovies from './Sagas/movieDataSaga'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const persistedReducer = persistReducer (persistConfig, rootReducer)

let store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(thunk),
  )
)
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

ReactDOM.render(

    <App store={store} persistor={persistor}/>,

  document.getElementById('root'),
);

serviceWorker.unregister();
