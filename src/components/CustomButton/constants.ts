import {ViewStyle, ImageStyle, TextStyle} from 'react-native';

export const VARIANTS = ['primary', 'secondary', 'disabled'];

interface CustomButtonVariants {
  primary?: boolean;
  secondary?: boolean;
}

export interface CustomButtonProps extends CustomButtonVariants {
  onPress: () => void;
  title?: string;
  activeOpacity?: number;
  disabled?: boolean;
  leftIcon?: any;
  iconStyle?: ImageStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
