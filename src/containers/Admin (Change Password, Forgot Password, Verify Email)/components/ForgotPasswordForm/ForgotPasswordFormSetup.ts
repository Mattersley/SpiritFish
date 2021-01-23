const ForgotPasswordFormSetup = {
  formType: 'authForgot',
  enterToSubmit: true,
  labelsRequired: false,
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
  },
};

export default ForgotPasswordFormSetup;
