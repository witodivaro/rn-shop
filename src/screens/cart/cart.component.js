import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import CartItem from '../../components/cart-item/cart-item.component';

import CustomButton from '../../components/custom-button/custom-button.component';
import RegularText from '../../components/regular-text/regular-text.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';

const renderCartItem = ({item}) => <CartItem item={item} />;

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <View style={styles.cartContainer}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={cartItems}
        renderItem={renderCartItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {},
});

export default CartScreen;
