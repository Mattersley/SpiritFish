export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export const makeSwitch = (expression, setup) => {
  const switchFunction = () => {
    let output = null;
    const cases = {
      default: null,
    };
    if (setup) {
      Object.entries(setup).forEach((key: any, value: any) => {
        cases[key] = () => { output = value; };
      });
      cases.default = expression;
      (cases[expression] || cases.default)();
    }
    return output;
  };
  return switchFunction();
};
