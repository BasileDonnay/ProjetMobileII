import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen'; // Import your HomeScreen component
import LevelScreen from './pages/LevelScreen'; // Import your Level1 component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Level" component={LevelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}