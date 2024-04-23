import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import CustomHeader from '../components/CustomHeader'; // Import CustomHeader component
import galleryIcon from '../assets/gallery.png'; // Import gallery icon
import detailsIcon from '../assets/details.png'; // Import details icon

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
      {/* Use CustomHeader component with title="Gallery" and showBackButton={true} */}
      <CustomHeader
        title="Gallery"
        showBackButton={true}
        navigation={navigation}
      />
      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <Image source={galleryIcon} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Choose Image from Gallery</Text>
      </TouchableOpacity>
      {selectedImage && <Image source={selectedImage} style={styles.image} />}
      {selectedImage && (
        <TouchableOpacity style={styles.button} onPress={showResults}>
          <Image source={detailsIcon} style={styles.buttonIcon} />
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
    //justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#393737',
    padding: 10,
    borderRadius: 20,
    marginTop: 60,
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
    marginTop: 20,
    width: 200,
    height: 200,
  },
});

export default GalleryScreen;
