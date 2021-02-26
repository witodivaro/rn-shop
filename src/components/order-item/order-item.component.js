import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import SCREENS from '../../config/screens';

import RegularText from '../regular-text/regular-text.component';

const OrderItem = ({item}) => {
  const navigation = useNavigation();
  const {imageUrl, title, price, quantity, id} = item;

  const itemClickHandler = () => {
    navigation.navigate(SCREENS.ItemDetails.name, {
      itemId: id,
      itemTitle: title,
    });
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={itemClickHandler}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <RegularText style={styles.title}>{title}</RegularText>
        <View style={styles.details}>
          <RegularText style={styles.price}>${price}</RegularText>
          <RegularText style={styles.quantity}>x{quantity}</RegularText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },

  title: {
    textAlign: 'justify',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 30,
  },
  quantity: {
    fontSize: 30,
  },
});

export default OrderItem;
