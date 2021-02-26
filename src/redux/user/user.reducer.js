import UserActionTypes from './user.types';

const initialState = {
  orders: [],
};

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case UserActionTypes.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload],
      };

    default:
      return state;
  }
};

export default userReducer;
