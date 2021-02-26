import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREENS from '../../config/screens';
import MenuHeaderButton from '../../components/menu-header-button/menu-header-button.component';
import {useNavigation} from '@react-navigation/native';
import RegularText from '../../components/regular-text/regular-text.component';

const AdminStack = createStackNavigator();

const AdminStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <AdminStack.Navigator initialRouteName={SCREENS.ManageProducts.name}>
      <AdminStack.Screen
        name={SCREENS.ManageProducts.name}
        key={SCREENS.ManageProducts.key}
        component={SCREENS.ManageProducts.component}
        options={{
          title: 'Manage products',
          headerLeft: () => (
            <MenuHeaderButton onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
      <AdminStack.Screen
        name={SCREENS.EditProduct.name}
        key={SCREENS.EditProduct.key}
        component={SCREENS.EditProduct.component}
        options={{
          title: 'Edit',
          headerRight: () => <RegularText>SAVE (WIP)</RegularText>,
        }}
      />
    </AdminStack.Navigator>
  );
};

export default AdminStackNavigator;
