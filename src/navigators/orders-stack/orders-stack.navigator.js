import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SCREENS from '../../config/screens';
import MenuHeaderButton from '../../components/menu-header-button/menu-header-button.component';
import {useNavigation} from '@react-navigation/native';

const OrdersStack = createStackNavigator();

const OrdersStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <OrdersStack.Navigator initialRouteName={SCREENS.Orders.name}>
      <OrdersStack.Screen
        name={SCREENS.Orders.name}
        key={SCREENS.Orders.key}
        component={SCREENS.Orders.component}
        options={{
          headerLeft: () => (
            <MenuHeaderButton onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
      <OrdersStack.Screen
        name={SCREENS.ItemDetails.name}
        key={SCREENS.ItemDetails.key}
        component={SCREENS.ItemDetails.component}
        options={({route}) => ({
          title: route.params.itemTitle,
        })}
      />
    </OrdersStack.Navigator>
  );
};

export default OrdersStackNavigator;
