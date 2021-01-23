import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Auth.module.css';
import * as actions from '../../store/actions';

import LoadingSpinner from '../Layout/components - UI/LoadingSpinner/LoadingSpinner';

import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';

interface AuthPropTypes {
    clearErrors: any,
    error: any,
    loading: boolean,
    isAuthenticated: boolean,
    onAuth: any,
}

const Auth = ({
  clearErrors, error, loading, isAuthenticated, onAuth,
}: AuthPropTypes) => {
  const [isSignup, setIsSignup] = useState(false);

  // Submit Functions for useForm Hooks
  const submitFunction = (values) => {
    onAuth(values, isSignup);
  };

  // Switch render of Login or Register forms
  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  // Redirect on authentication
  let authRedirect: JSX.Element | null = null;
  if (isAuthenticated) {
    authRedirect = <Redirect to="/userhome" />;
  }

  return (
    <div>
      {loading ? <LoadingSpinner /> : (
        <div>
          {authRedirect}
          <div className={classes.authHeader}>
            <h4>{isSignup ? 'Set Up An Account' : 'Sign In'}</h4>
            <button
              className={classes.authModeButton}
              type="button"
              onClick={switchAuthModeHandler}
            >
              <small>
                {isSignup ? 'Already have an account? Sign In' : 'Need an account? Register here'}
              </small>
            </button>
          </div>
          {isSignup
            ? (
              <RegisterForm
                clearErrors={clearErrors}
                error={error}
                submitFunction={submitFunction}
              />
            )
            : (
              <LoginForm
                clearErrors={clearErrors}
                error={error}
                submitFunction={submitFunction}
              />
            )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  loading: state.auth.loading,
  isAuthenticated: state.auth.userId !== null,
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(actions.clearAuthErrors()),
  onAuth: (values, isSignup) => dispatch(actions.auth(values, isSignup)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
