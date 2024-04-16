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
