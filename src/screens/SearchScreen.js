import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from '../components/SearchBar';
import PlaceList from '../components/PlaceList';
import usePlaces from '../hooks/usePlaces';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchRun, places, errorMessage] = usePlaces();

  useEffect(() => {
    console.log('error_change:', errorMessage);
  }, [errorMessage]);

  const filterByPrice = (data, price) => (
    data.filter(item => item.price === price)
  );

  return (
    <View>
      <SearchBar
        term={term}
        onChange={setTerm}
        onSubmit={() => searchRun(term)}
      />
      {!!errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found: {places.length}</Text>
      <PlaceList places={filterByPrice(places, "$")} title="Cost Effective" />
      <PlaceList places={filterByPrice(places, "$$")} title="Bit Pricier" />
      <PlaceList places={filterByPrice(places, "$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 24,
  },
});

export default SearchScreen;
