import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

const CameraScreen = ({navigation}) => {
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
        const source = {uri: response.assets[0].uri};
        setImage(source);
      }
    });
  };

  const navigateToResults = () => {
    navigation.navigate('Results');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.buttonText}>Take a Photo</Text>
      </TouchableOpacity>
      {image && <Image source={image} style={styles.image} />}
      {image && (
        <TouchableOpacity style={styles.button} onPress={navigateToResults}>
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

export default CameraScreen;
