import ProductsActionTypes from './products.types';

export const changeProduct = (id, productData) => ({
  type: ProductsActionTypes.CHANGE_PRODUCT,
  payload: {id, ...productData},
});
