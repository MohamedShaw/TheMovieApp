/**
 * @format
 */

import {Entry} from '@src/navigation/entry';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => Entry);
