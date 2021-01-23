import React from 'react';

import classes from './Container.module.css';

interface ContainerPropTypes {
    children: React.ReactNode,
    otherClasses?: any,
}

const defaultProps = {
  otherClasses: null,
};

const Container = ({ children, otherClasses }: ContainerPropTypes) => (
  <div className={[classes.Container, otherClasses].join(' ')}>
    {children}
  </div>
);

Container.defaultProps = defaultProps;

export default Container;
