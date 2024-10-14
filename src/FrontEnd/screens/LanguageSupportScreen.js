// LanguageSupportScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LanguageSupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Multi-language Support</Text>
      {/* Add language selection options here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LanguageSupportScreen;
