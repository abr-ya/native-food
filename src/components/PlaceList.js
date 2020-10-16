import React from "react";
import { Text, StyleSheet, View } from "react-native";

const PlaceList = ({ title }) => {
  return (
    <View>
      <Text style={styles.title} >{title}</Text>
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
