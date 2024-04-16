import React from 'react';
import {View, Button, Image, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const GalleryScreen = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openImagePicker = () => {
    const options = {};

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'Failed to pick an image. Please try again.');
      } else {
        setSelectedImage({uri: response.uri});
      }
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {selectedImage && (
        <Image source={selectedImage} style={{width: 200, height: 200}} />
      )}
      <Button title="Select Photo" onPress={openImagePicker} />
    </View>
  );
};

export default GalleryScreen;
