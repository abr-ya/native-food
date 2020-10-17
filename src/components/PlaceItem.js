import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const PlaceItem = ({ data }) => {
  return (
    <View style={styles.view}>
      {data.image_url &&
        <Image
          style={styles.image}
          source={{ uri: data.image_url }}
        />
      }
      <Text style={styles.name} >{data.name}</Text>
      <Text>{data.rating} stars, {data.review_count} reviews </Text>
    </View>
  ); 
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
    marginRight: 0,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: 180,
    height: 120,
    borderRadius: 5,
    marginTop: -5,
  }
});

export default PlaceItem;
