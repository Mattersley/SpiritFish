/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from './Firebase';

import * as actions from './store/actions/index';
import { defaultRoutes, distilleryRoutes, userRoutes } from './routes';
import classes from './App.module.css';

import Aux from './hoc/Aux/Aux';
import Fish from './assets/images/Logos/SpiritFishDeadFishLogo.png';
import Layout from './containers/Layout/Layout';
import LoadingSpinner from './containers/Layout/components - UI/LoadingSpinner/LoadingSpinner';
import BottleCarousel from './containers/Layout/components/BottleCarousel/BottleCarousel';

interface AppPropTypes {
    authLogout: Function,
    isAuthenticated: boolean,
    isDistillery: boolean,
}

const App = ({ authLogout, isAuthenticated, isDistillery }: AppPropTypes) => {
  const [routes, setRoutes] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        authLogout();
      }
    });
  }, [authLogout]);

  useEffect(() => {
    // TODO: Prevent flashes of UserHome Render
    if (!isAuthenticated && !isDistillery) {
      setRoutes(defaultRoutes);
    }
    if (isDistillery && isAuthenticated) {
      setRoutes(distilleryRoutes);
    }
    if (!isDistillery && isAuthenticated) {
      setRoutes(userRoutes);
    }
  }, [isAuthenticated, isDistillery]);

  return (
    <Aux>
      <Suspense fallback={(
        <div className={classes.Loading}>
          <img src={Fish} alt="SpiritFish DeadFish Icon" />
          <p>Loading...</p>
          <LoadingSpinner />
        </div>
        )}
      >
        <Layout
          bottleViewContent={<BottleCarousel />}
          infoViewContent={routes}
        />
      </Suspense>
    </Aux>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.userId !== null,
  isDistillery: state.distiller.authorizedEmail !== null,
});

const mapDispatchToProps = (dispatch) => ({
  authLogout: () => dispatch(actions.authLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
