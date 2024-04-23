import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomHeader from '../components/CustomHeader'; // Import CustomHeader component

const FirstAidScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        title="First-aid Information"
        showBackButton={true}
        navigation={navigation}
      />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  padding: 20,
  },
  categoryContainer: {
    marginBottom: 20,
    margin: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  infoBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  infoText: {
    marginBottom: 5,
    color: '#000',
  },
});

export default FirstAidScreen;
