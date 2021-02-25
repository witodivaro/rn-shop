import {createSelector} from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(selectCart, (cart) => cart.items);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((count, item) => item.quantity + count, 0),
);

export const selectCartItemsPrice = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((price, item) => item.price + price, 0),
);
