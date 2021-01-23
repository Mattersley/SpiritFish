import React from 'react';
import classes from './Divider.module.css';

interface DividerProps {
    onMouseDown: any
}

const Divider = ({ onMouseDown }: DividerProps) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className={classes.Divider} onMouseDown={onMouseDown}>
    <div className={classes.DividerTab} />
  </div>
);

export default Divider;
