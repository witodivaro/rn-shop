import PRODUCTS_MOCK from './products.mock-data';
import ProductsActionTypes from './products.types';
import {changeProduct} from './products.utils';

const initialState = {
  items: PRODUCTS_MOCK,
};

const productsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ProductsActionTypes.CHANGE_PRODUCT:
      return {
        ...state,
        items: changeProduct(state.items, payload),
      };

    default:
      return state;
  }
};

export default productsReducer;
