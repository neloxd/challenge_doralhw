import {PDPProductSectionProps} from '@app/types/components/PDPProductSection';
import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import ArrowRight from '@app/assets/icons/ArrowRight.svg';
import theme from '@app/theme/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SCREEN_WIDTH} from '@app/constants/platform';
import {SvgUri} from 'react-native-svg';

import useStyles from './styles';

const PDPProductSection = ({
  iconImage,
  text,
  data,
  onPress,
  isCategory,
}: PDPProductSectionProps) => {
  const styles = useStyles();
  const handlePress = useCallback(() => {
    onPress && onPress({data, headerTitle: data?.name!});
  }, [onPress]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.patherContainer, {width: SCREEN_WIDTH - 16}]}>
      <View style={styles.container}>
        {!!data?.navigationIcon && isCategory && (
          <View style={styles.imageLeft}>
            <SvgUri
              width="24"
              height="24"
              uri={data.navigationIcon}
              fill={theme.colors.apple}
            />
          </View>
        )}
        {!!iconImage && <View style={styles.imageLeft}>{iconImage}</View>}
        <Text style={styles.text}>{data?.name || text}</Text>
      </View>
      {!!data && (
        <View>
          <View style={styles.imageRight}>
            <ArrowRight />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PDPProductSection;
