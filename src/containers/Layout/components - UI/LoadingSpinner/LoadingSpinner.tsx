import React from 'react';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => (
  <div className={classes.SpinnerParent}>
    <div className={classes.RippleSpinner}>
      <div />
      <div />
    </div>
  </div>
);

export default LoadingSpinner;
