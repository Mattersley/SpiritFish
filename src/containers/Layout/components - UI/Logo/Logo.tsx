import React from 'react';
import { Link } from 'react-router-dom';

import fishLogo from '../../../../assets/images/Logos/SpiritFishDeadFishLogo.png';

import classes from './Logo.module.css';
import Aux from '../../../../hoc/Aux/Aux';

interface LogoPropTypes {
  isAuthenticated?: boolean
}

const defaultProps = {
  isAuthenticated: false,
};

const Logo = ({ isAuthenticated }: LogoPropTypes & typeof defaultProps) => (
  <Aux>
    <Link className={classes.Logo} to={isAuthenticated ? '/userhome' : '/'}>
      <img src={fishLogo} alt="Deadfish SpiritFish Logo" />
      <h1>SpiritFish</h1>
    </Link>
  </Aux>
);

Logo.defaultProps = defaultProps;

export default Logo;
