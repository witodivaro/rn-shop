import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import DrawerNavigator from './src/navigators/drawer/drawer.navigator.js';

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
