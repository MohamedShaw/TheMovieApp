import {Dimensions, Platform, StatusBar} from 'react-native';

export const decorateHeights =
  Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 60 : 60;

export const {width: windowWidth, height: windowHeight} = Dimensions.get(
  'window',
);
export const {width: screenWidth, height: screenHeight} = Dimensions.get(
  'screen',
);

export const aspectRatio = windowHeight / windowWidth;
