import {combineReducers} from 'redux';

import productsReducer from './products/products.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});
