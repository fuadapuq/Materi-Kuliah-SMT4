import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const stored = await AsyncStorage.getItem('registeredUser');
    const account = stored ? JSON.parse(stored) : null;

    if (username === account?.username && password === account?.password) {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Home');  // Arahkan ke Home jika login sukses
    } else {
      Alert.alert('Login Failed', 'Username or password is incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={styles.aboutText}>About</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
      <View style={{ height: 10 }} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 40,
  },
  aboutText: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    marginTop: 60,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
});
