import React from 'react';

import classes from './FormControl.module.css';

interface ContainerPropTypes {
    children: React.ReactNode,
    otherClasses?: any,
}

const defaultProps = {
  otherClasses: null,
};

const FormControl = ({ children, otherClasses }: ContainerPropTypes) => (
  <div className={[classes.FormControl, otherClasses].join(' ')}>
    {children}
  </div>
);

FormControl.defaultProps = defaultProps;

export default FormControl;
