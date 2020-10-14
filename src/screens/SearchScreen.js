import React from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar';
import PlaceList from '../components/PlaceList';

const SearchScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle1}>Search Screen</Text>
      <SearchBar />
      <PlaceList />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 24,
  },
});

export default SearchScreen;
