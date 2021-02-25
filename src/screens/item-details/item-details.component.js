import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, Text, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {createProductsItemByIdSelector} from '../../redux/products/products.selectors';

import CustomButton from '../../components/custom-button/custom-button.component';

const ItemDetails = () => {
  const route = useRoute();
  const itemId = route.params.itemId;
  const item = useSelector(createProductsItemByIdSelector(itemId));

  const {title, description, price, imageUrl} = item;

  return (
    <View style={styles.itemDetails}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton green>ADD TO CART</CustomButton>
      </View>
      <View style={styles.priceContainer}>
        <Text style={[styles.text, styles.price]}>${price}</Text>
      </View>
    </View>
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
  },
});

export default ItemDetails;
