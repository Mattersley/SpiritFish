const DistilleryAuthFormSetup = {
  formType: 'registerDistilleryAuth',
  enterToSubmit: false,
  labelsRequired: false,
  fields: {
    password: {
      elementType: 'input',
      config: {
        type: 'password',
        placeholder: 'Password',
      },
      validation: {
        required: true,
      },
    },
  },
};

export default DistilleryAuthFormSetup;
