import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar';
import PlaceList from '../components/PlaceList';

const SearchScreen = () => {
  return (
    <View>
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
