import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';

import AddProductForm from '../../../Products/components/AddProductForm/AddProductForm';

interface DistilleryHomePropTypes {
    clearErrors: any,
    createProduct: any,
    error: string,
}

const DistilleryHome = ({ clearErrors, createProduct, error }: DistilleryHomePropTypes) => {
  const addProductSubmitFunction = (values) => {
    createProduct(values);
  };

  return (
  //* ACCOUNT/ADMIN CARD *//
  //* Products:
  // - existing products list
  // - new product entry form
  // - delete button
  //* Distillery Info:
  // - Opening hours etc
  //* STATISTICS *//
    <div>
      <h1>Distillery Home</h1>
      <AddProductForm clearErrors={clearErrors} error={error} submitFunction={addProductSubmitFunction} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.distiller.error,
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(actions.clearDistilleryErrors()),
  createProduct: (values) => dispatch(actions.createProduct(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DistilleryHome);
