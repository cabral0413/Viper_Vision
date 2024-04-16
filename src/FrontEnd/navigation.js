// Navigation.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './main'; // Adjust the path to your SplashScreen component
import HomeScreen from './screens/HomeScreen'; // Adjust the path to your HomeScreen component
import CameraScreen from './screens/CameraScreen';
import FirstAidScreen from './screens/FirstAidScreen';
import HosScreen from './screens/HosScreen';
import SnakeCatcherScreen from './screens/SnakeCatcherScreen';
import GalleryScreen from './screens/GalleryScreen';
import ResultsScreen from './screens/ResultsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="FirstAid" component={FirstAidScreen} />
        <Stack.Screen name="Hospital" component={HosScreen} />
        <Stack.Screen name="SnakeCatcher" component={SnakeCatcherScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
