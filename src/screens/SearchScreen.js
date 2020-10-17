import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import SearchBar from '../components/SearchBar';
import PlaceList from '../components/PlaceList';
import useSearch from '../hooks/useSearch';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchRun, places, errorMessage] = useSearch();

  useEffect(() => {
    console.log('error_change:', errorMessage);
  }, [errorMessage]);

  const filterByPrice = (data, price) => (
    data.filter(item => item.price === price)
  );

  return (
    <View style={styles.view} >
      <SearchBar
        term={term}
        onChange={setTerm}
        onSubmit={() => searchRun(term)}
      />
      {!!errorMessage && <Text>{errorMessage}</Text>}
      {/* <Text>We have found: {places.length}</Text> */}
      <ScrollView>
        <PlaceList
          places={filterByPrice(places, "$")}
          title="Cost Effective"
        />
        <PlaceList
          places={filterByPrice(places, "$$")}
          title="Bit Pricier"
        />
        <PlaceList
          places={filterByPrice(places, "$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // marginLeft: 10,
  },
});

export default SearchScreen;
