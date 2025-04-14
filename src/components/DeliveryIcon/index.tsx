import {View, Text} from 'react-native';
import React from 'react';
import {DeliveryIconProps} from '@app/types/components/DeliveryType';
import Margin from '@app/components/Margin';

import useStyles from './styles';

const DeliveryIcon = ({icon, text}: DeliveryIconProps) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <Margin bottom={5} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default DeliveryIcon;
