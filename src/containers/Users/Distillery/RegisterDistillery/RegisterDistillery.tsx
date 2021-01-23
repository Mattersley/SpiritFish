import React, { useEffect, useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';

import LoadingSpinner from '../../../Layout/components - UI/LoadingSpinner/LoadingSpinner';
import DistilleryAuthForm from '../../../Auth (Login, Register, Logout)/components/DistilleryAuthForm/DistilleryAuthForm';
import DistilleryDetailsForm from '../../../Auth (Login, Register, Logout)/components/DistilleryDetailsForm/DistilleryDetailsForm';
import * as actions from '../../../../store/actions';

import classes from './RegisterDistillery.module.css';
import Button from '../../../Layout/components - UI/Button/Button';

interface RegisterDistilleryPropTypes {
    authorizedEmail: any,
    clearErrors: any,
    createDistillery: any,
    detailsAddedStatusCode: number,
    error: any,
    isAuthenticated: any,
    loading: boolean,
    onAuth: any,
}

const RegisterDistillery = ({
  authorizedEmail, clearErrors, createDistillery, detailsAddedStatusCode, error, isAuthenticated, loading, onAuth,
}: RegisterDistilleryPropTypes) => {
  const [emailAuthorized, setEmailAuthorized] = useState(null);
  // const [distilleryError, setDistilleryError] = useState(null);
  const { search } = useLocation();
  const name = new URLSearchParams(search).get('name');
  const email = new URLSearchParams(search).get('email');

  const authSubmitFunction = (values) => {
    const updatedValues = { ...values, email };
    onAuth(updatedValues, true, true);
  };

  const cancelEvent = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.returnValue = '';
  };

  const detailsSubmitFunction = (values) => {
    const distilleryName = Object.keys(authorizedEmail)[0];
    const distilleryEmail = Object.values(authorizedEmail)[0];
    const data = {
      distilleryName,
      email: distilleryEmail,
      ...values,
    };
    createDistillery(data);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', cancelEvent, false);
    return () => window.removeEventListener('beforeunload', cancelEvent, false);
  }, []);

  useEffect(() => {
    const foundEmail = localStorage.getItem('distilleryEmail');
    if (foundEmail !== null) {
      setEmailAuthorized(authorizedEmail);
    }
  }, [authorizedEmail, emailAuthorized]);

  // useEffect(() => {
  //   if (error !== null) {
  //     setDistilleryError(error);
  //   }
  // }, [error]);

  let registerRedirect: JSX.Element | null = null;
  if (detailsAddedStatusCode === 200) {
    registerRedirect = <Redirect to="/distilleryHome" />;
  }

  return (
    <div className={classes.RegisterDistillery}>
      {registerRedirect}
      {loading
        ? <LoadingSpinner />
        : (
          <div>
            {error !== null && emailAuthorized === null
              ? (
                <div className={classes.notAuthorized}>
                  <h4>{error}</h4>
                  <Link to="/userhome"><Button btnType="Success">Go to your user dashboard</Button></Link>
                </div>
              )
              : (
                <div>
                  {!emailAuthorized
                    ? (
                      <div>
                        <div className={classes.welcomeGroup}>
                          <h6>Welcome to </h6>
                          <h1 className={classes.welcomeText}>SpiritFish</h1>
                          <h5>{name}</h5>
                          <small>Let's get your account set up...</small>
                        </div>
                        <div className={classes.emailInput}>
                          <Form.Control type="text" value={email} disabled />
                          <small>You have to register with the same email address your invite was sent to</small>
                        </div>
                        <DistilleryAuthForm
                          clearErrors={clearErrors}
                          error={error}
                          submitFunction={authSubmitFunction}
                        />
                      </div>
                    )
                    : (
                      <div>
                        <div className={classes.registerGroup}>
                          <h1 className={classes.welcomeText}>SpiritFish</h1>
                          <h5>{name}</h5>
                          <small>Enter your details...</small>
                        </div>
                        <DistilleryDetailsForm
                          clearErrors={clearErrors}
                          error={error}
                          submitFunction={detailsSubmitFunction}
                        />
                      </div>
                    )}
                </div>
              )}
          </div>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  authorizedEmail: state.distiller.authorizedEmail,
  error: state.distiller.error,
  isAuthenticated: state.auth.userId !== null,
  loading: state.auth.loading,
  detailsAddedStatusCode: state.distiller.response,
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(actions.clearAuthErrors()),
  createDistillery: (values) => dispatch(actions.createDistillery(values)),
  onAuth: (values, isSignup, isDistillery) => dispatch(actions.auth(values, isSignup, isDistillery)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDistillery);
