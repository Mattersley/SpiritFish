import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../../../hoc/Aux/Aux';
import LoadingSpinner from '../../../Layout/components - UI/LoadingSpinner/LoadingSpinner';
import VerifyEmail from '../../../Admin (Change Password, Forgot Password, Verify Email)/VerifyEmailModal/VerifyEmail';
import { AdminState } from '../../../../store/actions/actionTypes';

interface Props { emailVerified: AdminState, loading: AdminState }

const PatronHome = ({ emailVerified, loading }: Props) => (
  <Aux>
    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Your Dashboard</h2>
    {loading && <LoadingSpinner />}
    {!emailVerified && !loading ? <VerifyEmail /> : null}
  </Aux>
);

const mapStateToProps = (state) => ({
  emailVerified: state.admin.emailVerified,
  loading: state.admin.loading,
});

export default connect(mapStateToProps, null)(PatronHome);
