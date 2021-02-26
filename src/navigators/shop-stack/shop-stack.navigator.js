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
    <ShopStack.Navigator
      initialRouteName={SCREENS.Home.name}
      screenOptions={{
        headerRight: () => (
          <CartHeaderButton
            onPress={() => {
              navigation.navigate(SCREENS.Cart.name);
            }}
          />
        ),
      }}>
      <ShopStack.Screen
        key={SCREENS.Home.key}
        name={SCREENS.Home.name}
        component={SCREENS.Home.component}
        options={{
          headerLeft: () => (
            <MenuHeaderButton onPress={() => navigation.toggleDrawer()} />
          ),
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
      <ShopStack.Screen
        key={SCREENS.Cart.key}
        name={SCREENS.Cart.name}
        component={SCREENS.Cart.component}
      />
    </ShopStack.Navigator>
  );
};

export default ShopStackNavigator;
