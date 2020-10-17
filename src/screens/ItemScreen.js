import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import usePlace from '../hooks/usePlace';

const ItemScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [place, loading, errorMessage] = usePlace(id);

  console.log('place alias in Screen: ', place.alias);

  if (loading) {
    return (
      <View style={styles.view}>
         <Text style={styles.name}>... loading ...</Text>
      </View>
    ); 
  }

  return (
    <View style={styles.view}>
      <Text style={styles.name}>{place.name}</Text>
      {place.photos.length &&
        <FlatList
          data={place.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => (
            <Image
              style={styles.image}
              source={{ uri: item }}
            />          
          )}
        />
      }

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
    marginBottom: 5,
  }
});

export default ItemScreen;
