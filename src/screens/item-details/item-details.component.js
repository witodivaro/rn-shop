import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, Platform, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createProductsItemByIdSelector} from '../../redux/products/products.selectors';

import RegularText from '../../components/regular-text/regular-text.component';

import CustomButton from '../../components/custom-button/custom-button.component';
import {addItemToCart, clearItemFromCart} from '../../redux/cart/cart.actions';
import {createIsItemInCartSelector} from '../../redux/cart/cart.selectors';
import {useMemo} from 'react';

const ItemDetails = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const itemId = route.params.itemId;
  const item = useSelector(createProductsItemByIdSelector(itemId));
  const itemInCart = useSelector(createIsItemInCartSelector(itemId));

  const {title, description, price, imageUrl} = item;

  const addToCartHandler = () => {
    dispatch(addItemToCart(item));
  };

  const removeFromCartHandler = () => {
    dispatch(clearItemFromCart(item));
  };

  const renderedCartButton = useMemo(
    () =>
      itemInCart ? (
        <CustomButton green icon="check-circle" onPress={removeFromCartHandler}>
          ITEM ADDED
        </CustomButton>
      ) : (
        <CustomButton
          green
          icon={'add-shopping-cart'}
          onPress={addToCartHandler}>
          ADD TO CART
        </CustomButton>
      ),
    [itemInCart, item],
  );

  return (
    <ScrollView contentContainerStyle={styles.itemDetails}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <RegularText style={styles.title}>{title}</RegularText>
      </View>
      <View style={styles.textContainer}>
        <RegularText style={styles.subtitle}>Description</RegularText>
        <RegularText style={styles.text}>{description}</RegularText>
      </View>
      <View style={styles.buttonsContainer}>{renderedCartButton}</View>
      <View style={styles.priceContainer}>
        <RegularText style={[styles.text, styles.price]}>${price}</RegularText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemDetails: {
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    textShadowRadius: Platform.select({
      ios: 3,
      default: 5,
    }),
    textShadowColor: 'black',
  },
  titleContainer: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  image: {
    height: 200,
  },
  buttonsContainer: {
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'Montserrat-Regular',
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 18,
  },
  priceContainer: {
    marginRight: 20,
  },
  price: {
    fontSize: 20,
    textShadowRadius: Platform.select({
      ios: 1,
      default: 2,
    }),
    textShadowColor: '#73a657',
  },
});

export default ItemDetails;
