import React from 'react';

import Aux from '../../../../hoc/Aux/Aux';
import Logo from '../../components - UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

// @ts-ignore
import classes from './Toolbar.module.css';

interface Props {
    width: number,
    isAuthenticated: boolean
}

const Toolbar = ({ width, isAuthenticated }: Props) => (
  <Aux>
    <div className={classes.Toolbar}>
      <Logo isAuthenticated={isAuthenticated} />
      <NavigationItems width={width} isAuthenticated={isAuthenticated} />
    </div>
  </Aux>
);

export default React.memo(Toolbar);

// TODO: create rules for smaller phones (e.g. iPhone SE) and rules for landscape toolbars
