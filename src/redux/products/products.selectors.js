import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectProducts = (state) => state.products;

export const selectProductsItems = createSelector(
  selectProducts,
  (products) => products.items,
);

export const selectProductsItemsArray = createSelector(
  selectProducts,
  (products) => Object.values(products.items),
);

export const createProductsItemByIdSelector = memoize((id) =>
  createSelector(selectProductsItems, (productItems) => {
    return productItems[id] || null;
  }),
);
