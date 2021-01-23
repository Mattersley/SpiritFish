const LoginFormSetup = {
  formType: 'authLogin',
  enterToSubmit: true,
  labelsRequired: true,
  fields: {
    email: {
      elementType: 'input',
      config: {
        type: 'email',
        placeholder: 'Email Address',
      },
      validation: {
        required: true,
      },
    },
    password: {
      elementType: 'input',
      config: {
        type: 'password',
        placeholder: 'Password',
      },
      validation: {
        required: false,
      },
    },
    rememberMe: {
      elementType: 'checkbox',
      config: {
        type: 'checkbox',
        label: 'Remember Me',
        value: 'remember',
      },
      validation: {
        required: false,
      },
    },
  },
};

export default LoginFormSetup;
