import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import RegularText from '../regular-text/regular-text.component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {removeItemFromCart} from '../../redux/cart/cart.actions';
import {useDispatch} from 'react-redux';

const RemoveButton = (props) => (
  <TouchableOpacity style={styles.removeButton} {...props}>
    <Icon name="clear" size={40} color="#444" />
  </TouchableOpacity>
);

const CartItem = ({item}) => {
  const {title, price, imageUrl, quantity} = item;
  const dispatch = useDispatch();

  const removeButtonHandler = () => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <View style={styles.cartItem}>
      <RegularText style={styles.quantity}>{quantity}</RegularText>
      <RegularText style={styles.quantityMark}>X</RegularText>
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
      </View>
      <View style={styles.controls}>
        <RemoveButton onPress={removeButtonHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
  },
  quantity: {
    margin: 10,
    fontSize: 50,
    alignSelf: 'center',
  },
  quantityMark: {
    marginRight: 10,
    alignSelf: 'center',
    fontSize: 20,
  },
  image: {
    height: 150,
    width: '30%',
  },
  details: {
    padding: 10,
    width: '40%',
    justifyContent: 'space-around',
  },
  removeButton: {
    width: 50,
    height: 50,
  },
  itemName: {
    fontSize: 16,
  },
  price: {
    fontSize: 40,
  },
  controls: {
    justifyContent: 'center',
  },
});

export default CartItem;
