import React from 'react';

import Aux from '../../../../hoc/Aux/Aux';
import useErrorSwitch from '../../../../hooks/useErrorSwitch';
import useForm from '../../../../hooks/useForm';
import UserDetailsFormSetup from './UserDetailsFormSetup';

import classes from './UserDetailsForm.module.css';

interface UserDetailsFormPropTypes {
    error: any,
    submitFunction: any,
}

const UserDetailsForm = ({
  error, submitFunction,
}: UserDetailsFormPropTypes) => {
  const { outputForm } = useForm(UserDetailsFormSetup, submitFunction);
  const errorMessage = useErrorSwitch(error);

  return (
    <Aux>
      <div className={classes.UserDetailsForm}>
        <h5>
          Update Your Details
          {'   '}
          <small className={classes.Error}>{errorMessage}</small>
        </h5>
        {outputForm}
      </div>
    </Aux>
  );
};

export default UserDetailsForm;
