import React, {Component} from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { currentUser, doAuth, baseballMovies} from '../Firebase/firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { connect } from 'react-redux';

class Account extends Component {

  componentDidMount() {
    !currentUser() && this.props.history.push(ROUTES.SIGN_IN) 
  }

  render() {
    return(
      <div>
      <h1>Account: </h1>
      <PasswordForgetForm />
      <PasswordChangeForm />
      </div>
    )
  }
};

const mapStateToProps = state => ({
  admin: state.admin
});

const mapDispatchToProps = dispatch => ({
});

const AccountPage =  compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withFirebase,
)(Account);

export default AccountPage;

export { Account };
