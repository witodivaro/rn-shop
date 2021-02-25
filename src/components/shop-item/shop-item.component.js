import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import CustomButton from '../custom-button/custom-button.component';

const ShopItem = ({item}) => {
  const {title, imageUrl, price} = item;

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.imageContainer}>
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
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <View style={styles.controls}>
          <CustomButton>DETAILS</CustomButton>
          <CustomButton green>ADD TO CART</CustomButton>
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
