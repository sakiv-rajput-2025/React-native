import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For eye icon (use with Expo or react-native-vector-icons)

const LoginPage = () => {
  const [name, setName] = useState(''); // State for storing name
  const [password, setPassword] = useState(''); // State for storing password
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleLogin = () => {
    // Display entered name and password in an alert box
    Alert.alert('Login Details', `Name: ${name}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
      <TextInput
        placeholder="Enter ID"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#888" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'times new roman',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
    width: 250,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
    width: 250,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: 250,
  },
});

export default LoginPage;
