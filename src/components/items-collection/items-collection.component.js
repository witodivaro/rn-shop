import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchItemsStart} from '../../redux/products/products.actions';

import {selectProductsItemsArray} from '../../redux/products/products.selectors';

import ShopItem from '../shop-item/shop-item.component';

const renderShopItem = (item, editable) => {
  return <ShopItem item={item} editable={editable} />;
};

const ItemsCollection = ({editable}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const products = useSelector(selectProductsItemsArray);
  const reversedProducts = products.slice().reverse();

  useEffect(() => {
    const fetchItems = () => {
      dispatch(fetchItemsStart());

      setIsLoading(false);
    };

    fetchItems();
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        style={{
          flex: 1,
        }}
      />
    );
  }

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
