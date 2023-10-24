import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton from './components/CustomButton';
import { auth } from './firebase';

import HomeScreen from './pages/HomeScreen'; // Import HomeScreen component
import LevelScreen from './pages/LevelScreen'; // Import Level component
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProfileScreen from './pages/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isUserConnected, setIsUserConnected] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsUserConnected(user !== null);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerShadowVisible: false,
            headerRight: () => {
              const button = isUserConnected ? (
                <CustomButton
                  title={`Profile`}
                  color='#8ceb34'
                  height={50}
                  width={100}
                  onPress={() => navigation.navigate('Profile')}
                />
              ) : (
                <CustomButton
                  title={`Login`}
                  color='#8ceb34'
                  height={50}
                  width={100}
                  onPress={() => navigation.navigate('Login')}
                />
              );

              return button;
            },
          })}
        />

        <Stack.Screen name="Level" component={LevelScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation }) => ({
            title: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerShadowVisible: false,
            headerRight: () => (
              <CustomButton
                title={`Logout`}
                color='#f52727'
                height={50}
                width={100}
                onPress={() => navigation.navigate('Home')}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
