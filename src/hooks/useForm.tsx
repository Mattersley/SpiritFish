import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import classes from './useForm.module.css';

import Button from '../containers/Layout/components - UI/Button/Button';
import useValidityChecks from './useValidityChecks';

// interface useFormTypes {
//     formSetup: any
//     submitFunction: any
// }
//
// interface formSetupTypes {
//     formType: string,
//     labelsRequired: boolean,
//     fields: {
//         [key: string]: formSetupFieldsTypes
//     }
// }
//
// interface formSetupFieldsTypes {
//     elementType: string,
//     config: {
//         type: 'email' | 'password' | 'text',
//         placeholder: string,
//     }
//     validation: {
//         required: boolean,
//         minLength?: number,
//         maxLength?: number
//     }
// }
//
// interface newErrorTypes {
//     email?: string,
//     password?: string,
//     password2?: string,
//     username?: string,
//     postcode?: string
// }

const useForm = (
  formSetup,
  submitFunction,
) => {
  const history = useHistory();
  const [formFields, setFormFields] = useState([]);
  const [values, setValues] = useState({});
  const [outputForm, setOutputForm] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { checkValidity, errors } = useValidityChecks(formSetup);

  const changePasswordVisibility = useCallback(() => {
    // TODO: Move to Button UI function
    setPasswordVisible(!passwordVisible);
  }, [passwordVisible]);

  const handleChange = useCallback((event) => {
    event.persist();
    setValues((vals) => ({
      ...vals,
      [event.target.name]: event.target.value,
    }));

    Object.keys(formFields).forEach((key) => {
      if (formFields[key].id === event.target.name) {
        formFields[key].touched = true;
      }
    });
  }, [formFields]);

  /* Iterate Over formSetup to Create Form */
  useEffect(() => {
    if (formSetup) {
      const formElementsArray: any = [];

      Object.keys(formSetup.fields).forEach((key) => {
        formElementsArray.push({
          id: key,
          config: formSetup.fields[key].config,
          value: '',
          touched: false,
        });
      });
      setFormFields(formElementsArray);
    }
  }, [formSetup]);

  /* Check Validity via useValidityCheck Hook */
  useEffect(() => {
    checkValidity(values);
  }, [checkValidity, values]);

  /* Enter Key to Submit */
  useEffect(() => {
    if (formSetup.enterToSubmit) {
      const handleEnterKeyDown = (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          if (Object.keys(errors).length === 0) {
            submitFunction(values);
          }
        }
      };
      window.addEventListener('keydown', handleEnterKeyDown);
      return () => {
        window.removeEventListener('keydown', handleEnterKeyDown);
      };
    } return undefined;
  }, [errors, formSetup.enterToSubmit, submitFunction, values]);

  const submitButtonTextSwitch = (formType) => {
    // TODO: Move to Button UI function
    const formTypes = {
      authLogin: 'Login',
      authRegister: 'Register',
      authForgot: 'Send Reset Email',
      registerDistilleryAuth: 'Continue',
      userDetails: 'Save',
      default: 'Submit',
    };
    return (formTypes[formType] || formTypes.default);
  };

  useEffect(() => {
    const handleSubmit = (event) => {
      if (event) event.preventDefault();
      if (Object.keys(errors).length === 0) {
        submitFunction(values);
      }
    };

    const form: any = (
      <div className={classes.Form}>
        {formFields.map((formElement: any) => (
          <Form.Group
            key={formElement.id}
            controlId={`formBasic${formElement.id}`}
          >
            {formElement.config.label && (
              <Form.Label className={classes.CheckBoxLabel}>
                {formElement.config.label}
              </Form.Label>
            )}
            {formElement.id === 'password' || formElement.id === 'password2' ? (
              <div>
                <InputGroup>
                  <Form.Control
                    type={passwordVisible ? 'text' : formElement.config.type}
                    name={formElement.id}
                    onChange={handleChange}
                    placeholder={formElement.config.placeholder}
                    value={formElement.config.value}
                    isInvalid={!!errors[formElement.id] && formElement.touched}
                  />
                  <InputGroup.Append>
                    <Button btnType="Secondary" clicked={changePasswordVisibility}>
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEye : faEyeSlash}
                      />
                    </Button>
                  </InputGroup.Append>
                  {errors[formElement.id] && formElement.touched ? (
                    <Form.Control.Feedback type="invalid">
                      {errors[formElement.id]}
                    </Form.Control.Feedback>
                  ) : null}
                </InputGroup>
                {formSetup.formType !== 'authLogin'
                  ? null
                  : (
                    <button
                      onClick={() => history.push('/admin')}
                      onKeyDown={() => history.push('/admin')}
                      style={{
                        backgroundColor: 'white', border: 'none', color: 'grey', marginTop: '10px',
                      }}
                      type="button"
                    >
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                      <small>  Forgot password?</small>
                    </button>
                  )}
              </div>
            ) : (
              <div>
                <Form.Control
                  isInvalid={!!errors[formElement.id] && formElement.touched}
                  name={formElement.id}
                  onChange={handleChange}
                  placeholder={formElement.config.placeholder}
                  type={formElement.config.type}
                  value={formElement.config.value}
                />
                {errors[formElement.id] && formElement.touched ? (
                  <Form.Control.Feedback type="invalid">
                    {errors[formElement.id]}
                  </Form.Control.Feedback>
                ) : null}
                <Form.Text
                  className="text-muted"
                >
                  {formElement.config.caption}
                </Form.Text>
              </div>
            )}
          </Form.Group>
        ))}
        <div>
          <Button
            btnType="Success"
            clicked={handleSubmit}
            disabled={Object.keys(errors).length !== 0}
            block
          >
            { submitButtonTextSwitch(formSetup.formType) }
          </Button>
        </div>
      </div>
    );
    setOutputForm(form);
  }, [changePasswordVisibility, errors, formFields, formSetup, handleChange, history, passwordVisible, submitFunction, values]);

  return {
    outputForm,
  };
};

export default useForm;
