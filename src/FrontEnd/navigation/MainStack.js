import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TutorialScreen from '../screens/TutorialScreen';
import LanguageSupportScreen from '../screens/LanguageSupportScreen';
import CustomHeader from '../components/CustomHeader';
import FirstAidScreen from '../screens/FirstAidScreen';
import GalleryScreen from '../screens/GalleryScreen';
import SnakeCatcherScreen from '../screens/SnakeCatcherScreen';
import ResultsScreen from '../screens/ResultsScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{
        headerShown: false, // Disable the default header
        title: '', // Ensure no title is shown above the header
      }}
    />
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: false, // Disable the default header
        title: '', // Ensure no title is shown above the header
      }}
    />
    <Stack.Screen
      name="TutorialScreen"
      component={TutorialScreen}
      options={({navigation}) => ({
        header: () => (
          <CustomHeader
            title="Tutorial"
            navigation={navigation}
            showBackButton={true}
          />
        ),
      })}
    />
    <Stack.Screen
      name="FirstAidScreen"
      component={FirstAidScreen}
      options={({navigation}) => ({
        header: () => (
          <CustomHeader
            title="First Aid"
            navigation={navigation}
            showBackButton={true}
          />
        ),
      })}
    />
    <Stack.Screen
      name="ResultsScreen"
      component={ResultsScreen}
      options={({navigation}) => ({
        header: () => (
          <CustomHeader
            title="Results"
            navigation={navigation}
            showBackButton={true}
          />
        ),
      })}
    />
    <Stack.Screen
      name="SnakeCatcherScreen"
      component={SnakeCatcherScreen}
      options={({navigation}) => ({
        header: () => (
          <CustomHeader
            title="Snake Catchers"
            navigation={navigation}
            showBackButton={true}
          />
        ),
      })}
    />
    <Stack.Screen
      name="LanguageSupportScreen"
      component={LanguageSupportScreen}
      options={({navigation}) => ({
        header: () => (
          <CustomHeader
            title="Language Support"
            navigation={navigation}
            showBackButton={true}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

export default MainStack;
