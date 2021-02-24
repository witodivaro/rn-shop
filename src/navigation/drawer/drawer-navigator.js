import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SCREENS from '../../config/screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator backBehavior="none" initialRouteName={SCREENS.home.name}>
      <Drawer.Screen
        name={SCREENS.home.name}
        key={SCREENS.home.key}
        component={SCREENS.home.component}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
