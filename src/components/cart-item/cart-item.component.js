import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import RegularText from '../regular-text/regular-text.component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../redux/cart/cart.actions';
import {useDispatch} from 'react-redux';

const RemoveButton = (props) => (
  <TouchableOpacity style={styles.removeButton} {...props}>
    <Icon name="clear" size={40} color="#444" />
  </TouchableOpacity>
);

const IncreaseButton = ({disabled, ...otherProps}) => (
  <TouchableOpacity
    style={styles.increaseButton}
    disabled={disabled}
    {...otherProps}>
    <Icon
      name="keyboard-arrow-up"
      size={40}
      color={disabled ? '#ccc' : 'black'}
    />
  </TouchableOpacity>
);

const DecreaseButton = ({disabled, ...otherProps}) => (
  <TouchableOpacity
    style={styles.decreaseButton}
    disabled={disabled}
    {...otherProps}>
    <Icon
      name="keyboard-arrow-down"
      size={40}
      color={disabled ? '#ccc' : 'black'}
    />
  </TouchableOpacity>
);

const CartItem = ({item}) => {
  const {title, price, imageUrl, quantity} = item;
  const dispatch = useDispatch();

  const removeButtonHandler = () => {
    dispatch(clearItemFromCart(item));
  };

  const increaseButtonHandler = () => {
    dispatch(addItemToCart(item));
  };

  const decreaseButtonHandler = () => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <View style={styles.cartItem}>
      <View style={styles.quantityContainer}>
        <IncreaseButton onPress={increaseButtonHandler} />
        <View style={styles.quantityInfo}>
          <RegularText style={styles.quantity}>{quantity}</RegularText>
        </View>
        <DecreaseButton
          onPress={decreaseButtonHandler}
          disabled={quantity === 1}
        />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <RegularText style={styles.itemName}>{title}</RegularText>
        <RegularText style={styles.price}>$ {price}</RegularText>
        <RegularText style={styles.subprice}>$ {price * quantity}</RegularText>
      </View>
      <View style={styles.controls}>
        <RemoveButton onPress={removeButtonHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    marginHorizontal: 5,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
  },
  quantity: {
    marginRight: 10,
    fontSize: 35,
    width: '100%',
    textAlign: 'center',
  },
  quantityContainer: {
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  quantityInfo: {
    position: 'relative',
    flexDirection: 'row',
    width: 50,
  },
  image: {
    height: 150,
    width: '30%',
  },
  details: {
    padding: 10,
    width: '40%',
  },
  removeButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
  },
  price: {
    marginTop: 'auto',
    marginLeft: 'auto',
    fontSize: 40,
  },
  subprice: {
    marginLeft: 'auto',
  },
  controls: {
    justifyContent: 'center',
  },
  increaseButton: {
    width: '100%',
    alignItems: 'center',
  },
  decreaseButton: {
    width: '100%',
    alignItems: 'center',
  },
});

export default CartItem;
