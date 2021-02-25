import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import SCREENS from '../../config/screens';
import MenuHeaderButton from '../../components/menu-header-button/menu-header-button.component';
import {useNavigation} from '@react-navigation/native';
import CartHeaderButton from '../../components/cart-header-button/cart-header-button.component';

const ShopStack = createStackNavigator();

const ShopStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <ShopStack.Navigator initialRouteName={SCREENS.Home.name}>
      <ShopStack.Screen
        key={SCREENS.Home.key}
        name={SCREENS.Home.name}
        component={SCREENS.Home.component}
        options={{
          headerLeft: () => (
            <MenuHeaderButton onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => <CartHeaderButton />,
        }}
      />
    </ShopStack.Navigator>
  );
};

export default ShopStackNavigator;
