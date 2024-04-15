import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook

const SplashScreen = () => {
  const navigation = useNavigation(); // Get navigation object using useNavigation hook

  useEffect(() => {
    // Navigate to HomeScreen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]); // Include navigation in the dependency array

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require('./snake_icon.png')} // Replace with your snake icon
          style={styles.snakeIcon}
        />
        <Text style={styles.appName}>Viper Vision</Text>
        <ActivityIndicator size="large" color="#4682B4" style={styles.loader} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Plain color background
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  snakeIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
