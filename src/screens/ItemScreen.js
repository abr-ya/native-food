import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ItemScreen = ({ data }) => {
  return (
    <View style={styles.view}>
      {/* <Image
        style={styles.image}
        source={{ uri: data.image_url }}
      /> */}
      <Text style={styles.name} >One Item Screen</Text>
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

export default ItemScreen;
