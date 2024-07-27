import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader'; // Import CustomHeader component

const FirstAidScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader
        title="First-aid Information"
        showBackButton={true}
        navigation={navigation}
      />
      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Highly Venomous Snakes</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              - Keep the affected limb immobilized.
            </Text>
            <Text style={styles.infoText}>
              - Wash the bite area with soap and water.
            </Text>
            <Text style={styles.infoText}>- Seek immediate medical help.</Text>
            <Text style={styles.infoText}>
              - Do not apply a tourniquet or attempt to suck out venom.
            </Text>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Venomous Snakes</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              - Clean the bite area with soap and water.
            </Text>
            <Text style={styles.infoText}>- Keep the person calm and still.</Text>
            <Text style={styles.infoText}>
              - Transport to a medical facility promptly.
            </Text>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Mildly Venomous Snakes</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              - Apply a cold compress to reduce swelling.
            </Text>
            <Text style={styles.infoText}>
              - Monitor for any signs of allergic reactions or infection.
            </Text>
            <Text style={styles.infoText}>
              - Seek medical evaluation if symptoms worsen.
            </Text>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Non-Venomous Snakes</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              - Clean the wound with soap and water.
            </Text>
            <Text style={styles.infoText}>
              - Apply a sterile bandage if necessary.
            </Text>
            <Text style={styles.infoText}>
              - Monitor for any signs of infection.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Light background color for better contrast
  },
  content: {
    padding: 15,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50', // Darker color for better readability
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#34495e', // Slightly darker text color for readability
    lineHeight: 24, // Better line height for readability
  },
});

export default FirstAidScreen;
