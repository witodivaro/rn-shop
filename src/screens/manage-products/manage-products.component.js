import React from 'react';
import {StyleSheet, View} from 'react-native';
import RegularText from '../../components/regular-text/regular-text.component';

import ItemsCollection from '../../components/items-collection/items-collection.component';

const ManageProductsScreen = () => {
  return (
    <View style={styles.screen}>
      <ItemsCollection editable />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ManageProductsScreen;
