import {combineReducers} from 'redux';

import productsReducer from './products/products.reducer';

export default combineReducers({
  products: productsReducer,
});
