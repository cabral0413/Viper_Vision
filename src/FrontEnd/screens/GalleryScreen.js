import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook

const GalleryScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation(); // Initialize navigation object

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 600,
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled selecting an image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        setSelectedImage(source);
      }
    });
  };

  const showResults = () => {
    // Navigate to the result screen
    navigation.navigate('Results', {image: selectedImage});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <Text style={styles.buttonText}>Choose Image from Gallery</Text>
      </TouchableOpacity>
      {selectedImage && <Image source={selectedImage} style={styles.image} />}
      {selectedImage && (
        <TouchableOpacity style={styles.button} onPress={showResults}>
          <Text style={styles.buttonText}>Show Classification Results</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#4682B4',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
});

export default GalleryScreen;
/*
// GalleryScreen.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

const GalleryScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 600,
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel && !response.error) {
        setSelectedImage({uri: response.assets[0].uri});
        sendImageToBackend(response.assets[0].uri);
      }
    });
  };

  const sendImageToBackend = async imageUri => {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await fetch('http://127.0.0.1:5000/classify', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      navigation.navigate('Results', {results: data.predictions});
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <Text style={styles.buttonText}>Choose Image from Gallery</Text>
      </TouchableOpacity>
      {selectedImage && <Image source={selectedImage} style={styles.image} />}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
});

export default GalleryScreen;*/
