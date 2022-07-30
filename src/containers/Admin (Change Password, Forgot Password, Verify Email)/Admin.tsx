import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// @ts-ignore
import classes from './Admin.module.css';

import * as actions from '../../store/actions';

import { AdminState } from '../../store/actions/actionTypes';
import ChangePassword from './components/ChangePassword/ChangePassword';
import EmailVerificationMessage from './components/EmailVerificationMessage/EmailVerificationMessage';
import ForgotPasswordForm from './components/ForgotPasswordForm/ForgotPasswordForm';

interface AdminPropTypes {
    clearAdminErrors: any,
    codeSendRes: AdminState,
    emailVerified: any,
    error: any,
    pwResetRes: AdminState,
    sendPasswordResetCode: any,
    setNewPassword: any,
    verifyCodeRes: AdminState,
    verifyEmailCode: any,
    verifyPasswordResetCode: any,
}

const Admin = ({
  clearAdminErrors, codeSendRes, emailVerified, error, pwResetRes, sendPasswordResetCode, setNewPassword, verifyCodeRes, verifyEmailCode, verifyPasswordResetCode,
}: AdminPropTypes) => {
  const [oobCodeVerified, setOobCodeVerified] = useState(false);
  const [pwChanged, setPwChanged] = useState(false);
  const [pwResetEmailSent, setPwResetEmailSent] = useState(false);

  const { search } = useLocation();
  const mode = new URLSearchParams(search).get('mode');
  const oobCode = new URLSearchParams(search).get('oobCode');

  const pwResetSubmitFunction = (values) => {
    sendPasswordResetCode(values.email);
  };

  useEffect(() => {
    if (mode === 'resetPassword') {
      verifyPasswordResetCode(oobCode);
    } else if (mode === 'verifyEmail') {
      verifyEmailCode(oobCode);
    }
  }, [mode, oobCode, verifyEmailCode, verifyPasswordResetCode]);

  useEffect(() => {
    if (verifyCodeRes === 200) {
      setOobCodeVerified(true);
    }
    return () => {
      // clearAdminErrors();
    };
  }, [clearAdminErrors, verifyCodeRes]);

  useEffect(() => {
    if (pwResetRes === 200) {
      setPwChanged(true);
    }
  }, [pwResetRes]);

  useEffect(() => {
    if (codeSendRes === 200) {
      setPwResetEmailSent(true);
    }
  }, [codeSendRes]);

  const changeTitle = (modeParam) => {
    let title: JSX.Element = null;
    const titles = {
      resetPassword: () => {
        title = <h4>Reset Your Password</h4>;
      },
      verifyEmail: () => {
        title = <h4>Email Verification</h4>;
      },
      default: () => {
        title = <h4>Reset Your Password</h4>;
      },
    };
    (titles[modeParam] || titles.default)();
    return title;
  };

  return (
    <Container>
      <div className={classes.Admin}>
        { changeTitle(mode) }
        {mode === 'resetPassword'
            && (
            <ChangePassword
              clearErrors={clearAdminErrors}
              error={error}
              oobCode={oobCode}
              oobCodeVerified={oobCodeVerified}
              pwChanged={pwChanged}
              setNewPassword={setNewPassword}
            />
            )}
        {mode === 'verifyEmail'
            && (
            <EmailVerificationMessage emailVerified={emailVerified} error={error} />
            )}

        {mode === null && (
        <div className={classes.ForgotForm}>
          {!pwResetEmailSent
            ? (
              <div>
                <ForgotPasswordForm
                  clearErrors={clearAdminErrors}
                  error={error}
                  submitFunction={pwResetSubmitFunction}
                />
              </div>
            )
            : (
              <div className={classes.EmailSent}>
                <h5>Email Sent</h5>
                <p>Please check your email (and junk folder) for the link to change your password</p>
                <Link to="/account"><Button variant="outline-success">Go Back</Button></Link>
                {/* TODO: Resend email button */}
              </div>
            )}
        </div>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  codeSendRes: state.admin.codeSendRes,
  emailVerified: state.admin.emailVerified,
  error: state.admin.error,
  pwResetRes: state.admin.pwResetRes,
  verifyCodeRes: state.admin.verifyCodeRes,
});

const mapDispatchToProps = (dispatch) => ({
  clearAdminErrors: () => dispatch(actions.clearAdminErrors()),
  sendPasswordResetCode: (email) => dispatch(actions.sendPasswordResetCode(email)),
  setNewPassword: (oobCode, newPassword) => dispatch(actions.setNewPassword(oobCode, newPassword)),
  verifyEmailCode: (oobCode) => dispatch(actions.verifyEmailCode(oobCode)),
  verifyPasswordResetCode: (oobCode) => dispatch(actions.verifyPasswordResetCode(oobCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
