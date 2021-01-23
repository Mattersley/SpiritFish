import { useCallback, useState } from 'react';

const useValidityChecks = (formSetup) => {
  const [errors, setErrors] = useState({});

  // TODO: Validate "." out of distilleryName
  const checkValidity = useCallback((inputValues) => {
    const newErrors: any = {};
    if (formSetup.fields.email && formSetup.fields.email.validation.required === true) {
      if (!inputValues.email) {
        newErrors.email = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValues.email)) {
        newErrors.email = 'Email address is invalid';
      }
    }

    if (formSetup.fields.password && formSetup.fields.password.validation.required === true) {
      if (!inputValues.password) {
        newErrors.password = 'Password is required';
      } else if (!/[A-Z]/.test(inputValues.password)) {
        newErrors.password = 'Password must contain an upper case character';
      } else if (!/[a-z]/.test(inputValues.password)) {
        newErrors.password = 'Password must contain a lower case character';
      } else if (!/[0-9]/.test(inputValues.password)) {
        newErrors.password = 'Password must contain a number';
      } else if (inputValues.password.length < 8) {
        newErrors.password = 'Password must contain at least 8 or more characters';
      }
    }

    if (formSetup.fields.password2 && formSetup.fields.password2.validation.required === true) {
      if (!inputValues.password2) {
        newErrors.password2 = 'Please re-enter your password';
      } else if (!/[A-Z]/.test(inputValues.password)) {
        newErrors.password2 = 'Password must contain an upper case character';
      } else if (!/[a-z]/.test(inputValues.password)) {
        newErrors.password2 = 'Password must contain a lower case character';
      } else if (!/[0-9]/.test(inputValues.password)) {
        newErrors.password2 = 'Password must contain a number';
      } else if (inputValues.password2.length < 8) {
        newErrors.password2 = 'Password must contain at least 8 or more characters';
      } else if (formSetup.formType === 'authCompare' && inputValues.password !== inputValues.password2) {
        newErrors.password2 = 'Passwords do not match';
      }
    }

    if (formSetup.formType === 'authRegister') {
      if (formSetup.fields.username && formSetup.fields.username.validation.required === true) {
        if (!inputValues.username) {
          newErrors.username = 'Username is required';
        } else if (inputValues.username.length < 6) {
          newErrors.username = 'Username must be more than 6 characters';
        }
      }

      if (formSetup.fields.postcode && formSetup.fields.postcode.validation.required === true) {
      // TODO: Fix caption text overriding error text
        if (!inputValues.postcode) {
          newErrors.postcode = 'Postcode is required';
        } else if (!/[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/.test(inputValues.postcode)) {
          newErrors.postcode = 'Postcode must match the format A1A 1A1';
        }
      }
    }
    setErrors(newErrors);
  }, [formSetup]);
  return { checkValidity, errors };
};

export default useValidityChecks;
