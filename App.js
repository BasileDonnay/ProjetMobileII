import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton from './components/CustomButton';

import HomeScreen from './pages/HomeScreen'; // Import HomeScreen component
import LevelScreen from './pages/LevelScreen'; // Import Level component
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({route, navigation}) => ({ 
            title: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerShadowVisible: false,
            headerRight: () => (
              <CustomButton
              title={`Login`}
              color='#8ceb34'
              height={50}
              width={100}
              onPress={() => navigation.navigate('Login')}
            /> 
            ), 
        })}  
        />

        <Stack.Screen name="Level" component={LevelScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}