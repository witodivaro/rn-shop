import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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
          headerRight: () => <CartHeaderButton onPress={() => {}} />,
        }}
      />
      <ShopStack.Screen
        key={SCREENS.ItemDetails.key}
        name={SCREENS.ItemDetails.name}
        component={SCREENS.ItemDetails.component}
        options={({route}) => ({
          title: route.params.itemTitle,
        })}
      />
    </ShopStack.Navigator>
  );
};

export default ShopStackNavigator;
