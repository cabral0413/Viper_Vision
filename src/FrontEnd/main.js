/*import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.bodyText}>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyConten: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 20,
    color: 'black',
  },
});

export default App;
*/

import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); // Assuming 'HomeScreen' is the name of your home screen component
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]); // Include navigation in the dependency array

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require('./assets/snake3.jpg')} // Replace with your snake icon
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
    backgroundColor: '#000000', // Plain color background
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 30,
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
