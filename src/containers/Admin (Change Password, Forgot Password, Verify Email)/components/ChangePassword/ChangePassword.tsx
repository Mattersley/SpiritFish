import React from 'react';
import { Link } from 'react-router-dom';

import useErrorSwitch from '../../../../hooks/useErrorSwitch';
import useForm from '../../../../hooks/useForm';
import PwChangeFormSetup from './PwChangeFormSetup';

interface ChangePasswordPropTypes {
    clearErrors: () => void,
    error: any,
    oobCode: string,
    oobCodeVerified: boolean,
    pwChanged: boolean,
    setNewPassword: any
}

const ChangePassword = ({
  clearErrors, error, oobCode, oobCodeVerified, pwChanged, setNewPassword,
}: ChangePasswordPropTypes) => {
  const { outputForm: pwChangeForm } = useForm(PwChangeFormSetup, (values) => {
    clearErrors();
    setNewPassword(oobCode, values.password);
  });
  const errorMessage = useErrorSwitch(error);

  const showChangePasswordForm = () => {
    if (oobCodeVerified && !pwChanged) {
      return pwChangeForm;
    }
    if (!oobCodeVerified && !pwChanged) {
      return (
        <div>
          {'There was a problem verifying your email code: '}
          { error && errorMessage }
          <br />
          {' Please try again '}
          <Link to="forgot">here</Link>
        </div>
      );
    }
    if (oobCodeVerified && pwChanged) {
      return (
        <div>
          {'Password Successfully changed. Please '}
          <Link to="auth">log in</Link>
        </div>
      );
    }
    if (oobCodeVerified && !pwChangeForm && error) {
      return (
        <div>
          {'There was a problem changing your password: '}
          {error}
        </div>
      );
    }
    return undefined;
  };

  return (
    <div>
      {showChangePasswordForm()}
    </div>
  );
};

export default ChangePassword;
