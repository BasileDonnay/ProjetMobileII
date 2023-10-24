import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from '../styles/Styles'; // Import the styles
import { auth } from "../firebase";

const ProfileScreen = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = auth.currentUser;

  const handleSave = async () => {
    try {
      await user.updateProfile({
        displayName,
      });
      await user.updateEmail(email);
      await user.updatePassword(password);
      
      // Update the username state variable with the new display name
      setUsername(displayName);
    } catch (error) {
      setError(error.message);
    }
  };

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

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <View style={styles.inputContainer}>
        <Text style={styles.header}>Hello {username}!</Text>
          <Text style={styles.inputLabel}>Display Name</Text>
          <TextInput
            placeholder="Type your new username"
            value={displayName}
            onChangeText={(text) => setDisplayName(text)}
            style={styles.input}
          />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            placeholder="Type your new email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            editable={false}
          />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            placeholder="Type your new password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ProfileScreen;
