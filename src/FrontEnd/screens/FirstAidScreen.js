import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const FirstAidScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Highly Venomous Snakes */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeader}>
            <Image
              source={require('../assets/cobra.jpg')}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryTitle}>Highly Venomous Snakes</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>- Keep the affected limb immobilized.</Text>
            <Text style={styles.infoText}>- Wash the bite area with soap and water.</Text>
            <Text style={styles.infoText}>- Seek immediate medical help.</Text>
            <Text style={styles.infoText}>- Do not apply a tourniquet or attempt to suck out venom.</Text>
          </View>
        </View>

        {/* Venomous Snakes */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeader}>
            <Image
              source={require('../assets/VineSnake.jpg')}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryTitle}>Venomous Snakes</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>- Clean the bite area with soap and water.</Text>
            <Text style={styles.infoText}>- Keep the person calm and still.</Text>
            <Text style={styles.infoText}>- Transport to a medical facility promptly.</Text>
          </View>
        </View>

        {/* Mildly Venomous Snakes */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeader}>
            <Image
              source={require('../assets/PitViper.jpeg')}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryTitle}>Mildly Venomous Snakes</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>- Apply a cold compress to reduce swelling.</Text>
            <Text style={styles.infoText}>- Monitor for any signs of allergic reactions or infection.</Text>
            <Text style={styles.infoText}>- Seek medical evaluation if symptoms worsen.</Text>
          </View>
        </View>

        {/* Non-Venomous Snakes */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryHeader}>
            <Image
              source={require('../assets/VineSnake.jpg')}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryTitle}>Non-Venomous Snakes</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>- Clean the wound with soap and water.</Text>
            <Text style={styles.infoText}>- Apply a sterile bandage if necessary.</Text>
            <Text style={styles.infoText}>- Monitor for any signs of infection.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background to match the other screen
  },
  content: {
    padding: 20,
  },
  categoryContainer: {
    marginBottom: 20,
    backgroundColor: '#fff', // White background for consistency with Snake Catcher screen
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Neutral color for titles for a clean look
  },
  infoBox: {
    backgroundColor: '#f9f9f9', // Slightly off-white for info sections
    borderRadius: 8,
    padding: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    lineHeight: 22,
  },
});

export default FirstAidScreen;
