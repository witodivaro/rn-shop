import CartActionTypes from './cart.types';
import {addItem, removeItem} from './cart.utils';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItem(state.items, payload),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItem(state.items, payload),
      };

    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
