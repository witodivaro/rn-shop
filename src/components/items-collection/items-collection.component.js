import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {selectProductsItemsArray} from '../../redux/products/products.selectors';

import ShopItem from '../shop-item/shop-item.component';

const renderShopItem = (item, editable) => {
  return <ShopItem item={item} editable={editable} />;
};

const ItemsCollection = ({editable}) => {
  const products = useSelector(selectProductsItemsArray);
  const reversedProducts = products.slice().reverse();

  return (
    <View style={styles.itemsCollection}>
      <FlatList
        data={reversedProducts}
        renderItem={({item}) => renderShopItem(item, editable)}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemsCollection: {
    flex: 1,
  },
});

export default ItemsCollection;
