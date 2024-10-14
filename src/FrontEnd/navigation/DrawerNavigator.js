import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from './MainStack';
import TutorialScreen from '../screens/TutorialScreen';
import LanguageSupportScreen from '../screens/LanguageSupportScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="HomeScreen"
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        width: 240, // Adjust this value to change the width of the drawer
      },
    }}>
    <Drawer.Screen name="Main" component={MainStack} />
    <Drawer.Screen name="Tutorial & Help" component={TutorialScreen} />
    <Drawer.Screen
      name="Multi-language Support"
      component={LanguageSupportScreen}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
