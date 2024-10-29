import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import cameraIcon from '../assets/cam.png';
import galleryIcon from '../assets/gallery1.png';
import firstAidIcon from '../assets/first-aid1.png';
import snakeCatcherIcon from '../assets/snake1.png';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Function to request camera permission
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs camera access to take photos.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      console.log('Camera permission status:', granted);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  // Function to request storage permission
  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message:
            'This app needs storage access to select photos from the gallery.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      console.log('Storage permission status:', granted);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  // Function to open the camera and navigate to the results screen
  const openCameraAndNavigate = async () => {
    const hasCameraPermission = await requestCameraPermission();
    if (!hasCameraPermission) {
      Alert.alert(
        'Permission Denied',
        'Camera access is required to take photos.',
      );
      return;
    }

    const options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 600,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled taking a picture');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const source = {uri: response.assets[0].uri};
        navigation.navigate('ResultsScreen', {image: source});
      } else {
        console.log('Unexpected response format: ', response);
      }
    });
  };

  // Function to open the gallery and navigate to the results screen
  const openGalleryAndNavigate = async () => {
    const hasStoragePermission = await requestStoragePermission();
    if (!hasStoragePermission) {
      Alert.alert(
        'Permission Denied',
        'Storage access is required to select photos from the gallery.',
      );
      return;
    }

    const options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 600,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled picking an image');
      } else if (response.errorCode) {
        console.log('Gallery Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const source = {uri: response.assets[0].uri};
        navigation.navigate('ResultsScreen', {image: source});
      } else {
        console.log('Unexpected response format: ', response);
      }
    });
  };

  const features = [
    {
      title: 'Take a Photo',
      icon: cameraIcon,
      onPress: openCameraAndNavigate,
    },
    {
      title: 'Photo Gallery',
      icon: galleryIcon,
      onPress: openGalleryAndNavigate,
    },
    {
      title: 'First Aid',
      icon: firstAidIcon,
      onPress: () => navigation.navigate('FirstAidScreen'),
    },
    {
      title: 'Snake Catchers',
      icon: snakeCatcherIcon,
      onPress: () => navigation.navigate('SnakeCatcherScreen'),
    },
  ];

  const renderFeature = (feature, index) => (
    <TouchableOpacity
      key={index}
      style={styles.featureContainer}
      onPress={feature.onPress}>
      <View style={styles.featureBox}>
        <Image
          source={feature.icon}
          style={[styles.featureIcon, {tintColor: 'black'}]}
        />
        <Text style={styles.featureTitle}>{feature.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomHeader title={null} isHomeScreen={true} />
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
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  featuresContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureContainer: {
    marginBottom: 20,
    width: '80%',
  },
  featureBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  featureIcon: {
    width: 40,
    height: 40,
    marginRight: 20,
    tintColor: 'black', // Set icon color to black
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
