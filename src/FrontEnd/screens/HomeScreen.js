import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomHeader from '../components/CustomHeader'; // Import CustomHeader component
import cameraIcon from '../assets/cam.png';
import galleryIcon from '../assets/gallery1.png';
import firstAidIcon from '../assets/first-aid1.png';
import hospitalIcon from '../assets/map1.png';
import snakeCatcherIcon from '../assets/snake1.png';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const openGalleryAndNavigate = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 600,
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (!response.didCancel && !response.error) {
        const source = {uri: response.assets[0].uri};
        navigation.navigate('Results', {image: source}); // Navigate to Results screen with selected image
      }
    });
  };

  const features = [
    {
      title: 'Take a Photo',
      icon: cameraIcon,
      onPress: () => navigation.navigate('Camera'),
    },
    {
      title: 'Photo Gallery',
      icon: galleryIcon,
      onPress: openGalleryAndNavigate, // Updated onPress function to open gallery and navigate
    },
    {
      title: 'First Aid',
      icon: firstAidIcon,
      onPress: () => navigation.navigate('FirstAid'),
    },
    {
      title: 'Nearest Hospital',
      icon: hospitalIcon,
      onPress: () => navigation.navigate('Hospital'),
    },
    {
      title: 'Snake Catchers',
      icon: snakeCatcherIcon,
      onPress: () => navigation.navigate('SnakeCatcher'),
    },
  ];

  const renderFeature = (feature, index) => (
    <TouchableOpacity
      key={index}
      style={styles.featureContainer}
      onPress={feature.onPress}>
      <View style={styles.featureBox}>
        <Image source={feature.icon} style={styles.featureIcon} />
        <Text style={styles.featureTitle}>{feature.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Use CustomHeader component with title="Viper Vision" and showBackButton={false} */}
      <CustomHeader
        title="Viper Vision"
        showBackButton={false}
      />
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
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  featureContainer: {
    width: '45%',
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#393737',
  },
  featureBox: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  featureIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default HomeScreen;
