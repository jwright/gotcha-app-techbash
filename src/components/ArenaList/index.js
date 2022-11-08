import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import ArenaCard from '../ArenaCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArenaList = ({ arenas }) => {
  if (!arenas) return null;

  return (
    <View style={styles.container}>
      {arenas.map(arena => (
        <ArenaCard key={arena.id} arena={arena} />
      ))}
      <Text>You have {arenas.length} arenas</Text>
    </View>
  );
};

export default ArenaList;
