import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RegistrationForm from '../../components/RegistrationForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'center',
    fontSize: 40
  }
});

const RegistrationScreen = ()  => {
  const handleRegistration = (player) => {
    console.log('player', player);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Player Registration</Text>
      <RegistrationForm onRegistration={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;
