import React from 'react';
import {View, TouchableOpacity, ViewStyle} from 'react-native';

import Check from '@app/assets/icons/check.svg';
import UnCheck from '@app/assets/icons/unCheck.svg';

import useStyles from './styles';

interface CheckboxProps {
  label: React.ReactNode;
  isCheck: boolean;
  setIsCheck: (state: boolean) => void;
  iconCheck?: React.JSX.Element;
  iconUnCheck?: React.JSX.Element;
  checkViewStyles?: ViewStyle;
}

const CustomCheckBox = ({
  label,
  isCheck,
  setIsCheck,
  iconCheck = <Check />,
  iconUnCheck = <UnCheck />,
  checkViewStyles,
}: CheckboxProps) => {
  const styles = useStyles();
  const toggleCheckBox = () => {
    setIsCheck(!isCheck);
  };

  return (
    <View style={styles.container}>
      {label}
      <TouchableOpacity
        onPress={toggleCheckBox}
        style={[styles.circle, checkViewStyles]}>
        {isCheck ? iconCheck : iconUnCheck}
      </TouchableOpacity>
    </View>
  );
};

export default CustomCheckBox;
