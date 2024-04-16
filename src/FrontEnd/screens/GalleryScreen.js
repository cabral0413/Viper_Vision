import React, {useState} from 'react';
import {View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const GalleryScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo', // specify that we want to pick only photos
      quality: 1, // image quality (0 to 1)
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // You can also display the image using the 'uri' property:
        const source = {uri: response.uri};
        setSelectedImage(source);

        // Here you can upload the selected image to your server or do further processing
        // Example: send the image to your server using fetch or axios
        // fetch('YOUR_UPLOAD_ENDPOINT', {
        //   method: 'POST',
        //   body: createFormData(response),
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // })
        // .then(response => response.json())
        // .then(data => {
        //   console.log('upload success', data);
        // })
        // .catch(error => {
        //   console.log('upload error', error);
        // });
      }
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {selectedImage && (
        <Image source={selectedImage} style={{width: 200, height: 200}} />
      )}
      <Button title="Choose Photo" onPress={openImagePicker} />
    </View>
  );
};

export default GalleryScreen;
