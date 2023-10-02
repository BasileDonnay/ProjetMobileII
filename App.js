/*import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'; // Import TouchableOpacity
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
  const levels = Array.from({ length: 50 }, (_, index) => index + 1);

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

// Create a custom button component
function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function LevelScreen({ route, navigation }) {
  const { level } = route.params;

  const goBackToHome = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Level {level}</Text>
      <CustomButton title="Go Back" onPress={goBackToHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: 200,
    height: 200,
    backgroundColor: '#03a5fc', // Example background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white', // Example text color
    fontSize: 16,
  },
});*/

/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
  const levels = Array.from({ length: 50 }, (_, index) => index + 1);

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
  const levels = Array.from({ length: 50 }, (_, index) => index + 1);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  codeEditor: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
  },
});

function CustomButton({ title, onPress }) {
  return (
    <Button title={title} onPress={onPress} />
  );
}