import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {doSignOut, baseballMovies} from '../Firebase/firebase';
import { connect } from 'react-redux';
import {removeUser} from '../../Actions/userActions'

import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class SignOutButton extends Component {
  constructor(props) {
    super(props);
    }

  signOut = () => {
    doSignOut()
    this.props.signOut()
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(removeUser())
})

const SignOutWrapper = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withFirebase,
)(SignOutButton);

export default SignOutWrapper
