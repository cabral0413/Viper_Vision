import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ResultsScreen = ({navigation, route}) => {
  const {image} = route.params;
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const getImageSource = className => {
    switch (className) {
      case 'Common Indian Krait':
        return require('../assets/krait.jpg');
      case 'Hump Nosed Viper':
        return require('../assets/PitViper.jpeg');
      case 'Indian Cobra':
        return require('../assets/cobra.jpg');
      case 'Python':
        return require('../assets/python.jpeg');
      case 'Green Vine Snake':
        return require('../assets/VineSnake.jpg');
      case 'Russells Viper':
        return require('../assets/Russels_Viper.jpg');
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const formData = new FormData();
        formData.append('image', {
          uri: image.uri,
          type: 'image/jpeg',
          name: 'image.jpg',
        });

        const response = await fetch('http://54.172.177.217:5000/classify', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Server Error:', errorText);
          setFetchError(
            `Failed to fetch results: ${response.status} ${response.statusText}`,
          );
          return;
        }

        const data = await response.json();
        console.log('API Response:', data);
        setResults(data.predictions || []);
      } catch (error) {
        console.error('Error fetching results:', error);
        setFetchError(
          `Error fetching results. ${error.message || 'Please try again.'}`,
        );
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [image]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Classification Results</Text>
      {loading ? (
        <Text style={styles.Loader}>Loading results...</Text>
      ) : fetchError ? (
        <Text style={styles.errorText}>{fetchError}</Text>
      ) : results.length > 0 ? (
        results.map((result, index) => (
          <View key={index} style={styles.resultContainer}>
            <Image
              source={getImageSource(result.class)}
              style={styles.snakeImage}
            />
            <View style={styles.resultContent}>
              <Text style={styles.snakeName}>Snake Name: {result.class}</Text>
              <Text style={styles.accuracy}>
                Probability: {result.probability}
              </Text>
              <Text style={styles.venomStatus}>
                Venom Status: {result.venom_status}
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>More Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>First Aid Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.Loader}>No snakes found in the image.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40,
    color: '#000',
    marginLeft: 20,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 20,
  },
  snakeImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  resultContent: {
    flex: 1,
  },
  snakeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  accuracy: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  venomStatus: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#AF0D0D',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#393737',
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Loader: {
    color: '#000',
    marginTop: 20,
    marginLeft: 22,
  },
  // New errorText style for better visibility
  errorText: {
    color: 'red', // Change to a contrasting color
    fontSize: 16,
    // fontWeight: 'bold',
    textAlign: 'center', // Center align the text
    marginTop: 20,
    marginHorizontal: 20, // Add horizontal margin for spacing from the sides
  },
});

export default ResultsScreen;
