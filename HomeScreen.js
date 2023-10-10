import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles/Styles'; // Import the styles
import CustomButton from './components/CustomButton';

function HomeScreen() {
  const navigation = useNavigation();

  const levels = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to BaseCode</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          {levels.map((level) => (
            <View key={level} style={styles.buttonContainer}>
              <CustomButton
                title={`Level ${level}`}
                onPress={() => navigation.navigate('Level', { level : level })}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
