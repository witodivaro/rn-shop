import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREENS from '../../config/screens';
import MenuHeaderButton from '../../components/menu-header-button/menu-header-button.component';
import {useNavigation} from '@react-navigation/native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import MaterialHeaderButton from '../../components/material-header-button/material-header-button.component';

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
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
              <Item
                iconSize={30}
                iconName="add-circle-outline"
                onPress={() =>
                  navigation.navigate(SCREENS.EditProduct.name, {
                    itemId: null,
                  })
                }
              />
            </HeaderButtons>
          ),
        }}
      />
      <AdminStack.Screen
        name={SCREENS.EditProduct.name}
        key={SCREENS.EditProduct.key}
        component={SCREENS.EditProduct.component}
        options={({route}) => {
          return {
            title: route.params.itemId !== null ? 'Edit' : 'Add',
          };
        }}
      />
    </AdminStack.Navigator>
  );
};

export default AdminStackNavigator;
