import ProductsActionTypes from './products.types';
import {addProduct, changeProduct, deleteProduct} from './products.utils';

const initialState = {
  items: [],
};

const productsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ProductsActionTypes.CHANGE_PRODUCT:
      return {
        ...state,
        items: changeProduct(state.items, payload),
      };

    case ProductsActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        items: deleteProduct(state.items, payload),
      };

    case ProductsActionTypes.ADD_PRODUCT:
      return {
        ...state,
        items: addProduct(state.items, payload),
      };

    case ProductsActionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
