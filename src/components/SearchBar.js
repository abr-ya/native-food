import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ term, onChange, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newValue => onChange(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#DDD',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    color: 'grey',
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  }
});

export default SearchBar;
