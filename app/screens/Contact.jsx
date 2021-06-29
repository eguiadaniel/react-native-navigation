import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text>Estamos en Contact</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5a1g2',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
