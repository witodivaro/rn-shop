import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import RegularText from '../regular-text/regular-text.component';
import SCREENS from '../../config/screens';
import CustomButton from '../custom-button/custom-button.component';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, clearItemFromCart} from '../../redux/cart/cart.actions';
import {createIsItemInCartSelector} from '../../redux/cart/cart.selectors';
import {useMemo} from 'react';

const ShopItem = ({item}) => {
  const {id, title, imageUrl, price} = item;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isItemInCart = useSelector(createIsItemInCartSelector(id));

  const navigateToDetailsHandler = () => {
    navigation.navigate(SCREENS.ItemDetails.name, {
      itemId: id,
      itemTitle: title,
    });
  };

  const addToCartHandler = () => {
    dispatch(addItemToCart(item));
  };

  const removeFromCartHandler = () => {
    dispatch(clearItemFromCart(item));
  };

  const renderedCartButton = useMemo(
    () =>
      isItemInCart ? (
        <CustomButton icon="check-circle" green onPress={removeFromCartHandler}>
          ITEM ADDED
        </CustomButton>
      ) : (
        <CustomButton icon="add-shopping-cart" green onPress={addToCartHandler}>
          ADD TO CART
        </CustomButton>
      ),
    [item, isItemInCart],
  );

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={navigateToDetailsHandler}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.details}>
        <View style={styles.info}>
          <RegularText style={styles.title}>{title}</RegularText>
          <RegularText style={styles.price}>${price}</RegularText>
        </View>
        <View style={styles.controls}>
          <CustomButton onPress={navigateToDetailsHandler}>
            DETAILS
          </CustomButton>
          {renderedCartButton}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  imageContainer: {
    elevation: 6,
  },
  image: {
    height: 200,
    borderRadius: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    elevation: 6,
    borderRadius: 10,
  },
  title: {
    color: '#111',
    fontSize: 16,
    width: '80%',
  },
  price: {
    width: '20%',
    textAlign: 'right',
    fontSize: 16,
  },
  controls: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ShopItem;
