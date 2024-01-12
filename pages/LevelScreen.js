import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Dimensions, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import reactJsxParser from 'html-react-parser';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';

import { styles } from '../styles/Styles'; // Import the styles
import tomorrow from '../styles/tomorrow'; // Import the styles
import CustomButton from '../components/CustomButton';
import levelInstructions from '../data/levels.json'; // Import the JSON file

function LevelScreen() {
  const [level, setLevel] = useState('');
  const [instruction, setInstruction] = useState('');
  const [javaCode, setJavaCode] = useState(''); // State variable to store the Java code
  const [output, setOutput] = useState(''); // State variable to store the output of the Java code

  var reactOutput;
  if (Platform.OS !== 'android') {
    reactOutput = new reactJsxParser(output);
  } else {
    //reactOutput = `salut`;
    reactOutput = output;
  }

  const route = useRoute();

  const screenWidth = Dimensions.get('window').width;

  const lineHeight = 23;

  useEffect(() => {
    if (route?.params?.level) {
      const currentLevel = route?.params?.level;
      setLevel(currentLevel);

      const currentInstruction = levelInstructions[currentLevel]; // Retrieve instruction for the current level from the JSON file
      setInstruction(currentInstruction);
    }
  }, [route]);

  const handleChange = (code) => {
    setJavaCode(code);
    try{
      localStorage.setItem(`level_${level}_code`, javaCode);
    } catch {
      //this means I am on android
    }
  };

  // Get the code from local storage.
  var codeFromLocalStorage = "return 1;"; 
  try{
    const localCode = localStorage.getItem(`level_${route?.params?.level}_code`);
    if(localCode != "" && localCode != "null"){
      codeFromLocalStorage = localCode;
    }
  } catch {
    //this means I am on android
  }

  const getSyntaxStyle = () => {
    if (Platform.OS === 'android') {
      return CodeEditorSyntaxStyles.atomOneDark;
    } else {
      return tomorrow;
    }
  };

  const replaceNewlinesWithHtmlCodes = (text) => {
    const intermediary = text.replace(/\\n/g, '<br>').replace(/\\r/g, '').replace('{"status":1,"signal":null,"output":[null,"', '');
    const i = intermediary.indexOf('",""],"pid":');
    const res = intermediary.substring(0,i);
    return res;
  };

  const executeJavaCode = async () => {
    // Send the Java code to the server
    const response = await fetch('http://192.168.2.181:3001/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Level': level,
      },
      body: JSON.stringify({ code: javaCode }),
    });
    // Get the output from the server
    var result = await response.text();
    
    // Set the output state
    if(response.statusText != "Internal Server Error"){
      setOutput(result);
    } else {
      setOutput(`<div style=\"font-size: 30px;\">${replaceNewlinesWithHtmlCodes(result)}</div>`);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Text style={styles.header}>Level {level}</Text>
      <Text style={styles.instruction}>{instruction}</Text>
      <View style={{ backgroundColor: '#282c34' }}>
        <CodeEditor
          style={{
            width: screenWidth,
            height: 300,
            fontSize: 20,
            inputLineHeight: lineHeight,
            inputColor: Platform.OS !== 'android' ? '#abb2bf' : undefined, // Only activate this code when on web and not on Android
            backgroundColor: '#282c34',
          }}
          language='java'
          syntaxStyle= {getSyntaxStyle()}
          showLineNumbers
          autoFocus
          initialValue={codeFromLocalStorage}
          onChange={handleChange}
        />
      </View>
      <Text> </Text>
      <CustomButton title='Execute Java Code' color='green' height={80} width={250} onPress={executeJavaCode} />
      <Text style={styles.instruction}>Output:</Text>
      <Text>{reactOutput}</Text>
    </ScrollView>
  );
}

export default LevelScreen;
