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


// CameraScreen.js
/*import React, {useState} from 'react';
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
      if (!response.didCancel && !response.error) {
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
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.buttonText}>Take a Photo</Text>
      </TouchableOpacity>
      {image && <Image source={image} style={styles.image} />}
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

export default CameraScreen;*/
