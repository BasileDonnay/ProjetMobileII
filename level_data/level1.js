/*import React, { useState } from 'react';
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

  // State variable to store the output of the Java code
  const [output, setOutput] = useState('');

  const goBackToHome = () => {
    navigation.goBack();
  };

  const executeJavaCode = async () => {
    // Send the Java code to the server
    const response = await fetch("http://localhost:3000/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: javaCode }),
    });

    // Get the output from the server
    const result = await response.text();

    // Set the output state
    setOutput(result);
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
      <Text style={{ marginTop: 10 }}>Output:</Text>
      <Text>{output}</Text>
    </View>
  );
}

export default Level1;
