import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

interface Props {
    adminReset: any,
    distilleryLogout: any,
    logout: any
}

const Logout = ({ adminReset, distilleryLogout, logout }: Props) => {
  useEffect(() => {
    logout();
    adminReset();
    distilleryLogout();
  }, [adminReset, logout, distilleryLogout]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => ({
  adminReset: () => dispatch(actions.adminReset()),
  distilleryLogout: () => dispatch(actions.distilleryLogout()),
  logout: () => dispatch(actions.logout()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
