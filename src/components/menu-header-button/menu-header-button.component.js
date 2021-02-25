import React from 'react';
import {StyleSheet} from 'react-native';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

import MaterialHeaderButton from '../material-header-button/material-header-button.component';

const MenuHeaderButton = ({navigation}) => {
  return (
    <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
      <Item
        style={styles.menuButton}
        iconName="menu"
        iconSize={23}
        color="black"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    marginLeft: 10,
  },
});

export default MenuHeaderButton;
