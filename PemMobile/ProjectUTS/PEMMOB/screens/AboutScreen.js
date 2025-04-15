import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna
        ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam
        mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris,
        quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod
        magna ac lorem rutrum elementum. Donec viverra auctor lobortis. Pellentesque eu est a nulla
        placerat dignissim. Morbi a enim in magna semper bibendum. Etiam scelerisque, nunc ac
        egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat
        volutpat. Maecenas dignissim erat nec sem suscipit bibendum.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, lineHeight: 24 },
});
