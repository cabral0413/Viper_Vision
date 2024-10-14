import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>How to Use Viper Vision</Text>

      {/* Welcome Section */}
      <Text style={styles.paragraph}>
        Viper Vision is an app designed to help you identify snakes by uploading a clear image or taking a live photo.
        The app provides the snake name, venom status, and a probability score based on the image.
      </Text>

      {/* Step 1: Upload or Take a Photo */}
      <Text style={styles.heading}>1. Upload a Photo or Take a Photo</Text>
      <Text style={styles.paragraph}>
        - To upload a photo from your gallery, tap on the <Text style={styles.bold}>Photo Gallery</Text> icon on the home screen. Select a snake image from your gallery.
      </Text>
      <Image source={require('../assets/gallery_example.jpg')} style={styles.image} />
      
      <Text style={styles.paragraph}>
        - To take a photo, tap on the <Text style={styles.bold}>Take a Photo</Text> icon on the home screen. This will open your camera to capture a live image.
      </Text>
      <Image source={require('../assets/camera_example.jpg')} style={styles.image} />

      {/* Step 2: Review the Results */}
      <Text style={styles.heading}>2. Review the Results</Text>
      <Text style={styles.paragraph}>
        Once you've uploaded or taken a photo, the app will display:
      </Text>
      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Snake Name</Text>: The name of the detected snake.
      </Text>
      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Probability Score</Text>: How confident the app is in the identification.
      </Text>
      <Text style={styles.paragraph}>
        - <Text style={styles.bold}>Venomous or Nonvenomous</Text>: Whether the snake is venomous or not.
      </Text>
      <Text style={styles.paragraph}>
        Please upload a high-quality image. Blurry or unclear images may result in incorrect identification or a low probability score.
      </Text>

      {/* Step 3: First Aid Tips */}
      <Text style={styles.heading}>3. First Aid Tips</Text>
      <Text style={styles.paragraph}>
        In case of a snake bite, visit the <Text style={styles.bold}>First Aid Screen</Text> from the main menu. It provides important first aid information on how to handle snake bites.
      </Text>
      <Image source={require('../assets/first_aid_example.jpg')} style={styles.image} />

      {/* Step 4: Finding Snake Catchers */}
      <Text style={styles.heading}>4. Finding Snake Catchers</Text>
      <Text style={styles.paragraph}>
        The <Text style={styles.bold}>Snake Catchers Screen</Text> helps you find the nearest snake catchers. You can view their contact details and reach out for assistance.
      </Text>
      <Image source={require('../assets/snake_catcher_example.jpg')} style={styles.image} />

      {/* Important Note */}
      <Text style={styles.heading}>Important Note:</Text>
      <Text style={styles.paragraph}>
        For accurate results, ensure the image of the snake is clear and of high quality. Low-quality or blurry images may cause the app to show incorrect results.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default HelpScreen;
