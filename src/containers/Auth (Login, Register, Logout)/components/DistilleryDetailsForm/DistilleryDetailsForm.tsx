import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import useErrorSwitch from '../../../../hooks/useErrorSwitch';
import useForm from '../../../../hooks/useForm';
import DistilleryDetailsFormSetup from './DistilleryDetailsFormSetup';

import classes from './DistilleryDetailsForm.module.css';

interface DistilleryDetailsFormPropTypes {
    clearErrors: any,
    error: any,
    submitFunction: any
}

const DistilleryDetailsForm = ({
  error, clearErrors, submitFunction,
}: DistilleryDetailsFormPropTypes) => {
  useEffect(() => () => clearErrors(), [clearErrors]);

  const { outputForm: distilleryDetailsForm } = useForm(DistilleryDetailsFormSetup, submitFunction);
  const errorMessage = useErrorSwitch(error);

  return (
    <Container>
      <div className={classes.DistilleryDetailsForm}>
        {error && <small className={classes.Error}>{errorMessage}</small>}
        {distilleryDetailsForm}
      </div>
    </Container>
  );
};

export default DistilleryDetailsForm;
