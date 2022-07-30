const AddProductFormSetup = {
  formType: 'authForgot',
  enterToSubmit: true,
  labelsRequired: false,
  fields: {
    productName: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Product Name',
      },
      validation: {
        required: true,
      },
    },
    description: {
      elementType: 'textarea',
      config: {
        type: 'text',
        placeholder: 'Description',
      },
      validation: {
        required: false,
      },
    },
    spiritType: {
      elementType: 'dropdown',
      config: {
        type: 'text',
        placeholder: 'Spirit Type Dropdown',
      },
      validation: {
        required: true,
      },
    },
    abv: {
      elementType: 'input',
      config: {
        type: 'number',
        placeholder: 'Product ABV (in %)',
      },
      validation: {
        required: true,
      },
    },
    age: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Product Age (Enter NAS for "No age statement")',
      },
      validation: {
        required: true,
      },
    },
    region: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Region',
      },
      validation: {
        required: false,
      },
    },
    flavourProfile: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Flavours (list with commas)',
      },
      validation: {
        required: false,
      },
    },
    tastingNotes: {
      elementType: 'textarea',
      config: {
        type: 'text',
        placeholder: 'Tasting Notes',
      },
      validation: {
        required: false,
      },
    },
    formats: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Enter retail formats separated by commas (e.g. 750ml, 350ml, 100ml)',
      },
      validation: {
        required: false,
      },
    },
    avgPrice: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Average Price',
      },
      validation: {
        required: false,
      },
    },
    buyLinks: {
      elementType: 'input',
      config: {
        type: 'text',
        placeholder: 'Enter links for purchasing product',
      },
      validation: {
        required: false,
      },
    },
  },
};

export default AddProductFormSetup;
