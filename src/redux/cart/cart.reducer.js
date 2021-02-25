import CartActionTypes from './cart.types';
import {addItem} from './cart.utils';

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
        items: state.items.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};

export default cartReducer;
