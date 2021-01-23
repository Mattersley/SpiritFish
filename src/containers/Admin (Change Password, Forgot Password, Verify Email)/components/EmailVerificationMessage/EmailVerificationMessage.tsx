import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import useErrorSwitch from '../../../../hooks/useErrorSwitch';

interface VerifyEmailPropTypes {
    emailVerified: boolean,
    error: any
}

const EmailVerificationMessage = ({ emailVerified, error }: VerifyEmailPropTypes) => {
  const errorMessage = useErrorSwitch(error);

  const showEmailVerifiedDetails = () => {
    if (emailVerified && !error) {
      return (
        <div>
          <p>Your email address has been verified. You can now add your own tasting notes and make lists!</p>
          <Link to="/userhome"><Button variant="success">Go to your dashboard</Button></Link>
        </div>
      );
    }
    if (!emailVerified && error) {
      return (
        <div>
          {'There was a problem verifying your email code: '}
          { error && errorMessage }
          <br />
          {' Please try again '}
          <Link to="/userhome">here</Link>
        </div>
      );
    }
    if (emailVerified && error) {
      return (
        <div>
          {'Your email is already verified, enjoy using SpiritFish! Go to your dashboard '}
          <Link to="/userhome">here</Link>
        </div>
      );
    }
    return undefined;
  };

  return (
    <div>
      {showEmailVerifiedDetails()}
    </div>
  );
};

export default EmailVerificationMessage;
