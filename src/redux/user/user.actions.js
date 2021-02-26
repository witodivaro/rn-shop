import UserActionTypes from './user.types';

export const addUserOrder = ({total, date, items}) => ({
  type: UserActionTypes.ADD_ORDER,
  payload: {total, date, items},
});
