import CartScreen from '../screens/cart/cart.component';
import HomeScreen from '../screens/home/home.component';
import ItemDetailsScreen from '../screens/item-details/item-details.component';

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
};

export default SCREENS;
