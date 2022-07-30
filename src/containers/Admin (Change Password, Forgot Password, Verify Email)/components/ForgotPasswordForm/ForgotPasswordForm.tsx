import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import useErrorSwitch from '../../../../hooks/useErrorSwitch';
import useForm from '../../../../hooks/useForm';
import ForgotPasswordFormSetup from './ForgotPasswordFormSetup';

import classes from './ForgotPasswordForm.module.css';

interface ForgotPasswordFormPropTypes {
    clearErrors: any,
    error: any,
    submitFunction: any
}

const ForgotPasswordForm = ({
  clearErrors, error, submitFunction,
}: ForgotPasswordFormPropTypes) => {
  useEffect(() => () => clearErrors(), [clearErrors]);

  const { outputForm: forgotPasswordForm } = useForm(ForgotPasswordFormSetup, submitFunction);
  const errorMessage = useErrorSwitch(error);

  return (
    <Container>
      <div className={classes.ForgotPasswordForm}>
        {error && <h5 className={classes.Error}>{errorMessage}</h5>}
        {forgotPasswordForm}
      </div>
    </Container>
  );
};

export default ForgotPasswordForm;
