import React from 'react';
import Form from 'react-bootstrap/Form';
import classes from './Input.module.css';

interface Props {
    changed: any,
    elementConfig: any,
    elementType: string,
    invalid: boolean,
    label: string,
    shouldValidate: any,
    touched: boolean,
    value: string
}

const input = ({
  changed, elementConfig, elementType, invalid, label, shouldValidate, touched, value,
}: Props) => {
  let inputElement: JSX.Element;
  const inputClasses = [classes.InputElement];

  if (invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (elementType) {
    case ('input'):
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={value}
          onChange={changed}
        >
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <Form.Control
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <Form.Label className={classes.Label}>{label}</Form.Label>
      {inputElement}
    </div>
  );
};

export default input;
