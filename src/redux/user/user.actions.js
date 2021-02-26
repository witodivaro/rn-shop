import UserActionTypes from './user.types';

export const addUserOrder = (order) => ({
  type: UserActionTypes.ADD_ORDER,
  payload: order,
});
