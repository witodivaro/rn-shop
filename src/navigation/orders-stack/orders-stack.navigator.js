import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SCREENS from '../../config/screens';

const OrdersStack = createStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator initialRouteName={SCREENS.Orders.name}>
      <OrdersStack.Screen
        name={SCREENS.Orders.name}
        key={SCREENS.Orders.key}
        component={SCREENS.Orders.component}
      />
    </OrdersStack.Navigator>
  );
};

export default OrdersStackNavigator;
