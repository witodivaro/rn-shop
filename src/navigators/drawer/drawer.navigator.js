import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {STACK_NAVIGATORS} from '../../config/navigators';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      backBehavior="none"
      initialRouteName={STACK_NAVIGATORS.Shop.name}>
      <Drawer.Screen
        name={STACK_NAVIGATORS.Shop.name}
        key={STACK_NAVIGATORS.Shop.key}
        component={STACK_NAVIGATORS.Shop.component}
        options={{
          title: 'Shop',
        }}
      />
      <Drawer.Screen
        name={STACK_NAVIGATORS.Orders.name}
        key={STACK_NAVIGATORS.Orders.key}
        component={STACK_NAVIGATORS.Orders.component}
        options={{
          title: 'Orders',
        }}
      />
      <Drawer.Screen
        name={STACK_NAVIGATORS.Admin.name}
        key={STACK_NAVIGATORS.Admin.key}
        component={STACK_NAVIGATORS.Admin.component}
        options={{
          title: 'Manage products',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
