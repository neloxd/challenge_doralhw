import React, {useCallback, useState, memo, forwardRef} from 'react';
import {
  TextInput,
  View,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ActivityIndicator,
} from 'react-native';
import theme from '@app/theme/theme';
import IcSuccess from '@app/assets/icons/ic_check_success.svg';
import IcAlert from '@app/assets/icons/ic_alert.svg';
import {CustomTextInputProps} from '@app/types/components/CustomTextInput';

import ShowPassword from './components/ShowPassword';
import useStyles from './styles';

const CustomTextInput = forwardRef<TextInput, CustomTextInputProps>(
  function CustomTextInput(
    {
      disabled,
      error,
      errorContainerStyle,
      errorStyle,
      inputContainerStyle,
      inputTextStyles,
      label,
      labelStyle,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      placeholderColor,
      secureTextEntry,
      showError,
      style,
      value,
      descriptionRules,
      phoneEntry,
      showLoading,
      valid,
      ...props
    },
    ref,
  ) {
    const styles = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleShowPassword = () =>
      setShowPassword(prevShowPassword => !prevShowPassword);
    const handleFocus = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        if (onFocus) onFocus(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
      },
      [onBlur],
    );

    const borderColorStyle = () => {
      if (isFocused && !showError) return styles.bottomBorderApple;
      if (showError) return styles.bottomBorderRedOrange;
      return {};
    };

    return (
      <View style={[styles.container, style]}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <View
          style={[
            styles.inputContainer,
            borderColorStyle(),
            inputContainerStyle,
          ]}>
          {phoneEntry && <Text style={styles.phone}>{'(+52)'}</Text>}
          <TextInput
            {...props}
            ref={ref}
            editable={!disabled}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChangeText={onChange}
            placeholder={isFocused && value === '' ? placeholder : ''}
            placeholderTextColor={placeholderColor}
            secureTextEntry={secureTextEntry && !showPassword}
            style={[styles.inputStyle, inputTextStyles]}
            value={value}
            testID={label || placeholder}
          />
          {showLoading && <ActivityIndicator />}
          {!showLoading && (
            <View style={styles.containerIcons}>
              {isFocused && !!valid && <IcSuccess />}
              {isFocused && !!showError && <IcAlert />}
              {secureTextEntry && (
                <ShowPassword
                  onShowPassword={handleShowPassword}
                  passwordVisible={showPassword}
                  isFocused={isFocused && !showError}
                  isError={isFocused && !!showError}
                />
              )}
            </View>
          )}
        </View>
        <View style={[styles.descriptionContainer, errorContainerStyle]}>
          {isFocused && !error && !showError && (
            <Text style={styles.rules}>{descriptionRules}</Text>
          )}
          {isFocused && showError && error && (
            <Text style={[styles.error, errorStyle]}>{error}</Text>
          )}
        </View>
      </View>
    );
  },
);

CustomTextInput.defaultProps = {
  allowFontScaling: false,
  autoCapitalize: 'none',
  autoCorrect: false,
  clearButtonMode: 'never',
  disabled: false,
  keyboardType: 'default',
  placeholder: '',
  returnKeyType: 'done',
  underlineColorAndroid: theme.colors.transparent,
};

export default memo(CustomTextInput);
