import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';


import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class SignOutButton extends Component {
  constructor(props) {
    super(props);
    }

  signOut = () => {
    this.props.firebase.doSignOut()
    this.props.history.push('/')
  }

  render() {
    return(
      <button type="button" onClick={this.signOut}>
        Sign Out
      </button>
    )
  }
};

const SignOutWrapper = compose(
  withRouter,
  withFirebase,
)(SignOutButton);

export default SignOutWrapper
