import firebase from '../../firebase/config';
import ProductsActionTypes from './products.types';

export const changeProduct = (id, productData) => ({
  type: ProductsActionTypes.CHANGE_PRODUCT,
  payload: {id, ...productData},
});

export const deleteProduct = (id) => ({
  type: ProductsActionTypes.DELETE_PRODUCT,
  payload: id,
});

export const addProduct = (product) => ({
  type: ProductsActionTypes.ADD_PRODUCT,
  payload: product,
});

export const fetchItemsSuccess = (products) => ({
  type: ProductsActionTypes.FETCH_ITEMS_SUCCESS,
  payload: products,
});

export const fetchItemsStart = () => async (dispatch) => {
  const itemsRef = firebase.firestore().collection('items');
  const snapshot = await itemsRef.get();
  const items = snapshot.docs.map((doc) => doc.data());

  return dispatch(fetchItemsSuccess(items));
};
