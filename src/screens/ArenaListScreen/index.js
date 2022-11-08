import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const ArenaListScreen = ({ route, location }) => {
  const { location: { latitude, longitude }} = route.params;

  return (
    <View style={styles.container}>
      <Text>Your location is {latitude}/{longitude}</Text>
    </View>
  );
};

export default ArenaListScreen;
