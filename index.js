import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

const RNReduxNavigation = () => (
  <NavigationContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => RNReduxNavigation);
