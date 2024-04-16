/*
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const CameraScreen = () => {
  const [image, setImage] = useState(null);

  const takePicture = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 600,
    };

    launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled taking a picture');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
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

import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';

const CameraScreen = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera.',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

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
        const source = {uri: response.uri};
        setImage(source);
      }
    });
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
*/

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const CameraScreen = () => {
  const [image, setImage] = useState(null);

  const takePicture = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 600,
    };

    launchCamera(options, (response) => {
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

  const navigateToResults = () => {
    // Code to navigate to classification results screen
    console.log('Navigating to classification results');
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


