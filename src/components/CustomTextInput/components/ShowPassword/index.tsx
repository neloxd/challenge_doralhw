import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TouchableOpacityProps} from 'react-native';

import {getColorsFill} from '@app/utils/colorsIconPasswordUtils';

import IconVisible from './assets/IconVisible';
import IconVisibleOff from './assets/IconVisibleOff';
import useStyles from './styles';

interface ShowPasswordProps {
  onShowPassword: TouchableOpacityProps['onPress'];
  passwordVisible: boolean;
  isFocused: boolean;
  isError: boolean;
}

const ShowPassword = ({
  onShowPassword,
  passwordVisible,
  isFocused,
  isError,
}: ShowPasswordProps) => {
  const styles = useStyles();
  const colors = getColorsFill(isFocused, isError);

  return (
    <TouchableOpacity onPress={onShowPassword} style={styles.container}>
      {passwordVisible ? (
        <IconVisible {...colors} />
      ) : (
        <IconVisibleOff {...colors} />
      )}
    </TouchableOpacity>
  );
};

export default ShowPassword;
