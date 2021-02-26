import memoize from 'lodash.memoize';
import {create} from 'react-test-renderer';
import {createSelector} from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(selectCart, (cart) => cart.items);

export const selectCartItemsPrice = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce((price, item) => item.price * item.quantity + price, 0),
);

export const createIsItemInCartSelector = memoize((itemId) =>
  createSelector(
    selectCartItems,
    (cartItems) => !!cartItems.find((item) => item.id === itemId),
  ),
);
