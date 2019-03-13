import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

import { currentUser, doAuth, baseballMovies} from '../Firebase/firebase';

import SignOutWrapper from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = (props) => {
  return(
  <div>
        {currentUser() ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>)
};

const NavigationAuth = () => (
  <ul className="header">
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.MOVIES}>Movies</Link>
    </li>
    <li>
      <SignOutWrapper />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="header">
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

const mapStateToProps = state => ({
  admin: state.admin
});

const NavigationPage =  compose(
  connect(
    mapStateToProps
  ),
  withRouter,
  withFirebase,
)(Navigation);

export default NavigationPage;

export { Navigation };
