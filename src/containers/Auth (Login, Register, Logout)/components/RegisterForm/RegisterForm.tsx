import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import useErrorSwitch from '../../../../hooks/useErrorSwitch';
import useForm from '../../../../hooks/useForm';
import RegisterFormSetup from './RegisterFormSetup';

import classes from './RegisterForm.module.css';

interface RegisterFormPropTypes {
    clearErrors: any,
    error: any,
    submitFunction: any
}

const RegisterForm = ({
  error, clearErrors, submitFunction,
}: RegisterFormPropTypes) => {
  useEffect(() => () => clearErrors(), [clearErrors]);

  const { outputForm: registerForm } = useForm(RegisterFormSetup, submitFunction);
  const errorMessage = useErrorSwitch(error);

  return (
    <Container>
      <div className={classes.RegisterForm}>
        {error && <h4 className={classes.Error}>{errorMessage}</h4>}
        {registerForm}
      </div>
    </Container>
  );
};

export default (RegisterForm);
