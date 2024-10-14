import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); // Navigate to 'HomeScreen' after splash
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require('../assets/snake.jpg')} // Adjust the path as needed
          style={styles.snakeIcon}
        />
        <ActivityIndicator size="large" color="#4682B4" style={styles.loader} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  contentContainer: {
    alignItems: 'center',
  },
  snakeIcon: {
    width: 200,
    height: 200,
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
