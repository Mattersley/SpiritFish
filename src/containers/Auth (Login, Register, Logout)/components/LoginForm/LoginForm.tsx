import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import useErrorSwitch from '../../../../hooks/useErrorSwitch';

import classes from './LoginForm.module.css';
import useForm from '../../../../hooks/useForm';
import LoginFormSetup from './LoginFormSetup';

interface LoginFormPropTypes {
    clearErrors: any,
    error: any,
    submitFunction: any
}

const LoginForm = ({
  clearErrors, error, submitFunction,
}: LoginFormPropTypes) => {
  useEffect(() => () => clearErrors(), [clearErrors]);

  const errorMessage = useErrorSwitch(error);
  const { outputForm: loginForm } = useForm(LoginFormSetup, submitFunction);

  return (
    <Container>
      <div className={classes.LoginForm}>
        {error && <h5 className={classes.Error}>{errorMessage}</h5>}
        {loginForm}
      </div>
    </Container>
  );
};

export default LoginForm;
