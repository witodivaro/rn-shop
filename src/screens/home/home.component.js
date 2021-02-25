import React from 'react';
import {StyleSheet, View} from 'react-native';

import ItemsCollection from '../../components/items-collection/items-collection.component';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <ItemsCollection />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
