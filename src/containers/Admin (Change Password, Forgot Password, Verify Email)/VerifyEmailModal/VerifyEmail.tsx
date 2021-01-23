import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';

import useErrorSwitch from '../../../hooks/useErrorSwitch';
import classes from './VerifyEmail.module.css';
import * as actions from '../../../store/actions';

interface VerifyEmailPropTypes {
    codeSendRes: any,
    clearErrors: any,
    error: any,
    sendEmailVerificationCode: any,
}

const VerifyEmail = ({
  codeSendRes, clearErrors, error, sendEmailVerificationCode,
}: VerifyEmailPropTypes) => {
  const [showErrors, setShowErrors] = useState(false);
  const [showVerifyAlert, setShowVerifyAlert] = useState(true);
  const [verifyEmailSent, setVerifyEmailSent] = useState(false);
  const errorMessage = useErrorSwitch(error);
  // eslint-disable-next-line
    useEffect(() => {
    if (codeSendRes !== null) {
      setVerifyEmailSent(true);
    }
    return () => {
      clearErrors();
      setVerifyEmailSent(false);
    };
  }, [clearErrors, codeSendRes]);

  const handleVerifyAlertClose = () => {
    if (verifyEmailSent) {
      setShowVerifyAlert(false);
    }
  };

  const verifyEmailButtonHandler = () => {
    sendEmailVerificationCode();
    setShowErrors(true);
  };

  return (
    <div className={classes.VerifyEmail}>
      {showVerifyAlert
        ? (
          <Alert className={classes.resendBox} variant="info" onClose={handleVerifyAlertClose} dismissible>
            <Row>
              <Col md="auto">
                <Alert.Heading>Please Verify Your Email Address</Alert.Heading>
                <p>You will have limited functionality until verified</p>
              </Col>
              <Col md="auto">
                {!verifyEmailSent
                  ? <Button variant="info" onClick={verifyEmailButtonHandler}>Resend</Button>
                  : <p className={classes.Success}>Email sent! Please check your inbox.</p>}
                <p className={classes.Error}>{showErrors && errorMessage}</p>
              </Col>
            </Row>
          </Alert>
        )
        : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  codeSendRes: state.admin.codeSendRes,
  error: state.admin.error,
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(actions.clearAdminErrors()),
  sendEmailVerificationCode: () => dispatch(actions.sendEmailVerificationCode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);

// TODO: Prevent send verify email button appearing upon initial registering
