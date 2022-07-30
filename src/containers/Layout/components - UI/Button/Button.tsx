import React from 'react';

// @ts-ignore
import classes from './Button.module.css';

interface ButtonPropTypes {
    btnType: string,
    block?: boolean,
    children: React.ReactNode,
    clicked?: any,
    disabled?: boolean,
    otherClasses?: any,
}

const defaultProps = {
  block: false,
  clicked: null,
  disabled: false,
  otherClasses: null,
};

// TODO: Add loading spinner

const Button = ({
  btnType, block, children, clicked, disabled, otherClasses,
}: ButtonPropTypes & typeof defaultProps) => (
  <button
    className={[classes.Button, classes[btnType], otherClasses, `${block ? classes.btnBlock : null}`].join(' ')}
    disabled={disabled}
    aria-disabled={disabled}
    onClick={clicked}
    type="button"
  >
    {children}
  </button>
);

Button.defaultProps = defaultProps;

export default Button;
