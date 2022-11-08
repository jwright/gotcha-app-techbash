import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ArenaListScreen from './screens/ArenaListScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = ()  => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, title: "Gotcha!" }} />
      <Stack.Screen name="ArenaList" component={ArenaListScreen} options={{ headerShown: false, title: "Select an Arena" }} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App;
