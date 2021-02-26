import CartScreen from '../screens/cart/cart.component';
import EditProductScreen from '../screens/edit-product/edit-product.component';
import HomeScreen from '../screens/home/home.component';
import ItemDetailsScreen from '../screens/item-details/item-details.component';
import ManageProductsScreen from '../screens/manage-products/manage-products.component';
import OrdersScreen from '../screens/orders/orders.component';

const SCREENS = {
  Home: {
    name: 'Home',
    key: 'home',
    component: HomeScreen,
  },
  ItemDetails: {
    name: 'ItemDetails',
    key: 'itemDetails',
    component: ItemDetailsScreen,
  },
  Cart: {
    name: 'Cart',
    key: 'cart',
    component: CartScreen,
  },
  Orders: {
    name: 'Orders',
    key: 'orders',
    component: OrdersScreen,
  },
  ManageProducts: {
    name: 'ManageProducts',
    key: 'manageProducts',
    component: ManageProductsScreen,
  },
  EditProduct: {
    name: 'EditProduct',
    key: 'editProduct',
    component: EditProductScreen,
  },
};

export default SCREENS;
