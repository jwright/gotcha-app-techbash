import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArenaCard = ({ arena: { locationName, streetAddress1, streetAddress2, city, state, zipCode } }) => (
  <View style={styles.container}>
    <TouchableOpacity styles={styles.button} onPress={() => console.log(`They selected ${locationName}`)}>
      <Text>{locationName}</Text>
      <Text>{streetAddress1}</Text>
      {streetAddress2 && <Text>{streetAddress1}</Text>}
      <Text>{city}, {state} {zipCode}</Text>
    </TouchableOpacity>
  </View>
);

export default ArenaCard;
