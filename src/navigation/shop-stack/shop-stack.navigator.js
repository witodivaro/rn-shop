import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SCREENS from '../../config/screens';

const ShopStack = createStackNavigator();

const ShopStackNavigator = () => {
  return (
    <ShopStack.Navigator initialRouteName={SCREENS.Home.name}>
      <ShopStack.Screen
        key={SCREENS.Home.key}
        name={SCREENS.Home.name}
        component={SCREENS.Home.component}
        options={{
          headerLeft: () => {},
        }}
      />
    </ShopStack.Navigator>
  );
};

export default ShopStackNavigator;
