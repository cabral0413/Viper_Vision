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

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  const features = [
    {title: 'Take a Photo', onPress: () => navigation.navigate('')},
    {title: 'Photo Gallery', onPress: () => navigation.navigate('Gallery')},
    {title: 'First Aid', onPress: () => navigation.navigate('FirstAidScreen')},
    {title: 'Nearest Hospital', onPress: () => navigation.navigate('Hospital')},
    {
      title: 'Snake Catchers',
      onPress: () => navigation.navigate('SnakeCatchers'),
    },
  ];

  const renderFeature = (feature, index) => (
    <TouchableOpacity
      key={index}
      style={styles.featureContainer}
      onPress={feature.onPress}>
      <View style={styles.featureBox}>
        <Text style={styles.featureTitle}>{feature.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snake3.jpg')} style={styles.logo} />
        <Text style={styles.title}>Viper Vision</Text>
        {/* Additional header options can be added here */}
      </View>
      <Text style={styles.heading}>Welcome to Snake Identifier</Text>
      <View style={styles.featuresContainer}>
        {features.map((feature, index) => renderFeature(feature, index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    backgroundColor: '#000000',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  featureContainer: {
    width: '45%',
    margin: '2.5%',
  },
  featureBox: {
    backgroundColor: '#F5F5F5',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4682B4',
  },
});

export default HomeScreen;
