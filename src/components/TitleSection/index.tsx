/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-03 8:34:21
 * @desc Title Section component with and withouth arrow
 */

import React, {useCallback} from 'react';
import {Pressable, Image, Text, View} from 'react-native';
import iconArrowRight from '@app/assets/icons/ic_arrow_right.png';
import {Props} from '@app/types/components/TitleSection';

import useStyles from './styles';

const TitleSection = ({title, hasArrow, onPress}: Props) => {
  const styles = useStyles();

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.lineDecorator} />
      {hasArrow && (
        <Image
          source={iconArrowRight}
          resizeMode="contain"
          style={styles.arrowRight}
        />
      )}
    </Pressable>
  );
};

export default TitleSection;
