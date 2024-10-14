import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const CustomHeader = ({title, isHomeScreen}) => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window'); // Get screen width for image resizing

  // Function to handle back navigation
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.header, isHomeScreen && styles.homeHeader]}>
      {isHomeScreen && (
        <Image
          source={require('../assets/homebg.jpg')} // Your snake image
          style={[styles.backgroundImage, {width}]} // Set width dynamically
          resizeMode="cover" // Ensures the image covers the entire header
        />
      )}

      {/* Conditional rendering: show drawer icon on HomeScreen, back button otherwise */}
      {isHomeScreen ? (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={styles.menuButton}>
          <Image
            source={require('../assets/menu.png')} // Your menu icon
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Image
            source={require('../assets/back1.png')} // Your back icon
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

      {/* Title */}
      {!isHomeScreen && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60, // Default height for the header
    backgroundColor: '#2E2E2E', // Dark gray background
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    position: 'relative',
  },
  homeHeader: {
    height: 150, // Height for the home screen header
    backgroundColor: '#2E2E2E', // Dark gray background for home header as well
  },
  backgroundImage: {
    position: 'absolute',
    height: '100%', // Ensure it covers the entire height
    top: 0,
    left: 0,
    opacity: 0.8, // Slightly lower opacity for visibility
  },
  menuButton: {
    position: 'absolute',
    left: 15, // Position the button to the left
    top: 15, // Position it at the top
    zIndex: 10, // Ensure the button is on top of the background
  },
  backButton: {
    position: 'absolute',
    left: 15, // Position the button to the left
    top: 15, // Position it at the top
    zIndex: 10, // Ensure the button is on top of the background
  },
  icon: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff', // White color for the title for better contrast
    fontWeight: 'bold',
  },
});

export default CustomHeader;
