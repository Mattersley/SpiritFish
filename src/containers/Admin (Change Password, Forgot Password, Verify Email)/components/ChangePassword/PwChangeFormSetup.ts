const PwChangeFormSetup = {
  formType: 'authCompare',
  enterToSubmit: true,
  labelsRequired: false,
  fields: {
    password: {
      elementType: 'input',
      config: {
        type: 'password',
        placeholder: 'Enter New Password',
      },
      validation: {
        required: true,
      },
    },
    password2: {
      elementType: 'input',
      config: {
        type: 'password',
        placeholder: 'Re-enter New Password',
      },
      validation: {
        required: true,
      },
    },
  },
};

export default PwChangeFormSetup;
