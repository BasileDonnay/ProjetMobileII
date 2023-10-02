/*function LevelScreen({ route, navigation }) {
  const { level } = route.params;
  const goBackToHome = () => {
    navigation.goBack();
  };

  const [code, setCode] = useState(`function myFunction() {\n  console.log('Hello, World!');\n}`);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Level {level}</Text>
      <TextInput
        multiline
        style={styles.codeEditor}
        value={code}
        onChangeText={(newCode) => setCode(newCode)}
      />
      <CustomButton title="Go Back" onPress={goBackToHome} />
    </View>
  );
}*/


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './styles'; // Import the styles

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

function HomeScreen({ navigation }) {
  const levels = Array.from({ length: 1 }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My Game</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          {levels.map((level) => (
            <View key={level} style={styles.buttonContainer}>
              <CustomButton
                title={`Level ${level}`}
                onPress={() => navigation.navigate('Level', { level })}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function LevelScreen({ route, navigation }) {
  const { level } = route.params;
  const goBackToHome = () => {
    navigation.goBack();
  };

  // Dynamically import the code for the selected level
  const levelCode = require(`./level_data/level${level}.js`).default;

  const [code, setCode] = useState(levelCode);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Level {level}</Text>
      <TextInput
        multiline
        style={styles.codeEditor}
        value={code}
        onChangeText={(newCode) => setCode(newCode)}
      />
      <CustomButton title="Go Back" onPress={goBackToHome} />
    </View>
  );
}

function CustomButton({ title, onPress }) {
  return (
    <Button title={title} onPress={onPress} />
  );
}