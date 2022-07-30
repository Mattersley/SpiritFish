import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

interface Props {
    children: React.ReactNode,
    modalClosed: boolean,
    show: boolean
}

const modal = ({ children, modalClosed, show }: Props) => (
  <Aux>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  </Aux>
);

export default React.memo(
  modal,
  (prevProps, nextProps) => nextProps.show === prevProps.show
        && nextProps.children === prevProps.children,
);
