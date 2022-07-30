const userDetailsFormSetup = {
  formType: 'userDetails',
  enterToSubmit: true,
  labelsRequired: true,
  fields: {
    firstname: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Enter Your First Name',
      },
      validation: {
        required: false,
      },
    },
    lastname: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Enter Your Last Name',
      },
      validation: {
        required: false,
      },
    },
    username: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Choose a Username',
      },
      validation: {
        required: true,
      },
    },
    postcode: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Enter Your Postcode',
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

export default userDetailsFormSetup;
