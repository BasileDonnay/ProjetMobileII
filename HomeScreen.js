/*import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './Styles'; // Import the styles

// ... your other imports ...

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
}

// Export the LevelScreen function
export default LevelScreen;*/

import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'; // Import the styles
//import { CustomButton } from './CustomButton';

function HomeScreen() {
  const navigation = useNavigation();

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
              onPress={() => navigation.navigate(`Level${level}`)}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
  );
}

function CustomButton({ title, onPress }) {
  return <Button title={title} onPress={onPress} />;
}

export default HomeScreen;