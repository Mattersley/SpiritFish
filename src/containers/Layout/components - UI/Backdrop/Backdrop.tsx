import React from 'react';

import classes from './Backdrop.module.css';

interface Props {
    clicked: any
    show: any,
}

const backdrop = ({ clicked, show }: Props) => (
  show ? <div role="dialog" className={classes.Backdrop} onClick={clicked} onKeyDown={clicked} /> : null
);

export default backdrop;
