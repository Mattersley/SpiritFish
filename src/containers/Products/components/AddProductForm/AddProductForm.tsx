import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import useErrorSwitch from '../../../../hooks/useErrorSwitch';
import useForm from '../../../../hooks/useForm';
import AddProductFormSetup from './AddProductFormSetup';

import classes from './AddProductForm.module.css';

interface AddProductFormPropTypes {
    clearErrors: any,
    error: any,
    submitFunction: any
}

const AddProductForm = ({
  clearErrors, error, submitFunction,
}: AddProductFormPropTypes) => {
  useEffect(() => () => clearErrors(), [clearErrors]);

  const { outputForm: addProductForm } = useForm(AddProductFormSetup, submitFunction);
  const errorMessage = useErrorSwitch(error);

  return (
    <Container>
      <div className={classes.AddProductForm}>
        {error && <h5 className={classes.Error}>{errorMessage}</h5>}
        {addProductForm}
      </div>
    </Container>
  );
};

export default AddProductForm;
