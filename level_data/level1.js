import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles'; // Import the styles

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
        //value={code}
        //onChangeText={(newCode) => setCode(newCode)}
        />
        <CustomButton title="Go Back" onPress={goBackToHome} />
    </View>
  );
}

function CustomButton({ title, onPress }) {
    return <Button title={title} onPress={onPress} />;
}

export default Level1;