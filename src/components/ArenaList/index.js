import React from "react";
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import ArenaCard from '../ArenaCard';

const ArenaList = ({ arenas, navigation }) => {
  if (!arenas) return null;

  return (
    <View style={styles.container}>
      {arenas.map(arena => (
        <ArenaCard key={arena.id} arena={arena} navigation={navigation} />
      ))}
    </View>
  );
};

export default ArenaList;
