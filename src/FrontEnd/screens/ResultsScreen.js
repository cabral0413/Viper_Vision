import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsScreen = ({route}) => {
  const {image} = route.params; // Get the image passed from the previous screen
  const [results, setResults] = useState(null); // State to store classification results

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // Send the image to the backend for classification
        const formData = new FormData();
        formData.append('image', {
          uri: image.uri,
          type: 'image/jpeg',
          name: 'image.jpg',
        });

        const response = await fetch('http://192.168.1.5:5000/classify', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data', // Set Content-Type header
          },
          body: formData,
        });

        const data = await response.json();
        setResults(data.predictions); // Set the classification results
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    // Fetch classification results when component mounts
    fetchResults();
  }, [image]); // Include image as a dependency

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Classification Results</Text>
      {results ? (
        <View>
          {results.map((result, index) => (
            <View key={index} style={styles.resultItem}>
              <Text>{result.snake_name}</Text>
              <Text>{result.probability}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text>Loading results...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default ResultsScreen;
