import {combineReducers} from 'redux';

import productsReducer from './products/products.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
