import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import createBrowserHistory from "history/createBrowserHistory";
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from '../Navigation';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import MoviesPage from '../Movies';
import MovieDetail from '../MovieDetail';
import AddMovie from '../AddMovie';

import * as ROUTES from '../../constants/routes';

const history = createBrowserHistory()

const App = ({store, persistor}) => (
  <PersistGate persistor={persistor}>
  <Provider store={store}>
      <Router>
        <div id="app">
          <Navigation />

          <Route path={ROUTES.SIGN_IN} component={SignInPage} />

          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.MOVIES} component={MoviesPage} />
          <Route path={ROUTES.ADD_MOVIE} component={AddMovie} />
          <Route path={ROUTES.MOVIE} component={MovieDetail} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
  </Provider>
  </PersistGate>
);

export default App;
