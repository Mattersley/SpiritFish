import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import useErrorSwitch from '../../../../hooks/useErrorSwitch';
import useForm from '../../../../hooks/useForm';
import DistilleryAuthFormSetup from './DistilleryAuthFormSetup';

import classes from './DistilleryAuthForm.module.css';

interface DistilleryAuthFormPropTypes {
    clearErrors: any,
    error: any,
    submitFunction: any
}

const DistilleryAuthForm = ({
  error, clearErrors, submitFunction,
}: DistilleryAuthFormPropTypes) => {
  useEffect(() => () => clearErrors(), [clearErrors]);

  const { outputForm: distilleryAuthForm } = useForm(DistilleryAuthFormSetup, submitFunction);
  const errorMessage = useErrorSwitch(error);

  return (
    <Container>
      <div className={classes.DistilleryAuthForm}>
        {error && <small className={classes.Error}>{errorMessage}</small>}
        {distilleryAuthForm}
      </div>
    </Container>
  );
};

export default DistilleryAuthForm;
