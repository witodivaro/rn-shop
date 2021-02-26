import AdminStackNavigator from '../navigators/admin-stack/admin-stack.navigator';
import OrdersStackNavigator from '../navigators/orders-stack/orders-stack.navigator';
import ShopStackNavigator from '../navigators/shop-stack/shop-stack.navigator';

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
  Admin: {
    component: AdminStackNavigator,
    name: 'admin-stack',
    key: 'admin-stack',
  },
};
