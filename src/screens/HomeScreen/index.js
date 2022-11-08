import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = ()  => (
  <View style={styles.container}>
    <Text>Changed it!</Text>
    <StatusBar style="auto" />
  </View>
)

export default HomeScreen;
