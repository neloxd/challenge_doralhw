import {Platform, Dimensions} from 'react-native';

export const ROOT = 'root';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;

const ScreenDimensions = Dimensions.get('screen');
export const SCREEN_HEIGHT = ScreenDimensions.height;
export const SCREEN_WIDTH = ScreenDimensions.width;
