import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = auth.currentUser;

  const handleLogout = () => {
    auth.signOut();
  };

  const handleSave = async () => {
    try {
      await user.updateProfile({
        displayName,
      });
      await user.updateEmail(email);
      await user.updatePassword(password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Display Name</Text>
          <TextInput
            placeholder="Type your display name"
            value={displayName}
            onChangeText={(text) => setDisplayName(text)}
            style={styles.input}
          />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            placeholder="Type your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            editable={false}
          />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            placeholder="Type your password"
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

          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    alignItems: "flex-start", // Alignez les éléments à gauche
  },
  inputLabel: {
    marginLeft: 5, // Ajoutez une marge à gauche pour déplacer le inputContainer vers la droite
    paddingTop: 10,
    color: "white",
    fontSize: 17,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  buttonContainer: {
    width: 220,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#248ad9",
    width: "100%",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default ProfileScreen;
