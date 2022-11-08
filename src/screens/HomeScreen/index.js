import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import * as Location from 'expo-location';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation })  => {
  const handleFindNearbyArenas = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if (granted) {
      const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();
      navigate({latitude, longitude});
    }
  }

  const navigate = ({latitude, longitude}) => {
    navigation.navigate("ArenaList", { location: { latitude, longitude }});
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to Gotcha!</Text>
      <Text>We will get you playing in a moment</Text>
      <Text>In order to get the arenas you can play in, we need to ask for your location first so you can find one nearby.</Text>
      <Button onPress={handleFindNearbyArenas} title="Find Nearby Arenas" />
    </View>
  )
}

export default HomeScreen;
