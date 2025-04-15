import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function ProductScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Products</Text>

      <Text style={styles.subtitle}>Laptops</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ProductCard
          title="Laptop A"
          image={{ uri: 'https://via.placeholder.com/150?text=Laptop+A' }}
        />
        <ProductCard
          title="Laptop B"
          image={{ uri: 'https://via.placeholder.com/150?text=Laptop+B' }}
        />
      </ScrollView>

      <Text style={styles.subtitle}>Handphones</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ProductCard
          title="Handphone A"
          image={{ uri: 'https://via.placeholder.com/150?text=Phone+A' }}
        />
        <ProductCard
          title="Handphone B"
          image={{ uri: 'https://via.placeholder.com/150?text=Phone+B' }}
        />
      </ScrollView>
    </ScrollView>
  );
}

function ProductCard({ title, image }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 20, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  card: {
    marginRight: 15,
    alignItems: 'center',
    width: 150,
  },
  image: {
    width: 150,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
