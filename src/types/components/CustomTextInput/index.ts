import {TextProps, TextInputProps, TextStyle, ViewProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface CustomTextInputProps extends TextInputProps, TextProps {
  disabled?: boolean;
  error?: boolean | string;
  errorContainerStyle?: ViewProps['style'];
  errorStyle?: TextStyle;
  inputContainerStyle?: ViewProps['style'];
  inputTextStyles?: TextStyle;
  label?: string;
  labelStyle?: TextStyle;
  onBlur?: TextInputProps['onBlur'];
  onChange?(e: any): any;
  onFocus?: TextInputProps['onFocus'];
  placeholder?: string;
  placeholderColor?: string;
  secureTextEntry?: boolean;
  showError?: boolean;
  style?: ViewProps['style'];
  value?: string;
  descriptionRules?: string;
  phoneEntry?: boolean;
  showLoading?: boolean;
  valid?: boolean;
}

export interface SvgIconsProps extends SvgProps {
  firstColorFill: string;
  secondColorFill: string;
}
