import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import DrawerNavigator from './src/navigation/drawer/drawer.navigator.js';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <DrawerNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
