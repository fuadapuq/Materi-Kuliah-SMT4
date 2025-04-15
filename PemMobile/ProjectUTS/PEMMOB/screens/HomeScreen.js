import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, onLogout }) {
  const handleLogout = async () => {
    onLogout(); // Panggil onLogout untuk memperbarui status login di App.js
    navigation.replace('Login'); // Navigasi kembali ke halaman login setelah logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to JStore</Text>
      <Button title="Product" onPress={() => navigation.navigate('ProductScreen')} />
      <View style={{ height: 20 }} />
      <Button title="Logout" onPress={() => navigation.replace('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
