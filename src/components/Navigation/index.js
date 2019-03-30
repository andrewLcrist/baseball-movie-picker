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
  <div id="nav-container">
        {props.admin.userEmail ? <NavigationAuth /> : <NavigationNonAuth />}
        <hr/>
  </div>)
};

const NavigationAuth = () => (
  <ul className="header">
    <li>
      <Link to={ROUTES.HOME}><p className="nav-link">Home</p></Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}><p className="nav-link">Account</p></Link>
    </li>
    <li>
      <Link to={ROUTES.MOVIES}><p className="nav-link">Movies</p></Link>
    </li>
    <li>
      <SignOutWrapper />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="header">
    <li>
      <Link to={ROUTES.HOME}>Home <p className="nav-link">Page</p></Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign <p className="nav-link">In</p></Link>
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
