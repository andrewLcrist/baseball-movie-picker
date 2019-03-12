import React from 'react';
import { Link } from 'react-router-dom';

import SignOutWrapper from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
        <NavigationAuth /> : <NavigationNonAuth />
  </div>
);

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

export default Navigation;
