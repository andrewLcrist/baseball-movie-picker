import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {setUser, handleUserSignIn} from '../../Actions/userActions'
import { connect } from 'react-redux';

import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
  </div>
);

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,};
    }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.handleUserSignIn(email, password)
    this.setState({
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    })
    this.props.history.push(ROUTES.HOME)
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Take me out to the ball game
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
      setUser: (userEmail) => dispatch(setUser(userEmail)),
      handleUserSignIn: (email, password) => dispatch(handleUserSignIn(email, password)),
});

const SignInForm =  compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
