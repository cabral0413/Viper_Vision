import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import CustomHeader from '../components/CustomHeader'; // Import CustomHeader component
import cameraIcon from '../assets/cam.png'; // Import camera icon
import detailsIcon from '../assets/details.png'; // Import details icon
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const CameraScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const takePicture = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 600,
    };

    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled taking a picture');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setImage(source);
      }
    });
  };

  useEffect(() => {
    if (image) {
      navigation.navigate('Results', { image });
    }
  }, [image, navigation]);

  return (
    <View style={styles.container}>
      {/* Use CustomHeader component with title="Camera" and showBackButton={true} */}
      <CustomHeader
        title="Camera"
        navigation={navigation}
        showBackButton={true}
      />
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Image source={cameraIcon} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Take a Photo</Text>
      </TouchableOpacity>
      {image && <Image source={image} style={styles.image} />}
      {image && (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Results', { image })}>
          <Image source={detailsIcon} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Show Details</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#393737',
    padding: 10,
    borderRadius: 20,
    marginTop: 80,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  image: {
    marginTop: 40,
    width: 200,
    height: 200,
  },
});

export default CameraScreen;
