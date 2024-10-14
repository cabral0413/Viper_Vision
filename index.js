import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/FrontEnd/App'; // Make sure this path points to your App.js
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
