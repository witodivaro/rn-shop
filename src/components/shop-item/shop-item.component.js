import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import RegularText from '../regular-text/regular-text.component';
import SCREENS from '../../config/screens';
import CustomButton from '../custom-button/custom-button.component';

const ShopItem = ({item}) => {
  const {id, title, imageUrl, price} = item;
  const navigation = useNavigation();

  const navigateToDetailsHandler = () => {
    navigation.navigate(SCREENS.ItemDetails.name, {
      itemId: id,
      itemTitle: title,
    });
  };

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
