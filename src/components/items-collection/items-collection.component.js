import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {selectProductsItems} from '../../redux/products/products.selectors';

import ShopItem from '../shop-item/shop-item.component';

const renderShopItem = ({item}) => {
  return <ShopItem item={item} />;
};
const ItemsCollection = () => {
  const products = useSelector(selectProductsItems);

  return (
    <View style={styles.itemsCollection}>
      <FlatList data={products} renderItem={renderShopItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemsCollection: {
    flex: 1,
  },
});

export default ItemsCollection;
