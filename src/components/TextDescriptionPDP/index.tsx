/**
 * @author Leonard Javier Borrego Olivares
 * @email leonard.borregoe@mredb.ee
 * @create date 2023-10-05 8:34:21
 * @desc Text Description PDP
 */
import {View, Text} from 'react-native';
import React from 'react';
import {TextDescriptionPDPProps} from '@app/types/components/TextDescriptionPDP';
import {SCREEN_WIDTH} from '@app/constants/platform';

import useStyles from './styles';

const TextDescriptionPDP = ({title, description}: TextDescriptionPDPProps) => {
  const styles = useStyles();
  return (
    <View style={[styles.container, {width: SCREEN_WIDTH}]}>
      <Text style={styles.title}>{title?.toUpperCase()}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default TextDescriptionPDP;
