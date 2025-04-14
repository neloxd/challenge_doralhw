import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';

import {WINDOW_WIDTH} from '@app/constants/platform';

type TabBarIndicatorProps = {
  tabCount: number;
  animatedStyle: StyleProp<ViewStyle>;
  height?: number;
  color?: string;
};

const TabBarIndicator = ({
  tabCount,
  height = 2,
  color = 'red',
  animatedStyle,
}: TabBarIndicatorProps) => (
  <Animated.View
    style={[
      {
        height,
        width: WINDOW_WIDTH / tabCount,
        backgroundColor: color,
        borderRadius: height / 2,
      },
      animatedStyle,
    ]}
  />
);

export default TabBarIndicator;
