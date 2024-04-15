/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/FrontEnd/navigation'; // Adjust the path to your Navigation component

AppRegistry.registerComponent(appName, () => Navigation);
