/*import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Styles'; // Import the styles
import CustomButton from '../components/CustomButton';

function Level1() {
    const navigation = useNavigation();

    const goBackToHome = () => {
        navigation.goBack();
    };

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Level 1</Text>
        <TextInput
            multiline
            style={styles.codeEditor}
        />
        <CustomButton title="Go Back" onPress={goBackToHome} />
    </View>
  );
}

export default Level1;*/

import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Styles'; // Import the styles
import CustomButton from '../components/CustomButton';

function Level1() {
  const navigation = useNavigation();

  // State variable to store the Java code
  const [javaCode, setJavaCode] = useState('');

  const goBackToHome = () => {
    navigation.goBack();
  };

  const executeJavaCode = () => {
    // Replace this with your Java code execution logic
    // You may use a library or a native module to execute Java code
    const result = 'Java code executed successfully!';
    alert(result); // Display the result as an alert for demonstration purposes
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Level 1</Text>
      <TextInput
        multiline
        style={styles.codeEditor}
        value={javaCode}
        onChangeText={(text) => setJavaCode(text)}
        placeholder="Enter your Java code here"
      />
      <CustomButton title="Execute Java Code" onPress={executeJavaCode} />
      <CustomButton title="Go Back" onPress={goBackToHome} />
    </View>
  );
}

export default Level1;