import OrdersStackNavigator from '../navigation/orders-stack/orders-stack.navigator';
import ShopStackNavigator from '../navigation/shop-stack/shop-stack.navigator';

export const STACK_NAVIGATORS = {
  Shop: {
    component: ShopStackNavigator,
    name: 'shop-stack',
    key: 'shop-stack',
  },
  Orders: {
    component: OrdersStackNavigator,
    name: 'orders-stack',
    key: 'orders-stack',
  },
};
