import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import Navigation from '../Navigation';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import MoviesPage from '../Movies';

import * as ROUTES from '../../constants/routes';

const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <div id="app">
        <Navigation />

        <hr />

        <Route path={ROUTES.SIGN_IN} component={SignInPage} />

        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.MOVIES} component={MoviesPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  </Provider>
);

export default App;
