import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import PlaceItem from '../components/PlaceItem';

const PlaceList = ({ title, places }) => {
  return (
    <View>
      <Text style={styles.title} >{title} ({places.length})</Text>
      <FlatList 
        horizontal
        data={places}
        keyExtractor={(place) => place.id}
        renderItem={({ item }) => (
          <PlaceItem data={item} />
        )}
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default PlaceList;
