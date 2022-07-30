import React from 'react';

import Aux from '../../../../hoc/Aux/Aux';
import Toolbar from '../../components - Navigation/Toolbar/Toolbar';

import classes from './InfoView.module.css';

interface InfoViewProps {
    children: React.ReactNode,
    isAuthenticated: boolean,
    width: number;
}

const InfoView = ({ children, isAuthenticated, width }: InfoViewProps) => (
  <Aux>
    <div className={classes.InfoView}>
      <Toolbar isAuthenticated={isAuthenticated} width={width} />
      <div className={classes.Content}>
        {children}
      </div>
    </div>
  </Aux>
);

export default InfoView;
