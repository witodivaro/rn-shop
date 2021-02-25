import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MaterialHeaderButton from '../material-header-button/material-header-button.component';

const CartHeaderButton = (props) => {
  return (
    <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
      <Item iconName="shopping-cart" {...props} />
    </HeaderButtons>
  );
};

export default CartHeaderButton;
