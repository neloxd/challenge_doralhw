import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderPdpProps} from '@app/types/components/headerPDP';
import ShoppingIcon from '@app/assets/icons/shoppingCart.svg';
import BackIcon from '@app/assets/icons/navigation.svg';

import useStyles from './styles';

export const HeaderPDP = ({
  title,
  navigation,
  backIcon = false,
  shoppingIcon = false,
}: HeaderPdpProps) => {
  const styles = useStyles();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {backIcon && (
        <TouchableOpacity onPress={handlePress}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      {shoppingIcon && (
        <TouchableOpacity>
          <ShoppingIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};
