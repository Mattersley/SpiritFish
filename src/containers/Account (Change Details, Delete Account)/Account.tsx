import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import Aux from '../../hoc/Aux/Aux';
import UserDetailsForm from './components/UserDetailsForm/UserDetailsForm';

import classes from './Account.module.css';
import * as actions from '../../store/actions';

interface AccountPropTypes {
    error: any,
    response: any,
    resetErrorAndResponse: any,
    updateUser: any
}

const Account = ({
  error, resetErrorAndResponse, response, updateUser,
}: AccountPropTypes) => {
  useEffect(() => () => {
    resetErrorAndResponse();
  }, [resetErrorAndResponse]);

  const submitFunction = (values) => {
    updateUser(values);
  };

  return (
    <Aux>
      <div className={classes.Account}>
        <h4>Account</h4>
        {!response
          ? <UserDetailsForm error={error} submitFunction={submitFunction} />
          : (
            <div>
              <p>
                Your details have been updated
              </p>
              <Link to="/userhome"><Button variant="outline-success">Go Back</Button></Link>
            </div>
          )}
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  response: state.user.response,
});

const mapDispatchToProps = (dispatch) => ({
  resetErrorAndResponse: () => dispatch(actions.resetErrorAndResponse()),
  updateUser: (values) => dispatch(actions.updateUser(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
