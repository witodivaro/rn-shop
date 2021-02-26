import UserActionTypes from './user.types';
import {identifyOrder} from './user.utils';

const initialState = {
  orders: [],
};

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case UserActionTypes.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, identifyOrder(payload)],
      };

    default:
      return state;
  }
};

export default userReducer;
