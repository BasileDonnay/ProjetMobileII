import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from '../styles/Styles'; // Import the styles
import CustomButton from '../components/CustomButton';

function LevelScreen({ navigation }) {
  const [level, setLevel] = useState('');

  const route = useRoute();

  useEffect(() => {
      if(route?.params?.level) {
          setLevel(route?.params?.level)
      }
  },[])

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
      <Text style={styles.header}>Level {level}</Text>
      <TextInput
        multiline
        style={styles.codeEditor}
        value={javaCode}
        onChangeText={(text) => setJavaCode(text)}
      />
      <CustomButton title="Execute Java Code" onPress={executeJavaCode} />
      <CustomButton title="Go Back" onPress={goBackToHome} />
      <Text style={{ marginTop: 10 }}>Output:</Text>
      <Text>{output}</Text>
    </View>
  );
}

export default LevelScreen;
