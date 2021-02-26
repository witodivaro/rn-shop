import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import CartItem from '../../components/cart-item/cart-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import RegularText from '../../components/regular-text/regular-text.component';
import {
  selectCartItems,
  selectCartItemsPrice,
} from '../../redux/cart/cart.selectors';

const renderCartItem = ({item}) => <CartItem item={item} />;

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsPrice = useSelector(selectCartItemsPrice);

  const renderedCartHeader = (
    <View style={styles.cartHeader}>
      {cartItems.length > 0 ? (
        <>
          <RegularText style={styles.price}>
            TOTAL PRICE: ${cartItemsPrice}
          </RegularText>
          <CustomButton orange>ORDER</CustomButton>
        </>
      ) : (
        <RegularText style={styles.emptyMessage}>
          YOUR CART IS EMPTY!
        </RegularText>
      )}
    </View>
  );

  return (
    <View style={styles.cartContainer}>
      {renderedCartHeader}
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={cartItems}
        renderItem={renderCartItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartHeader: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
  },
  emptyMessage: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default CartScreen;
