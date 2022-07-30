const RegisterFormSetup = {
  formType: 'authRegister',
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
        isEmail: true,
      },
    },
    password: {
      elementType: 'input',
      config: {
        type: 'password',
        placeholder: 'Password',
      },
      validation: {
        required: true,
        minLength: 6,
      },
    },
    firstname: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'First Name',
      },
      validation: {
        required: false,
      },
    },
    lastname: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Last Name',
      },
      validation: {
        required: false,
      },
    },
    username: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Username',
      },
      validation: {
        required: true,
      },
    },
    postcode: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Postcode',
        caption: 'We use your postcode to show you distilleries and events in your area. Never for anything else',
      },
      validation: {
        isPostCode: true,
        minLength: 6,
        maxLength: 6,
      },
    },
  },
};

export default RegisterFormSetup;
