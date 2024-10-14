import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerScrollContent}>
        <View style={styles.drawerContent}>
          {/* Header Section */}
          <View style={styles.header}>
            <Image
              source={require('../assets/snake.jpg')} // Replace with your logo
              style={styles.logo}
            />
            <Text style={styles.drawerTitle}>Viper Vision</Text>
          </View>

          {/* Drawer Items Section */}
          <View style={styles.menuContent}>
            <DrawerItem
              label="Home"
              icon={() => (
                <Image
                  source={require('../assets/home.png')} // Replace with your custom home icon
                  style={[styles.icon, { tintColor: '#000' }]} // Apply black tint color to icon
                />
              )}
              labelStyle={styles.drawerLabel}
              onPress={() => navigation.navigate('HomeScreen')}
            />
            <DrawerItem
              label="Help"
              icon={() => (
                <Image
                  source={require('../assets/help.png')} // Replace with your custom help icon
                  style={[styles.icon, { tintColor: '#000' }]} // Apply black tint color to icon
                />
              )}
              labelStyle={styles.drawerLabel}
              onPress={() => navigation.navigate('TutorialScreen')}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#333', // Apply black color to the entire drawer, including the SafeAreaView
  },
  drawerScrollContent: {
    flexGrow: 1,
    backgroundColor: '#333', // Ensure the drawer content scroll view also has a black background
  },
  drawerContent: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background for the main content area
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#333', // Black background for the header
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuContent: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background for the menu items
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  drawerLabel: {
    color: '#333', // Text color for the menu items
    fontSize: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default CustomDrawerContent;
