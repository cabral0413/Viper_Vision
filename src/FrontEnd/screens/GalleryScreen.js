import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomHeader from '../components/CustomHeader'; 
import galleryIcon from '../assets/gallery.png'; 
import {useNavigation} from '@react-navigation/native';

const GalleryScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  const openImageLibrary = () => {
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
        setSelectedImage(source);
        navigation.navigate('Results', {image: source}); // Navigate to Results screen with selected image
      }
    });
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Gallery" showBackButton={true} navigation={navigation} />
      <TouchableOpacity style={styles.button} onPress={openImageLibrary}>
        <Image source={galleryIcon} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>
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
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default GalleryScreen;

