import React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../../components/cart-item/cart-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CenteredModal from '../../components/centered-modal/centered-modal';

import RegularText from '../../components/regular-text/regular-text.component';
import {
  selectCartItems,
  selectCartItemsPrice,
} from '../../redux/cart/cart.selectors';
import {addUserOrder} from '../../redux/user/user.actions';
import {clearCart} from '../../redux/cart/cart.actions';
import {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {STACK_NAVIGATORS} from '../../config/navigators';

const renderCartItem = ({item}) => <CartItem item={item} />;

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsPrice = useSelector(selectCartItemsPrice);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isOrderModalShown, setIsOrderModalShown] = useState(false);

  const openOrderModalHandler = () => {
    setIsOrderModalShown((isOrderModalShown) => !isOrderModalShown);
  };

  const closeModalHandler = () => {
    setIsOrderModalShown(false);
  };

  const orderHandler = () => {
    const now = new Date();
    dispatch(
      addUserOrder({total: cartItemsPrice, items: cartItems, date: now}),
    );
    setIsOrderModalShown(false);
    dispatch(clearCart());
    navigation.reset({
      index: 0,
      routes: [{name: STACK_NAVIGATORS.Orders.name}],
    });
  };

  const renderedCartHeader = (
    <View style={styles.cartHeader}>
      {cartItems.length > 0 ? (
        <>
          <RegularText style={styles.price}>
            TOTAL PRICE: ${cartItemsPrice}
          </RegularText>
          <CustomButton orange onPress={openOrderModalHandler}>
            ORDER
          </CustomButton>
        </>
      ) : (
        <RegularText style={styles.emptyMessage}>
          YOUR CART IS EMPTY!
        </RegularText>
      )}
    </View>
  );

  const renderedOrderModal = useMemo(
    () => (
      <CenteredModal
        visible={isOrderModalShown}
        setVisible={setIsOrderModalShown}>
        <View style={styles.orderModal}>
          <RegularText style={styles.modalPriceTitle}>
            Total price is:{' '}
          </RegularText>
          <RegularText style={styles.modalPrice}>${cartItemsPrice}</RegularText>
          <View style={styles.modalControls}>
            <CustomButton
              style={styles.modalButton}
              green
              onPress={orderHandler}>
              ORDER
            </CustomButton>
            <CustomButton red onPress={closeModalHandler}>
              CANCEL
            </CustomButton>
          </View>
        </View>
      </CenteredModal>
    ),
    [isOrderModalShown, cartItemsPrice, orderHandler, closeModalHandler],
  );

  return (
    <View style={styles.cartContainer}>
      {renderedCartHeader}
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={cartItems}
        renderItem={renderCartItem}
      />
      {renderedOrderModal}
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    elevation: 5,
    shadowOpacity: 0.26,
    shadowRadius: 9,
  },
  price: {
    fontSize: 18,
  },
  emptyMessage: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
  orderModal: {
    backgroundColor: '#eee',
    alignItems: 'center',
    padding: 20,
  },
  modalPriceTitle: {
    fontSize: 18,
  },
  modalPrice: {
    fontSize: 20,
    textShadowColor: 'black',
    textShadowRadius: 3,
  },
  modalControls: {
    marginTop: 20,
    flexDirection: 'row',
  },
  modalButton: {
    marginRight: 20,
  },
});

export default CartScreen;
