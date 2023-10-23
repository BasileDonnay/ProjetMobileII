import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../styles/Styles'; // Import the styles
import CustomButton from '../components/CustomButton';
import { auth } from '../firebase';

function HomeScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

   useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName || user.email);
      } else {
        setUsername('');
      }
    });
  }, []);

  const levels = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to BaseCode</Text>
      <Text>Hello, {username}!</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          {levels.map((level) => (
            <View key={level} style={styles.buttonContainer}>
              <CustomButton
                title={`Level ${level}`}
                color='#4287f5'
                height={50}
                width={100}
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
