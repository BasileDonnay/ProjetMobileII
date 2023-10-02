import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'; // Import your HomeScreen component
import Level1 from './level_data/Level1'; // Import your Level1 component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Level1" component={Level1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
