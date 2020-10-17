import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ItemScreen from './src/screens/ItemScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Item: ItemScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Food Place Search App',
  },
});

export default createAppContainer(navigator);
