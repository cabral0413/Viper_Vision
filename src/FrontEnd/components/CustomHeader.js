import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CustomHeader = ({ title, navigation, showBackButton }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        {showBackButton && (
          <Image source={require('../assets/back1.png')} style={styles.backButtonIcon} />
        )}
      </TouchableOpacity>
      <View style={styles.headerCenter}>
        <Image source={require('../assets/header.jpg')} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.headerRight}>
        {/* Add any additional header components on the right side if needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60, // Adjust the height as needed
    paddingHorizontal: 20,
    backgroundColor: '#000000',
  },
  backButton: {
    marginRight: 10,
  },
  backButtonIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF', // Adjust the color as needed
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default CustomHeader;
