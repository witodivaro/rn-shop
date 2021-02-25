import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomButton from '../../components/custom-button/custom-button.component';
import RegularText from '../../components/regular-text/regular-text.component';

const CartScreen = () => {
  return (
    <View style={styles.cartContainer}>
      <RegularText>CART SCREEN</RegularText>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {},
});

export default CartScreen;
