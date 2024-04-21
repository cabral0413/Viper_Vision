import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsScreen = ({route}) => {
  // Extract image and classification results from route params
  const {image, results} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Classification Results</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.label}>Uploaded Image:</Text>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.label}>Top Predictions:</Text>
        {results.map((prediction, index) => (
          <View key={index} style={styles.prediction}>
            <Text style={styles.snakeName}>{prediction.snake_name}</Text>
            <Text style={styles.probability}>{prediction.probability}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  prediction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  snakeName: {
    fontSize: 16,
  },
  probability: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResultsScreen;
