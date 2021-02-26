import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

export const selectUserOrders = createSelector(
  selectUser,
  (user) => user.orders,
);
