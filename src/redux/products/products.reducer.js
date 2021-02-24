import PRODUCTS_MOCK from './products.mock-data';

const initialState = {
  items: PRODUCTS_MOCK,
};

const productsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};

export default productsReducer;
