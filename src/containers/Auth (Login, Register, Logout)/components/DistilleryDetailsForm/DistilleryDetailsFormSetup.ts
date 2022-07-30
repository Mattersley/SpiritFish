const RegisterFormSetup = {
  formType: 'authRegister',
  enterToSubmit: false,
  labelsRequired: false,
  fields: {
    address: {
      elementType: 'textarea',
      config: {
        type: 'text',
        placeholder: 'Distillery Address',
      },
      validation: {
        required: true,
      },
    },
    telephone1: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Distillery Telephone Number',
      },
      validation: {
        isTel: true,
        required: true,
      },
    },
    openingHours: {
      elementType: 'textarea',
      config: {
        type: 'text',
        placeholder: 'Distillery Opening Hours',
        caption: 'This will be displayed as text with the formatting you enter here.',
      },
      validation: {
        required: false,
      },
    },
    contactName: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Contact Name',
      },
      validation: {
        required: true,
      },
    },
    email2: {
      elementType: 'input',
      config: {
        type: 'email',
        placeholder: 'Secondary Email Address',
      },
      validation: {
        required: false,
        isEmail: true,
      },
    },
    telephone2: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Secondary Telephone Number',
      },
      validation: {
        isTel: true,
        required: false,
      },
    },
  },
};

export default RegisterFormSetup;
