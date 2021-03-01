import ProductsActionTypes from './products.types';

export const changeProduct = (id, productData) => ({
  type: ProductsActionTypes.CHANGE_PRODUCT,
  payload: {id, ...productData},
});

export const deleteProduct = (id) => ({
  type: ProductsActionTypes.DELETE_PRODUCT,
  payload: id,
});

export const addProduct = (product) => ({
  type: ProductsActionTypes.ADD_PRODUCT,
  payload: product,
});
