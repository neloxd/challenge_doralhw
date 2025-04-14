/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-04 10:04:48
 */

import React, {memo, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {getCustomStyles} from '@app/utils/stylesUtils';

import {VARIANTS, CustomButtonProps} from './constants';
import useStyles from './styles';

const CustomButton = (props: CustomButtonProps) => {
  const styles = useStyles();
  const {
    onPress,
    style,
    activeOpacity,
    title,
    leftIcon: LeftIcon,
    iconStyle,
    textStyle,
  } = props;

  const customStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles),
    [props],
  );

  const customTextStyles = useCallback(
    () => getCustomStyles(VARIANTS, props, styles, 'Text'),
    [props],
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, customStyles(), style]}
      activeOpacity={activeOpacity}
      disabled={props.disabled}>
      {LeftIcon && (
        <View style={[styles.leftIconContainer, iconStyle]}>
          <LeftIcon />
        </View>
      )}
      <Text style={[styles.title, customTextStyles(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  activeOpacity: 0.8,
};

export default memo(CustomButton);
