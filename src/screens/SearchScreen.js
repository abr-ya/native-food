import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from '../components/SearchBar';
import PlaceList from '../components/PlaceList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const onSearchRun = () => {
    console.log('Run!', term);
    setTerm('');
  }

  return (
    <View>
      <SearchBar term={term} onChange={setTerm} onSubmit={onSearchRun} />
      <Text>{term}</Text>
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
