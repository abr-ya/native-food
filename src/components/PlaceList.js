import React from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
import PlaceItem from '../components/PlaceItem';

const PlaceList = ({ title, places, navigation }) => {
  const itemPressHandler = (item) => {
    navigation.navigate('Item', {
      id: item.id,
    })
  };

  if (!places.length) return null;

  return (
    <View>
      <Text style={styles.title} >{title} ({places.length})</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={places}
        keyExtractor={(place) => place.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => itemPressHandler(item)}>
            <PlaceItem data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  }
});

export default withNavigation(PlaceList);
